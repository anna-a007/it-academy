const lastname = prompt('Ваша фамилия?');
const firstname = prompt('Ваше имя?');
const patronymic = prompt('Ваше отчество?');
const age = Number(prompt('Ваш возраст?'));
const gender = confirm('Ваш пол-мужской?');


if (age == 20 ) {
 
    alert('Ваш ФИО:'+ ' ' + lastname + firstname + patronymic +'\n' + 
          'Ваш возраст в годах:'+ ' ' + age + '\n' + 
          'Ваш возраст в днях:' + ' ' + (age * 365) + '\n' + 
          'Через 5 лет вам будет:' + ' ' + (age + 5) + '\n' +
          'Ваш пол:' + ' мужской' + '\n' +
          'Вы на пенсии:' + ' ' + 'нет'
        );
}
