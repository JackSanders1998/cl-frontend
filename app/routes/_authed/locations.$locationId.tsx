import { ErrorComponent, createFileRoute } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { NotFound } from '~/components/NotFound.js'
import { fetchLocation } from '~/utils/locations'

export const Route = createFileRoute('/_authed/locations/$locationId')({
  loader: ({ params: { locationId } }) => fetchLocation({ data: locationId }),
  errorComponent: LocationErrorComponent,
  component: LocationComponent,
  notFoundComponent: () => {
    return <NotFound>Location not found</NotFound>
  },
})

export function LocationErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />
}

function LocationComponent() {
  const location = Route.useLoaderData()

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{location.name}</h4>
      <div className="text-sm">{location.environment}</div>
    </div>
  )
}
