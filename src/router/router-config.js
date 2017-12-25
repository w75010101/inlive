import newsList from '@/components/page/newsList'
import newsDetail from '@/components/page/newsDetail'

const routerConfig = [
  {path:"/newsList/:nowChannel",name:"newsList",component:newsList},
  {path:"/newsDetail",name:"newsDetail",component:newsDetail},
]
;

export default routerConfig;
