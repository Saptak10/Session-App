const Session = require('../models/session');

module.exports.addSession = (req, res)=> {
    const { time, duration, course} = req.body

    Session.create({
            
        "time" : time,
        "duration" : duration,
        "course" : course,

    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("Error occured while resgistering!");
        }
        else {
            // And forward to success page
            res.redirect('/');
        }
    });
}

