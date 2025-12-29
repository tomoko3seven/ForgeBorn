GTCEuStartupEvents.registry('gtceu:world_gen_layer', (event) => {
    event
        .create('undergarden')
        .targets('undergarden:depthrock', 'undergarden:shiverstone')
        .dimensions('undergarden:undergarden');
    event
        .create('sand')
        .targets('minecraft:sand')
        .dimensions('minecraft:overworld');
});
