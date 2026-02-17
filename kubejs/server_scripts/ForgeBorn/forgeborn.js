ServerEvents.recipes((event) => {
    event.remove({ output: 'gtceu:flint_knife' });
    event.remove({ id: 'gtceu:shaped/spring_cloggrum' });

    const { naturesaura } = event.recipes;
    event.shaped(
        Item.of('4x gtceu:cobblestone_ingot'),
        [
            '   ',
            ' C ',
            ' F ',
        ],
        {
            C: 'minecraft:cobblestone',
            F: '#gtceu:tools/crafting_files',
        }
    );
    event.shaped(
        Item.of('kubejs:rope'),
        [
            '  S',
            ' S ',
            'S  ',
        ],
        {
            S: 'minecraft:string',
        }
    );

    event.shaped(
        Item.of('kubejs:cloth'),
        [
            ' SN',
            'SSS',
            ' S ',
        ],
        {
            S: 'minecraft:string',
            N: 'kubejs:needle',
        }
    );

    event.shaped(
        Item.of('gtceu:cobblestone_file'),
        [
            ' C ',
            ' C ',
            ' S ',
        ],
        {
            C: 'minecraft:cobblestone',
            S: 'minecraft:stick',
        }
    );
    event.shaped(
        Item.of('kubejs:contradiction_stone_dust'),
        [
            '   ',
            ' S ',
            ' B ',
        ],
        {
            S: 'kubejs:contradiction_stone',
            B: '#forge:tools/mortars',
        }
    );
    event
        .shaped(
            Item.of('minecraft:string', 3),
            [
                '   ',
                ' S ',
                ' B ',
            ],
            {
                S: 'minecraft:shears',
                B: 'kubejs:wool_clutch',
            }
        )
        .damageIngredient('minecraft:shears');
    event
        .shaped(
            Item.of('kubejs:wool_clutch', 4),
            [
                '   ',
                ' S ',
                ' B ',
            ],
            {
                S: 'minecraft:shears',
                B: '#forge:wool',
            }
        )
        .damageIngredient('minecraft:shears');

    event.shapeless('kubejs:tanned_leather', [
        'minecraft:leather',
        'kubejs:sulfur_chunk',
        '#forge:salts',
        'minecraft:water_bucket',
    ]);

    event.recipes.farmersdelight.cutting(
        'kubejs:sulfuric_mushroom',
        '#forge:tools/knives', // tool
        [
            // results
            'kubejs:sulfur_chunk',
            Item.of('kubejs:sulfur_chunk').withChance(0.1),
        ]
        // '' // sound
    );

    event.recipes.gtceu
        .macerator('gtceu:macerator/sulfur')
        .itemInputs('kubejs:sulfur_chunk')
        .itemOutputs('gtceu:sulfur_dust')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(58);

    //ULV
    event.shaped(
        'gtceu:ulv_bender',
        [
            'EPE',
            'VHV',
            'MCM',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            P: 'gtceu:wrought_iron_plate',
            C: 'gtceu:red_alloy_single_cable',
            M: 'ulvcovm:ulv_electric_motor',
            E: 'ulvcovm:ulv_electric_piston',
            V: 'gtceu:vacuum_tube',
        }
    );
    event.shaped(
        'gtceu:ulv_centrifuge',
        [
            'VMV',
            'CHC',
            'VMV',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            C: 'gtceu:red_alloy_single_cable',
            M: 'ulvcovm:ulv_electric_motor',
            V: 'gtceu:vacuum_tube',
        }
    );
    event.shaped(
        'gtceu:ulv_wiremill',
        [
            'MCM',
            'VHV',
            'MCM',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            C: 'gtceu:red_alloy_single_cable',
            M: 'ulvcovm:ulv_electric_motor',
            V: 'gtceu:vacuum_tube',
        }
    );
    event.shaped(
        'gtceu:ulv_cutter',
        [
            'CVG',
            'OHS',
            'VCM',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            G: 'minecraft:glass',
            C: 'gtceu:red_alloy_single_cable',
            M: 'ulvcovm:ulv_electric_motor',
            S: 'gtceu:manasteel_buzz_saw_blade',
            O: 'ulvcovm:ulv_conveyor_module',
            V: 'gtceu:vacuum_tube',
        }
    );
    event.shaped(
        'gtceu:ulv_extruder',
        [
            'WWV',
            'PHC',
            'WWV',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            W: 'gtceu:red_alloy_quadruple_wire',
            C: 'gtceu:copper_normal_fluid_pipe',
            P: 'ulvcovm:ulv_electric_piston',
            V: 'gtceu:vacuum_tube',
        }
    );
    event.shaped(
        'gtceu:ulv_chemical_reactor',
        [
            'GTG',
            'CMC',
            'VHV',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            G: 'minecraft:glass',
            C: 'gtceu:red_alloy_single_cable',
            M: 'ulvcovm:ulv_electric_motor',
            T: 'gtceu:iron_rotor',
            V: 'gtceu:vacuum_tube',
        }
    );

    event.shaped(
        'gtceu:mana_pulse_infuser',
        [
            'RMR',
            'CHC',
            'VOV',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            R: 'ulvcovm:ulv_robot_arm',
            C: 'gtceu:red_alloy_single_cable',
            M: 'kubejs:mana_chip',
            O: 'gtceu:lv_voltage_coil',
            V: 'gtceu:vacuum_tube',
        }
    );

    event.recipes.gtceu
        .alloy_smelter('gtceu:ditchbulb_resin_ingot')
        .itemInputs('undergarden:ditchbulb_paste')
        .itemInputs('3x gtceu:raw_rubber_dust')
        .itemOutputs('gtceu:ditchbulb_resin_ingot')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 5);

    event.replaceInput(
        { id: 'gtceu:shaped/lv_distillery' },
        'gtceu:copper_spring',
        'gtceu:cloggrum_spring'
    );

    //Steam Fluid Hatches
    //Input
    /*event.shaped('gtceu:steam_fluid_input_hatch', [
    ' G ',
    ' C ',
    '   '
], {
    G: 'minecraft:glass', 
    C: 'gtceu:bronze_machine_casing'
});
    event.shaped('gtceu:steam_fluid_input_hatch', [
    ' S ',
    ' C ',
    '   '
], {
    S: '#forge:tools/screwdrivers', 
    C: 'gtceu:steam_fluid_output_hatch'
});
    //Output
        event.shaped('gtceu:steam_fluid_output_hatch', [
    ' C ',
    ' G ',
    '   '
], {
    G: 'minecraft:glass', 
    C: 'gtceu:bronze_machine_casing'
});
    event.shaped('gtceu:steam_fluid_output_hatch', [
    ' S ',
    ' C ',
    '   '
], {
    S: '#forge:tools/screwdrivers', 
    C: 'gtceu:steam_fluid_input_hatch'
});*/
    event.shaped(
        'gtceu:sawmill',
        [
            'MSM',
            'UHU',
            'CCC',
        ],
        {
            H: 'kubejs:spruce_zinc_casing',
            U: '#gtceu:circuits/ulv',
            C: 'gtceu:lead_single_cable',
            M: 'ulvcovm:ulv_electric_motor',
            S: 'gtceu:steel_buzz_saw_blade',
        }
    );
    event.shaped(
        'gtceu:cognitium_solidifier',
        [
            'MSM',
            'UPU',
            'CHC',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            P: 'kubejs:solid_wrought_iron_casing',
            U: '#gtceu:circuits/ulv',
            C: 'gtceu:lead_single_cable',
            M: 'gtceu:wrought_iron_plate',
            S: 'mob_grinding_utils:xpsolidifier',
        }
    );
    event.shaped(
        'gtceu:lava_furnace',
        [
            'PPP',
            'UHU',
            'PCP',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            P: 'kubejs:solid_wrought_iron_casing',
            U: '#gtceu:circuits/ulv',
            C: 'gtceu:lead_quadruple_cable',
        }
    );
    event.shaped(
        'gtceu:electric_cloche',
        [
            'SLS',
            'UHU',
            'PCP',
        ],
        {
            H: 'gtceu:ulv_machine_hull',
            P: 'kubejs:solid_wrought_iron_casing',
            U: '#gtceu:circuits/ulv',
            S: '#forge:plates/wrought_iron',
            L: 'gtceu:ulv_voltage_coil',
            C: 'gtceu:lead_single_cable',
        }
    );

    event.recipes.gtceu
        .macerator('gtceu:macerator/contradiction_stone_dust')
        .itemInputs('kubejs:contradiction_stone')
        .itemOutputs('kubejs:contradiction_stone_dust')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(50);

    event.recipes.gtceu
        .mana_pulse_infuser('gtceu:earth_tablet')
        .notConsumable('botania:rune_earth')
        .itemInputs('8x gtceu:livingrock_plate')
        .itemInputs('4x gtceu:earth_gem')
        .itemInputs('16x minecraft:cactus')
        .itemInputs('8x minecraft:grass')
        .inputFluids('kubejs:dense_mana 500')
        .itemOutputs('8x kubejs:earth_tablet')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 25);
    event.recipes.gtceu
        .mana_pulse_infuser('gtceu:fire_tablet')
        .notConsumable('botania:rune_fire')
        .itemInputs('8x gtceu:livingrock_plate')
        .itemInputs('4x gtceu:fire_gem')
        .itemInputs('32x minecraft:nether_brick')
        .itemInputs('8x minecraft:nether_wart')
        .inputFluids('kubejs:dense_mana 500')
        .itemOutputs('8x kubejs:fire_tablet')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 25);
    event.recipes.gtceu
        .mana_pulse_infuser('gtceu:water_tablet')
        .notConsumable('botania:rune_water')
        .itemInputs('8x gtceu:livingrock_plate')
        .itemInputs('4x gtceu:aqua_gem')
        .itemInputs('8x #forge:raw_fishes')
        .itemInputs('4x minecraft:seagrass')
        .inputFluids('kubejs:dense_mana 500')
        .itemOutputs('8x kubejs:water_tablet')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 25);
    event.recipes.gtceu
        .mana_pulse_infuser('gtceu:wind_tablet')
        .notConsumable('botania:rune_air')
        .itemInputs('8x gtceu:livingrock_plate')
        .itemInputs('4x gtceu:wind_gem')
        .itemInputs('8x kubejs:air_bottle')
        .itemInputs('4x minecraft:phantom_membrane')
        .inputFluids('kubejs:dense_mana 500')
        .itemOutputs('8x kubejs:wind_tablet')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 25);

    //Mana-Pulse Alloys
    event.recipes.gtceu
        .mana_pulse_infuser('gtceu:cloggrumsteel')
        .itemInputs(
            'kubejs:earth_tablet',
            '32x gtceu:steel_dust',
            '32x gtceu:cloggrum_dust'
        )
        .inputFluids('kubejs:dense_mana 600')
        .itemOutputs('64x gtceu:cloggrumsteel_ingot')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 15);
    event.recipes.gtceu
        .mana_pulse_infuser('gtceu:prismarine_infused_alloy_ingot')
        .itemInputs(
            'gtceu:conductive_alloy_ingot',
            '4x minecraft:prismarine_shard',
            '8x minecraft:prismarine_crystals'
        )
        .inputFluids('kubejs:dense_mana 300')
        .itemOutputs('gtceu:prismarine_infused_alloy_ingot')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 20);

    /*event.recipes.gtceu.mana_pulse_infuser('angelic_feather')
    .itemInputs('kubejs:wind_tablet')
    .itemInputs('32x minecraft:feather')
    .itemInputs('8x botania:mana_dust')
    .inputFluids('kubejs:dense_mana 200')
    .itemOutputs('reliquary:angelic_feather')
    .EUt(GTValues.VA[GTValues.ULV])
    .duration(20*10)*/

    event.recipes.gtceu
        .mana_pulse_infuser('legendarysurvivaloverhaul:sun_fern_seeds')
        .itemInputs('kubejs:fire_tablet')
        .itemInputs('16x minecraft:wheat_seeds')
        .itemInputs('4x minecraft:sunflower')
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('4x legendarysurvivaloverhaul:sun_fern_seeds')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 5);

    event.recipes.gtceu
        .mana_pulse_infuser('legendarysurvivaloverhaul:ice_fern_seeds')
        .itemInputs('kubejs:wind_tablet')
        .itemInputs('16x minecraft:wheat_seeds')
        .itemInputs('32x minecraft:snow_block')
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('4x legendarysurvivaloverhaul:ice_fern_seeds')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 5);

    event.recipes.gtceu
        .extraterrestial_agglomeration('kubejs:test')
        .itemInputs('kubejs:wind_tablet')
        .itemInputs('16x minecraft:wheat_seeds')
        .itemInputs('32x minecraft:snow_block')
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('4x legendarysurvivaloverhaul:ice_fern_seeds')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20 * 5);

    event.recipes.gtceu
        .assembler('cobblestone_bricks')
        .itemInputs('8x minecraft:cobblestone', 'minecraft:clay_ball')
        .itemOutputs('minecraft:furnace')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(80);
    //Guns
    /*event.recipes.gtceu.assembler('gtceu:assembler/rifle')
    .itemInputs('6x #forge:double_plates/steel', '6x #forge:bolts/steel', '2x gtceu:steel_plate', '#forge:rods/long/steel', 'gtceu:steel_tiny_fluid_pipe', '#forge:springs/steel', '#forge:rings/steel', '#forge:plates/treated_wood')
    .itemOutputs('forgeborncore:rifle')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(388)*/

    /*naturesaura.tree_ritual('32x forgeborncore:spiritsteel_ingot', ['gtceu:steel_block', 'gtceu:steel_block', 'naturesaura:token_fear', 'gtceu:steel_block', 'forgeborncore:skyingot_dust',
        'kubejs:contradiction_stone_dust', 'kubejs:contradiction_stone_dust', 'forgeborncore:skyingot_dust'
    ], 'oak_sapling', 120)*/

    naturesaura.altar('kubejs:mana_core', 'minecraft:amethyst_shard', 500, 50);

    naturesaura.tree_ritual(
        'kubejs:advanced_mana_core',
        [
            'botania:mana_powder',
            'botania:mana_powder',
            'botania:mana_powder',
            'botania:mana_powder',
            'kubejs:mana_core',
            'kubejs:mana_core',
            'kubejs:mana_core',
            'kubejs:mana_core',
        ],
        'botania:pure_daisy',
        300
    );
});
