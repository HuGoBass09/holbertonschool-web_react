interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}


class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}
class Teacher implements TeacherInterface {
  workTeacherTasks(): string { return "Getting to work" }
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

}


export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof (salary) === "number" && salary < 500) return new (Teacher)
  return new (Director)
}

function isDirector(employee: Teacher | Director): employee is Director {
  if (employee instanceof Director) {
    return true;
  }
  return false;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) { return employee.workDirectorTasks() }
  return employee.workTeacherTasks()
}

type Subjects  = "Math" | "History";
 function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") { return "Teaching Math" }
  else if (todayClass === "History") { return "Teaching History" }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));