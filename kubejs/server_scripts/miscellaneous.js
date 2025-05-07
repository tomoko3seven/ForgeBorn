ServerEvents.recipes((event) => {
  event.remove({ mod: 'itemfilters' })
  // Travel Anchors
  /*event.remove({ id: "travelanchors:travel_anchor" });
  event.shaped(`travelanchors:travel_anchor`, ["SGS", "GPG", "SGS"], {
    S: "#forge:plates/black_steel",
    G: "#forge:plates/green_sapphire",
    P: "ender_pearl",
  });*/

  /*event.shaped(`kubejs:ender_hull`, ["SGS", "WCW", "   "], {
    P: 'gtceu:black_steel_plate',
    C: 'gtceu:platinum_single_cable',
    W: 'gtceu:ender_pearl_plate',
  });*/

  event.shaped(`kubejs:empty_ender_casing`, ["PPP", "PTP", "PPP"], {
    P: 'gtceu:black_steel_plate',
    T: '#forge:tools/wrenches',
  });

  /*event.remove({ id: "travelanchors:travel_staff" });
  event.shaped(`travelanchors:travel_staff`, ["  P", " R ", "R  "], {
    R: "#forge:rods/black_steel",
    P: 'gtceu:exquisite_green_sapphire_gem',
  });*/

  // Tool Belt
  /*event.remove({ id: "toolbelt:belt" });
  event.shaped("toolbelt:belt", ["SLS", "C C", "LIL"], {
    S: "minecraft:string",
    L: "minecraft:leather",
    I: "#forge:plates/steel",
    C: "#forge:screws/steel",*/
  });
  /*event.remove({ id: "toolbelt:pouch" });
  event.shaped("toolbelt:pouch", [" G ", "LSL", "   "], {
    G: "#forge:rings/gold",
    L: "minecraft:leather",
    S: "#forge:plates/steel",
  });*/
// Chisel
  /*event.shaped(
    'chisel:chisel', [
        'P  ',
        'S  ',
        '   '
    ], {
        P: '#forge:plates/iron',
        S: '#forge:rods/wooden',
    }
);*/