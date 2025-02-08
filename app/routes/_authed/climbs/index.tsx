import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { fetchClimbs } from '@/utils/climbs.js'

export const Route = createFileRoute('/_authed/climbs/')({
  loader: () => fetchClimbs(),
  component: ClimbsComponent,
})

function ClimbsComponent() {
  const climbs = Route.useLoaderData()

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {climbs.map((climb) => {
          return (
            <li key={climb.climb_id} className="whitespace-nowrap">
              <Link
                to="/climbs/$climbId"
                params={{
                  climbId: climb.climb_id,
                }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{
                  className: 'text-black font-bold',
                }}
              >
                <div>{climb.climb_type} {climb.grade}</div>
              </Link>
            </li>
          )
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
