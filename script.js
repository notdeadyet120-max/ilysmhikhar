function startExperience() {
  document.getElementById("bgMusic").play();

  document.getElementById("letter").scrollIntoView({
    behavior: "smooth"
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".glass").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 1s ease";
  observer.observe(el);
});
