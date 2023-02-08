const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let symbol;
  let index = 0;
  let res = [];
  let arr = [];
  let str;
  for (let i = 0; i < expr.length / 10; i++) {
    symbol = expr.slice(index, index + 10);
    arr.push(symbol);
    index += 10;
  }
  arr.forEach((symbol) => {
    let arr2 = [];
    for (let j = 0; j < 10; j = j + 2) {
      let pair = symbol.slice(j, j + 2);
      if (pair == "10") {
        arr2.push(".");
      } else if (pair == "11") {
        arr2.push("-");
      } else if (pair == "**") {
        arr2.push(pair);
      }
    }
    str = arr2.join("");
    for (let [prop, value] of Object.entries(MORSE_TABLE)) {
      if (prop === str) {
        res.push(value);
      }
    }
    if (str[0] === "*") {
      res.push(" ");
    }
  });
  return res.join("");
}

module.exports = {
  decode,
};
