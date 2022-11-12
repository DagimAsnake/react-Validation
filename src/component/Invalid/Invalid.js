import React from 'react'
import classes from './Invalid.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'

function Invalid(props) {

    const cancelHandler = () => {
        props.onCancel()
    }

    return (
        <div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>Invalid input</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.content}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={cancelHandler}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default Invalid