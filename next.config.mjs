import { paraglide } from "@inlang/paraglide-next/plugin";
import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const millionConfig = million.next(
  {
    auto: true,
    rsc: true,
  },
  nextConfig
);

export default paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./src/paraglide",
  },
  ...millionConfig,
});
