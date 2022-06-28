import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { alias } = req.query;
  const result = await fetch(
    'https://ristek-link-workers.jonathanfilbert.workers.dev/retrieve',
    {
      method: 'POST',
      headers: {
        Authorization: process.env.SECRET,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ short_url: alias }),
    }
  ).then((res) => res.json());
  return res.redirect(result.data);
};
