// Your code goes here


// Changing the background of the destinations mouseenter event.

const destiA = Array.from(document.querySelectorAll(".destination"))


document.querySelector(".destination");
destiA[0].addEventListener('mouseenter', (event) => {
  event.target.style.backgroundColor = 'pink';
});

document.querySelector(".destination");
destiA[1].addEventListener('mouseenter', (event) => {
  event.target.style.backgroundColor = 'pink';
});


document.querySelector(".destination");
destiA[2].addEventListener('mouseenter', (event) => {
  event.target.style.backgroundColor = 'pink';
});


//mouseleave event
destiA.forEach( arr1 => {
arr1.addEventListener('mouseleave', (event) => {
event.target.style.backgroundColor = 'white'
},
)
}
);

//doubleclick the middle images


const contentImg = Array.from(document.querySelectorAll(".img-content img"))


contentImg.forEach( arr1 => {
  arr1.addEventListener('dblclick', (event) => {
    event.target.style.display = "none";

},
)
}
);


// click

const sampleBtn = Array.from(document.querySelectorAll(".btn"))

sampleBtn.forEach( arr1 => {
  arr1.addEventListener('click', (event) => {
    alert("You have been signed up!")

},
)
}
);

// wheeling function



function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 1.2);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('header img');
el.onwheel = zoom;


// animationStart event

const boatPic = document.querySelector(".content-destination")

boatPic.addEventListener('animationstart', () => {
  alert('O god what did you do you my website!');
});

// click event to stop the spining

boatPic.addEventListener('click', (event) => {
    boatPic.style.animation = "none"

})


// When true, moving the mouse draws on the canvas


var isDrawing = false;
var x = 0;
var y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// The x and y offset of the canvas from the edge
// of the page.
const rect = myPics.getBoundingClientRect();

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {

  myPics.style.backgroundColor = "purple"

});

myPics.addEventListener('mousemove', e => {
   myPics.style.backgroundColor = "blue"

});

myPics.addEventListener('mouseup', e => {
  myPics.style.backgroundColor = "black"
 });


