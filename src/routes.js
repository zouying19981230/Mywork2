const routes =[
    {path:"/",redirect:"/home"},
    {
        path:"/home",
        name:"home",
        component:()=>import("./view/home/index")
    },
    {
        path:"/blog",
        name:"blog",
        redirect:{name:"blogList"},
        component:()=>import("./view/blog/index"),
        children:[
            {
                path:"list",
                name:"blogList",
                component:()=>import("./view/blog/BlogList.vue"),
            },
            {
                path:"view/:id",
                name:"blogView",
                props:true,
                component:()=>import("./view/blog/BlogDetail.vue"),
            }
        ]
    },
    {
        path:"/shop",
        name:"shop",
        component:()=>import("./view/shopping/index.vue")
    },
    {
        path: "/question",
        name: "question",
        redirect: { name: "questionList" },
        component: () => import("./view/question/index"),
        children: [
            {
                path: "list",
                name: "questionList",
                component: () => import("./view/question/questionList.vue")
            },
            {
                path: "view/:id",
                name: "questionView",
                props: true,
                component: () => import("./view/question/questionDetails.vue")
            }
        ]
    },
    {
        path: "/personal",
        name: "personal",
        component: () => import("./view/personal/produce"),
        children: [
            {
                path: ":id",
                name: "personalDetails",
                props: true,
                component: () => import("./view/personal/personalDetails.vue")
            }
        ]
    }
];
export default routes;