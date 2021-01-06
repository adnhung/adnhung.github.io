/*
 important*/
(function(c) {
    var b = function() {};
    b.test = document.createElement("div");
    b.randomiseArray = function(a) {
        var b = [], d = [], c, e;
        for (c = 0; c < a; c++)
            b[c] = c;
        for (c = 0; c < a; c++)
            e = Math.round(Math.random() * (b.length - 1)),
            d[c] = b[e],
            b.splice(e, 1);
        return d
    }
    ;
    b.sortArray = function(a, b) {
        var d, c = a.length, f = [];
        for (d = 0; d < c; d++)
            f[d] = a[b[d]];
        return f
    }
    ;
    b.keysrt = function(a, b, d) {
        var c = 1;
        d && (c = -1);
        return a.sort(function(a, d) {
            var f = a[b]
              , v = d[b];
            return c * (f < v ? -1 : f > v ? 1 : 0)
        })
    }
    ;
    b.keysrt2 = function(a, b, d, c) {
        var f = 1;
        c && (f = -1);
        return a.sort(function(a, c) {
            var v = a[b][d]
              , e = c[b][d];
            return f * (v < e ? -1 : v > e ? 1 : 0)
        })
    }
    ;
    b.isEmpty = function(a) {
        return 0 == a.replace(/^\s+|\s+$/g, "").length
    }
    ;
    b.checkKey = function(a) {
        return a.replace(/[^0-9a-zA-Z_-\s(),]/g, "")
    }
    ;
    b.stripSlashes = function(a) {
        a = a.replace(/\\/g, "/");
        a = a.replace(/\\'/g, "'");
        a = a.replace(/\\"/g, '"');
        a = a.replace(/\\0/g, "\x00");
        return a = a.replace(/\\\\/g, "\\")
    }
    ;
    b.filterAllowedChars = function(a) {
        var b = a.length, d = "", c, e, r;
        for (c = 0; c < b; c++)
            if (e = a.charAt(c).toLowerCase(),
            "\\" == e && (e = "/"),
            r = e.charCodeAt(0),
            97 <= r && 122 >= r || 48 <= r && 57 >= r || 0 <= "_-".indexOf(e))
                d += e;
        return d
    }
    ;
    b.selectText = function(a) {
        var b = document;
        a = b.getElementById(a);
        var d;
        b.body.createTextRange ? (b = b.body.createTextRange(),
        b.moveToElementText(a),
        b.select()) : c.getSelection && (d = c.getSelection(),
        b = b.createRange(),
        b.selectNodeContents(a),
        d.removeAllRanges(),
        d.addRange(b))
    }
    ;
    b.getVideoFormat = function() {
        var a = document.createElement("video");
        if (a.canPlayType) {
            var b;
            if ("probably" == a.canPlayType("video/mp4") || "maybe" == a.canPlayType("video/mp4"))
                b = ".mp4";
            else if ("probably" == a.canPlayType("video/ogg") || "maybe" == a.canPlayType("video/ogg"))
                b = ".ogg";
            else if ("probably" == a.canPlayType("video/webm") || "maybe" == a.canPlayType("video/webm"))
                b = ".webm";
            return b
        }
    }
    ;
    b.videoSupport = function() {
        return !!document.createElement("video").canPlayType
    }
    ;
    b.canPlayVorbis = function() {
        var a = document.createElement("video");
        return !(!a.canPlayType || !a.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/no/, ""))
    }
    ;
    b.canPlayMp4 = function() {
        var a = document.createElement("video");
        return !(!a.canPlayType || !a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""))
    }
    ;
    b.canPlayWebM = function() {
        var a = document.createElement("video");
        return !(!a.canPlayType || !a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""))
    }
    ;
    b.audioSupport = function() {
        return !!document.createElement("audio").canPlayType
    }
    ;
    b.canPlayMp3 = function() {
        var a = document.createElement("audio");
        return !(!a.canPlayType || !a.canPlayType("audio/mpeg;").replace(/no/, ""))
    }
    ;
    b.canPlayOgg = function() {
        var a = document.createElement("audio");
        return !(!a.canPlayType || !a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))
    }
    ;
    b.volumeCanBeSet = function() {
        var a = document.createElement("audio");
        if (!a)
            return !1;
        a.volume = 0;
        return 0 == a.volume ? !0 : !1
    }
    ;
    b.hasPointerEvent = function() {
        return !!c.navigator.msPointerEnabled
    }
    ;
    b.isMobile = function() {
        return b.hasPointerEvent && 1 < navigator.msMaxTouchPoints ? !0 : /Android|webOS|iPhone|iPad|iPod|sony|BlackBerry/i.test(navigator.userAgent)
    }
    ;
    b.isMac = function() {
        return -1 != navigator.appVersion.toLowerCase().indexOf("mac")
    }
    ;
    b.isWin = function() {
        return -1 != navigator.appVersion.toLowerCase().indexOf("win")
    }
    ;
    b.isIOS = function() {
        return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
    }
    ;
    b.isAndroid = function() {
        return -1 < navigator.userAgent.indexOf("Android")
    }
    ;
    b.isiPad = function() {
        return -1 < navigator.userAgent.indexOf("iPad")
    }
    ;
    b.isiPhoneIpod = function() {
        var a = navigator.userAgent;
        return -1 < a.indexOf("iPhone") || -1 < a.indexOf("iPod")
    }
    ;
    b.isSafari = function() {
        return 0 < Object.prototype.toString.call(c.HTMLElement).indexOf("Constructor")
    }
    ;
    b.isChrome = function() {
        var a = navigator.userAgent
          , b = !(0 < Object.prototype.toString.call(c.HTMLElement).indexOf("Constructor")) && "WebkitTransform"in document.documentElement.style;
        (-1 < a.indexOf("iPhone") || -1 < a.indexOf("iPod") || -1 < a.indexOf("iPad")) && a.match("CriOS") && (b = !0);
        return b
    }
    ;
    b.isOpera = function() {
        return !(!c.opera || !c.opera.version)
    }
    ;
    b.isIE = function() {
        var a = c.navigator.userAgent
          , b = a.indexOf("MSIE ");
        if (0 < b)
            return parseInt(a.substring(b + 5, a.indexOf(".", b)), 10);
        if (0 < a.indexOf("Trident/"))
            return b = a.indexOf("rv:"),
            parseInt(a.substring(b + 3, a.indexOf(".", b)), 10);
        b = a.indexOf("Edge/");
        return 0 < b ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : !1
    }
    ;
    b.parseXML = function(a) {
        if (c.ActiveXObject && c.GetObject) {
            var b = new ActiveXObject("Microsoft.XMLDOM");
            b.loadXML(a);
            return b
        }
        if (c.DOMParser)
            return (new DOMParser).parseFromString(a, "text/xml");
        throw Error("No XML parser available");
    }
    ;
    b.baseUrl = function() {
        return c.location.href.replace(c.location.hash, "")
    }
    ;
    b.protocol = function() {
        return c.location.protocol
    }
    ;
    b.qualifyURL = function(a) {
        var b = document.createElement("a");
        b.href = a;
        return b.href
    }
    ;
    b.hasLocalStorage = function() {
        try {
            return "localStorage"in c && null !== c.localStorage
        } catch (a) {
            return !1
        }
    }
    ;
    b.validateEmail = function(a) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(a) ? !0 : !1
    }
    ;
    b.hasDownloadSupport = function(a) {
        return "download"in document.createElement("a")
    }
    ;
    b.getScrollOffsets = function() {
        if (null != c.pageXOffset)
            return {
                x: c.pageXOffset,
                y: c.pageYOffset
            };
        if ("CSS1Compat" == document.compatMode)
            return {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop
            }
    }
    ;
    b.getViewportSize = function() {
        return b.hasPointerEvent && 1 < navigator.msMaxTouchPoints ? {
            w: document.documentElement.clientWidth || c.innerWidth,
            h: document.documentElement.clientHeight || c.innerHeight
        } : b.isMobile ? {
            w: c.innerWidth,
            h: c.innerHeight
        } : {
            w: document.documentElement.clientWidth || c.innerWidth,
            h: document.documentElement.clientHeight || c.innerHeight
        }
    }
    ;
    b.getViewportMouseCoordinates = function(a) {
        var c = b.getScrollOffsets();
        return a.touches ? {
            screenX: void 0 == a.touches[0] ? a.touches.pageX - c.x : a.touches[0].pageX - c.x,
            screenY: void 0 == a.touches[0] ? a.touches.pageY - c.y : a.touches[0].pageY - c.y
        } : {
            screenX: void 0 == a.clientX ? a.pageX - c.x : a.clientX,
            screenY: void 0 == a.clientY ? a.pageY - c.y : a.clientY
        }
    }
    ;
    b.supportCalc = function() {
        return checkCalc("-webkit-") || checkCalc("-moz-") || checkCalc()
    }
    ;
    checkCalc = function(a) {
        a = a || "";
        var b = document.createElement("div");
        b.style.cssText = a + "width: calc(1px);";
        return !!b.style.length
    }
    ;
    b.supportsTransitions = function() {
        var a = document.createElement("p").style;
        return "transition"in a || "WebkitTransition"in a || "MozTransition"in a || "msTransition"in a || "OTransition"in a
    }
    ;
    b.hasCanvas = function() {
        return !!document.createElement("canvas")
    }
    ;
    b.hasFullscreen = function() {
        return b.test.requestFullscreen || b.test.mozRequestFullScreen || b.test.msRequestFullscreen || b.test.oRequestFullscreen || b.test.webkitRequestFullScreen
    }
    ;
    b.preventSelect = function(a) {
        jQuery(a).each(function() {
            jQuery(this).attr("unselectable", "on").css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).each(function() {
                this.onselectstart = function() {
                    return !1
                }
            })
        })
    }
    ;
    b.disableSelection = function(a) {
        try {
            a.style.userSelect = "none"
        } catch (f) {}
        try {
            a.style.MozUserSelect = "none"
        } catch (f) {}
        try {
            a.style.webkitUserSelect = "none"
        } catch (f) {}
        try {
            a.style.khtmlUserSelect = "none"
        } catch (f) {}
        try {
            a.style.oUserSelect = "none"
        } catch (f) {}
        try {
            a.style.msUserSelect = "none"
        } catch (f) {}
        try {
            a.msUserSelect = "none"
        } catch (f) {}
        a.onselectstart = function() {
            return !1
        }
    }
    ;
    b.counter = function(a) {
        return 9 > a ? "0" + (a + 1) : a + 1
    }
    ;
    b.isNumber = function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }
    ;
    b.getRandomInt = function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    }
    ;
    b.formatCurrentTime = function(a) {
        a = Math.round(a);
        minutes = Math.floor(a / 60);
        minutes = 10 <= minutes ? minutes : "" + minutes;
        a = Math.floor(a % 60);
        return minutes + ":" + (10 <= a ? a : "0" + a)
    }
    ;
    b.formatDuration = function(a) {
        a = Math.round(a);
        minutes = Math.floor(a / 60);
        minutes = 10 <= minutes ? minutes : "" + minutes;
        a = Math.floor(a % 60);
        return minutes + ":" + (10 <= a ? a : "0" + a)
    }
    ;
    b.hmsToSecondsOnly = function(a) {
        a = a.split(":");
        for (var b = 0, d = 1; 0 < a.length; )
            b += d * parseInt(a.pop()),
            d *= 60;
        return b
    }
    ;
    b.checkBoolean = function(a) {
        if ("string" === typeof a)
            switch (a.toLowerCase()) {
            case "true":
            case "yes":
            case "1":
                return !0;
            case "false":
            case "no":
            case "0":
            case null:
                return !1;
            default:
                return !!a
            }
        else if ("boolean" === typeof a)
            return !!a
    }
    ;
    c.AWPUtils = b
}
)(window);
(function(c, b) {
    c.AWPTooltip = function(a) {
        b("body");
        b(document);
        var f = b(c), d = a.parent, v = !1, e;
        this.setData = function() {
            e = 0 < d.find(".awp-tooltip").length ? d.find(".awp-tooltip") : b('<div class="awp-tooltip"><p class="awp-tooltip-inner"></p></div>').appendTo(d).hide()
        }
        ;
        this.show = function() {}
        ;
        this.hide = function() {
            e.hide()
        }
        ;
        this.seekbar = function(a, b, c, F) {
            if (v)
                return !1;
            e.addClass("awp-tooltip-num").find("p").text(AWPUtils.formatCurrentTime(c) + " / " + AWPUtils.formatDuration(F));
            c = d.offset().left;
            F = d.offset().top;
            b.offset();
            var r = b.offset().top;
            b.outerWidth();
            var A = b.outerHeight()
              , t = e.outerWidth()
              , z = e.outerHeight()
              , w = f.width();
            f.height();
            var m = f.scrollLeft();
            f.scrollTop();
            a = a.pageX;
            var D = a - c, p, N;
            b.hasClass("awp-tooltip-top") ? (p = D - t / 2,
            N = r - F - z) : b.hasClass("awp-tooltip-bottom") && (p = D - t / 2,
            N = r - F + A + 15);
            p + t + c - m > w && (p = a - c - t);
            0 > p + c - m && (p = a - c);
            p + t + c - m > w && (p = w - t - c + m);
            e.css({
                left: parseInt(p, 10) + "px",
                top: parseInt(N, 10) + "px"
            }).show()
        }
        ;
        this.circle = function(a, b, c, f) {
            if (v)
                return !1;
            e.addClass("awp-tooltip-num").find("p").text(AWPUtils.formatCurrentTime(c) + " / " + AWPUtils.formatDuration(f));
            a = d.offset().left;
            c = d.offset().top;
            f = b.offset().left;
            var r = b.offset().top
              , A = b.outerWidth();
            b.outerHeight();
            var F = e.outerWidth(), t = e.outerHeight(), w, m;
            b.hasClass("awp-tooltip-top") && (w = f - a + A / 2 - F / 2,
            m = r - c - t - 10);
            e.css({
                left: parseInt(w, 10) + "px",
                top: parseInt(m, 10) + "px"
            }).show()
        }
        ;
        this.volume = function(a, b, c) {
            if (v)
                return !1;
            e.addClass("awp-tooltip-num").find("p").text(c + " %");
            c = d.offset().left;
            var f = d.offset().top
              , r = b.offset().left
              , A = b.offset().top
              , t = b.outerWidth()
              , z = b.outerHeight()
              , w = e.outerWidth()
              , m = e.outerHeight()
              , D = a.pageX - c;
            a = a.pageY - f;
            var p, N;
            b.hasClass("awp-tooltip-top") ? b.hasClass("awp-vertical") ? (p = r - c + t / 2 - w / 2,
            N = a - m - 10) : (p = D - w / 2,
            N = A - f - m) : b.hasClass("awp-tooltip-bottom") ? b.hasClass("awp-vertical") ? (p = r - c + t / 2 - w / 2,
            N = a + m + 10) : (p = D - w / 2,
            N = A - f + z + 10) : b.hasClass("awp-tooltip-left") && b.hasClass("awp-vertical") && (p = r - c - w - 5,
            N = a - m / 2);
            e.css({
                left: parseInt(p, 10) + "px",
                top: parseInt(N, 10) + "px"
            }).show()
        }
        ;
        this.controls = function(a, b) {
            if (v)
                return !1;
            e.removeClass("awp-tooltip-num").find("p").text(b);
            var c = d.offset().left
              , f = d.offset().top
              , r = a.offset().left
              , k = a.offset().top
              , t = a.outerWidth()
              , z = a.outerHeight()
              , w = e.outerWidth()
              , m = e.outerHeight();
            a.hasClass("awp-tooltip-top") ? (c = r - c + t / 2 - w / 2,
            f = k - f - m) : a.hasClass("awp-tooltip-top-right") ? (c = r - c,
            f = k - f - m) : a.hasClass("awp-tooltip-top-left") ? (c = r - c + t - w,
            f = k - f - m) : a.hasClass("awp-tooltip-right") ? (c = r - c + t + 10,
            f = k - f + z / 2 - m / 2) : a.hasClass("awp-tooltip-bottom") ? (c = r - c + t / 2 - w / 2,
            f = k - f + z + 10) : a.hasClass("awp-tooltip-bottom-left") ? (c = r - c + t - w,
            f = k - f + z + 10) : a.hasClass("awp-tooltip-left") ? (c = r - c - 10 - w,
            f = k - f + z / 2 - m / 2) : (c = r - c + t / 2 - w / 2,
            f = k - f - m);
            e.css({
                left: parseInt(c, 10) + "px",
                top: parseInt(f, 10) + "px"
            }).show()
        }
        ;
        this.setValue = function(a) {
            e.find("p").text(a)
        }
        ;
        this.setState = function(a) {
            v = a
        }
        ;
        this.setData()
    }
}
)(window, jQuery);
(function(c, b) {
    c.AWPTouchManager = function(a) {
        function f(a) {
            k || b(t).trigger("AWPTouchManager.MOUSE_MOVE", {
                elem: b(a.currentTarget),
                e: a
            })
        }
        function d(a) {
            k || (b(a.currentTarget).off("mousemove", f).off("mouseleave", d),
            A.off("mouseleave", v),
            b(t).trigger("AWPTouchManager.MOUSE_LEAVE", {
                elem: b(a.currentTarget),
                e: a
            }))
        }
        function v(a) {
            b(a.currentTarget).off("mousemove", f).off("mouseleave", d);
            A.off("mouseleave", v);
            b(t).trigger("AWPTouchManager.MOUSE_LEAVE", {
                elem: b(a.currentTarget),
                e: a
            })
        }
        function e(a) {
            m && (D = [a.pageX, a.pageY]);
            if (!k) {
                var c;
                if ("touchstart" == a.type)
                    if ((c = a.originalEvent.touches) && 0 < c.length)
                        c = c[0];
                    else
                        return !1;
                else
                    c = a.originalEvent,
                    a.preventDefault();
                k = !0;
                A.on(z, function(a) {
                    a: if (!m || a.pageX !== D[0] || a.pageY !== D[1]) {
                        var c;
                        if ("touchmove" == a.type) {
                            if (a.originalEvent.touches && a.originalEvent.touches.length)
                                c = a.originalEvent.touches;
                            else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length)
                                c = a.originalEvent.changedTouches;
                            else
                                break a;
                            if (1 < c.length)
                                break a;
                            c = c[0]
                        } else
                            c = a.originalEvent;
                        a.preventDefault();
                        b(t).trigger("AWPTouchManager.DRAG_MOVE", {
                            elem: H,
                            point: c,
                            e: a
                        })
                    }
                }).on(w, function(a) {
                    r(a)
                });
                H.on(w, function(a) {
                    r(a)
                });
                b(t).trigger("AWPTouchManager.DRAG_START", {
                    elem: H,
                    point: c,
                    e: a
                })
            }
            return !1
        }
        function r(a) {
            if (k) {
                k = !1;
                A.off(z).off(w);
                H.off(w);
                var c;
                if ("touchend" == a.type) {
                    if (a.originalEvent.touches && a.originalEvent.touches.length)
                        c = a.originalEvent.touches;
                    else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length)
                        c = a.originalEvent.changedTouches;
                    else
                        return !1;
                    if (1 < c.length)
                        return !1;
                    c = c[0]
                } else
                    c = a.originalEvent;
                a.preventDefault();
                F || A.off("mouseleave", v);
                b(t).trigger("AWPTouchManager.DRAG_RELEASE", {
                    name: "DRAG_RELEASE",
                    elem: H,
                    point: c,
                    e: a
                })
            }
            return !1
        }
        var t = this;
        b("body");
        var A = b(document);
        b(c);
        var F = AWPUtils.isMobile(), H, k = !1, L, z, w, m = AWPUtils.isChrome(), D = [];
        this.setData = function() {
            "ontouchstart"in c ? (L = "touchstart.ap mousedown.ap",
            z = "touchmove.ap mousemove.ap",
            w = "touchend.ap mouseup.ap") : c.PointerEvent ? (L = "pointerdown.ap",
            z = "pointermove.ap",
            w = "pointerup.ap") : (L = "mousedown.ap",
            z = "mousemove.ap",
            w = "mouseup.ap");
            var p, m = a.length;
            for (p = 0; p < m; p++)
                a[p].on(L, function(a) {
                    a.preventDefault();
                    if (k)
                        return !1;
                    H = b(this);
                    e(a);
                    return !1
                });
            if (!F)
                for (p = 0; p < m; p++)
                    a[p].on("mouseenter", function(a) {
                        if (k)
                            return !1;
                        H = b(this).on("mouseleave", d);
                        if (H.data("apmove"))
                            H.on("mousemove", f);
                        A.on("mouseleave", v);
                        b(t).trigger("AWPTouchManager.MOUSE_ENTER", {
                            elem: H,
                            e: a
                        })
                    })
        }
        ;
        this.isDrag = function() {
            return k
        }
        ;
        this.setData()
    }
}
)(window, jQuery);
(function(c, b) {
    c.AWPDownloadManager = function(a) {
        function f(a, c, f) {
            b.ajax({
                type: "POST",
                url: r + "includes/mail.php",
                data: "mail=" + a + "&title=" + c + "&path=" + f
            }).done(function(a) {
                F = !1
            }).fail(function(a, b, c) {
                console.log("Send email error: " + a.responseText);
                d();
                F = !1
            });
            A.css({
                marginTop: parseInt(-A.height() / 2, 10) + "px",
                display: "block"
            }).stop().animate({
                opacity: 1
            }, {
                duration: 500
            });
            L && clearTimeout(L);
            L = setTimeout(d, 2E3)
        }
        function d() {
            L && clearTimeout(L);
            A.stop().animate({
                opacity: 0
            }, {
                duration: 500,
                complete: function() {
                    A.css("display", "none")
                }
            })
        }
        var v = AWPUtils.isMobile();
        b("body");
        b(document);
        var e = a.parent, r = a.settings.sourcePath, t, A, F, H, k, L;
        this.setData = function() {
            t = 0 < e.find("iframe.awp-dl-iframe").length ? e.find("iframe.awp-dl-iframe") : b('<iframe class="awp-dl-iframe"/>').css({
                position: "absolute",
                left: "-10000px",
                display: "none"
            }).appendTo(e);
            v && (A = e.find(".awp-download-confirm"))
        }
        ;
        this.download = function(a, b) {
            var d;
            if (F)
                return !1;
            if ("file:" == c.location.protocol)
                return console.log("Downloading files locally is not possible! This requires online server connection."),
                !1;
            var e = a;
            d = b;
            e.indexOf("\\") && (e = e.replace(/\\/g, "/"));
            e.match(/^http([s]?):\/\/.*/) || (e = AWPUtils.qualifyURL(e));
            v || (d = d.replace(/[^A-Z0-9\-\_\.]+/ig, "_"));
            50 < d.length && (d = d.substr(0, 50) + "...");
            v || /\.(mp3)$/i.test(d) || (d += ".mp3");
            if (v) {
                F = !0;
                if (!H) {
                    for (var p = prompt("Please enter your email address where download link will be sent:"); (!AWPUtils.validateEmail(p) || AWPUtils.isEmpty(p)) && null != p; )
                        p = prompt("Please enter a valid email address:");
                    (k = p) && (H = !0)
                }
                k ? f(k, d, e) : F = !1
            } else
                t.attr("src", r + "includes/dl.php?path=" + e + "&title=" + d)
        }
        ;
        this.setData()
    }
}
)(window, jQuery);
(function(c, b) {
    c.AWPShareManager = function(a) {
        AWPUtils.isMobile();
        var b = a.settings.facebookAppId
          , d = "https:" == c.location.protocol ? "https:" : "http:";
        this.setData = function() {
            if (AWPUtils.isEmpty(b))
                console.log("facebookAppId has not been set in settings!");
            else {
                var a, e;
                c.FB || !b || document.body.querySelector("#fb-root") || (e = document.createElement("script"),
                e.text = "window.fbAsyncInit=function(){FB.init({appId:'" + b + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + d + "//connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')",
                a = document.createElement("div"),
                a.id = "fb-root",
                document.body.appendChild(a),
                document.body.appendChild(e))
            }
        }
        ;
        this.share = function(a, b, f) {
            var e = (c.screen.width - 600) / 2
              , v = (c.screen.height - 300) / 2
              , r = b.description || ""
              , H = b.thumb ? AWPUtils.qualifyURL(b.thumb) : "";
            b = b.share;
            var k;
            if ("facebook" == a) {
                if (k = d + "//www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b),
                c.FB) {
                    c.FB && FB.ui({
                        method: "feed",
                        name: document.title,
                        link: b,
                        picture: H,
                        caption: f
                    });
                    return
                }
            } else
                "twitter" == a ? k = d + "//twitter.com/share?url=" + encodeURIComponent(b) + "&text=" + encodeURIComponent(f) : "googleplus" == a ? k = d + "//plus.google.com/share?url=" + encodeURIComponent(b) : "tumblr" == a && (k = d + "//www.tumblr.com/share/link?url=" + encodeURIComponent(b) + "&amp;name=" + encodeURIComponent(f) + "&amp;description=" + encodeURIComponent(r));
            k && c.open(k, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=600,height=300,left=" + e + ",top=" + v + "")
        }
        ;
        this.setData()
    }
}
)(window, jQuery);
(function(c, b) {
    c.AWPSoundLoader = function(a) {
        function f() {
            L.length ? (k = L.shift(),
            D = k.limit || 200,
            d()) : (z = b.grep(z, function(a) {
                return a
            }),
            b(F).trigger("AWPSoundLoader.END_LOAD", [z]))
        }
        function d() {
            if ("file:" == c.location.protocol)
                alert("Using " + k.type + " locally is not possible! This requires online server connection!"),
                f();
            else {
                var a = k.type
                  , d = k.path;
                "podcast" == a ? (a = H + "?url=" + encodeURIComponent(d),
                b.ajax({
                    url: a,
                    dataType: "json",
                    cache: !1
                }).done(function(a) {
                    var c = AWPUtils.parseXML(a.contents), d, e, p, v = 0;
                    b(c).find("image").length && b(c).find("image").attr("href") ? p = b(c).find("image").attr("href") : b(a.contents).find("itunes\\:image").length && b(a.contents).find("itunes\\:image").attr("href") && (p = b(a.contents).find("itunes\\:image").attr("href"));
                    b(c).find("item").each(function() {
                        if (v == D)
                            return !1;
                        d = b(this);
                        e = b.extend(!0, {}, k);
                        e.type = "audio";
                        e.mp3 = d.find("enclosure").attr("url");
                        "undefined" !== typeof e.download && AWPUtils.isEmpty(e.download) && (e.download = e.mp3);
                        !e.title && d.find("title").length && (e.title = d.find("title").text());
                        !e.artist && d.find("author").length && (e.artist = d.find("author").text());
                        !e.description && d.find("description").length && (e.description = d.find("description").text());
                        !e.duration && d.find("duration").length && (e.duration = d.find("duration").text());
                        e.thumb || (d.find("image").length && d.find("image").attr("href") ? e.thumb = d.find("image").attr("href") : p && (e.thumb = p));
                        "undefined" === typeof e.share && d.find("link").length && (e.share = d.find("link").text());
                        z.push(e);
                        v++
                    });
                    f()
                }).fail(function(a, b, c) {
                    console.log("Podcast process failed: " + d);
                    f()
                })) : "soundcloud" == a ? w ? e(d) : v(a, d) : "soundcloud_query" == a && (w ? t(k.query) : v(a, k.query))
            }
        }
        function v(a, b) {
            if (AWPUtils.isEmpty(m))
                return alert("soundCloudAppId has not been set! Skipping Soundcloud url: " + b),
                f(),
                !1;
            var d = document.createElement("script");
            d.src = "https://connect.soundcloud.com/sdk.js";
            var p = document.getElementsByTagName("script")[0];
            p.parentNode.insertBefore(d, p);
            var v = setInterval(function() {
                c.SC && (v && clearInterval(v),
                SC.initialize({
                    client_id: m
                }),
                w = !0,
                "soundcloud" == a ? e(b) : "soundcloud_query" == a && t(b))
            }, 100)
        }
        function e(a) {
            /\/favorites$/.test(a) && (a = a.replace(/\/favorites$/, "/likes"));
            SC.get("/resolve", {
                url: a
            }, function(a, b) {
                if (b && b.message)
                    return console.log(b.message),
                    f(),
                    !1;
                if (jQuery.isArray(a)) {
                    var c, d = a.length;
                    d > D && (d = D);
                    for (c = 0; c < d; ++c)
                        z.push(A(a[c], !0));
                    f()
                } else if ("playlist" == a.kind) {
                    d = a.tracks.length;
                    d > D && (d = D);
                    for (c = 0; c < d; ++c)
                        z.push(A(a.tracks[c], !0));
                    f()
                } else
                    "user" == a.kind ? r("/users/" + a.id + "/tracks") : "group" == a.kind ? r("/groups/" + a.id + "/tracks") : "track" == a.kind && (z.push(A(a)),
                    f())
            })
        }
        function r(a) {
            SC.get(a, {
                limit: 200,
                linked_partitioning: 1
            }, function(a, b) {
                var c, d = a.collection.length, e;
                z.length + d >= D && (d = D - z.length,
                e = !0);
                for (c = 0; c < d; ++c)
                    z.push(A(a.collection[c], !0));
                a.next_href && !e ? r(a.next_href) : f()
            })
        }
        function t(a) {
            SC.get("/tracks", {
                q: a,
                limit: 200,
                linked_partitioning: 1
            }, function(a) {
                var b, c = a.collection.length, d;
                z.length + c >= D && (c = D - z.length,
                d = !0);
                for (b = 0; b < c; ++b)
                    z.push(A(a.collection[b], !0));
                a.next_href && !d ? r(a.next_href) : f()
            })
        }
        function A(a, b) {
            if (a.streamable && a.stream_url) {
                var c = jQuery.extend(!0, {}, k);
                c.type = "audio";
                a.duration && (c.duration = a.duration);
                c.mp3 = a.stream_url + "?client_id=" + m;
                "undefined" !== typeof c.download && AWPUtils.isEmpty(c.download) && a.downloadable && a.download_url && (c.download = c.mp3.replace(/\/stream\\?/, "/download"));
                !c.title && a.title && (c.title = a.title);
                !c.description && a.description && (c.description = a.description);
                !c.thumb && a.artwork_url && (c.thumb = a.artwork_url,
                c.thumbQuality && (c.thumb = c.thumb.replace("large.jpg", c.thumbQuality)));
                c.favoritingsCount = parseInt(a.favoritings_count ? a.favoritings_count : 0, 10);
                c.playbackCount = parseInt(a.playback_count ? a.playback_count : 0, 10);
                c.hotness = c.favoritingsCount + c.playbackCount;
                "undefined" === typeof c.share && a.permalink_url && (c.share = a.permalink_url);
                return c
            }
        }
        var F = this, H = a.sourcePath + "includes/ba-simple-proxy.php", k, L = [], z = [], w, m = a.settings.soundCloudAppId, D;
        this.setData = function(a) {
            z = [];
            L = b.extend(!0, [], [a]);
            f()
        }
    }
}
)(window, jQuery);
(function(c, b) {
    c.AWPPlaylistManager = function(a) {
        function c() {
            3 > d.playlistItems || (d.randomArr = AWPUtils.randomiseArray(d.playlistItems))
        }
        var d = this;
        this.loopingOn = a.loopingOn;
        this.randomPlay = a.randomPlay;
        this.playlistItems;
        this.lastInOrder = !1;
        this.counter = -1;
        this.lastPlayedFromPlaylistClick;
        this.lastRandomCounter;
        this.randomPaused = !1;
        this.randomArr = [];
        this.playlistSelect = !1;
        this.setCounter = function(a, e) {
            "undefined" === typeof e && (e = !0);
            d.counter = e ? d.counter + parseInt(a, 10) : parseInt(a, 10);
            if (isNaN(d.counter))
                alert("AWPPlaylistManager message: No active media, counter = " + d.counter);
            else if (d.lastInOrder = !1,
            d.loopingOn) {
                if (d.randomPlay)
                    if (d.counter > d.playlistItems - 1) {
                        d.counter = d.randomArr[d.playlistItems - 1];
                        c();
                        if (d.randomArr[0] == d.counter) {
                            var f = d.randomArr.splice(0, 1);
                            d.randomArr.push(f)
                        }
                        d.counter = 0;
                        b(d).trigger("AWPPlaylistManager.PLAYLIST_END_ALERT")
                    } else
                        0 > d.counter && (d.counter = d.randomArr[0],
                        c(),
                        d.randomArr[d.playlistItems - 1] == d.counter && (f = d.randomArr.splice(d.playlistItems - 1, 1),
                        d.randomArr.unshift(f)),
                        d.counter = d.playlistItems - 1);
                else
                    d.counter > d.playlistItems - 1 ? (d.counter = 0,
                    b(d).trigger("AWPPlaylistManager.PLAYLIST_END_ALERT")) : 0 > d.counter && (d.counter = d.playlistItems - 1);
                b(d).trigger("AWPPlaylistManager.COUNTER_READY")
            } else
                d.counter > d.playlistItems - 1 ? (d.counter = d.playlistItems - 1,
                d.lastInOrder = !0) : 0 > d.counter && (d.counter = 0),
                d.lastInOrder ? b(d).trigger("AWPPlaylistManager.PLAYLIST_END") : b(d).trigger("AWPPlaylistManager.COUNTER_READY")
        }
        ;
        this.getCounter = function() {
            return d.randomPlay ? d.playlistSelect ? d.counter : d.randomArr[d.counter] : d.counter
        }
        ;
        this.advanceHandler = function(a) {
            d.playlistSelect = !1;
            d.randomPaused ? (d.randomPaused = !1,
            d.lastRandomCounter + a > d.playlistItems - 1 ? (d.counter = d.playlistItems - 1,
            b(d).trigger("AWPPlaylistManager.COUNTER_READY")) : 0 > d.lastRandomCounter + a ? (d.counter = 0,
            b(d).trigger("AWPPlaylistManager.COUNTER_READY")) : d.setCounter(d.lastRandomCounter + a, !1)) : d.setCounter(a)
        }
        ;
        this.processPlaylistRequest = function(a) {
            d.playlistSelect = !1;
            d.randomPlay && (d.playlistSelect = !0,
            d.lastPlayedFromPlaylistClick = a,
            d.randomPaused || (d.lastRandomCounter = d.counter,
            d.randomPaused = !0));
            this.setCounter(a, !1)
        }
        ;
        this.setPlaylistItems = function(a, b) {
            "undefined" === typeof b && (b = !0);
            b && (d.counter = -1);
            d.playlistItems = a;
            d.randomPlay && c()
        }
        ;
        this.reSetCounter = function(a) {
            "undefined" === typeof a ? d.counter = -1 : (a = parseInt(a, 10),
            d.playlistItems ? (a > d.playlistItems - 1 ? a = d.playlistItems - 1 : 0 > a && (a = 0),
            d.counter = a) : d.counter = -1)
        }
        ;
        this.setRandom = function(a) {
            d.randomPlay = a;
            d.randomPlay && c();
            if (d.randomPlay) {
                var b = d.randomArr.length;
                for (a = 0; a < b; a++)
                    if (d.randomArr[a] == d.counter) {
                        if (0 == a)
                            break;
                        a = d.randomArr.splice(a, 1);
                        d.randomArr.unshift(parseInt(a, 10));
                        break
                    }
                d.counter = 0
            } else
                d.randomPaused ? (d.counter = d.lastPlayedFromPlaylistClick,
                d.randomPaused = !1) : d.counter = d.randomArr[d.counter]
        }
        ;
        this.setLooping = function(a) {
            d.loopingOn = a
        }
    }
}
)(window, jQuery);
(function(c) {
    c.fn.awp = function(b) {
        function a(a) {
            if (!l)
                return !1;
            0 < B ? (Na = B,
            B = 0) : B = Na;
            f();
            "undefined" !== typeof a && "undefined" !== typeof R && void 0 != na.attr("data-awptooltip") && R.controls(na, 0 == B ? "UnMute" : "Mute")
        }
        function f(a) {
            "undefined" !== typeof a && (B = a);
            "undefined" !== typeof B && (q.volume = B,
            "undefined" !== typeof h && h.setVolume(B));
            oa && (Z ? hb.css("width", B * U + "px") : hb.css("height", B * U + "px"));
            0 == B ? oa && na.find("i").removeClass("fa-volume-up fa-volume-down").addClass("fa-volume-off") : oa && na.find("i").removeClass("fa-volume-off fa-volume-down").addClass("fa-volume-up");
            awpVolumeChange(y, E, B)
        }
        function d(a) {
            a.preventDefault();
            if (!l)
                return !1;
            var g = c(a.currentTarget)
              , b = g.attr("data-id");
            if (b == n.getCounter())
                return !1;
            Oa = !0;
            n.processPlaylistRequest(b);
            awpPlaylistItemClick(y, E, g, b, a)
        }
        function v(a) {
            a.preventDefault();
            if (!l)
                return !1;
            a = c(a.currentTarget);
            var g = a.attr("data-id");
            if (g == n.getCounter())
                return !1;
            a.removeClass("awp-playlist-non-selected").addClass("awp-playlist-selected");
            awpPlaylistItemRollover(y, E, a, g)
        }
        function e(a) {
            a.preventDefault();
            if (!l)
                return !1;
            a = c(a.currentTarget);
            var g = a.attr("data-id");
            if (g == n.getCounter())
                return !1;
            a.removeClass("awp-playlist-selected").addClass("awp-playlist-non-selected");
            awpPlaylistItemRollout(y, E, a, g)
        }
        function r(g) {
            g.preventDefault();
            if (!l)
                return !1;
            g = c(g.currentTarget);
            g.hasClass("awp-prev-toggle") ? y.previousMedia() : g.hasClass("awp-playback-toggle") ? y.togglePlayback() : g.hasClass("awp-next-toggle") ? y.nextMedia() : g.hasClass("awp-loop-toggle") ? (S = !S,
            n.setLooping(S),
            S ? ha.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color") : ha.find("i").removeClass("awp-icon-rollover-color").addClass("awp-icon-color")) : g.hasClass("awp-player-volume") ? g.hasClass("awp-toggle-mute") && a() : g.hasClass("awp-random-toggle") ? (T = !T,
            n.setRandom(T),
            T ? ia.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color") : ia.find("i").removeClass("awp-icon-rollover-color").addClass("awp-icon-color")) : g.hasClass("awp-sort-alpha") ? (y.sort("title", ya),
            (ya = !ya) ? g.find("i").removeClass("fa-sort-alpha-desc").addClass("fa-sort-alpha-asc") : g.find("i").removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc")) : g.hasClass("awp-share-item") && "undefined" !== typeof ib && u.share && !AWPUtils.isEmpty(u.share) && ib.share(g.attr("data-type").toLowerCase(), u, pa(n.getCounter()))
        }
        function t(a) {
            if (!l)
                return !1;
            a.preventDefault();
            if ("undefined" !== typeof Pa && Pa.isDrag())
                return !1;
            a = c(a.currentTarget);
            var g = a.find("i");
            g.hasClass("awp-icon-color") && g.removeClass("awp-icon-color").addClass("awp-icon-rollover-color");
            "undefined" !== typeof R && void 0 != a.attr("data-awptooltip") && (g = a.hasClass("awp-player-volume") ? 0 == B ? "UnMute" : "Mute" : a.attr("data-awptooltip"),
            R.controls(a, g))
        }
        function A(a) {
            if (!l)
                return !1;
            a.preventDefault();
            a = c(a.currentTarget);
            var g = a.find("i");
            a.hasClass("awp-random-toggle") && T || a.hasClass("awp-loop-toggle") && S || g.hasClass("awp-icon-rollover-color") && g.removeClass("awp-icon-rollover-color").addClass("awp-icon-color");
            "undefined" !== typeof R && R.hide()
        }
        function F() {
            if (-1 != n.getCounter()) {
                var a = Y
                  , c = I.children("div.awp-playlist-item[data-id=" + a + "]")
                  , b = c.find(".awp-playlist-non-selected, .awp-playlist-selected");
                c.length && (a = c.attr("data-id"),
                b.removeClass("awp-playlist-selected").addClass("awp-playlist-non-selected"),
                "undefined" !== typeof awpPlaylistItemEnabled && awpPlaylistItemEnabled(y, E, c, a))
            }
        }
        function H(a) {
            za = c.ajax({
                url: qa + u.peakdir+'.peaks',
                type: "GET",
                dataType: "json"
            }).done(function(a) {
                a.length ? (h.backend.peaks = a,
                Qa = !0,
                jb ? h.drawBuffer() : h.load(u.mp3, h.backend.peaks)) : (h.backend.supportsWebAudio() ? (Ra = !0,
                u.remote && (ra.css("opacity", 1).html("Loading waveform..."),
                h.setSkipArrayBuffer(!0),
                L())) : u.peakData && (ja = !0,
                kb.empty().append('<img src="' + u.peakData.load + '" alt="load"/>'),
                Aa.empty().append('<img src="' + u.peakData.progress + '" alt="load"/>'),
                aa.css("display", "block"),
                Aa.width(aa.width()),
                aa.removeClass("awp-hidden").addClass("awp-visible"),
                Sa()),
                h.load(u.mp3)),
                awp_mediaArr[0].inst.loadPlayMedia()
            }).fail(function(a, g, c) {
                console.log(a, g, c)
            })
        }
        function k(a, b) {
            c.ajax({
                url: qa + u.peakdir+'.peaks',
                type: "GET",
                dataType: "json"
            }).done(function(a) {}).fail(function(a, g, c) {
            })
        }
        function L() {
            Ba = c.ajax({
                url: qa + u.peakdir+'.peaks',
                type: "GET",
                dataType: "json"
            }).done(function(a) {
                h._getArrayBuffer(a)
            }).fail(function(a, c, b) {
            })
        }
        function z(a) {
            V = !0;
            lb();
            P && Ta();
            var g = Eb.find("#" + a);
            if (0 == g.length)
                return alert('Failed to select playlist! Check activePlaylist option in settings. Make sure that element: "' + a + '" exist in awp-playlist-list!'),
                Ua.css("display", "none"),
                V = !1;
            "undefined" !== typeof awpPlaylistStartLoad && awpPlaylistStartLoad(y, E);
            var b, d;
            g.find(".awp-playlist-item").each(function() {
                d = c(this);
                b = w(d);
                W.push(b)
            });
            C = W.length;
            m()
        }
        function w(a) {
            var c = {};
            c.origclasses = a.attr("class");
            c.type = a.attr("data-type");
            "audio" == c.type ? c.mp3 = a.attr("data-mp3") : void 0 == a.attr("data-path") || AWPUtils.isEmpty(a.attr("data-path")) || (c.path = c.id = a.attr("data-path"));
            void 0 == a.attr("data-peak-load") || AWPUtils.isEmpty(a.attr("data-peak-load")) || void 0 == a.attr("data-peak-progress") || AWPUtils.isEmpty(a.attr("data-peak-progress")) || (c.peakData = {
                load: a.attr("data-peak-load"),
                progress: a.attr("data-peak-progress")
            });
            AWPUtils.isEmpty(a.html()) || (c.content = a.html());
            void 0 != a.attr("data-limit") && !AWPUtils.isEmpty(a.attr("data-limit")) && AWPUtils.isNumber(a.attr("data-limit")) && 0 != Math.abs(parseInt(a.attr("data-limit"), 10)) && (c.limit = Math.abs(parseInt(a.attr("data-limit"), 10)));
            void 0 == a.attr("data-thumb") || AWPUtils.isEmpty(a.attr("data-thumb")) ? void 0 == a.attr("data-thumb-default") || AWPUtils.isEmpty(a.attr("data-thumb-default")) || (c.thumbDefault = a.attr("data-thumb-default")) : c.thumb = a.attr("data-thumb");
            void 0 == a.attr("data-thumb-quality") || AWPUtils.isEmpty(a.attr("data-thumb-quality")) || (c.thumbQuality = a.attr("data-thumb-quality"));
            void 0 == a.attr("data-title") || AWPUtils.isEmpty(a.attr("data-title")) || (c.title = a.attr("data-title"));
            void 0 == a.attr("data-artist") || AWPUtils.isEmpty(a.attr("data-artist")) || (c.artist = a.attr("data-artist"));
            void 0 == a.attr("data-description") || AWPUtils.isEmpty(a.attr("data-description")) || (c.description = a.attr("data-description"));
            void 0 != a.attr("data-download") && (c.download = a.attr("data-download"));
            void 0 != a.attr("data-id3") && (c.id3 = !0);
            void 0 == a.attr("data-dir-url") || AWPUtils.isEmpty(a.attr("data-dir-url")) || (c.dirurl = a.attr("data-dir-url"));
            void 0 == a.attr("data-peak-dir") || AWPUtils.isEmpty(a.attr("data-peak-dir")) || (c.peakdir = a.attr("data-peak-dir"));
            void 0 != a.attr("data-start") && !AWPUtils.isEmpty(a.attr("data-start")) && AWPUtils.isNumber(a.attr("data-start")) && 0 != a.attr("data-start") && (c.start = Math.abs(a.attr("data-start")));
            void 0 != a.attr("data-end") && !AWPUtils.isEmpty(a.attr("data-end")) && AWPUtils.isNumber(a.attr("data-end")) && 0 != a.attr("data-end") && (c.end = Math.abs(a.attr("data-end")));
            void 0 != a.attr("data-duration") && !AWPUtils.isEmpty(a.attr("data-duration")) && AWPUtils.isNumber(a.attr("data-duration")) && 0 != Math.abs(a.attr("data-duration")) && (c.duration = Math.abs(a.attr("data-duration")));
            void 0 != a.attr("data-playback-rate") && (c.playbackRate = 1,
            !AWPUtils.isEmpty(a.attr("data-playback-rate")) && AWPUtils.isNumber(a.attr("data-playback-rate")) && 0 != a.attr("data-playback-rate") && (c.playbackRate = Math.abs(a.attr("data-playback-rate"))));
            void 0 == a.attr("data-link") || AWPUtils.isEmpty(a.attr("data-link")) || (c.link = a.attr("data-link"),
            c.target = "_blank",
            void 0 == a.attr("data-target") || AWPUtils.isEmpty(a.attr("data-target")) || (c.target = a.attr("data-target")));
            void 0 != a.attr("data-share") && (c.share = a.attr("data-share"));
            void 0 != a.attr("data-remote") && (c.remote = !0);
            return c
        }
        function m() {
            ba++;
            if (ba > C - 1)
                Cb();
            else {
                var a = W[ba]
                  , b = W[ba].type;
                /^audio$/.test(b) ? (X.push(a),
                m()) : -1 < c.inArray(b, Fb) ? mb.setData(a) : /^folder$/.test(b) ? D(b) : /^gdrive-folder$/.test(b) ? p(b) : (console.log("Wrong data-type in playlist! Type = " + b),
                m())
            }
        }
        function D(a) {
            if ("file:" == window.location.protocol)
                return console.log("Reading files from folders locally is not possible! This requires online server connection."),
                m(),
                !1;
            var b = W[ba]
              , g = b.path.replace(/\/\//g, "/");
            a = qa + "includes/folder_parser.php";
            g = {
                dir: g,
                limit: b.limit || 1E4
            };
            b.id3 && (nb = sa = X.length - 1);
            c.ajax({
                type: "GET",
                url: a,
                data: g,
                dataType: "json"
            }).done(function(a) {
                AWPUtils.keysrt(a, "filename");
                var g, d = a.length, K, G, e;
                for (g = 0; g < d; g++)
                    K = a[g],
                    /.mp3/.test(K.basename) && (G = c.extend(!0, {}, b),
                    G.type = "audio",
                    e = G.dirurl ? G.dirurl + K.basename : K.fullpath,
                    G.mp3 = e,
                    "undefined" !== typeof G.download && AWPUtils.isEmpty(G.download) && (G.download = e),
                    "undefined" !== typeof G.share && AWPUtils.isEmpty(G.share) && (G.share = e),
                    G.thumb || (G.thumb = e.substr(0, e.lastIndexOf(".")) + ".jpg"),
                    G.title || (G.title = K.filename),
                    X.push(G),
                    sa++);
                b.id3 ? N() : m()
            }).fail(function(a, c, b) {
                console.log("Error processing folder: " + a.responseText);
                m()
            })
        }
        function p(a) {
            if ("file:" == window.location.protocol)
                return console.log("Reading files from folders locally is not possible! This requires online server connection."),
                m(),
                !1;
            if (AWPUtils.isEmpty(q.gDriveAppId))
                return console.log("gDriveAppId has not been set in settings!"),
                m(),
                !1;
            var b = W[ba];
            c.ajax({
                url: "https://www.googleapis.com/drive/v3/files?q='" + b.path + "'+in+parents&key=" + q.gDriveAppId,
                dataType: "jsonp"
            }).done(function(a) {
                var g, d = a.files.length, K, G, e = [], f = [];
                for (g = 0; g < d; g++)
                    K = a.files[g],
                    /.mp3/.test(K.mimeType) ? (f.push(K),
                    AWPUtils.keysrt(f, "name")) : /.jpg|jpeg|png/.test(K.mimeType) && (e.push(K),
                    AWPUtils.keysrt(e, "name"));
                d = f.length;
                for (g = 0; g < d; g++)
                    K = f[g],
                    a = c.extend(!0, {}, b),
                    a.type = "audio",
                    G = "https://drive.google.com/uc?export=view&id=" + K.id,
                    a.mp3 = G,
                    "undefined" !== typeof a.download && AWPUtils.isEmpty(a.download) && (a.download = "https://drive.google.com/uc?export=download&id=" + K.id),
                    "undefined" !== typeof a.share && AWPUtils.isEmpty(a.share) && (a.share = "https://drive.google.com/open?id=" + K.id),
                    e.length && !a.thumb && e[g] && (a.thumb = "https://drive.google.com/uc?export=view&id=" + e[g].id),
                    a.title || (a.title = K.name.substr(0, K.name.lastIndexOf("."))),
                    X.push(a);
                m()
            }).fail(function(a, c, b) {
                console.log("Error processing gdrive folder: " + a.responseText);
                m()
            })
        }
        function N() {
            var a = X[sa];
            jsmediatags.read(a.mp3, {
                onSuccess: function(c) {
                    var b = c.tags;
                    c = b.picture;
                    b.artist && (a.artist = b.artist);
                    b.title && (a.title = b.title);
                    b.album && (a.album = b.album);
                    if (c) {
                        var b = "", g, d = c.data.length;
                        for (g = 0; g < d; g++)
                            b += String.fromCharCode(c.data[g]);
                        a.thumb = "data:" + c.format + ";base64," + window.btoa(b)
                    }
                    sa--;
                    sa > nb ? N() : m()
                },
                onError: function(a) {
                    console.log("ID3 error: ", a.type, a.info);
                    N()
                }
            })
        }
        function Cb() {
            var a, b, G = ca ? O : J.length, f = X.length, h, l, m, k, p = 0, r;
            for (b = 0; b < f; b++) {
                a = b + G;
                ca && p++;
                k = X[b];
                h = k.type;
                if (ea) {
                    k.origclasses || (k.origclasses = "awp-playlist-item");
                    l = c('<div class="' + k.origclasses + '"/>').attr({
                        "data-type": h
                    });
                    delete k.origclasses;
                    ca ? (r ? r.after(l) : ka ? l.appendTo(I) : I.children("div").eq(O).before(l),
                    r = l) : l.appendTo(I);
                    m = c('<a class="awp-playlist-non-selected" href="#"/>').on("click", d).appendTo(l);
                    if (!ta)
                        m.on("mouseenter", v).on("mouseleave", e);
                    if (-1 != c.inArray("thumb", ob)) {
                        var q = k.thumb || k.thumbDefault;
                        if (q) {
                            var t = new Image;
                            t.className = "awp-hidden";
                            t.onload = function() {
                                this.className = "awp-visible"
                            }
                            ;
                            t.src = q;
                            c('<span class="awp-playlist-thumb"></span>').append(t).appendTo(m)
                        }
                    }
                    -1 != c.inArray("title", ob) && c('<span class="awp-playlist-title"></span>').appendTo(m);
                    k.link && (q = c('<a class="awp-link" href="' + k.link + '" target="' + (k.target || "_blank") + '"><i class="fa fa-external-link"></i></a>'),
                    m.after(q));
                    k.download && (q = pb ? c('<a class="awp-download" href="' + k.download + '" download><i class="fa fa-download"></i></a>') : c('<a class="awp-download" href="#" title="download"><i class="fa fa-download"></i></a>'),
                    m.after(q));
                    k.content && (l.append(k.content),
                    delete k.content)
                }
                k.title && (k.title = AWPUtils.checkKey(k.title));
                J.splice(a, 0, {
                    id: a,
                    type: h,
                    data: k
                })
            }
            ea && Db();
            P = I;
            La();
            ca || Va ? (a = n.getCounter(),
            n.setPlaylistItems(C, !1),
            O <= a && (ka || n.reSetCounter(a + p)),
            ua ? (ua = !1,
            va && !ta && (fa = !0),
            n.setCounter(O, !1)) : va && n.setCounter(O, !1),
            -1 != n.getCounter() && (Y = n.getCounter())) : n.setPlaylistItems(C);
            gb();
            0 == C && "undefined" !== typeof awpPlaylistEmpty && awpPlaylistEmpty(y, E, I);
            Ca = !0;
            "undefined" !== typeof awpPlaylistEndLoad && awpPlaylistEndLoad(y, E, I)
        }
        function La() {
            C = J.length;
            if (ea) {
                var a = 0, b, d, e, f;
                Da = [];
                I.find("div.awp-playlist-item").each(function() {
                    d = c(this).attr("data-id", a);
                    e = d.find(".awp-playlist-non-selected, .awp-playlist-selected").attr("data-id", a);
                    f = e.find(".awp-playlist-title");
                    f.length && (b = pa(a),
                    Wa && (Da.push(b),
                    J[a].data.title_full = b),
                    qb ? f.html(AWPUtils.counter(a) + rb + b) : f.html(b));
                    J[a].id = a;
                    a++
                });
                Ea && Fa && 0 < C && "h" == Ga.charAt(0) && ga.mCustomScrollbar("update")
            }
        }
        function Db() {
            I.children(".awp-playlist-item").each(function() {
                if (!pb)
                    c(this).find("a[class=awp-download]").off("click").on("click", function(a) {
                        a.preventDefault();
                        "undefined" !== typeof sb && (a = c(this).parent().attr("data-id"),
                        a = J[a].data,
                        "undefined" === typeof a.download || AWPUtils.isEmpty(a.download) || sb.download(a.download, a.title || "media"))
                    })
            })
        }
        function fb(a) {
            var c = "h" == Ga.charAt(0) ? "x" : "y";
            ga.mCustomScrollbar({
                axis: c,
                theme: a || q.playlistScrollTheme,
                scrollInertia: 0,
                mouseWheel: {
                    normalizeDelta: !0,
                    deltaFactor: 50,
                    preventDefault: !0
                },
                keyboard: {
                    enable: !1
                },
                advanced: {
                    autoExpandHorizontalScroll: !0
                }
            });
            Fa = !0
        }
        function gb() {
            ca = Va = !1;
            Ua.css("display", "none");
            V = !1;
            l || (l = !0,
            ea && !Fa && Ea && fb(),
            f(B),
            awpSetupDone(y, E));
            if (!Xa && !ca && 0 < C) {
                var a = q.activeItem;
                a > C - 1 && (a = C - 1);
                -1 < a && n.setCounter(a, !1);
                Xa = !0
            }
        }
        function Ma() {
            "undefined" !== typeof awpMediaEnd && awpMediaEnd(y, E, n.getCounter());
            if (Gb)
                y.nextMedia();
            else {
                var a = u.start || 0;
                "loop" == Ya ? h.play(a) : "rewind" == Ya ? (h.pause(),
                h.seekTo(a / h.getDuration())) : "stop" == Ya && h.pause()
            }
        }
        function tb() {
            l && "undefined" !== typeof M && (ea && -1 != Y && F(),
            Ha(),
            n.reSetCounter())
        }
        function Ha() {
            Ba && (Ba.abort(),
            Ba = null);
            za && (za.abort(),
            za = null);
            "undefined" !== typeof h && (h.empty(),
            h.setSkipArrayBuffer(!1));
            ra.css("opacity", 0);
            Ia.removeClass("awp-visible").addClass("awp-hidden");
            ja = !1;
            kb.empty();
            Aa.empty();
            aa.css("display", "none").removeClass("awp-visible").addClass("awp-hidden");
            wa.removeClass("awp-visible").addClass("awp-hidden");
            xa.removeClass("awp-visible").addClass("awp-hidden");
            ub && (wa.html("0:00"),
            xa.html("0:00"));
            Hb.empty();
            vb();
            M = null;
            va = Ja = Q = !1;
            awpCleanMedia(y, E)
        }
        function Ta() {
            M && Ha();
            ea && P.find(".awp-playlist-item").remove();
            la = P = null;
            Ca = ua = ca = !1;
            Y = -1;
            Xa = !1;
            C = 0;
            ba = -1;
            J = [];
            X = [];
            W = [];
            n.reSetCounter();
            Wa && wb.val(Za);
            Ib && (ya = !1,
            $a.find("i").removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc"));
            awpDestroyPlaylist(y, E, I)
        }
        function Sa() {
            wa.removeClass("awp-hidden").addClass("awp-visible");
            xa.removeClass("awp-hidden").addClass("awp-visible")
        }
        function vb() {
            ab.find("i").removeClass("fa-pause").addClass("fa-play")
        }
        function lb() {
            Ua.css("display", "block")
        }
        function bb(a) {
            if ("string" === typeof a)
                var c = a;
            else
                "number" === typeof a && (c = pa(a),
                qb && (c = AWPUtils.counter(a) + rb + c));
            Jb.html(c)
        }
        function pa(a) {
            a = J[a].data;
            var c = "";
            "undefined" === typeof a.artist || AWPUtils.isEmpty(a.artist) || "undefined" === typeof a.title || AWPUtils.isEmpty(a.title) ? "undefined" !== typeof a.artist || "undefined" === typeof a.title || AWPUtils.isEmpty(a.title) ? "undefined" === typeof a.artist || AWPUtils.isEmpty(a.artist) || "undefined" !== typeof a.title || (c = a.artist) : c = a.title : c = a.artist + xb + a.title;
            return c
        }
        var q = c.extend({}, {
            instanceName: "",
            sourcePath: "",
            playlistList: "",
            activePlaylist: "",
            activeItem: 0,
            volume: .5,
            autoPlay: !1,
            randomPlay: !1,
            loopingOn: !0,
            autoAdvanceToNextMedia: !0,
            mediaEndAction: "loop",
            soundCloudAppId: "",
            usePlaylistScroll: !1,
            playlistScrollOrientation: "vertical",
            playlistScrollTheme: "light",
            useKeyboardNavigationForPlayback: !1,
            facebookAppId: "",
            useNumbersInPlaylist: !1,
            numberTitleSeparator: ".  ",
            artistTitleSeparator: " - ",
            playlistItemContent: "title"
        }, b)
          , x = c(this).show()
          , Eb = c(q.playlistList).hide()
          , Kb = x.find(".awp-playlist-holder")
          , ga = x.find(".awp-playlist-inner")
          , I = x.find(".awp-playlist-content")
          , cb = x.find(".awp-playlist-filter-msg")
          , $a = x.find(".awp-sort-alpha")
          , Ua = x.find(".awp-preloader");
        x.find(".awp-player-holder");
        var Hb = x.find(".awp-player-thumb")
          , wa = x.find(".awp-media-time-current")
          , xa = x.find(".awp-media-time-total")
          , Jb = x.find(".awp-media-title");
        x.find(".awp-player-controls");
        var ab = x.find(".awp-playback-toggle")
          , ha = x.find(".awp-loop-toggle")
          , na = x.find(".awp-player-volume")
          , ia = x.find(".awp-random-toggle");
        x.find(".awp-volume-wrapper");
        var ma = x.find(".awp-volume-seekbar")
          , da = x.find(".awp-volume-bg")
          , hb = x.find(".awp-volume-level")
          , Ia = x.find(".awp-waveform")
          , ra = x.find(".awp-waveform-preloader")
          , aa = x.find(".awp-waveform-img")
          , kb = x.find(".awp-waveform-img-load")
          , yb = x.find(".awp-waveform-img-progress-wrap")
          , Aa = x.find(".awp-waveform-img-progress")
          , ta = AWPUtils.isMobile()
          , qa = q.sourcePath
          , E = AWPUtils.filterAllowedChars(q.instanceName)
          , la = q.activePlaylist
          , fa = q.autoPlay
          , jb = q.drawWaveWithoutLoad
          , S = q.loopingOn
          , T = q.randomPlay
          , qb = q.useNumbersInPlaylist
          , rb = q.numberTitleSeparator
          , xb = q.artistTitleSeparator
          , B = q.volume
          , Ea = q.usePlaylistScroll
          , Ga = q.playlistScrollOrientation.toLowerCase()
          , Lb = q.useKeyboardNavigationForPlayback
          , Gb = q.autoAdvanceToNextMedia
          , Ya = q.mediaEndAction
          , ob = q.playlistItemContent.split(",")
          , ea = Kb.length
          , Wa = x.find(".awp-search-filter").length
          , Ib = $a.length
          , ub = wa.length || xa.length
          , oa = ma.length
          , l = !1
          , V = !1
          , y = this;
        c("body");
        var Mb = c(window), Nb = c(document), zb = AWPUtils.isIE(), db, pb = AWPUtils.hasDownloadSupport(), h, Ra, ja, Qa, Ba, za, ka, O, ca, va, ua, Va, ba = -1, J = [], X = [], W = [], C = 0, Xa, Ca = !1, P = null, Y = -1, Ja = !1, M, Q = !1, u, Oa, Fa, ya = !1, Da = [], sa, nb, Fb = ["podcast", "soundcloud", "soundcloud_query"];
        "undefined" === typeof window.awp_mediaArr && (window.awp_mediaArr = []);
        awp_mediaArr.push({
            inst: y,
            id: E
        });
        ta && (fa = !1);
        if (zb && 12 > zb)
            aa.on("click", function(a) {
                if (ja) {
                    var b = c(a.currentTarget);
                    a = Math.min(Math.max((a.pageX - b.offset().left) / b.width(), 0), 1);
                    h.seekTo(a)
                }
            });
        S && ha.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color");
        T && ia.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color");
        if (Wa)
            var wb = x.find(".awp-search-filter").on("focus", function(a) {
                c(this).val() == Za && c(this).val("")
            }).on("blur", function() {
                AWPUtils.isEmpty(c(this).val()) && c(this).val(Za)
            }).on("keyup.apfilter", function() {
                if (0 == Da.length)
                    return !1;
                var a = J.length, b = c(this).val(), b = Da.filter(/./.test.bind(new RegExp(b,"i"))), d, e = 0, f;
                for (d = 0; d < a; d++)
                    f = pa(d),
                    -1 < c.inArray(f, b) ? I.children("div.awp-playlist-item").eq(d).show() : (I.children("div.awp-playlist-item").eq(d).hide(),
                    e++);
                0 < a && cb.length && (e == a ? cb.show() : cb.hide());
                Ea && 0 < C && "h" == Ga.charAt(0) && ga.mCustomScrollbar("update");
                "undefined" !== typeof awpFilterChange && awpFilterChange(y, E, I)
            })
              , Za = wb.val();
        var R = new AWPTooltip({
            settings: q,
            parent: x
        })
          , sb = new AWPDownloadManager({
            settings: q,
            parent: x
        })
          , ib = new AWPShareManager({
            settings: q
        })
          , n = new AWPPlaylistManager({
            randomPlay: T,
            loopingOn: S
        });
        c(n).on("AWPPlaylistManager.COUNTER_READY", function() {
            M && Ha();
            if (ea) {
                -1 != Y && F();
                var a = n.getCounter()
                  , c = I.children("div.awp-playlist-item[data-id=" + a + "]")
                  , b = c.find(".awp-playlist-non-selected, .awp-playlist-selected");
                c.length && (Y = a,
                b.removeClass("awp-playlist-non-selected").addClass("awp-playlist-selected"),
                Ea && 0 < C && (Oa || ("h" == Ga.charAt(0) ? ga.mCustomScrollbar("scrollTo", parseInt(c.position().left), {
                    scrollInertia: 500
                }) : ga.mCustomScrollbar("scrollTo", parseInt(c.position().top), {
                    scrollInertia: 500
                })),
                Oa = !1),
                "undefined" !== typeof awpPlaylistItemDisabled && awpPlaylistItemDisabled(y, E, c, a))
            }
            a = n.getCounter();
            u = J[a].data;
            M = u.type;
            bb(a);
            H(u.title);
            "undefined" !== typeof awpItemTriggered && awpItemTriggered(y, E, a)
        }).on("AWPPlaylistManager.PLAYLIST_END AWPPlaylistManager.PLAYLIST_END_ALERT", function() {
            "undefined" !== typeof awpPlaylistEnd && awpPlaylistEnd(y, E)
        });
        var mb = new AWPSoundLoader({
            settings: q,
            sourcePath: qa
        });
        c(mb).on("AWPSoundLoader.END_LOAD", function(a, c) {
            var b, d = c.length, g;
            for (b = 0; b < d; b++)
                g = c[b],
                X.push(g);
            m()
        });
        var eb = [];
        oa && (ma.data("apmove", !0),
        eb.push(ma));
        if (eb.length) {
            var Pa = new AWPTouchManager(eb);
            c(Pa).on("AWPTouchManager.DRAG_START", function(a, c) {}).on("AWPTouchManager.DRAG_MOVE AWPTouchManager.DRAG_RELEASE", function(a, c) {
                if (!l)
                    return !1;
                var b = c.elem
                  , d = c.point.pageX
                  , g = c.point.pageY;
                if (b.hasClass("awp-volume-seekbar")) {
                    var e = Z ? d : g;
                    Z ? B = Math.max(0, Math.min(1, (e - da.offset().left) / U)) : (B = Math.max(0, Math.min(1, (e - da.offset().top) / U)),
                    B = 1 - B);
                    f();
                    "undefined" !== typeof R && b.is('[class*="awp-tooltip"]') && (b = Z ? d - da.offset().left : g - da.offset().top,
                    0 > b ? b = 0 : b > U && (b = U),
                    b = Math.max(0, Math.min(1, b / U)),
                    Z || (b = 1 - b),
                    b = parseInt(100 * b, 10),
                    R.volume(c.point, ma, b))
                }
            }).on("AWPTouchManager.MOUSE_MOVE", function(a, c) {
                if (!l)
                    return !1;
                var b = c.elem;
                a = c.e;
                var d = a.pageX
                  , g = a.pageY;
                b.hasClass("awp-volume-seekbar") && "undefined" !== typeof R && b.is('[class*="awp-tooltip"]') && (b = Z ? d - da.offset().left : g - da.offset().top,
                0 > b ? b = 0 : b > U && (b = U),
                b = Math.max(0, Math.min(1, b / U)),
                Z || (b = 1 - b),
                b = parseInt(100 * b, 10),
                R.volume(a, ma, b))
            }).on("AWPTouchManager.MOUSE_LEAVE", function(a, b) {
                if (!l)
                    return !1;
                "undefined" !== typeof R && R.hide()
            })
        }
        if (oa) {
            var Z = ma.hasClass("awp-vertical") ? !1 : !0
              , Na = .5
              , U = void 0 != q.volumeSize ? q.volumeSize : Z ? da.width() : da.height();
            0 > B ? B = 0 : 1 < B && (B = 1);
            0 != B && (Na = B)
        }
        if (Lb)
            Nb.on("keyup.apnav", function(b) {
                if (!l)
                    return !1;
                var d = b.keyCode;
                b = c(b.target);
                if (37 == d)
                    y.previousMedia();
                else if (39 == d)
                    y.nextMedia();
                else if (32 == d) {
                    if (b.hasClass("awp-search-filter"))
                        return !1;
                    y.togglePlayback()
                } else if (77 == d) {
                    if (b.hasClass("awp-search-filter"))
                        return !1;
                    a()
                }
            });
        var Ab = [x.find(".awp-next-toggle"), x.find(".awp-prev-toggle"), x.find(".awp-playlist-toggle"), x.find(".awp-share-item"), $a, na, ab, ha, ia], Bb, Ob = Ab.length, Ka;
        for (Ka = 0; Ka < Ob; Ka++)
            if (Bb = c(Ab[Ka]).css("cursor", "pointer").on("click", r),
            !ta)
                Bb.on("mouseenter", t).on("mouseleave", A);
        h = Object.create(WaveSurfer);
        h.init({
            container: Ia[0],
            backend: "MediaElement",
            interact: 1,
            hideScrollbar: !0,
            waveColor: q.wavesurfer.waveColor,
            progressColor: q.wavesurfer.progressColor,
            barWidth: q.wavesurfer.barWidth,
            cursorColor: q.wavesurfer.cursorColor,
            cursorWidth: q.wavesurfer.cursorWidth,
            height: q.wavesurfer.height
        });
        h.on("loading", function(a) {
            a = "Loading... " + a.toString() + "%";
            ra.css("opacity", 1).html(a)
        });
        h.on("finish", function(a) {
            Ma()
        });
        h.on("error", function(a) {
            console.log(a);
            Ma()
        });
        h.on("audioprocess", function(a) {
            a = h.getCurrentTime();
            var b = h.getDuration();
            ub && (wa.html(AWPUtils.formatCurrentTime(a)),
            xa.html(AWPUtils.formatDuration(b)));
            ja && yb.width(aa.width() * h.backend.getPlayedPercents());
            u.end && a >= u.end && Ma()
        });
        h.on("play", function() {
            Ja || (awpMediaStart(y, E, n.getCounter()),
            Ja = !0);
            ab.find("i").removeClass("fa-play").addClass("fa-pause");
            Q = !0;
            awpMediaPlay(y, E, n.getCounter())
        });
        h.on("pause", function() {
            vb();
            Q = !1;
            awpMediaPause(y, E, n.getCounter())
        });
        h.on("seek", function(a) {
            ja && yb.width(aa.width() * a)
        });
        h.on("ready", function() {
            h.setVolume(B);
            var a = u.start || 0, b;
            u.end && (b = u.end);
            u.playbackRate && 1 != u.playbackRate && h.setPlaybackRate(u.playbackRate);
            fa && (b ? h.play(a, b) : h.play(a));
            fa = !0
        });
        h.on("waveform_ME_noPeaks", function() {
            if (Ra) {
                var a = h.backend.getPeaks(900);
                a.length && k(a, u.title);
                Ra = !1
            }
            ra.css("opacity", 0);
            Ia.removeClass("awp-hidden").addClass("awp-visible");
            Sa()
        });
        h.on("redraw", function() {
            Qa && (ra.css("opacity", 0),
            Ia.removeClass("awp-hidden").addClass("awp-visible"),
            Sa(),
            Qa = !1)
        });
        this.getTitleFormatted = function(a, b) {
            var c = ""
              , d = b || xb;
            "undefined" === typeof a.artist || AWPUtils.isEmpty(a.artist) || "undefined" === typeof a.title || AWPUtils.isEmpty(a.title) ? "undefined" !== typeof a.artist || "undefined" === typeof a.title || AWPUtils.isEmpty(a.title) ? "undefined" === typeof a.artist || AWPUtils.isEmpty(a.artist) || "undefined" !== typeof a.title || (c = a.artist) : c = a.title : c = a.artist + d + a.title;
            return c
        }
        ;
        Mb.resize(function() {
            if (!l)
                return !1;
            db && clearTimeout(db);
            db = setTimeout(y.resize, 150);
            ja && Aa.width(aa.width())
        });
        y.resize = function() {
            h && (h.drawer.containerWidth = h.drawer.container.clientWidth,
            h.drawBuffer(),
            Q || h.drawer.updateProgress(h.backend.getPlayedPercents()))
        }
        ;
        this.loadPlayMedia = function() {
            if (!l || !M || !u)
                return !1;
            u.mp3 && h.backend.peaks && h.load(u.mp3, h.backend.peaks, !0);
            Q = !0
        }
        ;
        this.playMedia = function() {
            if (!l || !M || Q)
                return !1;
            "undefined" !== typeof h && h.play();
            Q = !0
        }
        ;
        this.pauseMedia = function() {
            if (!l || !M || !Q)
                return !1;
            "undefined" !== typeof h && h.pause();
            Q = !1
        }
        ;
        this.checkMedia = function(a) {
            if (!l || !M)
                return !1;
            a = a.toLowerCase();
            Q && "pause" == a && ("undefined" !== typeof h && h.pause(),
            Q = !1)
        }
        ;
        this.togglePlayback = function() {
            if (!l || !M)
                return !1;
            "undefined" !== typeof h && (!Ja && jb && h.backend.peaks ? (fa = !0,
            y.loadPlayMedia()) : h.playPause())
        }
        ;
        this.stop = function() {
            if (!l || !M)
                return !1;
            "undefined" !== typeof h && h.stop();
            Q = !1
        }
        ;
        this.nextMedia = function() {
            if (!l || !P)
                return !1;
            n.advanceHandler(1, !0)
        }
        ;
        this.previousMedia = function() {
            if (!l || !P)
                return !1;
            n.advanceHandler(-1, !0)
        }
        ;
        this.loadMedia = function(a) {
            if (!l || V || !P)
                return !1;
            if ("undefined" === typeof a)
                return alert("loadMedia method requires either a track number or a track title to load. LoadMedia failed."),
                !1;
            if ("string" === typeof a) {
                var b, c;
                for (b = 0; b < C; b++)
                    if (a == J[b].data.title) {
                        a = b;
                        c = !0;
                        break
                    }
                if (!c)
                    return alert('Track with title "' + a + '" doesnt exist. LoadMedia failed.'),
                    !1
            } else if ("number" === typeof a) {
                if (0 > a || a > C - 1)
                    return alert('Invalid track number. Track number  "' + a + '" doesnt exist. LoadMedia failed.'),
                    !1
            } else
                return alert("loadMedia method requires either a track number or a track title to load. LoadMedia failed."),
                !1;
            n.processPlaylistRequest(a)
        }
        ;
        this.loadPlaylist = function(a) {
            if (!l || V)
                return !1;
            if ("undefined" === typeof a || AWPUtils.isEmpty(a))
                return alert("loadPlaylist method requires id parameter. loadPlaylist failed."),
                !1;
            if (la == a)
                return !1;
            la = a;
            z(la)
        }
        ;
        this.addTrack = function(a, b, d, e) {
            if (!l || V)
                return !1;
            if ("undefined" === typeof a)
                return alert("addTrack method requires format parameter. AddTrack failed."),
                !1;
            if ("undefined" === typeof b)
                return alert("addTrack method requires track parameter. AddTrack failed."),
                !1;
            va = !1;
            "undefined" !== typeof d && (va = d);
            d = 1;
            var g = !1;
            if ("string" !== typeof b && "[object Object]" !== Object.prototype.toString.call(b))
                if ("[object Array]" === Object.prototype.toString.call(b))
                    d = b.length,
                    g = !0;
                else
                    return alert("addTrack method requires track as string, object or array parameter. AddTrack failed."),
                    !1;
            O = e;
            ka = !1;
            ca = !0;
            if (P)
                if ("undefined" !== typeof O) {
                    if (0 > O || O > C)
                        return alert('Invalid position to insert track to. Position number "' + e + '" doesnt exist. AddTrack failed.'),
                        !1;
                    O == C && (ka = !0)
                } else
                    ka = !0,
                    O = C;
            else {
                if ("undefined" !== typeof O) {
                    if (0 != O)
                        return alert('Invalid position to insert track to. Position number "' + e + '" doesnt exist. AddTrack failed.'),
                        !1
                } else
                    O = 0;
                ka = !0
            }
            V = !0;
            lb();
            Ca = !1;
            Va = !0;
            ba = -1;
            X = [];
            W = [];
            var f;
            for (e = 0; e < d; e++) {
                f = g ? b[e] : b;
                if ("html" == a) {
                    var h;
                    f = c(f);
                    h = c("<div>").append(f.clone()).html();
                    f = document.createElement("div");
                    f.innerHTML = h;
                    f = c(f.firstChild);
                    f = w(f)
                }
                W.push(f)
            }
            C = W.length;
            ua = !1;
            P || (ua = !0);
            P = I;
            m()
        }
        ;
        this.inputAudio = function(a) {
            if (!l || V)
                return !1;
            if ("undefined" === typeof a)
                return alert("inputAudio method requires data parameter. inputAudio failed."),
                !1;
            F();
            n.reSetCounter();
            u = a;
            M = "audio";
            void 0 != u.title && bb(y.getTitleFormatted(u));
            ta && (fa = !0);
            H(u.title)
        }
        ;
        this.removeTrack = function(a) {
            if (!l || V || !P)
                return !1;
            if ("undefined" === typeof a)
                return alert("removeTrack method requires id parameter. removeTrack failed."),
                !1;
            if ("string" === typeof a) {
                var b, c = !1;
                for (b = 0; b < C; b++)
                    if (a == J[b].data.title) {
                        a = b;
                        c = !0;
                        break
                    }
                if (!c)
                    return alert('Track with title "' + a + '" doesnt exist. RemoveTrack failed.'),
                    !1
            } else if ("number" === typeof a) {
                if (a = parseInt(a, 10),
                0 > a || a > C - 1)
                    return alert('Invalid id number. Track number  "' + a + '" doesnt exist. RemoveTrack failed.'),
                    !1
            } else
                return alert("removeTrack method requires either a id number or a track title to remove. removeTrack failed."),
                !1;
            J[a] ? (I.children(".awp-playlist-item").eq(a).remove(),
            J.splice(a, 1),
            La(),
            0 < C ? (b = n.getCounter(),
            a == b ? (Ha(),
            n.setPlaylistItems(C)) : (n.setPlaylistItems(C, !1),
            a < b && n.reSetCounter(n.getCounter() - 1)),
            -1 != n.getCounter() ? (Y = n.getCounter(),
            bb(Y)) : awpMediaEmpty(y, E)) : Ta()) : alert('RemoveTrack with id "' + a + '" failed.')
        }
        ;
        this.sort = function(a, b) {
            if (!l || !P)
                return !1;
            if ("undefined" === typeof a)
                return console.log("Sort method requires type parameter. Sort method failed."),
                !1;
            var d = I.children("div.awp-playlist-item")
              , e = d.length
              , g = a.toLowerCase();
            if (2 > e)
                return !1;
            if ("title" == g)
                for (AWPUtils.keysrt2(J, "data", "title_full", b || !1),
                e = [],
                g = 0; g < C; g++)
                    e.push(J[g].id);
            else if ("random" == g)
                e = AWPUtils.randomiseArray(e),
                J = AWPUtils.sortArray(J, e);
            else
                return console.log("Sort method requires type parameter. Sort method failed."),
                !1;
            g = n.getCounter();
            I.append(c.map(e, function(a) {
                return d[a]
            }));
            -1 != g && (e = I.children("div.awp-playlist-item[data-id='" + g + "']").index(),
            n.reSetCounter(e),
            Y = e);
            La()
        }
        ;
        this.destroyMedia = function() {
            if (!l)
                return !1;
            tb()
        }
        ;
        this.destroyPlaylist = function() {
            if (!l || !P)
                return !1;
            Ta()
        }
        ;
        this.destroyPlugin = function() {
            if (!l)
                return !1;
            tb();
            "undefined" !== typeof h && h.destroy()
        }
        ;
        this.setPlaybackRate = function(a) {
            if (!l || "undefined" !== typeof n && -1 == n.getCounter())
                return !1;
            "undefined" !== typeof h && h.setPlaybackRate(a)
        }
        ;
        this.toggleRandom = function(a) {
            if (!l || "undefined" === typeof n)
                return !1;
            T = "undefined" !== typeof a ? a : !T;
            n.setRandom(T);
            T ? ia.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color") : ia.find("i").removeClass("awp-icon-rollover-color").addClass("awp-icon-color")
        }
        ;
        this.toggleLoop = function(a) {
            if (!l || "undefined" === typeof n)
                return !1;
            S = "undefined" !== typeof a ? a : !S;
            n.setLooping(S);
            S ? ha.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color") : ha.find("i").removeClass("awp-icon-rollover-color").addClass("awp-icon-color")
        }
        ;
        this.setVolume = function(a) {
            if (!l)
                return !1;
            0 > a ? a = 0 : 1 < a && (a = 1);
            B = a;
            f()
        }
        ;
        this.getVolume = function() {
            return l ? B : !1
        }
        ;
        this.toggleMute = function() {
            if (!l)
                return !1;
            a()
        }
        ;
        this.seek = function(a) {
            if (!l || !M)
                return !1;
            "undefined" !== typeof h && h.seekTo(a / h.getDuration())
        }
        ;
        this.getCurrentTime = function() {
            if (!l || !M)
                return !1;
            var a;
            "undefined" !== typeof h && (a = h.getCurrentTime());
            return a
        }
        ;
        this.getDuration = function() {
            if (!l || !M)
                return !1;
            var a;
            "undefined" !== typeof h && (a = h.getDuration());
            return a
        }
        ;
        this.initPlaylistScroll = function(a) {
            if (!l)
                return !1;
            fb(a)
        }
        ;
        this.destroyPlaylistScroll = function() {
            if (!l)
                return !1;
            ga.mCustomScrollbar("destroy");
            Fa = !1
        }
        ;
        this.updatePlaylistScroll = function() {
            if (!l)
                return !1;
            ga.mCustomScrollbar("update")
        }
        ;
        this.setAutoPlay = function(a) {
            if (!l)
                return !1;
            fa = a
        }
        ;
        this.getSetupDone = function() {
            return l
        }
        ;
        this.getPlaylistTransition = function() {
            return V
        }
        ;
        this.getPlaylistLoaded = function() {
            return Ca
        }
        ;
        this.getMediaPlaying = function() {
            return l ? Q : !1
        }
        ;
        this.getActiveItemId = function() {
            return l ? "undefined" !== typeof n ? n.getCounter() : null : !1
        }
        ;
        this.getPlaylistLength = function() {
            return l ? AWPUtils.isNumber(C) ? C : 0 : !1
        }
        ;
        this.getPlaylistItems = function() {
            if (!l)
                return !1;
            var a = [];
            I.find("div.awp-playlist-item").each(function() {
                a.push(c(this))
            });
            return a
        }
        ;
        this.getPlaylistData = function() {
            return J || null
        }
        ;
        this.getCurrMediaData = function() {
            return l ? u : !1
        }
        ;
        this.getTitle = function(a) {
            return pa(a)
        }
        ;
        this.getSettings = function() {
            return l ? q || null : !1
        }
        ;
        this.getInstanceName = function() {
            return l ? E : !1
        }
        ;
        this.toggleInteraction = function() {
            "undefined" !== typeof h && h.toggleInteraction()
        }
        ;
        this.overControls = function(a) {
            t(a)
        }
        ;
        this.outControls = function(a) {
            A(a)
        }
        ;
        this.showPlayerElements2 = function() {
            showPlayerElements2()
        }
        ;
        AWPUtils.isEmpty(la) ? gb() : z(la);
        return this
    }
}
)(jQuery);
