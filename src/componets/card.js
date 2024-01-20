"use client"

export default function Card(props) {
    switch (props.value.value) {
        case "-2":
        case "-1":
            return <div className="card" id={props.value.id}>
                <div className={`card-inner ${props.value.view ? "view" : ""}`}>
                    <div className="card-front bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-100 via-indigo-500 to-indigo-900">{props.value.value}</div>
                    <img className="card-back" src="/card-back.png"/>
                </div>
            </div>
        case "0":
            return <div className="card" id={props.value.id}>
                <div className={`card-inner ${props.value.view ? "view" : ""}`}>
                    <div className="card-front bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-100 via-sky-300 to-sky-500">{props.value.value}</div>
                    <img className="card-back" src="/card-back.png"/>
                </div>
            </div>
        case "1":
        case "2":
        case "3":
        case "4":
            return <div className="card" id={props.value.id}>
                <div className={`card-inner ${props.value.view ? "view" : ""}`}>
                    <div className="card-front bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-100 via-green-500 to-lime-600">{props.value.value}</div>
                    <img className="card-back" src="/card-back.png"/>
                </div>
            </div>
        case "5":
        case "6":
        case "7":
        case "8":
            return <div className="card" id={props.value.id}>
                <div className={`card-inner ${props.value.view ? "view" : ""}`}>
                    <div className="card-front bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-300 to-yellow-400">{props.value.value}</div>
                    <img className="card-back" src="/card-back.png"/>
                </div>
            </div>
        case "9":
        case "10":
        case "11":
        case "12":
            return <div className="card" id={props.value.id}>
                <div className={`card-inner ${props.value.view ? "view" : ""}`}>
                    <div className="card-front bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-100 via-red-400 to-red-700">{props.value.value}</div>
                    <img className="card-back" src="/card-back.png"/>
                </div>
            </div>
    }
}