import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';



class CartridgePicker extends TrackerReact(React.Component) {

  constructor() {
    super();
    this.state = {
      'THC Vape Oils': {
        '1': 0,
        '2': 0,
        '3': 0
      },
      'CBD Vape Oils': {
        '1': 0,
        '2': 0,
        '3': 0
      },
      'Specialty Flavor Vape Oils': {
        '1': 0,
        '2': 0,
        '3': 0
      }
    }
    this.numberPicked = new ReactiveVar(0);
    this.numberRemaining = new ReactiveVar(Session.get('subscription') - this.numberPicked.get());

    Tracker.autorun(() => {
        this.numberRemaining.set(Session.get('subscription') - this.numberPicked.get());
    });

  }

  alterChoice(increment, choice, option) {



    let tempState = this.state;
    let currentValue = tempState[choice][option];

    if (increment && this.numberRemaining.get() > 0) {
      tempState[choice][option] = currentValue + 1;
      this.numberPicked.set(this.numberPicked.get() + 1);
    }
    if (!increment && currentValue > 0) {
      tempState[choice][option] = currentValue - 1;
      this.numberPicked.set(this.numberPicked.get() - 1);
    }
    this.setState(tempState);
  }
  renderOil(name, category, option) {

    let disabledAdd = '';
    let disabledMinus = '';
    if (this.numberRemaining.get() === 0) {
      disabledAdd = ' disabled';
    }
    if (this.state[category][option] === 0) {
      disabledMinus = ' disabled';
    }

    return (
      <div className="row" style={{marginBottom: '5px'}}>
        <div className="col-xs-3" style={{paddingRight: '5px'}}>
          <a onClick={() => this.alterChoice(false, category, option)} className={"btn btn-danger btn-block" + disabledMinus}><h1 style={{marginTop: '11px'}}>-</h1></a>
        </div>
        <div className="col-xs-3" style={{paddingLeft: '5px'}}>
          <a onClick={() => this.alterChoice(true, category, option)} className={"btn btn-success btn-block" + disabledAdd}><h1 style={{marginTop: '11px'}}>+</h1></a>
        </div>
        <div className="col-xs-1">
          <h1>
            {this.state[category][option]}
          </h1>
        </div>
        <div className="col-xs-5">
          <p>
            {name}
          </p>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">
            Pick Any {this.numberRemaining.get()}
          </h3>

          <h6>
            THC Vape Oils
          </h6>
          {this.renderOil('Sativa, super potent', 'THC Vape Oils', '1')}
          {this.renderOil('Indica, super potent', 'THC Vape Oils', '2')}
          {this.renderOil('Hybrid, super potent', 'THC Vape Oils', '3')}

          <h6>
            CBD Vape Oils
          </h6>
          {this.renderOil('CBD super potent', 'CBD Vape Oils', '1')}
          {this.renderOil('CBD to THC ratio 10:1', 'CBD Vape Oils', '2')}
          {this.renderOil('CBD to THC ratio blen 1:1', 'CBD Vape Oils', '3')}

          <h6>
            Specialty Falvor Vape Oils
          </h6>
          {this.renderOil('50% THC', 'Specialty Flavor Vape Oils', '1')}
          {this.renderOil('25% THC', 'Specialty Flavor Vape Oils', '2')}
          {this.renderOil('35% THC', 'Specialty Flavor Vape Oils', '3')}
        </div>
      </div>
    )
  }
}

export default CartridgePicker;
