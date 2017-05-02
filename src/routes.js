export default{
    '/': {
        name:'main',
        component: require('./components/Main/Index'),
        subRoutes: {
            '/':{ //默认
                component: require('./components/Home/Index.vue'),
            },
        }


    },

    
    // '/': {
    //   component: require('./views/home')
    // },
    // '/login': {
    //   name:'login',
    //   component: require('./views/Login')
    // },
    // '/modify':{
    //   component:require('./views/ModifyUserInfo')
    // },
    // '/password':{
    //   component:require('./views/ModifyPassword')
    // },

}
