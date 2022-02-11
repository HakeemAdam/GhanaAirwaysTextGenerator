let ft
let fz = 100
let r = 0

let txtArray

function preload() {
  ft = loadFont('ft.otf')


}


function setup() {
  createCanvas(windowWidth, windowHeight)

  textFont(ft)
  textSize(fz)
  textAlign(CENTER, CENTER)

  txtArray = ft.textToPoints("GHANA AIRWAYS,", width / 3, height / 2, fz, {
    sampleFactor: 0.25
  })
}

function draw() {
  background(40, 40, 40);
  //text('hi,', width/2, height/2)

  for (let i = 0; i < txtArray.length; i++) {

    // ellipse(txtArray[i].x, txtArray[i].y, 10, 10)

    push()
    translate(txtArray[i].x, txtArray[i].y)
    rotate(r * i)
    r += 0.00000009
    strokeWeight(2)
    stroke(51, 255, 51)
    line(-5, -5, 5, 5)
    pop()
  }

}