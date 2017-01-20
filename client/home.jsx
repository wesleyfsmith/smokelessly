import React, { PropTypes } from 'react';
import AOS from 'aos';
import NavBar from '/client/navbar.jsx';
import SignUp from '/client/signup.jsx';
import SubscriptionLevel from '/client/home_sub_level';

const signUpSchema = new SimpleSchema({
  email: {
    label: 'Email',
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    label: "Enter a password",
    min: 8,
    autoform: {
      type: 'password'
    }
  }
});

class Home extends React.Component {

  componentWillMount(){
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }
  componentDidMount() {
    $("#main").animate({ scrollTop: 0 }, "fast");
  }
  renderSpace() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>

    );
  }
  smallerSpace() {
    return (
      <div className="col-md-12">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
  render () {

    const imageStyle = {maxHeight: '100px'};



    return (
      <div id="main">
        <NavBar/>
        <div className="container-fluid splash" >
          <div className="row">
            <div className="col-md-6">
              {this.renderSpace()}
                <h1 className="text-center">
                  <div data-aos-delay="200" data-aos="fade-in">The easiest way to get your vape cartridges.</div>
                </h1>
                <a className="btn btn-block btn-success">
                  Enroll Now
                </a>
            </div>
            <div className="col-md-12">
              {this.renderSpace()}
            </div>
          </div>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h2>
                How It Works
              </h2>
              <p>
                We have a geniune passion for our products and want to make it easy for you to select, purchase and receieve your favorite spliffin vape cartridges.
              </p>
              <hr></hr>
            </div>
          </div>

          <SubscriptionLevel/>


        </div>


      </div>

    );
  }
}

export default Home;
