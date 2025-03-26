import { Request, Response } from "express";

import {
  shortenUrlService,
  getOriginalUrlService,
} from "../services/urlService";

export const shortenUrl = async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    const shortUrl = await shortenUrlService(url);
    res.json({ shortUrl });
  } catch (error) {
    res.status(500).json({ error: "Error generating short URL" });
  }
};

export const redirectUrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const originalUrl = await getOriginalUrlService(id);

    if (originalUrl) res.redirect(originalUrl);
    else res.status(404).json({ error: "URL not found" });
  } catch (error) {
    res.status(500).json({ error: "Error redirecting URL" });
  }
};
