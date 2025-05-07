GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mana_infuser', 'simple')
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Mana Infuser")
                .recipeType('mana_infuser')
                .workableTieredHullRenderer('gtceu:block/machines/mana_infuser')
        )
})