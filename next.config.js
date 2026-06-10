/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/how-to-share-temporary-notes-online",
        destination: "/blog/share-temporary-notes-online",
        permanent: true,
      },
      {
        source: "/blog/best-uses-of-online-notepad-for-students",
        destination: "/blog/online-notepad-for-students",
        permanent: true,
      },
      {
        source: "/blog/how-to-share-code-snippets-online-fast",
        destination: "/blog/share-code-snippets-online",
        permanent: true,
      },
      {
        source: "/blog/online-notepad-for-quick-team-collaboration",
        destination: "/blog/online-notepad-for-teams",
        permanent: true,
      },
      {
        source: "/blog/when-to-use-a-temporary-notepad",
        destination: "/blog/when-to-use-temporary-notepad",
        permanent: true,
      },
      {
        source: "/blog/how-to-send-text-between-phone-and-laptop",
        destination: "/blog/send-text-phone-laptop",
        permanent: true,
      },
      {
        source: "/blog/quick-note-sharing-for-classes-and-study-groups",
        destination: "/blog/study-group-note-sharing",
        permanent: true,
      },
      {
        source: "/blog/simple-ways-to-organize-short-lived-notes",
        destination: "/blog/organize-short-lived-notes",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;