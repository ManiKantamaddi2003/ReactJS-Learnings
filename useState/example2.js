import React, { useState } from "react";

const Example2 = () => {
    // State variables to store the values of name, email, and password
    const [name, setName] = useState(""); // State for name input
    const [email, setEmail] = useState(""); // State for email input
    const [password, setPassword] = useState(""); // State for password input

    // A single function to handle changes for all input fields
    const changeValue = (e, value) => {
        // Check which input field is being changed using the `value` parameter
        if (value === 'name') {
            setName(e.target.value); // Update the name state
        } else if (value === 'email') {
            setEmail(e.target.value); // Update the email state
        } else {
            setPassword(e.target.value); // Update the password state
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Create an object to store the user's input
        let userObj = {
            name: name, // Add the name from state
            email: email, // Add the email from state
            password: password // Add the password from state
        };

        // Log the user object to the console
        console.log(userObj);
    };

    return (
        <div>
            <center>
                {/* Form with an onSubmit event handler */}
                <form onSubmit={handleSubmit}>
                    {/* Input field for name */}
                    <div className="form-container">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your Name"
                            value={name} // Bind the input value to the name state
                            onChange={(e) => changeValue(e, "name")} // Call changeValue on change
                        ></input>
                    </div>

                    {/* Input field for email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your Email"
                            value={email} // Bind the input value to the email state
                            onChange={(e) => changeValue(e, "email")} // Call changeValue on change
                        ></input>
                        <br></br>
                    </div>

                    {/* Input field for password */}
                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your Password"
                            value={password} // Bind the input value to the password state
                            onChange={(e) => changeValue(e, "password")} // Call changeValue on change
                        ></input>
                    </div>

                    {/* Submit button */}
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </center>
        </div>
    );
};

export default Example2;