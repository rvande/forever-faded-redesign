export type CloudinaryImage = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
};

export async function getGalleryImages(): Promise<CloudinaryImage[]> {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const key = process.env.CLOUDINARY_API_KEY;
  const secret = process.env.CLOUDINARY_API_SECRET;

  const credentials = Buffer.from(`${key}:${secret}`).toString("base64");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud}/resources/search`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression: 'folder="Image Gallery"',
        sort_by: [{ created_at: "desc" }],
        max_results: 200,
      }),
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error(`Cloudinary API error: ${res.status}`);
  }

  const data = await res.json();
  const resources = data.resources as CloudinaryImage[];

  // Fisher-Yates shuffle
  for (let i = resources.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resources[i], resources[j]] = [resources[j], resources[i]];
  }

  return resources;
}
