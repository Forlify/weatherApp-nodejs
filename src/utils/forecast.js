const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/caac7af5d1b77d5f525d5e9a85077153/'+ latitude +','+ longitude +'?units=si'
    request({ url: url, json: true }, (error, {body}) => {
        if(error) {
            callback('unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            const data = body.currently
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + data.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is ' + data.precipProbability +'% chance of rain.')
        }
    })
}

module.exports = forecast