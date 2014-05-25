Emberjs.BookEditController = Ember.ObjectController.extend({
  needs: 'book',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.book.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('book',this.get('model'));
    }
  }
});

