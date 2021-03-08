var speed=401;

function Array(size){
  var arr=[];
  for(var i=0;i<size;i++){
    arr.push(i);
  }
  return arr;
}

function getNum(el){
  var s=el.style.paddingTop;
  var num=Number(s.slice(0,s.length-2));
  return num;
}

function buttonsEnable(){
  document.querySelector("#change-bars").disabled=false;
  document.querySelector("#change-speed").disabled=false;
  for(var i=0;i<6;i++){
    document.querySelectorAll(".btn")[i].disabled=false;
  }
}

function buttonsDisable(){
  document.querySelector("#change-bars").disabled=true;
  document.querySelector("#change-speed").disabled=true;
  for(var i=0;i<6;i++){
    document.querySelectorAll(".btn")[i].disabled=true;
  }
}

function swap(el1,el2){

  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);


  const transform1 = style1.getPropertyValue("padding-top");
  const transform2 = style2.getPropertyValue("padding-top");

  el1.style.paddingTop = transform2;
  el2.style.paddingTop = transform1;

}

function createBars(size){
  while(document.querySelectorAll(".bar").length!=0){
    document.querySelector(".bars").removeChild(document.querySelectorAll(".bar")[0]);
  }

  while(document.querySelectorAll(".bar").length<size){
    var div = document.createElement("div");
    div.classList.add("bar");
    document.querySelector(".bars").appendChild(div);
  }
}
function initialise(){
  var size=document.querySelectorAll(".bar").length;
  for(var i=0;i<size;i++){
    var num=Math.floor(Math.random()*100)+1;
    document.querySelectorAll(".bar")[i].style.paddingTop=(4*num)+"px";
  }
}
createBars(60);
initialise();

document.querySelector("#change-bars").addEventListener("input",function (){
  var size=document.querySelector("#change-bars").value;
  createBars(size);
  initialise();
});

document.querySelector("#change-speed").addEventListener("input",function (){
  speed=document.querySelector("#change-speed").value;
});

document.querySelector(".new-array").addEventListener("click",function (){
  createBars(document.querySelectorAll(".bar").length);
  initialise();
});
document.querySelector(".bubble-sort").addEventListener("click",function (){
  buttonsDisable();
  bubbleSort();
});
document.querySelector(".selection-sort").addEventListener("click",function (){
  buttonsDisable();
  selectionSort();
});
document.querySelector(".insertion-sort").addEventListener("click",function (){
  buttonsDisable();
  insertionSort();
});
document.querySelector(".quick-sort").addEventListener("click",function (){
  buttonsDisable();
  quickSort();
});
document.querySelector(".merge-sort").addEventListener("click",function (){
  buttonsDisable();
  mergeSort();
});
