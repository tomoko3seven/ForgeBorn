ServerEvents.recipes(event => {
event.remove({ output: 'immersive_aircraft:boiler' })
event.remove({ output: 'immersive_aircraft:steel_boiler' })
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

});