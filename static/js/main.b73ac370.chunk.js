(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    131: function (e, t) {},
    133: function (e, t) {},
    151: function (e, t, a) {},
    152: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        c = a(9),
        i = a.n(c),
        r = a(22),
        l = a(192),
        s = a(187),
        o = a(182),
        d = a(185),
        j = a(153),
        u = a(19),
        b = a(82),
        m = a(54),
        x = a.n(m),
        p = a(4),
        O = Object(n.createContext)(),
        f = Object(b.io)("https://webrtc-back-new.onrender.com/"),
        h = function (e) {
          var t = e.children,
            a = Object(n.useState)(!1),
            c = Object(u.a)(a, 2),
            i = c[0],
            r = c[1],
            l = Object(n.useState)(!1),
            s = Object(u.a)(l, 2),
            o = s[0],
            d = s[1],
            j = Object(n.useState)(),
            b = Object(u.a)(j, 2),
            m = b[0],
            h = b[1],
            g = Object(n.useState)(""),
            v = Object(u.a)(g, 2),
            w = v[0],
            C = v[1],
            y = Object(n.useState)({}),
            N = Object(u.a)(y, 2),
            k = N[0],
            I = N[1],
            D = Object(n.useState)(""),
            S = Object(u.a)(D, 2),
            A = S[0],
            B = S[1],
            E = Object(n.useRef)(),
            R = Object(n.useRef)(),
            U = Object(n.useRef)();
          Object(n.useEffect)(function () {
            navigator.mediaDevices
              .getUserMedia({ video: !0, audio: !0 })
              .then(function (e) {
                h(e), (E.current.srcObject = e);
              }),
              f.on("me", function (e) {
                return B(e);
              }),
              f.on("callUser", function (e) {
                var t = e.from,
                  a = e.name,
                  n = e.signal;
                I({ isReceivingCall: !0, from: t, name: a, signal: n });
              });
          }, []);
          return Object(p.jsx)(O.Provider, {
            value: {
              call: k,
              callAccepted: i,
              myVideo: E,
              userVideo: R,
              stream: m,
              name: w,
              setName: C,
              callEnded: o,
              me: A,
              callUser: function (e) {
                var t = new x.a({ initiator: !0, trickle: !1, stream: m });
                t.on("signal", function (t) {
                  f.emit("callUser", {
                    userToCall: e,
                    signalData: t,
                    from: A,
                    name: w,
                  });
                }),
                  t.on("stream", function (e) {
                    R.current.srcObject = e;
                  }),
                  f.on("callAccepted", function (e) {
                    r(!0), t.signal(e);
                  }),
                  (U.current = t);
              },
              leaveCall: function () {
                d(!0), U.current.destroy(), window.location.reload();
              },
              answerCall: function () {
                r(!0);
                var e = new x.a({ initiator: !1, trickle: !1, stream: m });
                e.on("signal", function (e) {
                  f.emit("answerCall", { signal: e, to: k.from });
                }),
                  e.on("stream", function (e) {
                    R.current.srcObject = e;
                  }),
                  e.signal(k.signal),
                  (U.current = e);
              },
            },
            children: t,
          });
        },
        g = Object(o.a)(function (e) {
          return {
            video: Object(r.a)({ width: "550px" }, e.breakpoints.down("xs"), {
              width: "300px",
            }),
            gridContainer: Object(r.a)(
              { justifyContent: "center" },
              e.breakpoints.down("xs"),
              { flexDirection: "column" }
            ),
            paper: {
              padding: "10px",
              border: "2px solid black",
              margin: "10px",
            },
          };
        }),
        v = function () {
          var e = Object(n.useContext)(O),
            t = e.name,
            a = e.callAccepted,
            c = e.myVideo,
            i = e.userVideo,
            r = e.callEnded,
            l = e.stream,
            o = e.call,
            u = g();
          return Object(p.jsxs)(d.a, {
            container: !0,
            className: u.gridContainer,
            children: [
              l &&
                Object(p.jsx)(j.a, {
                  className: u.paper,
                  children: Object(p.jsxs)(d.a, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    children: [
                      Object(p.jsx)(s.a, {
                        variant: "h5",
                        gutterBottom: !0,
                        children: t || "Name",
                      }),
                      Object(p.jsx)("video", {
                        playsInline: !0,
                        muted: !0,
                        ref: c,
                        autoPlay: !0,
                        className: u.video,
                      }),
                    ],
                  }),
                }),
              a &&
                !r &&
                Object(p.jsx)(j.a, {
                  className: u.paper,
                  children: Object(p.jsxs)(d.a, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    children: [
                      Object(p.jsx)(s.a, {
                        variant: "h5",
                        gutterBottom: !0,
                        children: o.name || "Name",
                      }),
                      Object(p.jsx)("video", {
                        playsInline: !0,
                        ref: i,
                        autoPlay: !0,
                        className: u.video,
                      }),
                    ],
                  }),
                }),
            ],
          });
        },
        w = a(188),
        C = a(193),
        y = a(194),
        N = a(88),
        k = a(189),
        I = a(190),
        D = a(191),
        S = Object(o.a)(function (e) {
          return {
            root: { display: "flex", flexDirection: "column" },
            gridContainer: Object(r.a)(
              { width: "100%" },
              e.breakpoints.down("xs"),
              { flexDirection: "column" }
            ),
            container: Object(r.a)(
              { width: "600px", margin: "35px 0", padding: 0 },
              e.breakpoints.down("xs"),
              { width: "80%" }
            ),
            margin: { marginTop: 20 },
            padding: { padding: 20 },
            paper: { padding: "10px 20px", border: "2px solid black" },
          };
        }),
        A = function (e) {
          var t = e.children,
            a = Object(n.useContext)(O),
            c = a.me,
            i = a.callAccepted,
            r = a.name,
            l = a.setName,
            o = a.callEnded,
            b = a.leaveCall,
            m = a.callUser,
            x = Object(n.useState)(""),
            f = Object(u.a)(x, 2),
            h = f[0],
            g = f[1],
            v = S();
          return Object(p.jsx)(w.a, {
            className: v.container,
            children: Object(p.jsxs)(j.a, {
              elevation: 10,
              className: v.paper,
              children: [
                Object(p.jsx)("form", {
                  className: v.root,
                  noValidate: !0,
                  autoComplete: "off",
                  children: Object(p.jsxs)(d.a, {
                    container: !0,
                    className: v.gridContainer,
                    children: [
                      Object(p.jsxs)(d.a, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        className: v.padding,
                        children: [
                          Object(p.jsx)(s.a, {
                            gutterBottom: !0,
                            variant: "h6",
                            children: "Account Info",
                          }),
                          Object(p.jsx)(C.a, {
                            label: "Name",
                            value: r,
                            onChange: function (e) {
                              return l(e.target.value);
                            },
                            fullWidth: !0,
                          }),
                          Object(p.jsx)(N.CopyToClipboard, {
                            text: c,
                            className: v.margin,
                            children: Object(p.jsx)(y.a, {
                              variant: "contained",
                              color: "primary",
                              fullWidth: !0,
                              startIcon: Object(p.jsx)(k.a, {
                                fontSize: "large",
                              }),
                              children: "Copy Your ID",
                            }),
                          }),
                        ],
                      }),
                      Object(p.jsxs)(d.a, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        className: v.padding,
                        children: [
                          Object(p.jsx)(s.a, {
                            gutterBottom: !0,
                            variant: "h6",
                            children: "Make a call",
                          }),
                          Object(p.jsx)(C.a, {
                            label: "ID to call",
                            value: h,
                            onChange: function (e) {
                              return g(e.target.value);
                            },
                            fullWidth: !0,
                          }),
                          i && !o
                            ? Object(p.jsx)(y.a, {
                                variant: "contained",
                                color: "secondary",
                                startIcon: Object(p.jsx)(I.a, {
                                  fontSize: "large",
                                }),
                                fullWidth: !0,
                                onClick: b,
                                className: v.margin,
                                children: "Hang Up",
                              })
                            : Object(p.jsx)(y.a, {
                                variant: "contained",
                                color: "primary",
                                startIcon: Object(p.jsx)(D.a, {
                                  fontSize: "large",
                                }),
                                fullWidth: !0,
                                onClick: function () {
                                  return m(h);
                                },
                                className: v.margin,
                                children: "Call",
                              }),
                        ],
                      }),
                    ],
                  }),
                }),
                t,
              ],
            }),
          });
        },
        B = function () {
          var e = Object(n.useContext)(O),
            t = e.answerCall,
            a = e.call,
            c = e.callAccepted;
          return Object(p.jsx)(p.Fragment, {
            children:
              a.isReceivingCall &&
              !c &&
              Object(p.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-around" },
                children: [
                  Object(p.jsxs)("h1", { children: [a.name, " is calling:"] }),
                  Object(p.jsx)(y.a, {
                    variant: "contained",
                    color: "primary",
                    onClick: t,
                    children: "Answer",
                  }),
                ],
              }),
          });
        },
        E = Object(o.a)(function (e) {
          return {
            appBar: Object(r.a)(
              {
                borderRadius: 15,
                margin: "30px 100px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "600px",
                border: "2px solid black",
              },
              e.breakpoints.down("xs"),
              { width: "90%" }
            ),
            image: { marginLeft: "15px" },
            wrapper: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            },
          };
        }),
        R = function () {
          var e = E();
          return Object(p.jsxs)("div", {
            className: e.wrapper,
            children: [
              Object(p.jsx)(l.a, {
                className: e.appBar,
                position: "static",
                color: "inherit",
                children: Object(p.jsx)(s.a, {
                  variant: "h2",
                  align: "center",
                  children: "DEVcall",
                }),
              }),
              Object(p.jsx)(v, {}),
              Object(p.jsx)(A, { children: Object(p.jsx)(B, {}) }),
            ],
          });
        };
      a(151);
      i.a.render(
        Object(p.jsx)(h, { children: Object(p.jsx)(R, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[152, 1, 2]],
]);
//# sourceMappingURL=main.b73ac370.chunk.js.map
