module.exports = {
  actions: {
    open: {
      f: function() {
        // implementation here, use rpi-gpio node module maybe?
        // if using some extra module, add it to package.json
        console.log('calling action open');
      },
      help: 'Send open signal to the door'
    }
  },
  sensors: {
    temp: {
      f: function() {
        return Math.floor(Math.random() * 100) + 1;;
      },
      type: 'int',
      help: 'get temperature value from TMP36'
    }
  },
  config: {
    'temp.pin.vout': {
      type: 'int',
      default: 1,
      help: 'RPi pin connector number for Vout'
    },
    'temp.unit': {
      type: 'str',
      default: 'C',
      help: '(C/F) Unit of temp output'
    },
    'open.timeout': {
      type: 'int',
      default: 15,
      help: 'Number of seconds to mantain open'
    }
  }
}
