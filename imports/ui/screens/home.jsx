import React, { PropTypes } from 'react';
import AOS from 'aos';
import NavBar from '/imports/ui/shared/navbar.jsx';
import SubscriptionLevel from '/imports/ui/shared/subscription';

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
    // AOS.init({
    //   offset: 200,
    //   duration: 600,
    //   easing: 'ease-in-sine',
    //   delay: 0
    // });
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
                  <div>Smokelessley</div>
                </h1>
              <h4 className="text-center">
                Good vybe
              </h4>
              <h4 className="text-center" >
                Subscriptions
              </h4>
              <h4 className="text-center" >
                Premium Cartridges
              </h4>
              {this.renderSpace()}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="text-center">
                How it works
              </h2>
              <h6 >
                We have a genuine passion for our products
and want to make it easy for you to select,
purchase and receive your favorite Spliffin vape
cartridges. Our pure cannabis oils are selected,
extracted, distilled, and mixed to produce rich
concentrations of cannabinoids and terpenes
for a variety of patient needs. We create
cleaner, solvent free, safer varieties of great
tasting oils that you’ll look forward to receiving
each month.
              </h6>
              <hr></hr>
            </div>

            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-4" >
                  <p className="text-center">
                    <i className="fa fa-4x fa-leaf green-text"></i>
                  </p>
                  <h4 className="text-center">
                    Skip the dispensary
                  </h4>
                  <h6>
                    Enjoy the convenience of hand
                    delivered orders each month,
                    or arrange to pick it up at our
                    downtown location.
                  </h6>
                </div>
                <div className="col-md-4" >
                  <p className="text-center">
                    <i className="fa fa-4x fa-mobile"></i>
                  </p>
                  <h4 className="text-center">
                    The power to choose
                  </h4>
                  <h6>
                    Choose from different
                    subscription levels and from
                    our wide variety of premium
                    vaping concentrates.
                  </h6>
                </div>
              </div>
              <hr></hr>
              <SubscriptionLevel/>
              <a href="/transition1" className="btn btn-block btn-primary">Choose cartridge types -></a>
              <br></br>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
