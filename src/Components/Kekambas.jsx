import React, { useState, useEffect } from 'react';

export default function Kekambas() {

    const [kekambas, setKekambas] = useState([]);

    useEffect(() => {
        fetch("https://scratched-juniper-salto.glitch.me/kekambas")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setKekambas(data);
            });
    }, []);

    const getOrClear = () => {
        if (kekambas.length){
            setKekambas([])
        } else {
            fetch("https://scratched-juniper-salto.glitch.me/kekambas")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setKekambas(data);
                });
        }
    }

    return (
        <>
            <h1 className="text-center">Kekambas-106</h1>
            <button className="btn btn-primary" onClick={getOrClear}>{ kekambas.length ? "Clear Kekambas" : "Get Kekambas"}</button>
            <ul className="list-group">
                {kekambas.map(k => <li className="list-group-item" key={k.id}>{k.first_name} {k.last_name}</li>)}
            </ul>
        </>
    )
}