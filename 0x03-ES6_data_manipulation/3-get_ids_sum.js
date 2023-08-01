export default function getStudentIdsSum(list) {
  return list.reduce((accumulator, obj) => accumulator + obj.id, 0);
}
