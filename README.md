# PCDealer
<hr/>

<h2>ReactJS SoftUni Course Project</h2>

<b>PCDealer</b> is an online computers e-shop app. It consists of the following pages:
<ul>
    <li><b>Cart</b></li>
    Еvery logged-in user can see what products has he added to cart and (change) their quantities, the sub total and the shipping cost.
    <li><b>Checkout</b></li>
    Here logged-in user can choose whether to use his registration data as the order data or fill a custom one.
    <li><b>Home</b></li>
    This page consist of a sidebar with the product categories on the left side, a slider with images in the middle and two images which contain hyperlinks to <i>Gaming Laptops</i> and <i>Business Laptop</i> categories. Under them is placed a full-width slider with different computer brands.
    <li><b>Login</b></li>
    It consists of box with two input fields in it: <i>E-mail / Username</i> and <i>Password</i> and a <i>Login</i> button. If user enters the correct data he has registered with he will be logged-in and redirected to the <i>Home</i> page, else an error text is displayed.
    <li<b>Order view</b></li>
    It displays detailed data about an order a user has made.
    <li><b>Orders</b></li>
    Every logged-in user can access this page and see his order history including the date and time and the status of the orders. By clicking the <i>View</i> button on an order he is navigated to the corresponding <i>Order view</i> page.
    <li><b>Product details</b></li>
    Constains full data about a product: name, rating, price, images slider, description, specification and reviews. Here user can change the desired quantity he wants to buy. On the right side is placed a sidebar with two sections: <i>Categories</i> and <i>Brands</i>. There user can be navigated to the <i>Products</i> page with applied category or brand filter.
    <li><b>Products</b></li>
    This is products' catalog page. On the top there is a search bar which filters products on every character typed. Products can be sorted by different criterias: name, rating, newest, price. In addition to name (by typing a text in the search bar), products can be filtered by different price ranges, categories and brands. The catalog has paging: on every page there are six products displayed.
    <li><b>Register</b></li>
    Here non-logged-in user can make an account to the app. He needs to fill the following data: first name, last name, email, phone number, address, password and confirm password (type the same text as in the <i>Password</i> input). In real time user gets notified if the email he is typing is already used and if so the <i>Register</i> button gets disabled.
</ul>
Every existing page has the header and the footer in it.
<ul>
    <li><b>Header</b></li>
    It contains navigation bar which contains links to <i>Home</i> and <i>Products</i> pages, on the rightmost is the authentication navigation dropdown menu which changes depending if user is logged-in or not and under them is site image on the left and the cart icon with the counter inside it. If user is logged in the auth nav menu text is the his username, otherwise is <i>Login/Register</i>. This menu's dropdown options also change: if user is logged-in it constains <i>Orders</i> (which navigates user to the corresponding page) and <i>Logout</i>, else the options are <i>Login</i> and <i>Register</i> which, as you can guess, navigate to the corresponding page. Adding products to cart changes the number in the cart button if they aren't already in the cart, otherwise their quantity gets incremented. If you are logged-in clicking this button will navigate you to the <i>Cart</i> page, else user will be redirected do the <i>Login</i> page.
    <li><b>Footer</b></li>
    It constains different sections with links:
    <ul>
        <li>Get in Touch</li>
        Contains different contact information.
        <li>Follow Us</li>
        Contains social media icons links.
        <li>Company Info</li>
        Contains links to pages (non-existing) with information about the company.
        <li>Purchase info</li>
        Contains links to policy pages (non-existing) with information about the purchase process.
    </ul>
</ul>