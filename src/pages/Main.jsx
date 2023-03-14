import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Main = () => {
  const [movies, setMovies] = useState("");

  const getData = async () => {
    const API_KEY = "3783d01075de767deb2bc152ceaf6707";
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
    try {
      const { data } = await axios(url);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(movies);

  return (
    <div>
      <div class="search">
        <input type="text" placeholder="Search Movie" />
        <Button variant="outlined" sx={{ marginLeft: "1rem" }}>
          Search
        </Button>
      </div>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: "0.1rem" }}
      >
        {movies &&
          movies.map((movie, index) => {
            const { poster_path, title } = movie;
            console.log(movie, index + "");

            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={`https://image.tmdb.org/t/p/w1280${poster_path}`}
                      alt="img"
                      // sx={{ maxWidth: 345 }}
                      // height="140"
                      // width="140"
                    />
                    <CardContent sx={{ background: "#1976D2" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                      >
                        {title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Main;
