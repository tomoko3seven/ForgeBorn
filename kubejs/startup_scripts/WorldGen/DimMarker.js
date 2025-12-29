GTCEuStartupEvents.registry('gtceu:dimension_marker', (event) => {
    //////////////////////
    ///Planets & Orbits///
    //////////////////////
    /*event.create('ad_astra:earth_orbit')
        .iconSupplier(() => Item.of('ad_astra:earth_globe').getItem())
        .tier(0)
        .overrideName('Earth Orbit')*/
    event
        .create('ad_astra:moon')
        .iconSupplier(() => Item.of('ad_astra:moon_globe').getItem())
        .tier(1)
        .overrideName('Moon');
    event
        .create('ad_astra:mars')
        .iconSupplier(() => Item.of('ad_astra:mars_globe').getItem())
        .tier(2)
        .overrideName('Mars');
    event
        .create('ad_astra:mercury_globe')
        .iconSupplier(() => Item.of('ad_astra:mercury_globe').getItem())
        .tier(2)
        .overrideName('Mercury');
    event
        .create('ad_astra:glacio')
        .iconSupplier(() => Item.of('ad_astra:glacio_globe').getItem())
        .tier(3)
        .overrideName('Glacio');
    ////////////////
    ///Dimensions///
    ////////////////
    event
        .create('undergarden:undergarden')
        .iconSupplier(() => Item.of('kubejs:undergarden_dim').getItem())
        .tier(0)
        .overrideName('The Undergarden');
});
