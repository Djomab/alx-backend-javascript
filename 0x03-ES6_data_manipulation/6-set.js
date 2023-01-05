export default function setFromArray(array) {
  const myset = new Set();
  array.map(((x) => myset.add(x)));
  return myset;
}
