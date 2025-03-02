import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchLocations } from "@/utils/locations.js";

export const Route = createFileRoute("/_authed/locations/")({
  loader: () => fetchLocations({ headers: { context: "test" } }),
  component: LocationsComponent,
});

function LocationsComponent() {
  const locations = Route.useLoaderData();

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {locations.map((location) => {
          return (
            <li key={location.location_id} className="whitespace-nowrap">
              <Link
                to="/locations/$locationId"
                params={{
                  locationId: location.location_id,
                }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{
                  className: "text-black font-bold",
                }}
              >
                <div>{location.name}</div>
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
