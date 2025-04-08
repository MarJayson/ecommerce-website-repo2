// **********************************************************************************************NAVBAR

let navbar = document.getElementById("navbar");

function togglebtn() {
  navbar.classList.toggle("hidemenu");
}

// **********************************************************************************************TESTIMONIAL-STORIES

// GET ELEMENTS FROM THE DOM
const testimonial = document.querySelector(".testimonial");
const clientImg = document.querySelector(".testimonial-img");
const clientName = document.querySelector(".testimonial-name");
const clientSubtitle = document.querySelector(".testimonial-sub-title");

// TESTIMONIAL SLIDE ID
let id = 0;

// TESTIMONIAL SLIDES DATA
const testimonials = [
  [
    "images/travellers1.jpg",
    "images/travellers2.jpg",
    "images/travellers3.jpg",
  ],
  ["John Doe", "Jane Smith", "Alice Brown"],
  [
    "<blockquote>My trip to Bali was magical. Stunning sunsets, vibrant culture, and amazing food. I can't wait to return and discover more hidden gems!</blockquote>",
    "<blockquote>I had the most incredible time in Paris! The Eiffel Tower at night was mesmerizing, and the food was to die for. Can’t wait to go back!</blockquote>",
    "<blockquote>The mountains of Nepal were an experience of a lifetime. The serenity, the people, and the stunning landscapes made this journey unforgettable.</blockquote>",
  ],
];

// FUNCTION TO SWITCH TESTIMONIAL
function switchTestimonial() {
  // ADD FADE-OUT EFFECT
  testimonial.style.transition =
    "opacity 0.5s ease-in-out, transform 1s ease-in-out";
  testimonial.style.opacity = "0";
  testimonial.style.transform = "translateX(-50px)";

  setTimeout(() => {
    // REMOVE TRANSITION TO RESET POSITION
    testimonial.style.transition = "none";
    testimonial.style.transform = "translateX(50px)";

    // UPDATE TESTIMONIAL CONTENT
    id = (id + 1) % testimonials[0].length;
    clientImg.style.backgroundImage = `url('${testimonials[0][id]}')`;
    clientName.innerHTML = testimonials[1][id];
    clientSubtitle.innerHTML = testimonials[2][id];

    setTimeout(() => {
      // ADD FADE-IN EFFECT AND MOVE BACK TO CENTER
      testimonial.style.transition =
        "opacity 0.5s ease-in-out, transform 1s ease-in-out";
      testimonial.style.opacity = "1";
      testimonial.style.transform = "translateX(0)";
    }, 100); // Short delay before transitioning back
  }, 500); // Wait for fade-out before switching content
}

// RUN INTERVAL EVERY 6 SECONDS
setInterval(switchTestimonial, 6000);
