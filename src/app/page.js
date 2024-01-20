"use client"

import Card from "@/componets/card"
import PlayerDeck from "@/componets/playerdeck";
import { useEffect, useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false)

  const [DECK, setDECK] = useState([{
      id: "card1", 
      value: "-2",
      view: false,
    },{
      id: "card2", 
      value: "-2",
      view: false,
    },{
      id: "card3", 
      value: "-2",
      view: false,
    },{
      id: "card4", 
      value: "-2",
      view: false,
    },{
      id: "card5", 
      value: "-2",
      view: false,
    },{
      id: "card6", 
      value: "-1",
      view: false,
    },{
      id: "card7", 
      value: "-1",
      view: false,
    },{
      id: "card8", 
      value: "-1",
      view: false,
    },{
      id: "card9", 
      value: "-1",
      view: false,
    },{
      id: "card10", 
      value: "-1",
      view: false,
    },{
      id: "card11", 
      value: "-1",
      view: false,
    },{
      id: "card12", 
      value: "-1",
      view: false,
    },{
      id: "card13", 
      value: "-1",
      view: false,
    },{
      id: "card14", 
      value: "-1",
      view: false,
    },{
      id: "card15", 
      value: "-1",
      view: false,
    },{
      id: "card16", 
      value: "0",
      view: false,
    },{
      id: "card17", 
      value: "0",
      view: false,
    },{
      id: "card18", 
      value: "0",
      view: false,
    },{
      id: "card19", 
      value: "0",
      view: false,
    },{
      id: "card20", 
      value: "0",
      view: false,
    },{
      id: "card21", 
      value: "0",
      view: false,
    },{
      id: "card22", 
      value: "0",
      view: false,
    },{
      id: "card23", 
      value: "0",
      view: false,
    },{
      id: "card24", 
      value: "0",
      view: false,
    },{
      id: "card25", 
      value: "0",
      view: false,
    },{
      id: "card26", 
      value: "0",
      view: false,
    },{
      id: "card27", 
      value: "0",
      view: false,
    },{
      id: "card28", 
      value: "0",
      view: false,
    },{
      id: "card29", 
      value: "0",
      view: false,
    },{
      id: "card30", 
      value: "0",
      view: false,
    },{
      id: "card31", 
      value: "1",
      view: false,
    },{
      id: "card32", 
      value: "1",
      view: false,
    },{
      id: "card33", 
      value: "1",
      view: false,
    },{
      id: "card34", 
      value: "1",
      view: false,
    },{
      id: "card35", 
      value: "1",
      view: false,
    },{
      id: "card36", 
      value: "1",
      view: false,
    },{
      id: "card37", 
      value: "1",
      view: false,
    },{
      id: "card38", 
      value: "1",
      view: false,
    },{
      id: "card39", 
      value: "1",
      view: false,
    },{
      id: "card40", 
      value: "1",
      view: false,
    },{
      id: "card41", 
      value: "2",
      view: false,
    },{
      id: "card42", 
      value: "2",
      view: false,
    },{
      id: "card43", 
      value: "2",
      view: false,
    },{
      id: "card44", 
      value: "2",
      view: false,
    },{
      id: "card45", 
      value: "2",
      view: false,
    },{
      id: "card46", 
      value: "2",
      view: false,
    },{
      id: "card47", 
      value: "2",
      view: false,
    },{
      id: "card48", 
      value: "2",
      view: false,
    },{
      id: "card49", 
      value: "2",
      view: false,
    },{
      id: "card50", 
      value: "2",
      view: false,
    },{
      id: "card51", 
      value: "3",
      view: false,
    },{
      id: "card52", 
      value: "3",
      view: false,
    },{
      id: "card53", 
      value: "3",
      view: false,
    },{
      id: "card54", 
      value: "3",
      view: false,
    },{
      id: "card55", 
      value: "3",
      view: false,
    },{
      id: "card56", 
      value: "3",
      view: false,
    },{
      id: "card57", 
      value: "3",
      view: false,
    },{
      id: "card58", 
      value: "3",
      view: false,
    },{
      id: "card59", 
      value: "3",
      view: false,
    },{
      id: "card60", 
      value: "3",
      view: false,
    },{
      id: "card61", 
      value: "4",
      view: false,
    },{
      id: "card62", 
      value: "4",
      view: false,
    },{
      id: "card63", 
      value: "4",
      view: false,
    },{
      id: "card64", 
      value: "4",
      view: false,
    },{
      id: "card65", 
      value: "4",
      view: false,
    },{
      id: "card66", 
      value: "4",
      view: false,
    },{
      id: "card67", 
      value: "4",
      view: false,
    },{
      id: "card68", 
      value: "4",
      view: false,
    },{
      id: "card69", 
      value: "4",
      view: false,
    },{
      id: "card70", 
      value: "4",
      view: false,
    },{
      id: "card71", 
      value: "5",
      view: false,
    },{
      id: "card72", 
      value: "5",
      view: false,
    },{
      id: "card73", 
      value: "5",
      view: false,
    },{
      id: "card74", 
      value: "5",
      view: false,
    },{
      id: "card75", 
      value: "5",
      view: false,
    },{
      id: "card76", 
      value: "5",
      view: false,
    },{
      id: "card77", 
      value: "5",
      view: false,
    },{
      id: "card78", 
      value: "5",
      view: false,
    },{
      id: "card79", 
      value: "5",
      view: false,
    },{
      id: "card80", 
      value: "5",
      view: false,
    },{
      id: "card81", 
      value: "6",
      view: false,
    },{
      id: "card82", 
      value: "6",
      view: false,
    },{
      id: "card83", 
      value: "6",
      view: false,
    },{
      id: "card84", 
      value: "6",
      view: false,
    },{
      id: "card85", 
      value: "6",
      view: false,
    },{
      id: "card86", 
      value: "6",
      view: false,
    },{
      id: "card87", 
      value: "6",
      view: false,
    },{
      id: "card88", 
      value: "6",
      view: false,
    },{
      id: "card89", 
      value: "6",
      view: false,
    },{
      id: "card90", 
      value: "6",
      view: false,
    },{
      id: "card91", 
      value: "7",
      view: false,
    },{
      id: "card92", 
      value: "7",
      view: false,
    },{
      id: "card93", 
      value: "7",
      view: false,
    },{
      id: "card94", 
      value: "7",
      view: false,
    },{
      id: "card95", 
      value: "7",
      view: false,
    },{
      id: "card96", 
      value: "7",
      view: false,
    },{
      id: "card97", 
      value: "7",
      view: false,
    },{
      id: "card98", 
      value: "7",
      view: false,
    },{
      id: "card99", 
      value: "7",
      view: false,
    },{
      id: "card100", 
      value: "7",
      view: false,
    },{
      id: "card101", 
      value: "8",
      view: false,
    },{
      id: "card102", 
      value: "8",
      view: false,
    },{
      id: "card103", 
      value: "8",
      view: false,
    },{
      id: "card104", 
      value: "8",
      view: false,
    },{
      id: "card105", 
      value: "8",
      view: false,
    },{
      id: "card106", 
      value: "8",
      view: false,
    },{
      id: "card107", 
      value: "8",
      view: false,
    },{
      id: "card108", 
      value: "8",
      view: false,
    },{
      id: "card109", 
      value: "8",
      view: false,
    },{
      id: "card110", 
      value: "8",
      view: false,
    },{
      id: "card111", 
      value: "9",
      view: false,
    },{
      id: "card112", 
      value: "9",
      view: false,
    },{
      id: "card113", 
      value: "9",
      view: false,
    },{
      id: "card114", 
      value: "9",
      view: false,
    },{
      id: "card115", 
      value: "9",
      view: false,
    },{
      id: "card116", 
      value: "9",
      view: false,
    },{
      id: "card117", 
      value: "9",
      view: false,
    },{
      id: "card118", 
      value: "9",
      view: false,
    },{
      id: "card119", 
      value: "9",
      view: false,
    },{
      id: "card120", 
      value: "9",
      view: false,
    },{
      id: "card121", 
      value: "10",
      view: false,
    },{
      id: "card122", 
      value: "10",
      view: false,
    },{
      id: "card123", 
      value: "10",
      view: false,
    },{
      id: "card124", 
      value: "10",
      view: false,
    },{
      id: "card125", 
      value: "10",
      view: false,
    },{
      id: "card126", 
      value: "10",
      view: false,
    },{
      id: "card127", 
      value: "10",
      view: false,
    },{
      id: "card128", 
      value: "10",
      view: false,
    },{
      id: "card129", 
      value: "10",
      view: false,
    },{
      id: "card130", 
      value: "10",
      view: false,
    },{
      id: "card131", 
      value: "11",
      view: false,
    },{
      id: "card132", 
      value: "11",
      view: false,
    },{
      id: "card133", 
      value: "11",
      view: false,
    },{
      id: "card134", 
      value: "11",
      view: false,
    },{
      id: "card135", 
      value: "11",
      view: false,
    },{
      id: "card136", 
      value: "11",
      view: false,
    },{
      id: "card137", 
      value: "11",
      view: false,
    },{
      id: "card138", 
      value: "11",
      view: false,
    },{
      id: "card139", 
      value: "11",
      view: false,
    },{
      id: "card140", 
      value: "11",
      view: false,
    },{
      id: "card141", 
      value: "12",
      view: false,
    },{
      id: "card142", 
      value: "12",
      view: false,
    },{
      id: "card143", 
      value: "12",
      view: false,
    },{
      id: "card144", 
      value: "12",
      view: false,
    },{
      id: "card145", 
      value: "12",
      view: false,
    },{
      id: "card146", 
      value: "12",
      view: false,
    },{
      id: "card147", 
      value: "12",
      view: false,
    },{
      id: "card148", 
      value: "12",
      view: false,
    },{
      id: "card149", 
      value: "12",
      view: false,
    },{
      id: "card150", 
      value: "12",
      view: false,
    }
  ])
  
  useEffect(function() {
    const BUTTON = document.querySelector(".startButton")

    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
  
    BUTTON.addEventListener("click", function startGame() {
      shuffle(DECK)
      setStarted(true)
    })
  }, [])

  return (
    <main className="relative h-screen flex flex-wrap gap-4 p-[3vh] justify-center items-center">
      {started ? <>
        <PlayerDeck value={DECK.slice(0, 12)} player="thePlayer"/>
        <PlayerDeck value={DECK.slice(12, 24)} player="player1"/>
        <PlayerDeck value={DECK.slice(24, 36)} player="player2"/>
        <PlayerDeck value={DECK.slice(48, 60)} player="player3"/>
        <PlayerDeck value={DECK.slice(60, 72)} player="player4"/>
        <PlayerDeck value={DECK.slice(60, 72)} player="player5"/>
        <PlayerDeck value={DECK.slice(60, 72)} player="player6"/>
        <PlayerDeck value={DECK.slice(60, 72)} player="player7"/>
        <div className="deck bg-slate-800 p-4 w-[16em] h-[12em]">
          <div className="deck-down relative">{DECK.slice(60, 149).map(value => <Card value={value} key={value.id}/>)}</div>
          <div className="deck-up relative">{DECK.slice(149).map(value => <Card value={value} key={value.id}/>)}</div>
          </div> 
      </>
      : <button className="startButton">start Game</button>
      }
    </main>
  )
}
