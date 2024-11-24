import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCompanyDetails,
  fetchUserDetails,
} from "../services/api";
import {
  Typography,
  CircularProgress,
  Avatar,
  Box,
  Card,
  Divider,
  Button,
} from "@mui/material";

const UserDetails = () => {
  const { userId } = useParams(); // Get userId from URL params
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user and company details
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch user details
        const userDetails = await fetchUserDetails(userId);
        setUser(userDetails);

        // Fetch company details if user is associated with a company
        if (userDetails.companyId) {
          const companyDetails = await fetchCompanyDetails(
            userDetails.companyId
          );
          setCompany(companyDetails);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return (
      <CircularProgress
        size={50}
        sx={{ display: "block", margin: "auto", marginTop: "50px" }}
      />
    );
  }

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "20px",
        maxWidth: 800,
        margin: "auto",
      }}
    >
      {/* User Information Card */}
      {user ? (
        <Card sx={{ padding: 3, marginBottom: 3, boxShadow: 3 }}>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
          >
            <Avatar
              alt={user.name}
              src={user.avatar}
              sx={{
                width: 100,
                height: 100,
                border: "3px solid #1976d2",
                marginBottom: 2,
              }}
            />
          </Box>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            {user.name}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: 1 }}
          >
            User ID: {user.id}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: 1 }}
          >
            Email: {user.email}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: 1 }}
          >
            Contact: {user.mobileNumber}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: 2 }}
          >
            Total Unpaid Booking: {user.totalUnpaidBooking}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />

          {/* Company Information */}
          {company && (
            <Box>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Company Information
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                Company Name: {company.companyName}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                Contact Email: {company.email}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ marginBottom: 2 }}
              >
                Total Unpaid Booking: {company.totalUnpaidBooking}
              </Typography>
            </Box>
          )}

          <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>
            Edit Profile
          </Button>
        </Card>
      ) : (
        <Typography variant="h6" color="error">
          User not found
        </Typography>
      )}
    </Box>
  );
};

export default UserDetails;
