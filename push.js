const push = require('web-push')

let vapidKeys = {
  publicKey: 'BAiLUh81TaFio-F1HOEwszgPKeX3wXk8KJN1g12rCjdX-_6PDjJtRUgj30tpKOXJj21moh3Lc9xqongmlGhSZFE',
  privateKey: '5c7JlcSuIZuel1-A0Re7W2HtRQ47rSHotJkPqkzMJbg'
}

push.setVapidDetails('mailto:flockast@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint: "https://fcm.googleapis.com/fcm/send/dOc0vM_7UWU:APA91bHzVmtU2gPXLWt-nle_XTYoqhh81aeQPcAncfitl1R2MKC9a6cjaPJ09CqzGcPr2yqO3-Hq_FryHQdjw7JA8l-wRns3n_LVfzlwDfyqIQHhLuTHbWAyecOABNkqkx7e-c8ZjUjS",
  expirationTime :null,
  keys: {
    p256dh: "BEnj11RGHG7XFz-yiijUw-GKMLniAia0K6f1_mFptWpe7O7rcyz3dqq3KD6NAwAFeqJZRDs6KM9U7gU59MVnnZ4",
    auth: "RvcTohO497Em6_smVbGSjA"
  }
}

push.sendNotification(sub, 'test message')
