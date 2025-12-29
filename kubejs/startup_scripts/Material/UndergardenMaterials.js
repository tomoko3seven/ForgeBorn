//Materials
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    event
        .create('ditchbulb_resin')
        .color(0x804d22)
        .ingot()
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_PLATE);

    event
        .create('froststeel')
        .ingot()
        .liquid()
        .color(0x67b9ee)
        .cableProperties(GTValues.V[GTValues.LV], 8, 0, false)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_GEAR
        );
});
