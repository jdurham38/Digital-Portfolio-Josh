import React, { useState, useEffect } from "react";

const MyApi = () => {
    const apiEndpoint = "https://myapiportfolio.azurewebsites.net/api/reminder";

    const [reminders, setReminders] = useState([]);
    const [newReminder, setNewReminder] = useState({
        dateTime: "",
        description: "",
        priority: "",
    });

    useEffect(() => {
        // This effect will run whenever the reminders state changes
        // You can also fetch the updated data here if needed
        fetch(apiEndpoint)
            .then((response) => response.json())
            .then((data) => setReminders(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [reminders]);

    useEffect(() => {
        // This effect will run whenever the reminders state changes
        // Update the page after adding a new reminder
        // You can also fetch the updated data here if needed
        // This effect will trigger whenever `reminders` changes
    }, [reminders]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewReminder((prevReminder) => ({
            ...prevReminder,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Send a POST request to the API with the new reminder data
        fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReminder),
        })
            .then((response) => response.json())
            .then((data) => {
                // Update the reminders list with the new reminder
                setReminders((prevReminders) => [...prevReminders, data]);
                setNewReminder({
                    dateTime: "",
                    description: "",
                    priority: "",
                });
            })
            .catch((error) => console.error("Error posting data:", error));
    };

    const handleDelete = (id) => {
        // Send a DELETE request to the API to remove the reminder
        fetch(`${apiEndpoint}/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                // Update the reminders list after deleting
                setReminders((prevReminders) =>
                    prevReminders.filter((reminder) => reminder.id !== id)
                );
            })
            .catch((error) => console.error("Error deleting data:", error));
    };

    return (
        <div
            style={{
                background: "white",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px", // Add padding for better mobile layout
            }}
        >
            <div
                style={{
                    maxWidth: "600px",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <h1>Reminder App</h1>

                {/* Description of how the API was built */}
                <div
                    style={{
                        width: "100%", // Make sure the container takes up full width
                        maxWidth: "600px",
                        textAlign: "center",
                    }}
                >
                    <p>
                        This app allows you to manage reminders using a REST API. The API
                        was built with C# and .NET framework, I am hosting my API on Azure
                        which will store the reminders in a standard Azure database. It provides
                        endpoints for retrieving, creating, and deleting reminders. This
                        React app interacts with the API to display and manage reminders.
                    </p>
                </div>
                {/* Form for adding a new reminder */}
                <form onSubmit={handleSubmit}>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={newReminder.dateTime}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={newReminder.description}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="priority"
                        placeholder="Priority"
                        value={newReminder.priority}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Add Reminder</button>
                </form>

                <div
                    style={{
                        marginTop: "20px",
                        borderTop: "1px solid #ccc",
                        paddingTop: "10px",
                    }}
                >
                    {/* List of reminders */}
                    {reminders.map((reminder) => (
                        <div

                            key={reminder.id}
                            style={{
                                marginBottom: "20px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                backgroundColor: "#f9f9f9",
                                // Make sure the reminder container takes up full width
                                width: "100%",
                            }}
                        >
                            <div>
                                <p>Date and Time: {reminder.dateTime}</p>
                                <p>Description: {reminder.description}</p>
                                <p>Priority: {reminder.priority}</p>
                            </div>
                            <button onClick={() => handleDelete(reminder.id)}>X</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyApi;
