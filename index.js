var randomAccess = require('random-access-storage')
var RNFS = require('react-native-fs')

function fileReader(name) {
  return randomAccess({
    read: function (req) {
      RNFS.read(name, req.length, req.offset, 'base64').then(function(data) {
        const buffer = Buffer.from(data, 'base64')
        req.callback(null, Buffer)
      }, function(err) {
        res.callback(err)
      })
    },
    write: function (req) {
      const data = req.data.toString('base64')
      RNFS.write(name, data, req.offset, 'base64').then(function() {
        req.callback(null)
      }, function(err) {
        res.callback(err)
      })
    }
  })
}
