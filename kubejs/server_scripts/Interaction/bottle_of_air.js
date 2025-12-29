ItemEvents.rightClicked((event) => {
    const { player, item } = event;
    console.log(`Right click: ${item.id} at Y=${player.y}`);

    if (item.id === 'minecraft:glass_bottle') {
        console.log(`Bottle clicked at Y=${player.y}`);

        if (Math.floor(player.y) >= 100) {
            console.log('Replacing bottle with air bottle!');
            item.count--;
            player.give(Item.of('kubejs:air_bottle'));
            player.level.playSound(
                null,
                player.x,
                player.y,
                player.z,
                'block.glass.break',
                1.0,
                1.0
            );
        }
    }
});
