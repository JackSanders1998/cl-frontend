import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchSeshes } from "@/utils/seshes.js";
import { Badge } from "@/components/badge";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/dropdown";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { Divider } from "@/components/divider";
import { Heading } from "@/components/heading";
import { Input, InputGroup } from "@/components/input";
import { Button } from "@/components/button";
import { Select } from "@/components/select";

export const Route = createFileRoute("/_authed/seshes/")({
  loader: () => fetchSeshes(),
  component: SeshesComponent,
});

function SeshesComponent() {
  const seshes = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Events</Heading>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Search events&hellip;" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort_by">
                <option value="name">Sort by name</option>
                <option value="date">Sort by date</option>
                <option value="status">Sort by status</option>
              </Select>
            </div>
          </div>
        </div>
        <Button>Start sesh</Button>
      </div>
      <ul className="mt-10">
        {seshes.map((sesh, index) => (
          <>
            <li key={sesh.sesh_id}>
              <Divider soft={index > 0} />
              <div className="flex items-center justify-between">
                <div key={sesh.sesh_id} className="flex gap-6 py-6">
                  <div className="w-32 shrink-0">
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
                      <img
                        className="aspect-3/2 rounded-lg shadow-sm"
                        src="/map.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-base/6 font-semibold">
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
                        Climbing sesh at {sesh.location.name}
                      </Link>
                    </div>
                    <div className="text-xs/6 text-zinc-500">
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "full",
                        timeStyle: "medium",
                      }).format(new Date(sesh.start))}
                      <span aria-hidden="true">·</span> {sesh.location.name}
                    </div>
                    <div className="text-xs/6 text-zinc-600">
                      {sesh.climbs.length} climbs
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* If sesh.end doesnt exist, we've got an active sesh */}
                  <Badge
                    className="max-sm:hidden"
                    color={!!sesh.end ? "zinc" : "lime"}
                  >
                    {!!sesh.end ? "Inactive" : "Active"}
                  </Badge>
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisVerticalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
