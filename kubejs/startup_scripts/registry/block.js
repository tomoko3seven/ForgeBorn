StartupEvents.registry('block', (event) => {
    const BlockProperty = Java.loadClass(
        'net.minecraft.world.level.block.state.properties.BlockStateProperties'
    );

    event
        .create('cobblestone_bricks')
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .hardness(3.0)
        .resistance(2.0)
        .requiresTool(true)
        .textureAll('kubejs:block/cobblestone_bricks');
    event
        .create('contradiction_stone')
        .soundType('netherrack')
        .tagBlock('minecraft:mineable/pickaxe')
        .hardness(2.0)
        .resistance(1.0)
        .requiresTool(true)
        .textureAll('kubejs:block/contradiction_stone');
    event
        .create('empty_ender_casing')
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe');

    event
        .create('heavy_cabeling')
        .material('wool')
        .hardness(2.0)
        .tagBlock('forge:mineable/wire_cutter')
        .property(BlockProperty.AXIS)
        .placementState((ctx) => {
            return ctx.set('axis', ctx.clickedFace.axis);
        });

    //Huge Thanks to Puff
    global.Casings = [
        [
            'solid_wrought_iron',
            'metal',
            'pickaxe',
            'Solid Wrought Iron Casing',
        ],
        [
            'manasteel_livingrock',
            'metal',
            'pickaxe',
            'Manasteel Plated Livingrock Casing',
        ],
        [
            'manasteel_livingwood',
            'metal',
            'pickaxe',
            'Manasteel Plated Livingwood Casing',
        ],
        [
            'terrasteel_livingwood',
            'metal',
            'pickaxe',
            'Terrasteel Plated Livingwood Casing',
        ],

        [
            'acacia_magnalium',
            'metal',
            'pickaxe',
            'Magnalium-Plated Acacia Planks',
        ],
        [
            'spruce_zinc',
            'metal',
            'pickaxe',
            'Zinc-Plated Spruce Planks',
        ],

        [
            'voidbound',
            'metal',
            'pickaxe',
            'Void-Stabilizing Casing',
        ],
    ];
    //Huge Thanks to Puff
    event
        .create('wrought_iron_firebox', 'gtceu:active')
        .firebox(
            'kubejs:block/casings/solid_wrought_iron/solid_wrought_iron_casing',
            'kubejs:block/casings/solid_wrought_iron/firebox',
            'kubejs:block/casings/solid_wrought_iron/solid_wrought_iron_casing'
        )
        .displayName('Wrought Iron Firebox')
        .soundType('metal')
        .resistance(6)
        .hardness(5)
        .tagBlock('mineable/pickaxe')
        .tagBlock('forge:mineable/wrench')
        .requiresTool(true);

    event
        .create('manasteel_firebox', 'gtceu:active')
        .firebox(
            'kubejs:block/casings/manasteel_livingrock/manasteel_livingrock_casing',
            'kubejs:block/casings/manasteel_livingrock/manasteel_firebox',
            'kubejs:block/casings/manasteel_livingrock/manasteel_livingrock_casing'
        )
        .displayName('Manasteel Firebox')
        .soundType('metal')
        .resistance(6)
        .hardness(5)
        .tagBlock('mineable/pickaxe')
        .tagBlock('forge:mineable/wrench')
        .requiresTool(true);
    event
        .create('terrasteel_firebox', 'gtceu:active')
        .firebox(
            'kubejs:block/casings/terrasteel_livingwood/terrasteel_livingwood_casing',
            'kubejs:block/casings/terrasteel_livingwood/terrasteel_firebox',
            'kubejs:block/casings/terrasteel_livingwood/terrasteel_livingwood_casing'
        )
        .displayName('Terrasteel Firebox')
        .soundType('metal')
        .resistance(6)
        .hardness(5)
        .tagBlock('mineable/pickaxe')
        .tagBlock('forge:mineable/wrench')
        .requiresTool(true);
});
//Huge Thanks to Puff
StartupEvents.registry('block', (event) => {
    for (const [
        Name,
        SoundType,
        Tool,
        Display,
    ] of global.Casings) {
        event
            .create(`${Name.toLowerCase()}_casing`)
            .soundType(`${SoundType}`)
            .textureAll(`kubejs:block/casings/${Name}/${Name}_casing`)
            .hardness(2)
            .resistance(0.5)
            .renderType('cutout')
            .notSolid()
            .requiresTool(false)
            .tagBlock(`minecraft:mineable/${Tool}`)
            .tagBlock('forge:mineable/wrenches')
            .displayName(Display);
    }
});
