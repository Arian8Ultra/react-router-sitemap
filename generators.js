/* eslint-disable @typescript-eslint/ban-ts-comment */
// generate robots.txt
// @ts-nocheck

const generateRobots = () => {
    const robots = `User-agent: *
    Disallow: /`;
    return robots;
};


export const generateSitemap = (router,url) => {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?> \n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> \n`;
    function addToSitemap(route, parent) {
        if(route.children) {
            route.children.forEach(child => {
                console.log(child);
                addToSitemap(child, route.path);
            });
        }else{
            sitemap += `<url> \n`;
            if(parent) sitemap += `<loc>${url}/${parent}/${route.path}</loc> \n`;
            else sitemap += `<loc>${url}${route.path}</loc> \n`;
            sitemap += `<lastmod>${new Date().toISOString()}</lastmod> \n`;
            sitemap += `<changefreq>daily</changefreq> \n`;
            sitemap += `<priority>0.7</priority> \n`;
            sitemap += `</url> \n`;
        }
    }

    router.forEach(route => {
        addToSitemap(route);
    });

    sitemap += `</urlset>`;
    return sitemap;
}
