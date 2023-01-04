export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((el) => el.id);
  }
  return [];
}
