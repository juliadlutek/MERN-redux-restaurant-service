# Restaurant Service App
Full stack application for restaurant service that stores and allows you to add, edit and delete dishes and orders. The application was developed with Node.js, React and Redux and stores data in the MongoDB database. 
This project was created to pass the Frontend Development course in my studies, initially it was in a private repository on gitlab, so unfortunately the full history of commit is not available.

## Technologies

- React
- Node.js
- Express.js
- Redux
- MongoDB

## Dependencies

| Clinet-Side | Server-Side |
| ------ | ------ |
| axios: ^0.24.0 | body-parser: ^1.19.1 |
| formik: ^2.2.9 | cors: ^2.8.5 |
| react: ^17.0.2 | nodemon: ^2.0.15 |
| react-dom: ^17.0.2 | mongoose: ^6.1.4 |
| react-redux: ^7.2.6 | express: ^4.17.2 |
| react-router-dom: ^5.3.0 |  |
| react-scripts: 5.0.0 |  |
| redux: ^4.1.2 |  |
| redux-devtools-extension: ^2.13.9 |  |
| redux-thunk: ^2.4.1 |  |
| yup: ^0.32.11 |  |


## How to run application?
With the commands below, you can install dependencies and run the application.

First, open the console and enter the following command:

```sh
cd restaurant-service-app && cd server && npm install  && npm start 
```

Then open the second console and enter the following command:

```sh
cd restaurant-service-app && cd client && npm install  && npm start 
```

## Screenshots and functionality
On the landing page, the user can go to the list of dishes or the list of orders

![alt text](https://gitlab.com/frontend-development/21-22/grupa-3/julia-dlutek/-/blob/main/projekt/restaurant-service-app/client/src/images//screenshots/dashboard.png?raw=true)

In the dish list view page and order list view page, the user can browse the dishes and orders. The site includes sorting, a text search engine, and filters in the form of buttons and checkboxes. Browsing dishes uses pagination, the user can also set the number of dishes to be displayed on one page. On the order list page, the user can also check a given order by clicking on the icon. By clicking on a given item, the user goes to the details.

![dish list](https://gitlab.com/frontend-development/21-22/grupa-3/julia-dlutek/-/blob/main/projekt/restaurant-service-app/client/src/images//screenshots/dishList.png?raw=true)

![order list](https://gitlab.com/frontend-development/21-22/grupa-3/julia-dlutek/-/blob/main/projekt/restaurant-service-app/client/src/images//screenshots/orderList.png?raw=true)

On the detail page, the user can see all the information about the item. By clicking on the appropriate buttons, he can edit or delete the item. In the case of order details, the user sees the list of dishes that the order contains.

![dish details](https://gitlab.com/frontend-development/21-22/grupa-3/julia-dlutek/-/blob/main/projekt/restaurant-service-app/client/src/images//screenshots/dishDetails.png?raw=true)

![order details](https://gitlab.com/frontend-development/21-22/grupa-3/julia-dlutek/-/blob/main/projekt/restaurant-service-app/client/src/images//screenshots/orderDetails.png?raw=true)

The user can add and edit dishes and orders through a form that includes validation.
![dish create](https://gitlab.com/frontend-development/21-22/grupa-3/julia-dlutek/-/blob/main/projekt/restaurant-service-app/client/src/images//screenshots/dishCreate.png?raw=true)

![order create](https://gitlab.com/frontend-development/21-22/grupa-3/julia-dlutek/-/blob/main/projekt/restaurant-service-app/client/src/images//screenshots/orderCreate.png?raw=true)

![dish edit](https://gitlab.com/frontend-development/21-22/grupa-3/julia-dlutek/-/blob/main/projekt/restaurant-service-app/client/src/images//screenshots/dishEdit.png?raw=true)

The user can also delete the item by clicking on the icon and accepting the confirmation.

![delete confirmation window](https://gitlab.com/frontend-development/21-22/grupa-3/julia-dlutek/-/blob/main/projekt/restaurant-service-app/client/src/images//screenshots/delete.png?raw=true)

## Sources

The images used in the project come from the website 
https://pl.freepik.com

The icons used in the project come from the website 
https://www.flaticon.com/
