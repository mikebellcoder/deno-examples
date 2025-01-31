import { FreshContext } from "$fresh/server.ts";

// handles POST requests from contact forms
export const handler = async (_req: Request, _ctx: FreshContext): Promise<Response> => {
    const formData = await _req.formData();
    console.log("contact form submitted with:", formData);
    const resp = new Response(JSON.stringify({status: 200}))
    resp.headers.set("Content-Type", "application/json");

    return resp;
};