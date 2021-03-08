async function selectionSort(){
  var temp=document.querySelectorAll(".bar");
  var size=temp.length;
  var min_idx=-1;
  for(var i=0;i<size;i++){
    min_idx=i;
    for(var j=i+1;j<size;j++){

      temp[j].style.background="red";
      temp[min_idx].style.background="red";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 502-speed)
      );

      temp[j].style.background="yellow";
      temp[min_idx].style.background="yellow";

      if(getNum(temp[j])<getNum(temp[min_idx])){
        min_idx=j;
      }
    }
    swap(temp[i],temp[min_idx]);
    temp[i].style.background="green";
  }
  buttonsEnable();
}
