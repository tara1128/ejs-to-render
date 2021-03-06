exports.CMCM_ProductList = {
  'zh-cn': {
    page: 'any',
    name: '产品服务',
    link: '/zh-cn/product/',
    category: {
      mobileApps: {
        categoryName: '移动端',
        categoryLink: 'tools',/* For target, make its hash the same as its first son. */
        categoryData: {
          onMenu: true, /* To show sub categories on menu, make it true. */
          unfold: true, /* To unfold sub categories by default, make it true. */
          tool: {
            name: '工具',
            hash: 'tools',
            anch: 'category-of-tool',
            desc: ['全球领先的工具应用开发商，覆盖PC、移动端，构建安全、清理、图片编辑等多元化的产品矩阵；', '高居Google Play同品类榜首，开创猎豹移动出海浪潮'],
            data: [
              {
                priority: '100',
                name: '猎豹清理大师',
                slog: '清理所有不快',
                icon: '/dist/images/brandnew-logo-clean-master-103.png',
                descForIndex: '全球领先的安卓优化软件。首创业界领先的“云端+人工智能”深度清理系统，清理量较同类产品高30%以上；率先支持清理微信小程序垃圾；云端防毒体系曾多次被安全权威机构AV-Test评测为满分；霸榜100个国家Google Play工具榜',
                descForProd: ['全球安卓优化明星软件。首创业界领先的“云端+人工智能”深度清理系统，清理量较同类产品高于30%；率先支持清理微信小程序垃圾。云端防毒体系多次被权威机构AV-Test评为满分，霸榜100个国家Google Play工具榜。'],
                star: 4.7,
                tags: ['全球下载量近30亿', '国内应用市场评分同类领先'],
                link: 'http://cn.cmcm.com/cleanmaster/?f=www',
                target: '_blank',
                pict: '/dist/images/brandnew-tool-cm.png'
              },
            
              {
                priority: '50',
                name: '猎豹安全大师',
                slog: '',
                icon: '/dist/images/brandnew-logo-security-103.png',
                descForIndex: '全球领先的手机安全应用，获红点设计大奖。具有智能检测、病毒查杀、应用锁、拍下入侵者等功能，全面保护用户的手机安全及隐私',
                descForProd: ['全球领先的手机安全应用。具有智能检测、病毒查杀、应用锁、拍下入侵者等功能，内建AV TEST评测满分病毒引擎，全面保护手机安全。Google Play下载超过5亿次，霸榜30个国家安全工具类应用排行榜，评分高达4.7。'],
                star: 0,
                tags: ['Google Play全球下载超过5亿', 'AV TEST评测满分病毒引擎'],
                link: 'http://cn.cmcm.com/cm-security/?f=cmcn',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50',
                name: '猎豹3D桌面',
                slog: '',
                icon: '/dist/images/brandnew-logo-launcher-103.png',
                descForIndex: ['全球安卓平台极受欢迎的个性化手机桌面产品，提供海量主题，深度个性化定制。覆盖200多个国家和地区，Google Play总下载量近3亿'],
                descForProd: ['全球安卓平台大受欢迎的个性化手机桌面产品。提供海量主题、深度个性化定制，并搭载智能锁屏功能，全方位保障隐私与安全。覆盖全球200多个国家和地区， 霸榜Google Play 94个国家个性化榜单，总下载量近3亿。'],
                star: 0,
                tags: ['霸榜94个国家榜单'],
                link: 'http://www.cmcm.com/zh-cn/cm-launcher/?f=cmcn',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'Cheetah Keyboard',
                slog: '',
                icon: '/dist/images/brandnew-logo-kb-103.png',
                descForIndex: ['业界率先引入深度学习模型的第三方输入法，霸榜Google Play 50个国家个性化榜单'],
                descForProd: ['业界率先引入深度学习模型的第三方输入法。具有智能预测、自动更正、学习用户习惯等功能。融入自然语言处理（NLP）技术和机器学习算法，预测准确率更高。覆盖140多个国家和地区，为Google Play评分最高的第三方输入法之一。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/keyboard/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'PhotoGrid',
                slog: '',
                icon: '/dist/images/brandnew-logo-photogrid-103.png',
                descForIndex: ['相片组合编辑、视频拼贴、修图滤镜神器，2016年Google Play年度最佳App'],
                descForProd: ['时下必备的相片组合编辑、视频拼贴、修图滤镜神器。内含海量素材，更利用机器学习、脸部辨识技术，推出Twinkle功能，令照片产生特殊的动态效果。安卓和iOS双平台共5.5亿下载量，2016年Google Play年度最佳App之一。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-cn/photo-grid/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: '猎豹浏览器',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: ['极致轻巧的安全浏览器。曾登顶8个国家App Store工具榜，Google Play总下载量近1亿'],
                descForProd: ['更轻巧、更快速、更安全的新一代手机浏览器。同时，它还是国内率先做内容探索的浏览器，为用户推送个性化、高质量的内容。曾登顶8个国家App Store工具榜，Google Play总下载量近1亿，在全球拥有海量用户。'],
                star: 0,
                tags: [],
                link: 'http://m.liebao.cn/?f=cmcn',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '',
                name: '金山电池医生',
                slog: '',
                icon: '/dist/images/brandnew-logo-bd-103.png',
                descForIndex: [],
                descForProd: ['全球专业的电池保养和电量管理软件，能轻松延长手机续航时间；科学用电、延长电池寿命。覆盖全球200多个国家和地区，曾霸榜Google Play 26个国家工具榜，在133个国家App Store工具榜登顶，Google Play下载量超1亿。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-cn/battery-doctor/',
                target: '_blank',
                pict: ''
              }
            ]
          },
          socl: {
            name: '社交',
            hash: 'social',
            anch: 'category-of-social',
            desc: ['成功出海欧美的社交产品，跨越文化壁垒，连接全球用户，', '布局海外直播市场，建立内容生态体系'],
            data: [
              {
                priority: '',
                name: 'Live.me',
                slog: '',
                icon: '/dist/images/brandnew-logo-liveme-103.png',
                descForIndex: ['一款风靡全球的直播类社交应用，继工具产品之后，Live.me成为猎豹移动出海的新标杆。内含礼物打赏、主播连线、游戏直播等功能，并在后台监测系统中引入人工智能技术，不仅为用户提供个性化的直播和社交内容，也确保了平台的“绿色”与健康。将中国的直播打赏模式复制到海外，已经成为全球年轻人最喜爱的社交产品之一。目前已在85个国家和地区发行，覆盖8种不同语言。登顶全球42个国家Google Play社交畅销榜'],
                descForProd: ['一款风靡全球的直播类社交应用。将中国的直播打赏模式复制到海外，吸引了众多明星及大牌网红入驻，已经成为美国年轻人最喜爱的社交产品之一。覆盖85个国家，8种语言，登顶全球42个国家Google Play社交畅销榜。'],
                star: 0,
                tags: ['85个市场|覆盖多元文化', '8种语言|融合本地需求', '42个国家|登顶社交畅销榜'],
                link: 'http://www.liveme.com/',
                target: '_blank',
                pict: ''
              }
            ]
          },
          game: {
            name: '游戏',
            hash: 'games',
            anch: 'category-of-game',
            desc: ['猎豹移动手游产品在全球月活跃用户超过1亿，', '是iOS和Google Play月度手游下载榜Top10频繁上榜的国内厂商'],
            data: [
              {
                priority: '50-100',
                name: '钢琴块2',
                slog: '',
                icon: '/dist/images/brandnew-logo-pt2-103.png',
                descForIndex: ['风靡全球、坐拥9亿玩家的音乐类轻游戏；全新的滑块玩法、丰富的赛制模式。2016年高居iOS和Google Play双平台音乐休闲游戏类全球下载量榜单前列'],
                descForProd: ['一款风靡全球、坐拥9亿玩家的音乐类轻游戏，让人人都能弹钢琴。急速节奏，不断挑战手速极限；音乐风格多样、海量歌曲不断更新；完美音质，如同置身钢琴演奏会；参与排行，与全球玩家一较高低。2016年高居iOS和Google Play双平台音乐休闲游戏类全球下载量榜单前列。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-cn/piano-tiles/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50-50',
                name: '滚动的天空',
                slog: '',
                icon: '/dist/images/brandnew-logo-rolling-sky.png',
                descForIndex: ['挑战速度和反应力极限的轻游戏；3D立体视觉，多样的游戏场景，让你操控小球去征服世界。现累计下载已超2.4亿，被评为Google Play2016最佳游戏之一'],
                descForProd: ['一款挑战速度和反应力极限的轻游戏，华丽的3D特效场景，在山丘、宇宙、森林等场景中，感受充满想象力的陷阱和障碍物，让你操控小球征服世界。现累计下载已超2.4亿，被评为Google Play2016最佳游戏之一。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-cn/rolling-sky/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: '跳舞的线',
                slog: '',
                icon: '/dist/images/brandnew-game-bg-dl-icon.png',
                descForIndex: ['音乐类轻游戏，特色原创音轨，伴你冲破重重关卡；长期霸榜美国等115个国家音乐游戏榜'],
                descForProd: ['原创音乐节奏类轻游戏。独一无二的游戏场景，带你穿越沙漠、遍览四季、漫步田野；雷鬼、电音、古典等多种风格音乐，伴你冲破重重艰险阻碍；探索无限未知，打造与众不同的游戏体验。长期被Google Play、Apple Store编辑推荐，Apple Store和Google Play双平台评分4.8（满分5分），权威游戏媒体及分发平台TapTap评分9.7分，长期霸榜美国等115个国家音乐游戏榜。'],
                star: 0,
                tags: [],
                link: 'http://board.cmcm.com/dl/transfer.html',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: '弓箭手大作战',
                slog: '',
                icon: '/dist/images/brandnew-logo-arrow-io.png',
                descForIndex: ['真人对战io游戏，用弓箭征服世界；获2016阿里巴巴新晋热门游戏奖'],
                descForProd: ['一款全新玩法的真人对战io游戏。通过虚拟摇杆控制走位，利用手中的弓箭击败对手；上百种技能组合，游戏永远充满变数；丰富的像素人偶风格选择，多人即时对战，让你的手指停不下来。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.cmcm.arrowio',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: '深海水族馆',
                slog: '',
                icon: '/dist/images/brandnew-logo-shszg.png',
                descForIndex: [],
                descForProd: ['一款风靡全球的养鱼游戏，在游戏中收集成百上千的鱼儿，让你创造自己的水族馆。简单的操作、绝美的图片、美妙的背景音乐，更有虚拟现实模式，让你的身心得到彻底放松与治愈。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.idleif.abyssrium',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: '点点冲刺',
                slog: '',
                icon: '/dist/images/brandnew-logo-ddcc.png',
                descForIndex: [],
                descForProd: ['一款考验反应能力的奔跑类街机手游。画风极具简约风格，玩法操作简单，潜移默化地提升用户反应能力和手速。曾霸榜多个国家Google Play游戏下载榜，获得Google Play千次以上编辑推荐。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.secondarm.taptapdash',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      pc: {
        categoryName: 'PC端',
        categoryLink: 'forpc',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          pc: {/* When no sub category, using the same name & hash as its father!*/
            name: 'PC端',
            hash: 'forpc',
            anch: 'category-of-pc',
            desc: '',
            data: [
              {
                priority: '',
                name: '猎豹安全浏览器',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: [],
                descForProd: ['国内广受欢迎的双核安全浏览器，基于Chromium内核超过100项改进，启动速度提升30%；智能防卡死，全面兼容HTML5，充满艺术气息的视觉方案；首创BIPS云安全体系，拦截恶意网址，全面拦截来自Web的安全威胁。'],
                star: 0,
                tags: [],
                link: 'https://www.liebao.cn',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: '金山毒霸',
                slog: '',
                icon: '/dist/images/brandnew-logo-duba.png',
                descForIndex: [],
                descForProd: ['集杀毒、系统管理为一体的安全软件。18年专业积累、20次通过VB100认证、多次通过AV-Comparatives、AV-Test认证，具备蓝芯引擎，与云安全无缝结合，使用微特征识别技术通杀未知木马。'],
                star: 0,
                tags: [],
                link: 'http://www.duba.net',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: '驱动精灵',
                slog: '',
                icon: '/dist/images/brandnew-logo-qdjl-103.png',
                descForIndex: [],
                descForProd: ['中国知名电脑驱动程序管理软件，基于十余年的专业数据积累，硬件设备识别率高达98.3%，其中网卡的识别率高达99.9%，为数亿用户解决各种电脑驱动问题、系统故障，实为装机必备。'],
                star: 0,
                tags: [],
                link: 'http://www.drivergenius.com',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      ai: {
        categoryName: '人工智能',
        categoryLink: 'ai',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          ai: {/* When no sub category, using the same name & hash as its father!*/
            name: '人工智能',
            hash: 'ai',
            anch: 'category-of-ai',
            desc: ['旗下人工智能公司猎户星空在远场语音交互系统、图像识别、视觉导航等领域，', '拥有完全自主开发、领先行业的技术'],
            data: [
              {
                priority: '',
                name: '猎户星空',
                slog: '',
                icon: '/dist/images/brandnew-logo-orion-200.png',
                descForIndex: [],
                descForProd: ['猎豹移动构建AI技术平台，为产品赋能，完善了工具产品矩阵，也为内容产品带来增长。旗下猎户星空在智能语音交互系统、图像识别、视觉导航等技术上领跑行业；2017年在微软百万名人识别竞赛（LFW）中，夺得子命题有限制类第一名。'],
                star: 0,
                tags: [],
                link: 'http://ainirobot.com/',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: '智能语音OS',
                slog: '',
                icon: '',
                descForIndex: ['旗下人工智能公司猎户星空自主开发的“全链路远场智能语音交互系统”。其麦克风阵列、语音唤醒、语音识别、语义理解、语音合成等软硬件技术均处于行业领先水平。所有技术均属自主知识产权，与产品体验设计深度融合，极致打磨。首创多种自然拟人的交互技术，打造出人性化的语音交互体验'],
                descForProd: [], // This product shows on index only!
                star: 0,
                tags: [
                  {num: 5, adj: '大', noun: '语音技术', sentence: '全链路自主研发'},
                  {num: 6, adj: '项', noun: '创新技术', sentence: '人性化的交流'},
                  {num: 1, adj: '亿+', noun: '音频内容', sentence: '为用户深度定制'}
                ],
                link: 'http://ainirobot.com/pc_liehu.html',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      bigData: {
        categoryName: '大数据',
        categoryLink: 'bigdata',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          bigData: {
            name: '大数据',
            hash: 'bigdata',
            anch: 'category-of-bigdata',
            desc: '',
            data: [
              {
                priority: '',
                name: '猎豹大数据',
                slog: '',
                icon: '/dist/images/brandnew-logo-big-data.png',
                descForIndex: [],
                descForProd: ['以旗下产品海量数据为基础，覆盖200多个国家地区、6亿用户，提供安卓App各项指标，洞察用户画像。旗下拥有移动互联网研究机构猎豹全球智库。定期发布移动互联网研究、咨询报告。'],
                star: 0,
                tags: [],
                link: 'http://cn.data.cmcm.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      business: {
        categoryName: '商业',
        categoryLink: 'business',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          business: {/* When no sub category, using the same name & hash as its father!*/
            name: '商业',
            hash: 'business',
            anch: 'category-of-business',
            desc: '',
            data: [
              {
                priority: '',
                name: '猎豹智趣营销',
                slog: '',
                icon: '/dist/images/brandnew-logo-zhiqu.png',
                descForIndex: [],
                descForProd: ['全新升级的商业品牌，基于全球近6亿月活用户，涵盖移动及PC端业务，凭借大数据及人工智能等先进技术，为广告主提供更加精准、智能、个性化的服务。让广告不再打扰、而是打动用户；让智趣未来，迎面而来。'],
                star: 0,
                tags: [],
                link: 'http://ads.cmcm.com/cn/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      hardware: {
        categoryName: '硬件',
        categoryLink: 'hardware',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          hardware: {/* When no sub category, using the same name & hash as its father!*/
            name: '硬件',
            hash: 'hardware',
            anch: 'category-of-hardware',
            desc: '',
            data: [
              {
                priority: '',
                name: '豹米净化器',
                slog: '',
                icon: '/dist/images/brandnew-logo-baomi-200.png',
                descForIndex: [],
                descForProd: ['猎豹移动旗下硬件产品，针对不同消费人群做出适合各使用场景的净化器。选材极其苛刻，其最高滤网等级达到H14级；智能的一键操作以及激光探头配合数显，令其在硬件和智能交互上领跑行业。'],
                star: 0,
                tags: [],
                link: 'https://www.baomi.com/',
                target: '_blank',
                pict: ''
              }
            ] 
          }
        }
      }
    } // category
  },
  'en-us': {
    page: 'any',
    name: 'Products',
    link: '/en-us/product/',
    category: {
      mobileApps: {
        categoryName: 'Mobile',
        categoryLink: 'tools', /* For target, make its hash the same as its first son. */
        categoryData: {
          onMenu: true, /* To show sub categories on menu, make it true. */
          unfold: true, /* To unfold sub categories by default, make it true. */
          tool: {
            name: 'Utility',
            hash: 'tools',
            anch: 'category-of-tool',
            desc: ['As the #1 developer in Google Play\'s tool app category, Cheetah Mobile offers ', 'the world\'s leading security, cleaning, personalization and safe browser software.'],
            data: [
              {
                priority: '100',
                name: 'Clean Master',
                slog: '',
                icon: '/dist/images/brandnew-logo-clean-master-103.png',
                descForIndex: ['#1 Android phone optimization software in the world. Industry leading "cloud + AI" deep cleaning system removes 30% more junk than other apps. Named best antivirus software for Android by independent IT-security institute AV-TEST multiple times. Top ranked tool app on Google Play in 100 countries.'],
                descForProd: ['Clean Master is the #1 Android phone optimization software in the world. Its industry leading "cloud + AI" deep cleaning system removes 30% more junk than other apps. Named best antivirus software for Android by independent IT-security institute AV-TEST multiple times. Top ranked tool app on Google Play in 100 countries.'],
                star: 4.7,
                tags: ['3 billion downloads globally', '#1 tool app in 100 countries'],
                link: 'http://www.cmcm.com/en-us/clean-master/',
                target: '_blank',
                pict: '/dist/images/brandnew-tool-cm-en.png'
              },
            
              {
                priority: '50',
                name: 'Security Master',
                slog: '',
                icon: '/dist/images/brandnew-logo-security-103.png',
                descForIndex: ['World\'s leading mobile security app featuring intelligent threat detection, the world\'s highest rated antivirus system, app lock and intruder selfies. Its industry leading "cloud + AI" deep cleaning system removes 30% more junk than other apps.'],
                descForProd: ['Security Master is the world\'s leading mobile security app. It offers comprehensive protection, including intelligent threat detection, the world\'s highest rated antivirus system by AV-TEST, app lock and intruder selfies. Over 500 million downloads on Google Play. #1 on the security app rankings in 30 countries, with an average score of 4.7 out of 5.'],
                star: 0,
                tags: ['Highest rated antivirus system'],
                link: 'http://www.cmcm.com/en-us/cm-security/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50',
                name: 'CM Launcher',
                slog: '',
                icon: '/dist/images/brandnew-logo-launcher-103.png',
                descForIndex: ['The world\'s most popular smartphone personalization app for Android, CM Launcher offers a large number of themes, in-depth customization options and smart lock-screen functionality, providing comprehensive protection for privacy and safety.'],
                descForProd: ['The world\'s most popular smartphone personalization app for Android, CM Launcher offers a large number of themes, in-depth customization options and smart lock-screen functionality, providing comprehensive protection for privacy and safety. Covering more than 200 countries and regions, it has been ranked first in the personalization category of the Google Play store in 94 countries with nearly 300 million total downloads'],
                star: 0,
                tags: ['300 mln total downloads'],
                link: 'http://www.cmcm.com/en-us/cm-launcher/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'Cheetah Keyboard',
                slog: '',
                icon: '/dist/images/brandnew-logo-kb-103.png',
                descForIndex: ['Industry\'s first third-party input app to use deep learning technology. #1 personalization app on Google Play in 50 countries'],
                descForProd: ['Cheetah Keyboard is the industry\'s first third-party input app to incorporate deep learning technology, with features such as smart prediction, automatic correction and user modeling. Cheetah Keyboard integrates NLP technology and machine learning algorithms in order to provide stronger predictions and greater accuracy, Covers more than 140 countries and regions. Highest rated third-party input method on Google Play.'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/keyboard/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'PhotoGrid',
                slog: '',
                icon: '/dist/images/brandnew-logo-photogrid-103.png',
                descForIndex: ['A must-have photo editor and collage maker that has been downloaded a total of 550 million times for Android and iOS'],
                descForProd: ['PhotoGrid is a must-have photo editor and picture & video collage maker. Its huge selection of editing tools, facial recognition technology, twinkle functions and machine learning capabilities allow users to elevate their photos with dynamic special effects. Downloaded a combined total of 550 million times on Android and iOS. Named one of Google Play’s Best Apps of 2016.'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/photo-grid/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'CM Browser',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: ['Small, fast and secure. Previously #1 on the App Store\'s tool rankings in 8 countries. Nearly one billion downloads on Google Play'],
                descForProd: ['CM Browser represents a new generation of mobile phone browser that\'s lighter, faster and more secure. #1 on the App Store tool rankings in 8 countries. Nearly 100 million downloads on Google Play.'],
                star: 0,
                tags: [],
                link: 'http://m.liebao.cn/?f=cmcn',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '',
                name: 'Battery Doctor',
                slog: '',
                icon: '/dist/images/brandnew-logo-bd-103.png',
                descForIndex: [],
                descForProd: ['The world\'s most professional battery maintenance and power management software, Battery Doctor helps users extend battery life with smart power usage. Covers more than 200 countries and regions. #1 on the Google Play tool app rankings in 26 countries. #1 on the App Store tool rankings in 133 countries. Over 100 million downloads on Google Play.'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/battery-doctor/',
                target: '_blank',
                pict: ''
              }
            ]
          },
          socl: {
            name: 'Social',
            hash: 'social',
            anch: 'category-of-social',
            desc: ['Crossing cultural barriers, connecting global users ', 'leading the global live broadcasting market'],
            data: [
              {
                priority: '',
                name: 'Live.me',
                slog: '',
                icon: '/dist/images/brandnew-logo-liveme-103.png',
                descForIndex: ['Global social live broadcasting phenomenon. One of the most popular social media apps among young people worldwide. After launching in April 2016, Live.me quickly rose to the top of the app rankings, becoming the fastest growing live broadcasting app ever in the U.S. Highest grossing social app on Google Play in 42 countries.'],
                descForProd: ['After launching in April 2016, Cheetah\'s live broadcasting social app Live.me quickly rose to the top of the app rankings. It has attracted a large number of celebrities and influencers, and has become one of the most popular social apps among young U.S. users today. Available in 7 languages across 85 countries and regions. Highest grossing social app on Google Play in 42 countries.'],
                star: 0,
                tags: ['85 Markets|Covers multiple \n cultures', '8 Languages|Integrates local \n needs', '42 Countries|Tops social bestseller list'],
                link: 'http://www.liveme.com/',
                target: '_blank',
                pict: ''
              }
            ]
          },
          game: {
            name: 'Games',
            hash: 'games',
            anch: 'category-of-game',
            desc: ['With combined MAUs surpassing 1 billion globally ', 'Cheetah Games is one of the largest casual game developers in the world'],
            data: [
              {
                priority: '50-100',
                name: 'Piano Tiles 2',
                slog: '',
                icon: '/dist/images/brandnew-logo-pt2-103.png',
                descForIndex: ['Music-based casual game with nearly 900 million downloads worldwide. Most downloaded music-based casual game in 2016.'],
                descForProd: ['Piano Tiles 2 is a music-based casual game and global phenomenon downloaded nearly 900 million times. With newly launched swipe-tile gameplay and racing modes, Piano Tiles brings you the perfect dual audio-visual experience. Ranked in the Top 5 of the iOS free download game rankings in China. #1 on the free download game rankings in 158 countries. Most downloaded music-based casual game on the App Store and Google Play in 2016.'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/piano-tiles/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50-50',
                name: 'Rolling Sky',
                slog: '',
                icon: '/dist/images/brandnew-logo-rolling-sky.png',
                descForIndex: ['Fast-paced 3D game that pushes the boundaries of your speed and reaction time. Top 10 most downloaded game in 141 countries. One of Google Play\'s Best Games of 2016.'],
                descForProd: ['Rolling Sky is a fast-paced casual game that challenges the limits of your speed and reaction time with stunning 3D visuals. Over 240 million total downloads. Top 10 in game downloads in 141 countries. Top 10 in overall downloads in 65 countries. Top 5 on the App Store\'s free download game rankings in China. One of Google Play\'s Best Games of the Year in 2016.'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/rolling-sky/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: 'Dancing Line',
                slog: '',
                icon: '/dist/images/brandnew-game-bg-dl-icon.png',
                descForIndex: ['All original rhythm-based casual game with a 4.8 user rating on Google Play. One of Google Play\'s Best Games of 2017.'],
                descForProd: ['Dancing Line is a rhythm-based casual game featuring original music to help you break through each level while exploring the infinite unknown. Rated 4.8 out of 5 in both the App Store and Google Play. Rated 9.7 out of 10 by top gaming media and mobile distribution platform Tap Tap. Top 5 on the App Store\'s free download game rankings in China. #1 on the music-based game rankings in 115 countries, including the U.S.'],
                star: 0,
                tags: [],
                link: 'http://board.cmcm.com/dl/transfer.html',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: 'Arrow.io',
                slog: '',
                icon: '/dist/images/brandnew-logo-arrow-io.png',
                descForIndex: ['Use your bow and arrows to conquer the world in this exciting online multiplayer game. Winner of Alibaba\'s 2016 Best New Game Award.'],
                descForProd: ['Arrow.io is an exciting online multiplayer game with a rich line of characters to choose from as you conquer the world with your bow and arrows. Ranked in the Top 5 on the App Store\'s action game download rankings in 18 countries. Named the best action game in Taiwan and Poland in January 2017. Named the #2 action game in China in June 2017.'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.cmcm.arrowio',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: 'Tap Tap Fish',
                slog: '',
                icon: '/dist/images/brandnew-logo-shszg.png',
                descForIndex: [],
                descForProd: ['Tap Tap fish is a relaxing yet addictive casual game in which players build an aquarium ecosystem and collect thousands of fish. Cheetah Mobile became the exclusive publisher of Tap Tap Fish in October 2016. Named as the Best Independent Game of 2016 on both the App Store and Google Play.'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.idleif.abyssrium',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: 'Tap Tap Dash',
                slog: '',
                icon: '/dist/images/brandnew-logo-ddcc.png',
                descForIndex: [],
                descForProd: ['Tap Tap dash is a fast-paced casual game featuring a simple style and easy gameplay that trains users\' reaction speed and reflexes. Ranked No. 1 on the Google Play game download ranking in numerous countries. Recommended by Google Play editors.'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.secondarm.taptapdash',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      pc: {
        categoryName: 'PC',
        categoryLink: 'forpc',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          pc: {/* When no sub category, using the same name & hash as its father!*/
            name: 'PC',
            hash: 'forpc',
            anch: 'category-of-pc',
            desc: '',
            data: [
              {
                priority: '',
                name: 'Clean Master for PC',
                slog: '',
                icon: '/dist/images/brandnew-logo-clean-master-103.png',
                descForIndex: [],
                descForProd: ['Clean Master for PC takes the tried-and-true mobile cleaning utility software and brings it to the desktop so that Windows users can clean their system of junk files and improve the overall performance of their PCs. The Standard version, which is absolutely free, also offers privacy protection so that users can lock out intruders and easily remove browsing records. A low-cost Premium version is available as well, giving users peace of mind with the ability to recover accidentally deleted files or re-formatted hard drives and memory cards.'],
                star: 0,
                tags: [],
                link: 'https://www.cleanmasterofficial.com/en-us/?f=cmnew',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: 'CM Browser',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: [],
                descForProd: ['CM Browser is the first dual-core security browser in China. It features more than 100 improvements based on Chromium architecture, including 30% higher activation speed, HTML5 compatibility and artistic visual solutions. With the first ever BIPS cloud security system, CM Browser intercepts malicious websites and protects users from online security threats.'],
                star: 0,
                tags: [],
                link: 'https://www.liebao.cn',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: 'Duba Anti-Virus (Only available in China)',
                slog: '',
                icon: '/dist/images/brandnew-logo-duba.png',
                descForIndex: [],
                descForProd: ['Duba Anti-Virus is security software that combines both antivirus and system management capabilities. With 18 years of development, it has been certified 20 times by VB100 (more than any other security software in China), as well as by AV-Comparatives and AV-TEST multiple years in a row. Powered by Cheetah Mobile\'s custom blue-core engine, Duba Anti-Virus seamlessly integrates with cloud security while using micro-feature recognition technology to kill unknown trojans.'],
                star: 0,
                tags: [],
                link: 'http://www.duba.net',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: 'Driver Genius',
                slog: '',
                icon: '/dist/images/brandnew-logo-qdjl-103.png',
                descForIndex: [],
                descForProd: ['Acquired in 2012, DriverGenius is China\'s #1 domestically-developed device driver software. Based on more than 10 years of data, DriverGenius boasts a device recognition rate of 98.3%, including a network adapter card recognition rate of 99.9%. As an essential piece device installation software, DriverGenius has resolved device driver issues and system malfunctions for more than 100 million users.'],
                star: 0,
                tags: [],
                link: 'http://www.drivergenius.com',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      ai: {
        categoryName: 'AI',
        categoryLink: 'ai',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          ai: {/* When no sub category, using the same name & hash as its father!*/
            name: 'AI',
            hash: 'ai',
            anch: 'category-of-ai',
            desc: ['Cheetah Mobile-invested artificial intelligence company OrionStar possesses completely self-developed, ', 'industry-leading technology, including far-field voice interaction, image recognition and visual navigation systems.'],
            data: [
              {
                priority: '',
                name: 'Artificial Intelligence',
                slog: '',
                icon: '/dist/images/brandnew-logo-orion-200.png',
                descForIndex: [],
                descForProd: ['Cheetah Mobile has built an AI technology platform to power its full line of products, upgrade its utility product matrix and contribute to the growth of its content apps. Cheetah Mobile\'s subsidiary OrionStar is a leader in the industry with cutting-edge technologies such as voice IO, facial recognition and visual navigation. OrionStar won first place at the 2017 MS-Celeb-1M (LFW) challenge, a world renowned facial recognition competition.'],
                star: 0,
                tags: [],
                link: 'http://ainirobot.com/',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: 'Smart Voice OS',
                slog: '',
                icon: '',
                descForIndex: ['OrionStar\'s self-developed, fully-linked far-field voice interaction system possesses industry leading software and hardware, including microphone array, voice activation and semantic recognition technology. Its immersive voice controls and pioneering personification technology, combined with a rich content matrix brings users the most personalized voice interaction experience.', '(Only available in China)'],
                descForProd: [], // This product shows on index only!
                star: 0,
                tags: [
                  {num: 5, adj: 'major', noun: 'voice technologies', sentence: 'fully-linked, self-developed'},
                  {num: 6, adj: 'major', noun: 'innovative technologies', sentence: 'highly personalized interactions'},
                  {num: 1, adj: 'million+', noun: 'voice sample capacity', sentence: 'deep customization for users'}
                ],
                link: 'http://ainirobot.com/pc_liehu.html',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      bigData: {
        categoryName: 'Big Data',
        categoryLink: 'bigdata',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          bigData: {
            name: 'Big Data',
            hash: 'bigdata',
            anch: 'category-of-bigdata',
            desc: '',
            data: [
              {
                priority: '',
                name: 'Cheetah Data',
                slog: '',
                icon: '/dist/images/cheetah-data-logo.png',
                descForIndex: [],
                descForProd: ['Cheetah Data is a global mobile big data analysis platform. Based on the huge amount of data accumulated through Cheetah Mobile\'s product matrix, Cheetah Data provides indices including active penetration rate, growth rate, retention rate and user intelligence. It surveys every change in the Android market to help app developers, investors and marketers make decisions. Cheetah Data also owns and operates Cheetah Lab, its mobile internet-focused research institute, which releases global internet research reports and analysis on a regular basis.'],
                star: 0,
                tags: [],
                link: 'http://data.cmcm.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      business: {
        categoryName: 'Commercial',
        categoryLink: 'business',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          business: {/* When no sub category, using the same name & hash as its father!*/
            name: 'Commercial',
            hash: 'business',
            anch: 'category-of-business',
            desc: '',
            data: [
              {
                priority: '',
                name: 'Cheetah Ads',
                slog: '',
                icon: '/dist/images/brandnew-logo-a-d-s-500.png',
                descForIndex: [],
                descForProd: ['Cheetah Ads is Cheetah Mobile\'s self-operated ad platform offering a wide range of ad formats, from high-performing display and native ads, to beautiful, full-screen vertical video. Cheetah Ads offers diverse, global reach with over 600 million users from 200+ countries and regions across Cheetah Mobile\'s owned and operated inventory, including Clean Master, CM Security, Cheetah Keyboard and Live.me. Enhanced by Cheetah Mobile\'s artificial intelligence and big data capabilities, Cheetah Ads helps brands reach the right audience, at the right time, in the right format throughout the entire purchase cycle.'],
                star: 0,
                tags: [],
                link: 'http://ads.cmcm.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      }
    } // category
  },
  'zh-tw': {
    page: 'any',
    name: '產品服務',
    link: '/zh-tw/product/',
    category: {
      mobileApps: {
        categoryName: '移動端',
        categoryLink: 'tools', /* For target, make its hash the same as its first son. */
        categoryData: {
          onMenu: true, /* To show sub categories on menu, make it true. */
          unfold: true, /* To unfold sub categories by default, make it true. */
          tool: {
            name: '工具',
            hash: 'tools',
            anch: 'category-of-tool',
            desc: ['工具全球領先的工具應用開發商，覆蓋PC、移動端，構建安全、清理、圖片編輯等多元化的產品矩陣；', '高居Google Play同品類榜首，開創獵豹移動出海浪潮'],
            data: [
              {
                priority: '100',
                name: 'Clean Master',
                slog: '',
                icon: '/dist/images/brandnew-logo-clean-master-103.png',
                descForIndex: ['全球領先的Android優化軟體。首創業界領先的「雲端+人工智慧」深度清理系統，清理量較同類產品高30%以上；率先支援清理微信小程式垃圾；雲端防毒體系曾多次被安全權威機構AV-Test評測為滿分；霸榜100個國家Google Play工具榜'],
                descForProd: ['全球Android優化明星軟體。首創業界領先的「雲端+人工智慧」深度清理系統，清理量較同類產品高於30%；率先支援清理微信小程式垃圾。雲端防毒體系多次被權威機構AV-Test評為滿分，霸榜100個國家Google Play工具榜。'],
                star: 4.7,
                tags: ['全球3億下載', '全球百國Google Play 工具榜排名第一'],
                link: 'http://www.cmcm.com/zh-tw/clean-master/',
                target: '_blank',
                pict: '/dist/images/brandnew-tool-cm-en.png'
              },
            
              {
                priority: '50',
                name: 'Security Master安全All霸',
                slog: '',
                icon: '/dist/images/brandnew-logo-security-103.png',
                descForIndex: ['全球領先的手機安全應用，獲紅點設計大獎。具有智慧檢測、病毒查殺、應用鎖、拍下入侵者等功能，全面保護用戶的手機安全及隱私'],
                descForProd: ['全球領先的手機安全應用。具有智慧檢測、病毒查殺、應用鎖、拍下入侵者等功能，內建AV TEST評測滿分病毒引擎，全面保護手機安全。Google Play下載超過5億次，霸榜30個國家安全工具類應用排行榜，評分高達4.7。'],
                star: 0,
                tags: ['Google Play全球下載超過五億', 'AV TEST評測滿分病毒引擎'],
                link: 'http://www.cmcm.com/zh-tw/cm-security/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50',
                name: 'CM Launcher 3D',
                slog: '',
                icon: '/dist/images/brandnew-logo-launcher-103.png',
                descForIndex: ['全球Android平台極受歡迎的個性化手機桌面產品，提供海量主題，深度個性化定制。覆蓋200多個國家和地區，Google Play總下載量近3億'],
                descForProd: ['全球Android平台大受歡迎的個性化手機桌面產品。提供海量主題、深度個性化訂製，並搭載智慧鎖屏功能，全方位保障隱私與安全。覆蓋全球200多個國家和地區，霸榜Google Play 94個國家個性化榜單，總下載量近3億。'],
                star: 0,
                tags: ['3億累積下載'],
                link: 'http://www.cmcm.com/zh-tw/cm-launcher/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'Cheetah Keyboard',
                slog: '',
                icon: '/dist/images/brandnew-logo-kb-103.png',
                descForIndex: ['業界率先引入深度學習模型的協力廠商輸入法，霸榜Google Play 50個國家個性化榜單'],
                descForProd: ['業界率先引入深度學習模型的協力廠商輸入法。具有智慧預測、自動校正、學習用戶習慣等功能。融入自然語言處理（NLP）技術和機器學習演算法，預測準確率更高。覆蓋140多個國家和地區，為Google Play評分最高的協力廠商輸入法之一。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/keyboard/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'PhotoGrid',
                slog: '',
                icon: '/dist/images/brandnew-logo-photogrid-103.png',
                descForIndex: ['相片組合編輯、視頻拼貼、修圖濾鏡神器，2016年Google Play年度最佳App'],
                descForProd: ['時下必備的相片組合編輯、影片拼貼、修圖濾鏡神器。內含海量素材，更利用機器學習、臉部辨識技術，推出Twinkle功能，令照片產生特殊的動態效果。Android和iOS雙平台共5.5億下載量，2016年Google Play年度最佳App之一。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-tw/photo-grid/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'CM Browser',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: ['極致輕巧的安全瀏覽器。曾登頂8個國家App Store工具榜，Google Play總下載量近1億'],
                descForProd: ['更輕巧、更快速、更安全的新一代手機瀏覽器。同時，它還是中國率先做內容探索的瀏覽器，為用戶推送個性化、高品質的內容。曾登頂8個國家App Store工具榜，Google Play總下載量近1億，在全球擁有海量用戶。'],
                star: 0,
                tags: [],
                link: 'http://m.liebao.cn/?f=cmcn',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '',
                name: 'Battery Doctor',
                slog: '',
                icon: '/dist/images/brandnew-logo-bd-103.png',
                descForIndex: [],
                descForProd: ['全球專業的電池保養和電量管理軟體，能輕鬆延長手機續航時間；科學用電、延長電池壽命。覆蓋全球200多個國家和地區，曾霸榜Google Play 26個國家工具榜，在133個國家App Store工具榜登頂，Google Play下載量超1億。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-tw/battery-doctor/',
                target: '_blank',
                pict: ''
              }
            ]
          },
          socl: {
            name: '社交',
            hash: 'social',
            anch: 'category-of-social',
            desc: ['成功出海歐美的社交產品，跨越文化壁壘，', '連接全球用戶，佈局海外直播市場，建立內容生態體系'],
            data: [
              {
                priority: '',
                name: 'Live.me',
                slog: '',
                icon: '/dist/images/brandnew-logo-liveme-103.png',
                descForIndex: ['一款風靡全球的直播類社交應用，繼工具產品之後，《Live.me》成為獵豹移動出海的新標竿。內含禮物打賞、主播連線、遊戲直播等功能，並在後台監測系統中引入人工智慧技術，不僅為用戶提供個性化的直播和社交內容，也確保了平台的「綠色」與健康。將中國的直播打賞模式複製到海外，已經成為全球年輕人最喜愛的社交產品之一。目前已在85個國家和地區發行，覆蓋8種不同語言。登頂全球42個國家Google Play社交暢銷榜'],
                descForProd: ['一款風靡全球的直播類社交應用。將中國的直播打賞模式複製到海外，吸引了眾多明星及大牌網紅入駐，已經成為美國年輕人最喜愛的社交產品之一。覆蓋85個國家，8種語言，登頂全球42個國家Google Play社交暢銷榜。'],
                star: 0,
                tags: ['85個市場|覆蓋多元文化', '8種語言|融合本地需求', '42個國家|登頂社交暢銷榜'],
                link: 'http://www.liveme.com/',
                target: '_blank',
                pict: ''
              }
            ]
          },
          game: {
            name: '遊戲',
            hash: 'games',
            anch: 'category-of-game',
            desc: ['獵豹移動手遊產品在全球月活躍使用者超過1億，', '是iOS和Google Play月度手遊下載榜Top10頻繁上榜的開發商'],
            data: [
              {
                priority: '50-100',
                name: '鋼琴塊2',
                slog: '',
                icon: '/dist/images/brandnew-logo-pt2-103.png',
                descForIndex: ['風靡全球、坐擁六億玩家的音樂類輕遊戲；全新的滑塊玩法、豐富的賽制模式。2016年高居iOS和Google Play雙平台音樂休閒遊戲類全球下載量榜單前列'],
                descForProd: ['一款風靡全球、坐擁9億玩家的音樂類輕遊戲，讓人人都能彈鋼琴。急速節奏，不斷挑戰手速極限；音樂風格多樣、海量歌曲不斷更新；完美音質，如同置身鋼琴演奏會；參與排行，與全球玩家一較高低。2016年高居iOS和Google Play雙平台音樂休閒遊戲類全球下載量榜單前列。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-tw/piano-tiles/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50-50',
                name: '滾動的天空',
                slog: '',
                icon: '/dist/images/brandnew-logo-rolling-sky.png',
                descForIndex: ['挑戰速度和反應力極限的輕遊戲；3D立體視覺、多樣的遊戲場景，讓你操控小球去征服世界。現累績下載已超2.4億，被評為Google Play 2016最佳遊戲之一'],
                descForProd: ['一款挑戰速度和反應力極限的輕遊戲，華麗的3D特效場景，在山丘、宇宙、森林等場景中，感受充滿想像力的陷阱和障礙物，讓你操控小球征服世界。現累計下載已超2.4億，被評為Google Play 2016最佳遊戲之一。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-tw/rolling-sky/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: '跳舞的線',
                slog: '',
                icon: '/dist/images/brandnew-game-bg-dl-icon.png',
                descForIndex: ['音樂類輕遊戲，特色原創音軌，伴你衝破重重關卡；長期霸榜美國等115個國家音樂遊戲榜'],
                descForProd: ['原創音樂節奏類輕遊戲。獨一無二的遊戲場景，帶你穿越沙漠、遍覽四季、漫步田野；雷鬼、電音、古典等多種風格音樂，伴你衝破重重艱險阻礙；探索無限未知，打造與眾不同的遊戲體驗。長期被Google Play、Apple Store編輯推薦，Apple Store和Google Play雙平台評分4.8（滿分5分），權威遊戲媒體及分發平台TapTap評分9.7分，長期霸榜美國等115個國家音樂遊戲榜。'],
                star: 0,
                tags: [],
                link: 'http://board.cmcm.com/dl/transfer.html',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: '弓箭手大作戰',
                slog: '',
                icon: '/dist/images/brandnew-logo-arrow-io.png',
                descForIndex: ['真人對戰io遊戲，用弓箭征服世界；獲2016阿里巴巴新晉熱門遊戲獎'],
                descForProd: ['一款全新玩法的真人對戰io遊戲。通過虛擬搖桿控制走位，利用手中的弓箭擊敗對手；上百種技能組合，遊戲永遠充滿變數；豐富的圖元人偶風格選擇，多人即時對戰，讓你的手指停不下來。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.cmcm.arrowio',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: '深海水族館',
                slog: '',
                icon: '/dist/images/brandnew-logo-shszg.png',
                descForIndex: [],
                descForProd: ['一款風靡全球的養魚遊戲，在遊戲中收集成百上千的魚兒，讓你創造自己的水族館。簡單的操作、絕美的圖片、美妙的背景音樂，更有虛擬實境模式，讓你的身心得到徹底放鬆與治癒。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.idleif.abyssrium',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: '點點衝刺',
                slog: '',
                icon: '/dist/images/brandnew-logo-ddcc.png',
                descForIndex: [],
                descForProd: ['一款考驗反應能力的奔跑類街機手遊。畫風極具簡約風格，玩法操作簡單，潛移默化地提升用戶反應能力和手速。曾霸榜多個國家Google Play遊戲下載榜，獲得Google Play千次以上編輯推薦。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.secondarm.taptapdash',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      pc: {
        categoryName: 'PC端',
        categoryLink: 'forpc',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          pc: {/* When no sub category, using the same name & hash as its father!*/
            name: 'PC',
            hash: 'forpc',
            anch: 'category-of-pc',
            desc: '',
            data: [
              {
                priority: '',
                name: 'CM Browser',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: [],
                descForProd: ['廣受歡迎的雙核安全瀏覽器，基於Chromium內核超過100項改進，啟動速度提升30%；智慧防卡死，全面相容HTML5，充滿藝術氣息的視覺方案；首創BIPS雲安全體系，攔截惡意網址，全面攔截來自Web的安全威脅。'],
                star: 0,
                tags: [],
                link: 'https://www.liebao.cn',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: '金山毒霸',
                slog: '',
                icon: '/dist/images/brandnew-logo-duba.png',
                descForIndex: [],
                descForProd: ['集殺毒、系統管理為一體的安全軟體。18年專業累積、20次通過VB100認證、多次通過AV-Comparatives、AV-Test認證，具備藍芯引擎，與雲安全無縫結合，使用微特徵識別技術通殺未知木馬。'],
                star: 0,
                tags: [],
                link: 'http://www.duba.net',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: '驅動精靈',
                slog: '',
                icon: '/dist/images/brandnew-logo-qdjl-103.png',
                descForIndex: [],
                descForProd: ['中國知名電腦驅動程式管理軟體，基於十餘年的專業資料積累，硬體設備識別率高達98.3%，其中網卡的識別率高達99.9%，為數億用戶解決各種電腦驅動問題、系統故障，實為裝機必備。'],
                star: 0,
                tags: [],
                link: 'http://www.drivergenius.com',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      ai: {
        categoryName: '人工智慧',
        categoryLink: 'ai',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          ai: {/* When no sub category, using the same name & hash as its father!*/
            name: '人工智慧',
            hash: 'ai',
            anch: 'category-of-ai',
            desc: ['旗下人工智慧公司獵戶星空在遠場語音交互系統、圖像識別、', '視覺導航等領域，擁有完全自主開發、領先行業的技術'],
            data: [
              {
                priority: '',
                name: '獵戶星空',
                slog: '',
                icon: '/dist/images/brandnew-logo-orion-200.png',
                descForIndex: [],
                descForProd: ['獵豹移動構建AI技術平台，為產品賦能，完善了工具產品矩陣，也為內容產品帶來增長。旗下獵戶星空在智慧語音交互系統、圖像識別、視覺導航等技術上領跑行業；2017年在微軟百萬名人識別競賽（LFW）中，奪得子命題有限制類第一名。'],
                star: 0,
                tags: [],
                link: 'http://ainirobot.com/',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: '智慧語音OS',
                slog: '',
                icon: '',
                descForIndex: ['旗下人工智慧公司獵戶星空自主開發的「全鏈路遠場智慧語音交互系統」，其麥克風陣列、語音喚醒、語音辨識、語義理解、語音合成等軟硬體技術均處於行業領先水準。所有技術均屬自主智慧財產權，與產品體驗設計深度融合，極致打磨。首創多種自然擬人的交互技術，打造出人性化的語音交互體驗'],
                descForProd: [], // This product shows on index only!
                star: 0,
                tags: [
                  {num: 5, adj: '大',  noun: '語音技術', sentence: '全鏈路自主研發'},
                  {num: 6, adj: '項',  noun: '創新技術', sentence: '人性化的交流'},
                  {num: 1, adj: '億+', noun: '音訊內容', sentence: '為使用者深度定制'}
                ],
                link: 'http://ainirobot.com/pc_liehu.html',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      bigData: {
        categoryName: '大數據',
        categoryLink: 'bigdata',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          bigData: {
            name: '大數據',
            hash: 'bigdata',
            anch: 'category-of-bigdata',
            desc: '',
            data: [
              {
                priority: '',
                name: 'Cheetah Data',
                slog: '',
                icon: '/dist/images/cheetah-data-logo.png',
                descForIndex: [],
                descForProd: ['以旗下產品海量資料為基礎，覆蓋200多個國家地區、6億使用者，提供安卓App各項指標，洞察用戶畫像。旗下擁有移動互聯網研究機構「獵豹全球智庫」。定期發佈移動互聯網研究、諮詢報告。'],
                star: 0,
                tags: [],
                link: 'http://data.cmcm.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      business: {
        categoryName: '商業',
        categoryLink: 'business',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          business: {/* When no sub category, using the same name & hash as its father!*/
            name: '商業',
            hash: 'business',
            anch: 'category-of-business',
            desc: '',
            data: [
              {
                priority: '',
                name: 'Cheetah Ads',
                slog: '',
                icon: '/dist/images/brandnew-logo-a-d-s-500.png',
                descForIndex: [],
                descForProd: ['全新升級的商業品牌，基於全球近6億月活用戶，涵蓋移動及PC端業務，憑藉大資料及人工智慧等先進技術，為廣告主提供更加精准、智慧、個性化的服務。讓廣告不再打擾、而是打動用戶；讓智趣未來，迎面而來。'],
                star: 0,
                tags: [],
                link: 'http://ads.cmcm.com/zh-tw/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      }
    } // category
  }
};
