module.exports = {
    title: 'RotoUI',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            '/install/',
            '/get-started/',
            {
                title: '组件',
                children: ['components/button', 'components/demo']
            }
        ]
    }
}