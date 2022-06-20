const DISTRICT = "District";
const SPECIES = "Species";
const OCCUPATION = "Occupation";
const HEADWEAR = "Headwear";
const EYES = "Eyes";
const MOUTH = "Mouth";
const EYEWEAR = "Eyewear";
const BLING = "Bling";


const DISTRICT_BLUE = "Blue";
const DISTRICT_GREEN = "Green";
const DISTRICT_RED = "Red";
const DISTRICT_YELLOW = "Yellow";
const DISTRICT_BLACK = "Black";
const DISTRICT_PURPLE = "Purple";
const DISTRICT_INDIGO = "Indigo";


const SPECIES_BLACK = "Black";
const SPECIES_GRIZZLY = "Grizzly";
const SPECIES_PANDA = "Panda";
const SPECIES_POLAR = "Polar";



const OCCUPATION_FARMER = "Farmer";
const OCCUPATION_FISHER = "Fisher";
const OCCUPATION_ATHLETE = "Athlete";
const OCCUPATION_SCIENTIST = "Scientist";
const OCCUPATION_CREATOR = "Creator";
const OCCUPATION_ENGINEER = "Engineer";
const OCCUPATION_EXPLORER = "Explorer";
const OCCUPATION_INVESTOR = "Investor";
const OCCUPATION_CITIZEN = "Citizen";
const OCCUPATION_FELON = "Felon";
const OCCUPATION_NINJA = "Ninja";
const OCCUPATION_LUCHADOR = "Luchador";


const EYES_BLACK = "Black";
const EYES_BLUE = "Blue";
const EYES_BROWN = "Brown";
const EYES_GREEN = "Green";
const EYES_HETEROCHROMATIC = "Heterochromatic";
const EYES_LASER = "Laser eyes";


const MOUTH_BUBBLE_GUM = "Bubble gum";
const MOUTH_WHEAT_STRAW = "Wheat straw";
const MOUTH_CONFUSED = "Confused";
const MOUTH_BAMBOO = "Bamboo";
const MOUTH_RECORD = "Record";
const MOUTH_SALMON = "Salmon";
const MOUTH_EVIL = "Evil";
const MOUTH_OK = "OK";
const MOUTH_SMILE = "Smile";
const MOUTH_ARTNOME = "Artnome";
const MOUTH_TONGUE_OUT = "Tongue out";


const HEADWEAR_NONE = "None";
const HEADWEAR_BLUE_PUNK = "Blue punk";
const HEADWEAR_PINK_PUNK = "Pink punk";
const HEADWEAR_PARTY_HAT = "Party hat";
const HEADWEAR_ENGINEER = "Hard hat";
const HEADWEAR_INKA_HAT = "Inka hat";
const HEADWEAR_KASA = "Kasa";
const HEADWEAR_RCS = "Right Click Save";
const HEADWEAR_SWIMMING_CAP = "Swimming cap";
const HEADWEAR_BEANIE = "Beanie";
const HEADWEAR_CAT_EARS = "Cat ears";
const HEADWEAR_BUNNY_EARS = "Bunny ears";
const HEADWEAR_CROWN = "Crown";
const HEADWEAR_FISHER_HAT = "Fisher hat";
const HEADWEAR_CAPTAIN_HAT = "Captain hat";
const HEADWEAR_CHICKEN_MASK = "Chicken mask";
const HEADWEAR_BASQUIAT_HAIRDO = "Basquiat hairdo";
const HEADWEAR_SPACE_HELMET = "Space helmet";
const HEADWEAR_BEEKEEPER = "Beekeeper";


const EYEWEAR_NONE = "None";
const EYEWEAR_GLASSES = "Glasses";
const EYEWEAR_SUNGLASSES = "Sunglasses";
const EYEWEAR_NINJA_BAND = "Ninja band";
const EYEWEAR_SLEEP_MASK = "Sleep mask";
const EYEWEAR_STRIPED_GLASSES = "Striped glasses";
const EYEWEAR_SPACE_GLASSES = "Space glasses";
const EYEWEAR_LUCHADOR = "Luchador";
const EYEWEAR_CLOWNVAMP = "Clownvamp";
const EYEWEAR_NFTBIKER = "NFTBiker";

const BLING_NONE = "None";
const BLING_SILVER = "Silver";
const BLING_GOLD = "Gold";
const BLING_ICE = "Ice";
const BLING_ICE_GOLD = "Ice and gold";


