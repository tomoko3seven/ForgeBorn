// priority: 1

ServerEvents.recipes(event => {
    const { naturesaura } = event.recipes

    // ---------------------------------------------------------
    // Removals
    // ---------------------------------------------------------
    // Move Malum removal later if needed
    event.remove({ output: 'malum:poppet' })

    event.remove({ output: 'botania:mana_pool' })
    event.remove({ output: 'botania:mana_spreader' })
    event.remove({ output: 'botania:diluted_pool' })
    event.remove({ output: 'botania:runic_altar' })
    event.remove({ output: 'botania:petal_apothecary' })
    event.remove({ output: 'botania:manaweave_cloth' })
    event.remove({ output: 'botania:mana_string' })
    event.remove({ output: 'botania:manasteel_ingot' })
    event.remove({ output: 'botania:mana_powder' })
    event.remove({ output: 'botania:gaia_ingot' })

    // Elven Trade Removals
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
        'botania:elven_trade/pixie_dust'
    ]
    elvenRemovals.forEach(id => event.remove({ id: id }))


    // ---------------------------------------------------------
    // Nature's Aura Integration
    // ---------------------------------------------------------
    naturesaura.tree_ritual('kubejs:omnipetal', [
        'botania:red_petal', 'botania:orange_petal', 'botania:yellow_petal',
        'botania:green_petal', 'botania:light_blue_petal', 'botania:blue_petal',
        'botania:purple_petal', 'naturesaura:gold_leaf'
    ], 'oak_sapling', 60)


    // ---------------------------------------------------------
    // Botanical Circuits & Components
    // ---------------------------------------------------------
    
    // Livingrock Circuit Board
    event.recipes.gtceu.assembler('gtceu:assembler/livingrock_circuit_board')
        .itemInputs('8x gtceu:manasteel_foil', 'gtceu:livingrock_plate')
        .inputFluids('kubejs:dense_mana 200')
        .itemOutputs('kubejs:livingrock_circuit_board')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    const livingrockboard = ['kubejs:mana_infused_livingrock_circuit_board', 'kubejs:livingrock_circuit_board', 3000]
    event.recipes.botania.mana_infusion(livingrockboard[0], livingrockboard[1], livingrockboard[2])
    event.recipes.gtceu.mana_infuser('livingrock_circuit_board_best')
        .itemInputs(livingrockboard[1])
        .itemOutputs(livingrockboard[0])
        .inputFluids(`kubejs:dense_mana ${livingrockboard[2]/10}`)
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV])
    
    // Mana Chip (ULV)
    event.recipes.gtceu.assembler('kubejs:mana_chip')
        .itemInputs('2x gtceu:manasteel_plate')
        .itemInputs('2x gtceu:manasteel_foil')
        .itemInputs('2x gtceu:manasteel_bolt')
        .itemInputs('2x gtceu:fine_copper_wire')
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('kubejs:mana_chip')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 10)

    // Wafers & Chips
    const livingrockwafer = ['kubejs:livingrock_wafer', 'gtceu:livingrock_plate', 1000]
    event.recipes.botania.mana_infusion(livingrockwafer[0], livingrockwafer[1], livingrockwafer[2])
    event.recipes.gtceu.mana_infuser('livingrock_wafer_best')
        .itemInputs(livingrockwafer[1])
        .itemOutputs(livingrockwafer[0])
        .inputFluids(`kubejs:dense_mana ${livingrockwafer[2]/10}`)
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mana_pulse_infuser('kubejs:mana_multithreaded_computation_wafer')
        .notConsumable('gtceu:utherium_lens')
        .itemInputs('16x kubejs:livingrock_wafer')
        .inputFluids('kubejs:dense_mana 1600')
        .itemOutputs('16x kubejs:mana_multithreaded_computation_wafer')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20 * 30)

    // Wafer Cutting
    event.recipes.gtceu.cutter('kubejs:mana_multithreaded_computation_wafer_water')
        .itemInputs('kubejs:mana_multithreaded_computation_wafer')
        .inputFluids('minecraft:water 337')
        .itemOutputs('8x kubejs:mmc_chip')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(280)

    event.recipes.gtceu.cutter('kubejs:mana_multithreaded_computation_wafer_distilled_water')
        .itemInputs('kubejs:mana_multithreaded_computation_wafer')
        .inputFluids('gtceu:distilled_water 253')
        .itemOutputs('8x kubejs:mmc_chip')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.cutter('kubejs:mana_multithreaded_computation_wafer_lubricant')
        .itemInputs('kubejs:mana_multithreaded_computation_wafer')
        .inputFluids('gtceu:lubricant 84')
        .itemOutputs('8x kubejs:mmc_chip')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120)


    // ---------------------------------------------------------
    // Mana Infusion Recipes
    // ---------------------------------------------------------
    const infusionRecipes = [
        // [output, input, mana cost]
        // ['kubejs:token_of_light', 'kubejs:light_token', 100000], doesnt exist?
        ['kubejs:pure_mana_dust', '#botania:mana_dusts', 50000],
        ['botania:quartz_mana', 'gtceu:quartzite_gem', 500],
        ['gtceu:managold_ingot', '#forge:ingots/gold', 5000],
        ['botania:mana_string', 'ars_nouveau:magebloom_fiber', 1250],
        ['botania:manasteel_ingot', 'gtceu:blue_alloy_ingot', 3000],
        ['botania:mana_powder', 'gtceu:lazurite_dust', 400]
    ]

    infusionRecipes.forEach(recipe => {
        let outputItem = recipe[0]
        let inputItem = recipe[1]
        let manaCost = recipe[2]

        let recipeId = outputItem.replace(':', '_')

        event.recipes.botania.mana_infusion(outputItem, inputItem, manaCost)
            .id(`kubejs:botania_infusion/${recipeId}`)

        event.recipes.gtceu.mana_infuser(`botania_conversion/${recipeId}`)
            .itemInputs(inputItem)
            .itemOutputs(outputItem)
            .inputFluids(`kubejs:dense_mana ${manaCost / 10}`)
            .duration(20)
            .EUt(GTValues.VA[GTValues.MV])
    })

    event.remove({ id: 'botania:mana_infusion/mana_quartz' })


    // ---------------------------------------------------------
    // Runic Altar Recipes
    // ---------------------------------------------------------
    event.recipes.botania.runic_altar('kubejs:manasteel_reinforced_plating', [
        "#forge:double_plates/manasteel", "#forge:double_plates/manasteel", 'botania:manaweave_cloth'
    ], 10000)

    // Colorful Quartz
    const quartzColors = [
        { id: 'botania:quartz_sunny', item: 'minecraft:sunflower' },
        { id: 'botania:quartz_dark', item: 'gtceu:coke_gem' },
        { id: 'botania:quartz_blaze', item: 'minecraft:blaze_rod' },
        { id: 'botania:quartz_lavender', item: 'minecraft:amethyst_shard' },
        { id: 'botania:quartz_red', item: 'minecraft:redstone_block' }
    ]

    quartzColors.forEach(q => {
        event.remove({ id: q.id })
        event.recipes.botania.runic_altar(q.id, [
            q.item,
            'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz',
            'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz'
        ], 1000)
    })

    event.recipes.botania.runic_altar(('travelersboots:travelers_boots'), [
        'kubejs:magebloom_fiber_cloth', 'kubejs:magebloom_fiber_cloth', 'minecraft:feather',
        '#forge:nuggets/managold', '#minecraft:fishes', '#forge:gems/wind',
        '#forge:gems/wind', 'minecraft:leather_boots', '#forge:nuggets/managold'
    ], 5000)


    // ---------------------------------------------------------
    // Machine Assembly & Crafting
    // ---------------------------------------------------------
    
    // Pure Daisy
    event.recipes.botania.pure_daisy('kubejs:contradiction_stone', "minecraft:netherrack")

    // Diluted Pool
    event.shaped('botania:diluted_pool', [
        ' H ',
        'LML',
        'LLL'
    ], {
        L: 'botania:livingrock',
        M: 'kubejs:mana_core',
        H: '#forge:tools/hammers'
    })

    // Apothecary
    event.remove({ id: 'botania:apothecary_default' })
    event.shaped('botania:apothecary_default', [
        'SBS',
        'MCH',
        'CCC'
    ], {
        C: 'twigs:cobblestone_bricks',
        S: 'twigs:cobblestone_brick_slab',
        B: 'botania:white_petal_block',
        M: '#forge:tools/mallets',
        H: '#forge:tools/hammers',
    })

    // Mana Pool
    event.recipes.gtceu.assembler('gtceu:assembler/mana_pool')
        .itemInputs('5x gtceu:livingrock_plate', '5x botania:polished_livingrock', 'kubejs:mana_core')
        .itemOutputs('botania:mana_pool')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)

    // Mana Spreader
    event.shaped('botania:mana_spreader', [
        'PLP',
        'RGE',
        'PLP'
    ], {
        L: 'botania:livingwood',
        R: 'kubejs:mana_chip',
        G: '#botania:petals',
        E: 'gtceu:gold_ring',
        P: 'gtceu:livingwood_plate'
    })

    // Runic Altar
    event.recipes.gtceu.assembler('gtceu:assembler/runic_altar')
        .itemInputs('8x gtceu:livingrock_plate', '3x botania:livingrock', 'kubejs:advanced_mana_core')
        .inputFluids("kubejs:dense_mana 400")
        .itemOutputs('botania:runic_altar')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)

    // Livingwood Bow
    event.remove({ id: 'botania:livingwood_bow' })
    event.shaped('botania:livingwood_bow', [
        'HTM',
        'TOM',
        'FTM'
    ], {
        M: 'botania:mana_string',
        T: 'botania:livingwood_twig',
        O: 'forgeborncore:manasteel_ring',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })


    // ---------------------------------------------------------
    // Material Processing (Cutting & Lathe)
    // ---------------------------------------------------------
    
    // Livingrock Plate
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate_water')
        .itemInputs('botania:livingrock')
        .inputFluids('minecraft:water 17')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(368)

    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate_distilled_water')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(276)

    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(184)

    // Livingwood Bolts
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(140)

    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_distilled_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(60)

    // Livingwood Screw
    event.recipes.gtceu.lathe('gtceu:lathe/lathe_livingwood_bolt_to_screw')
        .itemInputs('gtceu:livingwood_bolt')
        .itemOutputs('gtceu:livingwood_screw')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(12)

    // Livingwood Plate
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_to_plate_water')
        .itemInputs('botania:livingwood')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(280)

    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_to_plate_distilled_water')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    event.recipes.gtceu.cutter('gtceu:cut_livingwood_to_plate')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(120)


    // ---------------------------------------------------------
    // Fluid & GT Machine Recipes
    // ---------------------------------------------------------
    
    // Dense Mana
    event.recipes.gtceu.chemical_reactor('dense_mana')
        .inputFluids('blasmatech:mana 1000')
        .outputFluids('kubejs:dense_mana 100')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(120)

    // GT Mana Infuser (Manasteel)
    event.recipes.gtceu.mana_infuser('manasteel_ingot_best')
        .itemInputs('gtceu:blue_alloy_ingot')
        .itemOutputs('botania:manasteel_ingot')
        .inputFluids(Fluid.of('kubejs:dense_mana', 300))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mana_infuser('manasteel_block_best')
        .itemInputs('gtceu:blue_alloy_block')
        .itemOutputs('botania:manasteel_block')
        .inputFluids(Fluid.of('kubejs:dense_mana', 2700))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.remove({id: "botania:mana_infusion/manasteel_block"})

    // GT Runic Assembler
    event.recipes.gtceu.runic_assembler('black_quartz')
        .itemInputs('8x minecraft:quartz', 'gtceu:coke_gem')
        .itemOutputs('botania:quartz_dark')
        .inputFluids(Fluid.of('kubejs:dense_mana', 50))
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.runic_assembler("manasteel_reinforced_plating")
        .itemInputs('2x #forge:double_plates/manasteel', 'botania:manaweave_cloth')
        .itemOutputs('kubejs:manasteel_reinforced_plating')
        .inputFluids(Fluid.of('kubejs:dense_mana', 300))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV])

})