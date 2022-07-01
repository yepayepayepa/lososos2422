losOsosSchema = {
    canvas: {
        width: 1488,
        height: 1800,
    },
    backgrounds: ["#f0e7d8", "#e1dbc8", "#ebdeca", "#e5d7bf"],
    tints: ["#20e761", "#e60d0d", "#f5d10a", "#46e3ff", "#ff56c5", "#9a04fc"],
    layers: [
        {
            name: "Species",
            level: 0,
            features: [
                { 
                    name: "Black",   
                    asset: "./assets/species_black.png",
                },
                { 
                    name: "Grizzly", 
                    asset: "./assets/species_grizzly.png",
                },
                { 
                    name: "Panda",   
                    asset: "./assets/species_panda.png",
                },
                { 
                    name: "Polar",   
                    asset: "./assets/species_polar.png",
                },
            ]
        },
        {
            name: "District",
            level: -1000,
            features: [
                {
                    name: "Riverlands",   
                    assets: ["./assets/district_blue.png", "./assets/district_texture.png"],
                },
                {
                    name: "Forests", 
                    assets: ["./assets/district_green.png", "./assets/district_texture.png"],
                },
                {
                    name: "Caves",   
                    assets: ["./assets/district_red.png", "./assets/district_texture.png"],
                },
                {
                    name: "Mountains",   
                    assets: ["./assets/district_yellow.png", "./assets/district_texture.png"],
                },
                {
                    name: "Space",   
                    assets: ["./assets/district_black.png", "./assets/district_texture.png"],
                },
                {
                    name: "City",   
                    assets: ["./assets/district_purple.png", "./assets/district_texture.png"],
                },
                {
                    name: "Tundra",   
                    assets: ["./assets/district_gray.png", "./assets/district_texture.png"],
                }
            ]
        },
        {    
            name: "Occupation",
            level: 200,
            features: [
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: "Luchador",
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
                    name: "Athlete",
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
                    name: "Artist", 
                    options: [
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
                    name: "Collector",
                    options: [
                        // Banana shirt
                        {
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
                        // SMOLSKULLs shirt
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
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_nirvana.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_fxhash.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_andreasgysin.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_thehillside.png" ],
                        },
                    ] 
                },
                {
                    type: PFP.ASSET_OPTIONS,
                    name: "Engineer", 
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
                    type: PFP.ASSET_DUAL,
                    name: "Explorer", 
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
                    name: "Farmer",
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
                    name: "Scammer", 
                    assets: [ "./assets/occupation_felon.png", "./assets/occupation_felon_back.png" ],
                    chance: 0.05,
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: "Fisher",
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
                    type: PFP.ASSET_OPTIONS, 
                    name: "Investor", 
                    options: [ 
                        { 
                            type: PFP.ASSET_DUAL,
                            chance: 3,
                            assets: [ "./assets/occupation_investor.png", "./assets/occupation_investor_back.png" ]
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ {
                                image: "./assets/occupation_investor_hoodie.png",
                                tint: true,
                            }, {
                                image: "./assets/occupation_investor_hoodie_back.png",
                                tint: true,
                            }, {
                                image: "./assets/occupation_investor_hoodie_wgmi.png",
                                tinted: false,
                            } ],
                        },{
                            type: PFP.ASSET_DUAL,
                            assets: [ {
                                image: "./assets/occupation_investor_hoodie.png",
                                tint: true,
                            }, {
                                image: "./assets/occupation_investor_hoodie_back.png",
                                tint: true,
                            }, {
                                image: "./assets/occupation_investor_hoodie_rare.png",
                                tinted: false,
                            } ],
                        },{
                            type: PFP.ASSET_DUAL,
                            assets: [ {
                                image: "./assets/occupation_investor_hoodie.png",
                                tint: true,
                            }, {
                                image: "./assets/occupation_investor_hoodie_back.png",
                                tint: true,
                            },{
                                image: "./assets/occupation_investor_hoodie_gm.png",
                                tinted: false,
                            } ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ {
                                image: "./assets/occupation_investor_hoodie.png",
                                tint: true,
                            }, {
                                image: "./assets/occupation_investor_hoodie_back.png",
                                tint: true,
                            },{
                                image: "./assets/occupation_investor_hoodie_gn.png",
                                tinted: false,
                            } ],
                        }
                    ],                            
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: "Ninja", 
                    assets: [ "./assets/occupation_ninja.png", "./assets/occupation_ninja_back.png" ]
                },
            ],
        },
        {    
            name: "Headwear",
            level: 500,
            features: [
                { 
                    name: "Hat", 
                    assets: [
                        {
                            image: "./assets/headwear_hat_cap.png",
                            tint: true,
                        },
                        {
                            image: "./assets/headwear_hat_visor.png",
                            tint: true,
                        },
                    ],
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: "Beekeeper", 
                    assets: [ "./assets/headwear_beekeeper.png", "./assets/headwear_beekeeper_back.png" ],
                    chance: 0.6,
                    level: 815,
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: "Hard top", 
                    assets: [ "./assets/headwear_engineer.png", "./assets/headwear_engineer_back.png" ],
                    level: 605,
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: "Kasa", 
                    assets: [ "./assets/headwear_kasa.png", "./assets/headwear_kasa_back.png" ],
                    level: 603,
                },
                {
                    name: "RCS headband", 
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/headwear_rcs.png",
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/headwear_rcs.png", "./assets/headwear_artnome.png" ],
                        },
                    ]
                },
                {
                    name: "RIGHT CLICK SAVE headband", 
                    type: PFP.ASSET_FRONT,
                    asset: "./assets/headwear_rcs.png",
                    chance: 0.25,
                },
                {
                    name: "RIGHT CLICK SAVE Artnome headband", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_rcs.png", "./assets/headwear_artnome.png" ],
                    chance: 0.25,
                },
                {
                    name: "ClubNFT headband", 
                    type: PFP.ASSET_FRONT,
                    asset: "./assets/headwear_clubnft.png",
                    chance: 0.25,
                },
                {
                    name: "ClubNFT Artnome headband", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_clubnft.png", "./assets/headwear_artnome.png" ],
                    chance: 0.25,
                },
                { 
                    name: "Spiky punk", 
                    asset: {
                        image: "./assets/headwear_blue_punk.png",
                        tint: true,
                    },
                    chance: 0.5,
                },
                { 
                    name: "Ryan Bell's owl", 
                    asset: "./assets/headwear_ryans_owl.png",
                    level: 385,
                },
                { 
                    name: "Mohawk punk", 
                    type: PFP.ASSET_OPTIONS,
                    chance: 0.7,
                    options: [
                        {
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/headwear_pink_punk.png",
                        },
                        {
                            type: PFP.ASSET_FRONT,
                            asset: {
                                image: "./assets/headwear_pink_punk.png",
                                tint: "#f5d10a",
                            }
                        },
                        {
                            type: PFP.ASSET_FRONT,
                            chance: 1000,
                            asset: {
                                image: "./assets/headwear_pink_punk.png",
                                tint: "#9a04fc",
                            }
                        },
                    ]
                },
                { 
                    name: "Punevyr's cap", 
                    asset: "./assets/headwear_punevyr_cap.png",
                },
                { 
                    name: "Party hat", 
                    asset: "./assets/headwear_party_hat.png",
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: "Inka hat", 
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
                    name: "Swimming cap", 
                    asset: "./assets/headwear_swimming_cap.png",
                },
                { 
                    name: "Beanie", 
                    asset: {
                        image: "./assets/headwear_beanie.png",
                        tint: true,
                    }
                },
                { 
                    name: "Cat ears", 
                    asset: "./assets/headwear_cat_ears.png",
                },
                { 
                    name: "Bunny ears", 
                    asset: "./assets/headwear_bunny_ears.png",
                },
                { 
                    name: "Karate headband", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_karate_band.png", "./assets/headwear_karate_band_back.png" ],
                },
                { 
                    name: "Zancan headband", 
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
                    name: "Crown", 
                    asset: "./assets/headwear_crown.png",
                },
                { 
                    name: "Fisher hat",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_fisher_hat.png", "./assets/headwear_fisher_hat_back.png" ],
                },
                { 
                    name: "Captain hat", 
                    asset: "./assets/headwear_captain_hat.png",
                    level: 605,
                },
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: "Space helmet", 
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
                    name: "Basquiat's hairdo", 
                    asset: "./assets/headwear_basquiat_hairdo.png",
                },
                { 
                    type: PFP.ASSET_DUAL,
                    name: "Yazid's hairdo", 
                    assets: [ "./assets/headwear_yazid.png", "./assets/headwear_yazid_back.png" ],
                },
            ],
        },
        {    
            name: "Eyes",
            level: 300,
            features: [
                { 
                    type: PFP.ASSET_OPTIONS,
                    name: "Normal", 
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
                    name: "squint", 
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
                    name: "Surprised", 
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
                    name: "Serious", 
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
                    name: "Laser", 
                    type: PFP.ASSET_FRONT,
                    asset: "./assets/eyes_laser.png",
                    level: 900,
                    chance: 0.4,
                },
            ],
        },
        {    
            name: "Mouth",
            level: 400,
            features: [
                { 
                    name: "Bubble gum", 
                    asset: "./assets/mouth_bubble_gum.png",
                    level: 605,
                },
                { 
                    name: "Wheat straw", 
                    asset: "./assets/mouth_wheat_straw.png",
                    level: 380,
                },
                { 
                    name: "Confused", 
                    asset: "./assets/mouth_confused.png",
                    level: 380,
                },
                { 
                    name: "Surprised", 
                    asset: "./assets/mouth_surprised.png",
                    level: 380,
                },
                { 
                    name: "Lollipop", 
                    asset: "./assets/mouth_lollipop.png",
                },
                { 
                    name: "Eating berries", 
                    asset: "./assets/mouth_eating_berries.png",
                    level: 380,
                },
                { 
                    name: "Bamboo", 
                    asset: "./assets/mouth_bamboo.png",
                    level: 505,
                },
                { 
                    name: "Snorkel", 
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
                    name: "Disc", 
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
                    name: "Salmon", 
                    asset: "./assets/mouth_salmon.png",
                },
                { 
                    name: "Artnome beard", 
                    asset: "./assets/mouth_artnome.png",
                    level: 180,
                },
                { 
                    name: "Evil smile", 
                    asset: "./assets/mouth_smile.png",
                    level: 380,
                },
                { 
                    name: "OK", 
                    asset: "./assets/mouth_ok.png",
                    level: 380,
                },
                { 
                    name: "Smile", 
                    asset: "./assets/mouth_smile.png",
                    level: 380,
                },
                { 
                    name: "Tongue out", 
                    asset: "./assets/mouth_tongue_out.png",
                    level: 380,
                },
                { 
                    name: "Dangerous", 
                    asset: "./assets/mouth_hannibal.png",
                    level: 384,
                    chance: 0.6,
                },
            ],
        },
        {    
            name: "Eyewear",
            level: 600,
            features: [
                { 
                    name: "Glasses", 
                    asset: "./assets/eyewear_glasses.png",
                },
                { 
                    name: "Anonymous", 
                    assets: [ "./assets/eyewear_glasses.png", "./assets/eyewear_anonymous.png" ],
                    chance: 0.3,
                },
                { 
                    name: "Sunglasses", 
                    asset: "./assets/eyewear_sunglasses.png",
                },
                { 
                    name: "Heart glasses", 
                    asset: "./assets/eyewear_hearts.png",
                },
                { 
                    name: "Max Capacity glasses", 
                    asset: "./assets/eyewear_maxcapacity.png",
                },
                { 
                    name: "3D glasses", 
                    asset: "./assets/eyewear_3d.png",
                },
                { 
                    name: "Lisa Orth glasses", 
                    asset: "./assets/eyewear_orth_glasses.png",
                },
                { 
                    name: "Snorkel goggles", 
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
                    name: "Space glasses", 
                    chance: 0.4,
                    asset:  { 
                        image: "./assets/eyewear_space_glasses.png",
                        tint: true,
                    },                    
                },
                {
                    type: PFP.ASSET_OPTIONS,
                    name: "Ninja band",
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
                    name: "Sleep mask", 
                    asset: "./assets/eyewear_sleep_mask.png",
                    chance: 0.6,
                },
                { 
                    name: "Striped glasses", 
                    asset: {
                        image: "./assets/eyewear_striped_glasses.png",
                        tint: true,
                    },
                },
                {
                    type: PFP.ASSET_OPTIONS,
                    name: "Luchador mask", 
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
                    name: "Monocle", 
                    assets: [ "./assets/eyewear_monocle.png", "./assets/eyewear_monocle_back.png" ],
                },
            ],
        },
        {    
            name: "Bling",
            level: 700,
            features: [
                { 
                    type: PFP.ASSET_EMPTY,
                    name: "None",     
                    chance: 83 
                },
                { 
                    name: "Silver",   
                    asset: "./assets/bling_silver.png", 
                    chance: 5 
                },
                { 
                    name: "Gold",     
                    asset: "./assets/bling_gold.png", 
                    chance: 3 
                },
                { 
                    name: "Ice",      
                    asset: "./assets/bling_ice.png", 
                    chance: 2 
                },
                { 
                    name: "Ice and gold", 
                    assets: ["./assets/bling_ice.png", "./assets/bling_gold.png"],
                    chance: 1 
                },
            ]
        },
    ]
};