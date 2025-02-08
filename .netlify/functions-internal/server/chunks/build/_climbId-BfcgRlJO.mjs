import { jsx, jsxs } from 'react/jsx-runtime';
import { ErrorComponent } from '@tanstack/react-router';
import { l } from './climbs-ZLTKmgZy.mjs';
import { E as Ee } from '../nitro/nitro.mjs';
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

function D({ error: o }) {
  return jsx(ErrorComponent, { error: o });
}
const R = function() {
  const t = Ee.useLoaderData();
  return jsxs("div", { className: "space-y-2", children: [jsxs("h4", { className: "text-xl font-bold underline", children: [t.climb_type, " ", t.grade] }), jsx("div", { className: "text-sm", children: t.attempt })] });
}, _ = ({ params: { climbId: o } }) => l({ data: o });

export { D as ClimbErrorComponent, R as component, _ as loader };
//# sourceMappingURL=_climbId-BfcgRlJO.mjs.map
