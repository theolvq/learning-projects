let myLibrary = []
const submitBtn = document.querySelector('input[type="button"]')
const addBtn = document.querySelector('.add-btn')
const overlay = document.querySelector('#overlay')
const form = document.querySelector('#form')

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

const openForm = () => {
	overlay.classList.remove('overlay-hidden')
	overlay.classList.add('overlay')
}

const escapeOverlay = () => {
	if (!overlay.classList.contains('hidden')) {
		overlay.classList.remove('overlay')
		overlay.classList.add('overlay-hidden')
	}
}

const createBook = () => {
	const bookTitle = document.querySelector('input[name="title"]').value
	const bookAuthor = document.querySelector('input[name="author"]').value
	const bookPages = document.querySelector('input[name="pages"]').value
	const bookStatus = document.querySelector('input[name="read-status"]')
		.checked

	myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookStatus))
}
addBtn.addEventListener('click', openForm)
submitBtn.addEventListener('click', createBook)
overlay.addEventListener('click', escapeOverlay)
