/**
 * jQuery PDE Loader Plugin
 *
 * A simple mechanism for loading Processing (.pde) files
 * into canvas elements. Just supply the .pde file and
 * an optional array of strings to prefix to the top
 * of the file.  Processing.js required of course.
 *
 * Usage:
 *
 *  $('canvas#art').load_pde('sketches/autumn_leaves.pde');
 *
**/

(function($) {
  $.fn.load_pde = function(pde_file, prefixes) {
    prefixes = (typeof(prefixes) != 'undefined' ? prefixes : []);
    var ctx = this[0];
    $.get(pde_file, function(data){ 
      Processing(ctx, (prefixes.join('\n') + '\n' + data));
    });
  }
})(jQuery); 
