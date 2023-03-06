//this is the function to check if the answer is correct
function Logic(){
    Done1.mousePressed(()=>{
       if(Question1.value()==="plastic"){
       gameState="Q2";
       Question1.hide();
       Done1.hide();
       Yay.play();
       correct+=1;
       }else{
           wrong.play();
       }
    })
  
    Done2.mousePressed(()=>{
        if(Question2.value()==="ozone"){
        gameState="Q3";
        Question2.hide();
        Done2.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
     })
  
     Done3.mousePressed(()=>{
        if(Question3.value()==="fossil"){
        gameState="Q4";
        Question3.hide();
        Done3.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
     })
  
     Done4.mousePressed(()=>{
        if(Question4.value()==="2050"){
        gameState="Q5";
        Question4.hide();
        Done4.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
     })
  
     Done5.mousePressed(()=>{
        if(Question5.value()==="sustainable"){
        gameState="End";
        Question5.hide();
        Done5.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
  
    })
  }
  