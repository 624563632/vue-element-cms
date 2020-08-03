const Home = ()=>import('@/views/Home/Home.vue')
const Overview = ()=>import('@/views/Home/Overview.vue')
const Analyze = ()=>import('@/views/Home/Analyze.vue')

const Good = ()=>import('@/views/Good/Good.vue')
const Add = ()=>import('@/views/Good/Add.vue')
const List = ()=>import('@/views/Good/List.vue')
const QfAd = ()=>import('@/views/Ad/QfAd.vue')
const Chat = ()=>import('@/views/Chat/Chat.vue')

const Cate = ()=>import('@/views/Good/Cate.vue')

export default [
  {
    id: 1,
    path: '/home',
    comm: Home,
    title: '首页管理',
    icon: 'el-icon-location',
    children: [
      { id:11, path: '/home/overview', title: '概况', icon: 'el-icon-document', comm:Overview},
      { id:12, path: '/home/analyze', title: '统计', icon: 'el-icon-setting', comm:Analyze}
    ]
  },
  {
    id: 2,
    path:'/good',
    comm: Good,
    title: '商品管理',
    icon: 'el-icon-menu',
    children: [
      { id:21, path: '/good/add', title:'新增', icon: 'el-icon-table-lamp', comm:Add },
      { id:22, path: '/good/list', title:"列表", icon: 'el-icon-table-lamp', comm:List },
      { id:23, path: '/good/cate', title: '品类', icon: 'el-icon-table-lamp', comm: Cate }
    ]
  },
  {
    id: 3,
    path: '/ad',
    comm: QfAd,
    title: '广告中心',
    icon: 'el-icon-location'
  },
  {
    id: 4,
    path: '/chat',
    comm: Chat,
    title: '聊天室',
    icon: 'el-icon-location'
  }
]
