import React, { useState, useEffect, useRef } from 'react'
import { Box, styled, Paper, Grid, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@mui/material';

import './video.css';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const videosList = [
  {
    videoUrl: '/assets/images/products/headphone-2.jpg',
    name: 'earphone',
    price: 100,
    available: 15,
  },
  {
    videoUrl: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    name: 'Vídeo Introdução ao React',
    price: 1500,
    available: 30,
  },
  {
    videoUrl: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    name: 'iPhone x',
    price: 1900,
    available: 35,
  },
  {
    videoUrl: '/assets/images/products/headphone-2.jpg',
    name: 'iPhone x',
    price: 100,
    available: 0,
  },
  {
    videoUrl: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    name: 'Head phone',
    price: 1190,
    available: 5,
  },
];

const Video = () => {

  const [videoswitch, setVideo] = useState();
  const myvideo = useRef(null);
  const [mystream, setmystream] = useState(null);

  useEffect(() => {
    // navigator.mediaDevices
    //   .getUserMedia({ video: true, audio: true })
    //   .then((stream) => {
    //       myvideo.current.srcObject = stream;
    //       myvideo.current.autoplay = true;
    //       myvideo.current.muted = false;
    //       setmystream(stream);
    //   });
  }, []);

  const handleVideo = (value) => {
    // console.log(event.target.value)
    alert(value) 

    if (videoswitch) {
        setVideo(false);
        mystream.getTracks().forEach(function (track) {
            if (track.readyState === "live" && 
                track.kind === "video") {
                track.enabled = false;
            }
        });
    } else {
        setVideo(true);
        mystream.getTracks().forEach(function (track) {
            if (track.readyState === "live" && 
                track.kind === "video") {
                track.enabled = true;
            }
        });
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography>
            <div className="container">
              <div className="main-video-content">
                <video  ref={myvideo}
                  src={myvideo}
                  controls 
                  autoPlay
                  // currentTime={11.3}
                />
              </div>
            </div>
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography>
            <Paper style={{maxHeight: 500, overflow: 'auto'}}>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', cursor: 'pointer' }}>
                {videosList.map((video, index) => (
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    
                    <ListItemText onClick={() => handleVideo(video.videoUrl)}
                      primary={video.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                          Teste
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Video;