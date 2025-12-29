ServerEvents.recipes((event) => {
    //Black Iron
    event.remove({ output: 'extendedcrafting:black_iron_slate' });
    event.recipes.gtceu
        .bender('black_iron_slate')
        .itemInputs('2x extendedcrafting:black_iron_ingot')
        .itemOutputs('extendedcrafting:black_iron_slate')
        .EUt(30)
        .duration(80);

    event.remove({ id: 'extendedcrafting:black_iron_ingot' });
    event.recipes.gtceu
        .autoclave('extendedcrafting:black_iron_ingot')
        .itemInputs('gtceu:wrought_iron_ingot')
        .inputFluids('gtceu:oil_heavy 144')
        .itemOutputs('extendedcrafting:black_iron_ingot')
        .EUt(30)
        .duration(60);

    //Luminessence
    event.remove({ id: 'extendedcrafting:luminessence' });
    event.recipes.gtceu
        .mixer('extendedcrafting:luminessence')
        .itemInputs(
            '2x minecraft:glowstone_dust',
            'minecraft:redstone',
            'gtceu:opal_dust',
            'minecraft:gunpowder'
        )
        .inputFluids('gtceu:deuterium 40')
        .itemOutputs('2x extendedcrafting:luminessence')
        .EUt(30)
        .duration(100);

    //Basic Components
    event.remove({ output: 'extendedcrafting:basic_component' });
    event.shaped(
        'extendedcrafting:basic_component',
        [
            'SR ',
            'LR ',
            '   ',
        ],
        {
            S: 'extendedcrafting:black_iron_slate',
            R: 'gtceu:magnetic_iron_rod',
            L: 'extendedcrafting:luminessence',
        }
    );

    event.remove({ id: 'extendedcrafting:basic_catalyst' });
    event.recipes.gtceu
        .assembler('extendedcrafting:basic_catalyst')
        .itemInputs(
            '4x extendedcrafting:basic_component',
            'extendedcrafting:black_iron_slate'
        )
        .itemOutputs('extendedcrafting:basic_catalyst')
        .EUt(30)
        .duration(120);
});
