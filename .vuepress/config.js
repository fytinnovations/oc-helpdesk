module.exports = {
    base: "/",
    title: "Helpdesk",
    description: "An Issue Tracking System for OctoberCMS",
    head: [
      ['link', { rel: 'icon', href: '/assets/img/helpdesklogo.png' }]
    ],
    themeConfig: {
      logo: '/assets/img/helpdesk.png',
      sidebar: [
        {
          title: "Getting Started",
          children: [
              "/getting-started/installation",
              "/getting-started/configuration",
          ]
        },
        ['features', 'Upcoming Features !']
      ],
      nav: [
        { text: "Guide", link: "/" },
        {
          text: "Marketplace",
          link: "https://octobercms.com/plugin/fytinnovations-helpdesk"
        }
      ],
      docsRepo: "fytinnovations/oc-helpdesk",
      editLinks: true,
      editLinkText: "Help us improve this page!"
    }
  };
