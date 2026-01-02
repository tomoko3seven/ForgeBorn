GTCEuStartupEvents.registry('gtceu:material_icon_set', (event) => {
    event.create('godium').parent(GTMaterialIconSet.SHINY); //Placeholder
    event.create('sculk_alloy').parent(GTMaterialIconSet.DULL); //Placeholder
    event.create('infinity').parent(GTMaterialIconSet.SHINY);

    event.create('enori').parent(GTMaterialIconSet.GEM_VERTICAL);
});

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    //////////
    // AE2
    event
        .create('charged_certus_quartz')
        .gem()
        .dust()
        .color(0x9fd5e8)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('certus_quartz');

    event
        .create('fluix')
        .gem()
        .dust()
        .color(0x7f5bb3)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('charged_certus_quartz', 'redstone', 'nether_quartz');
    //ForgeBorn
    event
        .create('cobblestone')
        .color(0x8a8a8a)
        .ingot()

        .iconSet(GTMaterialIconSet.ROUGH)
        .toolStats(
            new ToolProperty(1, 1, 76, 1, [
                GTToolType.FILE,
            ])
        );

    event
        .create('black_iron')
        .color(0x442d2d)
        .ingot()

        .iconSet(GTMaterialIconSet.BRIGHT)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.GENERATE_LENS
        );

    event
        .create('black_quartz')
        .color(0x4c636d)

        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('mana_soldering_alloy')
        .color(0x191970)
        .ingot()
        .fluid()

        .iconSet(GTMaterialIconSet.DULL);

    event
        .create('earth')
        .color(0x00ff00)
        .gem()
        .ore()

        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LENS
        );
    event
        .create('fire')
        .color(0xc43c1a)
        .gem()
        .ore()

        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LENS
        );
    event
        .create('aqua')
        .color(0x3b6da3)
        .gem()
        .ore()

        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LENS
        );
    event
        .create('wind')
        .color(0xaebfc0)
        .gem()
        .ore()

        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LENS
        );
    ///////////////
    event
        .create('utherium')
        .color(0xc3434c)
        .gem()
        .ore()

        .iconSet(GTMaterialIconSet.DIAMOND)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS);
    event
        .create('cloggrum')
        .color(0x8a735a)
        .ingot()
        .ore()

        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL
        );

    event
        .create('cloggrumsteel')
        .color(0x9d8469)
        .ingot()

        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('aethersteel')
        .color(0xc4d7e8)
        .ingot()

        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('firestone')
        .color(0xd84a1b)
        .ingot()

        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('thaumium')
        .color(0x6a4fb3)
        .ingot()

        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('runic_iron')
        .color(0x7d6fa0)
        .ingot()

        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('voidbound')
        .color(0x3b2e5a)
        .ingot()

        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('stormsilver')
        .color(0xa5c9d9)
        .ingot()

        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('starsilver')
        .color(0xcadcf0)
        .ingot()

        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    //Actually Additions
    event
        .create('restonia')
        .gem()
        .color(0xa60000)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ]);

    event
        .create('enori')
        .gem()
        .color(0xede6ff)
        .iconSet('enori')
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ]);

    event
        .create('void')
        .gem()
        .color(0x0f0f0f)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ]);

    event
        .create('palis')
        .gem()
        .color(0x1c1c89)
        .iconSet(GTMaterialIconSet.LAPIS)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ]);

    event
        .create('diamatine')
        .gem()
        .color(0x8b8df3)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ]);

    event
        .create('emeradic')
        .gem()
        .color(0x09e103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ]);
    //Actually Additions EXTRA
    event
        .create('restonia_empowered')
        .gem()
        .fluid()
        .color(0xa60000)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ]);

    event
        .create('enori_empowered')
        .gem()
        .fluid()
        .color(0xede6ff)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ]);

    event
        .create('void_empowered')
        .gem()
        .fluid()
        .color(0x0f0f0f)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ]);

    event
        .create('palis_empowered')
        .gem()
        .fluid()
        .color(0x1c1c89)
        .iconSet(GTMaterialIconSet.LAPIS)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ]);

    event
        .create('diamatine_empowered')
        .gem()
        .fluid()
        .color(0x8b8df3)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ]);

    event
        .create('emeradic_empowered')
        .gem()
        .fluid()
        .color(0x09e103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ]);
    //Botania (MOVE LATER)
    event
        .create('managold')
        .color(0xd6b46e)
        .ingot()

        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('prismarine_infused_alloy')
        .color(0x4caea3)
        .ingot()

        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('grimsteel')
        .color(0x4b4e55)
        .ingot()

        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    event
        .create('crystallyne')
        .color(0x6fa7c4)
        .ore()
        .gem()

        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING
        );

    event
        .create('lumicrystalltine_alloy')
        .color(0x8a6fcf)
        .ingot()

        .iconSet(GTMaterialIconSet.BRIGHT)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );
    event
        .create('lumicrystalline')
        .color(0x8a6fcf)
        .gem()

        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.NO_SMELTING);

    event
        .create('mysterium')
        .color(0xff55cc)
        .ingot()

        .iconSet(GTMaterialIconSet.BRIGHT)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );

    //Null
    event.create('lumi_acid').color(0xffff55).liquid();
    event.create('lumicrystalline_slurry').color(0xcccc33).liquid();

    const alloys = [
        { name: 'copper_alloy', color: 0xff9c6a },
        { name: 'energetic_alloy', color: 0xffa500 },
        { name: 'vibrant_alloy', color: 0x7cff00 },
        { name: 'redstone_alloy', color: 0xb00000 },
        { name: 'conductive_alloy', color: 0x6b6b6b },
        { name: 'pulsating_alloy', color: 0x00ff9c },
        { name: 'soularium', color: 0x4b2a1f },
    ];

    alloys.forEach((a) => {
        event
            .create(a.name)
            .color(a.color)
            .ingot()
            .iconSet(GTMaterialIconSet.DULL)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_SPRING,
                GTMaterialFlags.GENERATE_SPRING_SMALL,
                GTMaterialFlags.NO_SMELTING,
                GTMaterialFlags.NO_ORE_SMELTING
            );
    });

    //GregTech
    event
        .create('sunnarium')
        .dust()
        .color(0xddd692)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE);

    event
        .create('enriched_sunnarium')
        .dust()
        .color(0xacffc2)
        .flags(
            GTMaterialFlags.PHOSPHORESCENT,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_DENSE
        );
    //Avaritia
    event
        .create('infinity')
        .color(0x000000)
        .ingot()
        .iconSet('infinity')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        );
});
