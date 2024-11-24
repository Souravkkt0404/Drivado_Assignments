import React, { useState, useEffect } from "react";
import { fetchCompanies } from "../services/api";
import {
  CircularProgress,
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies().then((data) => {
      setCompanies(data);
      setLoading(false);
    });
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

  // Show the first 3 companies
  const showingThreeCompanies = companies.slice(0, 10);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        Company List
      </Typography>
      {/* Container to hold all the company cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {showingThreeCompanies.map((company) => (
          <Card
            key={company.id}
            sx={{
              width: "250px",
              marginBottom: 2,
              boxShadow: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Link
              to={`/companies/${company.id}`}
              style={{ textDecoration: "none", placeItems: "center" }}
            >
              <Avatar
                alt={company.companyName}
                src={company.logo}
                sx={{ width: 80, height: 80, marginBottom: 2 }}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {company.companyName}
                </Typography>
              </CardContent>
              <Button variant="outlined" color="primary" fullWidth>
                View Company
              </Button>
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CompanyList;
