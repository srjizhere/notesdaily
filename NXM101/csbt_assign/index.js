var num = 1234321;
num=code(num);

console.log(palidrome(num));

function palidrome(num){
    let i = 0;
    let j = num.length-1;
    while(i<num.length-1 && j>-1){

        if(num[i]!=num[j]){
            return false;
        }
        i++;
        j--;

    }

    return true;



}







function code(num){
    num+="";
    let str = [];
    let j=0;
    for(let i=num.length-1;i>-1;i--){
        str[j]=num[i]
        j++;
    }
   
    return (str.join(""))

}