gsap.registerPlugin(ScrollTrigger);

// Find all the sections on the page
const sections = document.querySelectorAll("section");

// Loop through each section and animate the headings inside
sections.forEach((section) => {
  const headings = section.querySelectorAll("h1, h2, h3, h4, h5, h6,p");

  gsap.from(headings, {
    opacity: 0,
    y: -50,
    scale:1.1,
    duration: 0.8,
    stagger: 0.3, // Add a stagger value for a delay between animations
    scrollTrigger: {
        trigger: section, // Use the current section as the trigger element
        start: "top 70%", // Start the animation when the section is 80% from the top of the viewport
        end:"bottom 90%",
        scrub:true,
        // markers:true,
    },
  });

});


