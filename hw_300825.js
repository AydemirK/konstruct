// Проверка регистра
// Создайте переменную word = "JavaScript".
// Если слово написано полностью в верхнем регистре, выведите "Слово написано большими буквами".
// Иначе → "Слово написано не полностью большими буквами".

const word = 'JavaScript'

if (word === word.toUpperCase()) {
	console.log('Слово написано большими буквами')
} else {
	console.log('Слово написано не полностью большими буквами')
}

// Проверка приветствия
// Создайте строку text = "Привет, как дела?".
// Если строка начинается с "Привет", выведите "Сообщение начинается с приветствия".
// Иначе → "Нет приветствия".

const text = 'Привет, как дела?'
const includesText = text.startsWith('Привет')

if (includesText) {
	console.log('Сообщение начинается с приветствия')
} else {
	console.log('Нет приветствия')
}

// Поиск слова в предложении
// Создайте строку sentence = "Я учу JavaScript и люблю JavaScript".
// Если в строке есть "JavaScript", замените все вхождения на "JS" и выведите результат.
// Иначе → "В предложении нет JavaScript".

const sentence = 'Я учу JavaScript и люблю JavaScript'

if (sentence.includes('JavaScript')) {
	const replaceSentence = sentence.replaceAll('JavaScript', 'JS')
	console.log(replaceSentence)
} else {
	console.log('В предложении нет JavaScript')
}

// Проверка длины пароля
// Создайте переменную password = " qwerty123 ".
// Уберите пробелы по бокам.
// Если длина пароля меньше 8 → "Пароль слишком короткий".
// Иначе → "Пароль подходит".

const password = ' qwerty123 '
const passwordTrim = password.trim()

if (passwordTrim.length < 8) {
	console.log('Пароль слишком короткий')
} else {
	console.log('Пароль подходит')
}
