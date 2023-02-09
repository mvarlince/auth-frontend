import { useState, useContext } from "react"
import {  useNavigate } from "react-router-dom"
import { AuthContext } from "../App"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function SignupForm(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const {setUser} = useContext(AuthContext)

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // make a post request to the API with the form data
        // https://auth-api-vm.web.app/signup
       // https://127.0.0.1:5000/signup
        fetch('127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email, password}) 
        })
        // create a new user in the database
        // then
        .then(response => response.json())
        .then(response => 
            { setUser(response.user)
            // 1. do something with the new user
            // 2. redirect to content
        navigate('/secret')
            })
        .catch(err => alert(err.message))
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="text-light"> <br/>Sign up to get lit</p>
            <Form.Group> 
                <Form.Label className="email"> Email &nbsp; </Form.Label>
                <Form.Control 
                    type="email" 
                    name="email" 
                    value = {email}
                    className="p-3"
                    onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label className="password"> Password &nbsp; </Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value= {password}
                    className="p-3"
                    onChange={e => setPassword(e.target.value)}
                    />
            </Form.Group>

            <Button 
            variant="outline-light" 
            type="submit"
            size="lg"
            className="mt-3"> Submit </Button>
            {/* <input type="submit" value="signup"/> */}
        </form>
    )
}