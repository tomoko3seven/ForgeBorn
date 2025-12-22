ServerEvents.recipes(event => {
event.remove({ output: 'legendarysurvivaloverhaul:heater' })
event.remove({ output: 'legendarysurvivaloverhaul:cooler' })
event.remove({ output: 'legendarysurvivaloverhaul:canteen' })
event.remove({ output: 'legendarysurvivaloverhaul:large_canteen' })
event.remove({ output: 'legendarysurvivaloverhaul:plaster' })
event.remove({ output: 'legendarysurvivaloverhaul:sewing_table' })
event.remove({ output: 'legendarysurvivaloverhaul:thermometer' })

event.shaped(Item.of('legendarysurvivaloverhaul:heater'), [
    'SPS',
    'PHP',
    'PBP'
], {
    S: 'gtceu:wrought_screw',
    P: 'gtceu:wrought_iron_plate',
    H: '#gtceu:tools/crafting_hammers',
    B: 'minecraft:furnace'
})

event.shaped(Item.of('legendarysurvivaloverhaul:cooler'), [
    'PSP',
    'PHP',
    'PRP'
], {
    S: 'minecraft:snow_block',
    P: 'gtceu:treated_wood_planks',
    H: '#gtceu:tools/crafting_mallets',
    R: 'gtceu:small_red_alloy_spring'
})

event.shaped(Item.of('legendarysurvivaloverhaul:canteen'), [
    'SLR',
    'L L',
    ' LS'
], {
    S: '#forge:string',
    L: 'minecraft:leather',
    R: 'gtceu:iron_ring'
})

event.shaped(Item.of('legendarysurvivaloverhaul:large_canteen'), [
    'SLR',
    'L L',
    ' LS'
], {
    S: '#forge:string',
    L: 'kubejs:tanned_leather',
    R: 'gtceu:aluminium_ring'
})

event.shaped('legendarysurvivaloverhaul:sewing_table', [
    'RPP',
    'BFP',
    'TTT'
], {
    R: 'gtceu:iron_rod',
    B: 'gtceu:iron_bolt',
    P: 'gtceu:iron_plate',
    F: '#gtceu:tools/crafting_files',
    T: 'gtceu:treated_wood_slab'
})

event.shaped('legendarysurvivaloverhaul:thermometer', [
    'PGP',
    'PAP',
    'ORO'
], {
    R: 'gtceu:small_red_alloy_spring',
    G: 'gtceu:iron_bolt',
    P: 'gtceu:iron_plate',
    O: 'gtceu:gold_plate',
    A: 'minecraft:glass_pane'
})

event.shapeless('legendarysurvivaloverhaul:plaster', [ 
  'kubejs:wool_clutch',
  'kubejs:wool_clutch',
  'minecraft:string'
])
});