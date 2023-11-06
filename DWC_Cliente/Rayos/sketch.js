let wireframe = false;
let mouseControl = false;
const numWalls = 5;
const border = 10;

const walls = [];
const wallPts = [];
const lights = [];


function intersectLineLine(pos1, pos2, pos3, pos4) {
  const x1 = pos1.x;
  const y1 = pos1.y;
  const x2 = pos2.x;
  const y2 = pos2.y;

  const x3 = pos3.x;
  const y3 = pos3.y;
  const x4 = pos4.x;
  const y4 = pos4.y;

  const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (d == 0) {
    return;
  }

  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / d;
  const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / d;

  return [t, u, createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1))];
}

function intersectLineCircle(pos1, pos2, posCircle, r) {
  const newPos1 = p5.Vector.sub(pos1, posCircle);
  const newPos2 = p5.Vector.sub(pos2, posCircle);

  const x1 = newPos1.x;
  const y1 = newPos1.y;
  const x2 = newPos2.x;
  const y2 = newPos2.y;

  const d = p5.Vector.dist(pos1, pos2);
  const D = (x1 * y2) - (x2 * y1);

  const intersect = (pow(r, 2) * pow(d, 2)) - pow(D, 2);
  return (intersect > 0);
}


class Light {
  constructor(x, y, brightness) {
    this.pos = createVector(x, y);
    this.brightness = brightness;
  }

  draw() {
    fill(255);
    noStroke();
    circle(this.pos.x, this.pos.y, this.brightness / 10);
  }
}

class Wall {
  constructor(x1, y1, x2, y2, inv) {
    this.pos1 = createVector(x1, y1);
    this.pos2 = createVector(x2, y2);
    this.inv = inv;
  }

  draw() {
    if (this.inv) return;
    stroke(50);
    strokeWeight(5);
    line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
  }

  checkIntersect(wall2) {
    const data = intersectLineLine(this.pos1, this.pos2, wall2.pos1, wall2.pos2);
    if (!data) return;
    const t = data[0];
    const u = data[1];
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
      return data[2];
    } else {
      return;
    }
  }
}

class Hit {
  constructor(pos, source, edge) {
    this.pos = pos;
    this.source = source;
    this.edge = edge;
  }
}

class Ray {
  constructor(pos1, pos2, limit) {
    this.pos = pos1;
    this.target = pos2;
    this.dir = p5.Vector.sub(pos2, pos1).normalize();
    this.a = this.dir.heading();
    this.limit = limit;
  }

  castOneWall(wall) {
    const pos4 = (this.limit) ? this.target : p5.Vector.add(this.pos, this.dir);
    const data = intersectLineLine(wall.pos1, wall.pos2, this.pos, pos4);
    if (!data) return;
    const t = data[0];
    const u = data[1];
    let tMin = 0;
    let tMax = 1;
    let uMin = 0;
    let uMax = Infinity;
    if (this.limit) {
      uMin = 0.01;
      uMax = 1;
    } else if (wall.pos1 == this.target || wall.pos2 == this.target) {
      tMin = -0.01;
      tMax = 1.01;
    }
    if (t > tMin && t < tMax && u > uMin && u < uMax) {
      return data[2];
    } else {
      return;
    }
  }

  cast() {
    let closestHit;
    let closestMag = Infinity;
    let potentialClosestHit;
    for (let w = 0; w < walls.length; w++) {
      const hit = this.castOneWall(walls[w]);
      if (hit) {
        const mag = p5.Vector.dist(hit, this.pos);
        if (mag < closestMag) {
          if (p5.Vector.dist(this.target, hit) < 1) {
            potentialClosestHit = hit;
          } else {
            closestMag = mag;
            closestHit = hit;
          }
        }
      }
    }

    let edge = false;
    if (potentialClosestHit) {
      if (closestHit) {
        edge = this.pos.dist(potentialClosestHit) < this.pos.dist(closestHit);
      } else {
        closestHit = potentialClosestHit;
      }
    }
    if (closestHit) {
      return new Hit(closestHit, this, edge);
    }
    return;
  }
}

function setup() {
  createCanvas(800, 800);

  // generate walls
  walls[0] = new Wall(0, 0, width, 0);
  walls[1] = new Wall(width, 0, width, height);
  walls[2] = new Wall(width, height, 0, height);
  walls[3] = new Wall(0, height, 0, 0);
  //*
  let i = walls.length;
  for (const totalLength = 4 + numWalls; i < totalLength; i++) {
    walls[i] = new Wall(random(width), random(height), random(width), random(height));
  }
  //*/

  // check for wall intersections
  for (i = 0; i < walls.length; i++) {
    const wall1 = walls[i];
    for (let j = i + 1; j < walls.length; j++) {
      const wall2 = walls[j];
      const pt = wall1.checkIntersect(wall2);
      if (pt) {
        wallPts.push(pt);
      }
    }
  }

  // create the light
  lights[0] = new Light(0, 0, 100);
}

