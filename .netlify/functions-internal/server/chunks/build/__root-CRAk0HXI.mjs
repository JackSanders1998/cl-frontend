import { getAuth } from '@clerk/tanstack-start/server';
import { A, u } from './index-DiV1A1mM.mjs';
import { r as re } from '../nitro/nitro.mjs';
import '@tanstack/react-router';
import 'tiny-invariant';
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
import 'node:async_hooks';
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

const c = A("app_routes_root_tsx--fetchClerkAuth_createServerFn_handler", "/_server", (e) => m.__executeServer(e)), m = u({ method: "GET" }).handler(c, async () => {
  const { userId: e } = await getAuth(re());
  return { userId: e };
});

export { c as fetchClerkAuth_createServerFn_handler };
//# sourceMappingURL=__root-CRAk0HXI.mjs.map