losOsosSchema = {
    canvas: {
        width: 1488,
        height: 1800,
    },
    layers: [
        {
            name: DISTRICT,
            level: -1000,
            features: [
                {
                    name: DISTRICT_BLUE,   
                    assets: ["assets/district_blue.png", "assets/district_texture.png"],
                },
                {
                    name: DISTRICT_GREEN, 
                    assets: ["assets/district_green.png", "assets/district_texture.png"],
                },
                {
                    name: DISTRICT_RED,   
                    assets: ["assets/district_red.png", "assets/district_texture.png"],
                },
                {
                    name: DISTRICT_YELLOW,   
                    assets: ["assets/district_yellow.png", "assets/district_texture.png"],
                },
                {
                    name: DISTRICT_BLACK,   
                    assets: ["assets/district_black.png", "assets/district_texture.png"],
                },
                {
                    name: DISTRICT_PURPLE,   
                    assets: ["assets/district_purple.png", "assets/district_texture.png"],
                },
                {
                    name: DISTRICT_INDIGO,   
                    assets: ["assets/district_gray.png", "assets/district_texture.png"],
                }
            ]
        },
        {
            name: SPECIES,
            level: 0,
            features: [
                { 
                    name: SPECIES_BLACK,   
                    asset: "assets/species_black.png",
                },
                { 
                    name: SPECIES_GRIZZLY, 
                    asset: "assets/species_grizzly.png",
                },
                { 
                    name: SPECIES_PANDA,   
                    asset: "assets/species_panda.png",
                },
                { 
                    name: SPECIES_POLAR,   
                    asset: "assets/species_polar.png",
                },
            ]
        },
        {    
            name: OCCUPATION,
            level: 200,
            features: [
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_LUCHADOR,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/occupation_luchador1.png", "assets/occupation_luchador2_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/occupation_luchador2.png", "assets/occupation_luchador2_back.png" ],
                        },
                    ] 
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_ATHLETE,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/occupation_racer.png", "assets/occupation_racer_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/occupation_racer.png", "assets/occupation_racer_back.png" ],
                        },
                    ] 
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_CREATOR, 
                    assets: [ "assets/occupation_creator.png", "assets/occupation_creator_back.png" ]
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_CITIZEN,
                    chance: 4,
                    options: [
                        // The first option for the citizen is a t-shirt
                        {
                            type: PFP.ASSET_OPTIONS,
                            options: [ {
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "assets/occupation_citizen1.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen1_back.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen1_buttons.png",
                                    tinted: false,
                                } ],
                            },
                            {
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "assets/occupation_citizen1.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen1_back.png",
                                    tinted: true,
                                },{
                                    image: "assets/occupation_citizen1_bananas.png",
                                    tinted: false,
                                } ],
                            },
                            {
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "assets/occupation_citizen1.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen1_back.png",
                                    tinted: true,
                                },{
                                    image: "assets/occupation_citizen1_smolskullz.png",
                                    tinted: false,
                                } ],
                            }],
                        },
                        // The second option for the citizen is a hoodie
                        {
                            type: PFP.ASSET_OPTIONS, 
                            options: [ {
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "assets/occupation_citizen2.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen2_back.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen2_wgmi.png",
                                    tinted: false,
                                } ],
                            },{
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "assets/occupation_citizen2.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen2_back.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen2_rare.png",
                                    tinted: false,
                                } ],
                            },{
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "assets/occupation_citizen2.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen2_back.png",
                                    tinted: true,
                                },{
                                    image: "assets/occupation_citizen2_gm.png",
                                    tinted: false,
                                } ],
                            },
                            {
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "assets/occupation_citizen2.png",
                                    tinted: true,
                                }, {
                                    image: "assets/occupation_citizen2_back.png",
                                    tinted: true,
                                },{
                                    image: "assets/occupation_citizen2_gn.png",
                                    tinted: false,
                                } ],
                            }],                            
                        },
                    ] 
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_ENGINEER, 
                    assets: [ "assets/occupation_engineer.png", "assets/occupation_engineer_back.png" ]
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_EXPLORER, 
                    assets: [ {
                        image: "assets/occupation_explorer.png",
                        tinted: false,
                    }, {
                        image: "assets/occupation_explorer_back.png",
                        tinted: false,
                    } ]
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_SCIENTIST, 
                    assets: [ "assets/occupation_scientist.png", "assets/occupation_scientist_back.png" ]
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_FARMER,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/occupation_farmer1.png", "assets/occupation_farmer1_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/occupation_farmer2.png", "assets/occupation_farmer2_back.png" ],
                            level: 860,
                        },
                    ] 
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_FELON, 
                    assets: [ "assets/occupation_felon.png", "assets/occupation_felon_back.png" ]
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_FISHER,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/occupation_fisher1.png", "assets/occupation_fisher1_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/occupation_fisher2.png", "assets/occupation_fisher2_back.png" ],
                        },
                    ] 
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_INVESTOR, 
                    assets: [ "assets/occupation_investor.png", "assets/occupation_investor_back.png" ]
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_NINJA, 
                    assets: [ "assets/occupation_ninja.png", "assets/occupation_ninja_back.png" ]
                },
            ],
        },
        {    
            name: HEADWEAR,
            level: 500,
            features: [
                { 
                    type: PFP.ASSET_EMPTY,
                    name: HEADWEAR_NONE, 
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_BEEKEEPER, 
                    assets: [ "assets/headwear_beekeeper.png", "assets/headwear_beekeeper_back.png" ],
                    chance: 0.6,
                    level: 815,
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_ENGINEER, 
                    assets: [ "assets/headwear_engineer.png", "assets/headwear_engineer_back.png" ],
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_KASA, 
                    assets: [ "assets/headwear_kasa.png", "assets/headwear_kasa_back.png" ],
                    level: 395,
                },
                {
                    type: PFP.ASSET_OPTIONS,
                    name: HEADWEAR_RCS, 
                    options: [
                        {
                            type: PFP.ASSET_FRONT,
                            asset: "assets/headwear_rcs.png",
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/headwear_rcs.png", "assets/headwear_artnome.png" ],
                        },
                    ],
                },
                { 
                    name: HEADWEAR_BLUE_PUNK, 
                    asset: "assets/headwear_blue_punk.png",
                    chance: 0.5,
                },
                { 
                    name: HEADWEAR_PINK_PUNK, 
                    asset: "assets/headwear_pink_punk.png",
                },
                { 
                    name: HEADWEAR_PARTY_HAT, 
                    asset: "assets/headwear_party_hat.png",
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_INKA_HAT, 
                    assets: [ 
                        {
                            image: "assets/headwear_inka_hat.png",
                            tinted: true,
                        },
                        {
                            image: "assets/headwear_inka_hat_back.png",
                            tinted: true,
                        }
                    ]
                },
                { 
                    name: HEADWEAR_SWIMMING_CAP, 
                    asset: "assets/headwear_swimming_cap.png",
                },
                { 
                    name: HEADWEAR_BEANIE, 
                    asset: "assets/headwear_beanie.png",
                },
                { 
                    name: HEADWEAR_CAT_EARS, 
                    asset: "assets/headwear_cat_ears.png",
                },
                { 
                    name: HEADWEAR_BUNNY_EARS, 
                    asset: "assets/headwear_bunny_ears.png",
                },
                { 
                    name: HEADWEAR_CROWN, 
                    asset: "assets/headwear_crown.png",
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_FISHER_HAT,
                    assets: [ "assets/headwear_fisher_hat.png", "assets/headwear_fisher_hat_back.png" ]
                },
                { 
                    name: HEADWEAR_CAPTAIN_HAT, 
                    asset: "assets/headwear_captain_hat.png",
                    level: 805,
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: HEADWEAR_SPACE_HELMET, 
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/headwear_space_helmet_golden.png", "assets/headwear_space_helmet_back.png", "assets/headwear_space_helmet_cover.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/headwear_space_helmet_red_dot.png", "assets/headwear_space_helmet_back.png", "assets/headwear_space_helmet_cover.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/headwear_space_helmet_green.png", "assets/headwear_space_helmet_back.png", "assets/headwear_space_helmet_cover.png" ],
                        },
                    ],
                    level: 850,
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_CHICKEN_MASK, 
                    assets: [ "assets/headwear_chicken_mask.png", "assets/headwear_chicken_mask_back.png" ]
                },
                { 
                    type: PFP.ASSET_BACK,
                    name: HEADWEAR_BASQUIAT_HAIRDO, 
                    asset: "assets/headwear_basquiat_hairdo.png",
                },
            ],
        },
        {    
            name: EYES,
            level: 300,
            features: [
                { 
                    name: EYES_BLACK, 
                    asset: "assets/eyes_black.png",
                    chance: 25
                },
                { 
                    name: EYES_BROWN, 
                    asset: "assets/eyes_brown.png",
                    chance: 25
                },
                { 
                    name: EYES_GREEN, 
                    asset: "assets/eyes_green.png",
                    chance: 20
                },
                { 
                    name: EYES_BLUE, 
                    asset: "assets/eyes_blue.png",
                    chance: 15
                },
                { 
                    name: EYES_HETEROCHROMATIC, 
                    asset: "assets/eyes_heterochromatic.png",
                    chance: 10
                },
                { 
                    name: EYES_LASER, 
                    asset: "assets/eyes_laser.png",
                    level: 900,
                    chance: 5
                },
            ],
        },
        {    
            name: MOUTH,
            level: 400,
            features: [
                { 
                    name: MOUTH_BUBBLE_GUM, 
                    asset: "assets/mouth_bubble_gum.png",
                    level: 505,
                },
                { 
                    name: MOUTH_WHEAT_STRAW, 
                    asset: "assets/mouth_wheat_straw.png",
                    level: 380,
                },
                { 
                    name: MOUTH_CONFUSED, 
                    asset: "assets/mouth_confused.png",
                    level: 380,
                },
                { 
                    name: MOUTH_BAMBOO, 
                    asset: "assets/mouth_bamboo.png",
                },
                { 
                    name: MOUTH_RECORD, 
                    assets: [
                        "assets/mouth_record.png",
                        {
                            image: "assets/mouth_record_label.png",
                            tinted: true,
                        },
                    ],
                },
                { 
                    name: MOUTH_SALMON, 
                    asset: "assets/mouth_salmon.png",
                },
                { 
                    name: MOUTH_ARTNOME, 
                    asset: "assets/mouth_artnome.png",
                    level: 380,
                },
                { 
                    name: MOUTH_EVIL, 
                    asset: "assets/mouth_smile.png",
                    level: 380,
                },
                { 
                    name: MOUTH_OK, 
                    asset: "assets/mouth_ok.png",
                    level: 380,
                },
                { 
                    name: MOUTH_SMILE, 
                    asset: "assets/mouth_smile.png",
                    level: 380,
                },
                { 
                    name: MOUTH_TONGUE_OUT, 
                    asset: "assets/mouth_tongue_out.png",
                    level: 380,
                },
            ],
        },
        {    
            name: EYEWEAR,
            level: 600,
            features: [
                { 
                    type: PFP.ASSET_EMPTY,
                    name: EYEWEAR_NONE, 
                },
                { 
                    name: EYEWEAR_GLASSES, 
                    asset: "assets/eyewear_glasses.png",
                },
                { 
                    name: EYEWEAR_SUNGLASSES, 
                    asset: "assets/eyewear_sunglasses.png",
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: EYEWEAR_SPACE_GLASSES, 
                    options: [{
                            type: PFP.ASSET_FRONT,
                            asset:  { 
                                image: "assets/eyewear_space_glasses.png",
                                tinted: true,
                            },
                        },{
                            type: PFP.ASSET_FRONT,
                            asset:  { 
                                image: "assets/eyewear_space_glasses.png",
                                tinted: false,
                            },
                        }
                    ]
                    
                },
                {
                    type: PFP.ASSET_DUAL,
                    name: EYEWEAR_NINJA_BAND, 
                    assets: [ "assets/eyewear_ninja_band.png", "assets/eyewear_ninja_band_back.png" ],
                },
                { 
                    name: EYEWEAR_SLEEP_MASK, 
                    asset: "assets/eyewear_sleep_mask.png",
                },
                { 
                    name: EYEWEAR_STRIPED_GLASSES, 
                    asset: {
                        image: "assets/eyewear_striped_glasses.png",
                        tinted: true,
                    },
                },
                { 
                    type: PFP.ASSET_FRONT,
                    name: EYEWEAR_LUCHADOR, 
                    asset: "assets/eyewear_luchador.png",
                    level: 390,
                },
                {   
                    type: PFP.ASSET_DUAL,
                    name: EYEWEAR_CLOWNVAMP, 
                    assets: [ "assets/eyewear_clownvamp.png", "assets/eyewear_clownvamp_back.png" ],
                    level: 390,
                    chance: 0.1,
                },
                {
                    type: PFP.ASSET_FRONT,
                    name: EYEWEAR_NFTBIKER, 
                    asset: "assets/eyewear_nftbiker.png",
                    level: 390,
                    chance: 0.1,
                },
            ],
        },
        {    
            name: BLING,
            level: 700,
            features: [
                { 
                    type: PFP.ASSET_EMPTY,
                    name: BLING_NONE,     
                    chance: 83 
                },
                { 
                    name: BLING_SILVER,   
                    asset: "assets/bling_silver.png", 
                    chance: 5 
                },
                { 
                    name: BLING_GOLD,     
                    asset: "assets/bling_gold.png", 
                    chance: 3 
                },
                { 
                    name: BLING_ICE,      
                    asset: "assets/bling_ice.png", 
                    chance: 2 
                },
                { 
                    name: BLING_ICE_GOLD, 
                    assets: ["assets/bling_ice.png", "assets/bling_gold.png"],
                    chance: 1 
                },
            ]
        },
    ]
};