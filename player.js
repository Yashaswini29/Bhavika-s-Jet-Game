class Player{
    constructor(){
        this.index = null
        this.score = 0;
        this.distance = 0;
    }
    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
        }
    
        updateCount(count){
            database.ref('/').update({
                playerCount:count
            })
        }

        update(){
            var playerIndex = "players/player"+this.index
            database.ref(playerIndex).update({
                distance:this.distance,
                score:this.score
            })
        }

        static getPlayerInfo(){

            database.ref("players").on("value",(data)=>{
                allPlayers = data.val()
            })
        }
}