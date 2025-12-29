GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    ///////////////////
    /////ForgeBorn/////
    ///////////////////
    event
        .create('culinary_assembler', 'simple')
        .tiers(
            GTValues.LV,
            GTValues.MV,
            GTValues.HV,
            GTValues.EV,
            GTValues.IV,
            GTValues.LuV,
            GTValues.ZPM,
            GTValues.UV,
            GTValues.UHV,
            GTValues.UEV,
            GTValues.UIV
        )
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Culinary Assembler')
                .recipeType('culinary_assembler')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        );
    event
        .create('crystallizer', 'simple')
        .tiers(
            GTValues.LV,
            GTValues.MV,
            GTValues.HV,
            GTValues.EV,
            GTValues.IV,
            GTValues.LuV,
            GTValues.ZPM,
            GTValues.UV,
            GTValues.UHV,
            GTValues.UEV,
            GTValues.UIV
        )
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Crystallizer')
                .recipeType('crystallizer')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        );
    event
        .create('laser_welder', 'simple')
        .tiers(
            GTValues.LV,
            GTValues.MV,
            GTValues.HV,
            GTValues.EV,
            GTValues.IV,
            GTValues.LuV,
            GTValues.ZPM,
            GTValues.UV,
            GTValues.UHV,
            GTValues.UEV,
            GTValues.UIV
        )
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Laser Welder')
                .recipeType('laser_welder')
                .workableTieredHullModel('gtceu:block/machines/laser_engraver')
        );
    event
        .create('squeezer', 'simple')
        .tiers(
            GTValues.ULV,
            GTValues.LV,
            GTValues.MV,
            GTValues.HV,
            GTValues.EV,
            GTValues.IV,
            GTValues.LuV,
            GTValues.ZPM,
            GTValues.UV,
            GTValues.UHV,
            GTValues.UEV,
            GTValues.UIV
        )
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Squeezer')
                .recipeType('squeezer')
                .workableTieredHullModel('gtceu:block/machines/squeezer')
        );

    /////////////
    /////ULV/////
    /////////////
    event
        .create('bender', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Bender')
                .recipeType('bender')
                .workableTieredHullModel('gtceu:block/machines/bender')
        );
    event
        .create('centrifuge', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Centrifuge')
                .recipeType('centrifuge')
                .workableTieredHullModel('gtceu:block/machines/centrifuge')
        );
    event
        .create('wiremill', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Wiremill')
                .recipeType('wiremill')
                .workableTieredHullModel('gtceu:block/machines/wiremill')
        );
    event
        .create('cutter', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Cutter')
                .recipeType('cutter')
                .workableTieredHullModel('gtceu:block/machines/cutter')
        );
    event
        .create('extruder', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Extruder')
                .recipeType('extruder')
                .workableTieredHullModel('gtceu:block/machines/extruder')
        );
    event
        .create('chemical_reactor', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Chemical Reactor')
                .recipeType('chemical_reactor')
                .workableTieredHullModel(
                    'gtceu:block/machines/chemical_reactor'
                )
        );
    event
        .create('packer', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Packer')
                .recipeType('packer')
                .workableTieredHullModel('gtceu:block/machines/packer')
        );
    event
        .create('distillery', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Distillery')
                .recipeType('distillery')
                .workableTieredHullModel('gtceu:block/machines/distillery')
        );
    event
        .create('compressor', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Compressor')
                .recipeType('compressor')
                .workableTieredHullModel('gtceu:block/machines/compressor')
        );
    event
        .create('gas_collector', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Gas Collector')
                .recipeType('gas_collector')
                .workableTieredHullModel('gtceu:block/machines/gas_collector')
        );
    //Generators
    event
        .create('steam_turbine', 'generator')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Steam Turbine')
                .recipeType('steam_turbine')
                .workableTieredHullModel('gtceu:block/generators/steam_turbine')
        );
    event
        .create('combustion_generator', 'generator')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Combustion Generator')
                .recipeType('combustion_generator')
                .workableTieredHullModel('gtceu:block/generators/combustion')
        );

    /////////////////
    /////Botania/////
    /////////////////

    event
        .create('mana_infuser', 'simple')
        .tiers(
            GTValues.MV,
            GTValues.HV,
            GTValues.EV,
            GTValues.IV,
            GTValues.LuV,
            GTValues.ZPM,
            GTValues.UV,
            GTValues.UHV,
            GTValues.UEV,
            GTValues.UIV
        )
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .langValue(GTValues.VLVH[tier] + ' Mana Infuser')
                .recipeType('mana_infuser')
                .workableTieredHullModel('gtceu:block/machines/mana_infuser')
        );

    event
        .create('botanical_purification_chamber', 'simple')
        .tiers(
            GTValues.LV,
            GTValues.MV,
            GTValues.HV,
            GTValues.EV,
            GTValues.IV,
            GTValues.LuV,
            GTValues.ZPM,
            GTValues.UV,
            GTValues.UHV,
            GTValues.UEV,
            GTValues.UIV
        )
        .definition((tier, builder) =>
            builder
                .langValue(
                    GTValues.VLVH[tier] + ' Botanical Purification Chamber'
                )
                .recipeType('botanical_purification_chamber')
                .workableTieredHullModel(
                    'gtceu:block/machines/botanical_purification_chamber'
                )
        );

    event
        .create('runic_assembler', 'simple')
        .tiers(
            GTValues.MV,
            GTValues.HV,
            GTValues.EV,
            GTValues.IV,
            GTValues.LuV,
            GTValues.ZPM,
            GTValues.UV,
            GTValues.UHV,
            GTValues.UEV,
            GTValues.UIV
        )
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + ' Runic Assembler')
                .recipeType('runic_assembler')
                .workableTieredHullModel('gtceu:block/machines/runic_assembler')
        );
});
