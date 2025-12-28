const UNDERGARDEN = "undergarden:undergarden";
const OVERWORLD = "minecraft:overworld";

// Timings (in ticks)
const STAND_TIME = 40;      // ticks for standing still
const TELEPORT_DELAY = 100; // ticks for teleport countdown

// coordinates
const UG_CEILING_Y = 120;   
const OW_SAFE_Y = -50; 

// player state
let playerData = {}; 

PlayerEvents.tick(event => {
  const player = event.player;
  if (!player || !player.isAlive()) return;

  const uuid = player.uuid.toString();
  const pos = player.blockPosition();
  const dim = player.level.dimension;

  // initialize for new players
  if (!playerData[uuid]) {
    playerData[uuid] = {
      lastPos: pos,
      standTicks: 0,
      teleporting: false
    };
  }
  let data = playerData[uuid];

  // movement checker
  if (pos.equals(data.lastPos)) {
    data.standTicks++;
  } else {
    // if player moves, stop
    data.standTicks = 0;
    
    // if a teleport was in progress, cancel it
    if (data.teleporting) {
        player.sendSystemMessage(Text.of("§cMovement detected! Teleportation cancelled."));
        data.teleporting = false;
    }
  }
  data.lastPos = pos;

  // if teleporting stop
  if (data.teleporting) return;

  // to undergarden
  if (dim == OVERWORLD && pos.y <= -63 && data.standTicks >= STAND_TIME) {
    initiateTeleport(player, data, UNDERGARDEN, pos.x, UG_CEILING_Y, pos.z);
  }

  // to overworld
  if (dim == UNDERGARDEN && pos.y >= UG_CEILING_Y && data.standTicks >= STAND_TIME) {
    initiateTeleport(player, data, OVERWORLD, pos.x, OW_SAFE_Y, pos.z);
  }
});

/**
 * handles the countdown and teleport execution
 */
function initiateTeleport(player, data, targetDim, x, y, z) {
  // lock 
  data.teleporting = true;
  player.sendSystemMessage(Text.of("§5You feel a shiver down your spine... Teleporting in 5 seconds..."));

  player.server.scheduleInTicks(TELEPORT_DELAY, callback => {
    // Safety Checks: Player must be online, alive, and NOT have moved (teleporting still true)
    if (!player || !player.isAlive() || !data.teleporting) return;

    // clear
    createSafeZone(player.server, targetDim, x, y, z);

    // teleport
    player.teleportTo(targetDim, x + 0.5, y, z + 0.5, player.yRot, player.xRot);
    
    // effects
    player.potionEffects.add("minecraft:slow_falling", 200, 0, false, false);
    
    // reset
    data.teleporting = false;
    data.standTicks = 0;
  });
}

/**
 * clear area around target
 */
function createSafeZone(server, dimId, originX, originY, originZ) {
  const level = server.getLevel(dimId);
  if (!level) return;

  // Loop relative to the target coordinates
  for (let x = -1; x <= 1; x++) {
    for (let z = -1; z <= 1; z++) {
      for (let y = 0; y <= 2; y++) {
        let blockPos = new BlockPos(originX + x, originY + y, originZ + z);
        let block = level.getBlock(blockPos);
        
        if (!block.id.equals("minecraft:air") && !block.id.equals("minecraft:water")) {
            level.destroyBlock(blockPos, false);
        }
      }
      
      /*
      let floorPos = new BlockPos(originX + x, originY - 1, originZ + z);
      if (level.getBlock(floorPos).id.equals("minecraft:air")) {
          level.setBlock(floorPos, "minecraft:obsidian");
      }
      */
    }
  }
}