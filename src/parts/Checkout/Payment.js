import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";
import formatNumber from "utils/formatNumber";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.jml_order * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container d-none d-md-block" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: Rp. {formatNumber(subTotal)}</p>
              <p>Total: Rp. {formatNumber(grandTotal)}</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>CateringKita Edi</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>CateringKita Edi</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>

      <div className="container d-block d-md-none">
        <Fade delay={300}>
          <div className="row justify-content-start">
            <div className="col-auto">
              <p className="mb-2 font-weight-bold">Transfer Pembayaran:</p>
              <p className="mb-2">Tax: {tax}%</p>
              <p className="mb-2">Sub total: Rp. {formatNumber(subTotal)}</p>
              <p className="mb-2">Total: Rp. {formatNumber(grandTotal)}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Fade delay={400}>
            <div className="col-12 mt-4">
              <p className="font-weight-bold">Ke Rekening:</p>
            </div>
            <div className="col-3 text-right">
              <img src={logoBca} alt="bank central asia" width="60" />
            </div>
            <div className="col-9">
              <dl>
                <dd>Bank Central Asia</dd>
                <dd>2208 1996</dd>
                <dd>CateringKita Edi</dd>
              </dl>
            </div>

            <div className="col-3 text-right">
              <img src={logoMandiri} alt="mandiri" width="60" />
            </div>
            <div className="col-9">
              <dl>
                <dd>Bank Mandiri</dd>
                <dd>2208 1996</dd>
                <dd>CateringKita Edi</dd>
              </dl>
            </div>
          </Fade>

          <div className="col-12 mt-5">
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
