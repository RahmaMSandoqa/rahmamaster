import React, { Component } from "react";
import { storage } from "../firebase";
import axios from "axios";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      data:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  handleChange = e => {
    const image = e.target.files[0];
    this.setState(() => ({ image }));
  };

  fileUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
    console.log("url",this.state.url);

    
  };

  //==========================MOUNTING DATA FROM DB=============================//
  componentDidMount = () => {
    axios
      .get("http://localhost:20000/showPhoto")

      .catch(error => {
        console.log(error);
      });
  };

  //==========================ADD DATA INTO DB=============================//
  addPhoto = event => {
    event.preventDefault();
    console.log("DATA",this.state.url);

    let newPhoto = {
      placePhoto: this.state.url
    };
    console.log(newPhoto);

    axios
      .post("http://localhost:20000/addPhoto", newPhoto)
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  render() {
    console.log(this.state.url);
    const style = {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };

    return (
      <div style={style}>
        {/* <form onSubmit={this.addPhoto}> */}
          <progress value={this.state.progress} max="100" />
          <br />
          <input type="file" onChange={this.handleChange} />
          <button onClick={this.fileUpload}>UPLOAD</button>
          <br />
          <img
            src={this.state.url}
            alt="Uploaded images"
            height="300"
            width="400"
          />
        {/* </form> */}
      </div>
    );
  }
}

export default ImageUpload;
// || 'http://via.placeholder.com/400x300'
