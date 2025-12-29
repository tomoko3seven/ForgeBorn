const WorldGenLayers = Java.loadClass(
    'com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers'
);

GTCEuServerEvents.oreVeins((event) => {
    event.add('kubejs:magic_crystals_vein', (vein) => {
        vein.layer('stone');
        vein.weight(12);
        vein.clusterSize(14);
        vein.density(0.9);
        vein.discardChanceOnAirExposure(0);
        vein.heightRangeUniform(5, 10);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) =>
                        l.weight(3).mat(GTMaterials.get('earth')).size(3, 4)
                    )
                    .layer((l) =>
                        l.weight(2).mat(GTMaterials.get('aqua')).size(3, 4)
                    )
                    .layer((l) =>
                        l.weight(3).mat(GTMaterials.get('fire')).size(3, 4)
                    )
                    .layer((l) =>
                        l.weight(1).mat(GTMaterials.get('wind')).size(3, 4)
                    )
            )
        );
    });
    event.add('kubejs:crystallyne_vein', (vein) => {
        vein.layer('sand');
        vein.weight(30);
        vein.clusterSize(14);
        vein.density(3);
        vein.discardChanceOnAirExposure(0);
        vein.heightRangeUniform(58, 62);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern.layer((l) =>
                    l.weight(3).mat(GTMaterials.get('crystallyne')).size(3, 4)
                )
            )
        );
    });
});
