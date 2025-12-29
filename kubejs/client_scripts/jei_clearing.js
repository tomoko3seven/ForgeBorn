JEIEvents.hideItems((event) => {
    event.hide('@ad_astra');

    event.hide('ae2:facade');
    event.hide(/ae2:facade/);

    event.hide(/enderio:clear_glass_.*_.*/);
    event.hide(/enderio:fused_quartz_.*_.*/);

    event.hide('actuallyadditions:rice_slimeball');
    event.hide('actuallyadditions:wooden_aiot');
    event.hide('actuallyadditions:stone_aiot');
    event.hide('actuallyadditions:iron_aiot');
    event.hide('actuallyadditions:gold_aiot');
    event.hide('actuallyadditions:diamond_aiot');
    event.hide('actuallyadditions:netherite_aiot');

    event.hide('functionalstorage:gold_upgrade');
    event.hide('functionalstorage:collector_upgrade');
    event.hide('functionalstorage:diamond_upgrade');
    event.hide('functionalstorage:netherite_upgrade');

    event.hide(Item.of('nopunching:flint_hatchet', '{Damage:0}'));
    event.hide(Item.of('nopunching:saw', '{Damage:0}'));
});

JEIEvents.hideRecipes((event) => {
    event.hideIngredient(Item.of('nopunching:flint_hatchet', '{Damage:0}'));
    event.hideIngredient(Item.of('nopunching:saw', '{Damage:0}'));

    event.hide('@ad_astra');

    event.hideIngredient('actuallyadditions:rice_slimeball');
});
