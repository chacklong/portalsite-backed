module.exports = (strapi)=>{
    const router = strapi.router;

    router.get('/dashboard',async(ctx) =>{
        ctx.body = 'hello from dashboard';
    });
    return router;
}