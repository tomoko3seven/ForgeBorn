ServerEvents.recipes(event => {
    event.recipes.gtceu.electric_blast_furnace('kubejs:sky_steel')
        .itemInputs('ae2:charged_certus_quartz_crystal', 'minecraft:iron_ingot', 'ae2:sky_stone_block')
        .itemOutputs('2x megacells:sky_steel_ingot')
        .duration(100)
        .EUt(56)
})