
 //nav script code
const iconNav = document.querySelector(".icon-nav");
iconNav.addEventListener('click',function() {
  const  navBar = document.querySelector('.nav-1');
    navBar.classList.toggle("active");
    
});

//featured products hover effect
document.addEventListener("DOMContentLoaded", () => {
  const productImgContents = document.querySelectorAll(".featured-product-content");
  const cartIcons = document.querySelectorAll(".icon-hover");

  productImgContents.forEach((imgContent, index) => {
      imgContent.addEventListener("mouseover", () => {
          cartIcons[index].style.display = "block";
      });

      imgContent.addEventListener("mouseout", () => {
          cartIcons[index].style.display = "none";
      });
  });
});
