ServerEvents.tags('item', (event) => {
    event.add('forge:meat', 'minecraft:chicken');
    event.add('forge:meat', 'minecraft:cooked_chicken');
    event.add('forge:meat', 'minecraft:beef');
    event.add('forge:meat', 'minecraft:cooked_beef');
    event.add('forge:meat', 'minecraft:porkchop');
    event.add('forge:meat', 'minecraft:cooked_porkchop');
    event.add('forge:meat', 'minecraft:mutton');
    event.add('forge:meat', 'minecraft:cooked_mutton');
    event.add('forge:meat', 'minecraft:rabbit');
    event.add('forge:meat', 'minecraft:cooked_rabbit');

    const ad_astra = [
        'iron',
        'steel',
    ];
    ad_astra.forEach((material) => {
        event.remove(
            'forge:plates/' + material,
            'ad_astra:' + material + '_plate'
        );
        event.remove('forge:rods/' + material, 'ad_astra:' + material + '_rod');
    });
    // event.remove("forge:ingots/steel", "ad_astra:steel_ingot");
    // event.remove("forge:ingots/steel", "tconstruct:steel_ingot");
    // event.remove("forge:ingots/tin", "forestry:ingot_tin");
    // event.remove("forge:ingots/bronze", "forestry:ingot_bronze");
});
