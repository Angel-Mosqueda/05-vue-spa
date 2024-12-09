import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const isAutheticatedGuard =(to: RouteLocationNormalized, from: RouteLocationNormalized, next:NavigationGuardNext)=>{

    const userId = localStorage.getItem('userId');
    // console.log(to.path);
    

    localStorage.setItem('lastPath',to.path);

    if(!userId){
        return next({
            name:'login'
        });
    }

    return next();
}

export default isAutheticatedGuard;