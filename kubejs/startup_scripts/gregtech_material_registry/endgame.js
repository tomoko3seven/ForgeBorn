/**
 * Endgame Material Registry.
 * Used for registering Gregtech Materials
 * that are related post-uhv content.
 */

/*
Note: Some GTCEuM recipes handlers calculate duration based on mass.
This led to the infamous recipe bug where Infinity Screws in the Lathe had integer limit duration,
because the Infinity material had infinite mass.
*/
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('infinity', 168, 316, -1, null, '∞', false);
    event.create('godium', 69, 420, -1, null, 'Mu', false);
})

//  Infinity, and Godium have animations and thus custom material icon sets.
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('infinity').parent(GTMaterialIconSet.SHINY)
    event.create('godium').parent(GTMaterialIconSet.SHINY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create("sculk_superconductor")
        .ingot().fluid()
        .element(GTElements.get("sculk_superconductor"))
        .color(0xffffff)
        .iconSet('shiny')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_SMASHING)
        .cableProperties(2097152, 8, 0, true)

    event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE)
    	.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('godium')
        .ingot()
        .element(GTElements.get("godium"))
        .color(0xffca3c)
        .iconSet('godium')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)
        .cableProperties(2147483647, 134217727, 0, true)    
})