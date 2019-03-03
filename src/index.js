//* Data Types *//

//* Log *//
console.log("Hello World");

// Type Data : Number //

// Number Tanpa Desimal
console.log(10);
console.log(2000);
console.log(123456);
console.log(999999999999999);
console.log(9999999999999999); // Akurasi sampai 15 Digit Number

// Number dengan Desimal
console.log(3.14);
console.log(0.5);
console.log(100.0);

// Eksponen
console.log(123e5);
console.log(123e-5);

// Bilangan Negatif

// Jangan awali bilangan dengan angka 0

// Bilangan Hexadesimal
console.log(0xff);

// Number Spesial
console.log(2 / 0);
console.log(-2 / 0);
console.log(0 / 0);
console.log(100 / "apel");
console.log(100 / "10"); // Hati hati string Number spesial

// Operator Aritmatika //
// Simbol yang di gunakan untuk melakukan operasi.
// Operator
// 1. Aritmatika  // Binary = Membutuhkan 2 operand ( operandl  operator  operandl)
// 2. Penugasan   // Binary
// 3. Perbandingan  // Binary
// 4. Logika    // BInary
// 5. String    // Binary
// 6. Kondisional   // Ternary  = Membuatuhkan 3 operand
// 7. TypeOf    // unary  = Membutuhkan 1 Operand

// Aritmatika (+ , - , * , / , %(Module/modulud/sisa bagi))
console.log(5 + 10);
console.log(10 - 5);
console.log(10 / 5);
console.log(10 % 5);
console.log(10 % 3);
console.log(1 + 2 * 3 - 4);
console.log((1 + 2) * 3 - 4);

// operator Penugasan  / Assignment
// x += y / x = x + y
// x -= y / x = x - y
// x *= y / x = x * y
// x /= y / x = x / y

var x;
x = 10;
console.log(x); // Menugaskan 10 berada di variable x dengan tanda =

x += 5; // Dijumlah kan dari variable 10 sebelum nya
console.log(x);

// operator Perbandingan / Comparison
// == / Sama dengan
// != / Tidak sama dengan
// === / Strict sama dengan
// !== / Strict tidak sama dengan
// > / Lebih besar dari
// < / Lebih kecil dari
// >= / Lebih besar sama dengan
// <= / Lebih kecil sama dengan
// Menghasilkan Nilai Boolean = true & false

console.log(10 == 10); // ==
console.log(10 == 15); // ==
console.log(10 == "10"); // ==
console.log(10 != 10); // !=
console.log(10 != 15); // !=
console.log(10 === 10); // ===
console.log(10 === 15); // ===
console.log(10 === "10"); // ===

// Operator Logika / Logical Operator
x = 5;
console.log(x % 2 == 0); // false

x = 12;
console.log(x % 2 == 0); // true

// &&
x = 12;
console.log(x % 2 == 0 && x < 10); // Keduanya harus true untuk menghasilkan true , jika salah satu nya false makan hasil nya akan false

x = 8;
console.log(x % 2 == 0 && x < 10); // keduanya true makan menghasilkan true

// ||
x = 8;
console.log(x % 2 == 0 || x < 10); // hasil nya true

x = 12;
console.log(x % 2 == 0 || x < 10); // jika salah satu ada yang false dan true , maka tetap akan menghasilkan true

// !
x = 10;
console.log(x < 20); // true
console.log(!(x < 20)); // false

// String + (menjadi penggabungan string)
var a;
var b;
a = "apple";
b = "pen";
console.log(a + " " + b);

console.log(10 + "10"); // String
console.log("10" + 10); // String
console.log(10 + 10 + "10"); // menghasilkan string
console.log("Budi" + "10"); // String

// Operator Typeof / unary
// typeof(operand)
console.log(typeof 10); // Hasil nya number (Memberi tau typedata nya)
console.log(typeof "10"); // Hasil nya String (Memberi tau typedata nya)
console.log(typeof true); // Typedata Boolean
console.log(typeof false); // Typedata Boolean

