export default function getStudentIdsSum(list) {
  return list.reduce((acc, val) => acc + val.id, 0);
}
