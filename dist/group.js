"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function groupAnagrams(strs) {
    if (strs.length === 1)
        return [strs];
    let arr = [];
    for (let i = 0; i < strs.length; i++) {
        let sortedItem = strs[i].split("").sort();
        arr.push(sortedItem.join(""));
    }
    let isVisited = new Array(strs.length).fill(false);
    let groups = [];
    for (let i = 0; i < arr.length; i++) {
        if (isVisited[i])
            continue;
        let groupAnagrams = [strs[i]];
        isVisited[i] = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                groupAnagrams.push(strs[j]);
                isVisited[j] = true;
            }
        }
        groups.push(groupAnagrams);
    }
    return groups;
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
function groupsAnagrams(strings) {
    const map = new Map();
    for (let item of strings) {
        const sorted = item.split("").sort().join("");
        if (!map.has(sorted))
            map.set(sorted, []);
        map.get(sorted).push(item);
    }
    return Array.from(map.values());
}
console.log(groupsAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
