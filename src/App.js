import React, {useState} from 'react';

function App(props) {
    const [pass, setPass] = useState()
    const [repeatPass, setRepeatPass] = useState()
    const handleClick = () => {
        if (pass===repeatPass) {
            return alert("Регистрация прошла успешно")
        }
            return alert("Error!!! Пароли не совподают")
    }
    const handleChange = (e) => {

        setPass(e.target.value)
    }
    const handleChangeRepeat = (e) => {
        setRepeatPass(e.target.value)
    }
    return (
        <div className="app">
            <h1>Введите пароль</h1>
            <div className="inputOne">
                <input
                    type="password"
                    placeholder="add pass"
                    value={pass}
                    onChange={handleChange}
                />
            </div>
            <div className="inputTwo">
                <input
                    type="password"
                    placeholder="add pass"
                    onChange={handleChangeRepeat}

                />
            </div>
            <div className="btn">
                <button onClick={handleClick}>Sign in</button>
            </div>
        </div>
    );
}

export default App;