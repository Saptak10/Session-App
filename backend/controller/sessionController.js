const Session = require('../models/session');

module.exports.addSession = (req, res)=> {
    const { date, start, end, course} = req.body

    Session.create({            
        "date" : date,
        "start" : start,
        "end" : end,
        "course" : course,
    }, function (err) {
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

