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
const OCCUPATION_ARTIST = "Artist";
const OCCUPATION_ENGINEER = "Engineer";
const OCCUPATION_EXPLORER = "Explorer";
const OCCUPATION_INVESTOR = "Investor";
const OCCUPATION_CITIZEN = "Collector";
const OCCUPATION_FELON = "Felon";
const OCCUPATION_NINJA = "Ninja";
const OCCUPATION_LUCHADOR = "Luchador";


const EYES_NORMAL = "Normal";
const EYES_SURPRISED = "Surprised";
const EYES_SERIOUS = "Serious";
const EYES_SQUINT = "Squint";
const EYES_LASER = "Laser";


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
const MOUTH_SNORKEL = "Snorkel";
const MOUTH_TONGUE_OUT = "Tongue out";
const MOUTH_DANGEROUS = "Dangerous";
const MOUTH_EATING_BERRIES = "Eating berries";
const MOUTH_SURPRISED = "Surprised";
const MOUTH_LOLLIPOP = "Lollipop";


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
const HEADWEAR_RYANS_OWL = "Ryan's owl";
const HEADWEAR_KARATE_BAND = "Karate headband";
const HEADWEAR_ZANCAN_BAND = "Zancan headband";
const HEADWEAR_BASQUIAT_HAIRDO = "Basquiat hairdo";
const HEADWEAR_SPACE_HELMET = "Space helmet";
const HEADWEAR_BEEKEEPER = "Beekeeper";
const HEADWEAR_YAZID = "Yazid hairdo";
const HEADWEAR_PUNEVYR_CAP = "Punevyr cap";


