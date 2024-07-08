import app from './app.js';
import 'dotenv/config';
import logger from './logs/logger.js';
import { sequelize } from './database/database.js';  
async function main() {
    //iniciar sequalize
    await sequelize.sync({force: true});
    
    //iniciar servidor

    const port = process.env.PORT;
    app.listen(port);
    logger.info( `Lisening on port =  ${port}` );
}

main();