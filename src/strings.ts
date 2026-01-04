function encode(decodeString: string[]): string {
  let encoding: string = "";

  for (let i: number = 0; i < decodeString.length; i++) {
    encoding += `${decodeString[i]!.length}#${decodeString[i]}`;
  }

  return encoding;
}

console.log(encode(["neet", "hiyo", "ok"])); // 4#neet4#hiyo2#ok

const encodeString = encode(["neet", "hiyo", "ok"]);

function decode(encodeStr: string): string[] {
  let array: string[] = [];
  let i: number = 0;

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
