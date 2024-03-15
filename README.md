**KINDLY RELOAD THE WEB PAGE FOR CLEAR NAVIGATION AND FOR NOT OCCURING ANY FURTHER ISSUES IN PROJECT**
ERP System Frontend

This project is a simplified interface for an ERP (Enterprise Resource Planning) system, designed to manage basic business operations efficiently. 
The system includes a Dashboard, Products Management, Orders Management, and an optional feature - Orders Calendar View.

Getting Started
Follow these instructions to get the project up and running on your local machine.

Prerequisites:
- Node.js installed on your machine
- npm (Node Package Manager)

Installation:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/erp-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd erp-system
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

Running the Application:
Development Mode:
To run the application in development mode with hot-reloading:
```bash
npm start
```
The application will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

To build the application for production:

```bash

npm run build
```
This command will create an optimized build in the `build` directory.


Features:

Dashboard
- Display a summary of key metrics or features.
- Include links or buttons for quick navigation to the Products and Orders management pages.

Products Management
•	Present a user-friendly interface showcasing a list of products with essential details such as name, category, price, and stock quantity. 
•	We can add new products, edit existing ones, and delete items from the inventory.

Orders Management
•	Display a comprehensive list of orders featuring key information like order ID, customer name, order date, and status. 
•	For enhanced user experience we can view detailed order information, update order statuses, and provide an option to delete orders if necessary.

Orders Calendar View 
•	Integrated a visually appealing calendar view that highlights orders based on their expected delivery dates. 
•	This calendar should offer a convenient way for users to click on a specific date and instantly access a comprehensive list of orders scheduled for delivery on that day.
•	 This optional feature enhances the overall user experience and facilitates efficient order management.

Technologies Used:
- Using vs code and node.js react application is set up to run.
- React for building modular components and managing application state.
- React Router for navigation between different sections of the ERP system.
- Responsive design for both desktop and mobile devices.

Dashboard:
Certainly! Let’s assume a set of dummy data simple explanation for the data displayed in the Dashboard.

Explanation of Key Metrics:

DashboardMetrics: (erp-system\src\components\Dashboard\DashboardMetrics.js)
Total Products:
     - This metric represents the overall count of products currently available in the inventory.
     - In the dummy data, `Total Products` is set to 150.
Total Orders:
     - This metric signifies the total number of orders placed by customers.
     - In the dummy data, `totalOrders` is set to 50.

Explanation of Quick Navigation:

(erp-system\src\App.js) – This is where the core of the project begins.
Products Button:
     - Clicking on this button will navigate the user to the “Products Management” page.
     - This page allows users to view, add, edit, and delete product listings.
Orders Button:
     - Clicking on this button will take the user to the “Orders Management” page.
     - Here, users can view and handle orders, and optionally view order details, update order status,
       and delete orders.
Calendar Button:
     - Clicking on this button will take the user to the “Orders Calendar” page.
     - Here, users can view the order details on a date a week, and a month.

These explanations should provide a clear understanding of the key metrics and the purpose of the navigation buttons on the Dashboard. 

Products Management: (erp-system\src\components\ProductsManagement)

ProductsManagement: 
(erp-system\src\components\ProductsManagement\ProductsManagement.js)
	This ProductsManagement.js file consists of all the forms like AddProductForm, EditProductForm, ProductDetails, ProductsList, and delete the products.

AddProductForm: (erp-system\src\components\ProductsManagement\AddProductForm.js)
	This form consists of adding a new product to the existing products where we can add name, category, price, and stock.

EditProductForm: (erp-system\src\components\ProductsManagement\EditProductForm.js)
	This form consists is created to edit the product details of the existing products where we can edit the information of name, category, price, and stock.

ProductDetails: (erp-system\src\components\ProductsManagement\ProductDetails.js)
	This JavaScript file shows the details of the products

ProductsList: (erp-system\src\components\ProductsManagement\ProductsList.js)
	This JavaScript file shows the list of all products

Orders Management: 

OrdersManagement: 
(erp-system\src\components\OrdersManagement\OrdersManagement.js)
	This OrdersManagement.js consists of Orders List linkage.

OrderDetails: (erp-system\src\components\OrdersManagement\OrderDetails.js)
	This JavaScript file shows the details of the Orders like order ID, customer name, total amount, and status of the order.

OrdersList: (erp-system\src\components\OrdersManagement\OrdersList.js)
	This JavaScript file shows the list of all Orders,
	This JavaScript file helps to edit the status of the orders to shipped and delivered and we can delete the orders at an instance.


Orders Calendar View:

OrdersCalendar: (erp-system\src\components\OrdersCalendar\OrdersCalendar.js)
	This OrdersCalendar.js file consists of all the details of orders to be delivered on a date said to be in a day a week or a month.
	When we click on the Agenda button in the calendar's top right corner we can get the details of orders to be delivered in a single day.

CalendarView: (erp-system\src\components\OrdersCalendar\CalendarView.js)
	This CalendarView.js file contains the code for the calendar to be displayed.






