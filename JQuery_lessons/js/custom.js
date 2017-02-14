 var products = {};
 var filter = {
 	states:[],
 };
 console.log(filter)
 // var selectStates = $('#bookingForm').find('select.states');
 // console.log(selectStates);



function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

    $('document').ready(function() {
        $.get('hotel_rooms_data.json', function(data) {
            products = data;
            var templates = $.map(products, function(product) {
            	var states = [];
            	for (var key in product.state) {
            		if (product.state[key] == true) {
            			states.push(key);
            		}
            	}

            	filter.states  = arrayUnique(filter.states.concat(states));
            	

                return builder.buildProduct(product);
            })  

            $('.row').html(templates);
            var select = $('select.states');
            
            console.log($('select.states'));



            $.each(filter, function(filter, val) {




            	/* iterate through array or object */
            	$( "<option>val(filter)</option>" ).appendTo( 'select.states' );
            });


        }, 'json');
    })

    var builder = (function() {
        var getProductTemplate = function(data) {
            return '<div class="content-box" data-id="'+data.id+'">'
						+'<img src="'+data.images[0]+'" alt="downTownImage">'
						+'<p><span>"'+data.title+'"</span></p>'
						+'<p><br>"'+data.description+'"</p>'
						+'<div class="btn">'
						+'<button type="button" id="hotelButton" class="btn-primary">More</button>'
						+'</div>'
					+'</div>'

            // '<div class="item col-md-4 col-sm-6 col-xs-12" data-id="' + data.id + '">' +
            //     '<img src="' + data.image + '" />' +
            //     '<p class="item_name">' + data.model + ' </p>/' +
            //     '<p class="item_collection">Men’s Basketball Shoes</p>' +
            //     '<p class="item_price">' + data.price + '</p>' +
            //     '</div>';
        }

        return {
            buildProduct: getProductTemplate,
        }
    })()




$(document).ready(function() {

	/*
	//work before add JSON
	
	$('#hotelButton').on('click', function(e) {
		e.preventDefault();

		var result = $('#hotelLists').find('.hidden');
    	console.log(result.length);

    	if (result.length) {
	    	result.first().removeClass('hidden');
    	}else{
    		$('#hotelLists>div').last().addClass('hidden');

    		// $('#hotelLists>div').last().addClass('hidden');
    		// console.log($('#hotelLists>div').length);
    		$('#hotelLists>div').eq(2).addClass('hidden');

    		// for (var i = result.length; i < 2; i++) {
    		// 	$('#hotelLists>div').last().addClass('hidden');
    		// }
    	};
	});
	*/


});
