import React, { Component } from 'react'
import axios from 'axios';


export default class Form extends Component {
  state={
    position:"",
    company:"",
    description:"",
    link:""
  }
 api  = axios.create({
        baseURL: "http://localhost:5000",
        withCredentials: true
      })
    

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    const {position,company,description,link} = this.state
    axios.post("http://localhost:5000/job",{
      position:this.state.position,
      company:this.state.company,
      description:this.state.description,
      link:this.state.link
    })
    .then(data=>{
      console.log(data)
    })
    
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label for="position">Position</label>
            <input type="text" name="position"  onChange={this.handleChange} />
          <label for="company">Company</label>
            <input type="text" name="company"  onChange={this.handleChange} />
          <label for="description">Description</label>
            <textarea type="text" name="description"  onChange={this.handleChange} />
          <label for="link">Link</label>
            <input type="text" name="link"  onChange={this.handleChange} />

            <button type="submit">post the job</button>
          <style jsx>
            {`
            form{
              display:flex;
              flex-direction:column;
              align-items:center;
              height:100vh;
              padding-top:15px;
            }
            button{
              cursor:pointer;
              background: #f8c0c8;
              height: 57px;
              width: 30%;
              border: none;
              border-radius: 5px;
              font-size: 26px;
              color: white;
            }
            button a{
              display: block;
              width: 100%;
            }
            label{
              font-size: 26px;
              width:90%;
              margin-top:20px;
            }
            input{
              border: 1px solid #ffb8c6;
              width: 90%;
              height: 40px;
              border-radius: 5px;
              margin: 10px 0;
              font-size:20px;
            }  
            textarea{
              border: 1px solid #ffb8c6;
              width: 90%;
              height: 150px;
              border-radius: 5px;
              font-size:20px;
              resize:none
            }  
            hr{
              width:50%;
              height:1px;
              color:#ffb8c6;
            }
            `}
          </style>
        </form>
        
      );
  }
}
