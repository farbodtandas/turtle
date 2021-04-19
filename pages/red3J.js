import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import HamburgerMenuUI from '../comps/Header/HamburgerMenuUI'
import Image from 'next/image'
import {deserted} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer/'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    


    .dream{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: -30px;
        margin-left: 45px;
        margin-bottom: 245px;
        z-index: -1;
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
    

    // Hamburger back states
    
    
    //
    const Handleclick = () =>{
        setheightstate(!heightstate)
        setopacitystate(!opacitystate)
       
    }
    const HandleHamClick = () =>{
        setopacitystate(!opacitystate)
        setrightstate(!rightstate)
        
    }
    // const HandleHambackClick = () =>{
    //     setleftstate(leftstate)
        
    // }

    console.log("heightstate", heightstate)
    console.log("opacitystate", opacitystate)
    console.log("rightstate", rightstate)
    return <RedCont>
            <div className="header">
                <HeaderUI
                arrowrotation="rotate(225deg)"
                text1="Shelly reaches a reef away from "
                text2="the fisherman, only to find it  "
                text3="barren and deserted."
                text4="The Facts"
                text5="	Bycatching of these turtles is such big problem that many wildlife organization recognizes it as a main reason for their endangered status. The tropical climates these beautiful animals reside in is some of the most overfished areas with loose laws around the topic."
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
                onHamClick={HandleHamClick}
               
                >
                </HeaderUI>
            </div>
                <HamburgerMenuUI 
                    arrowrotation="rotate(-45deg)"
                    arrowrotationC="rotate(225deg)"
                    width="280px"
                    height="610px"
                    z-index="0"
                    opacity={opacitystate ? 1 : 0}
                    right={rightstate ? 95 : 375}
                    
                    
                        
                />
            <div className={deserted}>
                <Image
                    alt="open water"
                    src="/backgrounds/deserted.png"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="dream img" 
                    src="/drawings/_grn-dream.png"
                    alt="turtle"
                    layout="responsive"
                    width={192}
                    height={195}
                />
            <div className="footer">
                <FooterUI />
            </div>
    </RedCont>
}