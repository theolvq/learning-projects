let myLibrary = []
const btn = document.querySelector('input[type="button"]')

class Book {
	constructor(title, author, pages, status) {
		this.title = title
		this.author = author
		this.pages = pages
		this.status = status
	}
	info() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${
			this.status ? 'Already read!' : 'Not read yet.'
		}`
	}
}

const addToLibrary = () => {}

const createBook = () => {
	const bookTitle = document.querySelector('input[name="title"]').value
	const bookAuthor = document.querySelector('input[name="author"]').value
	const bookPages = document.querySelector('input[name="pages"]').value
	const bookStatus = document.querySelector('input[name="read-status"]')
		.checked
	myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookStatus))
}

btn.addEventListener('click', createBook)
