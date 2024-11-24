import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCompanyDetails, fetchUsers } from "../services/api"; // Ensure this is correct
import {
  Typography,
  CircularProgress,
  Alert,
  Box,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";

const CompanyDetails = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await fetchCompanyDetails(companyId);
        setCompany(companyData);
      } catch (error) {
        setError("Error fetching company details");
        console.error("Error fetching company details:", error);
      }
    };

    const fetchUsersForCompany = async () => {
      try {
        const usersData = await fetchUsers();
        const filteredUsers = usersData?.filter(
          (user) => user?.companyId === companyId
        );
        setUsers(filteredUsers);
      } catch (error) {
        setError("Error fetching users");
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
    fetchUsersForCompany();
  }, [companyId]);

  if (loading) return <CircularProgress />;

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      {company && (
        <Stack spacing={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <img
                  src={company.logo}
                  alt={company.companyName}
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                    marginRight: 16,
                  }}
                />
                <div>
                  <Typography variant="h4">{company.companyName}</Typography>
                  <Typography variant="body1">
                    {company.address || "No address available"}
                  </Typography>
                </div>
              </Box>
            </CardContent>
          </Card>

          <Typography variant="h5" gutterBottom>
            Users
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {users.map((user) => (
              <Card
                key={user.id}
                sx={{
                  width: { xs: "100%", sm: "48%", md: "30%",xl: "48%" }, // Responsive width based on screen size
                  marginBottom: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Avatar
                      alt={user.name}
                      src={user.avatar}
                      sx={{ width: 56, height: 56, marginBottom: 2 }}
                    />
                    <Typography variant="h6" align="center">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {user.email}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {user.mobileNumber}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default CompanyDetails;
