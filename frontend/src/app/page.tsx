"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, Box } from '@mui/material';
export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/tasks/getAllTasks");
        setTasks(response.data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, []);

  const [tasks, setTasks] = useState([]);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Tasks List
        </Typography>
        {tasks.map((task: any) => (
          <Card key={task.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {task.taskTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {task.taskDescription}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
