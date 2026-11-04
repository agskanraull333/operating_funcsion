const hitungKecepatan = function(jarak, waktu) {
    let kecepatan = jarak / waktu;

    return kecepatan;
};

let jarak = 200;
let waktu = 40;

let hasil = hitungKecepatan(jarak, waktu);

console.log("Jarak:", jarak, "meter");
console.log("Waktu:", waktu, "detik");
console.log("Kecepatan:", hasil, "m/s");