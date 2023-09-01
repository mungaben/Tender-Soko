



import React from 'react'
// get params from slug


import {client} from "@/sanity/lib/client"

type Pageslugprops={
    slug:string
}

const page = async({params}:{ params:{slug:string}}) => {
    console.log(params.slug);
    const category = params.slug;



const ngosInCategoryInTenders = await client
  .fetch('*[_type == "tender" && sector == $category]', {category});



  console.log(ngosInCategoryInTenders);
  


  return (
    <div>
      tenders
    </div>
  )
}

export default page
