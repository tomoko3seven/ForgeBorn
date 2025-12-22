JEIEvents.hideItems(event => {
    event.hide('functionalstorage:gold_upgrade');
    event.hide('functionalstorage:collector_upgrade');
    event.hide('functionalstorage:diamond_upgrade');
    event.hide('functionalstorage:netherite_upgrade');

    event.hide(Item.of('nopunching:flint_hatchet', '{Damage:0}'));
    event.hide(Item.of('nopunching:saw', '{Damage:0}'));
});

JEIEvents.hideRecipes(event => {
    event.hideIngredient(Item.of('nopunching:flint_hatchet', '{Damage:0}'));
    event.hideIngredient(Item.of('nopunching:saw', '{Damage:0}'));
});