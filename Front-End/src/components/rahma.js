import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageUpload from "./ImageUpload";
// import firebase from "../firebase/index";

export default class Rahma extends Component {
  state = {
    placeName: "",
    description: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    // firebase
    //   .database('places')
    //   .ref('placeName')
    //   .set({
    //     placeName: this.state.placeName,
    //     // description: this.state.description
    //   })
    //   .catch(error => console.log(error));
  };

  handleName = event => {
    // console.log(event.target.value);
    this.setState({ placeName: event.target.value });
  };

  handleDescription = event => {
    this.setState({ description: event.target.value });
  };

  render() {
    const { state, handleSubmit, handleName, handleDescription } = this;
    const { placeName, description } = state;
    return (
      <div>
        <form className="form-inline" onSubmit={handleSubmit}>
          <center>
            <p class="font-weight-bold">Place name:</p>
            <input type="text" value={placeName} onChange={handleName} />

            <p class="font-weight-bold">Description:</p>
            <textarea
              cols="20"
              rows="5"
              value={description}
              onChange={handleDescription}
            ></textarea>
            <ImageUpload data={state} />
            <button class="btn btn-primary">Submit</button>
          </center>
        </form>
      </div>
    );
  }
}
