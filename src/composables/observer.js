export default function obeserveElement(element, animation, n) {
  const el = document.querySelectorAll(element);

  const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animation);
        if (n) {
          setTimeout(() => {
            entry.target.style.animation = "none";
          }, 1001);
        }
      } else {
        entry.target.classList.remove(animation);
        if (n) {
          entry.target.style = "";
        }
      }
    });
  });

  for (let i of el) {
    myObserver.observe(i);
  }
}
