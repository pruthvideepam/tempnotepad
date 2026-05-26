const ADJECTIVES = [
  "blue",
  "quiet",
  "bright",
  "swift",
  "red",
  "cool",
  "soft",
  "wild",
  "silver",
  "golden",
];

const NOUNS = [
  "fox",
  "river",
  "cloud",
  "stone",
  "paper",
  "tree",
  "bird",
  "field",
  "wave",
  "note",
];

export function generateRandomSlug() {
  const adjective =
    ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const number = Math.floor(Math.random() * 900 + 100);

  return `${adjective}-${noun}-${number}`;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}