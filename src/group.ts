// BigO Notation O(n^2)
function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) return [strs];

  let arr: string[] = [];

  for (let i: number = 0; i < strs.length; i++) {
    let sortedItem = strs[i]!.split("").sort();
    arr.push(sortedItem.join(""));
  }

  let isVisited: boolean[] = new Array(strs.length).fill(false);
  let groups: string[][] = [];

  for (let i: number = 0; i < arr.length; i++) {
    if (isVisited[i]) continue;

    let groupAnagrams: string[] = [strs[i]!];
    isVisited[i] = true;

    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        groupAnagrams.push(strs[j]!);
        isVisited[j] = true;
      }
    }

    groups.push(groupAnagrams);
  }

    return groups;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Pattern: Hashing (Hash Map). Time Complexity: O(N * K * log(K))
function groupsAnagrams(strings: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let item of strings) {
    const sorted = item.split("").sort().join("");
    if (!map.has(sorted)) map.set(sorted, []);
    map.get(sorted)!.push(item);
  }

    return Array.from(map.values());
}

console.log(groupsAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
