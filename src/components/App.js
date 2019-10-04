import React from "react";
import NasaApi from "../api/NasaApi";
import Content from "./Content";

class App extends React.Component {
  state = { data: null };

  componentDidMount() {
    this.getNasaApod();
  }

  getNasaApod = async () => {
    const response = await NasaApi.get("/planetary/apod", {
      params: {
        api_key: "fleWpDAi8uFaOQ9bwumxsCnliCdcrxifdq0f6puQ",
        hd: true
      }
    });
    this.setState({ data: response.data });
  };

  render() {
    return <Content data={this.state.data} />;
  }
}

export default App;
