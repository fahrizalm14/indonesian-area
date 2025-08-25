// src/index.ts

import provinsi from "./data/provinsi/provinsi.json";

/**
 * Tipe untuk hasil setiap level
 */
export type ProvinsiMap = Record<string, string>; // { "11": "ACEH", ... }
export type KabupatenMap = Record<string, string>; // { "01": "KAB. SIMEULUE", ... }
export type KecamatanMap = Record<string, string>; // { "010": "TEUPAH SELATAN", ... }
export type KelurahanMap = Record<string, string>; // { "001": "LATIUNG", ... }

/**
 * Ambil daftar provinsi
 */
export function getProvinsi(): ProvinsiMap {
  return provinsi;
}

/**
 * Ambil kabupaten/kota berdasarkan provinsi ID
 * @param provinsiId contoh: "11"
 */
export async function getKabupaten(provinsiId: string): Promise<KabupatenMap> {
  try {
    const kabupaten = await import(
      `./data/kabupaten_kota/kab-${provinsiId}.json`
    );
    return kabupaten.default as KabupatenMap;
  } catch {
    throw new Error(`Kabupaten untuk provinsi ${provinsiId} tidak ditemukan`);
  }
}

/**
 * Ambil kecamatan berdasarkan kabupaten ID
 * @param kabupatenId contoh: "11-01"
 */
export async function getKecamatan(kabupatenId: string): Promise<KecamatanMap> {
  try {
    const [provId, kabId] = kabupatenId.split("-");
    const kecamatan = await import(
      `./data/kecamatan/kec-${provId}-${kabId}.json`
    );
    return kecamatan.default as KecamatanMap;
  } catch {
    throw new Error(`Kecamatan untuk kabupaten ${kabupatenId} tidak ditemukan`);
  }
}

/**
 * Ambil kelurahan/desa berdasarkan kecamatan ID
 * @param kecamatanId contoh: "11-01-010"
 */
export async function getKelurahan(kecamatanId: string): Promise<KelurahanMap> {
  try {
    const [provId, kabId, kecId] = kecamatanId.split("-");
    const kelurahan = await import(
      `./data/kelurahan_desa/keldesa-${provId}-${kabId}-${kecId}.json`
    );
    return kelurahan.default as KelurahanMap;
  } catch {
    throw new Error(`Kelurahan untuk kecamatan ${kecamatanId} tidak ditemukan`);
  }
}
