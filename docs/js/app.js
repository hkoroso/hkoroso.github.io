(startClock())

function startClock() {
    setInterval(ticking, 1000);
}

function ticking() {
    let date = new Date();
    document.getElementById("year").innerHTML = date.getFullYear();
    document.getElementById("month").innerHTML = date.getMonth() + 1;
    document.getElementById("date").innerHTML = date.getDate();
    document.getElementById("hour").innerHTML = date.getHours();
    document.getElementById("minute").innerHTML = date.getMinutes();
    document.getElementById("seconds").innerHTML = date.getSeconds();
}
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
function maxOfThree(x, y, z) {
    let max = x > y ? x : y;
    max = max > z ? max : z;
    return max;
}
function isVowel(letter) {
    let vowels = 'aeiou';
    return vowels.indexOf(letter.toLowerCase()) > -1;
}
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function multiplies(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
function findLongestWord(words) {
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (maxLength < words[i].length) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}
function computeSumOfSquares(numbers, ) {
    return numbers.reduce((x, y) => x + Math.pow(y, 2));
}
function printOddNumbersOnly(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}
function computeSumOfSquaresOfEvensOnly(numbers) {
    return numbers
        .filter(num => num % 2 === 0)
        .reduce((x, y) => x + Math.pow(y, 2));
}
function sumWithReduce(numbers) {
    return numbers.reduce((x, y) => x + y);
}
function multipliesWithReduce(numbers) {
    return numbers.reduce((x, y) => x * y);
}
function findSecondBiggest(numbers) {
    let first = second = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i];
        } else if (numbers[i] !== first && numbers[i] > second) {
            second = numbers[i];
        }
    }
    return second;
}
function printFibo(n, a, b) {
    let x = a, y = b, count = n, temp, fibo = [];
    while (count > 0) {
        temp = x;
        x = x + y;
        y = temp;
        fibo.push(y);
        count--;
    }
    console.log(fibo)
}
 
    console.log('1. max(1,3)', 3, max(1, 3))
    console.log('2. maxOfThree(4,38, 55)', 55, maxOfThree(4, 38, 55))
    console.log('3. isVowel("e")', 'true', isVowel('e'))
    console.log('4.1. sum([3,4,5,6,8,95,2])', 123, sum([3, 4, 5, 6, 8, 95, 2]))
    console.log('4.2. multiplies([3,4,5,6,8,95,2])', 547200, multiplies([3, 4, 5, 6, 8, 95, 2]))
    console.log('5. reverse("neit hnahk")', "khanh tien", reverse("neit hnahk"))
    console.log('6. findLongestWord(["gano", "hajikj", "John Martin", "jonh joe goefee"])', 17, findLongestWord(["Gano", "Haji", "Koproso", "Gano Haji Koroso"]))
    console.log('7. filterLongWords(["karna", "abdii", "tekeste", "John", "Thomas"], 4)', ["Karna", "minisha", "tekeste"], filterLongWords(["karna", "minisha", "Nguyen", "tekeste"], 4))
    console.log('8. computeSumOfSquares([4,5,6])', 65, computeSumOfSquares([4, 5, 6]))
    console.log('9. printOddNumbersOnly([12,33,24,41])', [33, 41], printOddNumbersOnly([12, 33, 24, 41]))
    console.log('10. computeSumOfSquaresOfEvensOnly([3,4,6,7,8,9])', 104, computeSumOfSquaresOfEvensOnly([3, 4, 6, 7, 8, 9]))
    console.log('11.1. sumWithReduce([3, 4, 5, 6, 8, 95, 2])', 123, sumWithReduce([3, 4, 5, 6, 8, 95, 2]))
    console.log('11.2. multipliesWithReduce([3, 4, 5, 6, 8, 95, 2])', 547200, multipliesWithReduce([3, 4, 5, 6, 8, 95, 2]))
    console.log('12. findSecondBiggest([19,9,11,0,12])', 12, findSecondBiggest([19, 9, 11, 0, 12]))
    console.log('13. printFibo(10,0,1)', [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], ''); printFibo(10, 0, 1);

