/*eslint-env browser*/
//GLOBAL VARIABLES
var customerType;
var invoiceTotal;
var discountPercent;
var discountAmount;
var newInvoiceTotal;

//DISPLAY MESSAGE
window.document.write("<h3>Welcome to the Invoice Application</h3>");

//ASK USER FOR CUSTOMER TYPE AND INVOICE
customerType = window.prompt("Enter the customer type (r/w)");
invoiceTotal = parseFloat(window.prompt("Enter invoice total"));

if (customerType === "r") {
    if (invoiceTotal > 0 && invoiceTotal < 100) {
        discountPercent = 0;
    } else if (invoiceTotal >= 100 && invoiceTotal < 250) {
        discountPercent = 0.1;
    } else if (invoiceTotal >= 250 && invoiceTotal < 500) {
        discountAmount = 0.2;
    } else {
        discountPercent = 0.25;
    }
} else if (customerType === "w") {
    if (invoiceTotal > 0 && invoiceTotal < 500) {
        discountPercent = 0.4;
    } else {
        discountPercent = 0.5;
    }
} else {
    discountPercent = 0;
}

discountAmount = invoiceTotal * discountPercent;
newInvoiceTotal = invoiceTotal - discountAmount;

window.document.write("Invoice total: $" + invoiceTotal + "<br>");
window.document.write("Discount percent: " + discountPercent * 100 + "<br>");
window.document.write("Discount amount: $" + discountAmount + "<br>");
window.document.write("New invoice total: $" + newInvoiceTotal);