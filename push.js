const push = require('web-push')

let vapidKeys = {
  publicKey: 'BAiLUh81TaFio-F1HOEwszgPKeX3wXk8KJN1g12rCjdX-_6PDjJtRUgj30tpKOXJj21moh3Lc9xqongmlGhSZFE',
  privateKey: '5c7JlcSuIZuel1-A0Re7W2HtRQ47rSHotJkPqkzMJbg'
}

push.setVapidDetails('mailto:flockast@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {

}

push.sendNotification(sub, 'test message')
