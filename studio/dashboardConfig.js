export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6029c15b1a7fec45c358e0b4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sve3vdoi',
                  apiId: '74a28c82-3617-48db-bd89-9a59dac9eef3'
                },
                {
                  buildHookId: '6029c15c37f509378548ea5e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vqkyrxsr',
                  apiId: '2a98b26a-38a5-4313-88a2-526309a26fc9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PatrickSison/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vqkyrxsr.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
