function solution(student) {
    let a = (student.math + student.physics + student.history)/3
    a = a.toFixed(2)
    console.log('Hello, ' + student.name + '! Your average GPA is: ' + a)
}


module.exports = solution