// Operator Kondisional / Ternary = 3 operand
// (kondisi) ? benar : salah
x = 10;
console.log(x % 2 == 0 ? "Genap" : "Ganjil"); // genap atau true
x = 9;
console.log(x % 2 == 0 ? "Genap" : "Ganjil"); // Ganjil atau false

// Type Data : String ("" , '') //
console.log("Budi Saputra");
console.log("Hello World !");
console.log("Hari ini adalah hari Jum'at"); // jika di dalam string ada kutip 1 lebih baik tutup dengan kutip 2
console.log('Kami sedang mengadakan kegiatan "Gerakan pungut Sampah"'); // jika di dalam string ada titk 2 lebih baik tutup dengan kutip 1
console.log('"Gerak pungut Sampah" Dilaksanakan pada hari Jum\'at'); // escape character atau tanda \" \'
console.log("ini adalah hari \n jum'at");
console.log("ini adalah hari \t jum'at");

// escape charackter
// \0 hasil karakter NULL
// \' hasil '
// \" hasil "
// \\ hasil \
// \n hasil  New line / baris baru
// \t hasil tab
// \b hasil backspace
// \uxxxx hasil unicode

// Unicode
console.log("\u00A9");
console.log("\u00AE");
console.log("\u00B1");
console.log("\u00B5");
console.log("\u2122");

// Concatenation / konketanasi atau +
// Membandingkan String
console.log("Budi Saputra" == "budi saputra"); // false

// .length  (Menghitung panjang string)
console.log("Budi Saputra".length); // 12 space di hitung

// Boolean true | false//
// Sebuah type data yang di gunakan untuk mempresentasikan logika true atau false
// Biasa nya di gunakan pada statement pengkondisian , untuk menentukan aksi yang berbeda dan mengatur alur kendali program
var x = 10;
console.log(x < 20); // true (Number)
console.log("Budi" == "budi"); // false (Perbandingan)
console.log(Boolean(10 < 20)); // true
console.log(Boolean(10)); // true
console.log(Boolean("Budi")); // true
console.log(Boolean(0)); // tidak memiliki nilai // false
console.log(Boolean(-1)); // memiliki nilai // true

// Nilai-Nilai yang ada pada Javascript
// truthy               falsy
// true                 false
// non-zero number      0
// "string"             ""
// object               undefined
// arrays               null
// functions            NaN

//* Variable *//
// Sebuah 'tempat / Wadaw' yang memiliki nama , yang digunakan untuk menyimpan nilai .
// Analaogi nya seperti gelas atau ember yang fungsi nya menapung sesuatu.
// Pemahaman Variable Deklarasi , inisialisasi , assignment

// Deklarasi (Mendaftarkan variable ke dalam lingkup yang sesuai.)
// inisialisasi (Menyediakan memory untuk Variable.)
// assignment (Menetapkan nilai yang spesifik ke dalam variable.)

var x; // Deklarasi sekaligus meng inisialisasi
x = 20; // assignment

// Deklarasi Variable
// var
// var gak boleh pakai spasi; // salah
// var 1gaboleh; // angka tidak boleh di depan
// var boleh1; // angka boleh di belakang atau di tengah
// var ini_juga_Boleh; // Boleh dengan tanda tersebut
// var boleh$; // bisa
// var &_&; // bisa
// var iniBolehBanget;
// var namaVariablePanjang; // Camel Case

// Kata yang gak boleh di pakai di Variable (Keyword & reserved word)
// break,case,const,catch,class,continue,debugger,default,delete,do.else,enum,export,extends,false,finally,for,function,if,implements,import,in,instanceof,interface,let,new,null,package,private,protected,public,return,static,super,switch,this,throw,true,try,typeof,var,void,while,with,yield

// Shorthand (Sintaks untuk menyingkat penulisan variable)
// example
// var nama;
// var umur;
// var lulus;

// nama = "Budi Saputra";
// umur = 23;
// lulus = true;

