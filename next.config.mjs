// next.config.mjs

export default {
  async rewrites() {
    return [
      {
        source: '/custom',
        destination: '/app/page',
      },
    ];
  },
};
