import { notFound } from '@tanstack/react-router';
import t from 'redaxios';
import { t as t$1 } from './constants-Bt2f24c3.mjs';
import { A, u } from './index-DiV1A1mM.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'tiny-invariant';
import 'node:async_hooks';
import '@clerk/tanstack-start/server';
import 'react/jsx-runtime';
import '@clerk/tanstack-start';
import '@tanstack/router-devtools';
import '@headlessui/react';
import 'clsx';
import 'react';
import 'framer-motion';
import '@heroicons/react/16/solid';
import '@heroicons/react/20/solid';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const a = A("app_utils_climbs_ts--fetchClimb_createServerFn_handler", "/_server", (e) => m.__executeServer(e)), s = A("app_utils_climbs_ts--fetchClimbs_createServerFn_handler", "/_server", (e) => l.__executeServer(e)), m = u({ method: "GET" }).validator((e) => e).handler(a, async ({ data: e }) => (console.info(`Fetching climb with id ${e}...`), await t.get(`${t$1}climbs/${e}`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.MY_TOKEN}` } }).then((t) => t.data).catch((t) => {
  throw console.error(t), t.status === 404 ? notFound() : t;
}))), l = u({ method: "GET" }).handler(s, async () => (console.info("Fetching climbs..."), await new Promise((e) => setTimeout(e, 1e3)), t.get(`${t$1}climbs`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.MY_TOKEN}` } }).then((e) => e.data.slice(0, 10))));

export { a as fetchClimb_createServerFn_handler, s as fetchClimbs_createServerFn_handler };
//# sourceMappingURL=climbs-D_EJdI4J.mjs.map
