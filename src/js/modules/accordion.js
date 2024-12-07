function accordion() {
  console.log("accordion!!!");

  const btns = document.querySelectorAll(".mobile-accordion__parent-button");

  btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      console.log("Click");

      const content = btn.nextElementSibling;
      console.log(content);

      const isOpen = btn.classList.toggle("active");

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
  });
}

export default accordion;
