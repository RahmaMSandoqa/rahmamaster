import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Contact extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${"https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg"})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center ",
        }}
      >
        <div className={this.style.sectionContent}></div>
        <div className={this.style.contactSection}>
          <div className="container">
            <div class="row">
              {/* style={{  backgroundColor:' rgba(255, 255, 255, 0.54)'}} */}
              <form className="col-md-6 offset-md-3  mt-5">
                <h1 className={this.style.contentHeader}>
                  <b>Contact us</b>
                </h1>
                <div class="mb-5"></div>

                <div class=" form-line">
                  <div class="form-group">
                    <label for="exampleInputUsername">
                      <b>Your name</b>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder=" Enter Name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail">
                      <b>Email Address</b>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail"
                      placeholder=" Enter Email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="telephone">
                      <b>Mobile</b>{" "}
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      id="telephone"
                      placeholder="number"
                    />
                  </div>
                </div>
                <div class="">
                  <div class="form-group">
                    <label for="description">
                      {" "}
                      <b>Message</b>
                    </label>
                    <textarea
                      class="form-control"
                      id="description"
                      placeholder="Enter Your Message"
                    ></textarea>
                  </div>
                  <div>
                    <button type="button" class="btn btn-info">
                      <i class="fa fa-paper-plane" aria-hidden="true"></i> Send
                      Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  style = {
    /*Contact sectiom*/
    contentHeader: {
      fontFamily: "Oleo Script cursive",
      color: "#fcc500",
      fontSize: "45px"
    },

    sectionContent: {
      textAlign: "center"
    },
    contact: {
      /// id

      fontFamily: "Teko, sans-serif",
      paddingTop: "60px",
      width: "100%",
      width: "100vw",
      height: "550px",
      background: "#3a6186" /* fallback for old browsers */,
      background:
        "-webkit-linear-gradient(to left, #3a6186 , #89253e)" /* Chrome 10-25, Safari 5.1-6 */,
      background:
        "linear-gradient(to left, #3a6186 , #89253e)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      color: "#fff"
    },
    contactSection: {
      paddingTop: "40px"
    },
    contactSection: {
      width: "50%"
    },

    formLine: {
      borderRight: "1px solid #B29999"
    },

    formGroup: {
      marginTop: "10px"
    },
    Label: {
      fontSize: "1.3em",
      lineHeight: "1em",
      fontWeight: "normal"
    },
    formControl: {
      fontSize: "1.3em",
      color: "#080808"
    },
    textareaFormcontrol: {
      height: "135px"
      /* margin-top: px;*/
    },

    submit: {
      fontSize: "1.1em",
      float: "right",
      width: "150px",
      backgroundColor: "transparent",
      color: "fff"
    }
  };
}
