# trailpack-sinch

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Sinch Trailpack for sending SMS

## Install
With yo: 
```sh
$ yo trails:trailpack trailpack-sinch
```

With npm:
```sh
$ npm install --save trailpack-sinch
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-sinch')
  ]
}
```

Add configuration for sinch : 
```js
// config/sinch.js
module.exports = {
  /**
   * The "account Key" associated with your Twilio account.
   */
  Key: null,
  /**
   * The "account secret" associated with your Twilio account.
   */
  Secret: null,
  
}
```

## Usage
Use the `SinchService` like this (from controllers/policies/services) : 
```js
//Send basic SMS
this.app.services.SinchService.sendMessage('phoneNumber', 'message').then(function (results) {
  this.app.log.debug('ok')
})
.catch(err => {
  this.app.log.error(err)
})
       
//Send messageid set status
this.app.services.SinchService.getStatus(jsonObj.messageId).then(function (results) {

  this.app.log.debug('ok ',results)
         
})
.catch(err => {
  this.app.log.error(err)
})

```

## Sinch Account 
The use of this requires setting up a sinch sms account (https://www.sinch.com/)

## Credits
This trailpack is inspired by [Jaumard's trailpack-twilio](https://github.com/jaumard/trailpack-twilio)

We love contributions! Please check out our [Contributor's Guide](https://github.com/trailsjs/trails/blob/master/.github/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/johntom/trailpack-sinch/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-sinch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-sinch
[ci-image]: https://img.shields.io/travis/johntom/trailpack-twilio/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/johntom/trailpack-sinch
[daviddm-image]: http://img.shields.io/david/jaumard/trailpack-twilio.svg?style=flat-square
[daviddm-url]: https://david-dm.org/johntom/trailpack-sinch
[codeclimate-image]: https://img.shields.io/codeclimate/github/jaumard/trailpack-twilio.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/jaumard/trailpack-twilio

