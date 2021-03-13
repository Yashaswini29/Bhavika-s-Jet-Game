class Game{
    constructor(){}
    
   start(){
       if(gameState ===0){
           form = new Form()
           form.display()
           player = new Player()
           player.getCount();
       }

            player1 = createSprite(100,350)
            player1.addImage(playerImg)
            player1.scale = 0.1
            player2 = createSprite(250,350)
            player2.addImage(playerImg)
            player2.scale = 0.1
            players=[player1,player2];

   }


    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }


    updateState(state){
        database.ref('/').update({
          gameState: state
        })
      }


      getplayerScore(){
        var playerScoreRef = database.ref('players/player').on('value',(data)=>{
          playerScore = data.val()
        })
    }

        updateScore(score){
            database.ref('/').update({
             playerScore:score
            });
          }
        
          reset(){
              if(player.y<0 && playerScore<5){
                  playerScore+=1
                
              }

              if(player.isTouching(particles)){
                
              }
          }


          play(){
              form.hide()
            Player.getPlayerInfo();
         
            if(allPlayers!==undefined){
                //var pos = 350
                var index = 0;
                for(var plr in allPlayers){
                    
                    index = index+1
                    players[index-1].y = 350 - allPlayers[plr].distance;
                }
            }
            if(keyIsDown(UP_ARROW) && player.index!==null){
                
                player.distance+=10
                
                player.update();
            }
        
            if(player.distance>350){
                player.distance = 0;
                player.score+=1;
            }
          drawSprites(); 
          }
        
        }