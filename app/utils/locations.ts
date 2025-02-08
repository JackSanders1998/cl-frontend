import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import axios from 'redaxios'

export type LocationType = {
  location_id: string,
  user_id: string,
  name: string,
  environment: string,
  created_at: string,
  updated_at: string
}

export const fetchLocation = createServerFn({ method: 'GET' })
  .validator((locationId: string) => locationId)
  .handler(async ({ data }) => {
    console.info(`Fetching location with id ${data}...`)
    const location = await axios
      .get<LocationType>(`http://127.0.0.1:8000/locations/${data}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.MY_TOKEN}`,
          },
      })
      .then((r) => r.data)
      .catch((err) => {
        console.error(err)
        if (err.status === 404) {
          throw notFound()
        }
        throw err
      })

    return location
  })


export const fetchLocations = createServerFn({ method: 'GET' }).handler(
  async () => {
    console.info('Fetching locations...')
    await new Promise((r) => setTimeout(r, 1000))
    return axios
      .get<Array<LocationType>>('http://127.0.0.1:8000/locations', {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.MY_TOKEN}`,
          },
      })
      .then((r) => r.data.slice(0, 10));
  },
)
