const areaRec=()=>{
    let l=parseFloat(document.querySelector("#length").value);
    let b=parseFloat(document.querySelector("#breadth").value); 
    let area=(l*b);
    document.querySelector("#ans").textContent=`The Area is = ${area}`;
}
const squareArea=()=>{
    let a=parseFloat(document.querySelector("#side").value);
    let area=a*a;
    document.querySelector("#ans").textContent=`The Area is = ${area}`;
}
const userInfo=()=>{
    let name=document.querySelector("#name").value;
    let roll=document.querySelector("#roll").value;
    let interest=document.querySelector("#interest").value;
    document.querySelector("#ans").textContent=`Hey my name is ${name}, my roll number is ${roll} and I love ${interest}`
}
const tempCalc=()=>{
    let c=parseInt(document.querySelector("#temp").value);
    let f=(c*(9/5)+32.2);
    let k=c + 273.15;  
    const h4= elementFromHtml;
    document.querySelector("#ans").appendChild(h4);
    // document.querySelector("#ans2").textContent=`The Temperature in Kelvin Degree = ${k}`;
}
const oddEven=()=>{
    let n=document.querySelector("#num").value;
    if(n%2==0){
        document.querySelector("#ans").textContent=`${n} is a Even Number`;
    }
    else{
        document.querySelector("#ans").textContent=`${n} is a Odd Number`;
    }
}
const areaCircle=()=>{
    let r=parseFloat(document.querySelector("#radius").value);
    const pi=3.14;
    let area= pi*r**2;
    document.querySelector("#ans").textContent=`Area of the Circle is ${area} cm2`;
}
const squareCheck=()=>{
    let a=parseFloat(document.querySelector("#length").value);
    let b=parseFloat(document.querySelector("#breadth").value);
    if(a===b){
        document.querySelector("#ans").textContent=`This is a Square`;
    }
    else{
        document.querySelector("#ans").textContent=`This is not a Square`;
    }
}
const largeNum=()=>{
    let num1=parseInt(document.querySelector("#number1").value);
    let num2=parseInt(document.querySelector("#number2").value);
    let num3=parseInt(document.querySelector("#number3").value);
    let largest;
    if(num1 >= num2 && num1 >= num3) {
        largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }
    document.querySelector("#ans").textContent=`The largest number is ${largest}`
}
const netAmount=()=>{
    let sal=parseFloat(document.querySelector("#salary").value);
    let year=parseFloat(document.querySelector("#year").value);
    if(year>5){
        sal+=sal*0.05;
        document.querySelector("#ans").textContent=`Your net amount is = ${sal} [With 5% Bonus]`;
    }
    else{
        document.querySelector("#ans").textContent=`Your net amount is = ${sal} [No Bonus]`;       
    }
}
const leapYear=()=>{
    let y=document.querySelector("#year").value;
    if((y%100==0)&&(y%400==0)){
        document.querySelector("#ans").textContent=`The Year ${y} is a Leap year`;
    }
    else if ((y%4==0)&&(y%100!==0)){
    document.querySelector("#ans").textContent=`The Year ${y} is a Leap year`;
    }
    else{
    document.querySelector("#ans").textContent=`The Year ${y} is not a Leap year`;
    }
}
const gradeCal=()=>{
    let num=parseFloat(document.querySelector("#marks").value);
    if(num>80){
        document.querySelector("#ans").textContent=`Grade of the student is='A'`;
    }
    else if(num>60 && num<=80){
        document.querySelector("#ans").textContent=`Grade of the student is='B'`;
    }
    else if(num>50 && num<=60){
        document.querySelector("#ans").textContent=`Grade of the student is='C'`;
    }
    else if(num>45 && num<=50){
        document.querySelector("#ans").textContent=`Grade of the student is='D'`;
    }
    else if(num>=25 && num<=45){
        document.querySelector("#ans").textContent=`Grade of the student is='E'`;
    }
    else{
        document.querySelector("#ans").textContent=`Grade of the student is='F'`;
    }

}
const totalCost=()=>{
    q=parseFloat(document.querySelector("#quantity").value);
    let cost=100*q;
    if(q>1000){
        cost-=cost*0.1;
    document.querySelector("#ans").textContent=`Your Total Cost is = ${cost} [You got a 10% discount on your purchase]`;
    }
    else{
        document.querySelector("#ans").textContent=`Your Total Cost is = ${cost}`;
    }
}
const ageCompare=()=>{
    let p1=parseInt(document.querySelector("#age1").value);
    let p2=parseInt(document.querySelector("#age2").value);
    let p3=parseInt(document.querySelector("#age3").value);
    let oldest , youngest;
    if(p1==p2 || p2==p3 || p3==p1){
        document.querySelector("#ans").textContent=` No Result!! You have entered at least two values equal`;
    }
    else{        
        if(p1>p2 && p1>p3) {
            oldest = "First Person";
            if(p2>p3){
                youngest="Third Person";
            }
            else{
                youngest="Second person";
            }
        }
        else if (p2>p1 && p2>p3) {
            oldest = "Second person";
            if(p1>p3){
                youngest="Third Person";
            }
            else{
                youngest="First Person"
            }
        }
        else if (p3>p1 && p3>p2){
            oldest = "Third Person";
            if(p1>p2){
                youngest="Second person";
            }
            else{
                youngest="First Person";
            }
        }
        document.querySelector("#ans").textContent=`${oldest} is the Oldest  & ${youngest} is The Youngest `;
    }
    
}
const attendance=()=>{
    let cT=document.querySelector("#held").value;
    let cP=document.querySelector("#attended").value;
    let attendanceRate=parseInt(cT*0.75);
    if(cP<attendanceRate){
        document.querySelector("#ans").textContent=`The student is not allowed to sit in exam.`
    }
    else{
        document.querySelector("#ans").textContent=`The student is allowed to sit in exam.`
    }
}
