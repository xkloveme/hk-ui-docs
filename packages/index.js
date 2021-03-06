import HkCountup from './hk-countup'
import HkEditor from './hk-editor'
import HkSearch from './hk-search'
import HkForm from './hk-form'
import HkButton from './hk-button'
import HkScrollList from './hk-scroll-list'
import HkPagination from './hk-pagination'
import HkBreadcrumb from './hk-breadcrumb'
import HkTable from './hk-table'
import hkTableToolbar from './hk-table-toolbar'
import HkUpload from './hk-upload'
import HkMap from './hk-map'

export const install = Vue => {
  Vue.component(HkCountup.name, HkCountup)
  Vue.component(HkEditor.name, HkEditor)
  Vue.component(HkForm.name, HkForm)
  Vue.component(HkSearch.name, HkSearch)
  Vue.component(HkButton.name, HkButton)
  Vue.component(HkScrollList.name, HkScrollList)
  Vue.component(HkPagination.name, HkPagination)
  Vue.component(HkBreadcrumb.name, HkBreadcrumb)
  Vue.component(HkTable.name, HkTable)
  Vue.component(hkTableToolbar.name, hkTableToolbar)
  Vue.component(HkUpload.name, HkUpload)
  Vue.component(HkMap.name, HkMap)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  HkCountup,
  HkEditor,
  HkForm,
  HkSearch,
  HkScrollList,
  HkPagination,
  HkBreadcrumb,
  HkTable,
  hkTableToolbar,
  HkUpload,
  HkButton,
  HkMap
}

export default { install }
