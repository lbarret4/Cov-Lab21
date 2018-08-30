
//Initialize global variables 
let num1 = messageCharLength();
let words=['pathos','forbearance','andragogy','dreamboat'];
let isBoolean=true;

//Async:Now or LLater 
setTimeout(multiplyByFour,2000);

//Callbacks 
getWords(words);
countdown(20,done);

//Promises 
orderFood();
isBoolean = false;
orderFood();

//Chaining Promises 
doNumberOne()
        .then((result) => {
            return result*2;
        }).then((result) => {
            return result*4;
    }).then((result) => {
            return console.log(result*6);
    }) ;



function messageCharLength(){
    let message = "This is a message";
    console.log(message);
    return message.length;
}

function multiplyByFour(){
    console.log(num1*4);
}

function getWords(words){
    words.forEach((word,index) => {
        let time = index == 0 ? 0: (words.length-index)*1000;
        setTimeout((words) =>{
            console.log(words);
        },time);
    });
}

function countdown(num,callback){
    for(let i = 1;i <= num; i++){
        if(i != 1){
            setTimeout(()=>console.log(i),1000)
        } else {
            callback();
        }        
    }
}

function done(){
    console.log('done');
}

function orderingChickenSandwich (){
   return  new Promise((resolve,reject) => {
    if(isBoolean == true){
        let food = {
            sandwich:'chicken',
            veggies:'lettuce',
        };
        resolve(food);
    } else {
        let er = new Error('Not Chicken Sandwitch');
        reject(er);
    }
});

};

function orderFood(){
    orderingChickenSandwich()
    .then((result) => {
return console.log(result);
}).catch((er) => {
    return console.log(er);
});
    
}


function doNumberOne(){
    return new Promise(resolve=> setTimeout(resolve(1),2000));
}

