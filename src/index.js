import jQuery from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/less/styles.less';

jQuery(document).ready(($) => {
  /*= ====== Skillset *======= */
  $('.level-bar-inner').css('width', '0');
  $(window).on('load', () => {
    $('.level-bar-inner').each(() => {
      const itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth,
      }, 800);
    });
  });
});
