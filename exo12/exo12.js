var table=[];
var res=0;
for (var i=0;i<10;i++){
    table[i]=random_int(0,100);
    console.log("valeur : "+i+" "+table[i]);
    res=res+table[i];
}

console.log(res);



function random_int(min, max) {
    return Math.floor(min + (Math.random() * Math.floor(max-min)));
}