import React from "react";
import axios from "axios";

class App extends React.Component {
  state = { image: "" };

  componentDidMount() {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: "car" },
        headers: {
          Authorization:
            "Client-ID Avn2ZNay081eKMhdlL_PcBu5iWvnla44llzOWRgZll8",
        },
      })
      .then((response) => {
        this.setState({ image: response.data.results[0].urls.regular });
      });
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt="car" />
      </div>
    );
  }
}

export default App;