function addVert(verts, vert, v, i, l) {
  if (i >= l) {
    verts[v] = vert;
    return (v + 1) % verts.length;
  } else {
    verts.push(vert);
    return v;
  }
}

function draw() {
  background(0);

  // draw lit areas for each light
  for (let j = 0; j < lights.length; j++) {

    // raycast light to walls
    const hits = [];
    for (let w = 0; w < walls.length; w++) {
      const ray1 = new Ray(lights[j].pos, walls[w].pos1);
      const ray2 = new Ray(lights[j].pos, walls[w].pos2);
      const hit1 = ray1.cast();
      const hit2 = ray2.cast();
      if (hit1) hits.push(hit1);
      if (hit2) hits.push(hit2);
    }

    // raycast to wall intersections too
    for (let p = 0; p < wallPts.length; p++) {
      const ptRay = new Ray(wallPts[p], lights[j].pos, true);
      const ptHit = ptRay.cast();
      if (!ptHit) {
        hits.push(new Hit(wallPts[p], new Ray(lights[j].pos, wallPts[p], true), false));
      }
    }

    // sort raycast hits by angle
    const l = hits.length;
    const sortedHits = [];
    for (let i = 0; i < l; i++) {
      let nextHitIndex;
      let smallestAngle = Infinity;
      for (let h = 0; h < hits.length; h++) {
        const a = hits[h].source.a;
        if (a < smallestAngle) {
          smallestAngle = a;
          nextHitIndex = h;
        }
      }
      sortedHits[i] = hits[nextHitIndex];
      hits.splice(nextHitIndex, 1);
    }

    // calculate vertices from hits
    const verts = [];
    let v = 0;
    const hl = sortedHits.length
    let lastHit = sortedHits[hl - 1];
    const reps = hl * 2;
    noFill();
    for (let i = 0; i < reps; i++) {
      const nextHit = sortedHits[i % hl];
      if (wireframe) {
        stroke(100);
        strokeWeight(0.5);
        line(lights[j].pos.x, lights[j].pos.y, nextHit.source.target.x, nextHit.source.target.y);
        stroke(255);
        strokeWeight(2);
        line(lights[j].pos.x, lights[j].pos.y, nextHit.pos.x, nextHit.pos.y);
      }
      let edgeAfter = false;
      let edgePos;
      if (nextHit.edge && lastHit) {
        edgePos = nextHit.source.target;
        //const triMedian = p5.Vector.add(edgePos, nextHit.pos).add(lastHit.pos).div(3);
        const triMedian = p5.Vector.add(lastHit.pos, nextHit.pos).div(2);
        const triMedianRay = new Ray(triMedian, lights[j].pos, true);
        const triMedianHit = triMedianRay.cast();
        //circle(triMedian.x, triMedian.y, 5);
        if (triMedianHit) {
          //circle(triMedianHit.pos.x, triMedianHit.pos.y, 10);
        } else {
          edgeAfter = true;
        }
      }
      if (nextHit.edge && !edgeAfter) {
        v = addVert(verts, edgePos, v, i, hl);
      }
      v = addVert(verts, nextHit.pos, v, i, hl);
      if (nextHit.edge && edgeAfter) {
        v = addVert(verts, edgePos, v, i, hl);
        lastHit = new Hit(edgePos, nextHit.source, false);
      } else {
        lastHit = nextHit;
      }
    }

    // draw vertices to make light shape
    noStroke();
    beginShape();
    for (let i = 0; i < verts.length; i++) {
      vertex(verts[i].x, verts[i].y);
    }
    vertex(verts[0].x, verts[0].y);
    fill(255, 255, 255, 200);
    if (!wireframe) endShape(CLOSE);
  }

  // draw walls
  for (let w = 0; w < walls.length; w++) {
    walls[w].draw();
  }

  // draw light
  mouseControl = mouseX < width-border && mouseX > border && mouseY < height-border && mouseY > border
  if (mouseControl) {
    lights[0].pos = createVector(constrain(mouseX, border, width - border), constrain(mouseY, border, height-border));
  } else {
    lights[0].pos = createVector(noise(millis() / 3000) * width, noise(millis() / 3000 + 100) * height);
  }
  lights[0].draw();

  // draw text
  noStroke();
  fill(0);
  rect(2, height - 30, 300, 28);
  fill(255);
  textSize(16);
  textFont("monospace");
  text("Press W to toggle wireframe mode", 10, height - 10);
}

function keyPressed() {
  if (key == "w") {
    wireframe = !wireframe;
  }
  return false;
}