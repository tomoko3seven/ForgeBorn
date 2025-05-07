StartupEvents.registry('block', event => {
    event.create('cobblestone_bricks').soundType('stone').tagBlock('minecraft:mineable/pickaxe').hardness(3.0).resistance(2.0).requiresTool(true).textureAll('kubejs:block/cobblestone_bricks');
    event.create('empty_ender_casing').soundType('stone').tagBlock('minecraft:mineable/pickaxe');
    /*event.create('iron_blast_furnace_controller')
    .displayName('Primitive Blast Furnace Controller')
    .material('stone')
    .hardness(3.5)
    .tagBlock('minecraft:mineable/pickaxe')
    .texture('up', 'kubejs:block/compressed_cobbestone')
    .texture('down', 'kubejs:block/compressed_cobbestone')
    .texture('north', 'kubejs:block/compressed_cobbestone')
    .texture('south', 'kubejs:block/compressed_cobbestone')
    .texture('west', 'kubejs:block/compressed_cobbestone')
    .texture('east', 'kubejs:block/iron_blast_furnace');*/
});