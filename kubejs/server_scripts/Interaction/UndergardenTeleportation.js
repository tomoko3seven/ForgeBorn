const UNDERGARDEN = 'undergarden:undergarden';
const OVERWORLD = 'minecraft:overworld';

const STAND_TIME = 200;
const TELEPORT_DELAY = 100;

const CEILING_Y = 120;
const SAFE_OVERWORLD_Y = -50;

let playerData = {};

PlayerEvents.tick((event) => {
    const player = event.player;
    if (!player || !player.isAlive()) return;

    const uuid = player.uuid.toString();
    const pos = player.blockPosition();
    const dim = player.level.dimension;

    if (!playerData[uuid]) {
        playerData[uuid] = {
            lastPos: pos,
            standTicks: 0,
            teleporting: false,
        };
    }

    let data = playerData[uuid];

    if (pos.equals(data.lastPos)) {
        data.standTicks++;
    } else {
        data.standTicks = 0;
        data.teleporting = false;
    }
    data.lastPos = pos;

    if (data.teleporting) return;

    // === Undergarden ===
    if (dim == OVERWORLD && pos.y <= -63 && data.standTicks >= STAND_TIME) {
        data.teleporting = true;
        player.sendSystemMessage(
            Text.of('§6You feel strangely... Teleporation after 5 seconds!')
        );

        player.server.scheduleInTicks(TELEPORT_DELAY, () => {
            if (player && player.isAlive()) {
                clearArea(player);
                player.teleportTo(
                    UNDERGARDEN,
                    pos.x + 0.5,
                    CEILING_Y,
                    pos.z + 0.5,
                    player.yRot,
                    player.xRot
                );
                player.potionEffects.add(
                    'minecraft:slow_falling',
                    200,
                    0,
                    false,
                    true
                );
                clearArea(player);
            }
            data.teleporting = false;
            data.standTicks = 0;
        });
    }

    // === Overworld ===
    if (
        dim == UNDERGARDEN &&
        pos.y >= CEILING_Y &&
        data.standTicks >= STAND_TIME
    ) {
        data.teleporting = true;
        player.sendSystemMessage(
            Text.of('§6Returning to overworld after 5 seconds!')
        );

        player.server.scheduleInTicks(TELEPORT_DELAY, () => {
            if (player && player.isAlive()) {
                clearArea(player);
                player.teleportTo(
                    OVERWORLD,
                    pos.x + 0.5,
                    SAFE_OVERWORLD_Y,
                    pos.z + 0.5,
                    player.yRot,
                    player.xRot
                );
                player.potionEffects.add(
                    'minecraft:slow_falling',
                    200,
                    0,
                    false,
                    true
                );
                clearArea(player);
            }
            data.teleporting = false;
            data.standTicks = 0;
        });
    }
});

function clearArea(player) {
    const pos = player.blockPosition();
    const level = player.level;

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                let blockPos = pos.offset(x, y, z);
                let block = level.getBlock(blockPos);
                if (!block.id.includes('air')) {
                    level.destroyBlock(blockPos, false);
                }
            }
        }
    }
}
