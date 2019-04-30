let a = prompt ("Введіть загадане число");
let myset = new Set();
for (let i=0;i<4;i++){
  myset.add(a[i]);
}
while (myset.size!=4){
  myset.clear();
  console.log("Потрібно, щоб у числі були усі цифри різні");
  a = prompt ("Введіть загадане число знову");
  for (let i=0;i<4;i++){
    myset.add(a[i]);
  }
}
let b;
while (b != a){
  let k = 0;
  let bik = 0;
  let myset2 = new Set();
  let b = prompt ("Введіть загадане число");
  for (let i=0;i<4;i++){
   myset2.add(b[i]);
  }
  while (myset2.size!=4){
    myset2.clear();
    console.log("Потрібно, щоб у числі були усі цифри різні");
    b = prompt ("Введіть загадане число");
    for (let i=0;i<4;i++){
     myset2.add(b[i]);
    }
  }
  if (a == b) {
   console.log("Ви вгадали");
   break;
  }
for (let i=0; i<4; i++){
  if (a[i]==b[i]){
    bik++;
  }
}
for (let j=0;j<4;j++){
  for (let z=0;z<4;z++){
    if (a[j]==b[z]){
      k++;
    }
  }
}
console.log("Биків = " + bik +"." + " Корів = " + k + ".");
}
