(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.mountains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00CC33","#003333"],[0,1],-23.2,-39.8,-23.2,93.5).s().p("Eh8/AMJIAA2FQekFrSmjBQSmjBP9haQP8hZZEDKIASAEIAAgEQejFrSmjBQSmjBP9haQP8hZZEDKIAUAEIAAWBg");
	this.shape.setTransform(800,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,1600,155.6);


(lib.feathercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A0000").s().p("AhlQKQBRwXDutWQBHj7AFiNQAEhkgagLQgkAAhFBbQhXByhdDOQj5IcgdJAQgUGxCVMXIhVlQQh5nYAUmjIAAAAQAdpLD+omQBhjVBZh1QBjiBA+AQIAAAAQBLAHgGCiQgFCShJEDQjyNaiAWOQgSh6AOkQg");
	this.shape.setTransform(16.3,-8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AhxV+QgWhFgUhFIgehwIAAgBQgRhCgPhCQAMgCgLgdQgKgdgzj2Qgyj2AlnuQAmnxD5obQBejPBWhxQBGhbAkAAQAZAKgBB4QgCB2iJIuQiJIug5IsQg6IuACAEQACAEAMABIgCAaIgJCVIgDA4IgHCVIgDBKIgVhBg");
	this.shape_1.setTransform(15.2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-150.9,70.4,300.1);


(lib.feather = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A0000").s().p("ABJuSQhFmMgwhSIgLAZQgfBVgcC+QhlKwD7dyQgkgVgThzQk06WB1sSQAfjLAihbQAVg5AYgVQAtgsAwAgQBWAsBZIDQCmO/jIUiQgUCMgmAWQCJ5CiMswg");
	this.shape.setTransform(0.2,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AAlWmQj89yBlqwQAci+AfhUIALgaQAxBSBEGMQCMMwiJZCg");
	this.shape_1.setTransform(0.2,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-154.2,48.7,301);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape.setTransform(21.2,-3.5,0.556,0.556);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_1.setTransform(4.3,-24.2,1.222,1.222);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjsDsQhhhiAAiKQAAiKBhhiQBjhhCJAAQCLAABhBhQBiBiABCKQgBCKhiBiQhhBjiLAAQiJAAhjhjg");
	this.shape_2.setTransform(30,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AhRHAQhngShTg+QgcgWgagZQglgmgagpQg2hUgMhkQgDgcgBgeQABhnAphYQAhhGA6g8QAQgPASgOQArgmAygXQBZgrBpAAQAiABAhAEQBnAOBWA8QAiAYAfAeQApAqAdAvQA0BWAJBnQACAVAAAWQABBMgWBEQggBihQBPIgHAHQhuBqiTASQgcACgdAAQgpAAgogGg");
	this.shape_3.setTransform(30,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004081").s().p("AhRHAQhngShTg+QgcgWgagZQglgmgagpQg2hUgMhkQgDgcgBgeQABhnAphYQAhhGA6g8QAQgPASgOQArgmAygXQBZgrBpAAQAiABAhAEQBnAOBWA8QAiAYAfAeQApAqAdAvQA0BWAJBnQACAVAAAWQABBMgWBEQggBihQBPIgHAHQhuBqiTASQgcACgdAAQgpAAgogGg");
	this.shape_4.setTransform(30,7,1.102,1.102);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAEAEA").s().p("Ap8D3IglgmQjjj7AAlbIAAgYQPdJNMlqvQAHA8AAA+QAAF2kIEGQkIEJl1gBQl0AAkIkIg");
	this.shape_5.setTransform(0,39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AuAEtQAIljD/kAIAAAAQEIkIF0AAQFWAAD7DeQAWAUAWAWQDcDcAlEmQmwFynlABQmiAAnKkSg");
	this.shape_6.setTransform(-0.3,-32.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8A0000").s().p("ArILIIgkglQkDkcAAmHIABgRQAFmWEhkhQEoknGgAAQGCAAEZD9QAXAUAWAWQD5D5AoFRQAHA+AABAQgBGhknEnIAAAAQknEnmhABQmgAAkokogAp8p9IgBABQj/D/gIFmIAAAXQAAFaDjD9IAlAmQEIEIF0AAQF1AAEIkIQEIkIAAl1QAAg9gHg8QglknjcjcQgWgWgXgUQj6jelWAAQl0AAkIEHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-100.8,201.6,201.6);


(lib.body_feathers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F0000").s().p("AgBDwQiFg1gfh0QgfhzBYhwQA4hGBSgrQgdAbgUAhQhWB8AkCCQAkCFCFBBQAkARAnAJIgXABQhRAAhIgeg");
	this.shape.setTransform(21.3,90.6,1,1,0,0,0,-3.2,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F0000").s().p("AgBDwQiFg1gfh0QgfhzBYhwQA4hGBSgrQgdAbgUAhQhWB8AkCCQAkCFCFBBQAkARAnAJIgXABQhRAAhIgeg");
	this.shape_1.setTransform(53.3,54.6,1,1,0,0,0,-3.2,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F0000").s().p("AgBDwQiFg1gfh0QgfhzBYhwQA4hGBSgrQgdAbgUAhQhWB8AkCCQAkCFCFBBQAkARAnAJIgWABQhSAAhIgeg");
	this.shape_2.setTransform(14.3,30.6,1,1,0,0,0,-3.2,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,114.1);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F0000").ss(8.7,1,1).p("A5mOdQkfmahan8QiLsGKHpCQKHpCOVAsQOXAsH8JhQH8JgAtK9QAeHMjpGKQh7DRjEC9QhzBvh8BYQnuFdqKAAQr7AAo/nmQglgfgjghQjQi+iYjag");
	this.shape.setTransform(204.1,188.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E5E5").s().p("AwBArQgkgfgkgfQjPi+iYjaQGbhlHmAAQOeAAKQFzQESCdCgC0QntFeqKAAQr8AAo/nng");
	this.shape_1.setTransform(186,323.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("ANJVaQqQl0ueAAQnmAAmbBmQkfmbhan7QiLsGKHpCQKHpCOVAsQOXAsH8JgQH8JhAtK9QAeHMjpGKQh7DQjEC+QhzBuh8BYQigi2kTicg");
	this.shape_2.setTransform(204.1,170.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.3,416.9,385.3);


(lib.beak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// beak
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C99B00").ss(5,1,1).p("AKrE6QqhjPsHhPQA9kyDggjQFjAGFLAtQCFASCCAYQHGBTjwHDg");
	this.shape.setTransform(74.6,39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Ar9AcQA9kyDggjQFjAGFLAtQCFASCCAYQHGBTjwHDQqhjPsHhPg");
	this.shape_1.setTransform(74.6,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C99B00").ss(5,1,1).p("AFJDUQj1AnjjgoQjmgohbhxQhahxAMhWQAHgxA1goQHeCSIgABQAhEBj0Amg");
	this.shape_2.setTransform(57.9,53.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AiPDTQjmgohbhxQhahxAMhWQAHgxA1goQHeCSIgABQAhEBj0AmQh4ATh0AAQh3AAh1gUg");
	this.shape_3.setTransform(57.9,53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,5.1,158.3,73.9);


(lib.wing_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feathercopy("synched",0);
	this.instance.setTransform(280.8,436.1,1.532,1.532,-28.8,0,0,-0.1,149.2);

	this.instance_1 = new lib.feathercopy("synched",0);
	this.instance_1.setTransform(270.5,431.5,1.388,1.388,-36.2,0,0,-0.1,149.1);

	this.instance_2 = new lib.feathercopy("synched",0);
	this.instance_2.setTransform(216,390.4,1.249,1.249,-42,0,0,-9.2,102.4);

	this.instance_3 = new lib.feathercopy("synched",0);
	this.instance_3.setTransform(214.1,395.1,1.083,1.083,-48.6,0,0,-9.3,102.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A0000").s().p("ARRe3QgzgegxggQpRmFkpq5QhLivhFitQj6phgpqpQghotBbobQhJgzhLBfQg7BMgwCSQjmLACILlQCJLpHwJQQF/HHHIFfIBGA1QhEgYhBgeQlzipkelgQkllsjwmVQl+qDAPrrQAImZB7l2IgPgMIgDgEQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBABQiuBWhjFRQhgFEAmFLQBIJyE4ItQDTF7EzE6QDdDlG+EhIA7AlIhggzQs5nGmSrBQj7m3hqnoQhNllA1laQh+FTBwJXQBwJXFpG6QFpG7FCC9QDqCICSBFQAxAYAnAQIAKADIgMgDIhIgaQqukCmTn0QmroShcoZQhcoVAikXQAjkXBugZIAFABIABgGIAGgEIgFABQAch/Auh/QBTjmC2iTQAXACAWAFQARAEAQAGQAIACAHAFQA/ivBZipQAphMBTgQQAXAAAXAEQATACATAIQAQAGAOAJQANAKALAMQhIKLAwKXQAzK8ElJ6QEuKIH7HZQBIBEBLBEIAZAWIBVBLQgvgZgtgbg");
	this.shape.setTransform(164.8,211.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("ALieoQhSgKhUgBIgNgBQgngQgxgXQiRhGjqiIQlDi8lom7Qlpm6hwpYQhxpWB+lTQg1FaBOFlQBqHnD6G4QGSLBM5HGIBhAzIg7gmQm+kgjejlQkyk7jUl6Qk4othIpzQgllKBflFQBjlQCvhXQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAEAEIAOALQh7F3gIGYQgPLtF+KCQDwGVElFsQEfFgFyCoQBCAeBEAYIhHg1QnHlemAnHQnwpQiJrpQiIrlDmrBQAwiSA7hLQBLhgBKA0QhbIbAhItQAoKpD7JgQBFCuBLCvQEpK4JRGGQAwAfAzAeIgCAGIgCADQhzAdh5AAQhBAAhEgJgAHmeCIBHAaQgrgEgcgWgARGdeIANAGQAJAEADAJIAAADIAAABIgZgXg");
	this.shape_1.setTransform(164.2,216.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("ALgbNQg/gfhBgZQBYAWBbARQgCgEgDAAQhGgQhBglIgWgOQhPg0hegPQgQgngugTQhLgfhJgpQhjg3hugXQm8jEkfmTQkzmuALoUQAIljBvlDQg2FHA7FgQCQNfK2IrQGeFNHmBkQBUARBWALQgvARg7ADQgtACgtAOQglALgjAAQgRAAgRgDgAOuaEIgagIQrNj1nxo3Qnyo1gOrjQgQsDH0oEQAOBvgcBuQh2HDAjHsQArJrEPIiQFcLALFEkIAMALIAQAMQApAdA1ANIAeAIIABAHQgcAVgiANQgngJg6gTgAm/SiQngksh7ogQhpnJB0mqQgTB5gHB8QghI3FAHCQE0GxGmEAQjMhmjDh6g");
	this.shape_2.setTransform(166.1,242.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A0000").s().p("AtqORQhbhhgxh/QiVmBAUmtQAMkTB+jsQAzj8BjjvQA2iCBkhVQB9kFDWi+QAnAAAmADQAKABAJAEQALGvg2HMQglE7AuExQBeJxF2IUQF6IXJWEZQACABAAAGQgGgBgFgBIgZgGIgegIQg1gNgpgdIgQgMIgMgLQrFkklcrBQkPohgrpsQgjnrB2nDQAchugOhwQn0IFAQMCQAOLkHyI1QHxI3LND0IAaAJQA6ATAnAJIAFABIgGAAQhWgLhUgRQnmhkmelOQq2oqiQtfQg7lgA2lHQhvFDgIFiQgLIUEzGvQEfGTG8DEQBuAXBjA3QBJApBLAfQAuATAQAmQBeAQBPA0IAWANQBBAmBGAPQADABACAEQhbgRhYgXQBBAaA/AfIAUAKQvHihqhrQgAwQGBQB7IgHgEsQDDB6DMBmQmmkAk0myQlAnBAho3QAHh8ATh5Qh0GqBpHJg");
	this.shape_3.setTransform(165.1,238.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AsTOFQm2jZknmHQjIkKgmlEQgQiLACiHQAVCFAfCAQCTJiIrFNQNbIDP+gyQDYgKDGgxQCUglCKg8QglAcgjAfQgcAZggAUQhhADhqAWQhfAUhnAiQizA8i/ALQhXAEhWAAQqaAApgkrgAVlQwQgrASgpAEIBUgWgAoAMhIi/hKQozjbj/ocQkKo4B2pXQCyBJBqDSQDFGEDyFlQBbCHCABpQLvJxPYB0QCTARCSAYQCkAbCQggQBVgSBPgnQhGA4hQA2IhXAJQiPAPiVAdQk+A+k3AAQpBAAomjVg");
	this.shape_4.setTransform(94.6,331.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8A0000").s().p("ADzUCQsDhZpim5Qi3iEiaipQlCligsnVQgWjsA4jZQAJgjAMgfIgDhIQgFjQCFh3QDyA/B2D7QEjJtHdHpQBABCBQAwQDwCREFBpQJ7D9KyAcQDaAJDBghQgbARgdAOQhOAnhWATQiQAfijgbQiSgXiTgSQvZhzrupyQiAhohciHQjxlljFmEQhrjSixhKQh3JYELI4QD+IcI0DbIC/BKQNOFHONiwQCVgdCQgQIBXgIIAmgDQgxAYgxAWQiKA7iVAlQjFAxjZALQv9AytcoEQorlNiSphQgfiBgViFQgCCIAQCKQAlFEDIEKQEnGIG2DYQKuFTL6gsQC/gLCyg7QBngjBggTQBqgWBggEQAagBAZAAIhkAbIhVAXQkOBIkTBMQi3Azi7AAQhPAAhPgJg");
	this.shape_5.setTransform(92.6,331.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("A7+NxQjThMAFi3QI0BEJEg4QK2hCJ0kjQKUkuICn3QCfibBoisQAzhWAmhaQAFBQgeBSQgeBVgDBbQgEBbgrBEQgFAJgIACQAvh0ATh8IhAB0Qh6DViXDUQhrCViKBxQnSGFoTEhQpdFKp6AAQnDAAnRingA20JHIgTgHIi6g9Qhcgfg7hGQAvgnA7gFQC1gOC1ABQFPAAFOgVQJzgpIwkAQCkhJCehUQHvkKFhmSQAwg4Aug6Qh2Buh8BpIgOAMIhdBNIAAAAIgLAJIgVARIhpBSQh4Bch9BSQrpHquDBFQnMAjnPAGIgDgIQgEgIgHgFQgMgJgKgLQgDgEAAgHQAng0BIgfQCKg9CggCQG3gFG4gXQHBgXGfiiQGcijFFkbQArgmApgoIgVANQB7hTBzhdQBBg1BMgnQB3g+BfhRIAJADIAGADIAAABQguA8gvA6QnJIqp2F9QuzJAxKABQhyAAh0gHg");
	this.shape_6.setTransform(70.9,510);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8A0000").s().p("A7GOyQkWhggUkCQgFhEBFgDQB3gHB4AHQhGgsg9hOQgYggAYgiQA9hVBrAAIBVAAQgNjnEkgMQKSgZKNhCQEkgeEVhrQDrhcDkhwQAngTAjgYQChhuCmhgIAVgNQgpAogrAmQlFEbmcCjQmfCknBAVQm4AXm3AFQigACiKA9QhIAfgnA0QAAAHADAEQAKALAMAJQAHAFAEAIIADAIQHPgGHMgjQODhFLpnqQB9hSB4hcIBphSIAVgRIALgJIAAAAIBdhNIAOgMQB8hpB2huQguA6gwA4QlhGSnvEKQieBUikBKQowD/pzApQlOAVlPAAQi1gBi1AOQg7AFgvAnQA7BGBcAfIC6A9IATAHQTOBCQVp6QJ2l/HJoqQAvg6Aug8IAJgLIgIAUQgmBagzBWQhoCsifCbQoCH3qUEuQp0Ejq2BCQpEA4o0hEQgFC3DTBMQRfGRQMo0QITkhHSmFQCKhxBriVQCXjUB6jVIBAh0QgTB8gvB0QhBCch1CLQmhHuowFnQmpEQneCGQlsBllnAAQmwAAmoiSg");
	this.shape_7.setTransform(68,514);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AoveUQiuqlGCpRQGIphFRp0QEsozCnpXQAZhYAVhYQhRBfgsCFIgCAIQgoB+gxB5QiqGqjTGcQkAH0lMHHQnKJ0BAMIQACAiAHAfIgIAGQgLAMgOAHQgOgFgGgKQiBjtgNkZQgYoKFWl4QG4nhE5osQD8m6CynRQAvh8Aqh9QhDCWhHCUQigFOi1FFQlmKHoIIfQg/BCgrBPQkCHbBCIQQgqgygUhDQi4pkHGnSQGamjFEntQEom+DsnPIAyhkIgxBNIABgGQADgMAFgMQADgHACgJQBJhdBHheQAdgmAngeQBkhLBfhRQAlggARgxIAEgCIADgBIAHgBIAAgBIAJADIABABIgjC9QhpIaipIXQgzChg+CbQjwJYkwJHQlJJ7ilK0IgSABQhcAAgchrgAQS/5IACABQAOAfgMAjQgMAjAAAnQAAAVgHALQAIhWAHhXg");
	this.shape_8.setTransform(166.7,611.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8A0000").s().p("EgHLAgkQhdhOgshrQggAnh2hQQhKgygWhXQgQhBgLg/QhaALg8iMQhnj1AnkWQAmkSCtjgQEjl7E9liQEelDDdlqQCwkhCtkRIAxhNIgyBkQjsHQkoG+QlEHsmaGkQnGHSC4JjQAUBEAqAxQhCoPECnbQArhQA/hCQIIofFmqGQC1lGCglNQBHiVBDiWQgqB+gvB8QiyHRj8G6Qk5Ism4HgQlWF4AYIKQANEZCBDuQAGAJAOAFQAOgGALgMIAIgHQgHgfgCghQhAsJHKpzQFMnHEAn1QDTmcCqmpQAxh6Aoh+IACgIQAsiEBRhgQgVBZgZBYQinJWksIzQlRJ1mIJgQmCJSCuKkQAeB2BsgLQClq1FJp6QEwpIDwpXQA+ibAziiQCpoWBpoaIAji+IAEgaIgBAbQgHBXgIBXQg+Jwi7JsQhqFfi3FAQlvKHkDK6QhYDtgmD3QgZCliDBRQgXAOgVAAQgZAAgXgTg");
	this.shape_9.setTransform(161.5,615.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("EAJOAhWQm+lZhqosQiFrIB4rTQAukPAykMQB5p+gbpzQgEhOgFhOQAgADASAaQABAhAIAhIAJAnQCBJAgyJhQgpH9AbH8QAkK7DiKTQAWA+AcA5QCCEEhYD7IgUABQgtAAgmgdgACRf8QjxiQhqkGQi1nDAwntQA/qSCzp4QCaosAWo5QADhVAAhVQgWCUgaCYQgbCZgdCdQgwD1hADvQi1KihiKxQhoLWFrJtIACACIgEAFQgGALgFAMQgEANgNAHQiKAgg9h+Qj+oOBVpkQBQpCC+omQCZm7A3nJQAMhoAIhoIBfkIQAWg9ATg9IAAgBIAUhIQAYheAwhIQgSAmADAzIADBOQAOHDhVG5QiMLhhHLvQhNMrGaKnIARAaQADAegGAeQgHAggCAiIgOABQgkAAgbgQgArMK6QA0nQCwmqQCWlvBYl1QAQhCANhDQgJgDgDAIIgTA1QAHhQAvhQQA5hgAohqIARguIgBAGQgkCigpChQhjGDiFF6QjXJigoKPQgTE7BIEjQiqmUAynAgEAEFghNQAOAYADAdIgRg1g");
	this.shape_10.setTransform(247.2,620.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8A0000").s().p("AEdfKIAAADQABA8gmAuIgIAJQjeAJiHikQgUA2iSgMQifgNhFiaQgVgxgTgyQhAgMguhjQjHmkAsniQAvn4C8nOQCimSCQmLIATg1QADgIAJADQgNBDgQBCQhYF1iWFvQiwGqg0HQQgyHACqGUQhIkjATk7QAoqPDXpiQCFl6BjmDQApihAkiiIABgGQAOg/AVgxIgBAWQgIBogMBoQg3HJiZG7Qi+ImhQJCQhVJkD+IOQA9B+CKggQANgHAEgNQAFgMAGgLIAEgFIgCgCQlrptBorWQBiqxC1qiQBAjvAwj1QAfidAZiZQAaiYAWiUQAABVgDBVQgWI5iaIsQizJ4g/KSQgwHtC1HDQBqEGDxCQQAgATAtgEQACgiAHggQAGgegDgeIgRgaQmaqnBNsrQBHrvCMrhQBVm5gOnDIgDhOQgDgzASgmQAKgXARgRIABAIQAFBOAEBOQAbJzh5J+QgyEMguEPQh4LTCFLIQBqIsG+FZQAuAjA5gHQBYj7iCkEQgcg5gWg+QjiqTgkq7Qgbn8Apn9QAyphiBpAIgJgnQgIghgBghIAAgIIAFAQIARA1QAuCVAaCGQAeClAZGpQAYGpgRIvQgRIsCMIqQCLIqB8EkQB7Eji0DTQkGgYiri9g");
	this.shape_11.setTransform(249.5,624.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("Aj6fNQlunHg2poQg0pFA9pDQAynXgynOQgKhdgOhcQAOiCAViAQAJg3AFg4QALCLAICOQAHCOAFCRQAHD5gID3QgZK3A7K4QA+LbHtILIACACIgCAGQgEAMgCAMQgBAOgLAKQguAXgpAAQhIAAg4hGgEAEsAgBQkNhVigjoQkWmOhAnsQhWqPAgqQQAbo3hnolQgPhRgShQIADgpQAEhkAVhbQABAUAHAXIAWBRQBxGxAQG/QAbLtBkLsQBsMoInI5IAWAVQAKAdABAfQABAgAGAiQgYAIgWAAQgRAAgQgGgALxf1Qn/jsjkoGQkiqXgsrcQgQkTgLkQQgbqvi6p/IgXhNQABgDAFgBQAYABATAPIAGAFQAIAgAPAeIAOAcQEDIYBYJgQBKH5CLHpQDAKiFwJPQAjA4AoAxQC6DggdEIQgZAJgYAAQgeAAgdgNgAtJOjQg2nPBLnJQBEmXgCmQQAAgzgBgzQgKAAgBAIIgGA1QgGggAMgrQAtiaAVifQABCCgCCDQgJGggvGfQhIKBBsKIQA1E4CHELQkBlkgznAg");
	this.shape_12.setTransform(323.3,613.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8A0000").s().p("AAgfiQgHA6iPAVQieAXhliHQgggrgegsQhBADhDhXQkglshBngQhEn2BPnsQBEmtA0mjIAGg1QABgIAKAAQABAzAAAzQACGQhEGZQhLHHA2HPQAzHAEBFkQiHkLg1k4QhsqIBIqBQAvmfAJmgQACiDgBiCIAAgnQgBhEAKg2IAGAiQAOBcAKBdQAyHOgyHXQg9JDA0JFQA2JoFuHHQBYBtB/g+QALgKABgOQACgMAEgMIACgGIgCgCQntoLg+rbQg7q4AZq3QAIj3gHj5QgFiRgHiOQgIiOgLiLIgEg0IAGAbQASBQAPBRQBnIlgbI3QggKQBWKPQBAHsEWGOQCgDoENBVQAjAMAsgOQgGgigBggQgBgfgKgdIgWgVQono5hssoQhkrsgbrtQgQm/hxmxIgWhRQgHgXgBgUQgEg0AYgpIADAJIAXBNQC6J/AbKvQALEQAQETQAsLcEkKXQDiIGH/DsQA1AYA3gUQAdkIi6jgQgogxgjg4QlwpPjAqiQiLnphKn5QhYpgkDoYIgOgcQgPgegIggIgCgJIANAVIAIANQBZCWA9CKQBCCaB3GZQB3GZBsIkQBsIiEFH8QEEH9C6EAQC5EBiAD2QkEAjjRiSIAAADQAOA6gaA2QgCAFgEAFQhEASg+AAQiKAAh1hZg");
	this.shape_13.setTransform(325.4,616.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AjbagQnClphVpBQhGncghnhQgdmigtmfIgajdIAKgrIAhh7QgCAnAHAuIAHA1QA2GdAaGgQAHB9ACB3QAJJGD7H+QCxFqEREqQBvB8CNBNIgBACIgGAOIgGAPIgGAOQgmAGglAAQiXAAh7hkgAFybSQl3ilj3lWQiijihqkBQjLnvgioXQgkovhaogIgQhgIAniPQAWhQAThQIADCnQAGDDAMDNQAmJqCxJHQDhLpH5JZQC4DaDpBqQgNBshUAAQgpAAg4gYgArTWWQhSi+gwjFQhznSAUnxQARmwglmqIgMh7QgUAvgIA6QgLgmAQgyQAQg2AAg6QACh0AWhvQgBC4AMDHIAGBXQAhHTAGHXQAHKCEmItQCCD1DSCDQlAgMiJk+gAEoVzQnfnfjop4QiLl5g/mQQhcpLhZpGIgTh5IAAgCIAEgEIAGgDIAJgCIAAgBQA3AGAUAvQATArAMAsQANAsAOArQAFANgDAOIAAAAIgnh2QgPAyAJAzIAAADQBVH0DCHTQBzEUCBEVQEtKCHqIOQArAvAyAhQETC0AnEaIgxABQmBAAkbkZg");
	this.shape_14.setTransform(343.9,578.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8A0000").s().p("AgYcnQhNgThGgdQiWB5jJiQQlOjvhmmbQh8nuAdoWQAWmXgSmYQgCg6AHgyQAHg6AVgvIAMB7QAlGqgSGwQgUHxBzHSQAxDFBSC+QCJE+FAAMQjSiDiCj1QkmotgIqCQgFnXginTIgFhXQgMjHAAi4IABhLIAFAtIAaDdQAuGfAcGiQAhHhBGHcQBWJBHBFpQCaB8DEgeIAFgOIAGgPIAGgOIABgCQiKhNhxh8QkRkqiylqQj7n+gIpGQgCh3gIh9QgZmgg3mdIgHg1QgGguABgnQABgqAKghIAEAVIARBgQBaIgAjIvQAjIXDLHvQBpEBCjDiQD2FWF4ClQCuBMAUigQjqhqi3jaQn5pZjirpQiwpHgmpqQgNjNgFjDIgDinIgBgUIACANIATB5QBaJGBcJLQA/GQCLF5QDnJ4HgHfQEtErGggTQgokakSi0QgzghgrgvQnqoOksqCQiCkVhykUQjCnThVn0IgBgDQgJgzAPgyIAnB2QBlE3BeFFQBdE9CTEkQEuJWGSIeQC+ECD9DBQEIDJiBEJQjeABi+hFQgRDRkAhFQhOgVhHggQgOBrhwAAQgkAAgtgLg");
	this.shape_15.setTransform(347.5,582.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AkMalQm0l7g/pDQg0negOnjQgMmjgemgIgRjeIAMgrIAlh5QgDAnAFAuIAFA1QAmGfAJGhQADB9gCB3QgOJGDnIHQCkFwEFE1QBsCACIBTIgBACIgHAOIgGAOIgGAOQgeADgcAAQihAAh/hugAE/btQlxi0jplfQiajnhfkGQi4n2gOoXQgPoxhEojIgNhhIAsiNQAZhPAXhPQgDBTgBBUQgCDDAFDOQAOJqCaJOQDFLwHiJtQCvDhDlByQgRBphQAAQgpAAg7gcgAr5WHQhLjBgojHQhinVAnnwQAjmvgVmsIgHh7QgXAugJA6QgKgnARgxQASg1ADg6QAGh0AahuQgHC4AEDHIACBXQAQHUgNHXQgRKCERI3QB4D7DNCLQk/gYh9lEgAEDWLQnNnxjPqAQh9l/gwmSQhFpOhDpIIgPh6IABgCIAEgEIAGgCIAJgCIAAgBQA3AIASAvQASAsAKAtQALAtANArQAEANgDANIgBABIgih4QgRAyAHAzIAAADQBCH3CwHaQBoEZB3EYQETKOHWIhQApAvAxAkQEMC+AcEcIgHAAQmcAAkek0g");
	this.shape_16.setTransform(338,586.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8A0000").s().p("Ag6czQhMgWhFggQiaB0jEiXQlFj8hWmfQhonyAxoUQAlmWgCmZQAAg6AJgxQAKg6AWgvIAHB8QAVGrgiGvQgnHwBhHWQApDGBKDCQB9FDFAAYQjNiLh5j6QkQo3ARqCQANnXgQnVIgChWQgFjHAIi5IADhLIAEAuIASDdQAdGhANGiQAOHjA0HeQA/JDG0F7QCUCCDFgXIAGgOIAHgOIAGgOIABgCQiHhThth/QkFk1ijlwQjooIAOpGQADh2gDh9QgJmignmeIgFg1QgFguADgnQADgqALgiIADAWIANBhQBFIjAOIwQAOIXC4H3QBgEFCaDnQDpFgFxCzQCrBTAZifQjkhziwjhQnhpsjFrxQiapOgPpqQgEjNACjEQABhUAChSIAAgUIACANIAOB6QBDJIBGJOQAwGSB8F/QDQKAHMHwQEhE3GhgDQgdkbkLi/QgygjgpgwQnVohkUqNQh2kZhokYQixnbhBn3IgBgDQgHgyARgyIAjB3QBZE7BRFIQBRFBCIEpQEWJhF9ItQC0EJD2DKQEADTiLEFQjegIi8hMQgZDQj9hPQhMgXhHgjQgRBmhoAAQglAAg0gPg");
	this.shape_17.setTransform(339.5,591.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("An5ZKQjljjhokxQjlqXCJquQARhTAThXQg5GOAZGZQAsLFH0HrQECD9E7BaQmLAAktkrgABfcUQhIgeg+goQkri7jEkdQmKo8A6rCQAnnTBMnDQAjjRArjNQgdBVgaBZQAeiFA4iAQB0kKCkjXQAGABAEADIAEAEQgYBGgUBHQhOESghElQhBJFBlI0QCVNELRIHQFGDpEBEcQl3ASlZjKQjdiBi4ipQnwnBhcqJQgulCAYlGQAim+BumlQBAj0BZjsQhKBigtCIQgfBegdBiQg5DDgoDIQhdHOACHjQABFeCDE7QEOKJJbFnQDFB0DWA3QhXAVhYAAQigAAijhFgAlf9rIAFAGQACACABADIgXA4IAPhDg");
	this.shape_18.setTransform(312.5,593.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8A0000").s().p("AABeNQrsjVjArnQgrikgWirQhRphCOpKQAri0BZjaQAgiCAlh9QAahZAdhWQgrDOgjDQQhMHEgnHSQg6LDGKI8QDEEdErC7QA+AoBIAeQD9BrD1g7QjWg3jFh1QpblmkOqJQiDk8gBlcQgCnkBdnOQAojIA5jEQAdhhAfheQAtiJBKhhQhZDrhAD0QhuGlgiG/QgYFGAuFCQBcKJHwHBQC4CpDdCBQFZDKF3gTQkBkblGjpQrRoHiVtEQhlo0BBpFQAhkmBOkRQAUhIAYhGIAEgMIgDANIgPBEQiBJkAMKPQANLDGDJAQAqBAA1A7QGaG+H7FUQCnBwhKCSQgMAWgeAAQh3AAhzgRQgJA+hPAFQjAAMiugjQg2A8hiAAQg5AAhIgVgAusk3QiJKuDlKXQBoExDlDjQEtEqGLABQk7hakCj9Qn0nrgsrFQgZmZA5mPQgTBYgRBTg");
	this.shape_19.setTransform(313.5,597.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("ADIdPQrmiIhXrhQgmlCBElAQBsn3D1nQQDom4FAluQB9iPCKiDQjwC2jCDhQjCDiiVEOQihEjiLEsQkpKBCOK5QAhCjBRCQQCtEzEcB9QgagBgagHQrrjHAJsCQAIq6FPpdQEhoQGXm7QA2g7A5g6QghAZggAaQAdggArgeQDfiZDkiLICahcQAFAVgDAUQhmBXhgBdQhiBehcBlIjPDyQlRGtjLINQjpJcCaJ/QAnCiBlCFQD4FLFBEeIgcAAQhMAAhJgNgANy8yQgJBCheA4IgUAMQA9hEA+hCg");
	this.shape_20.setTransform(189.1,591.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8A0000").s().p("ABBdJQgoA5iVggQqjiPhYqRQhaqhELpjQEPpsHQnsQBjhoBshYQAggaAhgZQg5A6g2A7QmXG7khIQQlPJdgIK6QgJMCLrDHQAaAHAaABQkch9itkzQhRiQghijQiOq5EpqBQCLksChkjQCVkODCjiQDCjhDwi2QiKCDh9CPQlCFujmG4Qj1HQhsH3QhEFAAmFCQBXLhLmCIQBXAQBagDQlBkej4lLQhliFgniiQiap/DppcQDLoNFRmtIDPjyQBchlBiheQBghdBmhXQg+BCg9BEQjfD5jMEOQiTDDh9DOQhkC6haDEQkZJkCLKfQBgHPGHEnQAwAkA1AgQCcBeguCKQgJAdgkABIgjAAQinAAiPgng");
	this.shape_21.setTransform(186.2,597.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("A5vTQQiIj6BqkUQD3qEJOmFQI8l8KOjQQHuidHxhyQCpgnCpgiQAFADAEAEQgBBFgjAqIgBABIAAAAQioAViuAnIgXgCIABAHQh8AdiAAmQlFBhk4CBQqFELoLHPQoYHZjDKeQgeBnhVA5QgPAJgNAAQgXAAgQgcgA2IBKQHAoOJ/kbQHojaIKhzQqSC0pYFGQpDE5lwIRQhsCbhACqQBIkeDQj1gAaXx0Qg0A8h5AEIgJAAIC2hAgAaXx0IAAAAg");
	this.shape_22.setTransform(101.8,533.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8A0000").s().p("A5rT1QhphFADiEQAChJAIhGQgjhNANhuQAnleDYkhQGfomJ7kvQM1mHOUhbIgWAMQDogvDogkQAKADAIAEIARAKIgCABQiqAiipAnQnxBynuCdQqODQo7F8QpPGFj3KEQhpEUCID6QAZAuApgbQBVg5AehnQDDqeIZnZQIKnPKFkLQE5iBFEhhQCAgmB9gdIAWgFQCugnCngVIi1BAQmaCPmiCHQomCxnNFWQpHGslXJ1Qh0DVhQDlQgpB2hSAAQgwAAg9gngAkdr9Qp+EbnBIOQjQD1hHEeQA/iqBsibQFwoRJEk5QJYlGKRi0QoKBznoDag");
	this.shape_23.setTransform(97.3,536.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0000").s().p("AeoMPQhSgLg3glIgBABQosl3mXioQluiYl5iEQu3lVugFkQhRAfhRAbQg0ASgKgYQg6iEB3hnIAEgCIAJgEQAFgCADgEIAEgFIAEgGQAPgLARgLQOYo1P/G9QKNEcJDGnQDuCuDsCYQBqBEBqBAIAAAAIAAABQAcArgtAAIgTgCgAb5JlIABAAIgCgEgAakHqQgFgKABgLIgJALQiXh2iehxQmzk2nUkCQpblOq5goQjRAGjRAlQknA0joCXQEBkQGqgyQJGhEIPD1QJ9EnJOF4QA+AoA3AwQCrCZC0B+QA0AlA1AjQBZBhBJBsQiLh3iRhyg");
	this.shape_24.setTransform(74.2,341.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8A0000").s().p("AVoIiQjBhto2kAQo2j+rwgTQrygUmZDZQhWAuhEg3Qh8hhBxiHQAug3AxgwQgSguAlguQCfjEDkhuQEkiLFCglQLJgMJYFfQHBEHG8EZQFUDZENEqIglgYQg1gjg1glQizh+isiZQg2gwg/goQpNl4p+knQoOj1pHBEQmqAykBEQQDoiXEng0QDRglDRgGQK5AoJbFOQHVECGzE2QCeBxCXB2IAMAKQCRByCLB3IArAkIgegRIgBgBQhqhAhqhEQjsiYjuiuQpDmnqNkcQv/m9uYI1QgRALgOALIgEAGIgFAFQgDAEgEACIgJAEIgFACQh2BnA5CCQALAYA0gSQBQgZBRgfQOhlkO3FVQF4CEFvCYQGXCoIrF3IAzAjQlaifjAhtg");
	this.shape_25.setTransform(69.3,337.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.5,-0.2,245.3,432);


(lib.scrollinglandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mountains("synched",0);
	this.instance.setTransform(800,-78.7,1,1,0,0,0,800,76.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},29).wait(1));

	// Layer 2
	this.instance_1 = new lib.mountains("synched",0);
	this.instance_1.setTransform(1000,-101.4,1.25,1.286,0,0,0,800,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-201.2,2000,200.3);


(lib.head_feathers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feather("synched",0);
	this.instance.setTransform(46,126.6,0.562,0.305,0,-21.2,-22.6,0.1,148.8);

	this.instance_1 = new lib.feather("synched",0);
	this.instance_1.setTransform(53.9,142.2,0.67,0.465,0,-13.1,-17.3,-0.2,148.7);

	this.instance_2 = new lib.feather("synched",0);
	this.instance_2.setTransform(58,145.3,0.533,0.422,0,-5.8,-8,-0.3,149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,5.6,60.1,138.3);


(lib.bird_flight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wing_right
	this.instance = new lib.wing_right("synched",0);
	this.instance.setTransform(269.6,435.7,1,1,0,0,0,269.6,411.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:157.6,regY:420.3,x:157.6,y:443.8,startPosition:1},0).wait(1).to({y:442.5,startPosition:2},0).wait(1).to({y:439.6,startPosition:3},0).wait(1).to({y:436.8,startPosition:4},0).wait(1).to({y:435.5,startPosition:5},0).wait(1).to({regX:269.6,regY:411.9,x:269.6,y:426.9,startPosition:6},0).wait(1).to({regX:157.6,regY:420.3,x:157.6,y:435.5,startPosition:7},0).wait(1).to({y:436.3,startPosition:8},0).wait(1).to({y:438.3,startPosition:9},0).wait(1).to({y:441.2,startPosition:10},0).wait(1).to({y:443.1,startPosition:11},0).wait(1).to({y:443.9,startPosition:12},0).wait(1).to({regX:269.6,regY:411.9,x:269.6,y:435.7,startPosition:13},0).wait(1));

	// body_feathers
	this.instance_1 = new lib.body_feathers("synched",0);
	this.instance_1.setTransform(254.1,563,1,1,0,0,0,37,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:561.4},0).wait(1).to({y:554.5},0).wait(1).to({y:539.2},0).wait(1).to({y:524.2},0).wait(1).to({y:517.7},0).wait(1).to({y:516.2},0).wait(1).to({y:517.3},0).wait(1).to({y:521.9},0).wait(1).to({y:532.4},0).wait(1).to({y:547.5},0).wait(1).to({y:557.5},0).wait(1).to({y:561.9},0).wait(1).to({y:563},0).wait(1));

	// eye
	this.instance_2 = new lib.eye("synched",0);
	this.instance_2.setTransform(442.9,473);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:471.4},0).wait(1).to({y:464.5},0).wait(1).to({y:449.2},0).wait(1).to({y:434.2},0).wait(1).to({y:427.7},0).wait(1).to({y:426.2},0).wait(1).to({y:427.3},0).wait(1).to({y:431.9},0).wait(1).to({y:442.4},0).wait(1).to({y:457.5},0).wait(1).to({y:467.5},0).wait(1).to({y:471.9},0).wait(1).to({y:473},0).wait(1));

	// beak
	this.instance_3 = new lib.beak();
	this.instance_3.setTransform(645.9,579.9,1,1,0,0,0,110.6,66.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:74.6,regY:42,x:609.9,y:553.7},0).wait(1).to({y:546.8},0).wait(1).to({y:531.5},0).wait(1).to({y:516.5},0).wait(1).to({y:510},0).wait(1).to({regX:110.6,regY:66.6,x:645.9,y:533.1},0).wait(1).to({regX:74.6,regY:42,x:609.9,y:509.6},0).wait(1).to({y:514.2},0).wait(1).to({y:524.7},0).wait(1).to({y:539.8},0).wait(1).to({y:549.8},0).wait(1).to({y:554.2},0).wait(1).to({regX:110.6,regY:66.6,x:645.9,y:579.9},0).wait(1));

	// body
	this.instance_4 = new lib.body("synched",0);
	this.instance_4.setTransform(375.6,521.1,1,1,0,0,0,204.1,188.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:519.4},0).wait(1).to({y:512.6},0).wait(1).to({y:497.2},0).wait(1).to({y:482.3},0).wait(1).to({y:475.8},0).wait(1).to({y:474.2},0).wait(1).to({y:475.4},0).wait(1).to({y:480},0).wait(1).to({y:490.4},0).wait(1).to({y:505.5},0).wait(1).to({y:515.5},0).wait(1).to({y:519.9},0).wait(1).to({y:521.1},0).wait(1));

	// head_feathers
	this.instance_5 = new lib.head_feathers("synched",0);
	this.instance_5.setTransform(525.1,363.3,1,1,0,0,0,35.5,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:73.1,y:361.7},0).wait(1).to({y:354.9},0).wait(1).to({y:339.5},0).wait(1).to({y:324.6},0).wait(1).to({y:318.1},0).wait(1).to({regY:73,y:316.4},0).wait(1).to({regY:73.1,y:317.7},0).wait(1).to({y:322.3},0).wait(1).to({y:332.7},0).wait(1).to({y:347.8},0).wait(1).to({y:357.8},0).wait(1).to({y:362.2},0).wait(1).to({regY:73,y:363.3},0).wait(1));

	// backwing
	this.instance_6 = new lib.wing_right("synched",0);
	this.instance_6.setTransform(349.1,443.2,0.95,0.95,0,-28.2,151.8,269.6,411.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:157.6,regY:420.3,x:446.7,y:399.3,startPosition:1},0).wait(1).to({y:396.6,startPosition:2},0).wait(1).to({y:390.4,startPosition:3},0).wait(1).to({y:384.4,startPosition:4},0).wait(1).to({y:381.8,startPosition:5},0).wait(1).to({regX:269.6,regY:411.9,x:349.1,y:424.4,startPosition:6},0).wait(1).to({regX:157.6,regY:420.3,x:446.7,y:381.7,startPosition:7},0).wait(1).to({y:383.5,startPosition:8},0).wait(1).to({y:387.7,startPosition:9},0).wait(1).to({y:393.8,startPosition:10},0).wait(1).to({y:397.8,startPosition:11},0).wait(1).to({y:399.5,startPosition:12},0).wait(1).to({regX:269.6,regY:411.9,x:349.1,y:443.2,startPosition:13},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.5,23.6,645.6,690.2);


// stage content:



(lib._10End_build = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.movieClip_2.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			alert("Mouse clicked");
			/* Stop a Movie Clip
			Stops the specified movie clip on stage.
		
			Instructions:
			1. Use this code for movie clips that are currently playing.
			*/
		
			this.movieClip_2.stop();
			// End your custom code
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bird
	this.movieClip_2 = new lib.bird_flight();
	this.movieClip_2.setTransform(308.9,184,0.318,0.318,0,0,0,342.2,342.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

	// landscape
	this.instance = new lib.scrollinglandscape();
	this.instance.setTransform(1000,298.8,1,1,0,0,0,1000,-101.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#33CCFF","#000099"],[0.553,1],0,0,0,0,0,458.3).s().p("Eg+fAfPMAAAg+eMB8/AAAMAAAA+eg");
	this.shape.setTransform(400,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,200,2000,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;