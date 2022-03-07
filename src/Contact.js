import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rk5kkdn",
        "template_11nk029",
        e.target,
        "QUU730Ou7HwQT4J5k"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <br />

            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                <a href="https://wa.me/919560682642">
                  <div id="rcorners1" className="contact">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="currentColor"
                        className="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                    </div>
                    <br />
                    <p className="text-center">+91 95606 82642</p>
                  </div>
                </a>
              </div>
              <div className="col-md-auto">
                <a href="tel:+919560682642">
                  <div id="rcorners2" className="contact">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="currentColor"
                        className="bi bi-telephone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                    </div>
                    <br />
                    <p className="text-center">+91 95606 82642</p>
                  </div>
                </a>
              </div>
              <div className="col-md-auto">
                <a href="mailto:lifestyleyogeshrana@gmail.com">
                  <div id="rcorners3" className="contact">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </div>
                    <br />
                    <p className="text-center">lifestyleyogeshrana@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
            <br />
            <h1 className="or">OR</h1>
            <br />
            <h1 className="text-center"> Contact Form </h1>
            <h4 className="text-center">
              (Fill the form and we will contact you)
            </h4>
            <br />
            <form onSubmit={sendEmail}>
              <div className="row g-2">
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingFirstName"
                      name="floatingFirstName"
                    />
                    <label for="floatingFirstName">First Name</label>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingLastName"
                      name="floatingLastName"
                    />
                    <label for="floatingLastName">Last Name</label>
                  </div>
                </div>
              </div>

              <br />

              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="floatingRemarks"
                  name="floatingRemarks"
                  style={{ height: "100px" }}
                />
                <label for="floatingRemarks">Remarks</label>
              </div>

              <br />

              <div className="row g-2">
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingEmail"
                      name="floatingEmail"
                    />
                    <label for="floatingEmail">Email</label>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      id="floatingPhone"
                      name="floatingPhone"
                    />
                    <label for="floatingPhone">Phone Number</label>
                  </div>
                </div>
              </div>

              <br />

              <div className="col-auto text-center">
                <button type="submit" className="btn btn-primary mb-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
