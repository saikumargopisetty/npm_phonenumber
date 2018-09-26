"use strict"

const phoneNumber = (phone_no) => {
    return new Promise((resolve, reject) => {
        phone_no = phone_no.toString();
        if(phone_no === null || phone_no.length <= 10 ){
            return reject("Phone must container at least 10 digist."); 
        }
        let phone_no_len = phone_no.length;
        let phoneWithSpace = "";
        for(var i = 0; i < phone_no_len; i++) {
            phoneWithSpace+= phone_no[i]+" ,";
        }
        return resolve(phoneWithSpace);
    });
}

module.exports.phoneNumber = phoneNumber; 