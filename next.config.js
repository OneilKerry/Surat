/** @type {import('next').NextConfig} */

const repoName = "Surat"; // ⬅️ GANTI sesuai nama repo kamu

const nextConfig = {
  output: "export",               // WAJIB untuk GitHub Pages
  basePath: `/${repoName}`,       // agar routing tidak 404
  assetPrefix: `/${repoName}/`,   // agar asset (JS, CSS) terbaca
  trailingSlash: true,            // GitHub Pages butuh ini
  images: {
    unoptimized: true,            // wajib untuk static export
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
