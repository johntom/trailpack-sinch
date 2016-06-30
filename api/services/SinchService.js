'use strict'
const Service = require('trails-service')
const sinchAuth = require('sinch-auth') //const twilio = require('twilio')
var request = require('request');
var sinchMessaging = {};
const _ = require('lodash')
/**
 * @module SinchService
 * @description Sinch Service service for sending SMS
 */


module.exports = class SinchService extends Service {
    /**
     * Send SMS to a number
     * @param to number to send message to
     * @param body message to send, can be null
     * @param options additional options (mediaUrl, accountSid, authToken, from...)
     */

    //   app.services.SinchService.sendMessage(phoneNumber, message).then(function (results) {
    // to=phoneNumber
    
    sendMessage(to, body) {
        console.log('SinchService  to body ',to,body)
        const config = _.defaults(this.app.config.sinch)
        const auth = sinchAuth(config.Key, config.Secret)
       
          const message = {
            // to: to
            // from: config.from
        }
        if (body) {
            message.body = body
        }
        //  var auth = sinchAuth();
        if (!auth) {
            throw new Error("No Authorization was provided");
        }
        var options = {
            method: 'POST',
            url: "https://messagingApi.sinch.com/v1/sms/" + to,
            headers: {
                "Content-Type": "application/json",
                "Authorization": auth
            },
            body: "{\"Message\":\"" + message.body + "\"}"
            //  body: {"Message" : message }
        };
        console.log(' options',options)
        return new Promise((resolve, reject) => {
            request(options, (err, response) => {
                if (err) return reject(err)
                return resolve(response.body)
            })
        })
        //  return new Promise(function (resolve, reject) {
        //     request(options, function (error, response, body) {
        //         console.log("Finished with call");
        //         if (error) {
        //             console.log(error);
        //             throw error;
        //         }
        //         else {
        //             console.log("Finished with body ", body);//.MessageId
        //             return resolve(response.body);
        //         }
        //     });
        // })
    }

    getStatus(messageId) {
        const config = _.defaults(this.app.config.sinch)
        const auth = sinchAuth(config.Key, config.Secret)
       
        if (!auth) {
            throw new Error("No Authorization was provided");
        }
        var options = {
            method: 'GET',
            url: "https://messagingApi.sinch.com/v1/sms/" + messageId,
            headers: {
                "Content-Type": "application/json",
                "Authorization": auth
            }
        };
        // return new Promise(function (resolve, reject) {
        // request(options, function (error, response, body) {
        return new Promise((resolve, reject) => {
            request(options, (err, response) => {
                if (err) return reject(err)
                return resolve(response.body)
            })
        })
    }

  }