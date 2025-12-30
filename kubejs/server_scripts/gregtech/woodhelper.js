ServerEvents.recipes((event) => {
    const recipesToRemove = [
        'malum:solid_soulwood_trapdoor',
        'malum:solid_runewood_trapdoor',
    ];

    recipesToRemove.forEach((recipeId) => {
        event.remove({ id: recipeId });
    });

    const greg = event.recipes.gtceu;
    // prettier-ignore
    const trapdoorMaterials = [["iron", 1], ["steel", 2]];
    // prettier-ignore
    const signMaterials = [["iron", 3], ["steel", 5]];
    // -----------------------
    // crafting processors
    // -----------------------
    function processPlanks(uniqueId, plankId, logs) {
        // if no logs detected dont continue -- samed logic for rest of the functions
        if (logs.length === 0) return;

        // this lets all logs of the same type be used for this recipe
        let logIngredient = Ingredient.of(logs);
        event.shaped(
            `4x ${plankId}`,
            [
                'sp',
            ],
            {
                s: '#forge:tools/saws',
                p: logIngredient,
            }
        );
    }

    function processLogs(uniqueId, plankId, logs) {
        if (logs.length === 0) return;
        let logIngredient = Ingredient.of(logs);

        // vanilla
        event
            .shapeless('2x ' + plankId, [logIngredient])
            .id('kubejs:woodhelper/planks_' + uniqueId);

        // cutter (water)
        greg.cutter('kubejs:cutter/water_' + uniqueId)
            .itemInputs(logIngredient)
            .inputFluids(Fluid.of('minecraft:water', 4))
            .itemOutputs('6x ' + plankId, '2x gtceu:wood_dust')
            .duration(400)
            .EUt(GTValues.VA[GTValues.ULV]);

        // cutter (dh20)
        greg.cutter('kubejs:cutter/distilled_' + uniqueId)
            .itemInputs(logIngredient)
            .inputFluids(Fluid.of('gtceu:distilled_water', 3))
            .itemOutputs('6x ' + plankId, '2x gtceu:wood_dust')
            .duration(300)
            .EUt(GTValues.VA[GTValues.ULV]);

        // cutter (lube)
        greg.cutter('kubejs:cutter/lubricant_' + uniqueId)
            .itemInputs(logIngredient)
            .inputFluids(Fluid.of('gtceu:lubricant', 1))
            .itemOutputs('6x ' + plankId, '2x gtceu:wood_dust')
            .duration(200)
            .EUt(GTValues.VA[GTValues.ULV]);
    }

    function processSlabs(uniqueId, plankId, slabs) {
        if (slabs.length === 0) return;
        let slabItem = slabs[0];

        // cutter
        greg.cutter('kubejs:cutter/slab_water_' + uniqueId)
            .itemInputs(plankId)
            .inputFluids(Fluid.of('minecraft:water', 4))
            .itemOutputs('2x ' + slabItem)
            .duration(100)
            .EUt(GTValues.VA[GTValues.ULV]);

        greg.cutter('kubejs:cutter/slab_distilled_' + uniqueId)
            .itemInputs(plankId)
            .inputFluids(Fluid.of('gtceu:distilled_water', 3))
            .itemOutputs('2x ' + slabItem)
            .duration(75)
            .EUt(GTValues.VA[GTValues.ULV]);

        greg.cutter('kubejs:cutter/slab_lube_' + uniqueId)
            .itemInputs(plankId)
            .inputFluids(Fluid.of('gtceu:lubricant', 1))
            .itemOutputs('2x ' + slabItem)
            .duration(50)
            .EUt(GTValues.VA[GTValues.ULV]);

        // saw
        event
            .shaped('2x ' + slabItem, ['sS'], {
                S: plankId,
                s: '#forge:tools/saws',
            })
            .id('kubejs:woodhelper/saw_slab_' + uniqueId);
    }

    function processStairs(uniqueId, plankId, stairs) {
        if (stairs.length === 0) return;
        let stairItem = stairs[0];

        greg.assembler('kubejs:assembler/stairs_' + uniqueId)
            .itemInputs(plankId, plankId, plankId)
            .circuit(7)
            .itemOutputs('4x ' + stairItem)
            .duration(200)
            .EUt(7);
    }

    function processFences(uniqueId, plankId, fences, gates) {
        // fences
        if (fences.length > 0) {
            event.shaped(
                fences[0],
                [
                    'psp',
                    'psp',
                    'psp',
                ],
                {
                    p: plankId,
                    s: '#forge:rods/wooden',
                }
            );
            greg.assembler('kubejs:assembler/fence_' + uniqueId)
                .itemInputs(plankId)
                .circuit(13)
                .itemOutputs(fences[0])
                .duration(100)
                .EUt(7);
        }

        // gates
        if (gates.length > 0) {
            event.shaped(
                gates[0],
                [
                    'f f',
                    'sps',
                    'sps',
                ],
                {
                    p: plankId,
                    s: '#forge:rods/wooden',
                    f: 'minecraft:flint',
                }
            );
            event.shaped(
                '2x ' + gates[0],
                [
                    'fwf',
                    'sps',
                    'sps',
                ],
                {
                    p: plankId,
                    s: '#forge:rods/wooden',
                    f: 'gtceu:iron_screw',
                    w: '#forge:tools/screwdrivers',
                }
            );
            greg.assembler('kubejs:assembler/gate_' + uniqueId)
                .itemInputs('2x ' + plankId, '2x #forge:rods/wooden')
                .circuit(2)
                .itemOutputs(gates[0])
                .duration(100)
                .EUt(7);
        }
    }

    function processDoors(uniqueId, plankId, doors, trapdoors) {
        if (doors.length === 0 || trapdoors.length === 0) return;

        // door
        event
            .shaped(
                doors[0],
                [
                    'pts',
                    'pri',
                    'ppw',
                ],
                {
                    p: plankId,
                    t: trapdoors[0],
                    s: '#forge:tools/screwdrivers',
                    r: 'gtceu:iron_ring',
                    i: 'gtceu:iron_screw',
                    w: '#forge:tools/saws',
                }
            )
            .id('kubejs:shaped/door_' + uniqueId);
        greg.assembler('kubejs:assembler/door_' + uniqueId)
            .itemInputs('4x ' + plankId, trapdoors[0])
            .inputFluids(Fluid.of('gtceu:iron', 16))
            .itemOutputs(doors[0])
            .duration(100)
            .EUt(7);

        // trapdoor (steel recipe and iron recipe)
        trapdoorMaterials.forEach(
            ([
                material,
                count,
            ]) => {
                event
                    .shaped(
                        `${count}x ${trapdoors[0]}`,
                        [
                            'apr',
                            'psp',
                            'rpa',
                        ],
                        {
                            p: plankId,
                            r: '#forge:rods/wooden',
                            a: `gtceu:${material}_bolt`,
                            s: '#forge:tools/screwdrivers',
                        }
                    )
                    .id(`kubejs:shaped/trapdoor_${uniqueId}_${material}`);
                greg.assembler(
                    `kubejs:assembler/trapdoor_${material}_${uniqueId}`
                )
                    .itemInputs(`2x ${plankId}`)
                    .inputFluids(Fluid.of(`gtceu:${material}`, 16))
                    .circuit(3)
                    .itemOutputs(`${count}x ${trapdoors[0]}`)
                    .duration(100)
                    .EUt(7);
            }
        );
    }

    function processBoats(uniqueId, plankId, boats, chestBoats, slabs) {
        if (boats.length === 0 || slabs.length === 0) return;

        // boat
        event.shaped(
            boats[0],
            [
                'ptp',
                'pkp',
                'sss',
            ],
            {
                p: plankId,
                t: '#minecraft:shovels',
                k: '#gtceu:tools/crafting_knives',
                s: slabs[0],
            }
        );
        greg.assembler(`kubejs:assembler/boat_${uniqueId}`)
            .itemInputs(`5x ${plankId}`)
            .circuit(15)
            .duration(100)
            .EUt(7)
            .itemOutputs(boats[0]);

        // boat with a chest i guess
        if (chestBoats.length > 0) {
            event.shaped(
                chestBoats[0],
                [
                    ' b ',
                    'wcw',
                    ' a ',
                ],
                {
                    b: boats[0],
                    w: `gtceu:wood_bolt`,
                    c: `#forge:chests/wooden`,
                    a: `#forge:tools/wrenches`,
                }
            );
            greg.assembler(`kubejs:assembler/boat_chest_${uniqueId}`)
                .itemInputs(boats[0], '#forge:chests/wooden')
                .circuit(16)
                .duration(100)
                .EUt(7)
                .itemOutputs(chestBoats[0]);
        }
    }

    function processRedstone(uniqueId, plankId, buttons, plates, slabs) {
        if (buttons.length === 0 || plates.length === 0 || slabs.length === 0)
            return;

        // i didnt know this recipe existed
        event.shaped(`6x ${buttons[0]}`, ['sp'], {
            s: '#forge:tools/saws',
            p: plates[0],
        });

        // i hate these recipes
        event.shaped(
            `2x ${plates[0]}`,
            [
                'bmb',
                'sSs',
                'bdb',
            ],
            {
                b: 'gtceu:wood_bolt',
                s: slabs[0],
                S: 'gtceu:iron_spring',
                d: '#forge:tools/screwdrivers',
                m: '#forge:tools/mallets',
            }
        );

        greg.assembler(`kubejs:assembler/pressure_plate_${uniqueId}`)
            .itemInputs(`2x ${slabs[0]}`, 'gtceu:iron_spring')
            .circuit(7)
            .duration(100)
            .EUt(7)
            .itemOutputs(plates[0]);

        // button cutting because people use that apparently
        greg.cutter('kubejs:cutter/button_water_' + uniqueId)
            .itemInputs(plates[0])
            .inputFluids(Fluid.of('minecraft:water', 4))
            .itemOutputs('12x ' + buttons[0])
            .duration(100)
            .EUt(GTValues.VA[GTValues.ULV]);

        greg.cutter('kubejs:cutter/button_distilled_' + uniqueId)
            .itemInputs(plates[0])
            .inputFluids(Fluid.of('gtceu:distilled_water', 3))
            .itemOutputs('12x ' + buttons[0])
            .duration(75)
            .EUt(GTValues.VA[GTValues.ULV]);

        greg.cutter('kubejs:cutter/button_lube_' + uniqueId)
            .itemInputs(plates[0])
            .inputFluids(Fluid.of('gtceu:lubricant', 1))
            .itemOutputs('12x ' + buttons[0])
            .duration(50)
            .EUt(GTValues.VA[GTValues.ULV]);
    }

    function processSigns(uniqueId, plankId, signs, hanging_signs, slabs) {
        if (
            signs.length === 0 ||
            hanging_signs.length === 0 ||
            slabs.length === 0
        )
            return;

        // crafting signs
        trapdoorMaterials.forEach(
            ([
                material,
                count,
            ]) => {
                event.shaped(
                    `${count}x ${signs[0]}`,
                    [
                        'sss',
                        'ipi',
                        'Srd',
                    ],
                    {
                        s: slabs[0],
                        i: `gtceu:${material}_screw`,
                        p: plankId,
                        r: '#forge:rods/wooden',
                        S: '#forge:tools/saws',
                        d: '#forge:tools/screwdrivers',
                    }
                );
                event.shaped(
                    `${count}x ${hanging_signs[0]}`,
                    [
                        'sss',
                        'c c',
                        'rSr',
                    ],
                    {
                        s: slabs[0],
                        c: 'minecraft:chain',
                        r: `gtceu:${material}_ring`,
                        S: signs[0],
                    }
                );
            }
        );
        // assembling signs
        signMaterials.forEach(
            ([
                material,
                count,
            ]) => {
                greg.assembler(
                    'kubejs:assembler/sign_' + uniqueId + '_' + material
                )
                    .itemInputs(slabs[0], '#forge:rods/wooden')
                    .circuit(4)
                    .inputFluids(Fluid.of(`gtceu:${material}`, 16))
                    .itemOutputs(`${count}x ${signs[0]}`)
                    .EUt(7)
                    .duration(100);
            }
        );
        greg.assembler('kubejs:assembler/hanging_sign_' + uniqueId)
            .itemInputs('3x ' + slabs[0], signs[0], '2x minecraft:chain')
            .circuit(5)
            .itemOutputs(hanging_signs[0])
            .EUt(7)
            .duration(100);
    }

    // ---------------------------------------------------------
    // setup and helper functions
    // ---------------------------------------------------------

    function getPlankId(itemId, config) {
        let modId = itemId.split(':')[0];
        let name = itemId.split(':')[1];
        name = name.replace('stripped_', '').replace('_stripped', '');

        if (config.regex) {
            name = name.replace(config.regex, '');
        } else if (config.suffixes) {
            for (let suffix of config.suffixes) {
                if (name.endsWith(suffix)) {
                    name = name.substring(0, name.length - suffix.length);
                    break;
                }
            }
        }
        if (name.endsWith('_')) name = name.substring(0, name.length - 1);

        let plankId = modId + ':' + name + '_planks';

        // manual overrides
        const idOverrides = {
            // what the regex turns it into: what it actually is
            'forestry:zebra_planks': 'forestry:zebrawood_planks',
            'ars_nouveau:blue_arch_planks': 'ars_nouveau:archwood_planks',
            'ars_nouveau:green_arch_planks': 'ars_nouveau:archwood_planks',
            'ars_nouveau:red_arch_planks': 'ars_nouveau:archwood_planks',
            'ars_nouveau:purple_arch_planks': 'ars_nouveau:archwood_planks',
            'botania:living_planks': 'botania:livingwood_planks',
            'botania:dream_planks': 'botania:dreamwood_planks',
            'botania:shimmer_planks': 'botania:shimmerwood_planks',
        };

        if (idOverrides[plankId]) {
            plankId = idOverrides[plankId];
        }
        // ----------------------------------------

        if (Item.of(plankId).isEmpty()) return null;
        return plankId;
    }

    // ---------------------------------------------------------
    // execution
    // ---------------------------------------------------------

    // remove vanilla recipes
    event.forEachRecipe(
        { type: 'minecraft:crafting_shapeless', output: '#minecraft:planks' },
        (r) => {
            if (r.originalRecipeResult.count === 4)
                event.remove({ id: r.getId() });
        }
    );

    // collect the data like facebook
    let woodGroups = {};
    // prettier-ignore
    let tagMap = {
        '#minecraft:logs':                   { key: 'logs',          regex:    /_?(log|wood|stem|hyphae).*$/ },
        '#minecraft:wooden_doors':           { key: 'doors',         suffixes: ['_door']                                    },
        '#minecraft:wooden_trapdoors':       { key: 'trapdoors',     suffixes: ['_trapdoor']                                },
        '#forge:trapdoors/wooden':       { key: 'trapdoors',     suffixes: ['_trapdoor']                                },
        '#minecraft:wooden_fences':          { key: 'fences',        suffixes: ['_fence']                                   },
        '#forge:fence_gates/wooden':         { key: 'gates',         suffixes: ['_fence_gate', '_gate']                     },
        '#minecraft:wooden_pressure_plates': { key: 'plates',        suffixes: ['_pressure_plate']                          },
        '#minecraft:wooden_buttons':         { key: 'buttons',       suffixes: ['_button']                                  },
        '#minecraft:wooden_slabs':           { key: 'slabs',         suffixes: ['_slab']                                    },
        '#minecraft:wooden_stairs':          { key: 'stairs',        suffixes: ['_stairs']                                  },
        '#minecraft:chest_boats':            { key: 'chest_boats',   suffixes: ['_chest_boat']                              },
        '#minecraft:boats':                  { key: 'boats',         suffixes: ['_boat']                                    },
        '#minecraft:signs':                  { key: 'signs',         suffixes: ['_sign']                                    },
        '#minecraft:hanging_signs':          { key: 'hanging_signs', suffixes: ['_hanging_sign']                            },
    };

    Object.keys(tagMap).forEach((tag) => {
        let config = tagMap[tag];
        Ingredient.of(tag).itemIds.forEach((itemId) => {
            let plankId = getPlankId(itemId, config);
            if (!plankId) return;
            if (itemId.includes('fireproof')) return;
            if (!woodGroups[plankId]) {
                woodGroups[plankId] = {
                    planks: plankId,
                    logs: [],
                    doors: [],
                    trapdoors: [],
                    fences: [],
                    gates: [],
                    plates: [],
                    buttons: [],
                    slabs: [],
                    stairs: [],
                    boats: [],
                    chest_boats: [],
                    signs: [],
                    hanging_signs: [],
                };
            }
            if (woodGroups[plankId][config.key]) {
                woodGroups[plankId][config.key].push(itemId);
            }
        });
    });

    const manualMods = ['forestry'];
    // forestry for some reason loads before the tags or has broken tags or something

    manualMods.forEach((mod) => {
        Ingredient.of(`@${mod}`).itemIds.forEach((itemId) => {
            let alreadyFound = false;
            for (let p in woodGroups) {
                for (let key in woodGroups[p]) {
                    if (
                        Array.isArray(woodGroups[p][key]) &&
                        woodGroups[p][key].includes(itemId)
                    ) {
                        alreadyFound = true;
                        break;
                    }
                }
            }
            if (alreadyFound) return;

            // 2. Identify what kind of item this is based on name
            let config = null;
            let typeKey = null;

            // Check against our tagMap rules manually
            for (let tag in tagMap) {
                let conf = tagMap[tag];
                // Check regex
                if (conf.regex && conf.regex.test(itemId)) {
                    config = conf;
                    typeKey = conf.key;
                    break;
                }
                // Check suffixes
                if (conf.suffixes) {
                    for (let suffix of conf.suffixes) {
                        if (itemId.endsWith(suffix)) {
                            config = conf;
                            typeKey = conf.key;
                            break;
                        }
                    }
                }
                if (config) break;
            }
            if (config && typeKey) {
                let plankId = getPlankId(itemId, config);
                if (plankId) {
                    if (!woodGroups[plankId]) {
                        woodGroups[plankId] = {
                            planks: plankId,
                            logs: [],
                            doors: [],
                            trapdoors: [],
                            fences: [],
                            gates: [],
                            plates: [],
                            buttons: [],
                            slabs: [],
                            stairs: [],
                            boats: [],
                            chest_boats: [],
                            signs: [],
                            hanging_signs: [],
                        };
                    }
                    if (!woodGroups[plankId][typeKey].includes(itemId)) {
                        woodGroups[plankId][typeKey].push(itemId);
                        console.info(
                            `[Manual Scan] Force added ${itemId} to ${plankId}`
                        );
                    }
                }
            }
        });
    });

    // main loop!!!
    const keysToRemove = [
        'slabs',
        'fences',
        'gates',
        'doors',
        'trapdoors',
        'boats',
        'chest_boats',
        'buttons',
        'plates',
        'signs',
        'hanging_signs',
    ];

    for (let plankId in woodGroups) {
        let group = woodGroups[plankId];
        let uniqueId = plankId.replace(':', '_').replace('_planks', '');
        keysToRemove.forEach((key) => {
            if (group[key]) {
                group[key].forEach((itemId) => {
                    event.remove({ output: itemId });
                });
            }
        });
        processPlanks(uniqueId, plankId, group.logs);
        processLogs(uniqueId, plankId, group.logs);
        processSlabs(uniqueId, plankId, group.slabs);
        processStairs(uniqueId, plankId, group.stairs);
        processFences(uniqueId, plankId, group.fences, group.gates);
        processDoors(uniqueId, plankId, group.doors, group.trapdoors);
        processBoats(
            uniqueId,
            plankId,
            group.boats,
            group.chest_boats,
            group.slabs
        );
        processRedstone(
            uniqueId,
            plankId,
            group.buttons,
            group.plates,
            group.slabs
        );
        processSigns(
            uniqueId,
            plankId,
            group.signs,
            group.hanging_signs,
            group.slabs
        );
    }
});
