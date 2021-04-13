import React, { useState, useEffect } from 'react'
import championsData from '../../data/champions'



function Champions2() {
    const championsList = championsData.Champions.map(champion =>
        <>
            <img className='' onClick={handleClick} src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
        </>
    )

    function handleClick(event) {
        const redBans = document.getElementById('redBans')
        const redPicks = document.getElementById('redPicks')
        const blueBans = document.getElementById('blueBans')
        const bluePicks = document.getElementById('bluePicks')


      
        const pic = document.createElement('img')
        pic.setAttribute('src', event.target.src)

        if(redBans.childNodes.length === 0)
        {
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 0)
        {
            blueBans.appendChild(pic)
        }
        else if (redBans.childNodes.length === 1)
        {
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 1)
        {
            blueBans.appendChild(pic)
        }
        else if (redBans.childNodes.length === 2)
        {
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 2)
        {
            blueBans.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 0)
        {
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 0)
        {
            bluePicks.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 1)
        {
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 1)
        {
            bluePicks.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 2)
        {
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 2)
        {
            bluePicks.appendChild(pic)
        }
        else if (redBans.childNodes.length === 3)
        {
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 3)
        {
            blueBans.appendChild(pic)
        }
        else if (redBans.childNodes.length === 4)
        {
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 4)
        {
            blueBans.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 3)
        {
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 3)
        {
            bluePicks.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 4)
        {
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 4)
        {
            bluePicks.appendChild(pic)
        }
        
        





    }

    const [champions, setList] = useState(championsList)

    return <>
        <div className='flex-auto w-3/12'>
            <h1 className='pt-2 pb-2 pl-10 bg-red-600 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Red Side  </h1>
            <h1 className='pt-2 pb-2 pl-10 bg-red-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Bans  </h1>
            <div className = 'flex flex-wrap' id = "redBans">

            </div>
            <h1 className='pt-2 pb-2 pl-10 bg-red-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Picks  </h1>
            <div className = 'flex flex-wrap'  id = "redPicks">

            </div>
        </div>
        <div className='flex-auto w-6/12 contents-center'>
            <h1 className='pt-2 pb-2 pl-10 bg-red-400 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Champions </h1>
            <div className='flex flex-auto flex-wrap justify-center'>

                {champions}

            </div>
        </div>
        <div className='flex-auto w-3/12'>
            <h1 className='pt-2 pb-2 pl-10 bg-blue-600 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Blue Side  </h1>
            <h1 className='pt-2 pb-2 pl-10 bg-blue-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Bans  </h1>
            <div className = 'flex flex-wrap' id="blueBans">

            </div>
            <h1 className='pt-2 pb-2 pl-10 bg-blue-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Picks  </h1>
            <div className = 'flex flex-wrap' id="bluePicks">

            </div>
        </div>
    </>
}

export default Champions2
