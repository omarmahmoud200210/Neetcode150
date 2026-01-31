function minWindow(str: string, target: string): string {
    let right = 0, left = 0, matches = 0;
    let minLength = Infinity, currentWindow = 0, minStartWindow = 0;

    let need_map: { [key: string]: number } = {};
    let have_map: { [key: string]: number } = {};

    for (let i = 0; i < target.length; i++) {
        need_map[target[i]!]! = (need_map[target[i]!]! || 0) + 1;
    }

    let requiredKeys = Object.keys(need_map).length;
    
    while (right < str.length) {
        let char = str[right]!;
        have_map[char]! = (have_map[char]! || 0) + 1;

        if (have_map[char]! === need_map[char]!) matches++;
         
        while (matches === requiredKeys) {
            currentWindow = right - left + 1;
            
            if (currentWindow < minLength) {
                minLength = currentWindow;
                minStartWindow = left;
            }

            let char = str[left]!;
            have_map[char]!--;

            if (have_map[char]! < need_map[char]!) {
                matches--;
            }

            left++;
        }

        right++;
    }

    if (minLength === Infinity) return "";
    return str.slice(minStartWindow, minStartWindow + minLength);
};

console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC