"use client"

import { useEffect, useState } from "react"
import Card from "./card"

export default function PlayerDeck(props) {
    const [points, setPoints] = useState()

    function countPoints() {
        let count
        props.value.map(object => !count ? object.view ? count = Number(object.value) : 0 : object.view ? count = count + Number(object.value) : 0)
        return count
    }

    useEffect(function() {
        setPoints(countPoints)
    }, [])

    return (
        <div className="player p-4 bg-slate-800" id={props.player}>
            <div className="grid grid-cols-4 text-[.37rem] gap-1">
                <Card value={props.value[0]}/>
                <Card value={props.value[1]}/>
                <Card value={props.value[2]}/>
                <Card value={props.value[3]}/>
                <Card value={props.value[4]}/>
                <Card value={props.value[5]}/>
                <Card value={props.value[6]}/>
                <Card value={props.value[7]}/>
                <Card value={props.value[8]}/>
                <Card value={props.value[9]}/>
                <Card value={props.value[10]}/>
                <Card value={props.value[11]}/>
            </div>
            <p className="text-white">points: {points}</p>
        </div>
    )
}