const student = [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Mannaaaaaa"},
    {id: 41, name: "Moyouri"},
    {id: 71, name: "DeepJol"},
]

const names = [];
for(let i = 0; i < student.length; i++){
    const ele = student[i];
    const name = ele.name;
    names.push(name);
}
console.log(names);

const names2 = student.map(s => s.name);
const ids = student.map(s => s.id);
console.log(ids);

const bigger = student.filter(s => s.id > 40);
console.log(bigger);


const bigger1 = student.find(s => s.id > 40);
console.log(bigger1);