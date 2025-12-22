ServerEvents.recipes(event => {
//Voltage

//Multiblocks
event.shaped('kubejs:spruce_zinc_casing', [
        'BPW',
        'PSP',
        'MPB'
      ], {
        B: 'gtceu:iron_bolt',
        S: 'minecraft:spruce_planks',
        W: '#gtceu:tools/crafting_wrenches',
        M: '#gtceu:tools/crafting_mallets',
        P: 'gtceu:zinc_plate'
      }
    );
event.recipes.gtceu.assembler('spruce_zinc_casing')
        .itemInputs('minecraft:spruce_planks', '6x gtceu:zinc_plate')
        .circuit(8)
        .itemOutputs('kubejs:spruce_zinc_casing')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20*8)
});