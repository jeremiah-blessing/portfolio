let options = {
  rootMargin: "0px",
  threshold: 0.2,
};
var callback = (entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry.target.offsetTop);
    if (entry.isIntersecting) {
      entry.target.classList.add("ractive");
      entry.target.classList.remove("rinactive");
      // var offset = { top: 0 };
      // anime({
      //   targets: offset,
      //   top: [document.documentElement.scrollTop, entry.target.offsetTop],
      //   easing: "easeOutElastic",
      //   duration: 800,
      //   update: (anim) => {
      //     window.scroll({
      //       top: offset.top,
      //     });
      //   },
      // });
      anime({
        targets: ".ractive .p-name .letter",
        translateY: [-100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 50 * i,
      });
    } else {
      entry.target.classList.add("rinactive");
      entry.target.classList.remove("ractive");
    }
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

let observer = new IntersectionObserver(callback, options);
let techStacks = document.querySelectorAll(".tech-stacks");
techStacks.forEach((techStack) => {
  observer.observe(techStack);
});

// var textWrapper = document.querySelector('.ml16');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var pNames = document.querySelectorAll(".p-name");
pNames.forEach((pName) => {
  pName.innerHTML = pName.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
});

window.onload = function () {
  var hhi = document.querySelector(".h-hi");

  hhi.innerHTML = hhi.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  var ifsd = document.querySelector(".h-ifsd");
  ifsd.innerHTML = ifsd.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  var ictw = document.querySelector(".h-ictw");
  ictw.innerHTML = ictw.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime
    .timeline()
    .add({
      targets: ".h-hi .letter",
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 400 * i,
    })
    .add(
      {
        targets: ".h-circle",
        scale: [0, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 700,
      },
      "-=300"
    )
    .add(
      {
        targets: ".h-hi .letter",
        color: "#ffffff",
        easing: "easeOutExpo",
        duration: 700,
      },
      "-=700"
    )
    .add({
      targets: ".h-hi .letter",
      opacity: 0,
      easing: "easeOutExpo",
      duration: 500,
    })
    .add({
      targets: ".h-circle",
      scale: 5,
      easing: "easeOutExpo",
      duration: 700,
    })
    .add({
      targets: ".h-ifsd .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 30 * i,
    })
    .add(
      {
        targets: ".h-ifsd .letter",
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 30 * i,
      },
      "-=700"
    )
    .add({
      targets: ".h-ictw .letter",
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: ".h-ts svg",
      translateY: [100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2500,
      delay: (el, i) => 100 * i,
    })
    .add(
      {
        targets: ".pr-a",
        translateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
      },
      "-=1000"
    );
};
