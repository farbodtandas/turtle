import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {settle} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer/'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    
    


    .cry{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        margin-bottom: 110px;
        z-index: -1;
        transform: rotate(90deg);
    }
    .footer {
        display: flex;
        flex-direction: column;
        
        
    }
    
`

export default function redintro(){

    const [heightstate, setheightstate] = useState(false)
    const [opacitystate, setopacitystate] = useState(false)
    const [rightstate, setrightstate] = useState(false)
    


    const Handleclick = () =>{
        setheightstate(!heightstate)
        setopacitystate(!opacitystate)
       
    }

    console.log("heightstate", heightstate)
    console.log("opacitystate", opacitystate)
    console.log("rightstate", rightstate)
    return <RedCont>
            <div className="header">
                <HeaderUI
                arrowrotation="rotate(225deg)"
                text1="Shelly was caught in the net and "
                text2="thrown back in the sea, injured."
                text3=""
                text4="The Facts"
                text5="	Bycatch is a huge issue for the poor turtles and some organizations have been promoting circle hooks which rather than Jshaped hooks allowing the turtles to be freed with ease"
                number="7-f"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={settle}>
                <Image
                    alt="open water"
                    src="/backgrounds/settle.png"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="cry img" 
                    src="/drawings/_grn-cry.png"
                    alt="turtle"
                    layout="responsive"
                    width={330}
                    height={300}
                />
            <div className="footer">
                <FooterUI 
                    routea="/yellow3I"
                    routeb="/yellow3L"
                />
            </div>
    </RedCont>
}