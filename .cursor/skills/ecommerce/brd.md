Project: Mini Frontend E-Commerce Website (No Backend)

Features:

1. Mock Login

    User enters email and clicks login

    No password validation

    Login state stored in Context

2. Products Listing

    Show static products from a local JS file

    Each product has:

        Name

        Price

        “Add to Cart” button

3. Cart Management

    User can add multiple products

    Cart updates dynamically

    Show total price

4. Address Input

    User enters delivery address on cart page

    Address stored temporarily in state

5. Order Placement

    On clicking "Place Order":

        Cart items + address are saved as an order

        Cart is cleared

6. Orders Page

    Shows list of placed orders

    Each order displays:

        Products

        Total Amount

        Delivery Date = Order Date + 5 days


Constraints

1)Frontend only

2)No payment integrations

3)No backend

4)Use React Context API

5)Use localStorage for persistence