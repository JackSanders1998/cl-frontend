import { jsxs, jsx } from 'react/jsx-runtime';
import { Link, Outlet } from '@tanstack/react-router';
import { _ } from './climbs-ZLTKmgZy.mjs';
import { $ as $e } from '../nitro/nitro.mjs';
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

const D = function() {
  const r = $e.useLoaderData();
  return jsxs("div", { className: "p-2 flex gap-2", children: [jsx("ul", { className: "list-disc pl-4", children: r.map((o) => jsx("li", { className: "whitespace-nowrap", children: jsx(Link, { to: "/climbs/$climbId", params: { climbId: o.climb_id }, className: "block py-1 text-blue-800 hover:text-blue-600", activeProps: { className: "text-black font-bold" }, children: jsxs("div", { children: [o.climb_type, " ", o.grade] }) }) }, o.climb_id)) }), jsx("hr", {}), jsx(Outlet, {})] });
}, O = () => _();

export { D as component, O as loader };
//# sourceMappingURL=index-BeldkAS-.mjs.map
