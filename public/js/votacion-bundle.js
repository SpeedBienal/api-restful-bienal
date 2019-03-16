! function(t) {
    "use strict";
    if ("object" == typeof exports) module.exports = t("undefined" != typeof angular ? angular : require("angular"), "undefined" != typeof Chart ? Chart : require("chart.js"));
    else if ("function" == typeof define && define.amd) define(["angular", "chart"], t);
    else {
        if ("undefined" == typeof angular || "undefined" == typeof Chart) throw new Error("Chart.js library needs to included, see http://jtblin.github.io/angular-chart.js/");
        t(angular, Chart)
    }
}(function(t, a) {
    "use strict";

    function r() {
        var r = {
                responsive: !0
            },
            e = {
                Chart: a,
                getOptions: function(a) {
                    var e = a && r[a] || {};
                    return t.extend({}, r, e)
                }
            };
        this.setOptions = function(a, e) {
            return e ? void(r[a] = t.extend(r[a] || {}, e)) : (e = a, void(r = t.extend(r, e)))
        }, this.$get = function() {
            return e
        }
    }

    function e(r, e) {
        function o(t, a, e) {
            var n = w(t, a);
            if (m(a) && B(t, a, e, n)) {
                var o = e[0],
                    i = o.getContext("2d");
                a.chartGetColor = p(a);
                var c = b(t, a);
                A(a), a.chart = new r.Chart(i, {
                    type: t,
                    data: c,
                    options: n
                }), a.$emit("chart-create", a.chart), k(o, a)
            }
        }

        function i(t, a) {
            return !!(t && a && t.length && a.length) && (Array.isArray(t[0]) ? t.length === a.length && t.every(function(t, r) {
                return t.length === a[r].length
            }) : a.reduce(c, 0) > 0 && t.length === a.length)
        }

        function c(t, a) {
            return t + a
        }

        function s(a, r, e) {
            var n = null;
            return function(o) {
                var i = a.chart.getElementsAtEvent || a.chart.getPointsAtEvent;
                if (i) {
                    var c = i.call(a.chart, o);
                    e !== !1 && t.equals(n, c) !== !1 || (n = c, a[r](c, o))
                }
            }
        }

        function u(e, n) {
            for (var o = t.copy(n.chartColors || r.getOptions(e).chartColors || a.defaults.global.colors), i = o.length < n.chartData.length; o.length < n.chartData.length;) o.push(n.chartGetColor());
            return i && (n.chartColors = o), o.map(l)
        }

        function l(t) {
            return "object" == typeof t && null !== t ? t : "string" == typeof t && "#" === t[0] ? d(g(t.substr(1))) : h()
        }

        function h() {
            var t = [f(0, 255), f(0, 255), f(0, 255)];
            return d(t)
        }

        function d(t) {
            return {
                backgroundColor: v(t, .2),
                pointBackgroundColor: v(t, 1),
                pointHoverBackgroundColor: v(t, .8),
                borderColor: v(t, 1),
                pointBorderColor: "#fff",
                pointHoverBorderColor: v(t, 1)
            }
        }

        function f(t, a) {
            return Math.floor(Math.random() * (a - t + 1)) + t
        }

        function v(t, a) {
            return n ? "rgb(" + t.join(",") + ")" : "rgba(" + t.concat(a).join(",") + ")"
        }

        function g(t) {
            var a = parseInt(t, 16),
                r = a >> 16 & 255,
                e = a >> 8 & 255,
                n = 255 & a;
            return [r, e, n]
        }

        function m(t) {
            return t.chartData && t.chartData.length
        }

        function p(t) {
            return "function" == typeof t.chartGetColor ? t.chartGetColor : h
        }

        function b(t, a) {
            var r = u(t, a);
            return Array.isArray(a.chartData[0]) ? C(a.chartLabels, a.chartData, a.chartSeries || [], r, a.chartDatasetOverride) : y(a.chartLabels, a.chartData, r, a.chartDatasetOverride)
        }

        function C(a, r, e, n, o) {
            return {
                labels: a,
                datasets: r.map(function(a, r) {
                    var i = t.extend({}, n[r], {
                        label: e[r],
                        data: a
                    });
                    return o && o.length >= r && t.merge(i, o[r]), i
                })
            }
        }

        function y(a, r, e, n) {
            var o = {
                labels: a,
                datasets: [{
                    data: r,
                    backgroundColor: e.map(function(t) {
                        return t.pointBackgroundColor
                    }),
                    hoverBackgroundColor: e.map(function(t) {
                        return t.backgroundColor
                    })
                }]
            };
            return n && t.merge(o.datasets[0], n), o
        }

        function w(a, e) {
            return t.extend({}, r.getOptions(a), e.chartOptions)
        }

        function k(a, r) {
            a.onclick = r.chartClick ? s(r, "chartClick", !1) : t.noop, a.onmousemove = r.chartHover ? s(r, "chartHover", !0) : t.noop
        }

        function D(t, a) {
            Array.isArray(a.chartData[0]) ? a.chart.data.datasets.forEach(function(a, r) {
                a.data = t[r]
            }) : a.chart.data.datasets[0].data = t, a.chart.update(), a.$emit("chart-update", a.chart)
        }

        function $(t) {
            return !t || Array.isArray(t) && !t.length || "object" == typeof t && !Object.keys(t).length
        }

        function B(t, a, r, n) {
            return !n.responsive || 0 !== r[0].clientHeight || (e(function() {
                o(t, a, r)
            }, 50, !1), !1)
        }

        function A(t) {
            t.chart && (t.chart.destroy(), t.$emit("chart-destroy", t.chart))
        }
        return function(a) {
            return {
                restrict: "CA",
                scope: {
                    chartGetColor: "=?",
                    chartType: "=",
                    chartData: "=?",
                    chartLabels: "=?",
                    chartOptions: "=?",
                    chartSeries: "=?",
                    chartColors: "=?",
                    chartClick: "=?",
                    chartHover: "=?",
                    chartDatasetOverride: "=?"
                },
                link: function(r, e) {
                    function c(t, n) {
                        if (!t || !t.length || Array.isArray(t[0]) && !t[0].length) return void A(r);
                        var c = a || r.chartType;
                        return c ? r.chart && i(t, n) ? D(t, r) : void o(c, r, e) : void 0
                    }

                    function s(n, i) {
                        if (!$(n) && !t.equals(n, i)) {
                            var c = a || r.chartType;
                            c && o(c, r, e)
                        }
                    }

                    function u(a, n) {
                        $(a) || t.equals(a, n) || o(a, r, e)
                    }
                    n && window.G_vmlCanvasManager.initElement(e[0]), r.$watch("chartData", c, !0), r.$watch("chartSeries", s, !0), r.$watch("chartLabels", s, !0), r.$watch("chartOptions", s, !0), r.$watch("chartColors", s, !0), r.$watch("chartDatasetOverride", s, !0), r.$watch("chartType", u, !1), r.$on("$destroy", function() {
                        A(r)
                    }), r.$on("$resize", function() {
                        r.chart && r.chart.resize()
                    })
                }
            }
        }
    }
    a.defaults.global.multiTooltipTemplate = "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>", a.defaults.global.tooltips.mode = "label", a.defaults.global.elements.line.borderWidth = 2, a.defaults.global.elements.rectangle.borderWidth = 2, a.defaults.global.legend.display = !1, a.defaults.global.colors = ["#97BBCD", "#DCDCDC", "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"];
    var n = "object" == typeof window.G_vmlCanvasManager && null !== window.G_vmlCanvasManager && "function" == typeof window.G_vmlCanvasManager.initElement;
    return n && (a.defaults.global.animation = !1), t.module("chart.js", []).provider("ChartJs", r).factory("ChartJsFactory", ["ChartJs", "$timeout", e]).directive("chartBase", ["ChartJsFactory", function(t) {
        return new t
    }]).directive("chartLine", ["ChartJsFactory", function(t) {
        return new t("line")
    }]).directive("chartBar", ["ChartJsFactory", function(t) {
        return new t("bar")
    }]).directive("chartHorizontalBar", ["ChartJsFactory", function(t) {
        return new t("horizontalBar")
    }]).directive("chartRadar", ["ChartJsFactory", function(t) {
        return new t("radar")
    }]).directive("chartDoughnut", ["ChartJsFactory", function(t) {
        return new t("doughnut")
    }]).directive("chartPie", ["ChartJsFactory", function(t) {
        return new t("pie")
    }]).directive("chartPolarArea", ["ChartJsFactory", function(t) {
        return new t("polarArea")
    }]).directive("chartBubble", ["ChartJsFactory", function(t) {
        return new t("bubble")
    }]).name
}),
function() {
    function t(t, r, e) {
        t.visuales = {
            data: [0, 0, 0, 0],
            labels: ["uno", "dos", "tres", "otros"],
            colors: ["#395E80", a("#395E80", 30), a("#395E80", 60), a("#395E80", 90)]
        }, t.audiovisuales = {
            data: [0, 0, 0, 0],
            labels: ["uno", "dos", "tres", "otros"],
            colors: ["#ed7635", a("#ed7635", 30), a("#ed7635", 60), a("#ed7635", 90)]
        }, t.musica = {
            data: [0, 0, 0, 0],
            labels: ["uno", "dos", "tres", "otros"],
            colors: ["#f8b451", a("#f8b451", 30), a("#f8b451", 60), a("#f8b451", 90)]
        }, t.escenicas = {
            data: [0, 0, 0, 0],
            labels: ["uno", "dos", "tres", "otros"],
            colors: ["#ea5a57", a("#ea5a57", 30), a("#ea5a57", 60), a("#ea5a57", 90)]
        }, t.letras = {
            data: [0, 0, 0, 0],
            labels: ["uno", "dos", "tres", "otros"],
            colors: ["#00a880", a("#00a880", 30), a("#00a880", 60), a("#00a880", 90)]
        }, r.on("voto", function(a) {
            e.getInitial().then(function(a) {
                for (var r = a.data.total, e = a.data.audiovisuales, n = a.data.visuales, o = a.data.musica, i = a.data.escenicas, c = a.data.letras, s = 0; s < e.length; s++) t.audiovisuales.data[s] = e[s].suma, t.audiovisuales.labels[s] = e[s]._id.titulo;
                t.audiovisuales.data[3] = r - (e[0].suma + e[1].suma + e[2].suma);
                for (var s = 0; s < n.length; s++) t.visuales.data[s] = n[s].suma, t.visuales.labels[s] = n[s]._id.titulo;
                t.visuales.data[3] = r - (n[0].suma + n[1].suma + n[2].suma);
                for (var s = 0; s < o.length; s++) t.musica.data[s] = o[s].suma, t.musica.labels[s] = o[s]._id.titulo;
                t.musica.data[3] = r - (o[0].suma + o[1].suma + o[2].suma);
                for (var s = 0; s < i.length; s++) t.escenicas.data[s] = i[s].suma, t.escenicas.labels[s] = i[s]._id.titulo;
                t.escenicas.data[3] = r - (i[0].suma + i[1].suma + i[2].suma);
                for (var s = 0; s < c.length; s++) t.letras.data[s] = c[s].suma, t.letras.labels[s] = c[s]._id.titulo;
                t.letras.data[3] = r - (c[0].suma + c[1].suma + c[2].suma), console.log(a.data)
            })
        }), t.$on("$destroy", function() {
            r.removeListener("voto")
        })
    }

    function a(t, a) {
        var r = !1;
        "#" == t[0] && (t = t.slice(1), r = !0);
        var e = parseInt(t, 16),
            n = (e >> 16) + a;
        n > 255 ? n = 255 : n < 0 && (n = 0);
        var o = (e >> 8 & 255) + a;
        o > 255 ? o = 255 : o < 0 && (o = 0);
        var i = (255 & e) + a;
        return i > 255 ? i = 255 : i < 0 && (i = 0), (r ? "#" : "") + (i | o << 8 | n << 16).toString(16)
    }
    angular.module("votacion", ["chart.js"]).controller("VotacionController", ["$scope", "socket", "votacionService", t])
}(),
function() {
    function t(t) {
        return {
            getInitial: function() {
                return t.get("http://localhost:3000/api/v1/votacion")
            },
            getObra: function(a) {
                return t.get("http://localhost:3000/api/v1/obras/" + a)
            }
        }
    }

    function a(t) {
        this.socket = io(), this.on = function(a, r) {
            this.socket && this.socket.on(a, function(a) {
                t(function() {
                    r(a)
                })
            })
        }, this.emit = function(t, a) {
            this.socket && this.socket.emit(t, a)
        }, this.removeListener = function(t) {
            this.socket && this.socket.removeListener(t)
        }
    }
    angular.module("votacion").factory("votacionService", ["$http", t]).service("socket", ["$timeout", a])
}();
