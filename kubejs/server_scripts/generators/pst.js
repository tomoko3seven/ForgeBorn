ServerEvents.recipes((event) => {
    event.recipes.gtceu
        .steam_turbine('ulv')
        .inputFluids('gtceu:steam 500')
        .EUt(-GTValues.V[GTValues.ULV])
        .duration(10);

    event.recipes.gtceu
        .combustion_generator('ulv')
        .inputFluids('minecraft:lava 64')
        .EUt(-8)
        .duration(15);
});
