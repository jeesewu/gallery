import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

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
        this.setState({ images: response.data.results });
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearch={this.handleSearch} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
