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
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="ui search">
            <input
              placeholder="Search Images..."
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div className="results"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
