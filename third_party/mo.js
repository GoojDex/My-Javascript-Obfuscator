window.document.getElementById("ma50").parentNode.removeChild(window.document.getElementById("ma50")),
    function (s, l) {
        function e(e) {
            e && ma50.nextFunction()
        }
        var c = s.document,
            o = ["i", "s", "u"];
        e.prototype = {
            rand: function (e) {
                return Math.floor(Math.random() * e)
            },
            getElementBy: function (e, t) {
                return e ? c.getElementById(e) : c.getElementsByTagName(t)
            },
            getStyle: function (e) {
                var t = c.defaultView;
                return t && t.getComputedStyle ? t.getComputedStyle(e, null) : e.currentStyle
            },
            deferExecution: function (e) {
                setTimeout(e, 2e3)
            },
            insert: function (e, t) {
                var n = c.createElement("span"),
                    a = c.body,
                    d = a.childNodes.length,
                    o = a.style,
                    i = 0,
                    r = 0;
                if ("ma50" == t) {
                    for (n.setAttribute("id", t), o.margin = o.padding = 0, o.height = "100%", d = this.rand(d); i < d; i++) 1 == a.childNodes[i].nodeType && (r = Math.max(r, parseFloat(this.getStyle(a.childNodes[i]).zIndex) || 0));
                    r && (n.style.zIndex = r + 1), d++
                }
                n.innerHTML = e, a.insertBefore(n, a.childNodes[d - 1])
            },
            
            
                    o = this,
                    i = o.getElementBy(0, "script"),
                    r = i.length - 1;
                for (c.write = null, c.writeln = null; 0 <= r; --r)
                    if (d[e = i[r].src.substr(7, 20)] !== l) return (n = c.createElement("script")).type = "text/javascript", n.src = i[r].src, s[t = d[e]] = l, n.onload = n.onreadystatechange = function () {
                        a = this, s[t] !== l || a.readyState && "loaded" !== a.readyState && "complete" !== a.readyState || (s[t] = n.onload = n.onreadystatechange = null, i[0].parentNode.removeChild(n))
                    }, i[0].parentNode.insertBefore(n, i[0]), void o.deferExecution(function () {
                        if (s[t] === l) return $("html").css("overflow", "hidden");
                        o.displayMessage(n.src), o.nextFunction()
                    });
                o.nextFunction()
            },
            
            nextFunction: function () {
                var e = o[0];
                e !== l && (o.shift(), this[e]())
            }
        }, s.ma50 = ma50 = new e, c.addEventListener ? s.addEventListener("load", e, !1) : s.attachEvent("onload", e)
    }(window)
