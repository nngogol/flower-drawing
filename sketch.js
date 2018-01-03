let sl1;
let xoff = 0.1
let yoff = 0.1
let roff = 3.1
let points = []

function setup(){
	createCanvas(600, 600)
	colorMode(HSL);
	noFill()
	sl1 = createSlider(0.001, .5 , .1, .001)
	strokeWeight(2);

	// change radius after 4 seconds
	setTimeout(() => {
		sl1.value(sl1.value()*3)
	},4000)
}


function draw(){
	background (12);
	translate(width/2 , height/2 )

	// calculus
	xoff += .04
	yoff += .04
	if (roff > 300) roff = 0
	roff += .02 + sin(noise(roff))*.4 

	// getting position
	let r = noise(roff) * 160 * sl1.value()*2
	let x = r * cos(xoff) * 2
	let y = r * sin(yoff) * 2

	// insert 2/3 times
	if (random() > .3)	points.push({"pos":createVector(x, y), "color": roff})

	// when length will get to 900
	// delete 400 points
	if (points.length > 600) points.length = 200    
	// 14 50 .. ~16 30 man 0049

	
	// render
	for (let i = 1; i < points.length; i++) {
		let p1 =  points[i-1]
		let p2 = points[i]
		point(p1.pos.x ,p1.pos.y)
		point(p2.pos.x ,p2.pos.y)

		// remember! HSL!		
		stroke(p1.color, 100 , 50)
		line(p1.pos.x ,p1.pos.y, p2.pos.x, p2.pos.y)
		
	}



	// You can use sthis, if you want

	// beginShape()
	// points.map(x => {
	// 	stroke(x.color, 100 , 50)
	// 	point(x.pos.x, x.pos.y)
	// })
	// endShape()

}

