import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import axios from "redaxios";
import { CL_BACKEND_URL } from "./constants";

export type ClimbType = {
  climb_id: string;
  sesh_id: string;
  climb_type: string;
  style: string;
  scale: string;
  grade: string;
  attempt: string;
  pointer: string;
  notes: string;
  created_at: string;
  updated_at: string;
};

export const fetchClimb = createServerFn({ method: "GET" })
  .validator((climbId: string) => climbId)
  .handler(async ({ data }) => {
    console.info(`Fetching climb with id ${data}...`);
    const climb = await axios
      .get<ClimbType>(`${CL_BACKEND_URL}climbs/${data}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MY_TOKEN}`,
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

    return climb;
  });

export const fetchClimbs = createServerFn({ method: "GET" }).handler(
  async () => {
    console.info("Fetching climbs...");
    await new Promise((r) => setTimeout(r, 1000));
    return axios
      .get<Array<ClimbType>>(`${CL_BACKEND_URL}climbs`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MY_TOKEN}`,
        },
      })
      .then((r) => r.data.slice(0, 10));
  },
);
