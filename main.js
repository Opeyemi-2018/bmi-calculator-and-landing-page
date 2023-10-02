//here we set the id of the button and the two radio button
// from HTML in a variable
let calculate = document.getElementById("calculate");
let metric = document.getElementById("Metric");
let imperial = document.getElementById("imperial");
let result = document.getElementById("result");

calculate.addEventListener("click", () => {
  //here we get the value out of the input box
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  //here we convert the value of both input into number
  weight = Number(weight);
  height = Number(height);

  if (metric.checked) {
    imperial.checked = false;
    //to calculate BMI base on metric we have to convert the value of weight
    //to kilogram by divide the value by 2.205 and convert height to meter by
    // deviding the value by 39.37

    let weightKG = weight / 2.205;
    weightKG = weightKG.toFixed(2);
    let heightMT = height / 39.37;
    heightMT = heightMT.toFixed(2);

    //here we square the height
    heightMT = Math.pow(heightMT, 2);
    heightMT = heightMT.toFixed(4);

    //here we devide our weight by our height
    let BMI = weightKG / heightMT;
    BMI = BMI.toFixed(2);
    result.innerHTML = `<div>your BMI is... ${BMI}</div>`;

    metric.checked = false;
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
  } else if (imperial.checked) {
    //to calculate BMI base on imperial we have to convert the value
    //weight to kilogram by multiplying the value by 0.4536 and conver
    //the value of height to meters by multiplying the value by 0.0254

    let weightKG = weight * 0.4536;
    weightKG = weightKG.toFixed(3);

    let heightMT = height * 0.0254;

    //here we square the height
    heightMT = Math.pow(heightMT, 2);

    //here we devide our weight by our height
    let BMI = weightKG / heightMT;
    BMI = BMI.toFixed(2);
    result.innerHTML = `<div>your BMI is... ${BMI}</div>`;

    imperial.checked = false;

    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
  }
});

/*-------------scroll reveal ----------------*/

const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".first-right-content", { delay: 350, origin: "top" });
sr.reveal(".img-con", { delay: 350, origin: "bottom" });
sr.reveal(".second-con-content", { delay: 350, origin: "top" });
sr.reveal(".tip-div", { delay: 350, origin: "top" });
sr.reveal(".tip-content", { delay: 350, origin: "bottom" });
sr.reveal(".limitaion-content-1", { delay: 350, origin: "top" });
sr.reveal(".limitaion-conten", { delay: 350, origin: "bottom" });
sr.reveal(".fifth", { delay: 350, origin: "top" });
sr.reveal(".sixth", { delay: 350, origin: "bottom" });
