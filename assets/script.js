// console.log('hello world 123');

console.log('2 + 2');
console.log('2' + '2');
console.log(2 + 2);

// storing variable as 3
// var x = 3;

// console.log(x + 2);

// here is a comment!

/*

here is a
multi line
comment

*/

const colors = 
    [  "lemonchiffon",
        "skyblue",
        "snow",
        "wheat",
        "green"
    ];

console.log(colors);

const randomColor = 
colors[Math.floor(Math.random() * colors.length)];

console.log(randomColor);

document.body.style.backgroundColor = randomColor;

// when you click #flower, make background color random

document.querySelector("#flower").addEventListener("click", function () {
    console.log("clicked on flower");
    const colors = 
    [  "lemonchiffon",
        "skyblue",
        "snow",
        "wheat",
        "green"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});