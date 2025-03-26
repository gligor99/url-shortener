import { randomBytes } from "crypto";
import { URL } from "../models/urlModel";

export const shortenUrlService = async (url: string): Promise<string> => {
  const id = randomBytes(4).toString("hex");
  await URL.create({ id, original_url: url });
  return `${process.env.BASE_URL || "http://localhost:3000"}/${id}`;
};

export const getOriginalUrlService = async (
  id: string
): Promise<string | null> => {
  const entry = await URL.findByPk(id);
  return entry ? entry.getDataValue("original_url") : null;
};
