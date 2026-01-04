"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function encode(decodeString) {
    let encoding = "";
    for (let i = 0; i < decodeString.length; i++) {
        encoding += `${decodeString[i].length}#${decodeString[i]}`;
    }
    return encoding;
}
console.log(encode(["neet", "hiyo", "ok"]));
const encodeString = encode(["neet", "hiyo", "ok"]);
function decode(encodeStr) {
    let array = [];
    let i = 0;
    while (i < encodeStr.length) {
        const delimiterIndex = encodeStr.indexOf("#", i);
        const len = Number(encodeStr.substring(i, delimiterIndex));
        i = delimiterIndex + 1;
        let str = encodeStr.substring(i, i + len);
        array.push(str);
        i += len;
    }
    return array;
}
console.log(decode(encodeString));
