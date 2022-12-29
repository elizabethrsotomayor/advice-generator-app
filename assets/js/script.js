"use strict";

const API_URL = "https://api.adviceslip.com/advice";
const randomQuoteBtn = document.getElementById("random-quote");
const adviceQuote = document.getElementById("quote");
const adviceId = document.getElementById("advice-id");

randomQuoteBtn.addEventListener("click", function () {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const curSlipId = data.slip.id;
      const curSlipQuote = data.slip.advice;

      adviceQuote.innerText = curSlipQuote;
      adviceId.innerText = `Advice # ${curSlipId}`;
    });
});
