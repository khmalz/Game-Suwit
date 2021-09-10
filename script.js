var tanya = true;
while (tanya) {
   // menangkap pilihan player
   var main = prompt("Pilih Batu/Gunting/Kertas?\nMasukkan kata sesuai dengan kata yang ditampilkan(Huruf depan kata memakai huruf besar)");

   // menangkap pilihan computer
   // membangkitkan bilangan random
   var comp = Math.random();

   if (comp < 0.34) {
      comp = "Batu";
   } else if (comp >= 0.34 && comp < 0.67) {
      comp = "Gunting";
   } else {
      comp = "Kertas";
   }

   var hasil = "";
   // menentukan rules
   if (main == comp) {
      hasil = "Seri";
   } else if (main == "Batu") {
      //  if (comp == "Gunting") {
      //     hasil = "Menang";
      //  } else {
      //     hasil = "Kalah";
      //  }
      hasil = comp == "Gunting" ? "Menang" : "Kalah";
   } else if (main == "Gunting") {
      hasil = comp == "Batu" ? "Kalah" : "Menang";
   } else if (main == "Kertas") {
      hasil = comp == "Batu" ? "Menang" : "Kalah";
   } else {
      hasil = "Memasukkan pilihan yang salah!";
   }

   // tampilkan hasilnya
   alert("Kamu memilih : " + main + " dan Komputer memilih : " + comp + "\nMaka hasilnya : Kamu " + hasil);

   tanya = confirm("Apakah mau ulang?");
}

alert("Terima Kasih sudah bermain");
