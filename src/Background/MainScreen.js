import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PathfindingVisualizer from "../PathFinder/PathfindingVisualizer";

const MainScreen = () => {
    const cls = useStyles()
    return(
        <div className={cls.root} id="main">
            <Grid
                container
                className={cls.container}
                style={{ backgroundColor:"whitesmoke" }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <PathfindingVisualizer/>
            </Grid>

        </div>
    );
}

export default MainScreen

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: '100vw',
    },
    container: {
        height:"100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
}))

