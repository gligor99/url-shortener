import { Router } from "express";
import {
  shortenUrlService,
  getOriginalUrlService,
} from "../services/urlService";
import { AppError } from "../utils/errorHandler";

const router = Router();

router.post("/shorten", async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) {
      throw new AppError("URL is required", 400);
    }
    const shortUrl = await shortenUrlService(url);
    res.json({ shortUrl });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const originalUrl = await getOriginalUrlService(req.params.id);
    if (!originalUrl) {
      throw new AppError("URL not found", 404);
    }
    res.redirect(originalUrl);
  } catch (error) {
    next(error);
  }
});

export default router;
