// next.config.js
module.exports = {
    // Add environment variables that you want to use in your application
    env: {
        DATABASE_URL: process.env.DATABASE_URL || 'mysql://dqfn1csnd6adwwxqnyun:pscale_pw_vYTnxJA2siGj7wuVwiYDcSQBZlrYZH50p4OLutt8Cjw@aws.connect.psdb.cloud/camping?sslaccept=strict',
    },
  
    // Custom webpack configuration
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Add custom webpack configurations here
  
      return config;
    },
  
    // Redirects for clean URLs
    async redirects() {
      return [
        {
          source: '/old-route',
          destination: '/new-route',
          permanent: true, // 301 redirect
        },
      ];
    },
  
    // Add any other Next.js configuration options as needed
  };
  
