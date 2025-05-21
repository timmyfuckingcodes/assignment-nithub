//Library management system
class Library {
    public title: string;
    public author: string;
    private BookisAvailable: boolean = true;
  
    constructor(title:string,author:string) {
        this.title = title;
        this.author = author;
    }
  
    borrow(): string {
      if (this.BookisAvailable) {
        this.BookisAvailable = false;
      } 
      return `Book is available`
    }
  
    returnBook(): string {
      if (!this.BookisAvailable) {
        this.BookisAvailable = true;
      }
      return `BOOK is not available`
    }
  
    isBookAvailable(): boolean {
        console.log(this.isBookAvailable);
      return this.BookisAvailable;
    }
  
  }
const Book= new Library("shekespare","shakespare");
Book.title;