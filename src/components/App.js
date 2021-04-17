import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { image: "" };

  handleSearch = (term) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID Avn2ZNay081eKMhdlL_PcBu5iWvnla44llzOWRgZll8",
        },
      })
      .then((response) => {
        this.setState({ image: response.data.results[0].urls.regular });
      });
  };

  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <img src={this.state.image} />
      </div>
    );
  }
}

export default App;
