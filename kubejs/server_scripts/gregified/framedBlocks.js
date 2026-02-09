ServerEvents.recipes((event) => {
    event.remove({ id: 'framedblocks:framed_chest' });
    event.shaped(
        Item.of('framedblocks:framed_chest'),
        [
            'CCC',
            'GFG',
            'CCC',
        ],
        {
            C: 'framedblocks:framed_cube',
            G: 'gtceu:wood_gear',
            F: 'minecraft:flint',
        }
    );
});