const EYEWEAR_GLASSES = "Glasses";
const EYEWEAR_ANONYMOUS = "Anonymous";
const EYEWEAR_SUNGLASSES = "Sunglasses";
const EYEWEAR_NINJA_BAND = "Ninja band";
const EYEWEAR_SLEEP_MASK = "Sleep mask";
const EYEWEAR_SNORKEL = "Snorkel";
const EYEWEAR_STRIPED_GLASSES = "Striped glasses";
const EYEWEAR_SPACE_GLASSES = "Space glasses";
const EYEWEAR_LUCHADOR = "Luchador";
const EYEWEAR_ORTH = "Lisa Orth glasses"
const EYEWEAR_3D = "3D glasses"
const EYEWEAR_HEARTS = "Hearts"
const EYEWEAR_MAXCAPACITY = "MaxCapacity glasses"
const EYEWEAR_MONOCLE = "Monocle"

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
    tints: ["#20e761", "#e60d0d", "#f5d10a", "#46e3ff", "#ff56c5", "#9a04fc"],
    layers: [
        {
            name: SPECIES,
            level: 0,
            features: [
                { 
                    name: SPECIES_BLACK,   
                    asset: "./assets/species_black.png",
                },
                { 
                    name: SPECIES_GRIZZLY, 
                    asset: "./assets/species_grizzly.png",
                },
                { 
                    name: SPECIES_PANDA,   
                    asset: "./assets/species_panda.png",
                },
                { 
                    name: SPECIES_POLAR,   
                    asset: "./assets/species_polar.png",
                },
            ]
        },
        {
            name: DISTRICT,
            level: -1000,
            features: [
                {
                    name: DISTRICT_BLUE,   
                    assets: ["./assets/district_blue.png", "./assets/district_texture.png"],
                },
                {
                    name: DISTRICT_GREEN, 
                    assets: ["./assets/district_green.png", "./assets/district_texture.png"],
                },
                {
                    name: DISTRICT_RED,   
                    assets: ["./assets/district_red.png", "./assets/district_texture.png"],
                },
                {
                    name: DISTRICT_YELLOW,   
                    assets: ["./assets/district_yellow.png", "./assets/district_texture.png"],
                },
                {
                    name: DISTRICT_BLACK,   
                    assets: ["./assets/district_black.png", "./assets/district_texture.png"],
                },
                {
                    name: DISTRICT_PURPLE,   
                    assets: ["./assets/district_purple.png", "./assets/district_texture.png"],
                },
                {
                    name: DISTRICT_INDIGO,   
                    assets: ["./assets/district_gray.png", "./assets/district_texture.png"],
                }
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
                            assets: [ "./assets/occupation_luchador1.png", "./assets/occupation_luchador2_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_luchador2.png", "./assets/occupation_luchador2_back.png" ],
                        },
                    ] 
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_ATHLETE,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_racer.png", "./assets/occupation_racer_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_mufc.png", "./assets/occupation_mufc_back.png" ],
                        },
                    ],
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_ARTIST, 
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_thehillside.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_andreasgysin.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_nirvana.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_fxhash.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_punevyr.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator_mapan.png", "./assets/occupation_creator_mapan_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator_mapan.png", "./assets/occupation_creator_mapan_back.png", "./assets/occupation_creator_mapan_top.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator_yazid.png", "./assets/occupation_creator_yazid_back.png" ],
                        },
                    ],
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_CITIZEN,
                    options: [
                        // The first option for the citizen is a shirt
                        {
                            type: PFP.ASSET_OPTIONS,
                            options: [{
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "./assets/occupation_citizen1.png",
                                    tint: true,
                                }, {
                                    image: "./assets/occupation_citizen1_back.png",
                                    tint: true,
                                },{
                                    image: "./assets/occupation_citizen1_bananas.png",
                                    tinted: false,
                                } ],
                            },
                            {
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "./assets/occupation_citizen1.png",
                                    tint: true,
                                }, {
                                    image: "./assets/occupation_citizen1_back.png",
                                    tint: true,
                                },{
                                    image: "./assets/occupation_citizen1_smolskullz.png",
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
                                    image: "./assets/occupation_citizen2.png",
                                    tint: true,
                                }, {
                                    image: "./assets/occupation_citizen2_back.png",
                                    tint: true,
                                }, {
                                    image: "./assets/occupation_citizen2_wgmi.png",
                                    tinted: false,
                                } ],
                            },{
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "./assets/occupation_citizen2.png",
                                    tint: true,
                                }, {
                                    image: "./assets/occupation_citizen2_back.png",
                                    tint: true,
                                }, {
                                    image: "./assets/occupation_citizen2_rare.png",
                                    tinted: false,
                                } ],
                            },{
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "./assets/occupation_citizen2.png",
                                    tint: true,
                                }, {
                                    image: "./assets/occupation_citizen2_back.png",
                                    tint: true,
                                },{
                                    image: "./assets/occupation_citizen2_gm.png",
                                    tinted: false,
                                } ],
                            },
                            {
                                type: PFP.ASSET_DUAL,
                                assets: [ {
                                    image: "./assets/occupation_citizen2.png",
                                    tint: true,
                                }, {
                                    image: "./assets/occupation_citizen2_back.png",
                                    tint: true,
                                },{
                                    image: "./assets/occupation_citizen2_gn.png",
                                    tinted: false,
                                } ],
                            }],                            
                        },
                    ] 
                },
                {
                    name: OCCUPATION_ENGINEER, 
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_explorer2.png", "./assets/occupation_explorer2_back.png" ]
                        },
                        { 
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator_engineer.png", "./assets/occupation_creator_engineer_back.png" ]
                        },
                    ],
                },
                { 
                    name: OCCUPATION_EXPLORER, 
                    type: PFP.ASSET_DUAL,
                    assets: [ {
                        image: "./assets/occupation_explorer.png",
                        tinted: false,
                    }, {
                        image: "./assets/occupation_explorer_back.png",
                        tinted: false,
                    } ]
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_FARMER,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_farmer1.png", "./assets/occupation_farmer1_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_farmer2.png", "./assets/occupation_farmer2_back.png" ],
                            level: 860,
                        },
                    ] 
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_FELON, 
                    assets: [ "./assets/occupation_felon.png", "./assets/occupation_felon_back.png" ]
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: OCCUPATION_FISHER,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_fisher1.png", "./assets/occupation_fisher1_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_fisher2.png", "./assets/occupation_fisher2_back.png" ],
                        },
                    ] 
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_INVESTOR, 
                    assets: [ "./assets/occupation_investor.png", "./assets/occupation_investor_back.png" ]
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: OCCUPATION_NINJA, 
                    assets: [ "./assets/occupation_ninja.png", "./assets/occupation_ninja_back.png" ]
                },
            ],
        },
        {    
            name: HEADWEAR,
            level: 500,
            features: [
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_BEEKEEPER, 
                    assets: [ "./assets/headwear_beekeeper.png", "./assets/headwear_beekeeper_back.png" ],
                    chance: 0.6,
                    level: 815,
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_ENGINEER, 
                    assets: [ "./assets/headwear_engineer.png", "./assets/headwear_engineer_back.png" ],
                    level: 605,
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_KASA, 
                    assets: [ "./assets/headwear_kasa.png", "./assets/headwear_kasa_back.png" ],
                    level: 603,
                },
                {
                    type: PFP.ASSET_OPTIONS,
                    name: HEADWEAR_RCS, 
                    options: [
                        {
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/headwear_rcs.png",
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/headwear_rcs.png", "./assets/headwear_artnome.png" ],
                        },
                        {
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/headwear_clubnft.png",
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/headwear_clubnft.png", "./assets/headwear_artnome.png" ],
                        },
                    ],
                },
                { 
                    name: HEADWEAR_BLUE_PUNK, 
                    asset: "./assets/headwear_blue_punk.png",
                    chance: 0.5,
                },
                { 
                    name: HEADWEAR_RYANS_OWL, 
                    asset: "./assets/headwear_ryans_owl.png",
                    level: 385,
                },
                { 
                    name: HEADWEAR_PINK_PUNK, 
                    asset: "./assets/headwear_pink_punk.png",
                },
                { 
                    name: HEADWEAR_PUNEVYR_CAP, 
                    asset: "./assets/headwear_punevyr_cap.png",
                },
                { 
                    name: HEADWEAR_PARTY_HAT, 
                    asset: "./assets/headwear_party_hat.png",
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_INKA_HAT, 
                    assets: [ 
                        {
                            image: "./assets/headwear_inka_hat.png",
                            tint: true,
                        },
                        {
                            image: "./assets/headwear_inka_hat_back.png",
                            tint: true,
                        }
                    ]
                },
                { 
                    name: HEADWEAR_SWIMMING_CAP, 
                    asset: "./assets/headwear_swimming_cap.png",
                },
                { 
                    name: HEADWEAR_BEANIE, 
                    asset: {
                        image: "./assets/headwear_beanie.png",
                        tint: true,
                    }
                },
                { 
                    name: HEADWEAR_CAT_EARS, 
                    asset: "./assets/headwear_cat_ears.png",
                },
                { 
                    name: HEADWEAR_BUNNY_EARS, 
                    asset: "./assets/headwear_bunny_ears.png",
                },
                { 
                    name: HEADWEAR_KARATE_BAND, 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_karate_band.png", "./assets/headwear_karate_band_back.png" ],
                },
                { 
                    name: HEADWEAR_ZANCAN_BAND, 
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: ["./assets/headwear_zancan_band.png", "./assets/headwear_zancan_band_back.png"],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: ["./assets/headwear_zancan_green_band.png", "./assets/headwear_zancan_green_band_back.png"],
                        }
                    ]
                },
                { 
                    name: HEADWEAR_CROWN, 
                    asset: "./assets/headwear_crown.png",
                },
                { 
                    name: HEADWEAR_FISHER_HAT,
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_fisher_hat.png", "./assets/headwear_fisher_hat_back.png" ],
                },
                { 
                    name: HEADWEAR_CAPTAIN_HAT, 
                    asset: "./assets/headwear_captain_hat.png",
                    level: 605,
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: HEADWEAR_SPACE_HELMET, 
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/headwear_space_helmet_golden.png", "./assets/headwear_space_helmet_back.png", "./assets/headwear_space_helmet_cover.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/headwear_space_helmet_red_dot.png", "./assets/headwear_space_helmet_back.png", "./assets/headwear_space_helmet_cover.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/headwear_space_helmet_green.png", "./assets/headwear_space_helmet_back.png", "./assets/headwear_space_helmet_cover.png" ],
                        },
                    ],
                    level: 850,
                },
                { 
                    type: PFP.ASSET_BACK,
                    name: HEADWEAR_BASQUIAT_HAIRDO, 
                    asset: "./assets/headwear_basquiat_hairdo.png",
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: HEADWEAR_YAZID, 
                    assets: [ "./assets/headwear_yazid.png", "./assets/headwear_yazid_back.png" ],
                },
            ],
        },
        {    
            name: EYES,
            level: 300,
            features: [
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: EYES_NORMAL, 
                    options: [
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_black.png",
                            chance: 25
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_brown.png",
                            chance: 25
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_green.png",
                            chance: 20
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_blue.png",
                            chance: 15
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_heterochromatic.png",
                            chance: 10
                        },
                    ]
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: EYES_SQUINT, 
                    options: [
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_squint_black.png",
                            chance: 25
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_squint_yellow.png",
                            chance: 25
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_squint_green.png",
                            chance: 20
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_squint_blue.png",
                            chance: 15
                        },
                    ]
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: EYES_SURPRISED, 
                    options: [
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_surprised_black.png",
                            chance: 25
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_surprised_brown.png",
                            chance: 25
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_surprised_green.png",
                            chance: 20
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_surprised_blue.png",
                            chance: 15
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_surprised_heterochromatic.png",
                            chance: 10
                        },
                    ]
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: EYES_SERIOUS, 
                    options: [
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_angry_black.png",
                            chance: 25
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_angry_brown.png",
                            chance: 25
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_angry_green.png",
                            chance: 20
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_angry_blue.png",
                            chance: 15
                        },
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyes_angry_heterochromatic.png",
                            chance: 10
                        },
                    ]
                },
                { 
                    name: EYES_LASER, 
                    type: PFP.ASSET_FRONT,
                    asset: "./assets/eyes_laser.png",
                    level: 900,
                    chance: 0.4,
                },
            ],
        },
        {    
            name: MOUTH,
            level: 400,
            features: [
                { 
                    name: MOUTH_BUBBLE_GUM, 
                    asset: "./assets/mouth_bubble_gum.png",
                    level: 605,
                },
                { 
                    name: MOUTH_WHEAT_STRAW, 
                    asset: "./assets/mouth_wheat_straw.png",
                    level: 380,
                },
                { 
                    name: MOUTH_CONFUSED, 
                    asset: "./assets/mouth_confused.png",
                    level: 380,
                },
                { 
                    name: MOUTH_SURPRISED, 
                    asset: "./assets/mouth_surprised.png",
                    level: 380,
                },
                { 
                    name: MOUTH_LOLLIPOP, 
                    asset: "./assets/mouth_lollipop.png",
                },
                { 
                    name: MOUTH_EATING_BERRIES, 
                    asset: "./assets/mouth_eating_berries.png",
                    level: 380,
                },
                { 
                    name: MOUTH_BAMBOO, 
                    asset: "./assets/mouth_bamboo.png",
                    level: 505,
                },
                { 
                    name: MOUTH_SNORKEL, 
                    type: PFP.ASSET_DUAL,
                    assets: [ 
                        {
                            image: "./assets/mouth_snorkel.png",
                            tint: false,
                        }, 
                        {
                            image: "./assets/mouth_snorkel_back.png",
                            tint: false,
                        },
                        {
                            image: "./assets/mouth_snorkel.png",
                            tint: false,
                        }, 
                        {
                            image: "./assets/mouth_snorkel_color_back.png",
                            tint: true,
                        },
                    ],                        
                    level: 505,
                },
                { 
                    name: MOUTH_RECORD, 
                    assets: [
                        "./assets/mouth_record.png",
                        {
                            image: "./assets/mouth_record_label.png",
                            tint: true,
                        },
                    ],
                    level: 605,
                },
                { 
                    name: MOUTH_SALMON, 
                    asset: "./assets/mouth_salmon.png",
                },
                { 
                    name: MOUTH_ARTNOME, 
                    asset: "./assets/mouth_artnome.png",
                    level: 180,
                },
                { 
                    name: MOUTH_EVIL, 
                    asset: "./assets/mouth_smile.png",
                    level: 380,
                },
                { 
                    name: MOUTH_OK, 
                    asset: "./assets/mouth_ok.png",
                    level: 380,
                },
                { 
                    name: MOUTH_SMILE, 
                    asset: "./assets/mouth_smile.png",
                    level: 380,
                },
                { 
                    name: MOUTH_TONGUE_OUT, 
                    asset: "./assets/mouth_tongue_out.png",
                    level: 380,
                },
                { 
                    name: MOUTH_DANGEROUS, 
                    asset: "./assets/mouth_hannibal.png",
                    level: 384,
                    chance: 0.6,
                },
            ],
        },
        {    
            name: EYEWEAR,
            level: 600,
            features: [
                { 
                    name: EYEWEAR_GLASSES, 
                    asset: "./assets/eyewear_glasses.png",
                },
                { 
                    name: EYEWEAR_ANONYMOUS, 
                    assets: [ "./assets/eyewear_glasses.png", "./assets/eyewear_anonymous.png" ],
                    chance: 0.3,
                },
                { 
                    name: EYEWEAR_SUNGLASSES, 
                    asset: "./assets/eyewear_sunglasses.png",
                },
                { 
                    name: EYEWEAR_HEARTS, 
                    asset: "./assets/eyewear_hearts.png",
                },
                { 
                    name: EYEWEAR_MAXCAPACITY, 
                    asset: "./assets/eyewear_maxcapacity.png",
                },
                { 
                    name: EYEWEAR_3D, 
                    asset: "./assets/eyewear_3d.png",
                },
                { 
                    name: EYEWEAR_ORTH, 
                    asset: "./assets/eyewear_orth_glasses.png",
                },
                { 
                    name: EYEWEAR_SNORKEL, 
                    assets: [{
                        image: "./assets/eyewear_snorkel.png",
                        tint: false,
                    }, {
                        image: "./assets/eyewear_snorkel_color.png",
                        tint: true,
                    }],
                },
                { 
                    type: PFP.ASSET_FRONT,
                    name: EYEWEAR_SPACE_GLASSES, 
                    chance: 0.4,
                    asset:  { 
                        image: "./assets/eyewear_space_glasses.png",
                        tint: true,
                    },                    
                },
                {
                    type: PFP.ASSET_OPTIONS,
                    name: EYEWEAR_NINJA_BAND,
                    level: 604,
                    options: [{
                        type: PFP.ASSET_DUAL,
                        assets: [ "./assets/eyewear_ninja_band_yellow.png", "./assets/eyewear_ninja_band_back_yellow.png" ],
                    },{
                        type: PFP.ASSET_DUAL,
                        assets: [ "./assets/eyewear_ninja_band_red.png", "./assets/eyewear_ninja_band_back_red.png" ],
                    },{
                        type: PFP.ASSET_DUAL,
                        assets: [ "./assets/eyewear_ninja_band_blue.png", "./assets/eyewear_ninja_band_back_blue.png" ],
                    },{
                        type: PFP.ASSET_DUAL,
                        assets: [ "./assets/eyewear_ninja_band_purple.png", "./assets/eyewear_ninja_band_back_purple.png" ],
                    }
                    ]
                },
                { 
                    name: EYEWEAR_SLEEP_MASK, 
                    asset: "./assets/eyewear_sleep_mask.png",
                    chance: 0.6,
                },
                { 
                    name: EYEWEAR_STRIPED_GLASSES, 
                    asset: {
                        image: "./assets/eyewear_striped_glasses.png",
                        tint: true,
                    },
                },
                {
                    type: PFP.ASSET_OPTIONS,
                    name: EYEWEAR_LUCHADOR, 
                    options: [
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyewear_luchador.png",
                            level: 383,
                            chance: 4,
                        },
                        {
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyewear_nftbiker.png",
                            level: 383,
                            chance: 2,
                        },
                    ],
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: EYEWEAR_MONOCLE, 
                    chance: 1000,
                    assets: [ "./assets/eyewear_monocle.png", "./assets/eyewear_monocle_back.png" ],
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
                    asset: "./assets/bling_silver.png", 
                    chance: 5 
                },
                { 
                    name: BLING_GOLD,     
                    asset: "./assets/bling_gold.png", 
                    chance: 3 
                },
                { 
                    name: BLING_ICE,      
                    asset: "./assets/bling_ice.png", 
                    chance: 2 
                },
                { 
                    name: BLING_ICE_GOLD, 
                    assets: ["./assets/bling_ice.png", "./assets/bling_gold.png"],
                    chance: 1 
                },
            ]
        },
    ]
};