export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}


export const JSONResponse = (data) => {
  return new Response(JSON.stringify({data: data}),{
    headers: { 'content-type': 'application/json', ...corsHeaders },
})
}

export const RedirectResponse = (url) => {
  return Response.redirect(url,301, {headers: {...corsHeaders}})
}

export const UnauthorizedResponse = () => {
  return new Response("Unauthorized", {status:401, headers: {...corsHeaders}})
}