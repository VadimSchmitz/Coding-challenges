//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

findShort("bitcoin take over the world maybe who knows perhaps");
