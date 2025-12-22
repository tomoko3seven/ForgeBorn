    ServerEvents.recipes(event => {
    const { naturesaura } = event.recipes
    //MOVE LATER
    event.remove({ output: 'malum:poppet' })



    event.remove({ output: 'botania:mana_pool' })
    event.remove({ output: 'botania:mana_spreader' })
    event.remove({ output: 'botania:diluted_pool' }) 
    event.remove({ output: 'botania:runic_altar' }) 
    event.remove({ output: 'botania:petal_apothecary' })
    event.remove({ output: 'botania:manaweave_cloth' }) 

naturesaura.tree_ritual('kubejs:omnipetal', ['botania:red_petal', 'botania:orange_petal', 'botania:yellow_petal', 'botania:green_petal', 'botania:light_blue_petal',
        'botania:blue_petal', 'botania:purple_petal', 'naturesaura:gold_leaf'
    ], 'oak_sapling', 60)

    //Botanical Cuircuits
    //LV

    event.recipes.gtceu.assembler('gtceu:assembler/livingrock_circuit_board')
    .itemInputs('8x gtceu:manasteel_foil', 'gtceu:livingrock_plate')
    .inputFluids('kubejs:dense_mana 200')
    .itemOutputs('kubejs:livingrock_circuit_board')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(200)

    event.recipes.botania.mana_infusion('kubejs:mana_infused_livingrock_circuit_board', 'kubejs:livingrock_circuit_board', 3000)
    event.recipes.botania.mana_infusion('kubejs:mana-filled_idol', 'kubejs:token_of_light', 100000)
    event.recipes.botania.mana_infusion('kubejs:pure_mana_dust', '#botania:mana_dusts', 50000)
    event.remove({ id: 'botania:mana_infusion/mana_quartz' })
    event.recipes.botania.mana_infusion('botania:quartz_mana', 'gtceu:quartzite_gem', 500)


    event.recipes.botania.mana_infusion('gtceu:managold_ingot', '#forge:ingots/gold', 5000)
    /*event.recipes.botania.runic_altar('forgeborncore:lv_botanical_circuit', ['kubejs:mana_core', 'kubejs:mana_infused_livingrock_circuit_board', 'kubejs:mana_core', 
        'forgeborncore:infusediron_plate', 'botania:mana_diamond', 'forgeborncore:manasteel_plate', 'botania:mana_diamond', 'forgeborncore:manasteel_single_wire', 'forgeborncore:manasteel_single_wire'], 40000)*/

    /*event.recipes.gtceu.runic_assembler("")
.itemInputs("kubejs:mana_infused_livingrock_circuit_board")
.itemInputs("2x forgeborncore:manasteel_single_wire")
.itemInputs("forgeborncore:infusediron_plate")
.itemInputs("forgeborncore:manasteel_plate")
.itemInputs("2x kubejs:mana_core")
.itemInputs("2x botania:mana_diamond")
.inputFluids("kubejs:dense_mana 4000")
.itemOutputs("forgeborncore:lv_botanical_circuit")
.EUt(32)
.duration(5)*/

    event.recipes.botania.runic_altar('kubejs:manasteel_reinforced_plating', ["#forge:double_plates/manasteel", "#forge:double_plates/manasteel", 'botania:manaweave_cloth'], 10000)
    /*event.recipes.botania.runic_altar('forgeborncore:depthsingot_ingot', ['#forge:ingots/taintedgold', '#forge:ingots/taintedgold', '#forge:ingots/skyingot', '#forge:ingots/skyingot', 'minecraft:netherite_scrap'], 5000)*/

    //Colorful Quartz
    event.remove({ id: 'botania:quartz_sunny' })
    event.remove({ id: 'botania:quartz_dark' })
    event.remove({ id: 'botania:quartz_blaze' })
    event.remove({ id: 'botania:quartz_lavender' })
    event.remove({ id: 'botania:quartz_red' })

    event.recipes.botania.runic_altar('botania:quartz_sunny', ['minecraft:sunflower', 'minecraft:quartz', 'minecraft:quartz', 
        'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz'], 1000)
            event.recipes.botania.runic_altar('botania:quartz_dark', ['gtceu:coke_gem', 'minecraft:quartz', 'minecraft:quartz', 
        'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz'], 1000)
            event.recipes.botania.runic_altar('botania:quartz_blaze', ['minecraft:blaze_rod', 'minecraft:quartz', 'minecraft:quartz', 
        'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz'], 1000)
            event.recipes.botania.runic_altar('botania:quartz_lavender', ['minecraft:amethyst_shard', 'minecraft:quartz', 'minecraft:quartz', 
        'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz'], 1000)
            event.recipes.botania.runic_altar('botania:quartz_red', ['minecraft:redstone_block', 'minecraft:quartz', 'minecraft:quartz', 
        'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz'], 1000)

    //Daisy Recipes
    event.recipes.botania.pure_daisy('kubejs:contradiction_stone', "minecraft:netherrack")
         

        event.shaped(
        'botania:diluted_pool', [
            ' H ',
            'LML',
            'LLL'
        ], {
            L: 'botania:livingrock',
            M: 'kubejs:mana_core',
            H: '#forge:tools/hammers'
        }
    );
    event.remove({ id: 'botania:apothecary_default' })
    event.shaped(
        'botania:apothecary_default', [
            'SBS',
            'MCH',
            'CCC'
        ], {
            C: 'twigs:cobblestone_bricks',
            S: 'twigs:cobblestone_brick_slab',
            B: 'botania:white_petal_block',
            M: '#forge:tools/mallets',
            H: '#forge:tools/hammers',
        }
    );

event.recipes.gtceu.assembler('gtceu:assembler/mana_pool')
    .itemInputs('5x gtceu:livingrock_plate', '5x botania:polished_livingrock', 'kubejs:mana_core')
    .itemOutputs('botania:mana_pool')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(400)

    event.shaped(
        'botania:mana_spreader', [
            'PLP',
            'RGE',
            'PLP'
        ], {
            L: 'botania:livingwood',
            R: 'kubejs:mana_chip',
            G: '#botania:petals',
            E: 'gtceu:gold_ring',
            P: 'gtceu:livingwood_plate'
        }
    );
        event.recipes.gtceu.assembler('gtceu:assembler/runic_altar')
    .itemInputs('8x gtceu:livingrock_plate', '3x botania:livingrock', 'kubejs:advanced_mana_core')
    .inputFluids("kubejs:dense_mana 400")
    .itemOutputs('botania:runic_altar')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(300)
    //Materials
    event.remove({ output: 'botania:mana_string' })
    event.remove({ output: 'botania:manasteel_ingot' })
    event.remove({ output: 'botania:mana_powder' })

    event.recipes.botania.mana_infusion('botania:mana_string', 'ars_nouveau:magebloom_fiber', 1250)
    event.recipes.botania.mana_infusion('botania:manasteel_ingot', 'gtceu:blue_alloy_ingot', 3000)
    event.recipes.botania.mana_infusion('botania:mana_powder', 'gtceu:lazurite_dust', 400)
    //Botania Gear (i mean weapons and tools)
    event.remove({ id: 'botania:livingwood_bow' })
    event.shaped(
        'botania:livingwood_bow', [
            'HTM',
            'TOM',
            'FTM'
        ], {
            M: 'botania:mana_string',
            T: 'botania:livingwood_twig',
            O: 'forgeborncore:manasteel_ring',
            H: '#forge:tools/hammers',
            F: '#forge:tools/files'
        }
    );
    //Livingrock
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

    event.remove({ id: 'botania:elven_trade/dragonstone_block' })
    event.remove({ id: 'botania:elven_trade/dragonstone' })
    event.remove({ id: 'botania:elven_trade/dreamwood' })
    event.remove({ id: 'botania:elven_trade/dreamwood_log' })
    event.remove({ id: 'botania:elven_trade/elementium' })
    event.remove({ id: 'botania:elven_trade/elementium_block' })
    event.remove({ id: 'botania:elven_trade/elf_glass' })
    event.remove({ id: 'botania:elven_trade/elf_quartz' })
    event.remove({ id: 'botania:elven_trade/lexicon_elven' })
    event.remove({ id: 'botania:elven_trade/pixie_dust' })
    event.remove({ id: 'botania:gaia_ingot' })

    //Livingwood
    //Bolt
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
    //Screw
    event.recipes.gtceu.lathe('gtceu:lathe/lathe_livingwood_bolt_to_screw')
        .itemInputs('gtceu:livingwood_bolt')
        .itemOutputs('gtceu:livingwood_screw')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(12)
    //Plate
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
    //Mana-like Fluids
    event.recipes.gtceu.chemical_reactor('dense_mana')
        .inputFluids('blasmatech:mana 1000')
        .outputFluids('kubejs:dense_mana 100')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(120)


    //Simple Machines
    //Mana Infuser
        event.recipes.gtceu.mana_infuser('manasteel_ingot_best')
    .itemInputs('gtceu:blue_alloy_ingot')
    .itemOutputs('botania:manasteel_ingot')
    .inputFluids(Fluid.of('kubejs:dense_mana', 300))
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.mana_infuser('manasteel_block_best')
    .itemInputs('gtceu:blue_alloy_block')
    .itemOutputs('botania:manasteel_block')
    .inputFluids(Fluid.of('kubejs:dense_mana', 2700))
    .duration(20*5*9)
    .EUt(GTValues.VA[GTValues.MV]);
    //Runic Assembler
    event.recipes.gtceu.runic_assembler('black_quartz')
    .itemInputs('8x minecraft:quartz', 'gtceu:coke_gem')
    .itemOutputs('botania:quartz_dark')
    .inputFluids(Fluid.of('kubejs:dense_mana', 50))
    .duration(200)
    .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.runic_assembler("manasteel_reinforced_plating")
    .itemInputs('2x #forge:double_plates/manasteel', 'botania:manaweave_cloth')
    .itemOutputs('kubejs:manasteel_reinforced_plating')
    .inputFluids(Fluid.of('kubejs:dense_mana', 300))
    .duration(20)
    .EUt(GTValues.VA[GTValues.MV]);


    event.recipes.botania.mana_infusion('kubejs:livingrock_wafer', 'gtceu:livingrock_plate', 1000)

    event.recipes.gtceu.mana_pulse_infuser('kubejs:mana_multithreaded_computation_wafer')
    .notConsumable('gtceu:utherium_lens')
    .itemInputs('16x kubejs:livingrock_wafer')
    .inputFluids('kubejs:dense_mana 1600')
    .itemOutputs('16x kubejs:mana_multithreaded_computation_wafer')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20*30)

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



event.recipes.botania.runic_altar(('travelersboots:travelers_boots'), ['kubejs:magebloom_fiber_cloth', 'kubejs:magebloom_fiber_cloth', 'minecraft:feather', 
        '#forge:nuggets/managold', '#minecraft:fishes', '#forge:gems/wind', '#forge:gems/wind', 'minecraft:leather_boots', '#forge:nuggets/managold'], 5000)



//Botanical Circuits
event.recipes.gtceu.assembler('kubejs:mana_chip')
        .itemInputs('2x gtceu:manasteel_plate')
        .itemInputs('2x gtceu:manasteel_foil')
        .itemInputs('2x gtceu:manasteel_bolt')
        .itemInputs('2x gtceu:fine_copper_wire')
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('kubejs:mana_chip')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20*10)
})