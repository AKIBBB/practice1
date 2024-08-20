function monthlySaving(array,num) {
    var sum = 0;
    var par = 0;
    if(Array.isArray(array)==false){
        return "invaliad input";
    }
    else{
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= 3000) 
        {
            par = (20 * array[index]) / 100;
            sum += par;
        } 
        else 
        {
            sum += array[index];
        }
    }
    var x=sum-num;
    if (x >= 0) {
        return x;
    } else {
        return "earn more";
    }
}
}

var arr = [1000, 2000, 2500];
var num=5000;
var result = monthlySaving(num,arr);
console.log(result);
