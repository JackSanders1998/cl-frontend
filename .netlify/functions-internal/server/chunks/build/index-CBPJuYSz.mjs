import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { S as S$1, N, z, i } from './heading-B68eS6V4.mjs';
import { R as Re, a as fr, m as mr, p as pr, v as vr, D } from '../nitro/nitro.mjs';
import { MagnifyingGlassIcon, EllipsisVerticalIcon } from '@heroicons/react/16/solid';
import * as v from '@headlessui/react';
import f from 'clsx';
import { forwardRef } from 'react';
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
import '@heroicons/react/20/solid';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

function y({ children: o }) {
  return jsx("span", { "data-slot": "control", className: f("relative isolate block", "has-[[data-slot=icon]:first-child]:[&_input]:pl-10 has-[[data-slot=icon]:last-child]:[&_input]:pr-10 sm:has-[[data-slot=icon]:first-child]:[&_input]:pl-8 sm:has-[[data-slot=icon]:last-child]:[&_input]:pr-8", "*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:top-2.5 sm:*:data-[slot=icon]:size-4", "[&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5 [&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5", "*:data-[slot=icon]:text-zinc-500 dark:*:data-[slot=icon]:text-zinc-400"), children: o });
}
const I = ["date", "datetime-local", "month", "time", "week"], L = forwardRef(function({ className: i, ...a }, d) {
  return jsx("span", { "data-slot": "control", className: f([i, "relative block w-full", "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm", "dark:before:hidden", "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500", "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none", "has-data-invalid:before:shadow-red-500/10"]), children: jsx(v.Input, { ref: d, ...a, className: f([a.type && I.includes(a.type) && ["[&::-webkit-datetime-edit-fields-wrapper]:p-0", "[&::-webkit-date-and-time-value]:min-h-[1.5em]", "[&::-webkit-datetime-edit]:inline-flex", "[&::-webkit-datetime-edit]:p-0", "[&::-webkit-datetime-edit-year-field]:p-0", "[&::-webkit-datetime-edit-month-field]:p-0", "[&::-webkit-datetime-edit-day-field]:p-0", "[&::-webkit-datetime-edit-hour-field]:p-0", "[&::-webkit-datetime-edit-minute-field]:p-0", "[&::-webkit-datetime-edit-second-field]:p-0", "[&::-webkit-datetime-edit-millisecond-field]:p-0", "[&::-webkit-datetime-edit-meridiem-field]:p-0"], "relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]", "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white", "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20", "bg-transparent dark:bg-white/5", "focus:outline-hidden", "data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500", "data-disabled:border-zinc-950/20 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%] dark:data-hover:data-disabled:border-white/15", "dark:[color-scheme:dark]"]) }) });
}), S = forwardRef(function({ className: i, multiple: a, ...d }, m) {
  return jsxs("span", { "data-slot": "control", className: f([i, "group relative block w-full", "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm", "dark:before:hidden", "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset has-data-focus:after:ring-2 has-data-focus:after:ring-blue-500", "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none"]), children: [jsx(v.Select, { ref: m, multiple: a, ...d, className: f(["relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]", a ? "px-[calc(--spacing(3.5)-1px)] sm:px-[calc(--spacing(3)-1px)]" : "pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)]", "[&_optgroup]:font-semibold", "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white", "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20", "bg-transparent dark:bg-white/5 dark:*:bg-zinc-800", "focus:outline-hidden", "data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-600 dark:data-invalid:data-hover:border-red-600", "data-disabled:border-zinc-950/20 data-disabled:opacity-100 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%] dark:data-hover:data-disabled:border-white/15"]) }), !a && jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: jsxs("svg", { className: "size-5 stroke-zinc-500 group-has-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]", viewBox: "0 0 16 16", "aria-hidden": "true", fill: "none", children: [jsx("path", { d: "M5.75 10.75L8 13L10.25 10.75", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M10.25 5.25L8 3L5.75 5.25", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })] }) })] });
}), O = function() {
  const i$1 = Re.useLoaderData();
  return jsxs(Fragment, { children: [jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [jsxs("div", { className: "max-sm:w-full sm:flex-1", children: [jsx(N, { children: "Events" }), jsxs("div", { className: "mt-4 flex max-w-xl gap-4", children: [jsx("div", { className: "flex-1", children: jsxs(y, { children: [jsx(MagnifyingGlassIcon, {}), jsx(L, { name: "search", placeholder: "Search events\u2026" })] }) }), jsx("div", { children: jsxs(S, { name: "sort_by", children: [jsx("option", { value: "name", children: "Sort by name" }), jsx("option", { value: "date", children: "Sort by date" }), jsx("option", { value: "status", children: "Sort by status" })] }) })] })] }), jsx(fr, { children: "Create event" })] }), jsx("ul", { className: "mt-10", children: i$1.map((a, d) => jsx(Fragment, { children: jsxs("li", { children: [jsx(z, { soft: d > 0 }), jsxs("div", { className: "flex items-center justify-between", children: [jsxs("div", { className: "flex gap-6 py-6", children: [jsx("div", { className: "w-32 shrink-0", children: jsx(Link, { to: "/seshes/$seshId", params: { seshId: a.sesh_id }, className: "block py-1 text-blue-800 hover:text-blue-600", activeProps: { className: "text-black font-bold" }, children: jsx("img", { className: "aspect-3/2 rounded-lg shadow-sm", src: "/map.png", alt: "" }) }) }), jsxs("div", { className: "space-y-1.5", children: [jsx("div", { className: "text-base/6 font-semibold", children: jsxs(Link, { to: "/locations/$locationId", params: { locationId: a.location.location_id }, className: "block py-1 text-blue-800 hover:text-blue-600", activeProps: { className: "text-black font-bold" }, children: ["Climbing sesh at ", a.location.name] }) }), jsxs("div", { className: "text-xs/6 text-zinc-500", children: [a.start, " ", jsx("span", { "aria-hidden": "true", children: "\xB7" }), " ", a.location.name] }), jsxs("div", { className: "text-xs/6 text-zinc-600", children: [a.climbs.length, " climbs"] })] })] }, a.sesh_id), jsxs("div", { className: "flex items-center gap-4", children: [jsx(i, { className: "max-sm:hidden", color: a.end ? "zinc" : "lime", children: a.end ? "Inactive" : "Active" }), jsxs(mr, { children: [jsx(pr, { plain: true, "aria-label": "More options", children: jsx(EllipsisVerticalIcon, {}) }), jsxs(vr, { anchor: "bottom end", children: [jsx(D, { children: "Edit" }), jsx(D, { children: "Delete" })] })] })] })] })] }, a.sesh_id) })) })] });
}, Q = () => S$1();

export { O as component, Q as loader };
//# sourceMappingURL=index-CBPJuYSz.mjs.map
