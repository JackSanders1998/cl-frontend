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

const i = A("app_utils_locations_ts--fetchLocation_createServerFn_handler", "/_server", (e) => h.__executeServer(e)), s = A("app_utils_locations_ts--fetchLocations_createServerFn_handler", "/_server", (e) => _.__executeServer(e)), h = u({ method: "GET" }).validator((e) => e).handler(i, async ({ data: e }) => (console.info(`Fetching location with id ${e}...`), await t.get(`${t$1}locations/${e}`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.MY_TOKEN}` } }).then((t) => t.data).catch((t) => {
  throw console.error(t), t.status === 404 ? notFound() : t;
}))), _ = u({ method: "GET" }).handler(s, async () => (console.info("Fetching locations..."), await new Promise((e) => setTimeout(e, 1e3)), t.get(`${t$1}locations`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.MY_TOKEN}` } }).then((e) => e.data.slice(0, 10))));

export { i as fetchLocation_createServerFn_handler, s as fetchLocations_createServerFn_handler };
//# sourceMappingURL=locations-C-S5g8cW.mjs.map
