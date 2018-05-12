// import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/less/styles.less';

import Home from './app/home/home';

// Legacy Code
// jQuery(document).ready(($) => {
//   /*= ====== Skillset *======= */
//   $('.level-bar-inner').css('width', '0');
//   $(window).on('load', () => {
//     $('.level-bar-inner').each(() => {
//       const itemWidth = $(this).data('level');
//       $(this).animate({
//         width: itemWidth,
//       }, 800);
//     });
//   });
// });


ReactDOM.render(
  <Home />,
  document.getElementById('root'),
);
