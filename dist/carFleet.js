"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carFleet(target, position, speed) {
    const map = new Map();
    let fleetLeader = -1;
    let count = 0;
    for (let i = 0; i < position.length; i++) {
        let distance = target - position[i];
        let time = distance / speed[i];
        map.set(position[i], time);
    }
    const descendingMap = new Map([...map.entries()].sort((a, b) => b[0] - a[0]));
    descendingMap.forEach((value, key) => {
        let currentTime = value;
        if (currentTime > fleetLeader) {
            count++;
            fleetLeader = currentTime;
        }
    });
    return count;
}
carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1]);
