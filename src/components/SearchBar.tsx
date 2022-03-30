import React from 'react';

class SearchBar extends React.Component<any, any> {
  state = { term: '' }

  onInputChange = (event: any) => {
    return this.setState({ term: event.target.value })
  }

  onFormSubmit = (event:any) => {
    event.preventDefault();
   this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className="field">
            <label htmlFor="image-search">Image Search</label>
            <input
              type="text"
              id='image-search'
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
