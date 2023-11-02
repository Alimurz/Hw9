// Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в 
// котором ключ будет равен элементу массива, а значение (элемент * 100)
// input: [1, 2, 3, 4, 5]
// output: {1: 100, 2: 200, 3: 300 ...}

// const arr = [1,2,3,4,5]
// const out = arr.reduce((acc,b) => {
//     acc[b] = b*100
//     return acc
// },{});
// console.log(out);


// Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать. 
// Написать функцию которая создает из массива skills объект с рандомными значениями от 1 до 100, использовать reduce и Math.random()
// input: ['hook', 'blackhole']
// output: {'hook': 20, 'blackhole: 100'}

// const arr = ['drawing','swimming','running','something','else']
// const out = arr.reduce((acc,b) => {
//     acc[b] = Math.floor(Math.random() * 101)
//     return acc
// },{});
// console.log(out);


// Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
// input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
// output: { even: 100, odd: 100 } // 100 это для примера, сумма должна высчитываться.

// const arr = [3,4,5,10,11]
// const out = arr.reduce((acc,b) => {
//     if (b % 2 === 0){
//      acc.even += b
//     } else{
//      acc.odd += b
//     }
//     return acc
// },{even:0, odd:0,});
// console.log(out)



// Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' }, 
// { name: 'Cedric Diggory', house: 'Hufflepuff' }, { name: 'Tonks', house: 'Hufflepuff' }, 
// { name: 'Ronald Weasley', house: 'Gryfindor' }, { name: 'Hermione Granger', house: 'Gryfindor' }];
//  Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа. Сделайте эту задачу двуми способоами:
// C помощью filter и map
// C помощью reduce

// const movie =   [ { name: 'Harry Potter', house: 'Gryfindor' },
//  { name: 'Cedric Diggory', house: 'Hufflepuff' }, 
//  { name: 'Tonks', house: 'Hufflepuff' },
//   { name: 'Ronald Weasley', house: 'Gryfindor' },
//    { name: 'Hermione Granger', house: 'Gryfindor' }];
// const out = movie.reduce((acc,b) => {
//         if (b.house === 'Hufflepuff'){
//          acc.push(b.name)
//         } else{
//         return acc
//         }
//         return acc
//     },[]);
//     console.log(out)


// const movie = [
//   { name: 'Harry Potter', house: 'Gryfindor' },
//   { name: 'Cedric Diggory', house: 'Hufflepuff' },
//   { name: 'Tonks', house: 'Hufflepuff' },
//   { name: 'Ronald Weasley', house: 'Gryfindor' },
//   { name: 'Hermione Granger', house: 'Gryfindor' }
// ];
// const out = movie.filter(b => b.house === 'Hufflepuff').map(b => b.name);
// console.log(out);










// Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
// От большего к меньшему
// От меньшего к большему
// var numbers = [3, 4, 1, 2, 7];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);


// var numbers = [3, 4, 1, 2, 7];
// // numbers.sort(function (a, b) {
// //     return b - a;
// //   });
// console.log(numbers); 



// Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки: 
// От A-Z


// const some = ['aklal', 'wosja', 'skdu', 'bow', 'xsaoj']

// const sorted = some.sort()
// console.log(sorted)


// const some = ['aklal', 'wosja', 'skdu', 'bow', 'xsaoj']

// const sorted = some.sort((a, b) => {
//     if (b < a) {
//       return -1;
//     }
//     if (b > a) {
//       return 1;
//     }
//     return 0;
//   });
// console.log(sorted)