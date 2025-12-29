ServerEvents.recipes((event) => {
    const xp_crafts = [
        { item: 'minecraft:redstone', xp_amount: 140 },
        { item: 'gtceu:copper_dust', xp_amount: 70 },
        { item: 'gtceu:tin_dust', xp_amount: 100 },
        { item: 'gtceu:iron_dust', xp_amount: 60 },
        { item: 'gtceu:lead_dust', xp_amount: 180 },
        { item: 'gtceu:silver_dust', xp_amount: 220 },
        { item: 'gtceu:gold_dust', xp_amount: 300 },
        { item: 'minecraft:gunpowder', xp_amount: 70 },
        { item: 'gtceu:asbestos_dust', xp_amount: 70 },
        { item: 'gtceu:asbestos_dust', xp_amount: 70 },
        { item: 'gtceu:coal_dust', xp_amount: 50 },
        { item: 'gtceu:diamond_dust', xp_amount: 500 },
        { item: 'gtceu:emerald_dust', xp_amount: 450 },
        { item: 'gtceu:lapis_dust', xp_amount: 250 },
        { item: 'gtceu:lithium_dust', xp_amount: 200 },
        { item: 'gtceu:rock_salt_dust', xp_amount: 210 },
        { item: 'gtceu:cassiterite_dust', xp_amount: 100 },
        { item: 'gtceu:rubber_dust', xp_amount: 80 },
        { item: 'gtceu:electrotine_dust', xp_amount: 120 },
        { item: 'gtceu:sulfur_dust', xp_amount: 90 },
        { item: 'gtceu:manganese_dust', xp_amount: 130 },
        { item: 'gtceu:sapphire_dust', xp_amount: 230 },
    ];

    xp_crafts.forEach((a) => {
        event.recipes.gtceu
            .congnitium_solidification()
            .notConsumable(a.item)
            .inputFluids('mob_grinding_utils:fluid_xp ' + a.xp_amount)
            .itemOutputs(a.item)
            .EUt(GTValues.VA[GTValues.ULV])
            .duration(20 * 10);
    });
});
