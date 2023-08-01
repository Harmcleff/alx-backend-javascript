export default function getListStudentIds(prop) {
  if (Array.isArray(prop)) {
    return prop.map((element) => element.id);
  }
  return [];
}
