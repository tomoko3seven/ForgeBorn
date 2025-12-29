ServerEvents.recipes((event) => {
    event.remove({ id: 'enderio:sticks' });
    event.remove({ mod: 'sgjourney' });
    event.remove({ mod: 'ad_astra' });
    event.remove({ id: 'mob_grinding_utils:entity_conveyor' });
});
