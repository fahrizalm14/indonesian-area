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
  it("should return Simeulue for provinsi 11", async () => {
    const kab = await getKabupaten("11");
    expect(kab["01"]).toBe("KAB. SIMEULUE");
  });
});

// TEST KECAMATAN
describe("getKecamatan", () => {
  it("should return Teupah Selatan for kabupaten 11-01", async () => {
    const kec = await getKecamatan("11-01");
    expect(kec["010"]).toBe("TEUPAH SELATAN");
  });
});

// TEST KELURAHAN
describe("getKelurahan", () => {
  it("should return Latiung for kecamatan 11-01-010", async () => {
    const kel = await getKelurahan("11-01-010");
    expect(kel["001"]).toBe("LATIUNG");
  });
});
