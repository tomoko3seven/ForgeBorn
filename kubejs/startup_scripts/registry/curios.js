// priority: 0

StartupEvents.registry('item', (event) => {
    event
        .create('eternal_feast')
        .texture('kubejs:item/eternal_feast')
        .displayName('§bEternal Feast')
        .tooltip('Wearing this grants infinite saturation.')
        .unstackable()
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create().curioTick(
                (slotContext, stack) => {
                    let entity = slotContext.entity();

                    if (!entity.isPlayer()) return;

                    if (entity.foodData.saturationLevel < 20) {
                        entity.foodData.saturationLevel = 20;
                    }

                    if (entity.foodData.foodLevel < 20) {
                        entity.foodData.foodLevel = 20;
                    }
                }
            )
        )
        .tag('curios:head');
});
