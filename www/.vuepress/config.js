module.exports = {
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Download', link: 'https://download.mokeedev.com' },
        ]
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '主页', link: '/' },
          { text: '下载', link: 'https://download.mokeedev.com' },
        ]
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