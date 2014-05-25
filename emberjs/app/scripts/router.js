Emberjs.Router.map(function () {
  
  this.resource('books', function(){
    this.resource('book', { path: '/:book_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
