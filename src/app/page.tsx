import React from 'react'

    const page = () => {
        return(
           <div><figure className="bg-red-200 rounded-xl p-8 dark:bg-slate-800">
           <img className="w-24 h-24 rounded-full mx-auto" src="/aima pic.jpeg" alt="" width="384" height="512"/>
           <div className="pt-6 text space-y-4">
             <blockquote>
               <p className="text-lg font-medium">
                 “Tailwind CSS is the only framework that I've seen scale
                 on large teams. It’s easy to customize, adapts to any design.
                 I am a programmer of Generative AI field in Mantech."
                
               </p>
             </blockquote>
             <figcaption className="font-medium">
               <div className="text-sky-500 dark:text-sky-400">
                 Aima Iftikhar
               </div>
               <div className="text-slate-700 dark:text-slate-500">
                 Staff Programmer, Company
               </div>
             </figcaption>
           </div>
         </figure></div>
        )
      }

    export default page