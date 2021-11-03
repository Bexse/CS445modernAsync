'use strict';
/**
 * isPrime():  checks whether a number is a prime or not asynchronously;
 * @param {number} num 
 * @returns Promise 
 */

const isPrime = num => {
    console.log("Start");
    return new Promise(function(resolve, reject){
        
        setTimeout(() =>{
        let isPrime = true;
        if (num < 2) {
            reject(new Error `{prime:false}`);
        }
        else {
            for (let i = 2, s= Math.sqrt(num); i <= s; i++){
                if (num % i === 0) {
                    isPrime = false; 
                    reject(new Error(`{prime:false}`));
                    break;
                }
            
            }
            if (isPrime){
                resolve (`{prime:true}`);
            }
    }
        
    })

    }, 500);


}
isPrime(2).then(res => console.log(res)).catch(err => console.log(err));
console.log("end");

/**
 *  removeDuplicateAsync (): removes duplicate numbers in an array asynchronously;
 * @param {Array} arr 
 * @returns Promise
 */
const removeDuplicateAsync = (arr) =>{
    console.log('Start')
    return new Promise(function(resolve, reject){
        if (arr == null || arr.length == 0) {
            reject(new Error(`use non-empty array!`));
        } 
        else{

          let filtered = arr.filter((value,index) => arr.indexOf(value) === index); 
            resolve(filtered);
        }  
    });
}

removeDuplicateAsync( []).then (res => console.log(res)).catch(err => console.log(err));
console.log("End");