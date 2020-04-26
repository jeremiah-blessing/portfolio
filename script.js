var controller = new ScrollMagic.Controller();
var sceneEcom = new ScrollMagic.Scene({
  triggerElement: "#p-ecom",
  duration: "100%",
  triggerHook: 0,
})
  .setPin("#p-ecom")
  .addTo(controller);
var sceneCods = new ScrollMagic.Scene({
  triggerElement: "#p-cosn",
  duration: "100%",
  triggerHook: 0,
})
  .setPin("#p-cosn")
  .addTo(controller);
var sceneRees = new ScrollMagic.Scene({
  triggerElement: "#p-rees",
  duration: "100%",
  triggerHook: 0,
})
  .setPin("#p-rees")
  .addTo(controller);

var options = {
  rootMargin: "0px",
  threshold: 0.3,
};
var callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ractive");
      entry.target.classList.remove("rinactive");
      anime
        .timeline()
        .add({
          targets: ".ractive .p-name .letter",
          translateY: [-100, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 50 * i,
        })
        .add({
          targets: `.${entry.target.id}`,
          translateY: [-20, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: 950,
        });
    } else {
      entry.target.classList.add("rinactive");
      entry.target.classList.remove("ractive");
    }
  });
};

var observer = new IntersectionObserver(callback, options);
var techStacks = document.querySelectorAll(".tech-stacks");
techStacks.forEach((techStack) => {
  observer.observe(techStack);
});
var contactCallback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    anime
      .timeline()
      .add({
        targets: ".contact .letter",
        translateY: [-100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 150 * i,
      })
      .add(
        {
          targets: ".contact-details a",
          opacity: [0, 1],
          translateY: [-20, 0],
          easing: "easeOutExpo",
          duration: 1000,
          delay: (el, i) => 500 * i,
        },
        "-=400"
      )
      .add(
        {
          targets: ".goTop",
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 500,
        },
        "-=400"
      );
  }
};
var contactObserver = new IntersectionObserver(contactCallback, options);
var contactDOM = document.querySelector(".contact-con");
contactObserver.observe(contactDOM);

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
  new Siema({ selector: ".siema-1" });
  new Siema({ selector: ".siema-2" });
  new Siema({ selector: ".siema-3" });
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
  var contactDOMM = document.querySelector(".contact");
  contactDOMM.innerHTML = contactDOMM.textContent.replace(
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
        translateY: [20, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 900,
      },
      "-=1700"
    );
};
