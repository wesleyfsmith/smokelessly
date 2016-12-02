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


import HomePage from '/imports/ui/screens/home.jsx';
FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    mount(HomePage);
  }
});

import Transition1 from '/imports/ui/screens/transition1';
FlowRouter.route('/transition1', {
  name: 'home',
  action(params, queryParams) {
    mount(Transition1);
  }
});

import Step2 from '/imports/ui/screens/step2';
FlowRouter.route('/step2', {
  name: 'home',
  action(params, queryParams) {
    mount(Step2);
  }
});

FlowRouter.route('/transition2', {
  name: 'home',
  action(params, queryParams) {
    mount(HomePage);
  }
});

FlowRouter.route('/step3', {
  name: 'home',
  action(params, queryParams) {
    mount(HomePage);
  }
});

FlowRouter.route('/transition3', {
  name: 'home',
  action(params, queryParams) {
    mount(HomePage);
  }
});

import Dashboard from '/imports/ui/screens/dasboard.jsx';
FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action(params, queryParams) {
    mount(Dashboard);
  }
});
