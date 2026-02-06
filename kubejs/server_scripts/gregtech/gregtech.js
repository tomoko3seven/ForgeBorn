ServerEvents.recipes((event) => {
    // ==========================================
    // STEAM AGE
    // ==========================================

    // Removals
    event.remove({ output: 'gtceu:lp_steam_extractor' });
    event.remove({ id: 'gtceu:shaped/bronze_bricks_hull' });
    event.remove({ id: 'gtceu:shaped/bronze_hull' });
    event.remove({ output: 'gtceu:hp_steam_compressor' });
    event.remove({ output: 'gtceu:hp_steam_forge_hammer' });
    event.remove({ output: 'gtceu:hp_steam_macerator' });
    event.remove({ output: 'gtceu:hp_steam_furnace' });
    event.remove({ output: 'gtceu:hp_steam_alloy_smelter' });
    event.remove({ output: 'gtceu:hp_steam_rock_crusher' });
    event.remove({ output: 'gtceu:lp_steam_miner' });
    event.remove({ output: 'gtceu:hp_steam_miner' });
    event.remove({ output: 'gtceu:hp_steam_extractor' });
    event.remove({ output: 'gtceu:hp_steam_solid_boiler' });
    event.remove('gtceu:bronze_machine_casing');

    // Casings
    event.shaped(
        'gtceu:bronze_brick_casing',
        [
            'PPP',
            'DHD',
            'BBB',
        ],
        {
            B: 'minecraft:bricks',
            H: '#forge:tools/hammers',
            D: '#forge:double_plates/bronze',
            P: '#forge:plates/bronze',
        }
    );

    event.shaped(
        'gtceu:bronze_machine_casing',
        [
            'PPP',
            'DHD',
            'PPP',
        ],
        {
            H: '#forge:tools/hammers',
            D: '#forge:double_plates/bronze',
            P: '#forge:plates/bronze',
        }
    );

    // event.shaped("gtceu:bronze_machine_casing", [
    //     'PPP',
    //     'DHD',
    //     'PPP'
    // ], {
    //     H: '#forge:tools/hammers',
    //     D: '#forge:plates/iron',
    //     P: '#forge:plates/bronze'
    // });

    event.shaped(
        'gtceu:industrial_steam_casing',
        [
            'PHP',
            'PFP',
            'PWP',
        ],
        {
            F: 'gtceu:bronze_frame',
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            P: '#forge:plates/bronze',
        }
    );

    event.recipes.gtceu
        .assembler('gtceu:assembler/industrial_steam_casing')
        .itemInputs('6x #forge:plates/bronze', 'gtceu:bronze_frame')
        .itemOutputs('gtceu:industrial_steam_casing')
        .circuit(3)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50);

    event.shaped(
        'gtceu:steel_brick_casing',
        [
            'SSS',
            'SHS',
            'CCC',
        ],
        {
            H: '#forge:tools/hammers',
            C: 'gtceu:firebricks',
            S: '#forge:plates/steel',
        }
    );

    // Machines & Components
    event.shaped(
        'kubejs:wrought_iron_firebox',
        [
            'PRP',
            'RFR',
            'PRP',
        ],
        {
            P: '#forge:plates/steel',
            R: 'gtceu:wrought_iron_rod',
            F: 'gtceu:ulv_machine_casing',
        }
    );

    event.shaped(
        'gtceu:primitive_assembler',
        [
            'SCS',
            'RAR',
            'SCS',
        ],
        {
            R: 'ulvcovm:ulv_robot_arm',
            C: 'ulvcovm:ulv_conveyor_module',
            A: '#gtceu:circuits/ulv',
            S: 'kubejs:solid_wrought_iron_casing',
        }
    );

    event.shaped(
        'kubejs:solid_wrought_iron_casing',
        [
            'HPS',
            'PCP',
            'SPF',
        ],
        {
            H: '#gtceu:tools/crafting_hammers',
            P: 'gtceu:steel_plate',
            C: 'gtceu:ulv_machine_casing',
            F: '#gtceu:tools/crafting_screwdrivers',
            S: 'gtceu:steel_screw',
        }
    );

    // HP Steam Machines
    event.shaped(
        'gtceu:hp_steam_rock_crusher',
        [
            'SSS',
            'PIP',
            'SCS',
        ],
        {
            P: 'gtceu:steel_gear',
            I: 'gtceu:lp_steam_rock_crusher',
            C: 'gtceu:firebricks',
            S: '#forge:plates/steel',
        }
    );

    event.shaped(
        'gtceu:hp_steam_alloy_smelter',
        [
            'SPS',
            'SIS',
            'SCS',
        ],
        {
            P: 'gtceu:tin_alloy_small_fluid_pipe',
            I: 'gtceu:lp_steam_alloy_smelter',
            C: 'gtceu:firebricks',
            S: '#forge:plates/steel',
        }
    );

    event.shaped(
        'gtceu:hp_steam_furnace',
        [
            'PSP',
            'SIS',
            'PCP',
        ],
        {
            P: 'gtceu:tin_alloy_small_fluid_pipe',
            I: 'gtceu:lp_steam_furnace',
            C: 'gtceu:firebricks',
            S: '#forge:plates/steel',
        }
    );

    event.shaped(
        'gtceu:hp_steam_macerator',
        [
            'PPP',
            'SIS',
            'PCP',
        ],
        {
            P: '#forge:plates/steel',
            I: 'gtceu:lp_steam_macerator',
            C: 'gtceu:firebricks',
            S: 'gtceu:iron_gear',
        }
    );

    event.shaped(
        'gtceu:hp_steam_forge_hammer',
        [
            'SSS',
            'PIP',
            'SCS',
        ],
        {
            P: 'gtceu:tin_alloy_small_fluid_pipe',
            I: 'gtceu:lp_steam_forge_hammer',
            C: 'gtceu:firebricks',
            S: '#forge:plates/steel',
        }
    );

    event.shaped(
        'gtceu:hp_steam_compressor',
        [
            'PSP',
            'SIS',
            'PCP',
        ],
        {
            P: 'gtceu:tin_alloy_small_fluid_pipe',
            I: 'gtceu:lp_steam_compressor',
            C: 'gtceu:firebricks',
            S: '#forge:plates/steel',
        }
    );

    event.shaped(
        'gtceu:hp_steam_extractor',
        [
            'PSP',
            'SIS',
            'PCP',
        ],
        {
            P: 'gtceu:tin_alloy_small_fluid_pipe',
            I: 'minecraft:piston',
            C: 'gtceu:steel_brick_casing',
            S: '#forge:plates/steel',
        }
    );

    event.shaped(
        'gtceu:hp_steam_solid_boiler',
        [
            'SSS',
            'SWS',
            'CFC',
        ],
        {
            W: '#forge:tools/wrenches',
            F: 'minecraft:furnace',
            C: 'gtceu:firebricks',
            S: '#forge:plates/steel',
        }
    );

    // ==========================================
    // ULV TIER
    // ==========================================

    // Removals
    event.remove({ output: 'gtceu:resin_circuit_board' });
    event.remove({ output: 'gtceu:ulv_voltage_coil' });
    event.remove({ output: 'gtceu:resin_printed_circuit_board' });
    event.remove({ output: 'gtceu:resistor' });
    event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' });
    event.remove({ id: 'gtceu:shaped/vacuum_tube' });
    event.remove({ output: 'gtceu:ulv_machine_casing' });

    // Components: Circuit Boards
    event.recipes.gtceu
        .macerator('kubejs:crushed_blue_moss')
        .itemInputs('undergarden:blue_mogmoss')
        .itemOutputs('kubejs:crushed_blue_moss')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 4);
    event.recipes.gtceu
        .chemical_reactor('kubejs:blue_moss_cellulose_pulp')
        .itemInputs('kubejs:crushed_blue_moss', 'gtceu:sodium_hydroxide_dust')
        .inputFluids('minecraft:water 250')
        .itemOutputs('kubejs:blue_moss_cellulose_pulp')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 3);
    event.recipes.gtceu
        .alloy_smelter('kubejs:blue_moss_substrate')
        .itemInputs(
            'kubejs:blue_moss_cellulose_pulp',
            'undergarden:ditchbulb_paste'
        )
        .itemOutputs('kubejs:blue_moss_substrate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 2);
    event.shaped(
        '2x gtceu:resin_circuit_board',
        [
            ' R ',
            ' C ',
            ' R ',
        ],
        {
            R: 'kubejs:blue_moss_substrate',
            C: 'gtceu:wood_plate',
        }
    );

    event.shaped(
        '6x gtceu:resin_circuit_board',
        [
            'RRR',
            'CCC',
            'RRR',
        ],
        {
            R: 'kubejs:blue_moss_substrate',
            C: 'gtceu:wood_plate',
        }
    );

    event.recipes.gtceu
        .assembler('gtceu:assembler/resin_printed_circuit_board')
        .itemInputs('gtceu:resin_circuit_board', '4x gtceu:red_alloy_foil')
        .inputFluids('gtceu:glue 100')
        .itemOutputs('gtceu:resin_printed_circuit_board')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(180);

    // Components: Resistors & Tubes
    event.shaped(
        '2x gtceu:resistor',
        [
            'SPS',
            'WCW',
            ' P ',
        ],
        {
            W: 'gtceu:fine_froststeel_wire',
            P: 'minecraft:paper',
            C: '#forge:dusts/coal',
            S: 'gtceu:sticky_resin',
        }
    );

    event.recipes.gtceu
        .assembler('gtceu:resistor')
        .itemInputs('#forge:dusts/coal', '4x gtceu:fine_froststeel_wire')
        .inputFluids('gtceu:glue 100')
        .itemOutputs('2x gtceu:resistor')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 8);

    event.recipes.gtceu
        .assembler('gtceu:resistor_better')
        .itemInputs('#forge:dusts/coal', '4x gtceu:fine_manasteel_wire')
        .inputFluids('gtceu:glue 100')
        .itemOutputs('4x gtceu:resistor')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 8);

    event.shaped(
        'kubejs:not_vacuum_tube',
        [
            'ABA',
            'CDC',
            ' C ',
        ],
        {
            A: 'gtceu:steel_bolt',
            B: 'gtceu:glass_tube',
            C: 'gtceu:copper_single_wire',
            D: 'gtceu:steel_plate',
        }
    );

    event.smelting('gtceu:vacuum_tube', 'kubejs:not_vacuum_tube');

    // Components: Circuits
    event.recipes.gtceu
        .assembler('gtceu:assembler/basic_electronic_circuit')
        .itemInputs(
            '6x gtceu:red_alloy_single_cable',
            '2x gtceu:vacuum_tube',
            '2x gtceu:resistor',
            '2x gtceu:steel_plate',
            'gtceu:resin_printed_circuit_board'
        )
        .itemOutputs('gtceu:basic_electronic_circuit')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(180);

    // ULV Machines & Casings
    event.shaped(
        'gtceu:ulv_machine_casing',
        [
            'AAA',
            'ABA',
            'AAA',
        ],
        {
            A: 'gtceu:wrought_iron_plate',
            B: '#gtceu:tools/crafting_wrenches',
        }
    );

    event.shaped(
        'gtceu:ulv_voltage_coil',
        [
            'AAA',
            'ABA',
            'AAA',
        ],
        {
            A: '#forge:fine_wires/lead',
            B: '#forge:rods/magnetic_iron',
        }
    );

    event.recipes.gtceu
        .assembler('ulv_casink')
        .itemInputs('8x gtceu:wrought_iron_plate')
        .circuit(6)
        .itemOutputs('gtceu:ulv_machine_casing')
        .EUt(16)
        .duration(25);

    event.shaped(
        'gtceu:ulv_steam_turbine',
        [
            'PIP',
            'RHR',
            'MCM',
        ],
        {
            P: 'gtceu:bronze_normal_fluid_pipe',
            R: 'gtceu:iron_rotor',
            M: 'ulvcovm:ulv_electric_motor',
            C: 'gtceu:red_alloy_single_cable',
            I: '#gtceu:circuits/ulv',
            H: 'gtceu:ulv_machine_hull',
        }
    );

    event.shaped(
        'gtceu:ulv_combustion_generator',
        [
            'PIP',
            'MHM',
            'GCG',
        ],
        {
            P: 'ulvcovm:ulv_electric_piston',
            G: 'gtceu:wrought_iron_gear',
            M: 'ulvcovm:ulv_electric_motor',
            C: 'gtceu:red_alloy_single_cable',
            I: '#gtceu:circuits/ulv',
            H: 'gtceu:ulv_machine_hull',
        }
    );

    event.shaped(
        'gtceu:ulv_input_bus',
        [
            ' I ',
            ' H ',
            '   ',
        ],
        {
            I: '#forge:chests/wooden',
            H: 'gtceu:ulv_machine_hull',
        }
    );

    event.shaped(
        'gtceu:ulv_output_bus',
        [
            ' H ',
            ' I ',
            '   ',
        ],
        {
            I: '#forge:chests/wooden',
            H: 'gtceu:ulv_machine_hull',
        }
    );

    event.shaped(
        'gtceu:ulv_input_hatch',
        [
            ' I ',
            ' H ',
            '   ',
        ],
        {
            I: '#forge:glass',
            H: 'gtceu:ulv_machine_hull',
        }
    );

    event.shaped(
        'gtceu:ulv_output_hatch',
        [
            ' H ',
            ' I ',
            '   ',
        ],
        {
            I: '#forge:glass',
            H: 'gtceu:ulv_machine_hull',
        }
    );

    // ==========================================
    // LV TIER
    // ==========================================

    // Removals
    event.remove({ output: 'gtceu:lv_machine_casing' });
    event.remove({ output: 'gtceu:electric_blast_furnace' });
    event.remove({ id: 'gtceu:shaped/hermetic_casing_lv' });
    event.remove({ id: 'gtceu:shaped/lv_machine_casing' });
    event.remove({ id: 'gtceu:shaped/lv_machine_hull' });
    event.remove({ output: 'gtceu:lv_mixer' });
    event.remove({ output: 'gtceu:diode' });

    event.recipes.gtceu
        .mixer('cloggrumite_dust')
        .itemInputs(
            '5x gtceu:cloggrum_dust',
            'gtceu:vanadium_magnetite_dust',
            'gtceu:nickel_dust'
        )
        .itemOutputs('7x gtceu:cloggrumite_dust')
        .EUt(10)
        .duration(20 * 7.5);

    // Casings & Hulls
    event.shaped(
        'gtceu:lv_machine_casing',
        [
            'PSP',
            'SWS',
            'PSP',
        ],
        {
            W: '#forge:tools/wrenches',
            S: 'gtceu:cloggrumite_plate',
            P: '#forge:plates/steel',
        }
    );

    event.shaped(
        'gtceu:lv_machine_hull',
        [
            'STS',
            'ACA',
            '   ',
        ],
        {
            T: 'gtceu:steel_plate',
            S: 'gtceu:cloggrumite_plate',
            C: 'gtceu:lv_machine_casing',
            A: 'gtceu:tin_single_cable',
        }
    );

    event.shaped(
        'gtceu:lv_hermetic_casing',
        [
            'PSP',
            'SWS',
            'PSP',
        ],
        {
            W: 'gtceu:polyethylene_large_fluid_pipe',
            S: 'gtceu:cloggrumite_plate',
            P: '#forge:double_plates/steel',
        }
    );

    // Machines
    event.shaped(
        'gtceu:lv_mixer',
        [
            'GRG',
            'GMG',
            'CHC',
        ],
        {
            R: 'gtceu:tin_rotor',
            G: 'botania:mana_glass',
            M: 'gtceu:lv_electric_motor',
            C: '#gtceu:circuits/lv',
            H: 'gtceu:lv_machine_hull',
        }
    );

    // Sawmill Recipes
    event.recipes.gtceu
        .sawmill('planks')
        .itemInputs('#minecraft:planks')
        .circuit(1)
        .inputFluids('minecraft:water 144')
        .itemOutputs('4x gtceu:wood_plate')
        .EUt(10)
        .duration(20 * 4.5);

    event.recipes.gtceu
        .sawmill('treated_planks')
        .itemInputs('gtceu:treated_wood_planks')
        .circuit(2)
        .inputFluids('minecraft:water 144')
        .itemOutputs('4x gtceu:treated_wood_plate')
        .EUt(10)
        .duration(20 * 4.5);

    event.recipes.gtceu
        .sawmill('archwood_planks')
        .itemInputs('ars_nouveau:archwood_planks')
        .circuit(3)
        .inputFluids('minecraft:water 144')
        .itemOutputs('4x gtceu:archwood_plate')
        .EUt(28)
        .duration(20 * 4.5);

    // Components: Diodes
    event.recipes.gtceu
        .assembler('poly_wafer_diode')
        .itemInputs('4x gtceu:fine_annealed_manasteel_wire')
        .itemInputs('gtceu:silicon_wafer')
        .itemOutputs('4x gtceu:diode')
        .inputFluids('gtceu:polyethylene 144')
        .EUt(30)
        .duration(400);

    event.recipes.gtceu
        .assembler('poly_arsenide_diode')
        .itemInputs('4x gtceu:fine_annealed_manasteel_wire')
        .itemInputs('#forge:small_dusts/gallium_arsenide')
        .itemOutputs('2x gtceu:diode')
        .inputFluids('gtceu:polyethylene 144')
        .EUt(30)
        .duration(400);

    event.recipes.gtceu
        .assembler('glass_wafer_diode')
        .itemInputs('4x gtceu:fine_annealed_manasteel_wire')
        .itemInputs('gtceu:silicon_wafer')
        .itemOutputs('2x gtceu:diode')
        .inputFluids('gtceu:glass 144')
        .EUt(30)
        .duration(400);

    event.recipes.gtceu
        .assembler('glass_arsenide_diode')
        .itemInputs('4x gtceu:fine_annealed_manasteel_wire')
        .itemInputs('#forge:small_dusts/gallium_arsenide')
        .itemOutputs('1x gtceu:diode')
        .inputFluids('gtceu:glass 144')
        .EUt(30)
        .duration(400);

    // ==========================================
    // MV TIER
    // ==========================================

    event.recipes.gtceu
        .assembler('phenolic_cdb')
        .itemInputs('gtceu:resin_circuit_board')
        .itemInputs('2x gtceu:treated_wood_dust')
        .inputFluids('gtceu:phenol 250')
        .itemOutputs('gtceu:phenolic_circuit_board')
        .EUt(32)
        .duration(150);
});
