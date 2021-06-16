import { makeStyles } from "@material-ui/core/styles";
import * as pictures from "../../assets/pictures/pictures";

export const contentStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  logo: {
    backgroundImage: `url(${pictures.platosByGloriaLogo3})`,
    height: "500px"
    
  },
}));
