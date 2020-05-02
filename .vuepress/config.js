module.exports = {
    base: "/",
    title: "Helpdesk - Plugin for OctoberCMS",
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
              "/getting-started/permissions",
              "/getting-started/configuration"
          ]
        },
        {
          title: "Components",
          children: [
            "/components/ticketlist",
            "/components/ticketform",
            "/components/ticketdetails"
          ]
        }
      ],
      nav: [
        { text: "Guide", link: "/" },
        {
          text: "Marketplace",
          link: "https://octobercms.com/plugin/fytinnovations-helpdesk"
        },
        {
          text: "FYT innovations",
          link: "https://www.fytinnovations.com/"
        }
      ],
      docsRepo: "fytinnovations/oc-helpdesk",
      editLinks: true,
      editLinkText: "Help us improve this page!"
    }
  };
