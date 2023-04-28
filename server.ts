import app from "config/app";
import { port } from "./config";
import starsRoutes from "routes/star.routes";
import constellationRoutes from "./routes/constellation.routes";

app.listen(port, () => {
    app.use('/stars', starsRoutes)
    app.use('/constellations', constellationRoutes)
    console.log('Express server listening on port ' + port);
})