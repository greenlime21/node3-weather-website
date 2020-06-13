const request = require('request')

const forecast = (latitude, longitude, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=4240dd1c3d258a50a1b9bc75cbd90da1&query=${latitude},${longitude}`

  request({ url, json: true}, (err, { body }) => {
    if (err) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.current.length === 0) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `現在の気温は${body.current.temperature}度、降水確率は${body.current.precip}％です`)
    }
  })
}

module.exports = forecast