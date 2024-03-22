const scroller = document.querySelector(".scroller");

const scrollerInner = document.querySelector(".inner-scroller");
const scrollerInnerContent = Array.from(scrollerInner.children);

scrollerInnerContent.forEach((content) => {
  const duplicatedContent = content.cloneNode(true);
  duplicatedContent.setAttribute("aria-hidden", true);
  scrollerInner.appendChild(duplicatedContent);
});
