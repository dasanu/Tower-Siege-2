const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
    createCanvas(800,400);

    engine=Engine.create();
    world=engine.world;

    box1=new BlueBox(500,360);
    box2=new YellowBox(520,360);
    box3=new GreenBox(540,360);
    box4=new RedBox(560,360);
    box5=new GreenBox(580,360);
    box6=new YellowBox(600,360);

    box7=new RedBox(510,330);
    box8=new YellowBox(530,330);
    box9=new BlueBox(550,330);
    box10=new GreenBox(570,330);
    box11=new RedBox(590,330);

    box12=new YellowBox(520,310);
    box13=new BlueBox(540,310);
    box14=new RedBox(560,310);
    box15=new GreenBox(580,310);

    box16=new YellowBox(530,280);
    box17=new RedBox(550,280);
    box18=new GreenBox(570,280);

    box19=new BlueBox(540,250);
    box20=new RedBox(560,250);

    box21=new GreenBox(550,220);

    box22=new GreenBox(500,135);
    box23=new BlueBox(520,135);
    box24=new YellowBox(540,135);
    box25=new RedBox(560,135);
    box26=new GreenBox(580,135);
    box27=new YellowBox(600,135);

    box28=new BlueBox(510,105);
    box29=new RedBox(530,105);
    box30=new YellowBox(550,105);
    box31=new GreenBox(570,105);
    box32=new RedBox(590,105);

    box33=new YellowBox(520,75);
    box34=new BlueBox(540,75);
    box35=new RedBox(560,75);
    box36=new GreenBox(580,75);

    box37=new YellowBox(530,45);
    box38=new BlueBox(550,45);
    box39=new GreenBox(570,45);

    ball=new Ball(0,0,20);

    spring=new ProjectTile(ball.body,{x:200,y:200});

    ground=new PlatForm(400,390,800,10);

    groundhovering =new PlatForm(550,160,200,10);  
}

function draw(){
    background(247,223,178);
    Engine.update(engine);

    debug:true;

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();

    ball.display();
    spring.display();
    ground.display();
    groundhovering.display();


}

function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   spring.release();
}

function keyPressed(){
    if(keyCode===32){
       spring.attach(ball.body);
    }
}
