import { Application, Easing } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
const helloBtn = document.getElementById("helloBtn");
const handBtn = document.getElementById("handBtn");
app
  .load("https://prod.spline.design/5V4CRzGkQ3z79d9U/scene.splinecode")
  // Wait for the scene to be loaded
  .then(() => {
    // Retrieve the objects from your scene
    const hello = app.findObjectByName("Text ");
    const hand = app.findObjectByName("Hand-2");

    // We will rotate through those states for the Hello text when clicking on the corresponding button
    const helloStates = ["Base State", "Pink", "Rotate"];
    helloBtn.addEventListener("click", () => {
      const currentIndex =
        hello.state === undefined ? 0 : helloStates.indexOf(hello.state);
      hello.state = helloStates[(currentIndex + 1) % helloStates.length];
    });

    // We will move the hand either to State or to Base State on button click
    let toggled = false;
    handBtn.addEventListener("click", () => {
      hand.transition({
        to: toggled ? null : "State",
        duration: 1000,
        easing: Easing.EASE_IN_OUT,
      });
      toggled = !toggled;
    });
  });
