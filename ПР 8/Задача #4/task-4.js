function giveJobToStudent(student, jobName) {
    student.job = jobName;
    var fullName = student.firstName + ' ' + student.lastName;
    alert('Поздравляем! У студента ' + fullName + ' появилась новая работа! Теперь он ' + jobName);
    return student;
}

// Пример использования
var student = {
    firstName: 'Иван',
    lastName: 'Иванов',
    age: 25,
    gender: 'мужской'
};

var newStudent = giveJobToStudent(student, 'программист');
console.log(newStudent);