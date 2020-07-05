export default [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('views/home/Home.vue'),
      meta:{
        title:'主页',
      }
    },
    {
      path:'/test',
      name:'Test',
      component:()=>import('views/test/Test.vue'),
      meta:{
        title:'测试'
      }
    }
  ]