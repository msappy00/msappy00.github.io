jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // NOTE Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

var myStorage = function() {
	
	return {
		"get": function(storageName) {
			var value = "";
			
			if(window.sessionStorage)
				value = window.sessionStorage[storageName];
			else
				value = $.cookie(storageName);
				
			return (value==undefined||value==null) ? "" : value;
	    },
	    "set": function(storageName, val) {
	    	if(window.sessionStorage)
					window.sessionStorage[storageName] = val;
				else{				
					$.cookie(storageName, val);
				}
	    },
	    "getl": function(storageName) {
	    		var value = "";
				if(window.localStorage)
					value = window.localStorage[storageName];
				else
					value = $.cookie(storageName);
					
				return (value==undefined||value==null) ? "" : value;
	    },
	    "setl": function(storageName, val) {
	    	if(window.localStorage)
	    		window.localStorage[storageName] = val;
			else
				$.cookie(storageName, val);
	    }
	};
};