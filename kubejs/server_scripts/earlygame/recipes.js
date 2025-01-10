ServerEvents.recipes(event => {
// Recipes for beggining

    

        //Swords
event.shaped(
    'minecraft:diamond_sword', [
        ' B ',
        ' B ',
        ' S '
    ], {
        B: '#forge:plates/diamond',
        S: 'minecraft:stick',
    }
).id('minecraft:shaped/diamond_sword');

event.shaped(
    'minecraft:golden_sword', [
        ' B ',
        ' B ',
        ' S '
    ], {
        B: '#forge:plates/gold',
        S: 'minecraft:stick',
    }
).id('minecraft:shaped/golden_sword');

event.shaped(
    'minecraft:iron_sword', [
        ' B ',
        ' B ',
        ' S '
    ], {
        B: '#forge:plates/iron',
        S: 'minecraft:stick',
    }
).id('minecraft:shaped/iron_sword')

 //Shovels

        event.shaped(
            'minecraft:diamond_shovel', [
                ' B ',
                ' S ',
                ' S '
            ], {
                B: '#forge:plates/diamond',
                S: 'minecraft:stick',
            }
        ).id('minecraft:shaped/diamond_shovel');
        
        event.shaped(
            'minecraft:golden_shovel', [
                ' B ',
                ' S ',
                ' S '
            ], {
                B: '#forge:plates/gold',
                S: 'minecraft:stick',
            }
        ).id('minecraft:shaped/golden_shovel');
        
        event.shaped(
            'minecraft:iron_shovel', [
                ' B ',
                ' S ',
                ' S '
            ], {
                B: '#forge:plates/iron',
                S: 'minecraft:stick',
            }
        ).id('minecraft:shaped/iron_shovel')
})