import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const AboutUs = () => {
  return (
    <div>
      {/* About Section */}
      <Box sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          About Us Page
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Drivado!
        </Typography>
        <Typography variant="body1" paragraph>
          Travel in one of our comfortable chauffeured vehicles and experience
          the sophistication of elegant luxury accompanied by impeccable
          service. You can book your transfers globally online around the clock
          via the website or the smartphone app. With just one click you can get
          a binding price for the desired trip. With our all-inclusive price we
          provide airport transfers, station transfers, point to point transfers
          and hourly disposals. With us you get exactly the chauffeur service
          that best suits your wishes and needs. Our vision is to offer a
          smarter way to book and manage rides — something affordable, reliable,
          and efficient. Come, explore our services and book a transfer with us.
        </Typography>
      </Box>

      {/* Team Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {/* Team Member 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="https://www.w3schools.com/w3images/team1.jpg"
                alt="Jane"
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">Jane Doe</Typography>
                <Typography variant="body2" color="text.secondary">
                  CEO & Founder
                </Typography>
                <Typography variant="body1" paragraph>
                  Some text that describes me lorem ipsum ipsum lorem.
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  jane@example.com
                </Typography>
                <Button variant="contained" color="primary">
                  Contact
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Team Member 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="https://www.w3schools.com/w3images/team2.jpg"
                alt="Mike"
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">Mike Ross</Typography>
                <Typography variant="body2" color="text.secondary">
                  Art Director
                </Typography>
                <Typography variant="body1" paragraph>
                  Some text that describes me lorem ipsum ipsum lorem.
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  mike@example.com
                </Typography>
                <Button variant="contained" color="primary">
                  Contact
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Team Member 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="https://www.w3schools.com/w3images/team3.jpg"
                alt="John"
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2" color="text.secondary">
                  Designer
                </Typography>
                <Typography variant="body1" paragraph>
                  Some text that describes me lorem ipsum ipsum lorem.
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  john@example.com
                </Typography>
                <Button variant="contained" color="primary">
                  Contact
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
