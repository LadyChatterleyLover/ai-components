// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Layout from '../pages/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/backTop',
        name: 'backTop',
        component: () => import('../pages/backTop/BackTop.vue'),
        meta: {
          title: '回到顶部'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login/Login.vue'),
        meta: {
          title: '登录'
        }
      },
      {
        path: '/imagePreview',
        name: 'imagePreview',
        component: () => import('../pages/imagePreview/ImagePreview.vue'),
        meta: {
          title: '图片预览'
        }
      },
      {
        path: '/tag',
        name: 'tag',
        component: () => import('../pages/tag/Tag.vue'),
        meta: {
          title: '标签选择器'
        }
      },
      {
        path: '/lock',
        name: 'lock',
        component: () => import('../pages/lock/Lock.vue'),
        meta: {
          title: '锁屏'
        }
      },
      {
        path: '/fullScreen',
        name: 'fullScreen',
        component: () => import('../pages/fullScreen/FullScreen.vue'),
        meta: {
          title: '全屏'
        }
      },
      {
        path: '/progress',
        name: 'progress',
        component: () => import('../pages/aiProgress/AiProgress'),
        meta: {
          title: '进度条'
        }
      },
      {
        path: '/trend',
        name: 'trend',
        component: () => import('../pages/trend/Trend.vue'),
        meta: {
          title: '趋势'
        }
      },
      {
        path: '/noticeIcon',
        name: 'noticeIcon',
        component: () => import('../pages/noticeIcon/NoticeIcon'),
        meta: {
          title: '通知图标'
        }
      },
      {
        path: '/footToolBar',
        name: 'footToolBar',
        component: () => import('../pages/footToolBar/FootToolBar'),
        meta: {
          title: '底部工具类'
        }
      },
      {
        path: '/dialog',
        name: 'dialog',
        component: () => import('../pages/dialog/Dialog.vue'),
        meta: {
          title: '可拖拽dialog'
        }
      },
      {
        path: '/inlineTable',
        name: 'inlineTable',
        component: () => import('../pages/inlineTable/InlineTable.vue'),
        meta: {
          title: '行内可编辑表格'
        }
      },
      {
        path: '/editTable',
        name: 'editTable',
        component: () => import('../pages/editTable/editTable.vue'),
        meta: {
          title: '单元格可编辑表格'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../pages/404/404.vue'),
        meta: {
          title: '404错误'
        }
      },
      {
        path: '/403',
        name: '403',
        component: () => import('../pages/403/403.vue'),
        meta: {
          title: '403错误'
        }
      },
      {
        path: '/500',
        name: '500',
        component: () => import('../pages/500/500.vue'),
        meta: {
          title: '500错误'
        }
      },
    ]
  },
  {
    path: '/lockView',
    name: 'lockView',
    component: () => import('../pages/lockView/LockView'),
    meta: {
      title: '锁屏'
    }
  },
  {
    path: '*',
    component: () => import('../pages/404/404.vue'),
    meta: {
      title: '出错啦'
    }
  }
]

const isPro = process.env.NODE_ENV === 'production'
const router = new VueRouter({
  mode: isPro ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let isLock = sessionStorage.getItem('isLock')
  if (isLock !== '0' || to.path ==='/lockView') next()
  else next('/lockView')
})

export default router
