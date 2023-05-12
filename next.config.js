/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [360,768,1024],
    deviceSizes: [360,768,1024],
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '.' ,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    appMeta: {
      canonical: 'https://brandedcontent.smh.com.au/australiansuper/prepare-future-today', // https://brandedcontent.[masthead].com.au/xxx/xxx"
      brand: 'Australian Super', // e.g Black Hawk
      title: 'Prepare for your future, today', // e.g Being a good pet parent starts at mealtime
      description: 'Taking control of your super is the first step to financial freedom in retirement.',
      siteName: 'The Sydney Morning Herald', // The Sydney Morning Herald, Good Food
      icon: 'smh', // smh, goodfood, nine, afr, traveller, brisbanetimes, honey
      themeColour: '#260046', // hex
      ogImage: 'https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/05/11256_AusSuper-SuperTips_Social.png',
      date: '12-05-23', // e.g 03-12-23
      year: '2023' // e.g 2023
    },
    jobCode: '11256-australiansuper', // used for nine ga scripts
    guidelines: false, // shows or hides layout guideline bars
    activateMasthead: true, // shows or hides masthead
    mastheadOverride: false, // overrides masthead that's pulling from hostname: e.g honey,style,travel,kitchen,you,parenting,coach,pets,celebrity
  }
}

module.exports = nextConfig