const header = document.querySelector("header");
const sectionOne = document.querySelector(".section1");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
    //https://stackoverflow.com/questions/58622664/intersectionobserver-how-rootmargin-work
    rootMargin: "-50px 0px 0px 0px"
  };
  
  const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);
  
  sectionOneObserver.observe(sectionOne);



const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
