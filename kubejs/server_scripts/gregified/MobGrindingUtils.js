ServerEvents.recipes(event => {
event.remove({ id: 'mob_grinding_utils:recipe_entity_conveyor' })
event.remove({ id: 'mob_grinding_utils:recipe_tank' })

event.shaped(Item.of('4x mob_grinding_utils:entity_conveyor'), [
    ' P ',
    'PRP',
    'PCP'
], {
    P: '#forge:plates/steel', 
    R: 'minecraft:redstone_block', 
    C: 'ulvcovm:ulv_conveyor_module'
})
event.shaped(Item.of('mob_grinding_utils:tank'), [
    'PGP',
    'GGG',
    'PGP'
], {
    P: '#forge:plates/froststeel', 
    G: '#forge:glass'
})
})