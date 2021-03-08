async function bubbleSort(){
  var temp=document.querySelectorAll(".bar");
  var size=temp.length;
  for(var i=0;i<size;i++){
    for(var j=0;j+1+i<size;j++){

      temp[j].style.background="red";
      temp[j+1].style.background="red";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 502-speed)
      );

      temp[j].style.background="yellow";
      temp[j+1].style.background="yellow";

      if(getNum(temp[j])>getNum(temp[j+1])){
        swap(temp[j],temp[j+1]);
      }
    }
    temp[size-i-1].style.background="green";
  }
  buttonsEnable();
}
