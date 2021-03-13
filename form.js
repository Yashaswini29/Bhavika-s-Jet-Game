class Form{
constructor(){
this.button = createButton("PLAY");
}

hide(){
    this.button.hide();
}

display(){
   this.button.position(180,200);
   this.button.mousePressed(()=>{
       this.button.hide()
       playerCount+=1
       player.index = playerCount;
       player.updateCount(playerCount);
       player.update();
       if(playerCount ===2){
           game.updateState(1)
       }else{
           fill("red")
           text("WAITING FOR THE OTHER PLAYERS",200,200,)

       }
   })
}
}



      