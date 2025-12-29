BlockEvents.rightClicked((event) => {
    const { player, item, block, level } = event;

    if (level.isClientSide()) return;
    if (!item || item.isEmpty()) return;

    const isChiselItem = item.id === 'farmersdelight:flint_knife';
    // const isChiselTag  = item.hasTag('forge:tools/chisels')

    if (!(isChiselItem /*|| isChiselTag*/)) return;

    if (!block.hasTag('minecraft:logs')) return;

    block.set('minecraft:crafting_table');

    try {
        item.damage(1, player);
    } catch (e) {}

    event.cancel();
});
