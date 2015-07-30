var base64 = {
	encode : function(input) {
		input = "" + input; // Convert to string for encode
		if (input == "")
			return "";

		var output = '';
		var chr1, chr2, chr3 = '';
		var enc1, enc2, enc3, enc4 = '';
		var i = 0;
		do {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
			output = output + this._keys.charAt(enc1) + this._keys.charAt(enc2)
					+ this._keys.charAt(enc3) + this._keys.charAt(enc4);
			chr1 = chr2 = chr3 = '';
			enc1 = enc2 = enc3 = enc4 = '';
		} while (i < input.length);
		return output;
	},

	_keys : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

};
var urlencode = function(str) {
	return encodeURIComponent(str);
};
function suencode(username){
	return base64.encode(urlencode(username));
}