import newsContent from '@/components/page/newsContent'

const routerConfig = [
  {path:"/",redirect:"/newsContent"},
  {path:"/newsContent",name:"home",component:newsContent},

]
;

export default routerConfig;
