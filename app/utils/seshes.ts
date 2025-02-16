import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import axios from "redaxios";
import { LocationType } from "./locations";
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
      .get<SeshType>(`${process.env.CL_BACKEND_URL}seshes/${data}`, {
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
      .get<Array<SeshType>>(`${process.env.CL_BACKEND_URL}seshes`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${extractToken()}`,
        },
      })
      .then((r) => r.data);
  },
);

export const startSesh = createServerFn({ method: "POST" }).handler(
  async ({ data }) => {
    console.info("Starting sesh...");
    await new Promise((r) => setTimeout(r, 1000));
    return axios
      .get<SeshType>(`${process.env.CL_BACKEND_URL}seshes/${data}`, {
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
  },
);
