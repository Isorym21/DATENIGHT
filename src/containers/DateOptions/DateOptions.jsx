import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
//axios will pull information from the API
import axios from "axios";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Button,
} from "@mui/material";

import useStyles from "../styles";

const cards = [1, 2, 3];

// DATEOPTIONS COMPONENT STARTS HERE
export function DateOptions({ dateType, zipCode, eventData }) {
  // useStyles is used to style
  const classes = useStyles();
  // useLocation to draw put the props from the Form
  const { state } = useLocation();

  const dateArray1 = state.eventData.eventData[0];
  const dateArray2 = state.eventData.eventData[1];
  const dateArray3 = state.eventData.eventData[3];
  console.log(dateArray1);
  console.log(dateArray2);
  console.log(dateArray3);

  return (
    <main>
      <h1>Date Options</h1>

      {/* THE DATE OPTIONS WILL APPEAR ON THIS SCREEN. API WILL USE DATA FROM THE FORM AND DISPLAY THE DATE THAT MEETS REQUIREMENTS  */}
      <div className={classes.cardGrid}>
        <Container className="" maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid key={card} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image=""></CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {}
                    </Typography>
                    <Typography variant="p">{}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button>
                      <Link
                        to="/FinalDateInfo"
                        state={{
                          dateType: { state },
                          zipCode: { state },
                          eventData: { eventData },
                        }}
                      >
                        Select This Date
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </main>
  );
}
