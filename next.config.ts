import type { NextConfig } from "next";
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['tsx', 'mdx']
};

const withMDX = createMDX({
  /* mdx config */
})

export default withMDX(nextConfig);
