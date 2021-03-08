async function insertionSort(){
  var temp=document.querySelectorAll(".bar");
  var size=temp.length;
  for(var i=1;i<size;i++){
    var key=getNum(temp[i]);
    var j=i-1;

    while(j>=0 && getNum(temp[j])>key){

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 502-speed)
      );

      temp[j+1].style.paddingTop=temp[j].style.paddingTop;
      j--;
    }
    temp[j+1].style.paddingTop=key+"px";
  }
  buttonsEnable();
}
