const express = require('express');
const app = express();
const productRouter = require('./routes/ProductoRoutes');
const userRouter = require('./routes/UserRoutes');
const ventasRouter = require('./routes/VentaRoutes');
const cors = require('cors');
const morgan = require('morgan');
const port = 8080;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*'
}));

app.use('/productos',productRouter);
app.use('/login',userRouter);
app.use('/ventas',ventasRouter);

app.listen(port, () =>{
    console.log(`Escuchando por el puerto ${port}`);
});