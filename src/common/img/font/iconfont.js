;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-renwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M41.066 811.732c-0.916 0-1.832 0-2.806-0.058-18.304-1.508-32.084-17.731-30.386-36.245 9.486-116.064 77.968-217.451 179.145-270.511-34.107-40.1-53.709-91.423-53.709-145.075 0-123.298 100.337-223.654 223.75-223.654 66.974 0 130.035 29.584 172.692 81.422 11.758 14.334 9.734 35.386-4.562 47.143-14.181 11.719-35.405 9.658-47.124-4.657-29.946-36.321-73.979-57.03-121.007-57.03-86.424 0-156.719 70.372-156.719 156.775 0 50.884 24.755 98.753 66.573 128.107l53.957 38.135-62.603 20.899C155.527 581.398 83.305 673.395 74.354 781.061 72.846 798.543 58.34 811.732 41.066 811.732L41.066 811.732zM41.066 811.732"  ></path>' +
    '' +
    '<path d="M977.328 887.811c-17.35 0-31.836-13.246-33.382-30.729-8.417-101.119-74.8-190.863-169.315-228.73l-61.267-24.507 56.037-34.891c46.399-28.992 74.017-78.711 74.017-132.955 0-86.499-70.199-156.813-156.66-156.813-86.499 0-156.756 70.314-156.756 156.813 0 50.732 24.907 98.677 66.63 128.031l53.861 38.078-62.431 20.938c-102.914 34.584-175.041 126.484-183.974 234.189-1.508 18.303-17.483 31.95-36.093 30.442-18.418-1.432-32.026-17.598-30.595-36.017 9.562-116.235 78.178-217.508 179.335-270.663-34.241-39.985-53.633-91.442-53.633-144.999 0-123.431 100.356-223.673 223.654-223.673s223.577 100.242 223.577 223.673c0 58.557-22.521 113.411-62.05 154.484 92.55 55.352 153.283 151.394 162.444 261.293 1.374 18.304-12.234 34.47-30.614 36.035C979.084 887.677 978.092 887.811 977.328 887.811L977.328 887.811zM977.328 887.811"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-renwu1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M418.625868 676.831093"  ></path>' +
    '' +
    '<path d="M239.495094 832.977385c0-0.539282 0.022513-1.077541 0.077771-1.614777 13.245675-138.764414 129.185244-245.341754 270.382057-245.341754 141.228535 0 257.196757 106.635669 270.38922 245.459435 0.044002 0.459464 0.066515 0.920976 0.075725 1.379417l0.227174 13.481036c0.122797 7.601118 6.323009 13.699 13.925151 13.699l0.718361 0c7.91118 0 14.236236-6.581905 13.916964-14.492062l0 0c-5.307889-132.713604-95.432513-241.680365-217.183438-276.028661 83.308381-35.020608 139.782603-121.649618 129.122823-219.651652-10.629081-97.720625-89.197508-176.542832-186.888458-187.44616-127.991046-14.284331-236.785891 85.952604-236.785891 211.121372 0 88.083128 53.887304 163.80574 130.414235 195.97644-121.758088 34.348296-211.882712 143.315056-217.190601 276.028661l0 0c-0.321318 7.910157 6.003737 14.492062 13.916964 14.492062l0.954745 0c7.689123 0 13.927197-6.236028 13.927197-13.932314L239.495094 832.977385 239.495094 832.977385zM325.344345 373.541555c0-101.796454 82.818217-184.615695 184.610578-184.615695 101.794407 0 184.613648 82.819241 184.613648 184.615695 0 101.795431-82.820264 184.611601-184.613648 184.611601C408.162562 558.154179 325.344345 475.336986 325.344345 373.541555L325.344345 373.541555zM325.344345 373.541555"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)