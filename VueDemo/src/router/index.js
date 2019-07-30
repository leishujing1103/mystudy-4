import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home/Home"
import Study from "../pages/Study/Study"
import Account from "../pages/Account/Account"
import Search from '../pages/Search/Search'
import Category1 from '../pages/Category/Category1'
import CommonPage from '../pages/commonPage/CommonPage2'


Vue.use(Router)

export default new Router({
  routes: [{
    path: "/home",
    component: Home,
    // children: [
    //   // {path: '/', component: Category},
    //   {path: '/category1', component: Category}
    // ]
  }, {
    path: "/study",
    component: Study
  }, {
    path: "/account",
    component: Account
  }, {
    path: "/",
    redirect: "/home"
  },
    {
    path: "/search",
    component: Search
  },
    {
    path: "/category1",
    component: Category1
  },
  {
  path: "/commonPage2",
  component: CommonPage
}

//   {
//   path: "/category/:id",
//   component: Category
// }
  ]
})
