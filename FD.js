function hitungKecepatan(jarak, waktu) {
    let kecepatan = jarak / waktu;

    return kecepatan;
}

let jarak = 150;
let waktu = 30;

let hasil = hitungKecepatan(jarak, waktu);

console.log("Jarak:", jarak, "meter");
console.log("Waktu:", waktu, "detik");
console.log("Kecepatan:", hasil, "m/s");