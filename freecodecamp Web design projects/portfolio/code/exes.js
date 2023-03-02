// codechef problem of pass or fail 
var N , x , t, p ; 
t=prompt("number of times");
while(t){
N= parseInt(prompt('enter the number of questions'));
x= prompt('enter the number of questions passed');
p= prompt("enter required marks to pass");
// calculate the number total points gotten 
t = (x*3)+((N-x)*(-1));
if(t>p){
    console.log("passed");
}
else{
    console.log("failed");

}
t--;
}