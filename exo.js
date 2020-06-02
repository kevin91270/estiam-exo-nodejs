var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

let tab = [
    { 'name': 'python', 'ISBN': 'RTF123DSE', 'price': '12.00', 'id_author': "1" },
    { 'name': 'javascript', 'ISBN': 'FR6345X', 'price': '12.00', 'id_author': "1" }
]

let tabAuthor = [
    { 'firstname': 'test', 'lastname': 'estiam', 'email': 'test@estiam.com' },
    { 'firstname': 'kevin', 'lastname': 'chapelle', 'email': 'kevin.chapelle@estiam.com' }
]

let tabCustomer = [
    { 'firstname': 'salut', 'lastname': 'estiam', 'email': 'salut@estiam.com' },
    { 'firstname': 'toto', 'lastname': 'tata', 'email': 'toto.tata@estiam.com' }
]

let tabPurchase = [
    { 'id_book': '1', 'date': '1999-12-31' },
    { 'id_book': '0', 'date': '1996-08-07' }
]

//pour book

app.post('/book', (req, res) => {
    let book = {
        'name': req.body.name,
        'price': req.body.price,
        'ISBN': req.body.ISBN,
        'id_author': req.body.id_author
    };

    res.json(book);
    console.log(book);
    tab.push(book);
});

app.route('/book/:idBook')
    .get((req, res) => {
        let idBook = req.params.idBook;
        console.log(idBook);

        if (tab[idBook] != null) {
            res.json(tab[idBook]);
        }
        else {
            res.send('vide');
        }

    })
    .put((req, res) => {
        let idBook = req.params.idBook;

        if (tab[idBook] != null) {
            let book = {
                'name': req.body.name,
                'price': req.body.price,
                'ISBN': req.body.ISBN,
                'id_author': req.body.id_author
            };
            res.json(book);
            tab[idBook] = book;
        }
        else {
            res.send('vide');
        }
    })
    .delete((req, res) => {
        let idBook = req.params.idBook;
        console.log(idBook);

        if (tab[idBook] != null) {
            let book = {
                'name': req.body.name,
                'price': req.body.price,
                'ISBN': req.body.ISBN,
                'id_author': req.body.id_author
            };
            res.json(book);
            tab.splice(idBook);


        }
        else {
            res.send('vide');
        }
        res.send('done');
    })

//pour author

app.post('/author', (req, res) => {
    let author = {
        'firstname': req.body.firstname,
        'lastname': req.body.lastname,
        'email': req.body.email
    };

    res.json(author);
    console.log(author);
    tabAuthor.push(author);
});

app.route('/author/:idAuthor')
    .get((req, res) => {
        let idAuthor = req.params.idAuthor;
        console.log(idAuthor);

        if (tabAuthor[idAuthor] != null) {
            res.json(tabAuthor[idAuthor]);
        }
        else {
            res.send('vide');
        }

    })
    .put((req, res) => {
        let idAuthor = req.params.idAuthor;

        if (tabAuthor[idAuthor] != null) {
            let author = {
                'firstname': req.body.firstname,
                'lastname': req.body.lastname,
                'email': req.body.email
            };
            res.json(author);
            tabAuthor[idAuthor] = author;
        }
        else {
            res.send('vide');
        }
    })
    .delete((req, res) => {
        let idAuthor = req.params.idAuthor;
        console.log(idAuthor);

        if (tabAuthor[idAuthor] != null) {
            let author = {
                'firstname': req.body.firstname,
                'lastname': req.body.lastname,
                'email': req.body.email
            };
            res.json(author);
            tabAuthor.splice(author);


        }
        else {
            res.send('vide');
        }
        res.send('done');
    })


//Pour customer

app.post('/customer', (req, res) => {
    let customer = {
        'firstname': req.body.firstname,
        'lastname': req.body.lastname,
        'email': req.body.email
    };

    res.json(customer);
    console.log(customer);
    tabCustomer.push(customer);
});

app.route('/customer/:idCustomer')
    .get((req, res) => {
        let idCustomer = req.params.idCustomer;
        console.log(idCustomer);

        if (tabCustomer[idCustomer] != null) {
            res.json(tabCustomer[idCustomer]);
        }
        else {
            res.send('vide');
        }

    })
    .put((req, res) => {
        let idCustomer = req.params.idCustomer;

        if (tabCustomer[idCustomer] != null) {
            let customer = {
                'firstname': req.body.firstname,
                'lastname': req.body.lastname,
                'email': req.body.email
            };
            res.json(customer);
            tabCustomer[idCustomer] = customer;
        }
        else {
            res.send('vide');
        }
    })
    .delete((req, res) => {
        let idCustomer = req.params.idCustomer;
        console.log(idCustomer);

        if (tabCustomer[idCustomer] != null) {
            let customer = {
                'firstname': req.body.firstname,
                'lastname': req.body.lastname,
                'email': req.body.email
            };
            res.json(customer);
            tabCustomer.splice(customer);


        }
        else {
            res.send('vide');
        }
        res.send('done');
    })


//Pour purchase

app.post('/purchase', (req, res) => {
    let purchase = {
        'id_book': req.body.id_book,
        'date': req.body.date
    };

    res.json(purchase);
    console.log(purchase);
    tabPurchase.push(purchase);
});

app.route('/purchase/:idPurchase')
    .get((req, res) => {
        let idPurchase = req.params.idPurchase;
        console.log(idPurchase);

        if (tabPurchase[idPurchase] != null) {
            res.json(tabPurchase[idPurchase]);
        }
        else {
            res.send('vide');
        }

    })
    .put((req, res) => {
        let idPurchase = req.params.idPurchase;

        if (tabPurchase[idPurchase] != null) {
            let purchase = {
                'id_book': req.body.id_book,
                'date': req.body.date
            };
            res.json(purchase);
            tabPurchase[idPurchase] = purchase;
        }
        else {
            res.send('vide');
        }
    })
    .delete((req, res) => {
        let idPurchase = req.params.idPurchase;
        console.log(idPurchase);

        if (tabPurchase[idPurchase] != null) {
            let purchase = {
                'id_book': req.body.id_book,
                'date': req.body.date
            };
            res.json(purchase);
            tabPurchase.splice(purchase);


        }
        else {
            res.send('vide');
        }
        res.send('done');
    })

app.listen(3000);

