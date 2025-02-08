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

const h = A("app_utils_seshes_ts--fetchSesh_createServerFn_handler", "/_server", (e) => i.__executeServer(e)), c = A("app_utils_seshes_ts--fetchSeshes_createServerFn_handler", "/_server", (e) => _.__executeServer(e)), i = u({ method: "GET" }).validator((e) => e).handler(h, async ({ data: e }) => (console.info(`Fetching sesh with id ${e}...`), t.get(`${t$1}seshes/${e}`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.MY_TOKEN}` } }).then((r) => r.data).catch((r) => {
  throw console.error(r), r.status === 404 ? notFound() : r;
}))), _ = u({ method: "GET" }).handler(c, async () => (console.info("Fetching seshes..."), await new Promise((e) => setTimeout(e, 1e3)), await t.get(`${t$1}seshes`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.MY_TOKEN}` } }).then((e) => e.data.slice(0, 10))));

export { h as fetchSesh_createServerFn_handler, c as fetchSeshes_createServerFn_handler };
//# sourceMappingURL=seshes-DryY9-lu.mjs.map
