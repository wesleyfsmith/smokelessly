import React, { PropTypes } from 'react';
import AOS from 'aos';

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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              {this.renderSpace()}
              <div data-aos="fade-up">
                <h1 className="text-center">
                  More high. Less hassle.
                </h1>
              </div>

              <p className="text-center">
                Subscription vape cartridges
              </p>
              {this.renderSpace()}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.smallerSpace()}
            <div className="col-md-12">
              <h2 data-aos="fade-up" className="text-center">
                How it works
              </h2>
              <br></br>
              <br></br>
            </div>
            <div className="col-md-4">
              <p className="text-center">
                <i className="fa fa-4x fa-ban"></i>
              </p>
              <h4 className="text-center">
                Skip the dispensary
              </h4>
              <h6>
                Avoid lines at your local dispensary and discretly order online.
                We send you new cartridges each month so you don't have to remember.
              </h6>
            </div>
            <div className="col-md-4">
              <p className="text-center">
                <i className="fa fa-4x fa-mobile"></i>
              </p>
              <h4 className="text-center">
                Pick your cartridges
              </h4>
              <h6>
                All of our extracts are premium cannabis vape cartridges. You just plug
                the cartridge into vape battery and your ready!
              </h6>
            </div>
            <div className="col-md-4">
              <p className="text-center">
                <i className="fa fa-4x fa-heart"></i>
              </p>
              <h4 className="text-center">
                Enjoy
              </h4>
              <h6>
                Experience the best high of your life with the least burden on your body.
                The smooth vapor is 98% smokeless and one cartridge has over 30 uses.
              </h6>
            </div>
            {this.smallerSpace()}
          </div>
        </div>

        <div className="container">
          <div className="row">
            {this.smallerSpace()}
            <div className="col-md-12">
              <h3 className="text-center">
                4 Types to pick from
              </h3>
              <br></br>
              <br></br>
            </div>

            <div className="col-md-3">
              <img className="img-responsive" src="bhang.png"/>
            </div>
            <div className="col-md-3">
              <img className="img-responsive" src="flavrx.png"/>
            </div>
            <div className="col-md-3">
              <img className="img-responsive" src="openvape.png"/>
            </div>
            <div className="col-md-3">
              <img className="img-responsive" src="shatter.png"/>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <h5>Shatter Tanks Hardcore OG</h5>
                  <p>
                    Shatter Tanks was conjured up in Las Vegas by an inventive husband and wife team. The couple decided to combine years of professional experience in collectives and product design with their passion for helping patients get the quality medicine they need. Shatter Tanks pays a great deal of attention to their hardware to ensure hassle-free and leak-free live resin tanks. This devotion to quality, from seed to tank, also means strain specific full nug runs from award-winning growers and extract artists in selectively limited quantities. Shatter Tanks’ unique approach to vape oils and tanks has earned this thriving company a great deal of well-deserved recognition. The vapes are fitted with a clear, rubber mouthpiece that is meant to stay on the cartridge.
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>FlavRx</h5>
                  <p>
                    FlavRx concentrate represents an advancement in cannabis science. Purified raw cannabinoids are first collected via a solventless process and then unique terpene blends are added to create the different final products. Raw cannabinoids of high purity minimize the exposure to inhaling unwanted fats and waxes that may lead to conditions such as lipid pneumonia. The terpene blends are formulated in a laboratory using food grade components and are prepared based on actual strain data. The final solvent free product is a concentrate that is more like that of the actual flowers and is free of residual solvents and unwanted contaminants. Inspired by strain profiles with every input monitored for purity and quality. FlavRx concentrate represents cutting edge scientific knowledge and cannabis insight in every package.
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>O.PenVAPE</h5>
                  <p>
                    O.PenVAPE has achieved new found glory by introducing their brand new product – the O.Pen Craft Reserve! Collected from hand selected flower with 100% cannabis-derived terpenes this oil is guaranteed to medicate you with it’s top of the line concentrate every time. Reviewers were happy to report that the new Craft Reserve serves clean, smooth hits and would be perfect for your next social or a relaxation by the beach. So what makes the O.penVAPE RESERVE Cartridge stand out from the crowd? The O.penVAPE RESERVE line is a pure cannabis oil cartridge for the choosy cannoisseur.
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>Bhang Private Reserve</h5>
                  <p>
                    The award winning cartridge is back with a vengeance after becoming one of the industry’s highly sought after items!  Filled with the purest CO2 extracted cannabis oil, the Bhang Black Private Reserve cartridge carries retained natural terpenes to maintain its true flavor for connoisseurs to enjoy. A premium, highly potent competitor on the market to date, the Bhang Black Cartridge has been favored amongst award ceremonies such as the 2014 San Francisco Patients’ Choice Awards and the recent 2015 Hemp Con in San Francisco, CA.  Try for yourself and become a believer as others have in the signature taste and ultra-refinement of the Bhang Black Private Reserve.
                  </p>
                </div>
              </div>
            </div>


            {this.smallerSpace()}
          </div>
        </div>

        <div className="container">
          <div className="row text-center">
            {this.smallerSpace()}
            <div className="col-md-12">
              <h3 className="text-center">
                Subscription levels
              </h3>
            </div>
            <div className="col-md-3">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">1 Cartridge</h3>
                </div>
                <div className="panel-body">
                  <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                  <h3>$49.95</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">2 Cartridges</h3>
                </div>
                <div className="panel-body">

                  <div className="row">
                    <div className="col-md-6">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-6">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                  </div>
                  <h3>$79.95</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">3 Cartridges</h3>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-4">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-4">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-4">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                  </div>
                  <h3>$115.95</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">4 Cartridges</h3>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-3">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-3">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-3">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-3">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                  </div>
                  <h3>$145.95</h3>
                </div>
              </div>
            </div>
            {this.smallerSpace()}
          </div>
        </div>

        <div className="container">
          <div className="row">
            {this.smallerSpace()}
            <div className="col-md-8 col-md-offset-2">
              <h3 className="text-center">
                Your almost done!
              </h3>
              <p>
              </p>
              <a className="btn btn-block btn-primary">Checkout</a>
            </div>
            {this.smallerSpace()}
          </div>
        </div>


      </div>

    );
  }
}

export default Home;
