// anonymous function and Immedietly invoked function expressions

// a. Print odd numbers in an array
//IIFE - function
(function oddNumber (numbers) {
    for(let num of numbers) {
        if(num % 2 == 1) //without using modulus alternate AND operator (num & 1) returns the odd numbers
            console.log(num);
    }
})([1,2,3,4,5]);

// b. Convert all the strings to title caps in a string array
//ananymous function
const titleCaps = function (string) {
    string = string.toLowerCase().split(" ")
    for(let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
}
console.log(titleCaps(`guvi geeks`));

// c. sumof all number in an array
//IIFE - functions
(  function sumOf (numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    console.log(sum);
}([1,2,3,4,5]))

// d. Return all the prime numbers in an array
//ananymous function
const primeNumbers = function (index) {
    const isPrime = function (number) {
        if(number === 1 || number === 0) {
            return false;
        }else { 
        for(let i = 2 ; i < number; i++) {
            if(number % i == 0 )
                return false;
        }
        return true
        }
    }
    let result = []
    for(let value of index) {
        // console.log(value);
        if(isPrime(value)) {
            result.push(value)
        }
    }
    return result;
}
console.log(primeNumbers([1,2,3,4,5,6,7,0]));

// e. return all the palindromes in an array
//IIFE - functions
(function palindromes (index) {
    const isPalindromes = function (str) {
        // let len = str.length;
        // for(let i = 0; i < len/2; i++) {
        //     if(str[i] !== str[len - 1 - i]) 
        //         return false
        // }
        // return true
        
        // or 
        let revStr = str.split('').reverse().join('');
        if(str == revStr)
            return true;
        return false
    }
    
    let result = [];
    for(let string of index) {
        if(isPalindromes(string))
            result.push(string)
    }
    return result
})(['suriya', 'vijay', 'karthick', 'anu', 'vikram']);

// f. return median of two sorted array of same size
//ananymous function
const median = function (array1, array2, n) {
    let i = 0, j = 0, median1 = -1, median2 = -1;
    for(let k = 0; k <= n; k++) {
        if(i == n) {
            median1 = median2;
            median2 = array2[0];
            break;
        }
        else if (j == n) {
            median1 = median2;
            median2 = array1[0];
            break;
        }
        if(array1[i] <= array2[j]) {
            median1 = median2;
            median2 = array1[i];
            i++;
        }
        else {
            median1 = median2;
            median2 = array2[j];
            j++;
        }
    }
    return (median1 + median2) / 2
}
const checkSize = function(arr1,arr2) { 
if(arr1.length == arr2.length)
    return median(arr1,arr2,arr1.length)
else
    return 'This methods suitable for same size of array'
}
console.log(checkSize([1,2,3],[3,4,5]))

// g. Remove duplicates from an array
//ananymous function
const duplicates = function (strings) {
    let original = []
    for(let str of strings ) {
        if(!original.includes(str))
            original.push(str)
        //     continue;
        // else
    }
    return original
}
console.log(duplicates(['naresh','medium','guvi','apple','santhosh','medium','guvi','school']));
// or use this method let orginal = [...new strings(array)]

// h. Rotate an array by k times
//ananymous function
const rotateArray = function (elements, k) {
    for(let i = 0; i < k; i++) {
        elements.unshift(elements.pop())
    }
    return elements
}
console.log(rotateArray([1, 2, 3, 4, 5],3));