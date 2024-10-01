let book = {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
    year: 1998,
    getSummaray: function() {
        alert(' title: ' + this.title + ' author: ' + this.author + ' year: ' + this.year);
    }
}
book.getSummaray();