import { ErrorComponent, createFileRoute } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { NotFound } from '~/components/NotFound.js'
import { fetchSesh } from '~/utils/seshes'

export const Route = createFileRoute('/_authed/seshes/$seshId')({
    loader: ({ params: { seshId } }) => fetchSesh({ data: seshId }),
    errorComponent: SeshErrorComponent,
    component: SeshComponent,
    notFoundComponent: () => {
        return <NotFound>Sesh not found</NotFound>
    },
})

export function SeshErrorComponent({ error }: ErrorComponentProps) {
    return <ErrorComponent error={error} />
}

function SeshComponent() {
    const sesh = Route.useLoaderData()

    return (
        <div className="space-y-2">
            <h4 className="text-xl font-bold underline">{sesh.start}</h4>
            <div className="text-sm">{sesh.notes}</div>
        </div>
    )
}
