import kabupatenKota from "./data/kabupaten_kota.json";
import kecamatan from "./data/kecamatan.json";
import kelurahanDesa from "./data/kelurahan_desa.json";
import provinsi from "./data/provinsi.json";

/**
 * Struktur data mapping kode ke nama
 */
export type ProvinsiMap = Record<string, string>; // { "11": "ACEH", ... }
export type KabupatenMap = Record<string, string>; // { "01": "KAB. SIMEULUE", ... }
export type KecamatanMap = Record<string, string>; // { "010": "TEUPAH SELATAN", ... }
export type KelurahanMap = Record<string, string>; // { "001": "LATIUNG", ... }

/**
 * Ambil daftar provinsi
 *
 * @returns {ProvinsiMap} Objek mapping kode provinsi ke nama provinsi.
 *
 * @example
 * ```ts
 * const prov = getProvinsi();
 * console.log(prov["11"]); // "ACEH"
 * ```
 */
export function getProvinsi(): ProvinsiMap {
  return provinsi as unknown as ProvinsiMap;
}

/**
 * Ambil daftar kabupaten/kota berdasarkan ID provinsi
 *
 * @param {string} provinsiId - ID provinsi (contoh: "11")
 * @returns {KabupatenMap | undefined} Objek mapping kode kabupaten/kota ke nama kabupaten/kota, atau `undefined` jika tidak ditemukan.
 *
 * @example
 * ```ts
 * const kab = getKabupaten("11");
 * console.log(kab?.["01"]); // "KAB. SIMEULUE"
 * ```
 */
export function getKabupaten(provinsiId: string): KabupatenMap | undefined {
  return (kabupatenKota as Record<string, KabupatenMap>)[provinsiId];
}

/**
 * Ambil daftar kecamatan berdasarkan ID kabupaten
 *
 * @param {string} kabupatenId - ID kabupaten (contoh: "11-01")
 * @returns {KecamatanMap | undefined} Objek mapping kode kecamatan ke nama kecamatan, atau `undefined` jika tidak ditemukan.
 *
 * @example
 * ```ts
 * const kec = getKecamatan("11-01");
 * console.log(kec?.["010"]); // "TEUPAH SELATAN"
 * ```
 */
export function getKecamatan(kabupatenId: string): KecamatanMap | undefined {
  return (kecamatan as Record<string, KecamatanMap>)[kabupatenId];
}

/**
 * Ambil daftar kelurahan/desa berdasarkan ID kecamatan
 *
 * @param {string} kecamatanId - ID kecamatan (contoh: "11-01-010")
 * @returns {KelurahanMap | undefined} Objek mapping kode kelurahan/desa ke nama kelurahan/desa, atau `undefined` jika tidak ditemukan.
 *
 * @example
 * ```ts
 * const kel = getKelurahan("11-01-010");
 * console.log(kel?.["001"]); // "LATIUNG"
 * ```
 */
export function getKelurahan(kecamatanId: string): KelurahanMap | undefined {
  return (kelurahanDesa as Record<string, KelurahanMap>)[kecamatanId];
}
