import React from 'react'

function RedSide() {
    return <>
        <div className='flex-auto'>
            <h1 className='pt-2 pb-2 pl-10 bg-red-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Red Side  </h1>
            <h1 className='pt-2 pb-2 pl-10 bg-red-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Bans  </h1>
            <div id = "redBans">

            </div>
            <h1 className='pt-2 pb-2 pl-10 bg-red-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Picks  </h1>
            <div id = "redPicks">

            </div>
        </div>
    </>
}

export default RedSide
