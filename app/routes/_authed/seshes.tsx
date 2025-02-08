import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchSeshes } from "@/utils/seshes.js";

export const Route = createFileRoute("/_authed/seshes")({
  loader: () => fetchSeshes(),
  component: SeshesComponent,
});

function SeshesComponent() {
  const seshes = Route.useLoaderData();

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {seshes.map((sesh) => {
          return (
            <li key={sesh.sesh_id} className="whitespace-nowrap">
              <Link
                to="/locations/$locationId"
                params={{
                  locationId: sesh.location.location_id,
                }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{
                  className: "text-black font-bold",
                }}
              >
                <div>{sesh.location.location_id.substring(0, 20)}</div>
              </Link>
              <Link
                to="/seshes/$seshId"
                params={{
                  seshId: sesh.sesh_id,
                }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{
                  className: "text-black font-bold",
                }}
              >
                <div>{sesh.start.substring(0, 20)}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
