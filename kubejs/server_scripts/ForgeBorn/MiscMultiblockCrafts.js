ServerEvents.recipes((event) => {
    //Lava Furnace
    event.recipes.gtceu
        .lava_furnace()
        .itemInputs('#forge:normal_stone')
        .outputFluids('minecraft:lava 1000')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 10);
    //Primitive Drilling - Earth
    event.recipes.gtceu
        .primitive_drilling(`drilling_earth`)
        .perTick(true)
        .inputFluids('gtceu:drilling_fluid 150')
        .perTick(false)
        .dimension('minecraft:overworld')
        .itemOutputsRanged('gtceu:raw_nickel', 1, 3)
        .itemOutputsRanged('gtceu:raw_graphite', 1, 3)
        .itemOutputsRanged('gtceu:raw_diamond', 1, 3)
        .itemOutputsRanged('gtceu:raw_coal', 1, 3)
        .itemOutputsRanged('gtceu:raw_redstone', 1, 3)
        .itemOutputsRanged('gtceu:raw_lapis', 1, 3)
        .itemOutputsRanged('minecraft:raw_gold', 1, 3)
        .itemOutputsRanged('minecraft:raw_copper', 1, 3)
        .itemOutputsRanged('minecraft:raw_iron', 1, 3)
        .itemOutputsRanged('gtceu:raw_cassiterite', 1, 3)
        .itemOutputsRanged('gtceu:raw_gypsum', 1, 3)
        .itemOutputsRanged('gtceu:raw_green_sapphire', 1, 3)
        .itemOutputsRanged('gtceu:raw_realgar', 1, 3)
        .itemOutputsRanged('gtceu:raw_chromite', 1, 3)
        .itemOutputsRanged('gtceu:raw_cobaltite', 1, 3)
        .itemOutputsRanged('gtceu:raw_rock_salt', 1, 3)
        .itemOutputsRanged('gtceu:raw_salt', 1, 3)
        .itemOutputsRanged('gtceu:raw_lepidolite', 1, 3)
        .itemOutputsRanged('gtceu:raw_spodumene', 1, 3)
        .itemOutputsRanged('gtceu:raw_cinnabar', 1, 3)
        .itemOutputsRanged('gtceu:raw_apatite', 1, 3)
        .itemOutputsRanged('gtceu:raw_sapphire', 1, 3)
        .itemOutputsRanged('gtceu:raw_crystallyne', 1, 3)
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.MV], 4);
});
