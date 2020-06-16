
var database;
var form;
var emailArr;
var voteArr;
var emailRef;
var voteRef;
var entered = false;
var value = false;
var x , y , z;
var votelengthref;
var voteLength;

function setup(){
    createCanvas(displayWidth-50,displayHeight-200);
    database = firebase.database();
    form = new Form();
    emailRef = database.ref('email');
    voteRef = database.ref('vote');
    votelengthref = database.ref('voteLength');
    //gamestate = database.ref('');
    readEmail();
    readVote();
    readVoteLength();
    form.display();
}

function draw(){
    background("skyBlue");
    //ballPosition.on('value' , readPosition , showError); 
    if(emailArr !== undefined && voteArr !== undefined && entered === true){
        if(keyCode === 32){
            form.hide();
        }
    }
    if(value === true){
        readVote();
        x = 0;
        y = 0;
         z = 0;
         var i;
        for(i = 0;i<voteLength;i++){
            if(voteArr[i][0] === 1){
                x++;
            }
            console.log(voteArr[i][0]);
            if(voteArr[i][1] === 1){
                y++;
            }
            console.log(voteArr[i][1]);
            if(voteArr[i][2] === 1){
                z++;
            }
            console.log(voteArr[i][2]);
            
        }
        
        textSize(30);
        text("cafateria : " + x + " kabaddi : " + y + " robotics : " + z , 100 , 100);
    }
    
    //console.log(emailArr);
    
    
    
}

function writeEmail(){
    database.ref('/').update({'email':emailArr});
}
 
function readEmail(){
    
    emailRef.on('value' , (data)=>{
        emailArr = data.val();
    } , function showError(){
        console.log("Error");
    });
    

}
function writeVote(){
    database.ref('/').update({'vote':voteArr});
}
function readVote(){
    voteRef.on('value' , (data)=>{
        voteArr = data.val();
    } , function showError(){
        console.log("Error");
    });
}
function readVoteLength(){
    votelengthref.on('value' , (data)=>{
        voteLength = data.val();

    } , function showError(){
        console.log("Error");
    });
}
function writeVotelength(){
    database.ref('/').update({'voteLength' : voteLength});
}