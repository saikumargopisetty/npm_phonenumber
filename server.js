"use strict"
module.exports = function phoneNumber(phone_no){
    return new Promise((resolve, reject) => {
        if(phone_no === null || phone_no <= 10 ){
            reject("Phone must container at least 10 digist."); 
            console.log("Reject phone number with space");
        }
        phone_no.toString();
        phone_no_len = phone_no.length;
        let phoneWithSpace = "";
        for(i; i < phone_no_len; i++) {
            phoneWithSpace+= str[i]+" ,";
        }
        console.log("phone number with space",phoneWithSpace);
        resolve(phoneWithSpace);
    });
}