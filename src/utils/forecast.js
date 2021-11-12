const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'http://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url=`http://api.weatherstack.com/current?access_key=969641121030ad81759e4c3b1273b0d7&query=${latitude},${longitude}`
console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.feelslike + '% chance of rain.')
        }
    })
}

module.exports = forecast