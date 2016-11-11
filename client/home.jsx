import React, { PropTypes } from 'react';
import AOS from 'aos';
import NavBar from '/client/navbar.jsx';

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
            <div className="col-md-12">
              {this.renderSpace()}
                <h1 className="text-center">
                  <div data-aos-delay="200" data-aos="fade-in">More high.</div> <div data-aos-delay="500" data-aos="fade-in">Less hassle.</div>
                </h1>
              <h4 className="text-center" data-aos-delay="700" data-aos="fade-in">
                Subscription vape cartridges
              </h4>
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
            <div className="col-md-4" data-aos-delay="200" data-aos="fade-in">
              <p className="text-center">
                <i className="fa fa-4x fa-leaf green-text"></i>
              </p>
              <h4 className="text-center">
                Skip the dispensary
              </h4>
              <h6>
                Avoid lines at your local dispensary and discretly order online.
                We send you new cartridges each month so you don't have to remember.
              </h6>
            </div>
            <div className="col-md-4" data-aos-delay="400" data-aos="fade-in">
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
            <div className="col-md-4" data-aos-delay="600" data-aos="fade-in">
              <p className="text-center">
                <i className="fa fa-4x fa-heart red-text"></i>
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
          <div className="row text-center">
            {this.smallerSpace()}
            <div className="col-md-12">
              <h3 className="text-center" data-aos="fade-up">
                Choose the monthly cartridge level you want
              </h3>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="col-md-3" data-aos-delay="100" data-aos="fade-in">
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
            <div className="col-md-3" data-aos-delay="300" data-aos="fade-in">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">2 Cartridges</h3>
                </div>
                <div className="panel-body">

                  <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-6 col-xs-6">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                  </div>
                  <h3>$79.95</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos-delay="500" data-aos="fade-in">
              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">3 Cartridges</h3>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-4 col-xs-4">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-4 col-xs-4">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-4 col-xs-4">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                  </div>
                  <h3>$115.95</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos-delay="700" data-aos="fade-in">
              <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">4 Cartridges</h3>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-3 col-xs-3">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-3 col-xs-3">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-3 col-xs-3">
                        <img src="cartridge.png" className="img-responsive center-block" style={imageStyle} />
                    </div>
                    <div className="col-md-3 col-xs-3">
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

        <div className="container-fluid gradient">
          <div className="container">


          <div className="row">
            {this.smallerSpace()}
            <div className="col-md-12">
              <h3 className="text-center">
                Pick the Vapes you want delivered
              </h3>
              <br></br>
              <br></br>
            </div>

            <div className="row">
              <div className="col-md-4">
                <img className="img-responsive" src="bhang.png"/>
              </div>
              <div className="col-md-8">
                <h5>Bhang Private Reserve</h5>
                <p>
                  The award winning cartridge is back with a vengeance after becoming one of the industry’s highly sought after items!  Filled with the purest CO2 extracted cannabis oil, the Bhang Black Private Reserve cartridge carries retained natural terpenes to maintain its true flavor for connoisseurs to enjoy. A premium, highly potent competitor on the market to date, the Bhang Black Cartridge has been favored amongst award ceremonies such as the 2014 San Francisco Patients’ Choice Awards and the recent 2015 Hemp Con in San Francisco, CA.  Try for yourself and become a believer as others have in the signature taste and ultra-refinement of the Bhang Black Private Reserve.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <img className="img-responsive" src="shatter.png"/>
              </div>
              <div className="col-md-8">
                <h5>Shatter Tanks Hardcore OG</h5>
                <p>
                  Shatter Tanks was conjured up in Las Vegas by an inventive husband and wife team. The couple decided to combine years of professional experience in collectives and product design with their passion for helping patients get the quality medicine they need. Shatter Tanks pays a great deal of attention to their hardware to ensure hassle-free and leak-free live resin tanks. This devotion to quality, from seed to tank, also means strain specific full nug runs from award-winning growers and extract artists in selectively limited quantities. Shatter Tanks’ unique approach to vape oils and tanks has earned this thriving company a great deal of well-deserved recognition. The vapes are fitted with a clear, rubber mouthpiece that is meant to stay on the cartridge.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <img className="img-responsive" src="spliffin.jpg"/>
              </div>
              <div className="col-md-8">
                <h5>Spliffin</h5>
                <p>
                  If you live in California and haven’t yet heard of Spliffin, you’re in for a treat. Spliffin produces top-notch cannabis oils, pre-filled in quality vape cartridges that are ready to go! Pure Good Vybes cartridges are highly concentrated cannabis oils rated at 70%+ THC.  Spliffin vape cartridges contain thick oil, rich in terpenes you can taste. Terpenes extracted from premium quality flowers are added back into the oil – exaggerating the flower’s natural taste and aroma. Aside from amazing quality in flavor and potency, these Spliffin cannabis oils are pre-filled in noticeably well-constructed cartridges that feel great to the touch. Having some added weight, the metal cartridges not only feel sturdy, but also look elegant compared to your average vape. The metal mouthpiece tip fits great against the lips, adding a nice finishing touch to the overall vaping experience. The empty cartridges are hard to throw out!
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <img className="img-responsive" src="flavrx.png"/>
              </div>
              <div className="col-md-8">
                <h5>FlavRx</h5>
                <p>
                  FlavRx concentrate represents an advancement in cannabis science. Purified raw cannabinoids are first collected via a solventless process and then unique terpene blends are added to create the different final products. Raw cannabinoids of high purity minimize the exposure to inhaling unwanted fats and waxes that may lead to conditions such as lipid pneumonia. The terpene blends are formulated in a laboratory using food grade components and are prepared based on actual strain data. The final solvent free product is a concentrate that is more like that of the actual flowers and is free of residual solvents and unwanted contaminants. Inspired by strain profiles with every input monitored for purity and quality. FlavRx concentrate represents cutting edge scientific knowledge and cannabis insight in every package.
                </p>
              </div>
            </div>


            {this.smallerSpace()}
          </div>
        </div>
        </div>



        <div className="container">
          <div className="row">
            {this.smallerSpace()}
            <div className="col-md-8 col-md-offset-2" data-aos="fade-in">
              <div className="well well-lg">
                <h3 className="text-center">
                  You're almost done!
                </h3>
                <a className="btn btn-block btn-primary">Checkout</a>
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
