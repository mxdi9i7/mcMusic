exports.b = function() {
	var axios = require('axios');
	var _ = require('lodash');
	axios.get('http://rest.learncode.academy/api/myuser/friends').then((res) => {
		var jake = _.find(res.data, {name: "Jake"});
		console.log(jake);
	})
}