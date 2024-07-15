import { FreshContext } from "$fresh/server.ts";
import data from "../../data/data.json" with {type: "json"};

export const handler = (_req: Request, _ctx: FreshContext): Response => {
    console.log("Skills API called");
    return new Response(JSON.stringify({skills: data.skills, skillsToIcon: data.skillsIcon}));
}
