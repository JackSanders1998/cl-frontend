import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/locations/")({
  component: LocationsIndexComponent,
});

function LocationsIndexComponent() {
  return <div>Select a location.</div>;
}
