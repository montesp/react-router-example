import { useState } from "react";

const data = [
  {
    title: '¿Que es React?',
    slug: 'que-es-react',
    content: 'React es el mejor framework de Javascript',
    author: 'juandc',
  },
  {
    title: '¿Que es Vue?',
    slug: 'que-es-vue',
    content: 'Vue es el mejor framework de Javascript',
    author: 'scrodingerPie',
  },
  {
    title: '¿Que es Angular?',
    slug: 'que-es-angular',
    content: 'Angular es el mejor framework de Javascript',
    author: 'montep',
  }
];

function useBlogData(){
  const [blogData, setBlogData] = useState(data);
  const addBlogData = (newData) => {
     setBlogData([{
       ...blogData,
       newData,
     }])
  }
  return { blogData }
}

export { useBlogData, data };