// example Shorthand
var nama = "Budi Saputra";
var umur = 23;
var lulus = true;
console.log(nama);
console.log(umur);
console.log(lulus);

// variable Scope

// let
// const

//* Cara Penulisan Javascript di HTMl *//

// Inline (Di akhir Body)
// example penulisan di tag HTML
// <script>
//  var x = 10;
//  console.log("Hello World");
//  console.log('Ini adalah variable ' + x);
//</script>

// exline  (File yang ber extensi js)
// <script src="index.js"></script>
//  var x = 10;
//  console.log("Hello World");
//  console.log('variable x adalah ' + x);

// * POP-UP Box / Dialog Box *//

// Alert //
// alert('Hello World');

// Prompt //
// prompt("Perkenalkan nama anda: ");
// bisa juga menggunakan variable
// var nama = prompt('perkenalkan nama anda: ');
// example
// var nama = prompt('Perkenalkan nama anda: ');
// alert(nama) atau
// alert("Hai " + nama );

// confirm //
// confirm('kamu yakin?');
// var test = confirm('kamu yakin?');
// alert(test);
// example
// var test = confirm ("Kamu yakin?");
// if (test === true) {
//   alert("Kamu menekan tombol OK");
// } else {
//   alert("Kamu menekan tombol CANCEL");
// }
// example
// alert ('Selamat datang..');
// var lagi = true ;
// while ( lagi ) {
//   var nama = prompt('Masukan Nama: ');
//   alert('halo ' + nama);
//   lagi = confirm('Coba lagi ?');
// }
// alert ('Terima kasih...');

//* Control Flow / Alur Kendali *//
// Normal Flow
// Apabila Program kita memiliki lebih dari 1 statement , maka statement tersebut akan tereksekusi dari atas ke bawah atau dari kiri ke kanan

// control flow pengulangan / loop / iteration //
// Statement yang di lakukan lebih dari satu x atau berulang , lalu bisa ke lanjutkan lagi ke statement selanjutnya
// Pengulangan terbagi menjadi For , While , dan Do While

// Pengulangan For //
// example
// tidak menggunakan For
// alert('mulai');
// alert('Hello World');
// alert('Hello World');
// alert('Hello World');
// alert('Hello World');
// alert('Hello World');
// alert(selesai);

// Menggunakan For
// alert("mulai");
// for (var i = 0; i < 5; i++) {
//   alert("Hello World !");
// }
// alert("Selesai");

// Pengulangan While //
// Dengan melakukan pengulangan kita dapat melakukan suatu hal yang sama berulang x .
// example tanpa menggunakan while
console.log("Hello world !");
console.log("Hello world !");
console.log("Hello world !");
console.log("Hello world !");
console.log("Hello world !");
console.log("Hello world !");
console.log("Hello world !");
console.log("Hello world !");

// Example menggunakan While
// Hello world bernilai true , akan terus menampilkan hingga tidak terhingga
// Disebut juga infinite Loop / looping forever / pengulangan tanpa batas
// while (true) {
//   console.log('Hello World !');
// }
// jika bernilai false maka console.hello world tidak akan di jalankan
// while (false) {
//   console.log('Hello World !');
// }
// looping di hentikan oleh user
// var ulang = true ;
// while(ulang) {
//  console.log('Hello World');
//  ulang = confirm('Lagi?');
// }

// Pengulangan Do While //

//* Pengkondisian / Percabangan //
// Pada satu titik program kita akan di berikan kondisi , jika kondisi tersebut bernilai true dan selanjut nya akan di eksekusi yang berada di bawah nya , tapi jika kondisi tadi menghasilkan nilai false maka yang akan di eksekusi adalah statement yang lain .
// jenis pengkondisian
// if  , if.. else , if.. else if.. else  , dan switch
// example
// var angka = prompt ('Masukan Angka: ');
// if ( angka % 2 === 0 ) {
//  alert (angka + ' adalah bilangan GENAP');
// } else {
//  alert (angka + ' adalah bilangan GANJIL')
// }
