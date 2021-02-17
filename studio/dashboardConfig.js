export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '602d0a1660b3e3d8271de7a3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3zhi7w48',
                  apiId: '5e7fe18b-fcaa-4227-a147-8103b240723f'
                },
                {
                  buildHookId: '602d0a176f7bb8ba5a04adfb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-71isvkbu',
                  apiId: 'ed16e4f5-37bc-46af-9164-ed170f682cb6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aymanshabaro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-71isvkbu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
