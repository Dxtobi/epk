import adapter from '@sveltejs/adapter-auto';

const config = { kit: { 
    adapter: adapter(),
    alias: {
      '$lib': './src/lib',
      '$components': './src/components'
    }
 } };

export default config;
