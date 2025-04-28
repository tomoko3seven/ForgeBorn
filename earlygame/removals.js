ServerEvents.recipes(event => {
    //Deleting recipes
    event.remove({ output: 'minecraft:crafting_table' });
    event.remove({ output: 'minecraft:furnace' })
    event.remove({ output: '#minecraft:wool' })
    event.remove({ output: '#minecraft:beds' })
    event.remove({ output: 'farmersdelight:stove' })
})