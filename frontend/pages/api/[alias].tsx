import type { NextApiRequest, NextApiResponse } from "next";
import { RETRIEVE_URL } from "../../modules/Constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { alias } = req.query;
  const result = await fetch(
    RETRIEVE_URL,
    {
      method: "POST",
      headers: {
        Authorization: process.env.SECRET,
        "content-type": "application/json",
      },
      body: JSON.stringify({ short_url: alias }),
    }
  ).then((res) => res.json());
  // return res.redirect(result.data);
  const { ok, data, error } = result
  if (ok) {
    return res.redirect(data);
  } else {
    if (error === "NotFound") {
      return res.redirect("/" + "?notfound=" + alias)
    }
  }
};
