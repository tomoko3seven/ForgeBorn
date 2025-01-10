ServerEvents.recipes(event => {
    //Deleting recipes
    event.remove("minecraft:iron_sword");
    event.remove("minecraft:golden_sword");
    event.remove("minecraft:diamond_sword");
    event.remove("minecraft:iron_shovel");
    event.remove("minecraft:golden_shovel");
    event.remove("minecraft:diamond_shovel");
})