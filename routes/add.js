var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	console.log(data);
	response.render('index', data);

	data.friends.push(newFriend);

 }