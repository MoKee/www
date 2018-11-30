module.exports = {
  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated',
    repo: 'MoKee/www',
    docsDir: 'www',
    editLinks: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Download', link: 'https://download.mokeedev.com' },
          { text: 'Forum', link: 'https://bbs.mokeedev.com' },
        ],
        editLinkText: 'Edit this page on GitHub'
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '教程', link: '/zh/guide/' },
          { text: '下载', link: 'https://download.mokeedev.com' },
          { text: '论坛', link: 'https://bbs.mokeedev.com' },
        ],
        editLinkText: '在 GitHub 上编辑此页'
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'MoKee ROM',
      description: 'Android Community Operating System'
    },
    '/zh/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '魔趣ROM',
      description: '可能是中国最好的安卓开源系统'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ]
}