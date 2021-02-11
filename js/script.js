const submitBtn = document.querySelector('.submit-btn')
const addBtn = document.querySelector('.add-btn')
const overlay = document.querySelector('#overlay')
const form = document.querySelector('#form')
const confirmation = document.querySelector('#confirmation')

let myLibrary = []
// let myLibrarySerialized = JSON.stringify(myLibrary)

if (!localStorage.setItem('myLibrary', JSON.stringify(myLibrary)))
	localStorage.setItem('myLibrary', JSON.stringify(myLibrary))

// let myLibraryDeserialized = JSON.parse(localStorage.getItem('myLibrary'))

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

const addToLibrary = () => {
	const bookTitle = document.querySelector('input[name="title"]').value
	const bookAuthor = document.querySelector('input[name="author"]').value
	const bookPages = document.querySelector('input[name="pages"]').value
	const bookStatus = document.querySelector('input[name="read-status"]')
		.checked
	myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
	myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookStatus))
	localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
	confirmation.innerText = 'Book Added!'
	console.log(localStorage)
}

const openForm = () => {
	overlay.classList.remove('overlay-hidden')
	overlay.classList.add('overlay')
}

const escapeOverlay = e => {
	if (e.target === overlay && !overlay.classList.contains('hidden')) {
		overlay.classList.remove('overlay')
		overlay.classList.add('overlay-hidden')
	} else if (e.target === submitBtn) {
		e.preventDefault()
		overlay.classList.remove('overlay')
		overlay.classList.add('overlay-hidden')
	}
}

const createBook = () => {}

addBtn.addEventListener('click', openForm)
submitBtn.addEventListener('click', () => {
	addToLibrary()
	createBook()
	escapeOverlay(submitBtn)
})
overlay.addEventListener('click', escapeOverlay)
