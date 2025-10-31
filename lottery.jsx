import { useState } from "react"
import { genTicket , sum } from "./helper"
// import "./lottry.css"
import Ticket from "./Ticket"

export default function Lottry({n,winningSum}){
    let [ticket,setticket]=useState(genTicket(n))
    let isWinning=sum(ticket)==winningSum

    let buyTicket=()=>{
        setticket(genTicket(n))
    }

    return (
        <div>
            <h1>Lottery Game!!</h1>
           <Ticket ticket={ticket}></Ticket>
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <br />
            <h3>{isWinning && "Congratulation You Win !!!"}</h3>
        </div>
    )
}