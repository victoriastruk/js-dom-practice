"use strict";

// Регулярні вирази - шаблони, які використовуються для співставлення послідовності символів в рядку

// const regExp1 = new RegExp(шаблон, прапорці);
const regExp1 = new RegExp("qwerty", "i");
// const regExp2 = /шаблон/прапорці;
const regExp2 = /qwerty/i;
// прапор і - незалежність від регістру
// прапор g - по всьому рядку, незалежно від кількості воходження
console.log(
  'regExp2.test("ghjhgkhgqwertymnkjhk") :>> ',
  regExp2.test("ghjhgkhgqwertymnkjhk")
);

console.log(
  '"35463754qwerty6347".match(regExp2) :>> ',
  "35463754qwerty6347".match(regExp2)
);

// Межі
// ^ - початок рядка
// $ - кінець рядка
// \b - границя слова
// \В - не межа слова

// Перевірити, що qwerty є всім рядком
console.log('"qwerty".match(/^qwerty$/) :>> ', "qwerty".match(/^qwerty$/));

// Перевірити чи стоїть qwerty на початку рядка, ігноруючи регістр

// "qwerty" +
// "qwerty123" +
// "Qwerty32" +
// "77qwerty" -

console.log('"qwerty".match(/^qwerty/i) :>> ', "qwerty".match(/^qwerty/i));
console.log(
  '"qwerty123".match(/^qwerty/i) :>> ',
  "qwerty123".match(/^qwerty/i)
);
console.log('"Qwerty32".match(/^qwerty/i) :>> ', "Qwerty32".match(/^qwerty/i));
console.log('"77qwerty".match(/^qwerty/i) :>> ', "77qwerty".match(/^qwerty/i));

// Перевірити, чи dog є окремим словом
console.log('"dog".match(/\bdog\b/ig) :>> ', "dog".match(/\bdog\b/gi));
console.log('"12323dog".match(/\bdog\b/ig) :>> ', "1234dog".match(/\bdog\b/gi));
console.log('"dog123".match(/\bdog\b/ig) :>> ', "dog123".match(/\bdog\b/gi));
console.log(
  '"dog sdf dog".match(/\bdog\b/ig) :>> ',
  "dog sdf dog".match(/\bdog\b/gi)
);

// . - один будь-який символ
// Перевірити, чи пароль починається на qw і закінчується на ty, по середині має бути 2 символи

console.log('"qwerty".match(/^qw..ty$/) :>> ', "qwerty".match(/^qw..ty$/));

// Перевірити, що рядок містить 7 символів і починається на 111

console.log('"111hgjw".match(/^111....$/i)', "111hgjW".match(/^111....$/i));

//Квантифікатори - символи, які дозволять вказувати кількість

// {1,10} - від 1 до 10
// {8}
// + - {1,} від 1 до нескінченності
// * - {0,} скільки завгодно
// ? - {0,1} може бути, може не бути

console.log('"111hgjw".match(/^111....$/i)', "111hgjW".match(/^1{3}.{4}$/i));

// Перевірити чи відповідає рядок email 1-10@1-10
console.log("fff@fff :>> ", "fff@fff".match(/^.{1,10}@.{1,10}$/));
console.log("@hgjkjh :>> ", "@hgjkjh".match(/^.{1,10}@.{1,10}$/));
console.log("kjhlkjhl@ :>> ", "kjhlkjhl@".match(/^.{1,10}@.{1,10}$/));
console.log(
  "kjhlkjhl@sdfghjkl;ulytyghkjhyy :>> ",
  "kjhlkjhl@sdfghjkl;ulytyghkjhyy".match(/^.{1,10}@.{1,10}$/)
);

// Альтернативні символи / один з групи символів
// В рядку тільки цифри
//  [0123456789] = [0-9] = \d
// \D = ^\d
// [a-z]
// [A-Z]
// [a-zA-z]
// [a-zA-Z0-9_] = \w - символи слова
// ^ - заперечення
// \W = ^w
// \s - space
// \S
console.log(
  '"1234560".match(/[0123456789]+/ :>> ',
  "1234560".match(/[0123456789]+/)
);

console.log(
  '"1234d560".match(/[0123456789]+/ :>> ',
  "1234d560".match(/^[0123456789]+$/)
);

//Перевірити, що вказано номмер телефону у форматі (+380-2ц-3ц-4ц)

console.log("tel :>> ", "+380-98-803-2008".match(/^\+380-\d{2}-\d{3}-\d{4}$/));

// Перевірити на ім'я 2-20
console.log(
  '"Anna".match(/^[A-Z]{1}[a-z]{1,19}$/)',
  "Anna".match(/^[A-Z]{1}[a-z]{1,19}$/)
);
// Перевірити, що число відповідає вигляду 1111.55555 або з -
console.log(
  '"11111.55555".match(/^-?d*.d*$/) :>> ',
  "0.55555".match(/^-?\d+\.\d+$/)
);

// Альтернативні слова
// [123] = (1|2|3)
// (cat|dog)
console.log(
  '"A like cat".match(/\b(cat|dog)\b/) :>> ',
  "A like cat".match(/\b(cat|dog)\b/)
);

//Перевірка складного імені Аааа-Аааа
console.log(
  '"Anna-Maria"',
  "Anna-Maria".match(/^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/)
);

//Знайти цитати 
// ? переводить квантифікатор з жадного режиму в лінивий
console.log("I say 'yes', but think adn say 'no'".match(/'.*?'/g));

// Виокремити речення
// Fhjhgjhgkgk hjyghk khgkj. JFjhkhgkj jhgj kjhj.

console.log("Fhjhgjhgkgk hjyghk khgkj. JFjhkhgkj jhgj kjhj.".match(/[A-Z].*?\./g));

console.log('I bouught 10 apple by 1$'.match(/\d+(?=\$)/g))

// 8-16 A a 0 !@#$%^&*.

console.log('Qq1.qqqq'.match(/^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&.].*).{8,16}$/));