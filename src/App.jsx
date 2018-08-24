import * as React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      isSubmitted: false,
    };

    this.submit = this.submit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleName=(e)=>{
    this.setState({
      name: e.target.value
    });
  }
  handleEmail=(e)=>{
    this.setState({
      email: e.target.value
    });
  }
  handleMessage=(e)=>{
    this.setState({
      message: e.target.value
    });
  }

  submit=(e)=>{
    e.preventDefault();
    if(!this.state.name){
        this.setState({error:'please enter name'})
    }
    else if(!this.state.email){
        this.setState({error:'please enter email'})
    }else {
        this.setState({
          error: "",
          isSubmitted: true
        })
        setTimeout(() => {
          this.setState({
            name: "",
            email: "",
            message: "",
            isSubmitted: false
          });
          alert('Form submitted');
        }, 3000)
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.error && <p className="error">{this.state.error}</p>}
          <form onSubmit={this.submit} id="form">
            <div className="row">
              <div className="col-15">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col-85">
                <input type="text" placeholder="Your name.." onChange={this.handleName} value={this.state.name} />
              </div>
            </div>
            <div className="row">
              <div className="col-15">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-85">
                <input type="text" placeholder="Your email.." value={this.state.email} onChange={this.handleEmail} />
              </div>
            </div>
            <div className="row">
              <div className="col-15">
                <label htmlFor="message">Message</label>
              </div>
              <div className="col-85">
                <textarea placeholder="Your message.." className="height" value={this.state.message} onChange={this.handleMessage}></textarea>
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Submit" id="submit" />
            </div>
          </form>
        <div className={(this.state.isSubmitted ? "loading" : "hidden")}></div>
      </div>
    );
  }
}

export default App;
