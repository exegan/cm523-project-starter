let targetColor;
const targets = [];
let objectColor;
let world, engine;
let mConstraint;
let slingshot;

function setup() {
  const canvas = createCanvas(711, 400);
  engine = Engine.create();
  world = engine.world;
  targetColor = color("#c6dea6");
  ground = new Ground(width / 2, height - 10, width, 20, targetColor);
  for (let i = 0; i < 3; i++) {
    targets[i] = new Box(450, 300 - i * 75, 84, 100, color("#70163c"));
  }
  objectColor = color("#c6dea6");
  term = new Object(150, 300, 25, objectColor);

  slingshot = new SlingShot(150, 300, term.body);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  // A fix for HiDPI displays
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function keyPressed() {
  if (key == ' ') {
    World.remove(world, term.body);
    term = new Object(150, 300, 25, objectColor);
    slingshot.attach(term.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {
  background(color("#135187"));
  Matter.Engine.update(engine);
  ground.show();
  for (let target of targets) {
    target.show();
  }
  slingshot.show();
  term.show();
}