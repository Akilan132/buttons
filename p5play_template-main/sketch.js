var btn_red

function setup() {
  createCanvas(400,400);

  btn_red = createButton("RED")
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  
  btn_green = createButton("green")
  btn_green.position(250,50);
  btn_green.mousePressed(red_bg);

}

function draw() 
{
  background(20);

  red_bg()

  green_bg()
}


function red_bg() 
  {
    r = 255;
    g = 0;
    b =0;
  }

  function green_bg() 
  {
    r = 0;
    g = 200;
    b =0;
  }

