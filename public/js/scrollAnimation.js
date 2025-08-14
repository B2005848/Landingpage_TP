const parapraphs = document.querySelectorAll(".paragraph_service");
const imgcontainer = document.querySelector(".image-container");

document.addEventListener("scroll", () => {
  parapraphs.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("paragraph_service--visible");
    }
  });
  if (imgcontainer && isInView(imgcontainer)) {
    imgcontainer.classList.add("image-container--visible");
  }
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.top <
      (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  );
}
