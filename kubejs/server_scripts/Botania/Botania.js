// priority: 1

ServerEvents.recipes((event) => {
    const { naturesaura } = event.recipes;

    // ---------------------------------------------------------
    // Removals
    // ---------------------------------------------------------
    event.remove({ output: 'extrabotany:walking_cane' });
    event.remove({ output: 'botania:terra_plate' });
    event.remove({ output: 'botania:mana_pool' });
    event.remove({ output: 'botania:mana_spreader' });
    event.remove({ output: 'botania:diluted_pool' });
    event.remove({ output: 'botania:runic_altar' });
    event.remove({ output: 'botania:petal_apothecary' });
    event.remove({ output: 'botania:manaweave_cloth' });
    event.remove({ output: 'botania:mana_string' });
    event.remove({ output: 'botania:manasteel_ingot' });
    event.remove({ output: 'botania:mana_powder' });
    event.remove({ output: 'botania:gaia_ingot' });
    event.remove({ output: 'botania:livingwood_bow' });
    event.remove({ id: 'botania:apothecary_default' });
    event.remove({ id: 'botania:mana_infusion/manasteel_block' });
    event.remove({ id: 'botania:mana_infusion/mana_quartz' });

    const elvenRemovals = [
        'botania:elven_trade/dragonstone_block',
        'botania:elven_trade/dragonstone',
        'botania:elven_trade/dreamwood',
        'botania:elven_trade/dreamwood_log',
        'botania:elven_trade/elementium',
        'botania:elven_trade/elementium_block',
        'botania:elven_trade/elf_glass',
        'botania:elven_trade/elf_quartz',
        'botania:elven_trade/lexicon_elven',
        'botania:elven_trade/pixie_dust',
    ];
    elvenRemovals.forEach((id) => event.remove({ id: id }));

    // ---------------------------------------------------------
    // Nature's Aura Integration
    // ---------------------------------------------------------
    naturesaura.tree_ritual(
        'kubejs:omnipetal',
        [
            'botania:red_petal',
            'botania:orange_petal',
            'botania:yellow_petal',
            'botania:green_petal',
            'botania:light_blue_petal',
            'botania:blue_petal',
            'botania:purple_petal',
            'naturesaura:gold_leaf',
        ],
        'oak_sapling',
        60
    );

    // ---------------------------------------------------------
    // Runic Altar Recipes
    // ---------------------------------------------------------
    event.recipes.botania.runic_altar(
        'kubejs:manasteel_reinforced_plating',
        [
            '#forge:double_plates/manasteel',
            '#forge:double_plates/manasteel',
            'botania:manaweave_cloth',
        ],
        10000
    );

    const quartzColors = [
        { id: 'botania:quartz_sunny', item: 'minecraft:sunflower' },
        { id: 'botania:quartz_dark', item: 'gtceu:coke_gem' },
        { id: 'botania:quartz_blaze', item: 'minecraft:blaze_rod' },
        { id: 'botania:quartz_lavender', item: 'minecraft:amethyst_shard' },
        { id: 'botania:quartz_red', item: 'minecraft:redstone_block' },
    ];

    quartzColors.forEach((q) => {
        event.remove({ id: q.id });
        event.recipes.botania.runic_altar(
            q.id,
            [
                q.item,
                'minecraft:quartz',
                'minecraft:quartz',
                'minecraft:quartz',
                'minecraft:quartz',
                'minecraft:quartz',
                'minecraft:quartz',
                'minecraft:quartz',
                'minecraft:quartz',
            ],
            1000
        );
    });

    event.recipes.botania.runic_altar(
        'travelersboots:travelers_boots',
        [
            'kubejs:magebloom_fiber_cloth',
            'kubejs:magebloom_fiber_cloth',
            'minecraft:feather',
            '#forge:nuggets/managold',
            '#minecraft:fishes',
            '#forge:gems/wind',
            '#forge:gems/wind',
            'minecraft:leather_boots',
            '#forge:nuggets/managold',
        ],
        5000
    );

    // ---------------------------------------------------------
    // Standard Crafting (Apothecary, Spreader, Etc)
    // ---------------------------------------------------------

    // Pure Daisy
    event.recipes.botania.pure_daisy(
        'kubejs:contradiction_stone',
        'minecraft:netherrack'
    );

    // Diluted Pool
    event.shaped(
        'botania:diluted_pool',
        [
            ' H ',
            'LML',
            'LLL',
        ],
        {
            L: 'botania:livingrock',
            M: 'kubejs:mana_core',
            H: '#forge:tools/hammers',
        }
    );

    // Walking Cane
    event.shaped(
        'extrabotany:walking_cane',
        [
            ' GB',
            ' BG',
            'B  ',
        ],
        {
            B: 'minecraft:bone',
            G: '#forge:foils/gold',
        }
    );

    // Apothecary
    event.shaped(
        'botania:apothecary_default',
        [
            'SBS',
            'MCH',
            'CCC',
        ],
        {
            C: 'twigs:cobblestone_bricks',
            S: 'twigs:cobblestone_brick_slab',
            B: 'botania:white_petal_block',
            M: '#forge:tools/mallets',
            H: '#forge:tools/hammers',
        }
    );

    // Mana Spreader
    event.shaped(
        'botania:mana_spreader',
        [
            'PLP',
            'RGE',
            'PLP',
        ],
        {
            L: 'botania:livingwood',
            R: 'kubejs:mana_chip',
            G: '#botania:petals',
            E: 'gtceu:gold_ring',
            P: 'gtceu:livingwood_plate',
        }
    );

    // Botanical Tools or Weapons
    event.remove({ output: 'botania:manasteel_pick' });
    event.remove({ output: 'botania:manasteel_shovel' });
    event.remove({ output: 'botania:manasteel_axe' });
    event.remove({ output: 'botania:manasteel_hoe' });
    event.remove({ output: 'botania:manasteel_sword' });

    event.shaped(
        'botania:livingwood_bow',
        [
            'HTM',
            'TOM',
            'FTM',
        ],
        {
            M: 'botania:mana_string',
            T: 'botania:livingwood_twig',
            O: 'forgeborncore:manasteel_ring',
            H: '#forge:tools/hammers',
            F: '#forge:tools/files',
        }
    );

    // ---------------------------------------------------------
    // Material Processing (Cutting & Lathe)
    // ---------------------------------------------------------

    // Livingrock Plate
    event.recipes.gtceu
        .cutter('gtceu:cutter/cut_livingrock_block_to_plate_water')
        .itemInputs('botania:livingrock')
        .inputFluids('minecraft:water 17')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(368);

    event.recipes.gtceu
        .cutter('gtceu:cutter/cut_livingrock_block_to_plate_distilled_water')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(276);

    event.recipes.gtceu
        .cutter('gtceu:cutter/cut_livingrock_block_to_plate')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(184);

    // Livingwood Bolts
    event.recipes.gtceu
        .cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(140);

    event.recipes.gtceu
        .cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_distilled_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100);

    event.recipes.gtceu
        .cutter('gtceu:cutter/cut_livingwood_twig_to_bolt')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(60);

    // Livingwood Screw
    event.recipes.gtceu
        .lathe('gtceu:lathe/lathe_livingwood_bolt_to_screw')
        .itemInputs('gtceu:livingwood_bolt')
        .itemOutputs('gtceu:livingwood_screw')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(12);

    // Livingwood Plate
    event.recipes.gtceu
        .cutter('gtceu:cutter/cut_livingwood_to_plate_water')
        .itemInputs('botania:livingwood')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(280);

    event.recipes.gtceu
        .cutter('gtceu:cutter/cut_livingwood_to_plate_distilled_water')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200);

    event.recipes.gtceu
        .cutter('gtceu:cut_livingwood_to_plate')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(120);
});
