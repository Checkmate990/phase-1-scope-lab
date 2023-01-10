var customerName = "bob";

function upperCaseCustomerName() {
  return (customerName = "BOB");
}

var bestCustomer = undefined;

function setBestCustomer() {
  return (bestCustomer = "not bob");
}

function overwriteBestCustomer() {
  return (bestCustomer = "maybe bob");
}

function changeLeastFavoriteCustomer() {
  const leastFavorite = "Putin";
  return (leastFavorite = "not bob");
}
