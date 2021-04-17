import React from "react";

class SearchBar extends React.Component {
  state = { value: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
