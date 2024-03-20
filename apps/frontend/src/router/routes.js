import { ROUTE_HOME, ROUTE_PAGE_NOT_FOUND, ROUTE_QUOTATION_DETAIL } from '../constants/index'

export const routes = [
  {
    path: '/',
    name: ROUTE_HOME,
    component: () => import(/* webpackChunkName: "home" */ '../pages/home/HomePage.vue')
  },
  {
    path: '/quotation/:id',
    name: ROUTE_QUOTATION_DETAIL,
    component: () => import(/* webpackChunkName: "quotationDetail" */ '../pages/quotation/QuotationDetail.vue')
  },
  {
    path: '/:catchAll(.*)*', // Unrecognized path automatically matches 404
    name: ROUTE_PAGE_NOT_FOUND,
    component: () => import(/* webpackChunkName: "PageNotFound" */ '../pages/notfound/NotFoundPage.vue')
  }
]
