ServerEvents.recipes(event => {
//Circuits
event.recipes.gtceu.circuit_assembler('basic_botanical_circuit')
        .itemInputs('kubejs:mana_infused_livingrock_circuit_board', 'kubejs:mmc_chip', '2x gtceu:annealed_manasteel_bolt', '2x gtceu:fine_manasteel_wire')
        .inputFluids('gtceu:mana_soldering_alloy 74')
        .itemOutputs('kubejs:basic_botanical_circuit')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20*15)




event.recipes.gtceu.autoclave('gtceu:autoclave/mana_infused_fibers')
    .itemInputs('4x botania:mana_string')
    .inputFluids('gtceu:manasteel 40')
    .itemOutputs('kubejs:mana_infused_fibers')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(90)
event.recipes.gtceu.compressor('gtceu:compressor/mana_infused_mesh')
    .itemInputs('2x kubejs:mana_infused_fibers')
    .itemOutputs('kubejs:mana_infused_mesh')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(70)
event.recipes.gtceu.mana_pulse_infuser('gtceu:assembler/manaweave_cloth')
    .notConsumable("kubejs:mana-filled_idol")
    .itemInputs('3x kubejs:mana_infused_mesh', '2x gtceu:manasteel_foil', '2x botania:mana_string')
    .inputFluids('kubejs:dense_mana 100')
    .itemOutputs('botania:manaweave_cloth')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20*10)













event.recipes.gtceu.assembler('gtceu:manasteel_livingrock_casing')
        .itemInputs('12x #forge:plates/manasteel')
        .itemInputs('botania:livingrock_bricks')
        .circuit(6)
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('kubejs:manasteel_livingrock_casing')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20*10)
event.recipes.gtceu.assembler('gtceu:terrasteel_livingwood_casing')
        .itemInputs('6x #forge:plates/livingwood')
        .itemInputs('gtceu:terrasteel_frame')
        .circuit(6)
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('kubejs:terrasteel_livingwood_casing')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20*10)








event.remove({ output: 'gtceu:mv_machine_casing' })
event.recipes.gtceu.mana_pulse_infuser('mv_casing')
    .itemInputs("4x botania:manaweave_cloth")
    .itemInputs("4x gtceu:aluminium_plate")
    .inputFluids('kubejs:dense_mana 100')
    .itemOutputs("gtceu:mv_machine_casing")
    .circuit(8)
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20*20)
})