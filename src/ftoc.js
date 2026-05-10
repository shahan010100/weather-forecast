export function ftoc(temp){
    let temp=temp;
    let fah=Number(temp);
    let cel=(5/9)*(fah-32);
    return cel;    
}
export function ctof(temp){
    let temp=temp;
    let cel=Number(temp);
    let fah=(cel*(9/5))+32;
    return fah;
}