export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5eb6d3e655780ee70d01acf1',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-q71ym39p',
                  apiId: 'fb5f7113-a15a-4eec-8bbe-5fe8f39f30fc'
                },
                {
                  buildHookId: '5eb6d3e689c051aabe347124',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-abzdht14',
                  apiId: 'f952e34a-6507-4a5f-b8bf-d129cba2d2cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AdrianRC/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-abzdht14.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
