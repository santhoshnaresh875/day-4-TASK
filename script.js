// Using arrow function

// a. Print odd numbers in an array

const oddNumbers = (numbers) => {
    for( let num of numbers) {
        if(num & 1)
            console.log(num);
    }
}
oddNumbers([1,2,3,4,5])

// b. Convert all the strings to title caps in a string array
 const titleCaps = (str) => {
    return str.toLowerCase().split(' ').map(element => {
        // return (element.charAt(0).toUpperCase() + element.slice(1)) or
        return element.replace(element[0], element[0].toUpperCase());
    }).join(' ');
 }
 console.log(titleCaps('guvi geeks'));

// c. sumof all number in an array

const sumOf = (num) => {
    return num.reduce((sum, num) => sum + num, 0);
}
console.log(sumOf([1,2,3,4,5]))

// d. Return all the prime numbers in an array
const primeNumbers = (numbers) => {
    let result = []
    const isPrime = (num) => { 
    for(let i = 2; i < num; i++) {
        if( num % i == 0)
            return false;
    }
    return true;
    }
    numbers.forEach(element => {
        if(isPrime(element))
            result.push(element)
    });
    return result
}
console.log(primeNumbers([4,5,6,7,3,33,11]));

// e. return all the palindromes in an array
const palindromes = (strings) => {
    let result = []
    const isPalindromes = (str) => {
        let revStr = str.split('').reverse().join('')
        if(str == revStr)
            return true
        return false
    }
    strings.forEach(element => { 
        if(isPalindromes(element))
            result.push(element)
    })
    return result
    
}
console.log(palindromes(['suriya', 'vijay', 'karthick', 'anu', 'vikram']));
;