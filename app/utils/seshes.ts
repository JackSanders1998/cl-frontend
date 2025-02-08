import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import axios from "redaxios";
import { LocationType } from "./locations";
import { CL_BACKEND_URL } from "./constants";
import { ClimbType } from "./climbs";
import { extractToken } from "./middleware/authMiddleware";

export type SeshType = {
  sesh_id: string;
  user_id: string;
  notes: string;
  start: string;
  end: string;
  created_at: string;
  updated_at: string;
  location: Omit<LocationType, "user_id">;
  climbs: Omit<ClimbType, "sesh_id">[];
};

export const fetchSesh = createServerFn({ method: "GET" })
  .validator((seshId: string) => seshId)
  .handler(async ({ data }) => {
    console.info(`Fetching sesh with id ${data}...`);
    return axios
      .get<SeshType>(`${CL_BACKEND_URL}seshes/${data}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${extractToken()}`,
        },
      })
      .then((r) => r.data)
      .catch((err) => {
        console.error(err);
        if (err.status === 404) {
          throw notFound();
        }
        throw err;
      });
  });

export const fetchSeshes = createServerFn({ method: "GET" }).handler(
  async () => {
    console.info("Fetching seshes...");
    await new Promise((r) => setTimeout(r, 1000));
    return await axios
      .get<Array<SeshType>>(`${CL_BACKEND_URL}seshes`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${extractToken()}`,
        },
      })
      .then((r) => r.data.slice(0, 10));
  },
);
