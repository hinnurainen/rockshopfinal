class Background {
    constructor(el) {
        this.el = el;
    }

    scrollSideway = function (distance) {
        document.getElementById('background').style.backgroundPosition = `${distance / 10}px 0`;
    }

    init = function () {
        const bg = document.createElement('div');
        bg.id = 'background';
        bg.setAttribute('style', 'z-index: -1')
        bg.style.top = '0';
        bg.style.left = '0';
        bg.style.backgroundImage = 'url(img/bg.png)';
        bg.style.backgroundRepeatY = 'no-repeat';
        bg.style.position = 'fixed';
        bg.style.width = '100%';
        bg.style.height = '100%';

        this.el.appendChild(bg);
    }
}

class Bird { // blueprint to create objects of the same class
    /*legs = 2;
    wings = 2;*/

    /**
     * 
     * @param {number} width 
     * @param {DOMNode} el 
     */

    constructor(width, el) {
        this.width = width;
        this.el = el; // the place where the bird should appear
        this.movingSpeed = 500 + Math.random() * 500;
    }

    fly = function () {
        console.log('flap flap');
        return 'I can fly';
    }

    showYourself = function () {
        const newBird = document.createElement('img');

        this.birdId = 'bird' + Math.random() * 10;

        newBird.id = this.birdId;
        newBird.src = 'img/bird.png';
        newBird.width = this.width;
        newBird.style.position = 'fixed';
        newBird.style.top = Math.random() * 100 + 'px';
        this.initialLeftPosition = Math.random() * 500;
        newBird.style.left = this.initialLeftPosition + 'px';

        this.el.appendChild(newBird);
    }

    scrollSideway = function (distance) {
        this.initialLeftPosition += distance / this.movingSpeed;
        document.getElementById(this.birdId).style.left = `${this.initialLeftPosition}px`;
    }
}

class Pipe {
    constructor(width, el) {
        this.width = width;
        this.el = el; // the place where the pipe should appear
        this.pipeMovingSpeed = 700 + Math.random() * 700;
    }

    appear = function () {
        const newPipe = document.createElement('img');

        this.pipeId = 'pipe' + Math.random() * 4;

        newPipe.id = this.pipeId;
        newPipe.src = '/img/pipe.png';
        newPipe.width = this.width;
        newPipe.style.position = 'fixed';
        newPipe.style.top = Math.random() * 100 + 'px';
        this.initialLeftPosition = Math.random() * 300;
        newPipe.style.left = this.initialLeftPosition + 'px';

        this.el.appendChild(newPipe);
    }

    move = function (distance) {
        this.initialLeftPosition += distance / this.pipeMovingSpeed;
        document.getElementById(this.pipeId).style.left = `${this.initialLeftPosition}px`;
    }
}

const background = new Background(document.body);
background.init();

birds = [];
for (let i = 0; i < 10; i++) {
    birds[i] = new Bird(
        Math.random() * 500,
        document.body
    );
    birds[i].showYourself();
}

pipes = []
for (let i = 0; i < 4; i++) {
    pipes[i] = new Pipe(
        Math.random() * 700,
        document.body
    );
    pipes[i].appear();
}

document.addEventListener('scroll', (e) => {
    background.scrollSideway(window.pageYOffset);

    for (let i = 0; i < 10; i++) {
        birds[i].scrollSideway(window.pageYOffset);
    }

    for (let i = 0; i < 4; i++) {
        pipes[i].move(window.pageYOffset);
    }
});

/* class Peacock extends Bird {
    name = 'Peacock';
    spreadTail = function () {
        console.log('Look at my tail!')
    }
}*/

/*const bird1 = new Bird(Math.random() * 500, document.body); // instance of class Bird */
/*console.log(bird1);
console.log(bird1.fly());
bird1.name = 'Male Peacock';*/



/*bird1.showYourself();*/

/*const bird2 = new Bird(); // instance of class Bird
bird2.showYourself();*/



/*const peacock1 = new Peacock();
const peacock2 = new Peacock();

console.log('Bird number one is : ');
console.log(bird1);

console.log('Peacock number one is : ');
console.log(peacock1);

const NUMBER_OF_BIRDS = 100;
const NUMBER_OF_PEACOCKS = 100;

let birds = [],

    console.log(`My bird has ${bird1.legs} legs`);
console.log(`My bird has ${bird1.wings} wings`);
console.log(`My bird can ${bird1.fly()}`);
*/

/*

const bird1 = {
    legs: 2,
    wings: 2,
    fly: function () {
        console.log('flap flap');
        return 'I can fly';
    }
};
const bird2 = {
    legs: 2,
    wings: 2,
    fly: function () {
        console.log('flap flap');
        return 'I can fly';
    }
};

const NUMBER_OF_BIRDS = 100;
const NUMBER_OF_PEACOCKS = 100;
let birds = [],

for (let i=0; i < NUMBER_OF_BIRDS; i++) {
    birds[i] = {
        legs: 2,
        wings: 2,
        fly: function () {
            console.log('flap flap');
        return 'I can fly';
        }
    }
}

for (let i=0; i < NUMBER_OF_BIRDS + NUMBER_OF_PEACOCKS; i++) {
    birds[i] = {
        legs: 2,
        wings: 2,
        name: 'peacock',
        spreadTail: function () {
            console.log('Look at tail!');
        }
        fly: function () {
            console.log('flap flap');
        return 'I can fly';
        }
    }
}

console.log(`My bird has ${bird1.legs} legs`);
console.log(`My bird has ${bird1.wings} wings`);
console.lbird1g(`My bird can ${bird1.fly()}`);

console.lbird1g(`My bird has ${bird2.legs} legs`);
console.log(`My bird 1has ${bird2.wings} wings`);
console.log(`My bird can ${bird2.fly()}`);

console.lbird1g(`My bird has ${birds[50].legs} legs`);
console.log(`My bird 1has ${birds[50].wings} wings`);
console.log(`My bird can ${birds[50].fly()}`);

*/