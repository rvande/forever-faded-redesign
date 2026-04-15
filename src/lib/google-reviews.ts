export type Review = {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

export async function getFiveStarReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = "ChIJa5PIEy2mBYgRyUJNl9KGx0c";

  if (!apiKey) {
    console.warn("GOOGLE_API_KEY is not set — skipping reviews fetch");
    return [];
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&reviews_sort=newest`,
      { next: { revalidate: 3600 } } // re-fetch at most once per hour
    );

    if (!res.ok) {
      console.error("Places API error:", res.status);
      return [];
    }

    const data = await res.json();
    const reviews: Review[] = data.result?.reviews ?? [];
    return reviews.filter((r) => r.rating === 5 && r.text?.trim().length > 0);
  } catch (err) {
    console.error("Failed to fetch Google reviews:", err);
    return [];
  }
}
