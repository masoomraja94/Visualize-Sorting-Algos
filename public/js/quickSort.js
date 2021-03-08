async function quicksort(low,high,temp){
    if (low < high){
      var pivot = temp[high];
      var i = (low - 1);

      for (var j = low; j <= high - 1; j++){
          if (getNum(temp[j]) < getNum(pivot)){
              i++;
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, 502-speed)
              );
              swap(temp[i],temp[j]);
          }
      }
      swap(temp[i+1],temp[high]);;

        var pi = i+1;

        quicksort(low, pi - 1,temp);
        quicksort(pi + 1, high,temp);
    }
}

function quickSort(){
  var temp=document.querySelectorAll(".bar");
  quicksort(0,temp.length-1,temp);
  buttonsEnable();
}
