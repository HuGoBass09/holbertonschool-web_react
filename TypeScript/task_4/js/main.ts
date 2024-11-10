/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

const cTeacher = {
    firstName: 'Jhon',
    lastName: "bernan",
    experienceTeachingC: 10
}
export const cpp = new Subjects.Cpp(cTeacher);
export const React = new Subjects.React(cTeacher);
export const Java = new Subjects.Java(cTeacher);


console.log("c++")
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())


console.log('Java');
Java.setTeacher = cTeacher;
console.log(Java.getRequirements());
console.log(Java.getAvailableTeacher());

console.log('React');
React.setTeacher = cTeacher;
console.log(React.getRequirements());
console.log(React.getAvailableTeacher());
