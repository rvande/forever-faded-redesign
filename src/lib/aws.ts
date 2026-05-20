/** Build a CloudFront URL for a given S3 key. */
export const cf = (key: string) =>
  `${process.env.NEXT_PUBLIC_CF_DOMAIN}/${key}`;
