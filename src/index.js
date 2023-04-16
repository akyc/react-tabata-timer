import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import * as bootstrap from 'bootstrap';
import { useState } from "react";

const App = () => {
    const defaultSettings = {
        rounds: 2,
        length: '00:00:30',
        rest: '00:00:20'

    }
    const [roundsAmount, setRoundsAmount] = useState(defaultSettings.rounds)
    const [roundsLength, setRoundsLength] = useState(defaultSettings.length)
    const [restLength, setRestLength] = useState(defaultSettings.rest)
    const [countDown, setCountDown] = useState(0)
    const [round, setRound] = useState()
    const [timerType, setTimerType] = useState()
    function roundTimer(time, type) {
        setTimerType(type)
        return new Promise(resolve => {
            let counter = setInterval(() => {
                time = time - 1;
                if (time < 0) {
                    clearInterval(counter);
                    resolve();
                    return;
                }
                if (time == 1 || time == 2) {
                    playSound('beep')
                } else if (time == 0) {
                    playSound('gorn')
                }
                setCountDown(time)
            }, 1000)
        })
    }
    function timeConverter(time) {
        let [h, m, s] = time.split(':').map(el => parseInt(el))
        return h * 60 * 60 + m * 60 + s
    }
    function playSound(type) {
        const sounds = {
            'beep': './mp3/beep.mp3',
            'gorn': './mp3/gorn.mp3',
        }
        const audio = new Audio(sounds[type]);
        audio.play()
    }
    async function handleSubmit(e) {
        e.preventDefault()

        let array = [...Array(roundsAmount).keys()]
        for (let item of array) {
            setRound(`${item + 1}/${roundsAmount}`)
            if (item === 0) {
                await roundTimer(3, 'Подготовка')
            }
            await roundTimer(timeConverter(roundsLength), 'Работа')
            await roundTimer(timeConverter(restLength), 'Отдых')

        }
        //playSound('beep')


    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-3">
                    <h1 className="text-center">Tabata timer</h1>
                    <p>{round && `Раунд: ${round}`}</p>
                    <p>{timerType && timerType}</p>
                    <div className="text-center position-relative">
                        <svg width="200" height="200" style={{ transition: 'all 0.7s ease-in-out' }}>
                            <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" strokeWidth="2rem" strokeDasharray="439.8" strokeDashoffset="0"></circle>
                            <circle r="70" cx="100" cy="100" style={{ transformOrigin: '50% 50%', transform: 'rotate(-90deg)' }} fill="transparent" stroke="green" strokeWidth="2rem" strokeDasharray="439.8" strokeDashoffset={439.8 - (439.8 / timeConverter(roundsLength)) * (timeConverter(roundsLength) - countDown)}></circle>
                        </svg>
                        <h2 className="position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>{countDown !== 0 && `${countDown + 1}`}</h2>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="rounds_amount" className="form-label">Число раундов</label>
                            <input
                                type="number"
                                name="rounds_amount"
                                onChange={(e) => setRoundsAmount(parseInt(e.target.value))}
                                value={roundsAmount}
                                className="form-control" step="1" min="1" pattern="[0-9]{2}" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rounds_length" className="form-label">Время раунда</label>
                            <input
                                type="time"
                                name="rounds_length"
                                className="form-control"
                                value={roundsLength}
                                onChange={(e) => setRoundsLength(e.target.value)}
                                step="1"
                                pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reast_length" className="form-label">Время отдыха</label>
                            <input
                                type="time"
                                name="rest_length"
                                className="form-control"
                                value={restLength}
                                onChange={(e) => setRestLength(e.target.value)}
                                step="1"
                                pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}" />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-success btn-lg">Старт</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);