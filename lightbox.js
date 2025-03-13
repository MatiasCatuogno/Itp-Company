document.addEventListener("DOMContentLoaded", function () {
 const lightbox = document.getElementById("lightbox");
 const lightboxImg = document.getElementById("lightbox-img");
 const closeBtn = document.querySelector(".close-btn");
 const prevBtn = document.querySelector(".prev-btn");
 const nextBtn = document.querySelector(".next-btn");
 let currentImgIndex = 0;
 let currentImages = [];

 document.querySelectorAll(".trabajo-item").forEach((item) => {
  item.addEventListener("click", function () {
   const mainImg = item.querySelector(".trabajo-item img").src;
   const additionalImgs = Array.from(item.querySelectorAll(".additional-images img")).map((img) => img.src);
   currentImages = [mainImg, ...additionalImgs];
   currentImgIndex = 0;
   showLightbox();
  });
 });

 function showLightbox() {
  lightboxImg.src = currentImages[currentImgIndex];
  lightbox.style.display = "flex";
 }

 function hideLightbox() {
  lightbox.style.display = "none";
 }

 function showNextImage() {
  currentImgIndex = (currentImgIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentImgIndex];
 }

 function showPrevImage() {
  currentImgIndex = (currentImgIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentImgIndex];
 }

 closeBtn.addEventListener("click", hideLightbox);
 nextBtn.addEventListener("click", showNextImage);
 prevBtn.addEventListener("click", showPrevImage);

 lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
   hideLightbox();
  }
 });
});