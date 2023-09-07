const prev = document.getElementById("prev");
const next = document.getElementById("next");
const name = document.getElementById("name");
const details = document.getElementById("details");
const role = document.getElementById("role");
const image = document.getElementById("image");

const testimonialsArr = [
  {
    id: 1,
    image: "./images/image-tanya.jpg",
    name: "Tanya Sinclair",
    role: "UX Engineer",
    testimony:
      "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
  },

  {
    id: 1,
    image: "./images/image-john.jpg",
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    testimony:
      "If you want to lau the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer",
  },
];
function change(id) {
  name.innerHTML = testimonialsArr[id].name;
  details.innerHTML = testimonialsArr[id].testimony;
  image.src = testimonialsArr[id].image;
  role.innerHTML = testimonialsArr[id].role;
}

let num = 0;
change(num);

next.addEventListener("click", () => {
  if (num >= testimonialsArr.length - 1) {
    return;
  }
  num++;
  change(num);
});

prev.addEventListener("click", () => {
  if (num <= 0) {
    return;
  }
  num--;
  change(num);
});
