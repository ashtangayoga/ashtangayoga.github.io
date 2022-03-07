import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <br />
            <h1 className="text-center"> Our Offerings </h1>
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card card-hover">
                  <img
                    src={require("./assets/basics_of_yoga.jpg")}
                    className="card-img-top"
                    alt="Basics of Yoga"
                  />
                  <div className="card-img-top">
                    <h5 className="card-title text-center">Basics of Yoga</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover">
                  <img
                    src={require("./assets/weight_loss.gif")}
                    className="card-img-top"
                    alt="Weight Loss"
                  />
                  <div className="card-img-top">
                    <h5 className="card-title text-center">
                      Yoga for Weight Loss
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover">
                  <img
                    src={require("./assets/relaxation.jpg")}
                    className="card-img-top"
                    alt="Relaxation"
                  />
                  <div className="card-img-top">
                    <h5 className="card-title text-center">
                      Yoga for Relaxation
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover">
                  <img
                    src={require("./assets/kids.jpg")}
                    className="card-img-top"
                    alt="Kids"
                  />
                  <div className="card-img-top">
                    <h5 className="card-title text-center">Yoga for Kids</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover">
                  <img
                    src={require("./assets/asthama.jpg")}
                    className="card-img-top"
                    alt="Kids"
                  />
                  <div className="card-img-top">
                    <h5 className="card-title text-center">Yoga for Asthama</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover">
                  <img
                    src={require("./assets/diabetes.jpg")}
                    className="card-img-top"
                    alt="Kids"
                  />
                  <div className="card-img-top">
                    <h5 className="card-title text-center">
                      Yoga for Diabetes
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <h2 style={{ "text-align": "right" }}>
              <i>... and many more</i>
            </h2>
            <br />
            <h1 className="text-center"> About Myself </h1>
            <br />
            <div class="card mb-3 mx-auto" style={{ "max-width": "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={require("./assets/dp.jpg")}
                    class="img-fluid rounded-start"
                    alt="profile"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Yogesh Rana</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
