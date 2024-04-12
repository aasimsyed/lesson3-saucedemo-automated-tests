# Test Cases for Saucedemo.com

## TC_1: Valid Standard User Login

**Objective**: Ensure that the `standard_user` can log in with valid credentials.

**Steps**:

1. Go to `https://www.saucedemo.com`.
2. Enter `standard_user` into the username field.
3. Enter the correct password into the password field.
4. Click the login button.

**Expected Result**:

- The user should be redirected to the products page.

**Test Data**:

- Username: `standard_user`
- Password: `secret_sauce`

## TC_2: Invalid Standard User Login

**Objective**: Verify the application's behavior with invalid login credentials.

**Steps**:

1. Go to `https://www.saucedemo.com`.
2. Enter `standard_user` into the username field.
3. Enter an incorrect password into the password field.
4. Click the login button.

**Expected Result**:

- An error message should be displayed.

**Test Data**:

- Username: `standard_user`
- Password: `incorrect_password`

## TC_3: Logout Functionality

**Objective**: Confirm that the `standard_user` can log out after logging in.

**Steps**:

1. Execute the steps for a valid login from TC_1.
2. Click the menu button on the top left corner of the page.
3. Click the logout link.

**Expected Result**:

- The user should be redirected to the login page.

## TC_4: Add to Cart

**Objective**: Ensure that the user can add an item to the cart.

**Steps**:

1. Execute the steps for a valid login from TC_1.
2. Click on the first item's add-to-cart button.

**Expected Result**:

- The item should be added to the cart, as indicated by the cart icon.

## TC_5: Checkout Process

**Objective**: Validate the checkout process for a selected item.

**Steps**:

1. Execute the steps for adding an item to the cart from TC_4.
2. Click on the cart icon.
3. Click on the checkout button.
4. Enter checkout information and click continue.
5. Click on the finish button.

**Expected Result**:

- The user should be directed to a confirmation page indicating a successful checkout.

**Test Data**:

- First Name: `John`
- Last Name: `Doe`
- Postal Code: `12345`
