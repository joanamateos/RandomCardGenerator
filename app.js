import "bootstrap";
import "./style.css";

window.onload = () => {
  let allsuits = document.querySelectorAll(".suitlogo");
  let suit = genRandomSuit();
  for (var i = 0; i < allsuits.length; i++) {
    allsuits[i].innerHTML = suit;
    if (suit === "&hearts;" || suit === "&diams;") {
      allsuits[i].classList.toggle("red");
    }
  }

  document.querySelector(".number").innerHTML = genRandomNumber();
};
let genRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let genRandomSuit = () => {
  let suit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
