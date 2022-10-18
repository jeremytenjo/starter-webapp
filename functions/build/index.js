'use strict';
var le = Object.create;
var C = Object.defineProperty,
  ue = Object.defineProperties,
  de = Object.getOwnPropertyDescriptor,
  pe = Object.getOwnPropertyDescriptors,
  me = Object.getOwnPropertyNames,
  q = Object.getOwnPropertySymbols,
  fe = Object.getPrototypeOf,
  O = Object.prototype.hasOwnProperty,
  ge = Object.prototype.propertyIsEnumerable;
var H = (e, r, t) =>
    r in e
      ? C(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  k = (e, r) => {
    for (var t in r || (r = {})) O.call(r, t) && H(e, t, r[t]);
    if (q) for (var t of q(r)) ge.call(r, t) && H(e, t, r[t]);
    return e;
  },
  N = (e, r) => ue(e, pe(r));
var E = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var ve = (e, r, t, s) => {
  if ((r && typeof r == 'object') || typeof r == 'function')
    for (let o of me(r))
      !O.call(e, o) &&
        o !== t &&
        C(e, o, {
          get: () => r[o],
          enumerable: !(s = de(r, o)) || s.enumerable,
        });
  return e;
};
var J = (e, r, t) => (
  (t = e != null ? le(fe(e)) : {}),
  ve(
    r || !e || !e.__esModule
      ? C(t, 'default', { value: e, enumerable: !0 })
      : t,
    e
  )
);
var Q = E((Ie, B) => {
  'use strict';
  B.exports = (e, r) => (
    (r = r || (() => {})),
    e.then(
      (t) =>
        new Promise((s) => {
          s(r());
        }).then(() => t),
      (t) =>
        new Promise((s) => {
          s(r());
        }).then(() => {
          throw t;
        })
    )
  );
});
var U = E((Ae, A) => {
  'use strict';
  var he = Q(),
    I = class extends Error {
      constructor(r) {
        super(r), (this.name = 'TimeoutError');
      }
    },
    M = (e, r, t) =>
      new Promise((s, o) => {
        if (typeof r != 'number' || r < 0)
          throw new TypeError(
            'Expected `milliseconds` to be a positive number'
          );
        if (r === 1 / 0) {
          s(e);
          return;
        }
        let d = setTimeout(() => {
          if (typeof t == 'function') {
            try {
              s(t());
            } catch (l) {
              o(l);
            }
            return;
          }
          let v =
              typeof t == 'string'
                ? t
                : `Promise timed out after ${r} milliseconds`,
            m = t instanceof Error ? t : new I(v);
          typeof e.cancel == 'function' && e.cancel(), o(m);
        }, r);
        he(e.then(s, o), () => {
          clearTimeout(d);
        });
      });
  A.exports = M;
  A.exports.default = M;
  A.exports.TimeoutError = I;
});
var ee = E((Te, w) => {
  'use strict';
  var Z = U(),
    ye = Symbol.asyncIterator || '@@asyncIterator',
    G = (e) => {
      let r = e.on || e.addListener || e.addEventListener,
        t = e.off || e.removeListener || e.removeEventListener;
      if (!r || !t) throw new TypeError('Emitter is not compatible');
      return { addListener: r.bind(e), removeListener: t.bind(e) };
    },
    K = (e) => (Array.isArray(e) ? e : [e]),
    X = (e, r, t) => {
      let s,
        o = new Promise((d, v) => {
          if (
            ((t = k(
              {
                rejectionEvents: ['error'],
                multiArgs: !1,
                resolveImmediately: !1,
              },
              t
            )),
            !(t.count >= 0 && (t.count === 1 / 0 || Number.isInteger(t.count))))
          )
            throw new TypeError(
              'The `count` option should be at least 0 or more'
            );
          let m = K(r),
            l = [],
            { addListener: y, removeListener: b } = G(e),
            c = (...a) => {
              let h = t.multiArgs ? a : a[0];
              (t.filter && !t.filter(h)) ||
                (l.push(h), t.count === l.length && (s(), d(l)));
            },
            f = (a) => {
              s(), v(a);
            };
          s = () => {
            for (let a of m) b(a, c);
            for (let a of t.rejectionEvents) b(a, f);
          };
          for (let a of m) y(a, c);
          for (let a of t.rejectionEvents) y(a, f);
          t.resolveImmediately && d(l);
        });
      if (((o.cancel = s), typeof t.timeout == 'number')) {
        let d = Z(o, t.timeout);
        return (d.cancel = s), d;
      }
      return o;
    },
    Y = (e, r, t) => {
      typeof t == 'function' && (t = { filter: t }),
        (t = N(k({}, t), { count: 1, resolveImmediately: !1 }));
      let s = X(e, r, t),
        o = s.then((d) => d[0]);
      return (o.cancel = s.cancel), o;
    };
  w.exports = Y;
  w.exports.default = Y;
  w.exports.multiple = X;
  w.exports.iterator = (e, r, t) => {
    typeof t == 'function' && (t = { filter: t });
    let s = K(r);
    t = k(
      {
        rejectionEvents: ['error'],
        resolutionEvents: [],
        limit: 1 / 0,
        multiArgs: !1,
      },
      t
    );
    let { limit: o } = t;
    if (!(o >= 0 && (o === 1 / 0 || Number.isInteger(o))))
      throw new TypeError(
        'The `limit` option should be a non-negative integer or Infinity'
      );
    if (o === 0)
      return {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          return { done: !0, value: void 0 };
        },
      };
    let { addListener: v, removeListener: m } = G(e),
      l = !1,
      y,
      b = !1,
      c = [],
      f = [],
      a = 0,
      h = !1,
      z = (...n) => {
        a++, (h = a === o);
        let p = t.multiArgs ? n : n[0];
        if (c.length > 0) {
          let { resolve: L } = c.shift();
          L({ done: !1, value: p }), h && $();
          return;
        }
        f.push(p), h && $();
      },
      $ = () => {
        l = !0;
        for (let n of s) m(n, z);
        for (let n of t.rejectionEvents) m(n, R);
        for (let n of t.resolutionEvents) m(n, V);
        for (; c.length > 0; ) {
          let { resolve: n } = c.shift();
          n({ done: !0, value: void 0 });
        }
      },
      R = (...n) => {
        if (((y = t.multiArgs ? n : n[0]), c.length > 0)) {
          let { reject: p } = c.shift();
          p(y);
        } else b = !0;
        $();
      },
      V = (...n) => {
        let p = t.multiArgs ? n : n[0];
        if (!(t.filter && !t.filter(p))) {
          if (c.length > 0) {
            let { resolve: L } = c.shift();
            L({ done: !0, value: p });
          } else f.push(p);
          $();
        }
      };
    for (let n of s) v(n, z);
    for (let n of t.rejectionEvents) v(n, R);
    for (let n of t.resolutionEvents) v(n, V);
    return {
      [ye]() {
        return this;
      },
      async next() {
        if (f.length > 0) {
          let n = f.shift();
          return { done: l && f.length === 0 && !h, value: n };
        }
        if (b) throw ((b = !1), y);
        return l
          ? { done: !0, value: void 0 }
          : new Promise((n, p) => c.push({ resolve: n, reject: p }));
      },
      async return(n) {
        return $(), { done: l, value: n };
      },
    };
  };
  w.exports.TimeoutError = Z.TimeoutError;
});
var ne = E((Pe, re) => {
  'use strict';
  var te = '[a-fA-F\\d:]',
    g = (e) =>
      e && e.includeBoundaries
        ? `(?:(?<=\\s|^)(?=${te})|(?<=${te})(?=\\s|$))`
        : '',
    u =
      '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
    i = '[a-fA-F\\d]{1,4}',
    T = `
(?:
(?:${i}:){7}(?:${i}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${i}:){6}(?:${u}|:${i}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${i}:){5}(?::${u}|(?::${i}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${i}:){4}(?:(?::${i}){0,1}:${u}|(?::${i}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${i}:){3}(?:(?::${i}){0,2}:${u}|(?::${i}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${i}:){2}(?:(?::${i}){0,3}:${u}|(?::${i}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${i}:){1}(?:(?::${i}){0,4}:${u}|(?::${i}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${i}){0,5}:${u}|(?::${i}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
      .replace(/\s*\/\/.*$/gm, '')
      .replace(/\n/g, '')
      .trim(),
    be = new RegExp(`(?:^${u}$)|(?:^${T}$)`),
    we = new RegExp(`^${u}$`),
    xe = new RegExp(`^${T}$`),
    D = (e) =>
      e && e.exact
        ? be
        : new RegExp(`(?:${g(e)}${u}${g(e)})|(?:${g(e)}${T}${g(e)})`, 'g');
  D.v4 = (e) => (e && e.exact ? we : new RegExp(`${g(e)}${u}${g(e)}`, 'g'));
  D.v6 = (e) => (e && e.exact ? xe : new RegExp(`${g(e)}${T}${g(e)}`, 'g'));
  re.exports = D;
});
var oe = E((Le, se) => {
  'use strict';
  var F = ne(),
    x = (e) => F({ exact: !0 }).test(e);
  x.v4 = (e) => F.v4({ exact: !0 }).test(e);
  x.v6 = (e) => F.v6({ exact: !0 }).test(e);
  x.version = (e) => (x(e) ? (x.v4(e) ? 4 : 6) : void 0);
  se.exports = x;
});
import * as ce from 'firebase-functions';
var $e = J(ee(), 1),
  Ee = J(oe(), 1);
function S() {
  return void 0;
}
var ie = {
  name: 'webapp-starter',
  description: 'Webapp starter',
  version: '0.0.1',
  private: !0,
  type: 'module',
  engines: { node: '>=16.0.0', npm: '>=6.0.0' },
  scripts: {
    dev: 'node --experimental-json-modules --loader ts-node/esm ./scripts/dev/run.ts',
    'dev:user-signedOut':
      'node --experimental-json-modules --loader ts-node/esm ./scripts/dev/run.ts --user signedOut',
    'app:dev':
      'node --experimental-json-modules --loader ts-node/esm ./devtools/vite/scripts/startDevServer/run.ts',
    'app:build':
      'node --experimental-json-modules --loader ts-node/esm ./devtools/vite/scripts/buildApp/run.ts',
    'build-and-serve': 'npm run app:build && npm run app:serve',
    'app:serve':
      'node --experimental-json-modules --loader ts-node/esm ./devtools/vite/scripts/runBuild/run.ts',
    'storybook:dev':
      'node --experimental-json-modules --loader ts-node/esm ./scripts/storybook/startStorybook/run.ts',
    'emulators:start':
      'firebase emulators:start --only auth,firestore,functions',
    'functions:dev':
      "concurrently 'npm run functions:build-watch' 'npm run emulators:start'",
    'functions:build':
      'node --experimental-json-modules --loader ts-node/esm ./functions/scripts/buildFunctions/run.ts',
    'functions:build-watch':
      'node --experimental-json-modules --loader ts-node/esm ./functions/scripts/buildFunctions/run.ts --watch',
    'functions:deploy':
      'node --experimental-json-modules --loader ts-node/esm ./functions/scripts/deployFunctions/run.ts',
    'helpers:generate-logo-assets':
      'node --experimental-json-modules --loader ts-node/esm ./devtools/helpers/assets/generateLogoAssets/run.ts',
    'helpers:create-icon':
      'node --experimental-json-modules --loader ts-node/esm ./devtools/helpers/createIcon/run.ts',
    'helpers:update-useweb-deps':
      'npx npm-check-updates -f /@useweb/*/ -u && npm i && npm run tests:ts-types',
    'tests:e2e:watch':
      'node --experimental-json-modules --loader ts-node/esm ./devtools/testing/playwright/scripts/runPlayWright/run.ts --watch',
    'tests:e2e:run:all':
      'node --experimental-json-modules --loader ts-node/esm ./devtools/testing/playwright/scripts/runPlayWright/run.ts',
    'tests:vitest':
      'vitest --config ./devtools/testing/vitest/vitest.config.ts',
    'tests:vitest:ci':
      'vitest --config ./devtools/testing/vitest/vitest.config.ts --run --passWithNoTests',
    'tests:lint': 'eslint ./ --fix',
    'tests:ts-types': 'tsc --noemit',
    'tests:all':
      'node --experimental-json-modules --loader ts-node/esm ./scripts/tests/testEverything/run.ts',
    prettify:
      'node --loader  ts-node/esm ./devtools/prettier/scripts/runPrettier/runPrettier.ts',
    'install-deps': 'npm i && cd functions && npm i',
    postinstall: 'cd functions && npm i',
    prepare:
      'node --experimental-json-modules --loader ts-node/esm ./scripts/prepare/run.ts',
  },
  dependencies: {
    '@mui/material': '5.9.2',
    '@playwright/test': '1.22.2',
    '@storybook/addon-essentials': '6.5.9',
    '@storybook/builder-vite': '0.1.38',
    '@useweb/click-to-component': '2.2.2',
    '@useweb/firebase': '5.2.3',
    '@useweb/firebase-function-tester': '4.5.0',
    '@useweb/gtag': '1.2.0',
    '@useweb/ui': '4.8.4',
    '@useweb/ui-theme': '1.0.2',
    '@useweb/use-async': '4.4.0',
    '@useweb/use-data': '10.1.2',
    '@useweb/use-event-listener': '1.2.0',
    '@useweb/use-install-prompt': '1.4.1',
    firebase: '9.8.3',
    'firebase-tools': '11.1.0',
    history: '5.3.0',
    react: '18.1.0',
    'react-code-blocks': '0.0.9-0',
    'react-dom': '18.1.0',
    'react-hook-form': '7.32.0',
    'react-location': '3.3.4',
    'ts-toolbelt': '9.6.0',
    vitest: '0.17.0',
    zustand: '3.7.2',
  },
  devDependencies: {
    '@check-light-or-dark/color': '1.0.3',
    '@emotion/react': '11.9.3',
    '@emotion/styled': '11.9.3',
    '@grpc/grpc-js': '1.6.7',
    '@storybook/addon-controls': '6.5.9',
    '@storybook/addon-docs': '6.5.9',
    '@storybook/react': '6.5.9',
    '@svgr/core': '6.2.1',
    '@types/estree': '0.0.51',
    '@types/node': '17.0.42',
    '@types/react-dom': '18.0.5',
    '@typescript-eslint/eslint-plugin': '5.28.0',
    '@typescript-eslint/parser': '5.28.0',
    '@useweb/starter-webapp-code-gen-templates': '2.0.0',
    '@vitejs/plugin-react': '1.3.2',
    chalk: '4.1.2',
    clipboardy: '3.0.0',
    'command-line-args': '5.2.1',
    concurrently: '7.2.1',
    'css-loader': '6.7.1',
    dotenv: '16.0.1',
    'dotenv-parse-variables': '2.0.0',
    enquirer: '2.3.6',
    eslint: '8.17.0',
    'eslint-plugin-babel': '5.3.1',
    'eslint-plugin-import': '2.26.0',
    'eslint-plugin-prettier': '4.0.0',
    'eslint-plugin-react': '7.30.0',
    'eslint-plugin-react-hooks': '4.5.0',
    'eslint-plugin-storybook': '0.5.12',
    filehound: '1.17.6',
    'firebase-admin': '10.3.0',
    'format-duration': '2.0.0',
    'fs-extra': '10.1.0',
    husky: '8.0.1',
    ink: '3.2.0',
    'internal-ip': '7.0.0',
    'kill-port-process': '3.0.1',
    'live-server': '1.2.2',
    lodash: '4.17.21',
    'node-emoji': '1.11.0',
    'node-watch': '0.7.3',
    'npm-check-updates': '13.1.5',
    ora: '6.1.0',
    prettier: '2.6.2',
    'qrcode-terminal': '0.12.0',
    'react-json-view': '1.21.3',
    'rollup-plugin-manifest-json': '1.5.1',
    'rollup-plugin-visualizer': '5.6.0',
    sharp: '0.30.6',
    storybook: '6.5.9',
    'style-loader': '3.3.1',
    svgo: '2.8.0',
    'tcp-port-used': '1.0.2',
    'ts-node': '10.8.1',
    typescript: '4.7.3',
    vite: '2.9.12',
    'vite-plugin-compression': '0.5.1',
    'vite-plugin-html': '3.2.0',
    'vite-plugin-pwa': '0.12.0',
    'workbox-window': '6.5.3',
  },
};
var j = {
  primary: { main: '#5D59FF', light: '#EAEAFF' },
  gradient: {
    primary: 'linear-gradient(83.6deg, #5D59FF 8.71%, #9076FF 98.37%)',
    red: 'linear-gradient(83.6deg, #FF5959 8.71%, #FF7676 98.37%)',
  },
  grey: { main: '#8c8c8c', light: '#DEDEDE' },
  black: { main: '#1C1929', lighter: '#373543' },
  white: { main: '#fff' },
  error: { main: '#d93025' },
};
j.themeColor = j.white.main;
j.backgroundColor = j.white.main;
var ae = j;
var P = { colors: ae };
async function _() {
  return {
    domain: { main: 'https://starter-webapp.vercel.app/' },
    manifestJson: {
      name: 'Webapp Starter',
      short_name: 'Webapp Starter',
      description: ie.description,
      start_url: '/',
      orientation: 'any',
      display: 'standalone',
      theme_color: P.colors.themeColor,
      background_color: P.colors.backgroundColor,
      screenshots: [
        {
          src: 'images/manifest/screenshot-create.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-home.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-sync.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-edit.png',
          sizes: '360x640',
          type: 'image/png',
        },
      ],
    },
    server: { local: { port: 3001, IPAddress: S() } },
    theme: { tokens: P },
    devtools: { storybook: { port: 6006 } },
  };
}
async function W({ payload: e }) {
  return { name: `hello ${e.name}!` };
}
var Qe = ce.https.onRequest(async (e, r) => {
  let t = await _();
  r.set('Access-Control-Allow-Origin', t.domain.main);
  try {
    let s = JSON.parse(e.body),
      o = await W({ payload: s });
    r.status(200).json(o);
  } catch (s) {
    console.error(new Error(s)), r.status(500).json({ error: s.toString() });
  }
});
export { Qe as helloWorld };
