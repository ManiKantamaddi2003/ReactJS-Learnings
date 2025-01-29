import React, { useState } from "react";

const Index = () => {
    // Initial list of tasks
    const tempList = [
        {
            text: "Hello Ra..!!",
            id: 1,
        },
        {
            text: "Hii... Manikanta",
            id: 2,
        },
    ];

    // State to manage the current task being typed or edited
    const [message, setMessage] = useState({
        text: "", // Stores the text of the task
        id: "", // Stores the ID of the task (empty for new tasks)
    });

    // State to manage the list of tasks
    const [list, setList] = useState(tempList);

    // Function to handle changes in the input field
    const changeMessage = (e) => {
        setMessage({
            ...message, // Keep the existing properties (e.g., `id`)
            text: e.target.value, // Update the `text` property with the input value
        });
    };

    // Function to handle form submission (adding or updating a task)
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh

        if (message.text.trim() === "") return; // Ignore empty tasks

        if (message.id) {
            // If `message.id` exists, it means we're editing an existing task
            const updatedList = list.map((task) =>
                task.id === message.id ? { ...task, text: message.text } : task
            );
            setList(updatedList); // Update the list with the edited task
        } else {
            // If `message.id` is empty, it means we're adding a new task
            const newTask = {
                text: message.text,
                id: list.length + 1, // Generate a new ID
            };
            setList([...list, newTask]); // Add the new task to the list
        }

        // Reset the input field
        setMessage({ text: "", id: "" });
    };

    // Function to delete a task
    const deleteTask = (id) => {
        const updatedList = list.filter((task) => task.id !== id); // Filter out the task with the given ID
        setList(updatedList); // Update the list
    };

    // Function to edit a task
    const editTask = (id) => {
        const taskToEdit = list.find((task) => task.id === id); // Find the task to edit
        setMessage({ text: taskToEdit.text, id: taskToEdit.id }); // Populate the input field with the task text and ID
    };

    return (
        <div>
            <h3>!! TODO..LIST !!</h3>
            {/* Form for adding or editing tasks */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Write Your Task"
                    value={message.text} // Bind the input value to the `message.text` state
                    onChange={changeMessage} // Call `changeMessage` when the input changes
                />
                <button type="submit">{message.id ? "Update" : "Add"}</button>
            </form>
            <hr />
            {/* List of tasks */}
            <ul>
                {list.map((eachItem) => {
                    const { text, id } = eachItem; // Destructure `text` and `id` from each task
                    return (
                        <li key={id}>
                            <span>{text}</span> {/* Display the task text */}
                            <button onClick={() => editTask(id)}>EDIT</button> {/* Button to edit the task */}
                            <button onClick={() => deleteTask(id)}>DELETE</button> {/* Button to delete the task */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Index;