
for(var i=0;i<10;i++){
    console.log(random_int(0,100));
}


function random_int(min, max) {
    return Math.floor(min + (Math.random() * Math.floor(max-min)));
}

