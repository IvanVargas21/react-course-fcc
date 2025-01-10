import React from 'react'

const Card = ({userName="ICV", post="Front-End Engineer"}) => {
    // console.log(props)
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/5935788/pexels-photo-5935788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
                <div className="pt-6 text-center space-y-4">
                    <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, eaque!
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className='text-sky-500 dark:text-sky-400'>
                       {userName}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {post}, Algolia
                    </div>
                    </figcaption>
                </div>
            </figure>

        </div>
    )
}

export default Card