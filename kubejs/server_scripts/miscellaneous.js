ServerEvents.recipes((event) => {
  // Travel Anchors
  event.remove({ id: "travelanchors:travel_anchor" });
  event.shaped(`travelanchors:travel_anchor`, ["SGS", "GPG", "SGS"], {
    S: "#forge:plates/black_steel",
    G: "#forge:plates/green_sapphire",
    P: "ender_pearl",
  });

  event.remove({ id: "travelanchors:travel_staff" });
  event.shaped(`travelanchors:travel_staff`, ["  P", " R ", "R  "], {
    R: "#forge:rods/black_steel",
    P: "gtceu:green_sapphire_gem",
  });

  // Tool Belt
  event.remove({ id: "toolbelt:belt" });
  event.shaped("toolbelt:belt", ["SLS", "C C", "LIL"], {
    S: "minecraft:string",
    L: "minecraft:leather",
    I: "#forge:plates/steel",
    C: "#forge:screws/steel",
  });
  event.remove({ id: "toolbelt:pouch" });
  event.shaped("toolbelt:pouch", [" G ", "LSL", "   "], {
    G: "#forge:rings/gold",
    L: "minecraft:leather",
    S: "#forge:plates/steel",
  });
});
