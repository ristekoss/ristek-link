# RISTEK.Link

No config, no log-ins, open-source, customizable url shortener. Paste-shorten-copy, that's it.

## Installation (both front-end and back-end)

1. Use `yarn` or `npm` to install the dependency

```bash
yarn \\ npm install
```

2. Start the development server

```bash
yarn dev \\ npm run dev
```

3. Open `http://localhost:3000` on your browser.

## Architecture

The architecture of this product is consisted of 2 parts:

`frontend` is the folder containing the front end part of the app. It's a React app that has a serverless function that communicates with the server to do the actual storage and retrieval process of the shorten url. It is then

```markdown
Stacks

- Next.JS (main React app framework)
- Typescript (language used)
- Tailwind CSS (utility css classes used to style and theme the app)
- Chakra-UI (UI components used at various places, including toasts and some entrance animation)
```

`server` is the folder containing the serverless function running on [Cloudflare Workers](https://workers.cloudflare.com/) to execute the shortening and retrieval process, [Cloudflare K/V](https://blog.cloudflare.com/workers-kv-is-ga/) is then used as a distributed edge database to store every single urls.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
