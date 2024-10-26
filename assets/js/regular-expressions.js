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
