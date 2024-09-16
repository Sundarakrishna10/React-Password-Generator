import React, { useState } from 'react'
import './PasswordGen.css'
export const PasswordGen = () => {
    const [passwordLen, setpasswordLen] = useState(8)
    const [uppercase, setUppercase] = useState(true)
    const [lowercase, setLowerCase] = useState(true)
    const [numbercase, setnumbercase] = useState(true)
    const [symbals, setSymbals] = useState(true)
    const [password, setPassword] = useState("")
    const generatePassword = () => {
        let charset = ""
        if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
        if (numbercase) charset += '1234567890'
        if (symbals) charset += '!@#$%^&*()_+=-'
        //console.log(charset)
        let generatedpassword = ""
        for (let i = 0; i < passwordLen; i++) {
            //const randomIndex=Math.floor(Math.random()*charset.passwordLen)
            const randomIndex = Math.floor(Math.random() * charset.length)

            generatedpassword += charset[randomIndex]
        }
        setPassword(generatedpassword)
    }
    const copypassword = () => {
        navigator.clipboard.writeText(password)
        alert("password copyed")
    }
    return (
        <div className='password_container'>
            <h3>Password Generator</h3>
            <div className='input_group'>
                <label htmlFor='passwordlength'>Password length:</label>
                <input type='number' name='' id='passwordlength' value={passwordLen}
                    onChange={(e) => setpasswordLen(parseInt(e.target.value))} />
            </div>
            <div className='checkbox_group'>

                <input id='upper' type='checkbox' checked={uppercase}
                    onChange={(e) => setUppercase(e.target.checked)} />
                <label htmlFor='upper'>uppercase</label>
            </div>
            <div className='checkbox_group'>

                <input id='lower' type='checkbox' checked={lowercase}
                    onChange={(e) => setLowerCase(e.target.checked)} />
                <label id='lower'>lower</label>
            </div>
            <div className='checkbox_group'>

                <input id='numbers' type='checkbox' checked={numbercase}
                    onChange={(e) => setnumbercase(e.target.checked)} />
                <label id='numbers'>numbers</label>
            </div>
            <div className='checkbox_group'>

                <input id='symbal' type='checkbox' checked={symbals}
                    onChange={(e) => setSymbals(e.target.checked)} />
                <label id='symbal'>symbals</label>
            </div>
            <button className='gen_btn' onClick={generatePassword}>Generate Password</button>
            <div className='generatedPassword'>
                <input type='text' readOnly value={password} />
                <button className='copy_btn' onClick={copypassword}>copy</button>
            </div>
        </div>
    )
}
