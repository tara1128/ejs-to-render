exports.CMCM_PublicNav = {
  'zh-cn': {
    page: 'all',
    name: '猎豹移动',
    data: [
      {
        displayName: '关于公司',
        target: '_self',
        linkTo: '/zh-cn/about/',
        active: 'company',
        gaTag: 'brandnew.nav.company',
        subNavs: [
          {subNavName: '使命与愿景',  subNavLink: 'mission' },
          {subNavName: '公司简介',    subNavLink: 'intro'   },
          {subNavName: '发展历程',    subNavLink: 'history' },
          {subNavName: '管理团队',    subNavLink: 'leaders' },
          {subNavName: '企业文化',    subNavLink: 'culture' },
          {subNavName: '员工福利',    subNavLink: 'welfare' }
        ]
      },
      {
        displayName: '产品服务',
        target: '_self',
        linkTo: '/zh-cn/product/',
        active: 'product',
        gaTag: 'brandnew.nav.product',
        subNavs: [
          {subNavName: '移动端',      subNavLink: 'tools'     },
          {subNavName: 'PC端',        subNavLink: 'forpc'     },
          {subNavName: '人工智能',    subNavLink: 'ai'        },
          {subNavName: '大数据',      subNavLink: 'bigdata'   },
          {subNavName: '商业',        subNavLink: 'business'  },
          {subNavName: '硬件',        subNavLink: 'hardware'  }
        ]
      },
      {
        displayName: '投资者关系',
        target: '_blank',
        linkTo: 'http://ir.cmcm.com/',
        active: '',
        gaTag: 'brandnew.nav.ir',
        subNavs: [
          {
            subNavName: '季度业绩',
            subNavLink: 'http://ir.cmcm.com/index.php?s=123',
            outlink: true
          },
          {
            subNavName: '投资者新闻',
            subNavLink: 'http://ir.cmcm.com/index.php?s=43',
            outlink: true
          }
        ]
      },
      {
        displayName: '招 聘',
        target: '_blank',
        linkTo: 'http://hr.cmcm.com/',
        active: '',
        gaTag: 'brandnew.nav.hr',
        subNavs: [
          {
            subNavName: '社会招聘',
            subNavLink: 'http://hr.cmcm.com/social',
            outlink: true
          },
          {
            subNavName: '校园招聘',
            subNavLink: 'http://hr.cmcm.com/campus',
            outlink: true
          }
        ]
      },
      {
        displayName: '联 系',
        target: '_self',
        linkTo: '/zh-cn/contact/',
        active: 'contact',
        gaTag: 'brandnew.nav.contact',
        subNavs: [
          {subNavName: '媒体联系',    subNavLink: 'media'       },
          {subNavName: '社交媒体',    subNavLink: 'social'      },
          {subNavName: '业务联系',    subNavLink: 'business'    },
          {subNavName: '全球办公室',  subNavLink: 'offices'     },
          {subNavName: '客户联系',    subNavLink: 'customer'    }
        ]
      }
    ]
  },
  'en-us': {
    page: 'all',
    name: 'Cheetah Mobile',
    data: [
      {
        displayName: 'About Us',
        target: '_self',
        linkTo: '/en-us/about/',
        active: 'company',
        gaTag: 'brandnew.nav.company',
        subNavs: [
          {subNavName: 'Mission',     subNavLink: 'mission' },
          {subNavName: 'Company',     subNavLink: 'intro'   },
          {subNavName: 'History',     subNavLink: 'history' },
          {subNavName: 'Executives',  subNavLink: 'leaders' },
          {subNavName: 'Culture',     subNavLink: 'culture' },
          {subNavName: 'Benefits',    subNavLink: 'welfare' }
        ]
      },
      {
        displayName: 'Products',
        target: '_self',
        linkTo: '/en-us/product/',
        active: 'product',
        gaTag: 'brandnew.nav.product',
        subNavs: [
          {subNavName: 'Mobile',      subNavLink: 'tools'     },
          {subNavName: 'PC',          subNavLink: 'forpc'     },
          {subNavName: 'AI',          subNavLink: 'ai'        },
          {subNavName: 'Big Data',    subNavLink: 'bigdata'   },
          {subNavName: 'Commercial',  subNavLink: 'business'  }
        ]
      },
      {
        displayName: 'Investors',
        target: '_blank',
        linkTo: 'http://ir.cmcm.com/',
        active: '',
        gaTag: 'brandnew.nav.ir',
        subNavs: [
          {
            subNavName: 'Quarterly \n Results',
            subNavLink: 'http://ir.cmcm.com/index.php?s=123',
            outlink: true
          },
          {
            subNavName: 'Investor \n News',
            subNavLink: 'http://ir.cmcm.com/index.php?s=43',
            outlink: true
          }
        ]
      },
      {
        displayName: 'Careers',
        target: '_blank',
        linkTo: 'http://hr.cmcm.com/',
        active: '',
        gaTag: 'brandnew.nav.hr',
        subNavs: [
          {
            subNavName: 'Social \n Recruitment',
            subNavLink: 'http://hr.cmcm.com/social',
            outlink: true
          },
          {
            subNavName: 'Campus \n Recruitment',
            subNavLink: 'http://hr.cmcm.com/campus',
            outlink: true
          }
        ]
      },
      {
        displayName: 'Contact Us',
        target: '_self',
        linkTo: '/en-us/contact/',
        active: 'contact',
        gaTag: 'brandnew.nav.contact',
        subNavs: [
          {subNavName: 'Media',           subNavLink: 'media'       },
          {subNavName: 'Social Media',    subNavLink: 'social'      },
          {subNavName: 'Business',        subNavLink: 'business'    },
          {subNavName: 'Offices',         subNavLink: 'offices'     },
          {subNavName: 'Customer Support',subNavLink: 'customer'    }
        ]
      }
    ]
  }
};
