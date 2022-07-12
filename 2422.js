losOsosSchema = {
    canvas: {
        width: 1488,
        height: 1800,
    },
    backgrounds: ["#f0e7d8", "#e1dbc8", "#ebdeca", "#e5d7bf"],
    tints: ["#3fb033", "#e60d0d", "#f5d10a", "#46e3ff", "#dd0f66", "#9a04fc"],
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
                    name: "Emmet Brown",
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
                    level: 860,
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
                    name: "Glomularus",
                    type: PFP.ASSET_DUAL,
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
                    chance: 1.2,
                },
                {
                    name: "The Hill-side shirt",
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/occupation_tshirt_black.png", "./assets/occupation_creator_back.png", "./assets/occupation_creator_thehillside.png" ],
                },
                {
                    name: "WGMI hoodie",
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
                    name: "GM hoodie",
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
                    name: "GN hoodie",
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
            level: 615,
            features: [
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
                    name: "Nudoru hat",
                    type: PFP.ASSET_FRONT,
                    chance: 0.6,
                    level: 605,
                    assets: [
                        {
                            image: "./assets/headwear_hat_cap.png",
                            tint: ["#ed9ff6", "#f26f7d"],
                        },
                        {
                            image: "./assets/headwear_hat_nudoru.png",
                            tint: false,
                        },
                        {
                            image: "./assets/headwear_hat_visor.png",
                            tint: ["#d965e7", "#f26f7d", "#b1ef63"],
                        },
                    ],
                },
                { 
                    name: "Beekeeper", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_beekeeper.png", "./assets/headwear_beekeeper_back.png" ],
                    chance: 0.6,
                    level: 815,
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
                    level: 615,
                },
                { 
                    name: "Kasa", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_kasa.png", "./assets/headwear_kasa_back.png" ],
                    level: 615,
                },
                { 
                    name: "Top hat", 
                    type: PFP.ASSET_DUAL,
                    assets: [ "./assets/headwear_top_hat.png", "./assets/headwear_top_hat_back.png" ],
                    level: 615,
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
                    level: 615,
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
                    level: 615,
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
            name: "Eyewear",
            level: 600,
            features: [
                { 
                    name: "Glasses", 
                    asset: "./assets/eyewear_glasses.png",
                },
                { 
                    name: "Aviator glasses", 
                    asset: "./assets/eyewear_aviator_glasses.png",
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
                    chance: 1000,
                    level: 610,
                    options: [
                        { 
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyewear_luchador.png",
                            chance: 4,
                        },
                        {
                            type: PFP.ASSET_FRONT,
                            asset: "./assets/eyewear_nftbiker.png",
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
            name: "Mouth",
            level: 400,
            features: [
                { 
                    name: "RGB puke", 
                    asset: "./assets/mouth_rgb_puke.png",
                    level: 615,
                },
                { 
                    name: "Tender pass", 
                    asset: "./assets/mouth_tender_pass.png",
                    level: 615,
                },
                { 
                    name: "Bubble gum", 
                    asset: "./assets/mouth_bubble_gum.png",
                    level: 615,
                },
                { 
                    name: "Wheat straw", 
                    asset: "./assets/mouth_wheat_straw.png",
                },
                { 
                    name: "Confused", 
                    asset: "./assets/mouth_confused.png",
                },
                { 
                    name: "Surprised", 
                    asset: "./assets/mouth_surprised.png",
                },
                { 
                    name: "Señor mustache", 
                    asset: "./assets/mouth_mustache.png",
                },
                { 
                    name: "Dalí mustache", 
                    asset: "./assets/mouth_dali_mustache.png",
                    level: 605,
                },
                { 
                    name: "Lollipop", 
                    asset: "./assets/mouth_lollipop.png",
                },
                { 
                    name: "Eating berries", 
                    asset: "./assets/mouth_eating_berries.png",
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
                    level: 620,
                    chance: 1000,
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
                    level: 615,
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
                    name: "Gold tooth smile", 
                    asset: "./assets/mouth_gold_tooth.png",
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
                    chance: 0.3,
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