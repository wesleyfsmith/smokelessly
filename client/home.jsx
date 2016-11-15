import React, { PropTypes } from 'react';
import AOS from 'aos';
import NavBar from '/client/navbar.jsx';
import SignUp from '/client/signup.jsx';
import Subscription from '/client/home.subscription.jsx';
import CartridgePicker from '/client/home.cartridges.jsx';

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
      delay: 0
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
            <div className="col-md-12">
              {this.renderSpace()}
                <h1 className="text-center">
                  <div data-aos="fade-in">Smokelessley</div>
                </h1>
              <h4 className="text-center" data-aos="fade-in">
                Discreet
              </h4>
              <h4 className="text-center" data-aos="fade-in">
                Convenient
              </h4>
              <h4 className="text-center" data-aos="fade-in">
                Premium Vape Cartridges
              </h4>
              {this.renderSpace()}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 data-aos="fade-up" className="text-center">
                How it works
              </h2>
              <h6 data-aos="fade-up">
                Our pure cannabis oils are selected, extracted, distilled, or mixed to produce rich concentrations of cannabinoids and terpenes. We create cleaner, safer varieties of great tasting oiis that you’ll look forward to receiving.
              </h6>
              <hr></hr>
              <br></br>
              <br></br>
            </div>
            <div className="col-md-4" data-aos="fade-in">
              <p className="text-center">
                <i className="fa fa-4x fa-leaf green-text"></i>
              </p>
              <h4 className="text-center">
                Skip the dispensary
              </h4>
              <h6>
                Avoid trips to shops and receive yoru subscriptions at home.
              </h6>
            </div>
            <div className="col-md-4" data-aos="fade-in">
              <p className="text-center">
                <i className="fa fa-4x fa-mobile"></i>
              </p>
              <h4 className="text-center">
                Pick your cartridges
              </h4>
              <h6>
                Choose from a variety of California's best, solvent free cartridges.
              </h6>
            </div>
            <div className="col-md-4" data-aos="fade-in">
              <p className="text-center">
                <i className="fa fa-4x fa-heart red-text"></i>
              </p>
              <h4 className="text-center">
                Online Convenience
              </h4>
              <h6>
                Customize your orders to your personal tastes.
              </h6>
            </div>
            <div className="col-md-12">
              <hr></hr>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h3 className="text-center" data-aos="fade-up">
                Choose the monthly cartridge level you want
              </h3>
              <br></br>
              <br></br>
              <br></br>
              <Subscription/>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h3 className="text-center" data-aos="fade-up">

              </h3>

              <CartridgePicker/>
                <br></br>
                <br></br>
                <br></br>
            </div>
          </div>
        </div>



        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2" data-aos="fade-in">
              <div className="well well-lg">
                <h3 className="text-center">
                  You're almost done. Create an account to complete your checkout.
                </h3>
                <SignUp/>
              </div>

            </div>

            {this.smallerSpace()}
          </div>
        </div>


      </div>

    );
  }
}

export default Home;
