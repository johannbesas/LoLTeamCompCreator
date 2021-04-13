import React, { useState, useEffect } from 'react'
import championsData from '../../data/champions'



function Champions2() {
    const championsList = championsData.Champions.map(champion =>
        <>
            <img className='' onClick={handleClick} src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
        </>
    )

    
    const [champions, setList] = useState(championsList)



    function reverseClick(event) { 
        
        const redBans = document.getElementById('redBans')
        const redPicks = document.getElementById('redPicks')
        const blueBans = document.getElementById('blueBans')
        const bluePicks = document.getElementById('bluePicks')
        const champions = document.getElementById('champions')
        // redBans.removeChild(event.target)
        console.log('hi')
    }

    function handleClick(event) {
    
        const redBans = document.getElementById('redBans')
        const redPicks = document.getElementById('redPicks')
        const blueBans = document.getElementById('blueBans')
        const bluePicks = document.getElementById('bluePicks')
        const champions = document.getElementById('champions')

        const pic = document.createElement('img')
        pic.setAttribute('src', event.target.src)
        pic.onclick = reverseClick

        if(redBans.childNodes.length === 0)
        {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 0)
        {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redBans.childNodes.length === 1)
        {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 1)
        {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redBans.childNodes.length === 2)
        {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 2)
        {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 0)
        {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 0)
        {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 1)
        {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 1)
        {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 2)
        {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 2)
        {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
        else if (redBans.childNodes.length === 3)
        {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 3)
        {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redBans.childNodes.length === 4)
        {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 4)
        {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 3)
        {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 3)
        {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 4)
        {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 4)
        {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
    }

    return <>
        <div className='flex-auto w-3/12'>
            <div className='pt-2 pb-2 pl-10 bg-red-600 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Red Side
            <input type='text' className = 'ml-10 text-black' />         
                            </div>
            <h1 className='pt-2 pb-2 pl-10 bg-red-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Bans  </h1>
            <div className = 'flex flex-wrap h-32' id = "redBans">
            </div>
            <h1 className='pt-2 pb-2 pl-10 bg-red-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Picks  </h1>
            <div className = 'flex flex-wrap h-32'  id = "redPicks">

            </div>
        </div>
        <div className='flex-auto w-6/12 contents-center'>
            <h1 className='pt-2 pb-2 pl-10 bg-red-400 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Champions </h1>
            <div id ='champions' className='flex flex-auto flex-wrap justify-center'>
                {champions}
            </div>
        </div>
        <div className='flex-auto w-3/12'>
            <div className='pt-2 pb-2 pl-10 bg-blue-600 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Blue Side
            <input type='text' className = 'ml-10 text-black' />         
                            </div>
            <h1 className='pt-2 pb-2 pl-10 bg-blue-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Bans  </h1>
            <div className = 'flex flex-wrap h-32' id="blueBans">

            </div>
            <h1 className='pt-2 pb-2 pl-10 bg-blue-500 text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Picks  </h1>
            <div className = 'flex flex-wrap h-32' id="bluePicks">

            </div>
        </div>
    </>
}

export default Champions2
