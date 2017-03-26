(function ($){

	var $posts = $('#article-index');
	var postsCollection = new wp.api.collections.Posts();

	$.ajax({
		type: 'GET',
		url: 'wp-json/wp/v2/posts?per_page=3',
		success: function(data){
			console.log(data);
			$.each(data, function(i, post) {
				$posts.append('<li>' + post.title.rendered + '</li>');
			});
		}

	});

	$posts.append( postsCollection.fetch() );

})(jQuery);

var post = Backbone.Collection.extend({
  url: 'wp-json/wp/v2/posts?per_page=3'
});