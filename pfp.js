class PFPFactory {
    constructor(schema) {
        this.schema = schema;
    }

    plan() {
        const featurePlan = {};

        const layers = this.schema.layers;

        for (let i = 0; i < layers.length; i++) {
            const category = layers[i];

            const options = category.features.reduce((result, current) => {
                result.picks.push(current.name);
                result.weights.push(current.chance !== undefined ? current.chance : 1);
                return result;
            }, { picks: [], weights: [] });

            featurePlan[category.name] = pseudorandom.weightedPick(options.picks, options.weights);
        }

        return featurePlan;
    }

    addFeature(pfp, feature, category) {

        switch(feature.type) {

            case undefined:
            case PFP.ASSET_FRONT:
                if(feature.asset === undefined && feature.assets === undefined) {
                    throw "The feature " + feature.name + " must have an asset associated with it.";
                }
                if(feature.asset !== undefined) {
                    pfp.addAsset(new PFPImageAsset(feature.name, feature.asset, this.schema.canvas, feature.level || category.level));
                }
                if(typeof feature.assets === "object") {
                    let currentLevel =  feature.level || category.level;
                    for (let i = 0; i < feature.assets.length; i++) {
                        const asset = feature.assets[i];
                        pfp.addAsset(new PFPImageAsset(feature.name, asset, this.schema.canvas, currentLevel++));
                    }
                }
            break;

            // Do nothing
            default:
            case PFP.ASSET_EMPTY:
            break;

            case PFP.ASSET_BACK:
                if(feature.asset === undefined) {
                    throw "The feature " + feature.name + " must have an asset associated with it.";
                }
                pfp.addAsset(new PFPImageAsset(feature.name, feature.asset, this.schema.canvas, category.level * -1));
            break;

            case PFP.ASSET_DUAL:
                if(feature.assets === undefined) {
                    throw "The feature " + feature.name + " must have assets associated with it.";
                }
                if(feature.assets.length < 2) {
                    throw "The feature " + feature.name + " must have two assets associated with it.";
                }
                let assetLevel =  feature.level || category.level;
                for (let i = 0; i < feature.assets.length; i++) {
                    const asset = feature.assets[i];
                    const order = i % 2 ? -1 : 1;
                    pfp.addAsset(new PFPImageAsset(feature.name, asset, this.schema.canvas, assetLevel++ * order));
                }
            break;

            case PFP.ASSET_OPTIONS:
                if(feature.options === undefined || feature.options.length < 1) {
                    throw "The feature " + feature.name + " must have options associated with it.";
                }
                const choice = pseudorandom.integer(0, feature.options.length - 1);
                this.addFeature(pfp, { ...feature, ...feature.options[choice]}, category);
            break;

        }

    }

    build(featurePlan) {
        const pfp = new PFP();
        const catKeys = Object.keys(featurePlan);
        for (let i = 0; i < catKeys.length; i++) {
            const catName = catKeys[i];
            const category = this.schema.layers.find(f => f.name == catName);
            
            const matches = (category.features.filter(f => f.name == featurePlan[catName]));

            for (let j = 0; j < matches.length; j++) {
                const feature = matches[j];
                
                this.addFeature(pfp, feature, category);
            }
        }
        
        return pfp;
    }
}

class PFPImageAsset {
    constructor(name, asset, canvas, level) {
        this.name = name;
        this.level = level;
        this.canvas = canvas;

        if(typeof asset === "string") {
            this.asset = {
                x: 0,
                y: 0,
                ...canvas,
                image: loadImage(asset),
            }
        }

        if(typeof asset === "object") {
            this.asset = {
                x: 0,
                y: 0,
                ...canvas,
                ...asset,
                image: loadImage(asset.image),
            }
        }
    }

    draw(tintColor) {
        const unit = max(this.canvas.width, this.canvas.height);

        const wc = (this.asset.width / unit);
        const hc = (this.asset.height / unit);
        const marginx = ((1 - (this.canvas.width / unit)) / 2);
        const marginy = ((1 - (this.canvas.height / unit)) / 2);

        const xc = marginx + ((this.asset.x) / unit);
        const yc = marginy + ((this.asset.y) / unit);
        
        if(this.asset.tinted && tintColor !== undefined) {
            tint(tintColor);
        }
        image(this.asset.image, dimensionlessx(xc), dimensionlessy(yc), dimensionless(wc), dimensionless(hc));
        noTint();
    }
}


class PFP {
    static ASSET_EMPTY = "empty";
    static ASSET_FRONT = "front";
    static ASSET_BACK = "back";
    static ASSET_DUAL = "dual";

    static ASSET_OPTIONS = "multiple";

    constructor() {
        this.assets = [];
    }

    addAsset(asset) {
        this.assets.push(asset);
    }

    draw(tintColor) {
        // When assets are ordered they become layers
        const layers = (this.assets.sort((a, b) => a.level - b.level));
        layers.forEach(layer => layer.draw(tintColor));
    }
}