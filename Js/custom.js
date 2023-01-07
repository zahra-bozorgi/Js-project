var A= ["رشت", "رودسر", "لاهیجان","لنگرود" , "آستانه","صومعه سرا"];
var B= ["اسلامشهر","رباط کریم","دماوند", "شهر ری"];
var C= ["آبیک","البرز","الوند", "محمدیه"];


var changeCat = function changeCat(firstList) {
    var newSel = document.getElementById("category");
    newSel.innerHTML="<option value=\"\" disabled> شهر را انتخاب کنید</option>"; 
    var opt;

    switch (firstList.options[firstList.selectedIndex].value) {
        case "A":
            for (var i=0; len=A.length, i<len; i++) {
                  opt = document.createElement("option");
                  opt.value = A[i];
                  opt.text = A[i];
                  newSel.appendChild(opt);
            }
            break;
        case "B":
            for (var i=0; len=B.length, i<len; i++) {
                  opt = document.createElement("option");
                  opt.value = B[i];
                  opt.text = B[i];
                  newSel.appendChild(opt);
            }
            break;
        case "C":
            for (var i=0; len=C.length, i<len; i++) {
                  opt = document.createElement("option");
                  opt.value = C[i];
                  opt.text = C[i];
                  newSel.appendChild(opt);
            }
            break;
        
    }

}