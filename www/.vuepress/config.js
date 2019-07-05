module.exports = {
  themeConfig: {
    search: false,
    docsRepo: 'MoKee/www',
    docsDir: 'www',
    editLinks: true,
    sidebarDepth: 2,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        lastUpdated: '上次更新',
        sidebar: {
          '/guide/': [
            '',
            'getting_started',
            'feature',
          ]
        },
        nav: [
          { text: '主页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: '条款', link: '/legal/' },
          { text: '下载', link: 'https://download.mokeedev.com' },
          { text: '论坛', link: 'https://bbs.mokeedev.com' },
        ],
        editLinkText: '在 GitHub 上编辑此页'
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        lastUpdated: 'Last Updated',
        sidebar: {
          '/en/guide/': [
            '',
            'getting_started',
            'feature',
          ]
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Terms', link: '/en/legal/' },
          { text: 'Download', link: 'https://download.mokeedev.com' },
          { text: 'Forum', link: 'https://bbs.mokeedev.com' },
        ],
        editLinkText: 'Edit this page on GitHub'
      },
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '魔趣 ROM',
      description: '可能是中国最好的安卓开源系统'
    },
    '/en/': {
      lang: 'en-US',
      title: 'MoKee ROM',
      description: 'Android Community Operating System'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['link', { rel: 'canonical', href: 'https://www.mokeedev.com' }],
    ['meta', { name: 'baidu-site-verification', content: 'b7GYJrZJ0Y' }]
  ],
  ga: 'UA-37324061-13'
}