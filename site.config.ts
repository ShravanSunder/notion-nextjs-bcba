import { siteConfig } from './lib/site-config'

//this is a test push

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '5a122d0266f34141b099032041c15df2',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'BCBA Wiki',
  domain: 'bcba.vercel.app',
  author: 'Alevtina Makarkina, BCBA',

  // open graph metadata (optional)
  description: 'BCBA Wiki: A trusted source for BCBA information',

  // social usernames (optional)
  twitter: 'bcba_wiki',
  // github: 'transitive-bullshit',
  linkedin: 'alevtina-makarkina',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Family Support',
      pageId: '30b74b8852684022abd4d2c5630a595a'
    },
    {
      title: 'Consultation',
      pageId: '3e7b1ce5e704483388718b9f72f3b4c1'
    },
    {
      title: 'Resources',
      pageId: 'f82065d9208e4fbf9d6c993c403a6e2e'
    },
    {
      title: 'About',
      pageId: '03228c77ade64f20b44e3aee30a8bf5b'
    }
  ]
})
