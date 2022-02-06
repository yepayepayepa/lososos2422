const DISTRICT = "District";
const SPECIES = "Species";
const FACIAL_HAIR = "Facial hair";
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


const FACIAL_HAIR_NO = "No";
const FACIAL_HAIR_UNSHAVED = "Unshaved";
const FACIAL_HAIR_MOUSTACHE = "Moustache";
const FACIAL_HAIR_BEARD = "Beard";


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
const MOUTH_SMILE = "Smile";
const MOUTH_OK = "OK";
const MOUTH_PARTY_HORN = "Party horn";
const MOUTH_TONGUE_OUT = "Tongue out";


const HEADWEAR_NONE = "None";
const HEADWEAR_BLUE_PUNK = "Blue punk";
const HEADWEAR_PINK_PUNK = "Pink punk";
const HEADWEAR_PARTY_HAT = "Party hat";
const HEADWEAR_INKA_HAT = "Inka hat";
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
const HEADWEAR_SAMURAI_HAT = "Samurai hat";
const HEADWEAR_WELDING_MASK = "Welding mask";
const HEADWEAR_BASEBALL_CAP = "Baseball cap";


const EYEWEAR_NONE = "None";
const EYEWEAR_GLASSES = "Glasses";
const EYEWEAR_SUNGLASSES = "Sunglasses";
const EYEWEAR_NINJA_BAND = "Ninja band";
const EYEWEAR_SLEEP_MASK = "Sleep mask";
const EYEWEAR_STRIPED_GLASSES = "Striped glasses";


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
                    assets: ["assets/district_indigo.png", "assets/district_texture.png"],
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
        //         { 
        //             name: OCCUPATION_ATHLETE, 
        //             asset: "assets/species_black.png",
        //         },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_CREATOR, 
                    assets: [ "assets/occupation_creator.png", "assets/occupation_creator_back.png" ]
                },
        //         { 
        //             name: OCCUPATION_CITIZEN, 
        //             asset: "assets/species_black.png",
        //         },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_ENGINEER, 
                    assets: [ "assets/occupation_engineer.png", "assets/occupation_engineer_back.png" ]
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_EXPLORER, 
                    assets: [ "assets/occupation_explorer.png", "assets/occupation_explorer_back.png" ]
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_SCIENTIST, 
                    assets: [ "assets/occupation_scientist.png", "assets/occupation_scientist_back.png" ]
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_FARMER, 
                    assets: [ "assets/occupation_farmer.png", "assets/occupation_farmer_back.png" ]
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
                            chance: 2,
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "assets/occupation_fisher2.png", "assets/occupation_fisher2_back.png" ],
                            chance: 2,
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
                    name: HEADWEAR_BLUE_PUNK, 
                    asset: "assets/headwear_blue_punk.png",
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
                    assets: [ "assets/headwear_inka_hat.png", "assets/headwear_inka_hat_back.png" ]
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
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_CHICKEN_MASK, 
                    assets: [ "assets/headwear_chicken_mask.png", "assets/headwear_chicken_mask_back.png" ]
                },
                { 
                    type: PFP.ASSET_BACK,
                    name: HEADWEAR_BASQUIAT_HAIRDO, 
                    asset: "assets/headwear_basquiat_hairdo.png",
                },
                // { 
                //     name: HEADWEAR_BEEKEEPER, 
                //     asset: "assets/species_black.png",
                // },
                // { 
                //     name: HEADWEAR_SPACE_HELMET, 
                //     asset: "assets/species_black.png",
                //     chance: 0,
                // },
                // { 
                //     name: HEADWEAR_SAMURAI_HAT, 
                //     asset: "assets/species_black.png",
                //     chance: 0,
                // },
                // { 
                //     name: HEADWEAR_WELDING_MASK, 
                //     asset: "assets/species_black.png",
                //     chance: 0,
                // },
                // { 
                //     name: HEADWEAR_BASEBALL_CAP, 
                //     asset: "assets/species_black.png",
                //     chance: 0,
                // },
            ],
        },
        {    
            name: EYES,
            level: 300,
            features: [
                { 
                    name: EYES_BLACK, 
                    asset: "assets/eyes_black.png",
                },
                { 
                    name: EYES_BLUE, 
                    asset: "assets/eyes_blue.png",
                },
                { 
                    name: EYES_BROWN, 
                    asset: "assets/eyes_brown.png",
                },
                { 
                    name: EYES_GREEN, 
                    asset: "assets/eyes_green.png",
                },
                { 
                    name: EYES_HETEROCHROMATIC, 
                    asset: "assets/eyes_heterochromatic.png",
                },
                { 
                    name: EYES_LASER, 
                    asset: "assets/eyes_laser.png",
                    level: 800,
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
                },
                { 
                    name: MOUTH_WHEAT_STRAW, 
                    asset: "assets/mouth_wheat_straw.png",
                },
                { 
                    name: MOUTH_CONFUSED, 
                    asset: "assets/mouth_confused.png",
                },
                { 
                    name: MOUTH_BAMBOO, 
                    asset: "assets/mouth_bamboo.png",
                },
                { 
                    name: MOUTH_RECORD, 
                    asset: "assets/mouth_record.png",
                },
                { 
                    name: MOUTH_SALMON, 
                    asset: "assets/mouth_salmon.png",
                },
                { 
                    name: MOUTH_SMILE, 
                    asset: "assets/mouth_smile.png",
                },
                { 
                    name: MOUTH_OK, 
                    asset: "assets/mouth_ok.png",
                },
                // { 
                //     name: MOUTH_PARTY_HORN, 
                //     asset: "assets/species_black.png",
                //     chance: 0,
                // },
                // { 
                //     name: MOUTH_TONGUE_OUT, 
                //     asset: "assets/species_black.png",
                //     chance: 0,
                // },
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
                    type: PFP.ASSET_DUAL,
                    name: EYEWEAR_NINJA_BAND, 
                    assets: [ "assets/eyewear_ninja_band.png", "assets/eyewear_ninja_band_back.png" ]
                },
                { 
                    name: EYEWEAR_SLEEP_MASK, 
                    asset: "assets/eyewear_sleep_mask.png",
                    level: 810,
                },
                // { 
                //     name: EYEWEAR_STRIPED_GLASSES, 
                //     asset: "assets/eyewear_striped_glasses.png",
                //     chance: 0,
                // },
            ],
        },
        {    
            name: FACIAL_HAIR,
            level: 100,
            features: [
                { 
                    type: PFP.ASSET_EMPTY,
                    name: FACIAL_HAIR_NO, 
                },
                { 
                    name: FACIAL_HAIR_UNSHAVED, 
                    asset: "assets/facial_hair_unshaved.png",
                },
                // { 
                //     name: FACIAL_HAIR_MOUSTACHE, 
                //     asset: "assets/species_black.png",
                //     chance: 0,
                // },
                // { 
                //     name: FACIAL_HAIR_BEARD, 
                //     asset: "assets/species_black.png",
                //     chance: 0,
                // },
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