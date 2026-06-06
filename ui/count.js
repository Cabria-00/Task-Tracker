console.log("count.js is connected");

export default function countTask(array, key = "all", value) {
  if (key === "all") {
    return array.length;
  } else {
    let count = array.filter((item) => item[key] === value); //use bracket notation for dynamic key
    return count.length;
  }
}
