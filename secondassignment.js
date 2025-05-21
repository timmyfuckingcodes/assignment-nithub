//Library management system
var Library = /** @class */ (function () {
    function Library(title, author) {
        this.BookisAvailable = true;
        this.title = title;
        this.author = author;
    }
    Library.prototype.borrow = function () {
        if (this.BookisAvailable) {
            this.BookisAvailable = false;
        }
        return "Book is available";
    };
    Library.prototype.returnBook = function () {
        if (!this.BookisAvailable) {
            this.BookisAvailable = true;
        }
        return "BOOK is not available";
    };
    Library.prototype.isBookAvailable = function () {
        console.log(this.isBookAvailable);
        return this.BookisAvailable;
    };
    return Library;
}());
var Book = new Library("shekespare", "shakespare");
Book.title;
