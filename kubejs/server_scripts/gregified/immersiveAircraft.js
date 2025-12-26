ServerEvents.recipes(event => {
event.remove({ output: 'immersive_aircraft:boiler' })
event.remove({ output: 'immersive_aircraft:steel_boiler' })
event.remove({ output: 'immersive_aircraft:propeller' })
event.remove({ output: 'immersive_aircraft:engine' })

event.shaped(Item.of('immersive_aircraft:boiler'), [
    'SPS',
    'GHG',
    'PBP'
], {
    S: 'gtceu:copper_screw',
    P: 'gtceu:copper_plate',
    G: 'gtceu:small_copper_gear',
    H: '#gtceu:tools/crafting_hammers',
    B: 'ironfurnaces:copper_furnace'
})

event.shaped(Item.of('immersive_aircraft:steel_boiler'), [
    'SPS',
    'GHG',
    'PBP'
], {
    S: 'gtceu:steel_screw',
    P: 'gtceu:steel_plate',
    G: 'gtceu:small_steel_gear',
    H: '#gtceu:tools/crafting_hammers',
    B: "immersive_aircraft:boiler"
})

event.shaped(Item.of('immersive_aircraft:propeller'), [
    'PP ',
    ' R ',
    ' PP'
], {
    R: '#forge:rings/wrought_iron',
    P: '#forge:plates/wrought_iron'
})

event.replaceInput(
    { id: 'immersive_aircraft:hull' },
    'minecraft:iron_ingot',
    '#forge:plates/wrought_iron'
)

event.shaped(Item.of('immersive_aircraft:engine'), [
    'RPR',
    'UFU',
    'PBP'
], {
    R: '#forge:screws/wrought_iron',
    U: 'ulvcovm:ulv_electric_piston',
    F: 'minecraft:blast_furnace',
    B: 'immersive_aircraft:boiler',
    P: '#forge:plates/wrought_iron'
})
});