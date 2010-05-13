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
 * Makes a password field readable when it contains some useful instructions,
 * when the user is ready to enter data, it reverts to a password field.
 * 
 * @author Gregorio Ramirez
 * @requires jQuery
 * @version 1.0
 * @param {Object} options             (Optional) Custom settings
 * @param {String} options.attr        (Optional) html attr that holds the default value
 * @param {String} options.parentClass (Optional) CSS class to add to parent when input has value
 */
$.fn.visiblePasswords = function(options) {
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
		
		// Make sure we're dealing with password fields
		if (this.type === 'password') {
			// Set to readable text if the current 
			// value carries the default instruction
			if (this.value === $this.attr(settings.attr)) {
				this.type = 'text';
			}
			$this.bind('keypress', function(event) {
				if (this.value === $this.attr(settings.attr)) {
					this.type = 'text';
				}
				else {
					this.type = 'password';
				}
			})
			.bind('focusin focusout', function(event) {
				if (!this.value || this.value === $this.attr(settings.attr)) {
						this.type = 'text';
				}
			});			
		}
	});
};

})(jQuery);