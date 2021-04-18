import React, { useState, useEffect } from 'react'
import championsData from '../../data/champions'



function Champions() {
    const championsList = championsData.Champions.map(champion =>
        <>
            <img className='h-10 sm:h-16 md:h-26 lg:h-32' onClick={handleClick} src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
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
        pic.setAttribute('class', 'h-16')
        pic.onclick = reverseClick

        if (redBans.childNodes.length === 0) {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 0) {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redBans.childNodes.length === 1) {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 1) {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redBans.childNodes.length === 2) {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 2) {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 0) {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 0) {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 1) {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 1) {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 2) {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 2) {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
        else if (redBans.childNodes.length === 3) {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 3) {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redBans.childNodes.length === 4) {
            champions.removeChild(event.target)
            redBans.appendChild(pic)
        }
        else if (blueBans.childNodes.length === 4) {
            champions.removeChild(event.target)
            blueBans.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 3) {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 3) {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
        else if (redPicks.childNodes.length === 4) {
            champions.removeChild(event.target)
            redPicks.appendChild(pic)
        }
        else if (bluePicks.childNodes.length === 4) {
            champions.removeChild(event.target)
            bluePicks.appendChild(pic)
        }
    }

    return <>
        <div className='flex flex-wrap text-white'>
            <div className='flex-auto w-4/12 bg-gray-800'>
                <div className='pt-2 pb-2 bg-gradient-to-r from-red-500 to-transparent
                            sm: text-sm pl-2
                            md: text-md pl-4
                            lg: text-xl pl-10
                            xl: text-3xl pl-10'>Red Side
                            <input type='text' className='bg-gray-700 ml-2 w-20 text-sm
                            sm: 
                            md: w-26 ml-2
                            lg: w-26 ml-6
                            xl: text-3xl w-56 ml-10' />
                </div>
                <h1 className='pt-2 pb-2 bg-gradient-to-r from-red-500 to-transparent		
                            sm: text-sm pl-2
                            md: text-md pl-4
                            lg: text-lg pl-10'> Bans  </h1>
                <div className='flex flex-wrap h-32' id="redBans">
                </div>
                <h1 className='pt-2 pb-2 pl-10
                            bg-gradient-to-r from-red-500 to-transparent
                            sm: pl-2	
                            md: pl-4
                            lg: pl-10'> Picks  </h1>
                <div className='flex flex-wrap h-32' id="redPicks">
                </div>
            </div>
            <div className='flex-auto w-4/12 justify-center bg-gray-800'>
                <div className='pt-2 pb-2
                            bg-gradient-to-r
                            text-white text-center	
                            xl:text-3xl
                            lg:text-xl
                            md:text-md'>Notes
                </div>
                <form className='flex flex-auto flex-wrap h-5/6 justify-center'>
                    <textarea type='text' className='h-4/6 w-11/12 bg-gray-700 text-white rounded-md resize-none	' />
                    <input type='submit' className='w-3/12 h-8 text-sm bg-gray-700 text-white rounded-md' value="Submit" />
                </form>
            </div>

            <div className='flex-auto w-4/12 bg-gray-800'>
                <div className='pt-2 pb-2 pr-10 
                            bg-gradient-to-r from-transparent to-blue-500 
                            text-white text-right	
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'>
                    <input type='text' className='mr-10 bg-gray-700 sm:w-20 sm:mr-6 sm:text-sm' />Blue Side
                </div>
                <h1 className='pt-2 pb-2 pr-10 
                            bg-gradient-to-r from-transparent to-blue-500 
                            text-white text-right	
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Bans  </h1>
                <div className='flex flex-wrap h-32' id="blueBans">

                </div>
                <h1 className='pt-2 pb-2 pr-10 
                            bg-gradient-to-r from-transparent to-blue-500 
                            text-white text-right	
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'>
                    Picks </h1>
                <div className='flex flex-wrap h-32' id="bluePicks">
                </div>
            </div>

            <div className=' w-auto contents-center bg-gray-800'>
                <h1 className='pt-2 pb-2 pl-10 bg-gradient-to-r from-red-500 to-blue-500  text-white
                            xl:text-3xl
                            lg:text-xl
                            md:text-md
                            sm:text-sm'> Champions </h1>
                <div id='champions' className='pt-6 flex flex-wrap overflow-auto justify-center sm:h-1/6  md:h-3/6 lg:h-5/6'>
                    {champions}
                </div>
            </div>

        </div>
    </>
}

export default Champions
