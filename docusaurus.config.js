/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RIMSES',
  tagline: 'Master In Maintenace',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'inetum', // Usually your GitHub org/user name.
  projectName: 'Rimses Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: '../src/img/R_rimses_logo_small.png',
      },
      items: [
        {
          type: 'doc',
          docId:'rimses_single_step1',
          position: 'left',
          label: 'Rimses',
        },
        {
          type: 'doc',
          docId: 'fimac_standalone_step1',
          position: 'left',
          label: 'Fimacs',
        },
        {
          type: 'doc',
          docId: 'eRimses_step1',
          position: 'left',
          label: 'eRimses',
        },
        {
          type: 'doc',
          docId: 'rimsesAnalyzer_single',
          position: 'left',
          label: 'Rimses Analyzer',
        },
        // {
        //   href: 'https://github.com/z0rky/rimsesMarkdown',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Inetum.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/z0rky/rimsesMarkdown',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
