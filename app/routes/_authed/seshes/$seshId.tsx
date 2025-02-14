import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { NotFound } from "@/components/NotFound.js";
import { fetchSesh } from "@/utils/seshes";
import { Heading, Subheading } from "@/components/heading";
import { Badge } from "@/components/badge";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/table";
import { Button } from "@/components/button";
import { Stat } from "@/components/stat";

export const Route = createFileRoute("/_authed/seshes/$seshId")({
  loader: ({ params: { seshId } }) => fetchSesh({ data: seshId }),
  errorComponent: SeshErrorComponent,
  component: SeshComponent,
  notFoundComponent: () => {
    return <NotFound>Sesh not found</NotFound>;
  },
});

export function SeshErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function SeshComponent() {
  const sesh = Route.useLoaderData();

  return (
    <>
      <div className="max-lg:hidden">
        {/* <Link href="/events" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Events
        </Link> */}
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <div className="w-32 shrink-0">
            <img
              className="aspect-3/2 rounded-lg shadow-sm"
              src="/map.png"
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Heading>Cimbing sesh at {sesh.location.name}</Heading>
              <Badge
                className="max-sm:hidden"
                color={!!sesh.end ? "zinc" : "lime"}
              >
                {!!sesh.end ? "Inactive" : "Active"}
              </Badge>
            </div>
            <div className="mt-2 text-sm/6 text-zinc-500">
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
                timeStyle: "medium",
              }).format(new Date(sesh.start))}
              <span aria-hidden="true">·</span> {sesh.location.name}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button outline>Edit</Button>
          <Button>View</Button>
        </div>
      </div>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <Stat
          title="Climbs Attempted"
          value={sesh.climbs.length}
          change={"+2.7%"}
        />
        <Stat
          title="Climbs sent"
          value={sesh.climbs.filter((climb) => climb.attempt != "fall").length}
          change={"+1.3%"}
        />
        <Stat title="Hardest grade" value={"5.11a"} change={"-1.2%"} />
      </div>
      <Subheading className="mt-12">Climbs</Subheading>
      <Table className="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Type</TableHeader>
            <TableHeader>Grade</TableHeader>
            <TableHeader>Style</TableHeader>
            <TableHeader>Attempt</TableHeader>
            <TableHeader className="text-right">Notes</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {sesh.climbs.map((climb) => (
            <TableRow
              key={climb.climb_id}
              href={`/climbs/${climb.climb_id}`}
              title={`Order #${climb.climb_id}`}
            >
              <TableCell>{climb.climb_type}</TableCell>
              <TableCell className="text-zinc-500">{climb.grade}</TableCell>
              <TableCell>{climb.attempt}</TableCell>
              <TableCell>{climb.style}</TableCell>
              <TableCell>{climb.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
