Pilar Media Technical Test Documentation

---

Endpoints :

---

List of available endpoints:

- GET "/buyers"

- GET "/sellers"

- GET "/transactions"

- GET "/products"
- POST "/products"
- DELETE "/products/:id"

---

- GET "/buyers"

---

Description: \* Read all buyer in database

Request:
Response (200 - OK)

```js
[
  {
    id: 1,
    id_penerima: "CS01",
    nama: "Andi",
    alamat: "Surabaya - Osowilangon",
    createdAt: "2023-07-04T19:10:39.967Z",
    updatedAt: "2023-07-04T19:10:39.967Z",
  },
  {
    id: 2,
    id_penerima: "CS02",
    nama: "Budi",
    alamat: "Surabaya - Pasarturi",
    createdAt: "2023-07-04T19:10:39.967Z",
    updatedAt: "2023-07-04T19:10:39.967Z",
  },
];
```

---

- GET "/sellers"

---

Description: \* Read all seller in database

Request:
Response (200 - OK)

```js
[
  {
    id: 1,
    id_pengirim: "PJ01",
    username: "fani",
    email: "fani@mail.com",
    password: "$2a$05$aPnwASNlNkPE.CZGkuUIMeI54tvrFGA3rUgrDff61VwuqwEwvv9Ha",
    createdAt: "2023-07-04T19:10:39.996Z",
    updatedAt: "2023-07-04T19:10:39.996Z",
  },
  {
    id: 2,
    id_pengirim: "PJ02",
    username: "gio",
    email: "gio@mail.com",
    password: "$2a$05$wW7aOf3sYR6susCrqpOKbutMTWJ2LbL9ola4aHhYRXzB76G0W6696",
    createdAt: "2023-07-04T19:10:40.021Z",
    updatedAt: "2023-07-04T19:10:40.021Z",
  },
];
```

---

- GET "/transactions"

---

Description: \* Read all transaction in database

Request:
Response (200 - OK)

```js
[
  {
    id: 1,
    BuyerId: 1,
    SellerId: 1,
    ProductId: 1,
    priority: 4,
    createdAt: "2023-07-04T19:10:40.053Z",
    updatedAt: "2023-07-04T19:10:40.053Z",
  },
  {
    id: 2,
    BuyerId: 2,
    SellerId: 2,
    ProductId: 2,
    priority: 3,
    createdAt: "2023-07-04T19:10:40.053Z",
    updatedAt: "2023-07-04T19:10:40.053Z",
  },
];
```

---

- GET "/products"

---

Description: \* Read all product in database

Request:
Response (200 - OK)

```js
[
  {
    id: 1,
    id_order: 1,
    product_name: "iphone 10",
    category: "electronic",
    SellerId: 1,
    createdAt: "2023-07-04T19:10:40.044Z",
    updatedAt: "2023-07-04T19:10:40.044Z",
  },
  {
    id: 2,
    id_order: 2,
    product_name: "snack chiki",
    category: "food",
    SellerId: 2,
    createdAt: "2023-07-04T19:10:40.044Z",
    updatedAt: "2023-07-04T19:10:40.044Z",
  },
];
```

---

- POST "/products"

---

Description: \* Add new product to database

Request:

- body:

```js
{
    id_order: 6,
    product_name: susu,
    category: food,
    SellerId: 2
}
```

Response (201 - Created)

```js
[
  {
    id: 9,
    id_order: 6,
    product_name: "susu",
    category: "food",
    SellerId: 2,
    updatedAt: "2023-07-04T19:49:00.904Z",
    createdAt: "2023-07-04T19:49:00.904Z",
  },
];
```

---

- DELETE "/products/:id"

---

Description: \* Delete product by id in database

Request:

- params:

```js
{
  id: 3;
}
```
Response (200 - OK)
"Iphone 13 has been deleted"