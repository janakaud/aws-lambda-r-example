exports.handler = function(event, context, callback) {
    console.log("boo")
    callback(null, {"message": "Successfully executed"});
}