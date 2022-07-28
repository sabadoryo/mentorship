// Закончена игра в валоранте или нет?
// Вам дан массив из итогов раундов ранговый игры в данном виде [A,B,A,A,...], ваша задача выяснить закончена игра или нет?
// A - победа команды А
// B - победа команды B

// Example Input: [A,B,A,A,A,A,A,A,A,A,A,A,A,A]
// Output: true , потому что команда A уже выиграла 13 раундов в итоге счет 13-1 в пользу команды А, игра окончена!

// Example Input: [A,B]
// Output: false, игра еще идет прошло всего 2 раунда

function solution(rounds) {
  // тут пишите решение
  let AWins = 0;
  let BWins = 0;

  if (rounds.length < 13) {
      console.log(false);
      return;
  }
  for (let i = 0; i < rounds.length; i++) {
      if (rounds[i] === 'A') {
          AWins++;
      } else if (rounds[i] === 'B') {
          BWins++;
      }
      if ((AWins === 13 && BWins < 12) || (BWins === 13 && AWins < 12)) {
          console.log(true);
          return;
      }
  }
  if ((AWins > 11 && BWins > 11) && (AWins === BWins)) {
      console.log(false);
      return;
  }

  if ((AWins > 11 && BWins > 11) && (AWins === BWins + 2 || AWins + 2 === BWins)) {
      console.log(true);
      return;
  }
  console.log(false);
}

module.exports = solution
































// Hint: А вы не забыли про овертайм? :)