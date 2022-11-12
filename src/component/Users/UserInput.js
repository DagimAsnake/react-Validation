import React, { useState } from "react";
import Invalid from "../Invalid/Invalid";
import Backdrop from "../Invalid/Backdrop";
import classes from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserInput = (props) => {

    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [invalidIsOpen, setInvalidIsOpen] = useState(false)
    const [content, setContent] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()

        if (username === '' || age === '') {
            setInvalidIsOpen(true)
            setContent('Please enter a valid name and age (non-empty values)')

        } else if (+age <= 0) {
            setInvalidIsOpen(true)
            setContent('please enter a valid age(> 0)')

        } else {
            const userInput = {
                username: username,
                age: age,
                id: Math.random()
            }

            props.addUser(userInput)
            setAge('')
            setUsername('')
        }

    }

    const closeInvalidHandler = () => {
        setInvalidIsOpen(false)
    }

    return (
        <div>
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>

            {invalidIsOpen && <Invalid onCancel={closeInvalidHandler} content={content} />}
            {invalidIsOpen && <Backdrop onCancel={closeInvalidHandler} />}

        </div>
    )
}

export default UserInput