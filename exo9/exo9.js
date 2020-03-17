
var z=random_int(0,5);
exo9(z);

function exo9(x){
    var z;
    switch (x) {
        case 1:
            console.log("AAAA");
        break;
        case 2:
            console.log("BBBB");
        break;
        case 3:
            console.log("CCCC");
        case 4:
            console.log("DDDD");
        break;
        default:
            console.log("je suis une peruche");
    }
}   

function random_int(min, max) {
    return Math.floor(min + (Math.random() * Math.floor(max-min)));
}