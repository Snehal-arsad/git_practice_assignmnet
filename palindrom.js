let str="Snehal";
let n=6;
let bag="";
for(let i=n-1;i>=0;i--){
    bag = bag+str[i];
}
if(str==bag)
{
    console.log("Yes");
}
else{
    console.log("No");
}