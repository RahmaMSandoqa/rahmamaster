import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class Share extends Component {
  state = {
    placeName: "",
    placeDescription: "",
    data: []
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleName = event => {
    // console.log(event.target.value);
    this.setState({ placeName: event.target.value });
  };

  handleDescription = event => {
    this.setState({ placeDescription: event.target.value });
  };

  //==========================MOUNTING DATA FROM DB=============================//
  componentDidMount = () => {
    axios
      .get("http://localhost:20000/showBlog")
      .then(({ data }) => {
        this.setState({ data });
        console.log(this.state.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //==========================ADD DATA INTO DB=============================//
  addData = info => {
    console.log("ADD DATA");
    axios
      .post("http://localhost:20000/addData", info)
      .then(({ data }) => {
        // handle success
        console.log({ data });
        this.setState({ data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  addNewData = () => {
    const { state, addData } = this;
    const { placeName, placeDescription } = state;
    if (
      placeName !== "" &&
      placeName !== null &&
      placeDescription !== "" &&
      placeDescription !== null
    ) {
      let newData = {
        placeName: placeName,
        placeDescription: placeDescription
      };
      addData(newData);
      // this.setState({ placeName: "", placeDescription: "" });
    }
  };

  //==========================ROUTING AND COMPONENTS=============================//
  render() {
    const {
      state,
      handleSubmit,
      handleName,
      handleDescription,
      addNewData
    } = this;
    const { data, placeName, placeDescription } = state;
    return (
      <div>
        <form className="form" onSubmit={handleSubmit} style={{border:"solid 0px", width:"50%",padding:"30px", marginLeft:"25%"}}>
          <center>
            <lable class="font-weight-bold">Place name:</lable>
            <input type="text" value={placeName} onChange={handleName} />
<br/><br/>
            <lable class="font-weight-bold">Description:</lable>
            <textarea
              cols="20"
              rows="5"
              value={placeDescription}
              onChange={handleDescription}
            ></textarea>
            <br/>
            <button class="btn btn-primary ml-5" onClick={addNewData}>
              Submit
            </button>
          </center>
        </form>
        <br/>
        {data.map((info, i) => {
          return (
            <div class="card ml-5" style={{width:"50%", left:"25%",padding:"30px"}}>
              <div class="card-header">{info.placeName}</div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>{info.placeDescription}</p>
                </blockquote>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Share;
