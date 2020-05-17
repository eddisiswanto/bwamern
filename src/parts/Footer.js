import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <>
      <footer className="d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-auto" style={{ width: 350 }}>
              <IconText />
              <p className="brand-tagline">
                Penyedia Makanan Catering dengan Pemesanan mudah dan praktis
              </p>
            </div>
            <div className="col-auto mr-5">
              <h6 className="mt-2">Menu Lain</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    Buat Akun
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/properties">
                    Pesan Catering
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/use-payments">
                    Pembayaran
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-2 mr-5">
              <h6 className="mt-2">Explore Us</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/careers">
                    Our Careers
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/privacy">
                    Privacy
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/term">
                    Term & Condition
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h6 className="mt-2">Hubungi Kami</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="mailto:info@cateringkita.com"
                  >
                    info@cateringkita.com
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button isExternal type="link" href="tel:+6282302002407">
                    082 - 302 - 002 407
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>CateringKita, Banyuwangi</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright 2019 • All rights reserved • CateringKita
            </div>
          </div>
        </div>
      </footer>

      <footer className="d-block d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <IconText />
              <p className="brand-tagline">
                Penyedia Makanan Catering dengan Pemesanan mudah dan praktis
              </p>
            </div>
            <div className="col-5">
              <h6 className="mt-2">Menu Lain</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    Buat Akun
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/properties">
                    Pesan Catering
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/use-payments">
                    Pembayaran
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-7">
              <h6 className="mt-2">Hubungi Kami</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="mailto:info@cateringkita.com"
                  >
                    info@cateringkita.com
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button isExternal type="link" href="tel:+6282302002407">
                    082 - 302 - 002 407
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>CateringKita, Banyuwangi</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright 2019 • All rights reserved • CateringKita
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
