const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoidmlnbmVzaHdhcmFucCIsImEiOiJja3ZxbGs2am9hbDViMm9zNzJka21veWU4In0.oeiZ39S1WP4Qs2osfBfrhg'
// console.log(url)

    request({ url, json: true }, (error, { body }) => {
    //     console.log(body)
    console.log(body.features.length)
   if (error) {
        callback('Unable to connect to location services!', undefined)
     } else if (body.features.length ===0) {
         
            callback('Unable to find location. Try another search.', undefined)
        } else{
            console.log("hai")
           // console.log( body.features[0].center[1],body.features[0].center[0],body.features[0].place_name)
            

         callback(undefined, {latitude: body.features[0].center[1],
            
             longitude: body.features[0].center[0],
               location: body.features[0].place_name
           })
        }
     })
}

module.exports = geocode