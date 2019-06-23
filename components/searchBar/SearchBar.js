import React, { Component } from 'react'


export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input className="search-bar"onChange={this.props.onChange} placeholder="search your new job..." />
        <style jsx>{`
          .search-bar{
            border: 1px solid #ffb8c6;
            width: 44vw;
            height: 25px;
            border-radius: 5px;
            font-size:20px;
          }    
        `}</style>
      </div>
    )
  }
}
