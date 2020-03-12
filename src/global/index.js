import Vue from 'vue'
import countTo from 'vue-count-to'
import backTop from '../components/backTop/BackTop'
import dragDialog from '../components/dialog/Dialog'
import login from '../components/login/Login'
import phoneLogin from '../components/login/PhoneLogin'
import footToolBar from '../components/footToolBar/FootToolBar'
import tag from '../components/tag/Tag'
import selectTag from '../components/tag/SelectTag'
import aiProgress from '../components/aiProgress/AiProgress'
import imagePreview from '../components/imagePreview/ImagePreview'
import lock from '../components/lock/Lock'
import fullScreen from '../components/fullScreen/FullScreen'
import inlineTable from '../components/inlineTable/InlineTable'
import editTable from '../components/editTable/editTable'
import trend from '../components/trend/Trend'
import noticeIcon from '../components/noticeIcon/NoticeIcon'
import err from '../components/404/404'
import noAuth from '../components/403/403'
import serverErr from '../components/500/500'


Vue.component('countTo', countTo)
Vue.component('backTop', backTop)
Vue.component('tag', tag)
Vue.component('selectTag', selectTag)
Vue.component('lock', lock)
Vue.component('aiProgress', aiProgress)
Vue.component('imagePreview', imagePreview)
Vue.component('fullScreen', fullScreen)
Vue.component('login', login)
Vue.component('phoneLogin', phoneLogin)
Vue.component('dragDialog', dragDialog)
Vue.component('footToolBar', footToolBar)
Vue.component('inlineTable', inlineTable)
Vue.component('editTable', editTable)
Vue.component('trend', trend)
Vue.component('noticeIcon', noticeIcon)
Vue.component('err', err)
Vue.component('noAuth', noAuth)
Vue.component('serverErr', serverErr)
