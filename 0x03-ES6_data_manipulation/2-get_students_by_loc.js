export default function getStudentsByLocation(list, arg) {
  return list.filter((obj) => obj.location === arg);
}
