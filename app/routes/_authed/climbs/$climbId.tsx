import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { NotFound } from "@/components/NotFound.js";
import { fetchClimb } from "@/utils/climbs";

export const Route = createFileRoute("/_authed/climbs/$climbId")({
  loader: ({ params: { climbId } }) => fetchClimb({ data: climbId }),
  errorComponent: ClimbErrorComponent,
  component: ClimbComponent,
  notFoundComponent: () => {
    return <NotFound>Climb not found</NotFound>;
  },
});

export function ClimbErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function ClimbComponent() {
  const climb = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">
        {climb.climb_type} {climb.grade}
      </h4>
      <div className="text-sm">{climb.attempt}</div>
    </div>
  );
}
