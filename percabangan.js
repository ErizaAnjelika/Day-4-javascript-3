//percabangan if
/*let year = prompt("Pada tahun berapakah indonesia merdeka?", '');
if (year == 1945){
    alert("Kamu benar 👍")
}
*/

//percabangan if else
/*let age = 15;
if (age < 18) {
    console.log('remaja');
} else {
    console.log('anak-anak');
}
*/

//percabangan else if
/*let year = prompt("Pada tahun berapakah indonesia merdeka?", '');

if (year < 1945){
    alert("Sedikit lagi, baca lagi buku sejarah!")
}else if (year > 1945 ){
    alert("Kurang tepat, coba baca lagi buku sejarah!")
}else{
    alert("Kamu benar sekali");
}
*/

//percabangan dengan operator kondisi '?'
/*let a = 5;
let b = 10;
let result = (a + b < 4) ? 'Below' : 'Over';
console.log(result);
*/

//percabangan dengan switch
// let i = 12 * 2; 

// switch (i) {
//     case 12:
//         alert('kurang tepat, coba hitung lagi!');
//         break;
//     case 24:
//         alert('Benar sekali, anda pintar menghitung');
//         break
//     default:
//         alert('Anda tidak tahu jawabannya');
//         break;
// }

// let username = "eriza";
// let password = "12345";

// if (username && password) {
//     console.log("Login berhasil!!")
// }else{
//     console.log("Periksa kembali password dan username anda");
// }


// let nomorBulan = 1;
// let stringBulan = "";

// switch (nomorBulan) {
//     case 1:
//         stringBulan ="januari";
//         break;
//     case 2:
//         stringBulan ="februari";
//         break;
//     case 5:
//         stringBulan = "Mei";
//         break;
//     default:
//         console.log("Nomor bulan tidak valid")
// }


//percabangan switch case
// let namaBulan = "0";
// let stringBulan = "Juni";
// switch (nomorBulan) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//nested case 
// let namaHari = "selasa";
// let jenisHari;

// switch (namaHari) {
//     case "Senin":
//     case "selasa":
//     case "Rabu":
//     case "Kamis":
//     case "Jum'at":
//         jenisHari = "Hari Kerja";
//         break;
//         case "sabtu":
//         case "minggu":
//         jenisHari = "Akhir Pekan";
//             break;
//     default:
//       jenisHari = "jenis hari tidak valid"
// }

// if (
//     namaHari === "Senin" || 
//     namaHari === "selasa" || 
//     namaHari === "Rabu" ||
//     namaHari === "kamis" ||
//     namaHari === "jumat"
//     ) {
//     jenisHari = "hari kerja";
// }else if(namaHari === "sabtu" || namaHari === "minggu"){
//     jenisHari = "akhir pekan";
// }else{
//     jenisHari = "jenis hari tidak valid";
// }
//  console.log(jenisHari);

// let username = "lalaz";
// let password = "12345";
 
// //  //panjang username minimal 5 karakter
// //  //panjang password minimal 5 karakter
 
// if (username && password) {
//     //username = ada !== null !== undefined !== error ===> true
//     //password = ada !== null !== undefined !== error ===> true
//     if (username.length < 5) {
//         console.log("username minimal 5")
//     }else if (password.length < 5) {
//         console.log("password minimal 5")
//     }else if (username.length >=5 && password.length>= 5) {
//        console.log("login berhasil");
//     }else{
//         console.log("periksa lagi username dan password");
//     }
//     }else{
//         console.log("login gagal");
// }

// if (username?.length >= 5 && password?.length >= 5) {
//     console.log("login berhasil")
// }else{
//     console.log("login gagal")
// }

//operator ternary
//kondisi ? "hasil" : "error"

let username = "lala";
let password = "12345";
// const hasil = 
// username?.length >= 5 && password?.length >= 5
// ? console.log("login berhasil")
// : console.log("login gagal");

//penggunaan regex
if (username && password.length > 4 && password.match('[A-Z]')) {
    console.log("login berhasil");
}else{
    console.log("Login gagal");
}
