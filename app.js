let firstName=prompt("Ener your first name?");
let lastName=prompt("Enter your last name?");


if(lastName=="jihan"){
    console.log(`
    my name is ${firstName} ${lastName}, jihan vai ki khbr
    `);
}else{
console.log(`my name is ${firstName} ${lastName}`);
}

let age=prompt("Enter your age");
 if(age>=18){
console.log("you are most welcome");
 }else{
console.log("Sorry, you are not allow");
 }

let age1=prompt("Enter your age");
if(age1>=18){
console.log(`
apu apnr biyer boyos hoyeche ,so nischinte biye koren`);
}else{
console.log(`
sabdan apu ,apnr biyer boyos hoii nai ,doya kre wait kren ${18-age1} years`);
}

let marks=prompt("Enter your marks");

if(marks>=0 && marks <=32){
    console.log("you are failed");
}else if(marks>=33 && marks<40){
    console.log("apne D peyechen");
}else if(marks>=40 && marks<50){
    console.log("apne C peyechen");
}else if(marks>=50 && marks<60){
    console.log("apne B peyechen");
}else if(marks>=60 && marks<70){
    console.log("apne A- peyechen");
}else if(marks>=71 && marks<80){
    console.log("apne A peyechen");
}else if(marks>=80 && marks<100){
    console.log("apne A+ peyechen");
}else if(marks==100){
    console.log("apne purai 100 te 100 peyechen");
}else{
    console.log("apne ato number kivabe pelan");
}

let age2=10;
switch(age2){
    case 5:
    console.log("apnr age 5");
    break;
    case 10:
    console.log("apnr age 10");
    break;
    case 15:
    console.log("apnr age 15");
    break;
    default:
    console.log("apnr age 0");
}
