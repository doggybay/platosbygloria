import { makeStyles } from "@material-ui/core/styles";


export const contentStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  logo: {
    backgroundImage: `url(${'https://res.cloudinary.com/platosbygloria/image/upload/v1632088646/media/platos_by_gloria_logo_3_bhp3mb.png'})`,
    height: "500px"
    
  },
}));
