ServerEvents.recipes(event => {
    //MOVE LATER
    event.remove({ output: 'botania:runic_altar' })
    event.shaped(
        'botania:apothecary_default', [
            'CBC',
            'MCH',
            'CCC'
        ], {
            C: 'kubejs:cobblestone_bricks',
            B: 'botania:white_petal_block',
            M: '#forge:tools/mallets',
            H: '#forge:tools/hammers',
        }
    );
    event.shaped(
        'botania:mana_pool', [
            'L L',
            'LLL',
            'BCB'
        ], {
            L: 'botania:livingrock',
            C: '#gtceu:circuits/lv',
            B: 'botania:white_petal_block',
        }
    );
    event.shaped(
        'botania:mana_spreader', [
            'LLL',
            'RGE',
            'LLL'
        ], {
            L: '#botania:livingwood_logs',
            R: '#forge:double_plates/red_alloy',
            G: 'minecraft:gold_block',
            E: '#forge:flawless_gems/emerald',
        }
    );
    event.shaped(
        'ars_nouveau:enchanting_apparatus', [
            'MOM',
            'GCG',
            'MOM'
        ], {
            O: 'minecraft:obsidian',
            M: 'forgeborncore:manasteel_plate',
            G: '#forge:double_plates/gold',
            C: 'forgeborncore:lv_botanical_circuit',
        }
    );
    event.shaped('botania:runic_altar', [
        'LLL',
        'LCL',
        'MSH'
      ], {
        L: 'botania:polished_livingrock',
        C: 'kubejs:runic_altar_core',
        S: 'botania:polished_livingrock_slab',
        H: '#forge:tools/hammers',
        M: '#forge:tools/mallets'
      }
    );
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
        .itemOutputs('9x forgeborncore:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(368)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate_distilled_water')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('9x forgeborncore:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(276)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('9x forgeborncore:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
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
    //event.remove({ id: 'botania:gaia_ingot' })

    //Livingwood
    //Bolt
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x forgeborncore:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(140)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_distilled_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x forgeborncore:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x forgeborncore:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(60)
    //Screw
    event.recipes.gtceu.lathe('gtceu:lathe/lathe_livingwood_bolt_to_screw')
        .itemInputs('forgeborncore:livingwood_bolt')
        .itemOutputs('forgeborncore:livingwood_screw')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(12)
    //Plate
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_to_plate_water')
        .itemInputs('botania:livingwood')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x forgeborncore:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(280)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_to_plate_distilled_water')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x forgeborncore:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
    event.recipes.gtceu.cutter('gtceu:cut_livingwood_to_plate')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x forgeborncore:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120)

        //ManaSteel Ingots
    event.recipes.gtceu.mana_infuser('manasteel_ingot_best')
    .itemInputs('gtceu:blue_alloy_ingot')
    .itemOutputs('botania:manasteel_ingot')
    .inputFluids(Fluid.of('manaliquidizer:mana_fluid', 3000))
    .duration(20)
    .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.mana_infuser('manasteel_block_best')
    .itemInputs('gtceu:blue_alloy_block')
    .itemOutputs('botania:manasteel_block')
    .inputFluids(Fluid.of('manaliquidizer:mana_fluid', 27000))
    .duration(20)
    .EUt(GTValues.VA[GTValues.MV]);
})