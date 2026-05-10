export function ftoc(temp){
    
    let fah=Number(temp);
    let cel=(5/9)*(fah-32);
    return cel.toFixed(2);    
}
export function ctof(temp){
    
    let cel=Number(temp);
    let fah=(cel*(9/5))+32;
    return fah.toFixed(2);
}