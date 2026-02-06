LootJS.modifiers((event) => {
    event.addBlockLootModifier('minecraft:dirt').addLoot('minecraft:stick');

    event
        .addEntityLootModifier('specialmobs:blaze')
        .replaceLoot('minecraft:blaze_rod', 'gtceu:sulfur_dust', true);

    event
        .addEntityLootModifier('minecraft:sheep')
        .removeLoot('#minecraft:wool')
        .addLoot(
            'kubejs:wool_clutch',
            1,
            [
                1,
                1,
            ]
        );

    event
        .addEntityLootModifier('minecraft:iron_golem')
        .removeLoot('minecraft:iron_ingot');

    event
        .addEntityLootModifier('minecraft:wither')
        .killedByPlayer()
        .addLoot('kubejs:wither_heart');
    event
        .addEntityLootModifier('minecraft:wither')
        .killedByPlayer()
        .addLoot('nether_remastered:seal_of_the_underworld_item');

    event
        .addLootTypeModifier(LootType.ENTITY)
        .randomChance(0.1)
        .addLoot('kubejs:sulfuric_mushroom');
});

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:grass')
        .addLoot('kubejs:plant_fiber')
        .randomChance(0.2);
});
