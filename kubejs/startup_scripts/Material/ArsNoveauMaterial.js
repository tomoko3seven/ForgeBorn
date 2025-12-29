GTCEuStartupEvents.registry('gtceu:material', (event) => {
    event
        .create('sourcemetall')
        .color(0xb25fe0)
        .ingot()

        .iconSet(GTMaterialIconSet.BRIGHT)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('archwood')
        .color(0x858486)
        .iconSet(GTMaterialIconSet.WOOD)
        .dust()
        .flags(GTMaterialFlags.GENERATE_PLATE);
});
