ServerEvents.recipes((event) => {
    //Removes
    event.remove({ type: 'create:crafting' });
});
