exports.login = function(req, res) {
	console.log('!! req:');
	console.log(req.headers['test']);
	res.status(200).end();
//  if (req.body.message != undefined) {
//    // This is an error case, as "message" is required
//    res.status(400).send('No message defined!');
//  } else {
//    // Everything is ok
//    var randomBytes = crypto.randomBytes(20);
//    const hasher = crypto.createHash('sha256');
//    var number = hasher.digest('base64');
//    console.log(req.body.message);
//    console.log(number);
//    res.status(200).end();
//  }
};