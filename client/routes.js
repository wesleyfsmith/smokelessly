import React from 'react';
import {mount} from 'react-mounter';

import {Accounts} from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';

//TODO: change this from multiple routes to a single route
const redirectForUserState = () => {
  FlowRouter.go('/dashboard');
};

//user redirect login logic
Accounts.onLogin(() => {
  //TODo: check for appropriate role here
      Meteor.setTimeout(function() { //this is some sort of flow router bug, ugh
        redirectForUserState();
      }, 0);
});

let isLoggingOut = false;

Accounts.onLogout(function() {
  isLoggingOut = true;
  FlowRouter.go('/');
});

Tracker.autorun(() => {
  if (!Meteor.user()) {
    isLoggingOut = false;
    return;
  }
  if (isLoggingOut) {
    return;
  }
  redirectForUserState();
});


import HomePage from '/client/home.jsx';
FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    mount(HomePage);
  }
});

import Dashboard from '/client/dasboard.jsx';
FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action(params, queryParams) {
    mount(Dashboard);
  }
});
