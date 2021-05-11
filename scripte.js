function run(min,max) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min);
    return num;
}

let minInt = +prompt('Введите минимальное число');
let maxInt = +prompt('Введите максимальное число');

for (let i = 0; i < 10; i++) {
 
    let num1 = run(minInt, maxInt);
    let num2 = run(minInt, maxInt);
    let pr = +prompt(num1 + '+' + num2);
    let answer = (num1 + num2) == pr ? 'Вааяя🔥' : 'Брат у тебя тут ошибка';
    alert(num1 + '+' + num2 + ' = ' + (num1 + num2) + ' ваш ответ ' + pr + '->' + answer)

    
}