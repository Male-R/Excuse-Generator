/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

let excuseGenerator = () => {
  let who = [
    "My sister",
    "The cat",
    "My dog",
    "My mom",
    "My friend",
    "My brother",
    "The robot in my house"
  ];
  let action = [
    "broke my",
    "lost my",
    "hid my",
    "damaged my",
    "ate my",
    "destroyed my"
  ];
  let what = [
    "car keys",
    "house keys",
    "homework",
    "proyect",
    "lunch",
    "computer",
    "phone",
    "watch"
  ];
  let when = [
    "before the class",
    "this morning",
    "yesterday",
    "in the middle of the night",
    "while I was out"
  ];

  let whoIndex = who[Math.floor(Math.random() * 7)];
  let actionIndex = action[Math.floor(Math.random() * 6)];
  let whatIndex = what[Math.floor(Math.random() * 8)];
  let whenIndex = when[Math.floor(Math.random() * 5)];

  return whoIndex + " " + actionIndex + " " + whatIndex + " " + whenIndex;
};
