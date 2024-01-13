function scrollToTop() {
  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 30);
  }
}




window.onload = function() {
  removeLoadingContainer();
};

function removeLoadingContainer() {
  // Hide the header while the GIF is playing
  document.getElementById("header").style.display = "none";

  // Remove the loading container after the animation and GIF have finished (adjust duration accordingly)
  setTimeout(function() {
      document.getElementById("loading-container").classList.add("loaded");
      // Show the header again after the GIF has finished
      document.getElementById("header").style.display = "flex";
  }, 7000); // Adjust the time based on your GIF duration
}


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let boxes = document.querySelectorAll(".box");

        boxes.forEach(function(box) {
            let boxTop = box.getBoundingClientRect().top;
            let boxBottom = box.getBoundingClientRect().bottom;

            if (boxTop < window.innerHeight && boxBottom >= 0) {
                box.classList.add("visible");
            } else {
                box.classList.remove("visible");
            }
        });
    });
});