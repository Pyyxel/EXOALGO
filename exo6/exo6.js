var res=random_int(5,10);
console.log("random = "+res);


function random_int(min, max) {
    return Math.floor(min + (Math.random() * Math.floor(max-min)));
}