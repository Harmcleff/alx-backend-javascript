export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let value of array) {
    value += appendString;
    newArray.push(value);
  }

  return newArray;
}
