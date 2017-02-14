$('document').ready(function() {
	var products = {};
	$.get('product_data.json', function(data) {
		products = data;
		},'json');
});

var builder = function() {
    var getProductTemplate = function(data) {
    	return'<div class="content-box" data-id="'+data.id+'">'
					+'<img src="'+data.image+'" alt="downTownImage">'
					+'<p><span>Middle of downtown</span></p>'
					+'<p>We fill the space content. High-quality,<br>beautiful, solid and pleasant to the touch.</p>'
				+'</div>'
    }

    return {
        buildProduct: getProductTemplate;
    }
}