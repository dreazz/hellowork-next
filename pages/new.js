import React, { Component } from 'react'
import Form from '../components/form/Form'

export default class jobPost extends Component {
  render() {
    return (
      <div>
        <Form />
        <style jsx>
          {`
            *{
              font-family: 'Montserrat', sans-serif;
            }
          `}
        </style>
      </div>
    )
  }
}
