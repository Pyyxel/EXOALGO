var rand=random_int(1,100);
console.log(rand);

if(rand<50){
    console.log("je suis nul");
}else{
    console.log("je suis bon");
}


function random_int(min, max) {
    return Math.floor(min + (Math.random() * Math.floor(max-min)));
}