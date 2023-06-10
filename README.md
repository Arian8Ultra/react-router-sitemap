# react-router-sitemap
this js code will return a sitemap for 	**react router 6+** 
**Bonus** : you can also generate a robot.tsx file with this generator

## generateSitemap :
for this function you just need to pass it your **router.routes** and **url** as parameter and this will return a string which is in the format of an xml file and you can use it however you want
### code example:
```
import { router } from "../../Routes/Router"; //import your router object   ***React Router 6+***`

const handleClick = (e: any) => {
  // downlaod sitemap.xml
  const sitemap = generateSitemap(router.routes,'url'); // generate site map for your router

  // make a link to download the site map
  const element = document.createElement("a");
  const file = new Blob([sitemap], {
    type: "text/plain;charset=utf-8",
  });
  
  element.href = URL.createObjectURL(file);
  element.download = "sitemap.xml";
  document.body.appendChild(element);
  element.click();
};
```

###syntax:
generateSitemap( router.routes , 'your url')


## generateRobots :
you just to need to call this function to get the base of robot.txt file as a string
