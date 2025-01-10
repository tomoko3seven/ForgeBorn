ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  
  const singularity_materials = ['aluminium', 'silver', 'tin', 'platinum', 'copper', 'iron', 'lead', 'nickel', 'gold'];

    singularity_materials.forEach(element => {
        event.recipes.gtceu.large_quantum_compressor(`${element}_singularity`)
            .itemInputs(`64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `32x #forge:storage_blocks/${element}`)
            .itemOutputs(Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${element}"}`))
            .duration(24000)
            .EUt(120000);
    });
});
