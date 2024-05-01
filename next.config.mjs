import { paraglide } from "@inlang/paraglide-next/plugin";
import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const millionConfig = {
  auto: true,
  rsc: true,
};

const paraglideConfig = paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./src/paraglide",
  },
  ...nextConfig,
});

export default million.next(millionConfig, paraglideConfig);
