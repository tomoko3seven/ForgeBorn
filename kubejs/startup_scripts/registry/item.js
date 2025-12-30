StartupEvents.registry('item', (event) => {
    //Drones
    const drone_type = [
        'harvest',
        'hunter',
        'miner',
    ];
    const drone_tier = [
        'basic',
        'advanced',
    ];
    for (const tier of drone_tier) {
        for (const type of drone_type) {
            event
                .create(`${tier}_drone_${type}`)
                .maxStackSize(64)
                .texture(`kubejs:item/drones/${type}_drone`);
        }
    }

    // Mob Cells
    const mobs = [
        'zombie',
        'skeleton',
        'slime',
        'drowned',
        'husk',
        'enderman',
        'wither_skeleton',
        'blaze',
        'shulker',
        'warden',
    ];

    event
        .create('mob_cell')
        .maxStackSize(1)
        .tooltip('§8Perfect place for souls of undead.')
        .displayName(`Mob-Soul Cell (Empty)`);

    for (const type of mobs) {
        event
            .create(`mob_cell_${type}`)
            .maxStackSize(16)
            .texture('kubejs:item/mob_cell_full')
            .displayName(
                `Mob-Soul Cell (${type.charAt(0).toUpperCase() + type.slice(1)})`
            );
    }

    //Dimensions
    event.create('kubejs:undergarden_dim');

    ///////////////
    ///ForgeBorn///
    ///////////////
    event.create('ingot_form').maxStackSize(1);
    event
        .create('gt_quantum')
        .texture('assets/item/gt_quantum')
        .displayName('GT-Quantum Token')
        .tooltip('§8Right-Click to use this Coin and obtain Bronze Stew.')
        .maxStackSize(16);
    event.create('seared_bricks_raw').displayName('Raw Seared Brick');
    event.create('plant_fiber');
    event.create('plant_string');
    event.create('plant_rope');
    event.create('needle').maxStackSize(1).maxDamage(50);
    event.create('flint_chisel').maxStackSize(1).maxDamage(12);
    event.create('wool_clutch');
    event.create('ancient_key').maxStackSize(1);
    event.create('contradiction_stone_dust');
    event.create('tanned_leather');
    event.create('stabilized_latex');
    event.create('sulfur_chunk');
    event.create('coke_brick_dust');
    event.create('greg_icon');
    event.create('lurking_soul');
    event.create('omnipetal');
    event.create('cloth');
    event.create('coin');
    event.create('rope');
    event.create('blank_upgrade');
    //Industrial
    event.create('basic_mechanical_parts');

    event.create('lumicrystalline_seed');

    event.create('manaweave_thread');
    event.create('manasteel_gear_bundle');
    event.create('cursed_cloth');
    event.create('enchanted_fabric');
    event.create('basic_nature_catalyst');
    event.create('obsidian_skull').maxStackSize(1);

    event
        .create('air_bottle')
        .displayName('Bottle of Air')
        .tooltip('§8Fresh Air...')
        .tooltip([
            '§8Can be obtained by right clicking with empty bottle in main hand on air at 100-Y level.',
        ]);

    event.create('mana_chip').tooltip('§8Example of Technomancy').tooltip([
        '§aULV Botanical Circuit',
    ]);
    event
        .create('basic_botanical_circuit')
        .tooltip('§8Example of Technomancy')
        .tooltip([
            '§aLV Botanical Circuit',
        ]);

    event.create('sulfuric_mushroom');
    event.create('no_name');
    event.create('wither_heart').maxStackSize(1);
    event.create('not_vacuum_tube').displayName('Empty Vacuum Tube');

    ///////////////
    ////Botania////
    ///////////////
    event.create('advanced_mana_core').maxStackSize(64);
    event.create('manasteel_reinforced_plating').maxStackSize(64);
    event.create('mana_infused_fibers').maxStackSize(64);
    event.create('mana_infused_mesh').maxStackSize(64);
    event.create('mana-filled_idol').maxStackSize(64);
    event.create('mana_core').maxStackSize(64);

    event.create('livingrock_wafer').maxStackSize(64);
    event.create('mana_multithreaded_computation_wafer').maxStackSize(64);
    event.create('mmc_chip').maxStackSize(64);
    event.create('livingrock_circuit_board').maxStackSize(64);
    event.create('mana_infused_livingrock_circuit_board').maxStackSize(64);

    event.create('muspelheim_essence').maxStackSize(64);
    event.create('niflheim_essence').maxStackSize(64);

    event
        .create('pure_mana_dust')
        .maxStackSize(64) /*.texture(`kubejs:item/botania/manadiamond_dust`)*/;

    //------Tablets------
    event.create('infernal_tablet');

    event.create('earth_tablet');
    event.create('fire_tablet');
    event.create('water_tablet');
    event.create('wind_tablet');

    //Ars Noveau
    event.create('magebloom_fiber_cloth').maxStackSize(64);
    event.create('reinforced_manabloom_plating').maxStackSize(64);
    event.create('sourcegem_dust').maxStackSize(64);

    //Nature`s Aura
    event.create('token_of_light').maxStackSize(64);
    event.create('token_of_darkness').maxStackSize(64);

    //Draconic Evolution (Custom)
    event.create('awakened_draconic_core').maxStackSize(64);
    event.create('chaotic_draconic_core').maxStackSize(64);
    event.create('draconic_core').maxStackSize(64);
    event.create('wyvern_draconic_core').maxStackSize(64);

    //Microverse Miners (Just a note for me to add something like microminers)
    event.create(
        'microminer_t1'
    ) /*.texture('assets/item/microverse/microminer_t1')*/;

    // Infinity
    event.create('undone_infinity_ingot').maxStackSize(64);

    function Circuit(theme, type, volt) {
        event
            .create(`${theme}_${type}`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_${type}` })
            .tag(`gtceu:circuits/${volt}`);
    }

    function Mainframe(theme, volt) {
        event
            .create(`${theme}_processor_mainframe`)
            .textureJson({
                layer0: `kubejs:item/circuits/${theme}_processor_mainframe_base`,
                layer1: `kubejs:item/circuits/${theme}_processor_mainframe_lights`,
            })
            .tag(`gtceu:circuits/${volt}`);
    }

    function Unit(theme) {
        event.create(`${theme}_processing_unit`).textureJson({
            layer0: `kubejs:item/circuits/${theme}_processing_unit`,
        });
        event.create(`${theme}_circuit_board`).textureJson({
            layer0: `kubejs:item/circuits/${theme}_circuit_board`,
        });
    }

    Unit('ancient');
    Circuit('matter', 'processor', 'zpm');
    Circuit('matter', 'processor_assembly', 'uv');
    Circuit('matter', 'processor_computer', 'uhv');
    Mainframe('matter', 'uev');

    Unit('infinity');
    Circuit('infinity', 'processor', 'uv');
    Circuit('infinity', 'processor_assembly', 'uhv');
    Circuit('infinity', 'processor_computer', 'uev');
    Mainframe('infinity', 'uiv');

    Unit('multiversal');
    Circuit('godium', 'processor', 'uhv');
    Circuit('godium', 'processor_assembly', 'uev');
    Circuit('godium', 'processor_computer', 'uiv');
    Mainframe('godium', 'max');
});

Platform.mods.kubejs.name = 'ForgeBorn';
