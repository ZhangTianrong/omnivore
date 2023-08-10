;(function () {
  var w = window
  var ic = w.Intercom
  console.log('running the intercom script, checking if we are injected: ', ic)

  if (typeof ic === 'function') {
    ic('reattach_activator')
    ic('update', w.intercomSettings)
  } else {
    console.log('injecting the intercom widget')
    var d = document
    var i = function () {
      i.c(arguments)
    }
    i.q = []
    i.c = function (args) {
      i.q.push(args)
    }
    w.Intercom = i
    var l = function () {
      console.log(' running intercom onload script ')

      var s = d.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://widget.intercom.io/widget/lddb7880'
      var x = d.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
    }
    if (w.attachEvent) {
      w.attachEvent('onload', l)
    } else {
      w.addEventListener('load', l, false)
    }
  }
})()
