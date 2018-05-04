import jQuery from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/less/styles.less';

jQuery(document).ready(function($) {
  /*======= Skillset *=======*/
  $('.level-bar-inner').css('width', '0');
  $(window).on('load', function() {
      $('.level-bar-inner').each(function() {
          var itemWidth = $(this).data('level');
          $(this).animate({
              width: itemWidth
          }, 800);
      });
  });
});
