import { K, u as ur, A, S as S$1 } from '../nitro/nitro.mjs';
import { jsx } from 'react/jsx-runtime';
import * as v from '@headlessui/react';
import f from 'clsx';
import { forwardRef } from 'react';

const c = ur("app_utils_seshes_ts--fetchSesh_createServerFn_handler", "/_server"), w = K({ method: "GET" }).validator((e) => e).handler(c), x = ur("app_utils_seshes_ts--fetchSeshes_createServerFn_handler", "/_server"), S = K({ method: "GET" }).handler(x), m = { red: "bg-red-500/15 text-red-700 group-data-hover:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:group-data-hover:bg-red-500/20", orange: "bg-orange-500/15 text-orange-700 group-data-hover:bg-orange-500/25 dark:bg-orange-500/10 dark:text-orange-400 dark:group-data-hover:bg-orange-500/20", amber: "bg-amber-400/20 text-amber-700 group-data-hover:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:group-data-hover:bg-amber-400/15", yellow: "bg-yellow-400/20 text-yellow-700 group-data-hover:bg-yellow-400/30 dark:bg-yellow-400/10 dark:text-yellow-300 dark:group-data-hover:bg-yellow-400/15", lime: "bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15", green: "bg-green-500/15 text-green-700 group-data-hover:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:group-data-hover:bg-green-500/20", emerald: "bg-emerald-500/15 text-emerald-700 group-data-hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-data-hover:bg-emerald-500/20", teal: "bg-teal-500/15 text-teal-700 group-data-hover:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-300 dark:group-data-hover:bg-teal-500/20", cyan: "bg-cyan-400/20 text-cyan-700 group-data-hover:bg-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-data-hover:bg-cyan-400/15", sky: "bg-sky-500/15 text-sky-700 group-data-hover:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300 dark:group-data-hover:bg-sky-500/20", blue: "bg-blue-500/15 text-blue-700 group-data-hover:bg-blue-500/25 dark:text-blue-400 dark:group-data-hover:bg-blue-500/25", indigo: "bg-indigo-500/15 text-indigo-700 group-data-hover:bg-indigo-500/25 dark:text-indigo-400 dark:group-data-hover:bg-indigo-500/20", violet: "bg-violet-500/15 text-violet-700 group-data-hover:bg-violet-500/25 dark:text-violet-400 dark:group-data-hover:bg-violet-500/20", purple: "bg-purple-500/15 text-purple-700 group-data-hover:bg-purple-500/25 dark:text-purple-400 dark:group-data-hover:bg-purple-500/20", fuchsia: "bg-fuchsia-400/15 text-fuchsia-700 group-data-hover:bg-fuchsia-400/25 dark:bg-fuchsia-400/10 dark:text-fuchsia-400 dark:group-data-hover:bg-fuchsia-400/20", pink: "bg-pink-400/15 text-pink-700 group-data-hover:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-hover:bg-pink-400/20", rose: "bg-rose-400/15 text-rose-700 group-data-hover:bg-rose-400/25 dark:bg-rose-400/10 dark:text-rose-400 dark:group-data-hover:bg-rose-400/20", zinc: "bg-zinc-600/10 text-zinc-700 group-data-hover:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-hover:bg-white/10" };
function i({ color: e = "zinc", className: r, ...t }) {
  return jsx("span", { ...t, className: f(r, "inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline", m[e]) });
}
forwardRef(function({ color: r = "zinc", className: t, children: o, ...g }, n) {
  let l = f(t, "group relative inline-flex rounded-md focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500");
  return "href" in g ? jsx(A, { ...g, className: l, ref: n, children: jsx(S$1, { children: jsx(i, { color: r, children: o }) }) }) : jsx(v.Button, { ...g, className: l, ref: n, children: jsx(S$1, { children: jsx(i, { color: r, children: o }) }) });
});
function z({ soft: e = false, className: r, ...t }) {
  return jsx("hr", { role: "presentation", ...t, className: f(r, "w-full border-t", e && "border-zinc-950/5 dark:border-white/5", !e && "border-zinc-950/10 dark:border-white/10") });
}
function N({ className: e, level: r = 1, ...t }) {
  let o = `h${r}`;
  return jsx(o, { ...t, className: f(e, "text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white") });
}
function B({ className: e, level: r = 2, ...t }) {
  let o = `h${r}`;
  return jsx(o, { ...t, className: f(e, "text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white") });
}

export { B, N, S, i, w, z };
//# sourceMappingURL=heading-B68eS6V4.mjs.map
