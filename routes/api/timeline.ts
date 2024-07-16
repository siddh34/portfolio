import { FreshContext } from "$fresh/server.ts";
import data from "../../data/data.json" with {type: "json"};

export const handler = (_req: Request, _ctx: FreshContext): Response => {
    return new Response(JSON.stringify({expData: data.experience, edData: data.education}));
};