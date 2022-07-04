const lastname = prompt('Ваша фамилия?');
const firstname = prompt('Ваше имя?');
const patronymic = prompt('Ваше отчество?');
const age = Number(prompt('Ваш возраст?'));
let gender = confirm('Ваш пол - мужской?');

if (gender) {
    gender = 'мужской';
}
else {
    gender = 'женский';
}

let pension;

if (age >= 60) {
    pension = 'да';
}
else {
    pension = 'нет';
}

alert(
    'Ваш ФИО:' + ' ' + lastname + ' ' + firstname + ' ' + patronymic + '\n' +
    'Ваш возраст в годах:' + ' ' + age + '\n' +
    'Ваш возраст в днях:' + ' ' + (age * 365) + '\n' +
    'Через 5 лет вам будет:' + ' ' + (age + 5) + '\n' +
    'Ваш пол:' + ' ' + gender + '\n' +
    'Вы на пенсии:' + ' ' + pension + '\n'
);

