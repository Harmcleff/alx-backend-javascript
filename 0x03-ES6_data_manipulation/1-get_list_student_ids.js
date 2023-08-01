export default function getListStudentIds(prop) {
    if (typeof prop !== "Array") {
        return [];
    }
    
    const array = prop.map((element) => ([element.id]))
    return array;
}