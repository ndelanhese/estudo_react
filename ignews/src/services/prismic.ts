import * as prismic from "@prismicio/client";

export function getPrismicCLient(req?: unknown) {
  const prismicToken = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });
  return prismicToken;
}
