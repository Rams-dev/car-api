# car-api
## This is a simple cart api created with expressjs and mysql ##

in this project you could doing petitions through postman, insomnia or front end web application through the next end points

##### Autentication #####

- post: /register
- post: /login 

##### Product #####
- get: /products 
- post: /products 
- get: /products/:productId 
- delete: /products/:productId 

##### car #####

- get: /car 
- post: /car 
- delete: /car/:cardId 
- delete: /productCar/:carId/:productId 

##### order   #####
- post: /order/:carId
- get: /order
- get: /order/:orderId

## how to run ##

1. Clone the repository,
2. Create a MySql db named carapi (you can change the name on the sequelizeDBMysql file to anywhere name)
3. run " npm run dev " to run on http://localhost:3010 into your computer.
4. start to testing the end points


