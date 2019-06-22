import React, { Component } from 'react'


export default class jobCard extends Component {
  render() {
    return (
      <div className="job-card">
        <h1>{this.props.position}</h1>
        <p><strong>Company: </strong>{this.props.company}</p>
        <p><strong>status: </strong>{this.props.status}</p>
        <p><strong>date: </strong>{this.props.date}</p>
        <button><a href={this.props.link} target="_blank">See more</a></button>
      <style jsx>{`
      .job-card{
        border: 2px solid #F8C0C8;
        margin: 3vw;
      }
      
      button{
        background: #F8C0C8;
        height: 6vh;
        width: 100%;
        border: none;
      }
      a{
        color: white;
        font-size: 20px;
        text-decoration: none;
      }
      
      `}
        </style>
      </div>
    )
  }
}
