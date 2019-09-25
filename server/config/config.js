process.env.PORT = process.env.PORT || 3000;

//=========================
//    Entorno
//=========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=========================
//    Bsase de Datos
//=========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://Christian:kLWVXbct1VGw2FEG@cluster0-lzvml.mongodb.net/cafe';
}

process.env.URLDB = urlDB;