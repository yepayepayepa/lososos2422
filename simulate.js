import { PFPFactory } from "./pfp.js";
import losOsosSchema from "./2422.js";
import pseudorandom from "./pseudorandom.js";


const getRandomOperation = () => {
    let alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    return "oo" + Array(49).fill(0).map(_=>alphabet[(Math.random()*alphabet.length)|0]).join('')
}



// Schema analysis
let totalCombinations = 1;
for(let i = 0; i < losOsosSchema.layers.length; i++) {
    let combinationsInLayer = 0;
    for(let j = 0; j < losOsosSchema.layers[i].features.length; j++) {
        if(losOsosSchema.layers[i].features[j].type !== "options") {
            combinationsInLayer++;
        } else {
            combinationsInLayer += losOsosSchema.layers[i].features[j].options.length;
        }
    }
    console.log("Options for " + losOsosSchema.layers[i].name + ": " + combinationsInLayer);
    totalCombinations *= combinationsInLayer;
}
console.log("Total combinations: " + totalCombinations);

const features = [];
for(let i = 0; i < 2422; i++) {
    const hash = getRandomOperation()
    pseudorandom.seed(hash);
    const factory = new PFPFactory(losOsosSchema);

    // Build the PFP with debug enabled 
    features.push(factory.plan(false));
}


const analytics = {};
for(let i = 0; i < features.length; i++) {
    const keys = Object.keys(features[i]);
    for(let j = 0; j < keys.length; j++) {
        if(typeof(analytics[keys[j]]) === "undefined") {
            analytics[keys[j]] = {};
        }
        const analyticsEntry = analytics[keys[j]];
        const featureValue = features[i][keys[j]];
        if(typeof(analyticsEntry[featureValue]) === "undefined") {
            analyticsEntry[featureValue] = 1;
        } else {
            analyticsEntry[featureValue]++;            
        }
    }
}
console.log(analytics);

import reader from 'xlsx';
const wb = reader.utils.book_new();
wb.SheetNames.push('lososos2422')
const ws = reader.utils.json_to_sheet(features)
wb.Sheets['lososos2422'] = ws;

reader.writeFile(wb,'./lososos2422_simulation.xlsx')
