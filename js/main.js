// Функция №1
// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const creatingInteger = (minNumber, maxNumber) => {
  const randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
  return Math.floor(randomNumber);
};

console.log(creatingInteger(5, 10));

// Функция №2
// Функция для проверки максимальной длины строки.

const lengthСheck = (string, maxLength) => string.length <= maxLength;

console.log(lengthСheck('Lorem lorem lorem', 140));
