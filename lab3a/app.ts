/*
 * app.ts
 */

let calcAverage = (a:number[]) =>{
    let  sum:number = 0; ; 
    for (let i:number = 0; i < a.length; i++){
        sum+= a[i];
    }
    return (` The Average of [${a}] is ${(sum/a.length).toFixed(2)}`);
}
let a:number[] = [17, 9, 4, 82, 15, 36]; 
let b:number[] = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];

let result = calcAverage(a);
//let result = calcAverages(b);





