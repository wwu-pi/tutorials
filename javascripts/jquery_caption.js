$(document).ready(function() {
	// Every image referenced from a Markdown document
	$(".recipe-content img").parent().each(function() {
		// Let's put a caption if there is one
		if($(this).contents().first().is('img')) {
           var img = $(this).contents().eq(0).detach();
           $(this).replaceWith($('<div class="figure"><div class="image">'+ 
            img[0].outerHTML + '</div><div class="caption">' + 
            this.innerHTML + '</div></div>'));
          }
		});
});