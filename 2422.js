const losOsosSchema = {
    canvas: {
        width: 1488,
        height: 1800,
    },
    backgrounds: ["#f0e7d8", "#e1dbc8", "#ebdeca", "#e5d7bf"],
    tints: ["#3fb033", "#e60d0d", "#ffc600", "#46e3ff", "#dd0f66", "#9a04fc", "#eeeae4"],
    layers: [
        {
            name: "District",
            level: -999,
            features: [
                {
                    name: "Blue",   
                    asset: "./assets/district_blue.png",
                },
                {
                    name: "Green", 
                    asset: "./assets/district_green.png",
                },
                {
                    name: "Red",   
                    asset: "./assets/district_red.png",
                },
                {
                    name: "Yellow",   
                    asset: "./assets/district_yellow.png",
                },
                {
                    name: "Purple",   
                    asset: "./assets/district_purple.png",
                },
                {
                    name: "Black",   
                    asset: "./assets/district_black.png",
                },
            ]
        },
        {
            name: "Species",
            level: 0,
            features: [
                { 
                    name: "Black Bear",   
                    asset: "./assets/species_black.png",
                },
                { 
                    name: "Grizzly Bear", 
                    asset: "./assets/species_grizzly.png",
                },
                { 
                    name: "Panda Bear",   
                    asset: "./assets/species_panda.png",
                },
                { 
                    name: "Polar Bear",   
                    asset: "./assets/species_polar.png",
                },
                {
                    name: "Gummy Bear",
                    assets: [{
                        image: "./assets/species_gummy.png",
                        tint: ["#ff0000", "#FFFF00", "#00ec00", "#ff7800"],
                    }, "./assets/species_gummy_lights.png",
                    ],
                    chance: 0.35,
                },
            ]
        },
        {    
            name: "Eyes",
            level: 100,
            features: [
                { 
                    type: "options",
                    name: "Normal", 
                    options: [
                        { 
                            type: "front",
                            asset: "./assets/eyes_black.png",
                            chance: 25
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_brown.png",
                            chance: 25
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_green.png",
                            chance: 20
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_blue.png",
                            chance: 15
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_heterochromatic.png",
                            chance: 10
                        },
                    ]
                },
                { 
                    type: "options",
                    name: "Squint", 
                    options: [
                        { 
                            type: "front",
                            asset: "./assets/eyes_squint_black.png",
                            chance: 25
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_squint_yellow.png",
                            chance: 25
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_squint_green.png",
                            chance: 20
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_squint_blue.png",
                            chance: 15
                        },
                    ]
                },
                { 
                    type: "options",
                    name: "Surprised", 
                    options: [
                        { 
                            type: "front",
                            asset: "./assets/eyes_surprised_black.png",
                            chance: 25
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_surprised_brown.png",
                            chance: 25
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_surprised_green.png",
                            chance: 20
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_surprised_blue.png",
                            chance: 15
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_surprised_heterochromatic.png",
                            chance: 10
                        },
                    ]
                },
                { 
                    type: "options",
                    name: "Serious", 
                    options: [
                        { 
                            type: "front",
                            asset: "./assets/eyes_angry_black.png",
                            chance: 25
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_angry_brown.png",
                            chance: 25
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_angry_green.png",
                            chance: 20
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_angry_blue.png",
                            chance: 15
                        },
                        { 
                            type: "front",
                            asset: "./assets/eyes_angry_heterochromatic.png",
                            chance: 10
                        },
                    ]
                },
                { 
                    name: "Laser", 
                    type: "front",
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
                    name: "Cybearpunk",
                    type: "dual",
                    level: 550,
                    tints: ["#be1b00", "#2398ca", "#288b00", "#fbbf1e" ],
                    assets: [ 
                        "./assets/occupation_mecha_bear.png",
                        "./assets/empty.png",
                        { image: "./assets/occupation_mecha_bear_lights.png", tint: true },
                    ],
                },
                { 
                    name: "Sabler scarf",
                    type: "dual",
                    tints: ["#9f1d1b", "#333333", "#efebe2"],
                    assets: [
                        { image: "./assets/occupation_sabler_monk_tint.png", tint: true, }, 
                        { image: "./assets/occupation_sabler_monk_tint_back.png", tint: true, }, 
                        { image: "./assets/occupation_sabler_monk.png", tint: false, },
                        { image: "./assets/occupation_sabler_monk_back.png", tint: false, },
                    ],
                },
                {
                    name: "The Hero",
                    type: "front",
                    assets: [ 
                        "./assets/occupation_the_hero.png", 
                        { image: "./assets/occupation_the_hero_back.png", level: -900 },
                        { image: "./assets/occupation_the_hero_horse.png", level: 900 },
                    ],
                },
                { 
                    name: "Singlet",
                    type: "options",
                    options: [
                        {
                            type: "dual",
                            assets: [ 
                                "./assets/occupation_luchador1.png",
                                "./assets/occupation_luchador2_back.png",
                            ],
                        },
                        {
                            type: "dual",
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
                            type: "dual",
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
                            type: "dual",
                            assets: [ "./assets/occupation_luchador2.png", "./assets/occupation_luchador2_back.png" ],
                        },
                    ] 
                },
                {
                    name: "Bearstappen",
                    type: "dual",
                    assets: [ "./assets/occupation_racer.png", "./assets/occupation_racer_back.png" ],
                },
                {
                    name: "Metabears United player",
                    type: "dual",
                    assets: [ "./assets/occupation_mufc.png", "./assets/occupation_mufc_back.png" ],
                },
                {
                    name: "William Mapan hoodie",
                    type: "options",
                    level: 275,
                    options: [
                        {
                            type: "dual",
                            assets: [ "./assets/occupation_creator_mapan.png", "./assets/occupation_creator_mapan_back.png" ],
                        },
                        {
                            type: "dual",
                            assets: [ "./assets/occupation_creator_mapan.png", "./assets/occupation_creator_mapan_back.png", "./assets/occupation_creator_mapan_top.png", "./assets/occupation_creator_mapan_top_back.png" ],
                        },
                    ]
                },
                {
                    name: "Yazid's brand",
                    type: "dual",
                    assets: [ "./assets/occupation_creator_yazid.png", "./assets/occupation_creator_yazid_back.png" ],
                },
                {
                    name: "Chef's attire",
                    type: "dual",
                    assets: [ "./assets/occupation_chef.png", "./assets/occupation_chef_back.png" ],
                },
                { 
                    name: "Swan dress",
                    type: "dual",
                    assets: [ 
                        "./assets/ocuppation_swan.png", 
                        "./assets/ocuppation_swan_back.png" 
                    ],
                },
                { 
                    name: "Developer",
                    type: "dual",
                    assets: [ "./assets/occupation_creator_engineer.png", "./assets/occupation_creator_engineer_back.png" ]
                },
                { 
                    name: "Explorer",
                    type: "dual",
                    assets: [ {
                        image: "./assets/occupation_explorer.png",
                        tinted: false,
                    }, {
                        image: "./assets/occupation_explorer_back.png",
                        tinted: false,
                    } ]
                },
                { 
                    name: "2001 Explorer",
                    type: "dual",
                    assets: [ {
                        image: "./assets/occupation_2001_explorer.png",
                        tinted: false,
                    }, {
                        image: "./assets/occupation_2001_explorer_back.png",
                        tinted: false,
                    } ],
                },
                { 
                    name: "Time machine scientist",
                    type: "dual",
                    assets: [ {
                        image: "./assets/occupation_emmet_brown.png",
                        tinted: false,
                    }, {
                        image: "./assets/occupation_emmet_brown_back.png",
                        tinted: false,
                    } ]
                },
                {
                    name: "Flowerist",
                    type: "dual",
                    assets: [ "./assets/occupation_farmer1.png", "./assets/occupation_farmer1_back.png" ],
                },
                {
                    name: "American Gothic farmer",
                    type: "dual",
                    assets: [ "./assets/occupation_farmer2.png", "./assets/occupation_farmer2_back.png" ],
                },
                { 
                    name: "(Not a) Criminal", 
                    type: "dual",
                    assets: [ "./assets/occupation_felon.png", "./assets/occupation_felon_back.png" ],
                    chance: 0.6,
                },
                {   
                    name: "Nordic fisher",
                    type: "dual",
                    assets: [ "./assets/occupation_fisher2.png", "./assets/occupation_fisher2_back.png" ],
                },
                { 
                    name: "Bathrobe",
                    type: "dual",
                    assets: [ "./assets/occupation_investor.png", "./assets/occupation_investor_back.png" ],
                    chance: 0.5,
                },
                {
                    name: "Shirt and jacket",
                    type: "dual",
                    tints: ["#3fb033", "#d12727", "#1e73a8", "#f5d10a" ],
                    chance: 0.5,
                    assets: [ 
                        { image: "./assets/occupation_citizen1_for_tinting.png", tint: [ "#eeeae4", "#82d0f1", "#444444" ] }, 
                        { image: "./assets/occupation_citizen1_back.png", tint: "#444444" },
                        { image: "./assets/occupation_citizen1_buttons.png", tint: false },
                        "./assets/empty.png",

                        { image: "./assets/occupation_jacket.png", tint: true },
                        { image: "./assets/occupation_jacket_back.png", tint: true },
                        { image: "./assets/occupation_jacket_patches.png", tint: ["#9d7a3c" ] },
                        "./assets/empty.png",
                        "./assets/occupation_jacket_zip.png",
                    ],
                },
                {
                    name: "Jacket",
                    type: "dual",
                    tints: ["#3fb033", "#d12727", "#46e3ff", "#f5d10a" ],
                    chance: 0,
                    assets: [ 
                        { image: "./assets/occupation_jacket.png", tint: true },
                        { image: "./assets/occupation_jacket_back.png", tint: true },
                        { image: "./assets/occupation_jacket_patches.png", tint: ["#9e7c5e" ] },
                        "./assets/empty.png",
                        { image: "./assets/occupation_jacket_thick_stripes.png", tint: ["#111111" ] },
                        "./assets/empty.png",
                        "./assets/occupation_jacket_zip.png",
                    ],
                },
                {
                    name: "Shirt",
                    type: "dual",
                    chance: 0,
                    assets: [ 
                        { image: "./assets/occupation_citizen1_for_tinting.png", tint: true, }, 
                        { image: "./assets/occupation_citizen1_back.png", tint: true, },
                        { image: "./assets/occupation_citizen1_buttons.png", tint: false, }
                    ],
                },
                {
                    name: "T-shirt",
                    type: "options",
                    chance: 0,
                    options: [
                        {
                            type: "dual",
                            assets: [ 
                                { image: "./assets/occupation_tshirt_white.png", tint: true }, 
                                { image: "./assets/occupation_creator_back.png", tint: true },
                            ],
                        },
                    ],
                },
                {
                    name: "Banana shirt",
                    type: "dual",
                    assets: [ 
                        { image: "./assets/occupation_citizen1_for_tinting.png", tint: true, }, 
                        { image: "./assets/occupation_citizen1_back.png", tint: true, },
                        { image: "./assets/occupation_citizen1_bananas.png", tinted: false, } 
                    ],
                },
                {
                    type: "dual",
                    chance: 0.9,
                    name: "Nudoru shirt",
                    tints: [ "#eeeae4", "#bee8f9", "#c1e2b8", "#ffdeca" ],
                    assets: [ 
                        { image: "./assets/occupation_citizen1_for_tinting.png", tint: true, }, 
                        { image: "./assets/occupation_citizen1_back.png", tint: true, },
                        { image: "./assets/occupation_nudoru_shirt.png", tinted: false, },
                        "./assets/empty.png",
                        { image: "./assets/occupation_citizen1_buttons.png", tint: false, }
                    ],
                },
                {
                    type: "dual",
                    chance: 0.9,
                    name: "SMOLSKULLs shirt",
                    assets: [ 
                        { image: "./assets/occupation_citizen1_for_tinting.png", tint: true, }, 
                        { image: "./assets/occupation_citizen1_back.png", tint: true, },
                        { image: "./assets/occupation_citizen1_smolskullz.png", tinted: false, },
                    ],
                },
                {
                    name: "Toxi t-shirt",
                    type: "options",
                    options: [
                        {
                            type: "dual",
                            assets: [ 
                                { image: "./assets/occupation_tshirt_white.png", tint: "#111111" }, 
                                { image: "./assets/occupation_creator_back.png", tint: "#111111" }, 
                                { image: "./assets/occupation_toxi.png" },
                                "./assets/empty.png",
                                "./assets/occupation_tshirt_white_lines.png",
                            ],
                        },
                        {
                            type: "dual",
                            assets: [ 
                                { image: "./assets/occupation_tshirt_white.png", tint: "#06a6e8" }, 
                                { image: "./assets/occupation_creator_back.png", tint: "#06a6e8" }, 
                                { image: "./assets/occupation_toxi.png" },
                            ],
                        },
                    ]
                },
                {
                    name: "Andreas Gysin t-shirt",
                    type: "dual",
                    assets: [ 
                        { image: "./assets/occupation_tshirt_white.png", tint: "#111111", }, 
                        { image: "./assets/occupation_creator_back.png", tint: "#111111", }, 
                        { image: "./assets/occupation_creator_andreasgysin.png" },
                        "./assets/empty.png",
                        "./assets/occupation_tshirt_white_lines.png",
                    ],
                },
                {
                    name: "OG t-shirt & Glomularus",
                    type: "dual",
                    assets: [ 
                        { image: "./assets/occupation_tshirt_white.png", tint: "#111111", }, 
                        { image: "./assets/occupation_creator_back.png", tint: "#111111", }, 
                        { image: "./assets/occupation_tshirt_white_lines.png" },
                        "./assets/occupation_glomularus_back.png",
                        "./assets/occupation_glomularus.png",
                    ],
                },
                {
                    name: "Nirvana t-shirt",
                    type: "options",
                    tints: [ "#1f7b99" ],
                    options: [
                        {
                            type: "dual",
                            assets: [ 
                                { image: "./assets/occupation_tshirt_white.png", tint: "#111111", }, 
                                { image: "./assets/occupation_creator_back.png", tint: "#111111", }, 
                                "./assets/occupation_creator_nirvana.png", 
                                "./assets/empty.png", 
                                "./assets/occupation_tshirt_white_lines.png",
                            ],
                        },
                        {
                            type: "dual",
                            assets: [ 
                                { image: "./assets/occupation_tshirt_white.png", tint: true, }, 
                                { image: "./assets/occupation_creator_back.png", tint: true, }, 
                                "./assets/occupation_creator_nirvana.png",
                            ],
                        },
                    ]
                },
                {
                    name: "Ciphrd t-shirt",
                    type: "dual",
                    tints: [ "#eeeae4" ],
                    assets: [ 
                        { image: "./assets/occupation_tshirt_white.png", tint: true, },
                        { image: "./assets/occupation_creator_back.png", tint: true, }, 
                        "./assets/occupation_ciphrd_shirt.png",
                    ]
                },
                {
                    name: "Picasso",
                    type: "dual",
                    tints: [ "#eeeae4" ],
                    assets: [ 
                        { image: "./assets/occupation_tshirt_white.png", tint: true, },
                        { image: "./assets/occupation_creator_back.png", tint: true, }, 
                        "./assets/occupation_picasso.png",
                        "./assets/empty.png",
                        { image: "./assets/occupation_picasso_lights.png", level: 900, }, 

                    ],
                },
                {
                    name: "Art Basel t-shirt",
                    type: "dual",
                    assets: [ 
                        { image: "./assets/occupation_tshirt_white.png", tint: "#111111", }, 
                        { image: "./assets/occupation_creator_back.png", tint: "#111111", }, 
                        "./assets/occupation_art_basel.png",
                        "./assets/empty.png", 
                        "./assets/occupation_tshirt_white_lines.png",
                    ]
                },
                {
                    name: "fx(hash) t-shirt",
                    type: "dual",
                    assets: [ 
                        { image: "./assets/occupation_tshirt_white.png", tint: "#090909", }, 
                        { image: "./assets/occupation_creator_back.png", tint: "#212121", }, 
                        { image: "./assets/occupation_creator_fxhash.png" },
                        "./assets/empty.png",
                        "./assets/occupation_tshirt_white_lines.png",
                    ],
                },
                {
                    name: "P1xelfool t-shirt",
                    type: "dual",
                    assets: [ 
                        { image: "./assets/occupation_tshirt_white.png", tint: "#0a31da", }, 
                        { image: "./assets/occupation_creator_back.png", tint: "#0000ff", }, 
                        { image: "./assets/occupation_p1xelfool.png" },
                    ],
                    chance: 1000,
                },
                {
                    name: "Horizontes t-shirt",
                    type: "dual",
                    assets: [ 
                        { image: "./assets/occupation_tshirt_white.png", tint: "#090909", }, 
                        { image: "./assets/occupation_creator_back.png", tint: "#49c06e", }, 
                        { image: "./assets/occupation_horizontes.png" },
                        "./assets/empty.png",
                        "./assets/occupation_tshirt_white_lines.png",
                    ],
                },
                {
                    name: "The Hill-side t-shirt",
                    type: "dual",
                    assets: [ 
                        { image: "./assets/occupation_tshirt_white.png", tint: "#111111", }, 
                        { image: "./assets/occupation_creator_back.png", tint: "#111111", }, 
                        "./assets/occupation_creator_thehillside.png",
                        "./assets/empty.png", 
                        "./assets/occupation_tshirt_white_lines.png",
                    ]
                },
                {
                    name: "wgmi hoodie",
                    type: "dual",
                    tints: ["#539d4b", "#e60d0d", "#f5d10a", "#46e3ff", "#dd0f66", "#9a04fc" ],
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
                    type: "dual",
                    tints: ["#539d4b", "#e60d0d", "#f5d10a", "#46e3ff", "#dd0f66", "#9a04fc" ],
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
                    chance: 0.5,
                },{
                    name: "gm hoodie",
                    type: "dual",
                    tints: ["#539d4b", "#e60d0d", "#f5d10a", "#46e3ff", "#dd0f66", "#9a04fc" ],
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
                    type: "dual",
                    tints: ["#3fb033", "#e60d0d", "#f5d10a", "#46e3ff", "#dd0f66", "#9a04fc" ],
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
                    type: "dual",
                    assets: [ "./assets/occupation_ninja.png", 
                        {
                            image: "./assets/occupation_ninja_back.png",
                            tint: true,
                        }
                    ]
                },
            ],
        },
        {    
            name: "Headwear",
            level: 300,
            features: [
                { 
                    name: "Cybearpunk headset", 
                    type: "dual",
                    assets: [
                        { image: "./assets/headwear_mecha_bear_ear.png", tint: true },
                        "./assets/headwear_mechabear_back.png",
                        { image: "./assets/headwear_mecha_bear.png" },
                    ],
                },
                {
                    type: "options",
                    name: "Luchador mask", 
                    options: [
                        { 
                            type: "front",
                            asset: "./assets/eyewear_luchador.png",
                        },
                        {
                            type: "front",
                            asset: "./assets/eyewear_nftbiker.png",
                        },
                    ],
                },
                { 
                    name: "Backwards hat", 
                    type: "dual",
                    tints: [ "#e60d0d", "#46e3ff", "#dd0f66", "#eeede6", "#3fb033", "#f5d10a", "#e1d9a0" ],
                    assets: [ 
                        {
                            image: "./assets/headwear_backwards_hat1.png",
                            tint: [ "#e60d0d", "#46e3ff", "#dd0f66", "#eeede6", "#3fb033", "#f5d10a", "#e1d9a0" ],
                        }, 
                        {
                            image: "./assets/headwear_backwards_hat_back.png",
                            tint: true, 
                        },
                        {
                            image: "./assets/headwear_backwards_hat2.png",
                            tint: true,
                        },
                    ],
                },

                { 
                    name: "Noya hat",
                    type: "dual",
                    chance: 0,
                    assets: [
                        {
                            image: "./assets/headwear_hat_cap.png",
                            tint: true,
                        },
                        "./assets/headwear_cap_back.png",
                        {
                            image: "./assets/headwear_hat_visor.png",
                            tint: true,
                        },
                        "./assets/empty.png",
                        {
                            image: "./assets/headwear_hat_noya.png",
                            tint: false,
                        },
                    ],
                },
                { 
                    name: "Golfer hat",
                    type: "options",
                    options: [
                        {
                            type: "dual",
                            assets: [
                                "./assets/headwear_golf_hat.png",
                                "./assets/headwear_golf_cap_back.png",
                                "./assets/headwear_only_golfers.png",
                            ],
                        }
                    ]
                },
                { 
                    name: "fx(hash) hat",
                    type: "options",
                    options: [
                        {
                            type: "dual",
                            assets: [
                                "./assets/headwear_golf_hat.png",
                                "./assets/headwear_golf_cap_back.png",
                                "./assets/headwear_fxhash.png",
                            ],
                        }
                    ]
                },

                { 
                    name: "Killed by a Pixel hat",
                    type: "options",
                    options: [
                        {
                            type: "dual",
                            assets: [
                                {
                                    image: "./assets/headwear_hat_cap.png",
                                    tint: ["#4abed8", "#25f47f", "#c4b4fb", "#f4e054", "#e8e2b9"],
                                },
                                "./assets/headwear_cap_back.png",
                                {
                                    image: "./assets/headwear_hat_visor.png",
                                    tint: ["#4abed8", "#25f47f", "#c4b4fb", "#f4e054", "#e8e2b9"],
                                },
                                "./assets/empty.png",
                                {
                                    image: "./assets/headwear_ff.png",
                                    tint: "#000000",
                                },
                            ],
                        },
                        {
                            type: "dual",
                            assets: [
                                {
                                    image: "./assets/headwear_hat_cap.png",
                                    tint: ["#f20b68", "#ff2f00", "#8d1ee6"],
                                },
                                "./assets/headwear_cap_back.png",
                                {
                                    image: "./assets/headwear_hat_visor.png",
                                    tint: ["#f20b68", "#ff2f00", "#8d1ee6"],
                                },
                                "./assets/empty.png",
                                {
                                    image: "./assets/headwear_ff.png",
                                    tint: "#f0f0f0",
                                },
                            ],
                        }
                    ]
                },
                { 
                    name: "Beekeeper", 
                    type: "dual",
                    assets: [ "./assets/headwear_beekeeper.png", "./assets/headwear_beekeeper_back.png" ],
                    chance: 0.6,
                    level: 850,
                },
                {
                    name: "Action helmet", 
                    type: "dual",
                    tints: ["#91dcff", "#ff74d9"],
                    assets: [
                        {
                            image: "./assets/headwear_action_helmet_strap.png",
                            tint: false,
                            level: 100,
                        }, {
                            image: "./assets/headwear_action_helmet_back.png",
                            tint: true,
                        }, {
                            image: "./assets/headwear_action_helmet.png",
                            tint: true,
                            level: 450,
                        },
                        "./assets/empty.png", {
                            image: "./assets/headwear_action_helmet_action_cam.png",
                            tint: false,
                            level: 451,
                        },
                         ],
                },
                {
                    name: "Magritte's bowler", 
                    type: "options",
                    options: [
                        {
                            type: "front",
                            assets: [
                                "./assets/headwear_magritte_bowler.png",
                            ],
                        },
                        {
                            type: "front",
                            assets: [
                                "./assets/headwear_magritte_bowler.png",
                                { image: "./assets/hearwear_magritte_apple.png", level: 580 }
                            ],
                        }
                    ],
                },
                {
                    name: "Cuts haircut", 
                    type: "dual",
                    assets: ["./assets/headwear_cuts.png", "./assets/headwear_cuts_back.png"],
                },
                {
                    name: "Tupac bandana", 
                    type: "dual",
                    assets: ["./assets/headwear_tupac_bandana.png", "./assets/headwear_tupac_headband_back.png"],
                },
                { 
                    name: "Hard top", 
                    type: "dual",
                    assets: [ "./assets/headwear_engineer.png", "./assets/headwear_engineer_back.png" ],
                    level: 800,
                },
                { 
                    name: "Marina Abramović's hair", 
                    type: "dual",
                    assets: [ 
                        "./assets/headwear_marina_hair.png", 
                        "./assets/headwear_marina_back.png",
                        { image: "./assets/headwear_marina_hair_top.png", level: 600 },
                    ],
                },
                { 
                    name: "Chicken mask", 
                    type: "dual",
                    assets: [ "./assets/headwear_chicken_mask.png", "./assets/headwear_chicken_mask_back.png" ],
                },
                { 
                    name: "Little kitty bow", 
                    type: "front",
                    assets: [ "./assets/headwear_japanese_cat_bow.png" ],
                },
                { 
                    name: "Yayoi Kusama wig", 
                    type: "dual",
                    assets: [ "./assets/headwear_yayoi_kusama.png", "./assets/headwear_yayoi_kusama_back.png" ],
                },
                { 
                    name: "Kasa", 
                    type: "dual",
                        assets: [ "./assets/headwear_kasa.png", "./assets/headwear_kasa_back.png" ],
                },
                { 
                    name: "Top hat", 
                    type: "front",
                    asset: "./assets/headwear_top_hat.png",
                    chance: 0.35,
                },
                { 
                    name: "Patty flipper", 
                    type: "front",
                    asset: "./assets/headwear_patty_flipper.png",
                },
                { 
                    name: "Unpredictable taquero hat", 
                    type: "front",
                    asset: "./assets/headwear_unpred_taco.png",
                },
                {
                    name: "Arab hat", 
                    type: "dual",
                    assets: ["./assets/empty.png", "./assets/headwear_arab_hat_back.png"],
                },
                {
                    name: "RIGHT CLICK SAVE headband", 
                    type: "dual",
                    assets: ["./assets/headwear_rcs.png", "./assets/headwear_headband_back.png" ],
                },
                {
                    name: "RIGHT CLICK SAVE Artnome headband", 
                    type: "dual",
                    assets: [ "./assets/headwear_rcs.png", "./assets/headwear_artnome_back.png" ],
                },
                {
                    name: "ClubNFT headband", 
                    type: "dual",
                    assets: ["./assets/headwear_clubnft.png", "./assets/headwear_headband_back.png" ],
                },
                {
                    name: "ClubNFT Artnome headband", 
                    type: "dual",
                    assets: [ "./assets/headwear_clubnft.png", "./assets/headwear_artnome_back.png" ],
                },
                {
                    name: "Lush Memories flower crown", 
                    type: "dual",
                    assets: ["./assets/headwear_lush_memories.png", "./assets/headwear_lush_memories_back.png" ],
                },
                {
                    name: "Pork pie hat", 
                    type: "dual",
                    assets: [
                        {
                            image: "./assets/headwear_hipster_hat1.png",
                            tint: [ "#e60d0d", "#46e3ff", "#dd0f66", "#eeede6" ],
                        },
                        "./assets/headwear_hipster_hat_back.png",
                        {
                            image: "./assets/headwear_hipster_hat3.png",
                            tint: [ "#3fb033", "#f5d10a", "#e1d9a0" ],
                        },
                        "./assets/empty.png",
                        {
                            image: "./assets/headwear_hipster_hat2.png",
                            tint: false,
                        },
                    ],
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
                    type: "dual",
                    assets: ["./assets/headwear_ryans_owl.png", "./assets/headwear_ryans_owl_back.png"],
                },
                { 
                    name: "Mohawk punk", 
                    type: "options",
                    chance: 0.7,
                    options: [
                        {
                            type: "front",
                            asset: "./assets/headwear_pink_punk.png",
                        },
                        {
                            type: "front",
                            asset: {
                                image: "./assets/headwear_pink_punk.png",
                                tint: "#f5d10a",
                            }
                        },
                        {
                            type: "front",
                            asset: {
                                image: "./assets/headwear_pink_punk.png",
                                tint: "#9a04fc",
                            }
                        },
                    ]
                },
                { 
                    name: "Punevyr's cap", 
                    type: "dual",
                    assets: [ "./assets/headwear_punevyr_cap.png", "./assets/headwear_punevyr_cap_back.png" ],
                },
                { 
                    name: "Party hat", 
                    asset: "./assets/headwear_party_hat.png",
                },
                { 
                    type: "dual",
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
                    type: "dual",
                    assets: [ 
                        { 
                            image: "./assets/headwear_swimming_cap.png",
                            tint: true, 
                        }
                        , "./assets/headwear_swimming_cap_back.png",
                        "./assets/headwear_swimming_cap_goggles.png"
                    ],
                },
                { 
                    name: "Beanie", 
                    type: "dual",
                    assets: [{
                        image: "./assets/headwear_beanie.png",
                        tint: true,
                    }, {
                        image: "./assets/headwear_beanie_back.png",
                        tint: true,
                    }
                    ]
                },
                { 
                    name: "Cat ears", 
                    asset: "./assets/headwear_cat_ears.png",
                    chance: 0.35,
                },
                { 
                    name: "Bunny ears", 
                    asset: "./assets/headwear_bunny_ears.png",
                    chance: 0.35,
                },
                { 
                    name: "Karate headband", 
                    type: "dual",
                    assets: [ "./assets/headwear_karate_band.png", "./assets/headwear_karate_band_back.png" ],
                },
                { 
                    name: "Zancan headband", 
                    type: "options",
                    options: [
                        {
                            type: "dual",
                            assets: ["./assets/headwear_zancan_band.png", "./assets/headwear_zancan_band_back.png"],
                        },
                        {
                            type: "dual",
                            assets: ["./assets/headwear_zancan_green_band.png", "./assets/headwear_zancan_green_band_back.png"],
                        }
                    ],
                },
                { 
                    name: "Crown", 
                    asset: "./assets/headwear_crown.png",
                },
                { 
                    name: "Fisher hat",
                    type: "dual",
                    assets: [ "./assets/headwear_fisher_hat.png", "./assets/headwear_fisher_hat_back.png" ],
                },
                { 
                    name: "Captain hat", 
                    asset: "./assets/headwear_captain_hat.png",
                    level: 800,
                },
                { 
                    type: "options",
                    name: "Space helmet", 
                    options: [
                        {
                            type: "dual",
                            assets: [ "./assets/headwear_space_helmet_golden.png", "./assets/headwear_space_helmet_back.png", "./assets/headwear_space_helmet_cover.png" ],
                        },
                        {
                            type: "dual",
                            assets: [ "./assets/headwear_space_helmet_red_dot.png", "./assets/headwear_space_helmet_back.png", "./assets/headwear_space_helmet_cover.png" ],
                        },
                        {
                            type: "dual",
                            assets: [ "./assets/headwear_space_helmet_green.png", "./assets/headwear_space_helmet_back.png", "./assets/headwear_space_helmet_cover.png" ],
                        },
                    ],
                    level: 850,
                },
                { 
                    type: "back",
                    name: "Basquiat's hairdo", 
                    asset: "./assets/headwear_basquiat_hairdo.png",
                },
                { 
                    type: "dual",
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
                    name: "Cybearpunk visor", 
                    tints: ["#be1b00", "#2398ca", "#288b00", "#fbbf1e", "#5f3368"],
                    assets: [
                        {
                            image: "./assets/eyewear_mecha_bear_color.png",
                            tint: true,
                        }, "./assets/eyewear_mecha_bear.png",
                        {
                            image: "./assets/eyewear_mecha_bear_lights.png",
                            tint: true,
                        }
                    ],
                },
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
                    chance: 0.7,
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
                    type: "dual",
                    assets: [{
                        image: "./assets/eyewear_snorkel.png",
                        tint: false,
                    }, 
                    "./assets/eyewear_snorkel_back.png",
                    {
                        image: "./assets/eyewear_snorkel_color.png",
                        tint: true,
                    }],
                },
                { 
                    type: "front",
                    name: "Space glasses", 
                    chance: 0.4,
                    asset:  { 
                        image: "./assets/eyewear_space_glasses.png",
                        tint: true,
                    },
                },
                {
                    type: "dual",
                    name: "Ninja band",
                    type: "dual",
                    tints: ["#2ec7ff", "#e21100", "#fbe105", "#8102d1"],
                    assets: [ { 
                        image: "./assets/eyewear_ninja_band.png",
                        tint: true,
                    }, { 
                        image: "./assets/eyewear_ninja_band_back.png",
                        tint: true,
                    } ],
                },
                { 
                    name: "Staking sleep mask", 
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
                    type: "dual",
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
                    name: "Cybearpunk Towers mouth",
                    assets: [ {
                        image: "./assets/mouth_mecha_bear_base.png",
                        level: 50,
                    }, {
                        image: "./assets/mouth_mecha_bear.png",
                    }, {
                        image: "./assets/mouth_mecha_bear_tubes.png",
                        tint: ["#be1b00", "#2398ca", "#288b00", "#fbbf1e", "#43423d", "#5f3368"],
                    }],
                },
                { 
                    name: "RGB puke", 
                    asset: "./assets/mouth_rgb_puke.png",
                },
                { 
                    name: "Tezumie beard", 
                    asset: "./assets/mouth_tezumie_beard.png",
                    chance: 0.5,
                    level: 250,
                },
                { 
                    name: "Elote", 
                    asset: "./assets/mouth_elote.png",
                },
                { 
                    name: "Goatee", 
                    asset: "./assets/mouth_goatee.png",
                    level: 250,
                },
                { 
                    name: "Zapata mustache", 
                    asset: "./assets/mouth_zapata_mustache.png",
                },
                { 
                    name: "Tezzardz gold medal", 
                    type: "front",
                    assets: [ 
                        "./assets/mouth_tezzards_medal.png", 
                        { image: "./assets/mouth_tezzards_medal_back.png", level: -50 },
                    ],
                },
                { 
                    name: "Tender pass", 
                    asset: "./assets/mouth_tender_pass.png",
                },
                { 
                    name: "Astronomic Comics signed postcard", 
                    asset: "./assets/mouth_astronomical_comics.png",
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
                    type: "dual",
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
                    name: "Jimi Wen's ink art",
                    asset: "./assets/mouth_wenjimi_ink_art.png",
                    level: 575,
                },
                { 
                    name: "Salmon", 
                    asset: "./assets/mouth_salmon.png",
                },
                { 
                    name: "Wheat straw", 
                    asset: "./assets/mouth_wheat_straw.png",
                },
                { 
                    name: "Hmmmm", 
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
                    assets: [ {
                        image: "./assets/mouth_dali_mustache.png"
                    }, {
                        image: "./assets/mouth_dali_mustache_mouth.png",
                        level: 250,
                    }],
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
                    name: "Meh", 
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
                    type: "empty",
                    name: "None",     
                    chance: 83 
                },
                { 
                    name: "Silver",
                    type: "dual",
                    assets: [ "./assets/bling_silver.png", "./assets/bling_silver_back.png" ], 
                    chance: 5,
                },
                { 
                    name: "Gold",
                    type: "dual",
                    assets: [ "./assets/bling_gold.png", "./assets/bling_gold_back.png" ], 
                    chance: 3,
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

export default losOsosSchema;