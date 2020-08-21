'use strict'

const controller = {

    palindrome: (req, res) => {
        let phrase = req.body.phrase;
        let re = /[\W_]/g;

        let lowRegStr = phrase.toLowerCase().replace(re, '');
        let reverseStr = lowRegStr.split('').reverse().join(''); 
        let response = reverseStr === lowRegStr;

        return res.status(200).send({
            palindrome: response
        });
    }
}

module.exports = controller;