losOsosSchema = {
    canvas: {
        width: 1488,
        height: 1800,
    },
    backgrounds: ["#f0e7d8", "#e1dbc8", "#ebdeca", "#e5d7bf"],
    tints: ["#3fb033", "#e60d0d", "#f5d10a", "#46e3ff", "#dd0f66", "#9a04fc"],
    layers: [
        {
            name: "District",
            level: -1000,
            features: [
                {
                    name: "Blue",   
                    assets: ["./assets/district_blue.png", "./assets/district_texture.png"],
                },
                {
                    name: "Green", 
                    assets: ["./assets/district_green.png", "./assets/district_texture.png"],
                },
                {
                    name: "Red",   
                    assets: ["./assets/district_red.png", "./assets/district_texture.png"],
                },
                {
                    name: "Yellow",   
                    assets: ["./assets/district_yellow.png", "./assets/district_texture.png"],
                },
                {
                    name: "Black",   
                    assets: ["./assets/district_black.png", "./assets/district_texture.png"],
                },
                {
                    name: "Purple",   
                    assets: ["./assets/district_purple.png", "./assets/district_texture.png"],
                },
                {
                    name: "White",   
                    assets: ["./assets/district_gray.png", "./assets/district_texture.png"],
                }
            ]
        },
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
            name: "Eyes",
            level: 100,
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
                    name: "Squint", 
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
            name: "Outfit",
            level: 200,
            features: [
                { 
                    name: "Singlet",
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ 
                                "./assets/occupation_luchador1.png",
                                "./assets/occupation_luchador2_back.png",
                            ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ 
                                {
                                    image: "./assets/occupation_luchador1.png",
                                    tint: "#46e3ff",
                                },
                                {
                                    image: "./assets/occupation_luchador2_back.png",
                                    tint: "#46e3ff",
                                },
                            ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ 
                                {
                                    image: "./assets/occupation_luchador1.png",
                                    tint: "#f5d10a",
                                },
                                {
                                    image: "./assets/occupation_luchador2_back.png",
                                    tint: "#f5d10a",
                                },
                            ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_luchador2.png", "./assets/occupation_luchador2_back.png" ],
                        },
                    ] 
                },
                {
                    name: "Bearstappen",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_racer.png", "./assets/occupation_racer_back.png" ],
                },
                {
                    name: "Football player",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_mufc.png", "./assets/occupation_mufc_back.png" ],
                },
                {
                    name: "William Mapan hoodie",
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator_mapan.png", "./assets/occupation_creator_mapan_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_creator_mapan.png", "./assets/occupation_creator_mapan_back.png", "./assets/occupation_creator_mapan_top.png" ],
                        },
                    ]
                },
                {
                    name: "Yazid's brand",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_creator_yazid.png", "./assets/occupation_creator_yazid_back.png" ],
                },
                { 
                    name: "Developer",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_creator_engineer.png", "./assets/occupation_creator_engineer_back.png" ]
                },
                { 
                    name: "Explorer",
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
                    name: "Time machine scientist",
                    type: PFP.ASSET_DUAL,
                    assets: [ {
                        image: "./assets/occupation_emmet_brown.png",
                        tinted: false,
                    }, {
                        image: "./assets/occupation_emmet_brown_back.png",
                        tinted: false,
                    } ]
                },
                {
                    name: "Farmer",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_farmer1.png", "./assets/occupation_farmer1_back.png" ],
                },
                {
                    name: "American Gothic farmer",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_farmer2.png", "./assets/occupation_farmer2_back.png" ],
                    level: 800,
                },
                { 
                    name: "Inmate", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_felon.png", "./assets/occupation_felon_back.png" ],
                    chance: 0.6,
                },
                {
                    name: "Fisher",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_fisher1.png", "./assets/occupation_fisher1_back.png" ],
                },
                {   
                    name: "Nordic sweater fisher",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_fisher2.png", "./assets/occupation_fisher2_back.png" ],
                },
                { 
                    name: "Bathrobe",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_investor.png", "./assets/occupation_investor_back.png" ],
                    chance: 0.5,
                },
                {
                    name: "Shirt",
                    type: PFP.ASSET_DUAL,
                    chance: 0.7,
                    assets: [ {
                        image: "./assets/occupation_citizen1_for_tinting.png",
                        tint: true,
                    }, {
                        image: "./assets/occupation_citizen1_back.png",
                        tint: true,
                    },
                    {
                        image: "./assets/occupation_citizen1_buttons.png",
                        tint: false,
                    }
                    ],
                },
                {
                    name: "Banana shirt",
                    type: PFP.ASSET_DUAL,
                    assets: [ {
                        image: "./assets/occupation_citizen1_for_tinting.png",
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
                    chance: 0.9,
                    name: "SMOLSKULLs shirt",
                    assets: [ {
                        image: "./assets/occupation_citizen1_for_tinting.png",
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
                    name: "ertdfgcvb shirt",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_andreasgysin.png" ],
                },
                {
                    name: "Glomularus pet",
                    type: PFP.ASSET_DUAL,
                    level: 825,
                    assets: [ "./assets/occupation_tshirt_black_long_sleeve.png", "./assets/occupation_creator_back.png", "./assets/occupation_glomularus.png", "./assets/occupation_glomularus_back.png" ],
                },
                {
                    name: "Nirvana shirt",
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_nirvana.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black_long_sleeve.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_nirvana.png" ],
                        },
                    ]
                },
                {
                    name: "Ciphrd shirt",
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_ciphrd_shirt.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black_long_sleeve.png", "./assets/occupation_creator_back.png", "./assets/occupation_ciphrd_shirt.png" ],
                        },
                    ]
                },
                {
                    name: "Art Basel shirt",
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_art_basel.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ "./assets/occupation_tshirt_black_long_sleeve.png", "./assets/occupation_creator_back.png", "./assets/occupation_art_basel.png" ],
                        },
                    ]
                },
                {
                    name: "Casual",
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ { image: "./assets/occupation_tshirt_white.png", tint: true }, "./assets/occupation_creator_back.png" ],
                        },
                        {
                            type: PFP.ASSET_DUAL,
                            assets: [ { image: "./assets/occupation_tshirt_white_long_sleeve.png", tint: true }, "./assets/occupation_creator_back.png" ],
                        },
                    ],
                    chance: 0.2,
                },
                {
                    name: "fx(hash) shirt",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_fxhash.png" ],
                },
                {
                    name: "The Hill-side shirt",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_thehillside.png" ],
                },
                {
                    name: "wgmi hoodie",
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
                    name: "Rare hoodie",
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
                    name: "gm hoodie",
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
                    name: "gn hoodie",
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
                },
                { 
                    name: "Ninja", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_ninja.png", "./assets/occupation_ninja_back.png" ]
                },
            ],
        },
        {    
            name: "Headwear",
            level: 300,
            features: [
                {
                    type: PFP.ASSET_OPTIONS,
                    name: "Luchador mask", 
                    options: [
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyewear_luchador.png",
                        },
                        {
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyewear_nftbiker.png",
                        },
                    ],
                },
                { 
                    name: "Backwards hat", 
                    type: PFP.ASSET_DUAL,
                    assets: [ 
                        {
                            image: "./assets/headwear_backwards_hat1.png",
                            tint: true, 
                        }, 
                        {
                            image: "./assets/headwear_backwards_hat_back.png",
                            tint: true, 
                        },
                        {
                            image: "./assets/headwear_backwards_hat2.png",
                            tint: true
                        },
                    ],
                    chance: 1000,
                },
                { 
                    name: "Noya hat",
                    type: PFP.ASSET_FRONT,
                    assets: [
                        {
                            image: "./assets/headwear_hat_cap.png",
                            tint: true,
                        },
                        {
                            image: "./assets/headwear_hat_visor.png",
                            tint: true,
                        },
                        {
                            image: "./assets/headwear_hat_noya.png",
                            tint: false,
                        },
                    ],
                },
                { 
                    name: "Killed by a Pixel hat",
                    type: PFP.ASSET_OPTIONS,
                    options: [
                        {
                            type: PFP.ASSET_FRONT,
                            assets: [
                                {
                                    image: "./assets/headwear_hat_cap.png",
                                    tint: ["#4abed8", "#25f47f", "#c4b4fb", "#f4e054", "#e8e2b9"],
                                },
                                {
                                    image: "./assets/headwear_hat_visor.png",
                                    tint: ["#4abed8", "#25f47f", "#c4b4fb", "#f4e054", "#e8e2b9"],
                                },
                                {
                                    image: "./assets/headwear_ff.png",
                                    tint: "#000000",
                                },
                            ],
                        },
                        {
                            type: PFP.ASSET_FRONT,
                            assets: [
                                {
                                    image: "./assets/headwear_hat_cap.png",
                                    tint: ["#f20b68", "#ff2f00", "#8d1ee6"],
                                },
                                {
                                    image: "./assets/headwear_hat_visor.png",
                                    tint: ["#f20b68", "#ff2f00", "#8d1ee6"],
                                },
                                {
                                    image: "./assets/headwear_ff.png",
                                    tint: "#f0f0f0",
                                },
                            ],
                        }
                    ]
                },
                { 
                    name: "Hand-painted Nudoru hat",
                    type: PFP.ASSET_FRONT,
                    chance: 0.6,
                    assets: [
                        {
                            image: "./assets/headwear_hat_cap.png",
                            tint: ["#cbd8b5", "#f2e8d3"],
                        },
                        {
                            image: "./assets/headwear_hat_cap_cover.png",
                            tint: ["#ed9ff6", "#91dcff", "#f26f7d"],
                        },
                        {
                            image: "./assets/headwear_hat_nudoru.png",
                            tint: false,
                        },
                        {
                            image: "./assets/headwear_hat_visor.png",
                            tint: ["#91dcff", "#f26f7d", "#b1ef63"],
                        },
                    ],
                },
                { 
                    name: "Beekeeper", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_beekeeper.png", "./assets/headwear_beekeeper_back.png" ],
                    chance: 0.6,
                    level: 850,
                },
                {
                    name: "Tupac bandana", 
                    type: PFP.ASSET_FRONT,
                    asset: "./assets/headwear_tupac_bandana.png",
                },
                { 
                    name: "Hard top", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_engineer.png", "./assets/headwear_engineer_back.png" ],
                    level: 800,
                },
                { 
                    name: "Chicken mask", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_chicken_mask.png", "./assets/headwear_chicken_mask_back.png" ],
                },
                { 
                    name: "Kasa", 
                    type: PFP.ASSET_DUAL,
                        assets: [ "./assets/headwear_kasa.png", "./assets/headwear_kasa_back.png" ],
                },
                { 
                    name: "Top hat", 
                    type: PFP.ASSET_FRONT,
                    asset: "./assets/headwear_top_hat.png",
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
                    name: "Arab hat", 
                    type: PFP.ASSET_DUAL,
                    assets: ["./assets/headwear_arab_hat.png", "./assets/headwear_arab_hat_back.png"],
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
                    name: "Hipster hat", 
                    type: PFP.ASSET_FRONT,
                    asset: {
                        image: "./assets/headwear_hipster_hat.png",
                        tint: true,
                    },
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
                    name: "Ryan Bell's Moonbird", 
                    asset: "./assets/headwear_ryans_owl.png",
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
                    chance: 0.5,
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
                    level: 800,
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
            name: "Eyewear",
            level: 400,
            features: [
                { 
                    name: "Glasses", 
                    asset: "./assets/eyewear_glasses.png",
                },
                { 
                    name: "Deal with it", 
                    asset: "./assets/eyewear_deal_with_it.png",
                },
                { 
                    name: "Fragments of a Wave Glasses", 
                    asset: "./assets/eyewear_fragments.png",
                },
                { 
                    name: "Aviator glasses", 
                    asset: "./assets/eyewear_aviator_glasses.png",
                },
                { 
                    name: "Anonymous", 
                    assets: [ "./assets/eyewear_glasses.png", "./assets/eyewear_anonymous.png" ],
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
                    name: "Goggles", 
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
                    type: PFP.ASSET_DUAL,
                    name: "Monocle", 
                    assets: [ "./assets/eyewear_monocle.png", "./assets/eyewear_monocle_back.png" ],
                },
            ],
        },
        {    
            name: "Mouth",
            level: 500,
            features: [
                { 
                    name: "RGB puke", 
                    asset: "./assets/mouth_rgb_puke.png",
                },
                { 
                    name: "Tender pass", 
                    asset: "./assets/mouth_tender_pass.png",
                },
                { 
                    name: "Bubble gum", 
                    asset: "./assets/mouth_bubble_gum.png",
                },
                { 
                    name: "Bamboo", 
                    asset: "./assets/mouth_bamboo.png",
                },
                { 
                    name: "Snorkel", 
                    type: PFP.ASSET_DUAL,
                    level: 395,
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
                },
                { 
                    name: "Dangerous", 
                    asset: "./assets/mouth_hannibal.png",
                    chance: 0.3,
                    level: 305,
                },
                { 
                    name: "Salmon", 
                    asset: "./assets/mouth_salmon.png",
                },
                { 
                    name: "Wheat straw", 
                    asset: "./assets/mouth_wheat_straw.png",
                    level: 250,
                },
                { 
                    name: "Confused", 
                    asset: "./assets/mouth_confused.png",
                    level: 250,
                },
                { 
                    name: "Surprised", 
                    asset: "./assets/mouth_surprised.png",
                    level: 250,
                },
                { 
                    name: "Freddie Mercury mustache", 
                    asset: "./assets/mouth_mustache_mercury.png",
                    level: 250,
                },
                { 
                    name: "Dalí mustache", 
                    asset: "./assets/mouth_dali_mustache.png",
                    level: 250,
                },
                { 
                    name: "Lollipop", 
                    asset: "./assets/mouth_lollipop.png",
                    level: 250,
                },
                { 
                    name: "Eating berries", 
                    asset: "./assets/mouth_eating_berries.png",
                    level: 250,
                },
                { 
                    name: "Artnome beard", 
                    asset: "./assets/mouth_artnome.png",
                    level: 250,
                },
                { 
                    name: "Gold tooth smile", 
                    asset: "./assets/mouth_gold_tooth.png",
                    level: 250,
                },
                { 
                    name: "OK", 
                    asset: "./assets/mouth_ok.png",
                    level: 250,
                },
                { 
                    name: "Smile", 
                    asset: "./assets/mouth_smile.png",
                    level: 250,
                },
                { 
                    name: "Tongue out", 
                    asset: "./assets/mouth_tongue_out.png",
                    level: 250,
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