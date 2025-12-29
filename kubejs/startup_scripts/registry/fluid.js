StartupEvents.registry('fluid', (event) => {
    event
        .create('dense_mana')
        .bucketColor(Color.rgba(67, 244, 247, 255))
        .stillTexture('kubejs:block/dense_mana')
        .displayName('§bDense Mana'); // aqua
    /*.temperature(5)*/
    /*.stillTexture("kubejs:block/empty")
        .flowingTexture("kubejs:block/empty")*/

    event
        .create('earth_essence')
        .bucketColor(Color.rgba(67, 244, 247, 255))
        .stillTexture('kubejs:block/earth_essence')
        .displayName('Earth Essence');
});
