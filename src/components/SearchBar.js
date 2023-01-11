import React from 'react';

// Using a class component here because this guy
// has to interact with and update the app's state
class SearchBar extends React.Component {
  state = { query: '' };
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onQuerySubmitted(this.state.query);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Pokemon Search</label>
            <input
              type="text"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
