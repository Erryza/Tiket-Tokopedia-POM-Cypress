import { elementsTiket } from "../locators/tiketLocator";
const dataTiket = require("../../fixtures/dataTiket.json");

class TiketPage {
  inputAsal(asal, expected) {
    cy.get(elementsTiket.elAsal)
      .clear()
      .then((e) => {
        if (asal !== "") cy.wrap(e).type(asal);
      });

    if (asal == " ") {
      cy.get(elementsTiket.elErrMessage).should("contain", expected);
    }
  }

  inputTujuan(tujuan, expected) {
    cy.get(elementsTiket.elTujuan)
      .clear()
      .then((e) => {
        if (tujuan !== "") cy.wrap(e).type(tujuan);
      });

    if (tujuan == " ") {
      cy.get(elementsTiket.elErrMessage).should("contain", expected);
    }
  }

  btnBerangkat(tanggal) {
    cy.get(elementsTiket.elbtnBerangkat).click();

    if (tanggal === "6 Juni 2023") {
      cy.get(elementsTiket.elTgl6).click({ force: true });
      cy.get(elementsTiket.elTgl6).should("not.be.disabled");
    } else {
      cy.get(elementsTiket.elTgl2).wait(1000).click({ force: true });
      cy.get(elementsTiket.elTgl2).should("have.class", "disabled");
    }
  }

  btnCari() {
    cy.get(elementsTiket.elBtnCari).click({ force: true });
  }

  btnTukar() {
    cy.get(elementsTiket.elTukar).click({ force: true }).wait(100);
  }

  countResult() {
    cy.get(elementsTiket.elResult).should("contain", "Pilih tiket berangkat ");
    cy.get(elementsTiket.elCard)
      .children()
      .then(($el) => {
        const count = $el.length;
        cy.get(elementsTiket.elCard).children().should("have.length", count);
      });
  }

  tambahDewasa() {
    dataTiket.forEach((data) => {
      cy.get(elementsTiket.elBtnPenumpang).click({ force: true });
      if (data.jumlahDewasa === 4) {
        for (let i = 1; i <= data.jumlahDewasa; i++) {
          cy.get(elementsTiket.elTambahDewasa).click({ force: true });
        }
      } else if (data.jumlahDewasa !== 4) {
        for (let i = 1; i <= data.jumlahDewasa; i++) {
          cy.get(elementsTiket.elTambahDewasa).click({ force: true });
        }
      }
    });
  }

  tambahBayi() {
    dataTiket.forEach((data) => {
      cy.get(elementsTiket.elBtnPenumpang).click({ force: true });
      if (data.jumlahBayi === 4) {
        for (let i = 1; i <= data.jumlahBayi; i++) {
          cy.get(elementsTiket.elTambahBayi).click({ force: true });
        }
      } else if (data.jumlahBayi !== 4) {
        for (let i = 1; i <= data.jumlahBayi; i++) {
          cy.get(elementsTiket.elTambahBayi).click({ force: true });
        }
      }
    });
  }

  textBayi() {
    cy.get(elementsTiket.elText).should(
      "contain",
      "Jumlah bayi tidak boleh melebihi penumpang dewasa."
    );
  }

  waitScreenshot() {
    cy.screenshot();
  }
}

export default TiketPage;
