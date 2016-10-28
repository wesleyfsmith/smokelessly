import React from 'react';
import {mount} from 'react-mounter';

import HomePage from '/client/home.jsx';

FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    mount(HomePage);
  }
});
