# Indonesia Administrative Regions (Provinsi, Kabupaten/Kota, Kecamatan, Kelurahan/Desa)

Library TypeScript untuk mengambil data wilayah administratif Indonesia  
dari **provinsi → kabupaten/kota → kecamatan → kelurahan/desa**.  
Cocok digunakan untuk **form alamat**, **GIS apps**, atau kebutuhan lain.

---

## ✨ Features

- Data wilayah Indonesia lengkap (Provinsi, Kabupaten/Kota, Kecamatan, Kelurahan/Desa)
- Ditulis dalam **TypeScript** dengan dukungan tipe bawaan
- Akses data secara **berantai** (Provinsi → Kabupaten → Kecamatan → Kelurahan)
- **Modular & Tree-shakeable**: hanya load file JSON sesuai kebutuhan
- Bisa digunakan di **Node.js** maupun **browser**

---

## 📦 Installation

```bash
npm install indonesian-area
# atau
pnpm add indonesian-area
# atau
yarn add indonesian-area
```

## 🚀 Usage

```ts
import {
  getProvinsi,
  getKabupaten,
  getKecamatan,
  getKelurahan
} from "indonesian-area";
```

### 1. Ambil semua provinsi (map object)

```ts
import { getProvinsi } from "indonesian-area";

const provinsi = getProvinsi();
console.log(provinsi["11"]); // "ACEH"
```

### 2. Ambil kabupaten/kota berdasarkan `provinsiId`

```ts
import { getKabupaten } from "indonesian-area";

const kab = getKabupaten("11");
console.log(kab["01"]); // "KAB. SIMEULUE"

```

### 3. Ambil kecamatan berdasarkan `kabupatenId`

```ts
import { getKecamatan } from "indonesian-area";

const kec = getKecamatan("11-01");
console.log(kec["010"]); // "TEUPAH SELATAN"
```

### 4. Ambil kelurahan/desa berdasarkan `kecamatanId`

```ts
import { getKelurahan } from "indonesian-area";

const kel = getKelurahan("11-01-010");
console.log(kel["001"]); // "LATIUNG"

```

## 📚 Struktur Data

- Provinsi → `provinsiId` → contoh: `"11"`
- Kabupaten/Kota →`provinsiId-kabupatenId` → contoh: `"11-01"`
- Kecamatan → `provinsiId-kabupatenId-kecamatanId` → contoh: "`11-01-010"`
- Kelurahan/Desa → `"11-01-010-001"`
