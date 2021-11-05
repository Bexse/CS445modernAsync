
const isPrime = async (num:number) => new Promise (function(resolve, reject){
setTimeout (function () {
     for (let i = 2, s = Math.sqrt(num); i <=s; i++) {
        if (num % i === 0) reject ({Prime:false});
        resolve({Prime: true});
             }
}, 500);

});


const isPrimeAsync = async (num)=> {
        let response = await isPrime (num);
        console.log(response);
    }

isPrimeAsync(num) {
throw new Error("Function not implemented.");
}

 async function duplicate (arr: number[]) {
     if (arr.length == 0 || arr ==null) {
        throw new Error ("Array is not found1")
            }
    else {
        let filtered = arr.filter((value, index)=> arr.indexOf(value) === index);
          return filtered;
        }
 }

async function duplicateAsync(arra: number[]) {
    let response = await duplicate(arra);
    console.log(response);
}

duplicateAsync([4, 1, 5, 7, 2, 3, 6, 6, 5, 2]);
duplicateAsync([]).catch ((error) => console.log (error.message));

//create an asynchronous solution 

const duplicatingAsync = (arr:number[]) => {
    return new Promise ((resolve, reject) => {
        if (arr.length == 0 || arr === null){
            reject (new Error ("array is not found"));
        }
        else {
            let filtered:number[] = arr.filter ((value, index) => arr.indexOf(value) === index);
        resolve (filtered);
        }
    });
};

duplicatingAsync([]).catch ((es)=> console.log(es) );
