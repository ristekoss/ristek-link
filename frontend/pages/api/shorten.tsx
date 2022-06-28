import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { alias, url } = req.body;
    const result = await fetch(
      'https://ristek-link-workers.jonathanfilbert.workers.dev/shorten',
      {
        method: 'POST',
        headers: {
          Authorization: process.env.SECRET,
          'content-type': 'application/json',
        },
        body: JSON.stringify({ short_url: alias, long_url: url }),
      }
    ).then((res) => res.json());
    return res.status(200).json(result);
  }
};
