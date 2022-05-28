import { corsHeaders } from './response'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

const handleRequest = async event => {
  const { request } = event
  if (request.method === 'OPTIONS') {
    return new Response('ok', {
      headers: { 'Access-Control-Allow-Origin': '*', ...corsHeaders },
      status: 200,
    })
  }

  try {
    // if auth is not on headers, reject
    const auth = request.headers.get('Authorization')
    if (auth !== RISTEK_LINK_SECRET) {
      return new Response('Unauthorized', {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // get params from event and requests
    const method = event.request.method
    const url = new URL(event.request.url)
    const path = url.pathname

    // handle shorten url endpoint
    if (method === 'POST' && path === '/shorten') {
      const { short_url, long_url } = await request.json()
      // check if the short url exists
      const existing_short_url = await LINKS.get(short_url)
      if (!!existing_short_url) {
        return new Response(
          JSON.stringify({
            ok: false,
            error: 'AlreadyExists'
          }),
          { status: 400, headers: corsHeaders },
        )
      }
      const _ = await LINKS.put(short_url, long_url)
      return new Response(JSON.stringify({ data: short_url, ok: true }), {
        status: 200,
        headers: corsHeaders,
      })
    }

    if (method === 'POST' && path === '/retrieve') {
      const { short_url } = await request.json()
      const long_url = await LINKS.get(short_url)
      if (!!long_url) {
        return new Response(JSON.stringify({ data: long_url, ok: true }), {
          status: 200,
          headers: corsHeaders,
        })
      }
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'NotFound'
        }),
        {
          status: 404,
          headers: corsHeaders,
        },
      )
    }

    if (method === 'GET') {
      return new Response('all work and no play makes jack a dull boy', {
        status: 200,
        headers: corsHeaders,
      })
    }
  } catch (ex) {
    console.warn('Error', ex)
  }
}
