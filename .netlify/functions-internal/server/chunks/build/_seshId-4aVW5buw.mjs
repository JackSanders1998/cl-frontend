import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { ErrorComponent } from '@tanstack/react-router';
import { w as w$1, N, i, B, z } from './heading-B68eS6V4.mjs';
import f$1 from 'clsx';
import { createContext, useContext, useState } from 'react';
import { I as Ie, a as fr, A as A$1 } from '../nitro/nitro.mjs';
import '@headlessui/react';
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
import 'framer-motion';
import '@heroicons/react/16/solid';
import '@heroicons/react/20/solid';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const h = createContext({ bleed: false, dense: false, grid: false, striped: false });
function j({ bleed: t = false, dense: r = false, grid: i = false, striped: l = false, className: d, children: s, ...p }) {
  return jsx(h.Provider, { value: { bleed: t, dense: r, grid: i, striped: l }, children: jsx("div", { className: "flow-root", children: jsx("div", { ...p, className: f$1(d, "-mx-(--gutter) overflow-x-auto whitespace-nowrap"), children: jsx("div", { className: f$1("inline-block min-w-full align-middle", !t && "sm:px-(--gutter)"), children: jsx("table", { className: "min-w-full text-left text-sm/6 text-zinc-950 dark:text-white", children: s }) }) }) }) });
}
function A({ className: t, ...r }) {
  return jsx("thead", { ...r, className: f$1(t, "text-zinc-500 dark:text-zinc-400") });
}
function D(t) {
  return jsx("tbody", { ...t });
}
const w = createContext({ href: void 0, target: void 0, title: void 0 });
function b({ href: t, target: r, title: i, className: l, ...d }) {
  let { striped: s } = useContext(h);
  return jsx(w.Provider, { value: { href: t, target: r, title: i }, children: jsx("tr", { ...d, className: f$1(l, t && "has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%]", s && "even:bg-zinc-950/[2.5%] dark:even:bg-white/[2.5%]", t && s && "hover:bg-zinc-950/5 dark:hover:bg-white/5", t && !s && "hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]") }) });
}
function o({ className: t, ...r }) {
  let { bleed: i, grid: l } = useContext(h);
  return jsx("th", { ...r, className: f$1(t, "border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10", l && "border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5", !i && "sm:first:pl-1 sm:last:pr-1") });
}
function c({ className: t, children: r, ...i }) {
  let { bleed: l, dense: d, grid: s, striped: p } = useContext(h), { href: u, target: N, title: k } = useContext(w), [z, C] = useState(null);
  return jsxs("td", { ref: u ? C : void 0, ...i, className: f$1(t, "relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2))", !p && "border-b border-zinc-950/5 dark:border-white/5", s && "border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5", d ? "py-2.5" : "py-4", !l && "sm:first:pl-1 sm:last:pr-1"), children: [u && jsx(A$1, { "data-row-link": true, href: u, target: N, "aria-label": k, tabIndex: (z == null ? void 0 : z.previousElementSibling) === null ? 0 : -1, className: "absolute inset-0 focus:outline-hidden" }), r] });
}
function f({ title: t, value: r, change: i$1 }) {
  return jsxs("div", { children: [jsx(z, {}), jsx("div", { className: "mt-6 text-lg/6 font-medium sm:text-sm/6", children: t }), jsx("div", { className: "mt-3 text-3xl/8 font-semibold sm:text-2xl/8", children: r }), jsxs("div", { className: "mt-3 text-sm/6 sm:text-xs/6", children: [jsx(i, { color: i$1.startsWith("+") ? "lime" : "pink", children: i$1 }), " ", jsx("span", { className: "text-zinc-500", children: "from last sesh" })] })] });
}
function ae({ error: t }) {
  return jsx(ErrorComponent, { error: t });
}
const le = function() {
  const r = Ie.useLoaderData();
  return jsxs(Fragment, { children: [jsx("div", { className: "max-lg:hidden" }), jsxs("div", { className: "mt-4 flex flex-wrap items-end justify-between gap-4", children: [jsxs("div", { className: "flex flex-wrap items-center gap-6", children: [jsx("div", { className: "w-32 shrink-0", children: jsx("img", { className: "aspect-3/2 rounded-lg shadow-sm", src: "/map.png", alt: "" }) }), jsxs("div", { children: [jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-2", children: [jsxs(N, { children: ["Cimbing sesh at ", r.location.name] }), jsx(i, { className: "max-sm:hidden", color: r.end ? "zinc" : "lime", children: r.end ? "Inactive" : "Active" })] }), jsxs("div", { className: "mt-2 text-sm/6 text-zinc-500", children: [r.start, " ", jsx("span", { "aria-hidden": "true", children: "\xB7" }), " ", r.location.name] })] })] }), jsxs("div", { className: "flex gap-4", children: [jsx(fr, { outline: true, children: "Edit" }), jsx(fr, { children: "View" })] })] }), jsxs("div", { className: "mt-8 grid gap-8 sm:grid-cols-3", children: [jsx(f, { title: "Climbs Attempted", value: r.climbs.length, change: "+2.7%" }), jsx(f, { title: "Climbs sent", value: r.climbs.filter((i) => i.attempt != "fall").length, change: "+1.3%" }), jsx(f, { title: "Hardest grade", value: "5.11a", change: "-1.2%" })] }), jsx(B, { className: "mt-12", children: "Recent orders" }), jsxs(j, { className: "mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]", children: [jsx(A, { children: jsxs(b, { children: [jsx(o, { children: "Order number" }), jsx(o, { children: "Purchase date" }), jsx(o, { children: "Customer" }), jsx(o, { className: "text-right", children: "Amount" })] }) }), jsx(D, { children: r.climbs.map((i) => jsxs(b, { href: `/climbs/${i.climb_id}`, title: `Order #${i.climb_id}`, children: [jsx(c, { children: i.climb_id }), jsx(c, { className: "text-right", children: i.climb_type }), jsx(c, { children: i.grade }), jsx(c, { className: "text-zinc-500", children: i.attempt })] }, i.climb_id)) })] })] });
}, se = ({ params: { seshId: t } }) => w$1({ data: t });

export { ae as SeshErrorComponent, le as component, se as loader };
//# sourceMappingURL=_seshId-4aVW5buw.mjs.map
