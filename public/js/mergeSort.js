async function mergesort(l,r,temp){
    if(l>=r){
        return;
    }
    var m = Math.floor((l+r)/2);
    mergesort(l,m,temp);
    mergesort(m+1,r,temp);

    var n1 = m - l + 1;
    var n2 = r - m;

    var L=Array(n1);
    var R=Array(n2);

    for (var i = 0; i < n1; i++){
      L[i] = getNum(temp[l + i]);
    }

    for (var j = 0; j < n2; j++){
      R[j] = getNum(temp[m + 1 + j]);
    }

    var i = 0;

    var j = 0;

    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            temp[k].style.paddingTop = L[i]+"px";
            i++;
        }
        else {
            temp[k].style.paddingTop = R[j]+"px";
            j++;
        }
        k++;
    }

    while (i < n1) {
        temp[k].style.paddingTop = L[i]+"px";
        i++;
        k++;
    }

    while (j < n2) {
        temp[k].style.paddingTop = R[j]+"px";
        j++;
        k++;
    }
}

function mergeSort(){
  var temp=document.querySelectorAll(".bar");
  mergesort(0,temp.length-1,temp);
  buttonsEnable();
}
