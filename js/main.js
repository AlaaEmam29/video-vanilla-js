"use strict";

const switchBtn = document.querySelector(".switch-btn"),
  video = document.querySelector(".video-container");
switchBtn.addEventListener("click", function () {
  if (switchBtn.classList.contains("slide")) {
    switchBtn.classList.remove("slide");
    video.play();
  } else {
    switchBtn.classList.add("slide");
    video.pause();
  }
});
window.addEventListener("load", function () {
  document.querySelector(".loading-screen").classList.add("hide-screen");
});
