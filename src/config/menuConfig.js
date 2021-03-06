const menuList = [
    {
        title: '首页',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons'
            },
            {
                title: '弹框',
                key: '/admin/ui/modals'
            },
            {
                title: 'loading',
                key: '/admin/ui/loading'
            },
            {
                title: '通知提醒',
                key: '/admin/ui/notice'
            },
            {
                title: '全局提示框',
                key: '/admin/ui/message'
            },
            {
                title: 'Tab页签',
                key: '/admin/ui/tabs'
            },
            {
                title: '图片画廊',
                key: '/admin/ui/gallery'
            },
            {
                title: '轮播图',
                key: '/admin/ui/carousel'
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        children: [
            {
                title: '登录',
                key: '/admin/form/login'
            },
            {
                title: '注册',
                key: '/admin/form/reg'
            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '基础表格',
                key: '/admin/table/basic'
            },
            {
                title: '高级表格',
                key: '/admin/table/high'
            }
        ]
    },
    {
        title: '富文本',
        key: '/admin/text'
    },
    {
        title: '城市管理',
        key: '/admin/citymanage'
    },
    {
        title: '订单管理',
        key: '/admin/paymanage'
    },
    {
        title: '员工管理',
        key: '/admin/staffmanage'
    },
    {
        title: '车辆地图',
        key: '/admin/car'
    },
    {
        title: '图标',
        key: '/admin/icon'
    },
    {
        title: '权限设置',
        key: '/admin/limited'
    }
];
export default menuList;