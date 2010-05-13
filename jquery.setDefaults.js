/*
 * Copyright (c) 2010 Gregorio Ramirez, http://gregorioramirez.com
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
 
(function($) {

/**
 * Autofills every input element[text/password] with a default value.
 * If the attr containing the value is empty, an empty string will get stored.
 * This plugin also adds a custom class to the parent of the input when
 * the input carries a user defined value, removes it when it's empty.
 * 
 * @author Gregorio Ramirez
 * @requires jQuery
 * @version 1.0
 * @param {Object} options             (Optional) Custom settings
 * @param {String} options.attr        (Optional) html attr that holds the default value
 * @param {String} options.parentClass (Optional) CSS class to add to parent when input has value
 */
$.fn.setDefaults = function(options) {
	// Options
	options = options || {};
	
	// Default settings
	var settings = {
		attr: 'rel',
		parentClass: 'has-value'
	};
	
	// Extend default settings with user supplied data
	$.extend(settings, options);
	
	return this.each(function() {
		var $this = $(this);
		
		// Set default values
		this.value = $this.attr(settings.attr) || '';
		
		$this.bind('focusin focusout', function(event) {
			// If input gains focus and its value is the default, then remove
			// the default text, and add css class to its parent
			if (event.type === 'focusin' && this.value === $this.attr(settings.attr)) {
				this.value = '';
				$this.parent().addClass(settings.parentClass);
			}
			// If input loses focus and is empty set the default value and
			// remove the the css class from its parent
			else if (event.type === 'focusout' && !this.value) {
				this.value = $this.attr(settings.attr) || '';
				$this.parent().removeClass(settings.parentClass);
			}
		});
	});
};

})(jQuery);