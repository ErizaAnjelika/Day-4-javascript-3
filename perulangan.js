//perulangan for
// for (let i = 3; i < 6; i++) {
//     console.log(`angka ${i + 1}`);
// }

//perulangan while
// let i = 1;
// while (i <=5) {
//     console.log(`prulangan ke- ${i}`);
//     i++;
// }

//infinite loop
// let boolean = true;
// while(false){
//     console.log(`infinite loop`);
//     boolean = false;
// }

//perulangan Do while
// let i = 1;
// do {
//     console.log(`perulangan ke- ${i}`);
//     i++;
// } while (1 <= 5);

//perulangan for in
// const person ={
//     name : "lala",
//     age : 20,
//     profession : "developer"
// };
// for (const key in person) {
//    console.log(`${key} : ${person[key]}`)
// }

// person.age = 40;
// person.alamat = "jakarta";

// console.log(person);

//perulangan forEach

// const buah = ["apple", "banana", "orange"];

// const dataSiswa =[
//     {nama : 'lala', kelas : '1A'},
//     {nama : 'lili', kelas : '1b'},
// ]
// dataSiswa.forEach(function (item, index) {
//     console.log(`nama: ${item.nama} kelas: ${item.kelas}`);

// });

//bentuk nested
function asteriks(rows){
for (let i = 0; i <= rows ; i++) {
    let asterik = '';
    for (let j = 0; j <= i; j++) {
        asterik += '*'; 
    }
    console.log(asterik);
}
}
asteriks(5)

function bandingkanAngka(angka1, angka2) {
    if (angka1 <angka2) {
        return true;
    }else if(angka1 > angka2){
        return false;
    }else{
        return -1;
    }
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
