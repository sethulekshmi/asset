'use strict';

let tracing = require(__dirname+'/../../../../tools/traces/trace.js');
let participants = require(__dirname+'/../../participants_info.js');

let read = function(req, res)
{
    tracing.create('ENTER', 'GET blockchain/participants/distributors', {});
   
console.log("entered let");
    if(!participants.hasOwnProperty('distributors'))
    {
        res.status(404);
        let error = {};
        error.message = 'Unable to retrieve distributors';
        error.error = true;
        tracing.create('ERROR', 'GET blockchain/participants/distributors', error);
        res.send(error);
        console.log("entered if");
    }
    else
    {
        tracing.create('EXIT', 'GET blockchain/participants/distributors', {'result':participants.distributors});
        res.send({'result':participants.distributors});
        console.log("entered else");
    }

};
exports.read = read;
