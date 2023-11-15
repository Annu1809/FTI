//  Identification tab
const nextId = document.getElementById("nextId");
const previousId = document.getElementById("previousId")
const image = document.getElementById("image");
const name = document.getElementById("name");
const about = document.getElementById("about");

const people = [
    {
        image: "images.png",
        name: "Erin Lindford",
        about: "Product Engineer"
    },
    {
        image: "beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
        name: "Susan Connor",
        about: "Graphic Designer"
    },
    {
        image: "avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.avif",
        name: " Rick Novak",
        about: "Analyst"
    },
    {
        image: "beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
        name: "Marie Broadbet",
        about: "Software Intern "
    },
    {
        image: "man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        name: "Ronald Barr",
        about: "Web Developer"
    }
]
function displayPerson(c) {
    image.src = people[c].image;
    name.innerText = people[c].name;
    about.innerText = people[c].about;
}

let c = 0;
previousId.addEventListener("click", function () {
    c = (c - 1 + people.length) % people.length;
    displayPerson(c);
});

nextId.addEventListener("click", function () {
    c = (c + 1) % people.length;
    displayPerson(c);
});
// Quote Generator
const quote = document.getElementById("quote");
const quoteButton = document.getElementById("quoteButton")
const quotes = ['1) " The harder you work for something , the greater you will feel when you achieve it. "',
    '2) " Don\'t watch the clock, do what it does, keep going."',
    '3) " Everyday is a chance to get better , don\'waste it. " ',
    '4) " It is often the small steps , not that gaint leaps that bring about the most lasting change. "',
    '5) " Believe in yourself and anything is possible. "',
    '6) " If your dreams don\'t scare you ,then they are too small. "',
    '7) " Never underestimate the investment you make in yourself "',
    '8) " Try a little harder to be a little better."',
    '9) " One day all your hard work will pay off. "',
    '10) " Success is not an accident, it is hard work.  "'];

let counter = 0;
quoteButton.addEventListener("click", function () {
    quote.innerText = quotes[counter];
    counter++;
    if (counter >= quotes.length) {
        counter = 0;
    }
})
// Digital Clock
const digitalClock = document.getElementById("digitalClock");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
function display() {
    const currentdate = new Date();
    const currentHours = currentdate.getHours();
    const currentMinutes = currentdate.getMinutes();
    const currentseconds=currentdate.getSeconds();

    hours.textContent = currentHours < 10 ? `0${currentHours}` : currentHours;
  minutes.textContent = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
  seconds.textContent = currentseconds < 10 ? `0${currentseconds}` : currentseconds;
}
display();
setInterval(display,1000);