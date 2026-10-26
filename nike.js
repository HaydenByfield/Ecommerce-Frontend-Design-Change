window.onload = function () {
  var video = document.querySelector(".video-design");
  video.play();

  const slides = document.querySelectorAll(".slide")
  let currentSlide = 0
  const sport_list = document.querySelector("#bt-transition-lst");

  const backward_btn = document.querySelector("#backward")
  const forward_btn = document.querySelector("#forward")

  console.log(sport_list)
  let current_index = 0;


  // Scrolls to the next options once forward button is selected
  forward_btn.addEventListener("click", (event) => {
    event.preventDefault();
    sport_list.scrollBy(
      {
        left: 400,
        behavior: "smooth"
      }
    )
  })

  // Scrolls to the previous options once the backward button is selected
  backward_btn.addEventListener("click", (event) => {
    event.preventDefault();
    sport_list.scrollBy(
      {
        left: -400,
        behavior: "smooth"
      }
    )
  })

  function UpdateSlide() {
    // Removes the current active class on the first image of index 0
    slides[currentSlide].classList.remove("active")

    // Increments the index to ensure it transitions to the next index
    // The Divisibility is used to by the slide length is to ensure it returns back to the first index after each rotation
    // Example 4 Images, Slide reach 4 % 4 = 0
    currentSlide = (currentSlide + 1) % slides.length;

    //Adds the new active class to the next slide 
    slides[currentSlide].classList.add("active")

  }

  // Calls the UpdateSlide class every 4 seconds
  setInterval(UpdateSlide, 4000);



}
