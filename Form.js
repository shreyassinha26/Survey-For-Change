class Form{
    
    constructor(){
        this.title;
        this.greeting;
        this.info;
        //this.reset = createButton("Reset");
    }
    display(){
        this.title = createElement("h1");
        this.title.html("Survey");
        this.title.position(displayWidth/2-100 , 10);

        var enterEmail = createElement("h3");
        enterEmail.html("Email ");
        enterEmail.position(displayWidth/2-80 , displayHeight/9-20);

        var input1 = createInput("someone@example.com");
        input1.position(displayWidth/2-80 , displayHeight/9+20);

        var input2 = createRadio();
        input2.option("yes");
        input2.option("no");
        input2.position(displayWidth/2-80  , displayHeight/9+100);

        var question1 = createElement("h3");
        question1.html("Do you want a new cafateria ?");
        question1.position(displayWidth/2-80 , displayHeight/9+60);

        var input3 = createRadio("yes");
        input3.option("yes");
        input3.option("no");
        input3.position(displayWidth/2-80  , displayHeight/9+180);

        var question2 = createElement("h3");
        question2.html("Do you want to add kabbadi as a sport ? ");
        question2.position(displayWidth/2-80 , displayHeight/9+120);

        var input4 = createRadio("yes");
        input4.option("yes");
        input4.option("no");
        input4.position(displayWidth/2-80  , displayHeight/9+240);

        var question3 = createElement("h3");
        question3.html("Do you want robotics as an option in hobby ?");
        question3.position(displayWidth/2-80 , displayHeight/9+200);

        var button = createButton("submit");
        button.position(displayWidth/2-80 , displayHeight/3+40);
        button.mousePressed(()=>{
            var response = [];
            if(input2.value() === "yes"  ){
                response.push(1);
            }
            else{
                response.push(0);
            }
            if(input3.value() === "yes" ){
                response.push(1);
            }
            else{
                response.push(0);
            }
            if(input4.value() === "yes"  ){
                response.push(1);
            }
            else{
                response.push(0);
            }
            if(input1.value() === "shreyaskrishsinha@gmail.com"){
                value = true;
            }
            else{
                voteArr.push(response);
            writeVote();
            emailArr.push(input1.value());
            writeEmail();
            entered = true;
            voteLength++;
            writeVotelength();

            this.info = createElement("h4");
            this.info.html("press space to clear");
            this.info.position(displayWidth/2-80 , displayHeight/9+80);
            }
            
            
            this.greeting = createElement("h1");
            this.greeting.html("Submission is succesful");
            this.greeting.position(displayWidth/2-140 , displayHeight/9+120);
            //this.greeting.hide();

            question1.hide();
            question2.hide();
            question3.hide();
            input1.hide();
            input2.hide();
            input3.hide();
            input4.hide();
            enterEmail.hide();
            button.hide();
        });
        

    }
    hide(){
        this.greeting.hide();
        this.title.hide();
        this.info.hide();
    }

}
