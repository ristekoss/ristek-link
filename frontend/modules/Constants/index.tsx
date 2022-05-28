const env = process.env.NODE_ENV;
let WORKERS_URL;
export let BASENAME_URL;
if (env == "development") {
	WORKERS_URL = "http://localhost:8787";
	BASENAME_URL = "http://localhost:3000/api";
} else if (env == "production") {
	WORKERS_URL = "https://ristek-link-workers.jonathanfilbert.workers.dev";
	BASENAME_URL = "https://ristek.link";
}
export const SHORTEN_URL = `${WORKERS_URL}/shorten`;
export const RETRIEVE_URL = `${WORKERS_URL}/retrieve`;
