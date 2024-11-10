"use strict";
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.Java = exports.React = exports.cpp = void 0;
var cTeacher = {
    firstName: 'Jhon',
    lastName: "bernana",
    experienceTeachingC: 10
};
exports.cpp = new Subjects.Cpp(cTeacher);
exports.React = new Subjects.React(cTeacher);
exports.Java = new Subjects.Java(cTeacher);
console.log("c++");
exports.cpp.setTeacher = cTeacher;
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
console.log('Java');
exports.Java.setTeacher = cTeacher;
console.log(exports.Java.getRequirements());
console.log(exports.Java.getAvailableTeacher());
console.log('React');
exports.React.setTeacher = cTeacher;
console.log(exports.React.getRequirements());
console.log(exports.React.getAvailableTeacher());
