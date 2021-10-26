!function (t) {
    var e, n, l, i, o,
        a = '<svg><symbol id="icon-gitlab" viewBox="0 0 1024 1024"><path d="M932.317184 567.76704L885.10464 422.46144l-93.57312-287.997952c-4.8128-14.81728-25.776128-14.81728-30.590976 0L667.36128 422.459392H356.62848L263.051264 134.46144c-4.8128-14.81728-25.776128-14.81728-30.593024 0l-93.57312 287.997952-47.210496 145.309696a32.165888 32.165888 0 0 0 11.68384 35.96288l408.6272 296.890368L920.61696 603.734016c11.272192-8.192 15.990784-22.71232 11.68384-35.964928" fill="#FC6D26" ></path><path d="M512.002048 900.62848l155.365376-478.171136H356.634624z" fill="#E24329" ></path><path d="M512.004096 900.62848L356.63872 422.47168H138.901504z" fill="#FC6D26" ></path><path d="M138.891264 422.465536l-47.214592 145.309696a32.16384 32.16384 0 0 0 11.685888 35.96288L511.991808 900.62848z" fill="#FCA326" ></path><path d="M138.893312 422.459392h217.737216L263.053312 134.46144c-4.8128-14.819328-25.778176-14.819328-30.590976 0z" fill="#E24329" ></path><path d="M512.002048 900.62848l155.365376-478.154752H885.10464z" fill="#FC6D26" ></path><path d="M885.11488 422.465536l47.214592 145.309696a32.16384 32.16384 0 0 1-11.685888 35.96288L512.014336 900.62848z" fill="#FCA326" ></path><path d="M885.096448 422.459392H667.36128l93.577216-287.997952c4.814848-14.819328 25.778176-14.819328 30.590976 0z" fill="#E24329" ></path></symbol><symbol id="icon-Top_NexusRepo" viewBox="0 0 1024 1024"><path d="M527.220639 654.099692v-180.102816a92.269065 92.269065 0 0 1 86.888521-29.326391V374.699172a119.511101 119.511101 0 0 0-86.888521 43.432142V381.485444h-71.570935v272.614248z" fill="#29B473" ></path><path d="M63.621302 246.826414v518.107645L512.048473 1024 960.378698 764.934059V273.826083l-110.058793 63.597065v363.889609l-338.271432 195.493113-338.319905-195.493113V310.423479l317.112805-183.205112V0L63.621302 246.826414z"  ></path><path d="M534.879432 0v127.12142l297.723456 172.225894 110.058792-63.597065L534.879432 0z" fill="#29B473" ></path></symbol></svg>',
        d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss"),
        c = function (t, e) {
            e.parentNode.insertBefore(t, e)
        };
    if (d && !t.__iconfont__svg__cssinject__) {
        t.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (t) {
            console && console.log(t)
        }
    }

    function s() {
        o || (o = !0, l())
    }

    function h() {
        try {
            i.documentElement.doScroll("left")
        } catch (t) {
            return void setTimeout(h, 50)
        }
        s()
    }

    e = function () {
        var t, e;
        (e = document.createElement("div")).innerHTML = a, a = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", e = t, (t = document.body).firstChild ? c(e, t.firstChild) : t.appendChild(e))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(e, 0) : (n = function () {
        document.removeEventListener("DOMContentLoaded", n, !1), e()
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (l = e, i = t.document, o = !1, h(), i.onreadystatechange = function () {
        "complete" == i.readyState && (i.onreadystatechange = null, s())
    })
}(window);