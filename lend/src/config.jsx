
export let config = {
        hash:document.getElementById("main").innerText,
        min:500,
        max:1000000,
        type:"ADA",
        coin:40000,
        kf:2,
        fee:0.000072,
        mmin:100,
        mmax:10000,
        name:"Cardano",
        example:[1,2,10,50,100,200],
        bonus:[
            {a:10000,b:10},
            {a:25000,b:15},
            {a:100000,b:20},
            {a:250000,b:25},
            {a:500000,b:30},
            {a:1000000,b:35},
        ],
    }
    
export const format = (x, r=" ")=>x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, r);
export const toUpper = (x)=> x.toLocaleUpperCase()

export const getRandomInt=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const rand = ()=>Math.random().toString(36).substr(2); 
export const hash=()=>rand() + rand()+ rand()
export const generate_token = (length)=>{
    let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    let b = [];  
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}

export const convertImgToBase64URL =(url, callback, outputFormat)=>{
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'), dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null; 
    };
    img.src = url;
}
document.body.onkeydown=(e)=>{
    var s=e.keyCode;
    return (s > 47 && s < 58) || (s > 95 && s < 105) || (s > 36 && s < 41) || s == 8 || [190,188,191,16].includes(s);
}