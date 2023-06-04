import TiketPage from "../support/pageObject/tiketPage";
const dataTiket = require("../fixtures/dataTiket.json");

describe("Verifikasi pesan tiket kereta di Tokopedia", () => {
  const tiket = new TiketPage();

  beforeEach(() => {
    cy.visit("/", {
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
      },
    });
    cy.url().should("include", "/");
  });

  dataTiket.forEach((data) => {
    it(data.name, () => {
      if (data.name === "Verifikasi tidak memasukkan asal") {
        tiket.inputAsal(data.asal, data.expected);
        tiket.waitScreenshot();
      } else if (data.name === "Verifikasi tidak memasukkan tujuan") {
        tiket.inputAsal(data.asal, data.expected);
        tiket.waitScreenshot();
      } else if (data.name === "Verifikasi tanggal keberangkatan 2 Juni 2023") {
        tiket.inputAsal(data.asal);
        tiket.inputTujuan(data.tujuan);
        tiket.btnBerangkat(data.tanggal);
        tiket.waitScreenshot();
      } else if (data.name === "Verifikasi tanggal keberangkatan 6 Juni 2023") {
        tiket.inputAsal(data.asal);
        tiket.inputTujuan(data.tujuan);
        tiket.btnBerangkat(data.tanggal);
        tiket.btnCari();
        tiket.countResult();
        tiket.waitScreenshot();
      } else if (data.name === "Verifikasi fitur tombol tukar") {
        tiket.inputAsal(data.asal);
        tiket.inputTujuan(data.tujuan);
        tiket.waitScreenshot();
        tiket.btnTukar();
        tiket.waitScreenshot();
      } else if (data.name === "Verifikasi jumlah penumpang dewasa 5") {
        tiket.inputAsal(data.asal);
        tiket.inputTujuan(data.tujuan);
        tiket.btnBerangkat(data.tanggal);
        tiket.tambahDewasa(data.jumlahDewasa);
        tiket.waitScreenshot();
      } else if (data.name === "Verifikasi jumlah penumpang dewasa 4") {
        tiket.inputAsal(data.asal);
        tiket.inputTujuan(data.tujuan);
        tiket.btnBerangkat(data.tanggal);
        tiket.tambahDewasa(data.jumlahDewasa);
        tiket.btnCari();
        tiket.countResult();
        tiket.waitScreenshot();
      } else if (
        data.name === "Verifikasi jumlah penumpang dewasa 4 & bayi 5"
      ) {
        tiket.inputAsal(data.asal);
        tiket.inputTujuan(data.tujuan);
        tiket.btnBerangkat(data.tanggal);
        tiket.tambahDewasa(data.jumlahDewasa);
        tiket.tambahBayi(data.jumlahBayi);
        tiket.textBayi();
        tiket.waitScreenshot();
      } else if (
        data.name === "Verifikasi jumlah penumpang dewasa 4 & bayi 4"
      ) {
        tiket.inputAsal(data.asal);
        tiket.inputTujuan(data.tujuan);
        tiket.btnBerangkat(data.tanggal);
        tiket.tambahDewasa(data.jumlahDewasa);
        tiket.tambahBayi(data.jumlahBayi);
        tiket.btnCari();
        tiket.countResult();
        tiket.waitScreenshot();
      }
    });
  });
});
