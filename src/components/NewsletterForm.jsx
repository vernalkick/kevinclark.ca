import React from 'react'
import styled from 'styled-components'
import { device } from '../components/Media'
import TextField from '../components/TextField'
import {Button} from '../components/Button'

const ButtonGroup = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  gap: 20px;
  
  & > *:first-child {
    flex-grow: 1;
  }
`

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    const email = this.state.value
    const payload = {
      "email": email
    }  
    
    fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token baa7a5f4-c189-465f-8269-776d020de7f5'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) { throw response }
      return response.json() 
    })
    .then(result => {
      console.log('A name was submitted: ' + this.state.value)
      console.log(result)
      this.setState({ success: result })
    })
    .catch(error => {
      console.log('oh no')
      console.log(error)
      this.setState({ error: "Something went wrong" })
    })
    
    event.preventDefault();
  }
  
  render() {
    if (this.state.success) {
      return (
        <p>Thank you for subscribing!</p>
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <ButtonGroup>
            <TextField
              label="Email" type="email" required
              value={this.state.value}
              onChange={this.handleChange}
              error={this.state.error} 
            />
            <Button primary>Subscribe</Button>
          </ButtonGroup>
        </form>
      )   
    }
  }
}

export default NewsletterForm
