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

//doubleclick the bus image


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
