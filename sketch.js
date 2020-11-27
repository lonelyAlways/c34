var Gball,database,position;

function setup(){
    createCanvas(500,500);

    database=firebase.database()

    Gball = createSprite(250,250,10,10);
    Gball.shapeColor = "red";

    var Gballpos=database.ref('Ball/position')

    Gballpos.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
    
}

function readPosition(data){
    position=data.val()
    Gball.x=position.x
    Gball.y=position.y
     
}