import React, { useState, useEffect } from "react";
import { fetchUsers } from "../services/api";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setError("Failed to load users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  // Showing only the first three users
  const showingThreeUsers = users.slice(0, 6);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        User List
      </Typography>
      <List sx={{ padding: 0 }}>
        {showingThreeUsers.map((user) => (
          <Card key={user.id} sx={{ marginBottom: 2, boxShadow: 2 }}>
            <CardContent>
              <ListItem
                button
                component={Link}
                to={`/users/${user.id}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Avatar and Name */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    alt={user.name}
                    src={user.avatar}
                    sx={{ marginRight: 2 }}
                  />
                  <ListItemText primary={user.name} />
                </Box>
                <Button variant="outlined" color="primary">
                  View Profile
                </Button>
              </ListItem>
            </CardContent>
            <Divider />
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default UserList;
