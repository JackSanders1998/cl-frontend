import { jsx, jsxs } from 'react/jsx-runtime';
import { ErrorComponent } from '@tanstack/react-router';
import { n } from './locations-1lLG7ji0.mjs';
import { N as Ne } from '../nitro/nitro.mjs';
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

function g({ error: o }) {
  return jsx(ErrorComponent, { error: o });
}
const k = function() {
  const r = Ne.useLoaderData();
  return jsxs("div", { className: "space-y-2", children: [jsx("h4", { className: "text-xl font-bold underline", children: r.name }), jsx("div", { className: "text-sm", children: r.environment })] });
}, q = ({ params: { locationId: o } }) => n({ data: o });

export { g as LocationErrorComponent, k as component, q as loader };
//# sourceMappingURL=_locationId-CxiU5eSb.mjs.map
