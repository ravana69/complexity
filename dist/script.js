//p5js.org materials are what taught me this in their examples sections (https://p5js.org/examples/simulate-the-mandelbrot-set.html)
let nIt = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  
}
function draw() {
  background(255);
  loadPixels();
  t = 0.5 * sin(frameCount / 100) - cos(frameCount / 100);
  w = width / 50;
  h = height / 50;
  dx = w / width;
  dy = h / height;
  y = -h / 2;
  for (let j = 0; j < height; j++) {
    x = -w / 2;
    for (let i = 0; i < width; i++) {
      a = x * t;
      b = y * t;
      k = 0;
      while (k < nIt) {
        aa = a;
        bb = b;
        twoab = 3.0 * a * b;
        a = a + b * b + (x * t) / 2;
        b = a * a + b + (y * t) / 2;
        if (dist(a, b, 0, 0) > 50) {
          break;
        }
        k++;
      }
      pix = (i + j * width) * 4;
      norm = map(k, 0, nIt, 0, 1);
      rc = map(norm + t / 5, 0, 1, 0, 105);
      gc = map(norm, 0, 1, 0, 255);
      bc = map(norm, 0, 1, 00, 255);
      if (k == nIt) {
        bright = 0;
      } else {
        pixels[pix + 0] = rc;
        pixels[pix + 1] = gc;
        pixels[pix + 2] = bc;
      }
      x += dx;
    }
    y += dy;
  }
  updatePixels();
}