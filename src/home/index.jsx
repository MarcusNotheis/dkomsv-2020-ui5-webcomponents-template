import React, { useEffect } from 'react';

import '@ui5/webcomponents/dist/Card';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/List';
import '@ui5/webcomponents/dist/CustomListItem';
import '@ui5/webcomponents/dist/StandardListItem';
import '@ui5/webcomponents/dist/Timeline';
import '@ui5/webcomponents/dist/TimelineItem';
import '@ui5/webcomponents/dist/Table';
import '@ui5/webcomponents/dist/TableColumn';
import '@ui5/webcomponents/dist/TableRow';
import '@ui5/webcomponents/dist/TableCell';

import '@ui5/webcomponents-icons/dist/icons/product';
import '@ui5/webcomponents-icons/dist/icons/web-cam';
import '@ui5/webcomponents-icons/dist/icons/hide';
import '@ui5/webcomponents-icons/dist/icons/calendar';
import '@ui5/webcomponents-icons/dist/icons/phone';
import '@ui5/webcomponents-icons/dist/icons/fridge';
import '@ui5/webcomponents-icons/dist/icons/lightbulb';
import '@ui5/webcomponents-icons/dist/icons/heating-cooling';
import '@ui5/webcomponents-icons/dist/icons/washing-machine';
import '@ui5/webcomponents-icons/dist/icons/temperature';
import '@ui5/webcomponents-icons/dist/icons/retail-store';

import data from './data.json';
import './styles.css';
import managerImg from '../appbar/profile.png';

/* TODO: FIX THIS */

import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';

addCustomCSS(
  'ui5-card',
  `
    :host .ui5-card-avatar {
      display: none;
    }
  `
);
/* --------------- */

const Home = (props) => {

  // TODO Your code here
  return null;
};

export default Home;
