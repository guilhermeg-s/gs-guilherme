function setup (){
    CanvasCanvas (600,600);
    background("black");
}

function draw(){
    stroke("blue");
    Fill("red");

    if(mouseIsPressed){
        react(mouseX, mouseY, 20, 35);
    }

}
