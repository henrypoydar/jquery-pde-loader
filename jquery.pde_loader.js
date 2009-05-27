/**
 * jQuery PDE Loader Plugin
 *
 * A simple mechanism for loading Processing (.pde) files
 * into canvas elements. Just supply the .pde file and
 * optional strings to prepend and append to the file.
 * Processing.js required of course.
 *
 * Usage:
 *
 *  $('canvas#art').load_pde('sketches/autumn_leaves.pde');
 *
**/

(function($) {
  $.fn.load_pde = function(pde_file, options) {
    
    var defaults = {  
      prefix: '',
      suffix: '',
    };
    
    var options = $.extend(defaults, options);
    
    return this.each(function() {
      ctx = this;
      $.get(pde_file, function(data){ 
        Processing(ctx, [options.prefix, data, options.suffix].join(''));
      });
    });
    
  }
})(jQuery);