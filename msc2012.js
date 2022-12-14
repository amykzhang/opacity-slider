// Code © 2021 Ke Er Zhang, revised by 2022 Xinyi Li

function rangeValue(value) {
  const root = document.documentElement;

  //Decrease opacity of image 1 as value of range slider increases (i.e., as slider button is dragged from left to right)
  root.style.setProperty('--opacityImg1', (100 - value) / 100);
  root.style.setProperty('--opacityImg2', 100);
  
}
