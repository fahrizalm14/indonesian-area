import { describe, expect, it } from "vitest";
import { getKabupaten, getKecamatan, getKelurahan, getProvinsi } from "../src";

// TEST PROVINSI
describe("getProvinsi", () => {
  it("should return ACEH for id 11", () => {
    const provinsi = getProvinsi();
    expect(provinsi["11"]).toBe("ACEH");
  });
});

// TEST KABUPATEN
describe("getKabupaten", () => {
  it("should return Simeulue for provinsi 11", () => {
    const kab = getKabupaten("11");
    expect(kab && kab["01"]).toBe("KAB. SIMEULUE");
  });
});

// TEST KECAMATAN
describe("getKecamatan", () => {
  it("should return Teupah Selatan for kabupaten 11-01", () => {
    const kec = getKecamatan("11-01");
    expect(kec && kec["010"]).toBe("TEUPAH SELATAN");
  });
});

// TEST KELURAHAN
describe("getKelurahan", () => {
  it("should return Latiung for kecamatan 11-01-010", () => {
    const kel = getKelurahan("11-01-010");
    expect(kel && kel["001"]).toBe("LATIUNG");
  });
});
