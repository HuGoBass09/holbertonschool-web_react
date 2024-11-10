export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [propName: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
    displayName(): string;
    workOnHomework(): string;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};


export class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayName(): string {
        return this.firstName;
    }

    workOnHomework(): string {
        return "Currently working";
    }
}


console.log(director1);
console.log(teacher3);
console.log(printTeacher("John", "Doe"));

const student = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());