// Вам дан объект student { name: "Yernar", math: 4.00, physics: 3.54, history: 1.99} c его GPA по каждому предмету.
// Выведите сообщение о его среднем GPA по всем предметам
// В этом университете преподают только Математику, Физику и  Историю.
// Ответ должен быть округлен до двух цифер после запятой.

//Input с описания:
//Output: "Hello, Yernar! Your average GPA is: 3.17"

function solution(student) {
    // Тут пишите решение
    let gpa = (student.math + student.physics + student.history) / 3;
    console.log('Hello, ' + student.name +'! Your average GPA is: ' + gpa.toFixed(2));
}