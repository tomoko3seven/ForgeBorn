GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
      .create("microminer")
      .category("microminer")
      .setEUIO("in")
      .setMaxIOSize(3, 4, 1, 0)
      .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
      .setSound(GTSoundEntries.COOLING);
  });
  
  GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
      .create("microminer", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("microminer")
      .appearanceBlock(GTBlocks.MACHINE_CASING_HV)
      .pattern(definition =>
        FactoryBlockPattern.start()
          .aisle("BBB", "BBB", "BBB")
          .aisle("BBB", "B#B", "BBB")
          .aisle("BBB", "BEB", "BBB")
          .where("E", Predicates.controller(Predicates.blocks(definition.get())))
          .where(
            "B",
            Predicates.blocks("gtceu:mv_machine_casing")
              .setMinGlobalLimited(5)
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
          )
          .where("#", Predicates.air())
          .build()
      )
      .workableCasingRenderer(
        "gtceu:block/casings/voltage/mv/side",
        "gtceu:block/multiblock/implosion_compressor",
        true
      );
  });
  