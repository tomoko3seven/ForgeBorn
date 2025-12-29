GTCEuServerEvents.oreVeins((event) => {
    event.add('kubejs:ug_utherium_vein', (vein) => {
        vein.layer('undergarden');
        vein.weight(20);
        vein.clusterSize(35);
        vein.density(0.35);
        vein.discardChanceOnAirExposure(0);
        vein.heightRangeUniform(5, 40);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) =>
                        l.weight(3).mat(GTMaterials.get('utherium')).size(3, 4)
                    )
                    .layer((l) =>
                        l.weight(1).mat(GTMaterials.Almandine).size(1, 3)
                    )
                    .layer((l) => l.weight(2).mat(GTMaterials.Ruby).size(2, 4))
            )
        );
    });

    event.add('kubejs:ug_cloggrum_vein', (vein) => {
        vein.layer('undergarden');
        vein.weight(50);
        vein.clusterSize(45);
        vein.density(0.45);
        vein.discardChanceOnAirExposure(1);
        vein.heightRangeUniform(7, 35);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) =>
                        l.weight(1).mat(GTMaterials.get('cloggrum')).size(2, 3)
                    )
                    .layer((l) => l.weight(1).mat(GTMaterials.Iron).size(2, 3))
                    .layer((l) => l.weight(1).mat(GTMaterials.Iron).size(2, 3))
            )
        );
    });

    event.add('kubejs:ug_froststeel_vein', (vein) => {
        vein.layer('undergarden');
        vein.weight(34);
        vein.clusterSize(20);
        vein.density(0.45);
        vein.discardChanceOnAirExposure(1);
        vein.heightRangeUniform(3, 20);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) =>
                        l
                            .weight(1)
                            .mat(GTMaterials.get('froststeel'))
                            .size(1, 3)
                    )
                    .layer((l) => l.weight(1).mat(GTMaterials.Iron).size(2, 3))
                    .layer((l) => l.weight(1).mat(GTMaterials.Iron).size(2, 3))
            )
        );
    });

    event.add('kubejs:ug_certus', (vein) => {
        vein.layer('undergarden');
        vein.weight(30);
        vein.clusterSize(20);
        vein.density(0.5);
        vein.discardChanceOnAirExposure(0);
        vein.heightRangeUniform(5, 40);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) =>
                        l.weight(3).mat(GTMaterials.Quartzite).size(1, 2)
                    )
                    .layer((l) =>
                        l.weight(2).mat(GTMaterials.Barite).size(2, 4)
                    )
                    .layer((l) =>
                        l.weight(1).mat(GTMaterials.CertusQuartz).size(1, 3)
                    )
            )
        );
    });
});
