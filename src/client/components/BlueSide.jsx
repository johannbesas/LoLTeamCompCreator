import React from 'react'

function BlueSide() {
    return <>
        <div className='flex-auto'>
            <h1 className='pt-2 pb-2 pl-10 bg-blue-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Blue Side  </h1>
            <h1 className='pt-2 pb-2 pl-10 bg-blue-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Bans  </h1>
            <div id="blueBans">
                
            </div>
            <h1 className='pt-2 pb-2 pl-10 bg-blue-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Picks  </h1>
            <div id = "bluePicks">

            </div>
        </div>
    </>
}

export default BlueSide
