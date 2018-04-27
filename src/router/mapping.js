export default [
    {
        name: '根',
        path: '/',
        redirect:'/app',
        hidden: true
    },
    {
        name:'小程序订单',
        path:'/app',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/index.vue'], () => {
                resolve(require('../components/index.vue'));
            });
        },
        children: [
            {
                name:'首页',
                path:'index',
                meta: {
                    requireAuth: true
                },
                component:resolve => {
                    require.ensure(['../components/index/index.vue'], () => {
                        resolve(require('../components/index/index.vue'));
                    });
                }
            },
            {
                name:'分类页面',
                path:'class',
                meta: {
                    requireAuth: true
                },
                component:resolve => {
                    require.ensure(['../components/class/class.vue'], () => {
                        resolve(require('../components/class/class.vue'));
                    });
                }
            },
            {
                name:'我的页面',
                path:'manage',
                meta: {
                    requireAuth: true
                },
                component:resolve => {
                    require.ensure(['../components/manage/manage.vue'], () => {
                        resolve(require('../components/manage/manage.vue'));
                    });
                }
            }
        ]
    },
    {
        name:'关于我们介绍页',
        path:'/about-us',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/about-us/about-us.vue'], () => {
                resolve(require('../components/about-us/about-us.vue'));
            });
        }
    },
    {
        name:'测试页面',
        path:'/ceshi',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/ceshi/ceshi.vue'], () => {
                resolve(require('../components/ceshi/ceshi.vue'));
            });
        }
    },
    {
        name:'问答详情页面',
        path:'/ask-detail',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/ask-detail/ask-detail.vue'], () => {
                resolve(require('../components/ask-detail/ask-detail.vue'));
            });
        }
    },
    // {
    //     name:'问答详情页面',
    //     path:'/ask-detail',
    //     meta: {
    //         requireAuth: true
    //     },
    //     component:resolve => {
    //         require.ensure(['../components/ask-detail/ask-detail.vue'], () => {
    //             resolve(require('../components/ask-detail/ask-detail.vue'));
    //         });
    //     }
    // },
    {
        name:'问答页面',
        path:'/ask',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/ask/ask.vue'], () => {
                resolve(require('../components/ask/ask.vue'));
            });
        }
    },
    {
        name:'收藏',
        path:'/collection',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/collection/collection.vue'], () => {
                resolve(require('../components/collection/collection.vue'));
            });
        }
    },
    {
        name:'对比结果页面vs',
        path:'/contrast-2',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/contrast-2/contrast-2.vue'], () => {
                resolve(require('../components/contrast-2/contrast-2.vue'));
            });
        }
    },
    {
        name:'详情页',
        path:'/detail',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/detail/detail.vue'], () => {
                resolve(require('../components/detail/detail.vue'));
            });
        }
    },
    {
        name:'产品库',
        path:'/distribution',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/distribution/distribution.vue'], () => {
                resolve(require('../components/distribution/distribution.vue'));
            });
        }
    },
    {
        name:'选择多张图片下载',
        path:'/download-img',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/download-img/download-img.vue'], () => {
                resolve(require('../components/download-img/download-img.vue'));
            });
        }
    },
    {
        name:'身份类型页面',
        path:'/edit',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/edit/edit.vue'], () => {
                resolve(require('../components/edit/edit.vue'));
            });
        }
    },
    {
        name:'产品库输入文字提交厂商',
        path:'/fill-ask',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/fill-ask/fill-ask.vue'], () => {
                resolve(require('../components/fill-ask/fill-ask.vue'));
            });
        }
    },
    {
        name:'操作说明',
        path:'/instructions',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/instructions/instructions.vue'], () => {
                resolve(require('../components/instructions/instructions.vue'));
            });
        }
    },
    {
        name:'咨询页面',
        path:'/news',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/news/news.vue'], () => {
                resolve(require('../components/news/news.vue'));
            });
        }
    },
    {
        name:'产品库添加对比商品',
        path:'/pro-contarst',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/pro-contarst/pro-contarst.vue'], () => {
                resolve(require('../components/pro-contarst/pro-contarst.vue'));
            });
        }
    },
    {
        name:'常见问题',
        path:'/problem',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/problem/problem.vue'], () => {
                resolve(require('../components/problem/problem.vue'));
            });
        }
    },
    {
        name:'报价',
        path:'/quote',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/quote/quote.vue'], () => {
                resolve(require('../components/quote/quote.vue'));
            });
        }
    },
    {
        name:'评价打分星星',
        path:'/score-1',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/score-1/score-1.vue'], () => {
                resolve(require('../components/score-1/score-1.vue'));
            });
        }
    },
    {
        name:'确认发布评论页面',
        path:'/score-2',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/score-2/score-2.vue'], () => {
                resolve(require('../components/score-2/score-2.vue'));
            });
        }
    },
    {
        name:'搜索历史词页面',
        path:'/search',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/search/search.vue'], () => {
                resolve(require('../components/search/search.vue'));
            });
        }
    },
    {
        name:'search-list',
        path:'/search-list',
        meta: {
            requireAuth: true
        },
        component:resolve => {
            require.ensure(['../components/search-list/search-list.vue'], () => {
                resolve(require('../components/search-list/search-list.vue'));
            });
        }
    }
]
