import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/seshes/')({
    component: SeshesIndexComponent,
})

function SeshesIndexComponent() {
    return <div>Select a sesh.</div>
}
