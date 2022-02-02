
import { CircularProgress, Typography, Box } from "@material-ui/core";
import { PROFILE_LOADING } from "../../constants/lang";
import useStyles from "./style";


const LoadScreen = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.loadScreen}>
      <Box position="relative" display="inline-flex" marginBottom={3}>
        <CircularProgress size={80} variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h6"
            component="h6"
            style={{ color: "#ffffff" }}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
      <Typography 
        variant="h5"
        component="h5">
        {PROFILE_LOADING}
      </Typography>
    </div>)
};

export default LoadScreen;
