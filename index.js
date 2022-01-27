const express = require('express')
const Topgg = require('@top-gg/sdk')
const fetch = require(`node-fetch`)
const app = express()

const webhook = new Topgg.Webhook('<webhook-auth>') //It can be anything

app.post('/vote', webhook.listener(vote => { //ending url
    let value = JSON.stringify({
        content : `<@${vote.user}> voted`
    })
    fetch(`<discord-webhook-url>`, {
        method : 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: value
    }).catch(e => console.log(`Error occured while parsing webhook: `+ e))
  
}))

app.listen(port-here) //port of the console panel
console.log(`Top.gg webhook is ready to go.`)
