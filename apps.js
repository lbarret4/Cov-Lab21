
let num1 = messageCharLength();
let words=['pathos','forbearance','andragogy','dreamboat'];
setTimeout(multiplyByFour,2000);

getWords(words);

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