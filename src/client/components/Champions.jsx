import React, { useState, useEffect } from 'react'
import championsData from '../../data/champions'



function Champions() {
    const championsList = championsData.Champions.map(champion =>
        <>
            <img className='' onClick={handleClick} src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
        </>
    )
    
    function handleClick(event) {
        const target = document.getElementById('redbans')
        const pic = document.createElement('img')
        pic.setAttribute('src',  event.target.src)
        target.appendChild(pic)
    }

    const [champions, setList] = useState( championsList )

    return <>
        <div className='flex-auto w-6/12 contents-center'>
            <h1 className='pt-2 pb-2 pl-10 bg-red-400 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Champions </h1>
            <div className='flex flex-auto flex-wrap justify-center'>

                {champions}

            </div>
            <div id='redbans'>
                red bans
            </div>
        </div>
    </>
}

export default Champions
