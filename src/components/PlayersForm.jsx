import React, { useState } from 'react'

function PlayersForm() {
    const [name, setName] = useState(' ')
    const [color, setColor] = useState(' ')
    const [weapon, setWeapon] = useState(' ')

    const handleSubmit = (e) => {
        e.preventDefault()

        const fetchPlayer = async()=>{
            const response = await fetch("http://localhost:3001/players", {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            })
        }

    }
  return (
    <div>player</div>
  )
}

export default PlayersForm