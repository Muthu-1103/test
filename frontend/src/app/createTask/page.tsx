"use client"
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import React, { useState } from 'react'
import axios from "axios";

const CreateTask = () => {

    const [formData, setFormData] = useState({
        taskTitle: "",
        taskDescription: ""
    });

    const handleInputChange = (e:any) => {
        const {id, value} =  e.target;
        setFormData({...formData, [id]: value});
    }

    const handleSubmit = async (e:any) => {
        //validate
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/tasks/postTask", formData);
            console.log(response.data);
            alert(response.data);


        } catch (error) {
            alert(error);
        }

    }
  return (
    <Container maxWidth="sm">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create Task
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        fullWidth
                        id="taskTitle"
                        label="Task Title"
                        variant="outlined"
                        margin="normal"
                        value={formData.taskTitle}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        id="taskDescription"
                        label="Task Description"
                        variant="outlined"
                        margin="normal"
                        value={formData.taskDescription}
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>

  )
}
export default CreateTask
