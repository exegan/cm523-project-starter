/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
class Object {
    constructor(x, y, r) {
      const options = {
        restitution: 0.5
      };
      this.body = Matter.Bodies.circle(x, y, r, options);
      Matter.Body.setMass(this.body, this.body.mass * 4);
      Matter.World.add(world, this.body);
      this.r = r;
    }
  
    show() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("#70163c");
      ellipse(0, 0, this.r * 2);
      pop();
    }
  }
  
  class Ground extends Target {
    constructor(x, y, w, h) {
      super(x, y, w, h);
      this.body.isStatic = true;
    }
  
    show() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      fill("#c6dea6");
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
      pop();
    }
  }
  
  class Target {
    constructor(x, y, w, h) {
      const options = {
        restitution: 0.5
      };
      this.body = Matter.Bodies.rectangle(x, y, w, h, options);
      Matter.World.add(world, this.body);
      this.w = w;
      this.h = h;
    }
  
    show() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("#c6dea6");
      rect(0, 0, this.w, this.h);
      pop();
    }
  }
  
  class SlingShot {
    constructor(x, y, body) {
      const options = {
        pointA: {
          x: x,
          y: y
        },
        bodyB: body,
        stiffness: 0.02,
        length: 40
      };
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }
  
    fly() {
      this.sling.bodyB = null;
    }
  
    show() {
      if (this.sling.bodyB) {
        stroke(0);
        strokeWeight(4);
        const posA = this.sling.pointA;
        const posB = this.sling.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
      }
    }
  
    attach(body) {
      this.sling.bodyB = body;
    }
  }

const vocabPairs = [
  { term: "Hola", definition: "Hello" },
  { term: "Adios", definition: "Goodbye" },
  { term: "Gracias", definition: "Thank you" },
  { term: "Por favor", definition: "Please" },
  { term: "Si", definition: "Yes" },
  { term: "Claro", definition: "Of course" },
  { term: "No", definition: "No" },
  { term: "Amor", definition: "Love" },
  { term: "Todo", definition: "All" },
  { term: "Caliente", definition: "Hot" },
  { term: "Frío/ fría", definition: "Cold" },
  { term: "Lluvia", definition: "Rain" },
  { term: "Sol", definition: "Sun" },
  { term: "Luna", definition: "Moon" },
  { term: "Nieve", definition: "Snow" },
  { term: "Viento", definition: "Wind" },
  { term: "Abrir", definition: "To open" },
  { term: "Ayudar", definition: "To help" },
  { term: "Estar", definition: "To be" },
  { term: "Gustar", definition: "To like" },
  { term: "Jugar", definition: "To play" },
  { term: "Llamar", definition: "To call" },
  { term: "Querer", definition: "To want" },
  { term: "Tener", definition: "To have" },
  { term: "Ser", definition: "To be" },
  { term: "Saber", definition: "To know" }
];

// Create slingshot objects for each term
const objects = vocabPairs.map(pair => new Object(x, y, r));

// Create slingshot targets for each definition
const targets = vocabPairs.map(pair => new Target(x, y, w, h));

// Attach a random object to a random target when the game starts
const randomIndex = Math.floor(Math.random() * objects.length);
const object = objects[randomIndex];
const target = targets[randomIndex];
const slingShot = new SlingShot(x, y, object.body);
slingShot.attach(target.body);