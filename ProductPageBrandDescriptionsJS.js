    $(document).ready(function() {
	  function ajax3() {
        return $.ajax({
          url: "/brand-descriptions/" 
	        }).done(function ( data ) {
              var html = $(data);
                  items = $('.BlockContent .brand-banner', html);
                  DankStopTheBest = html.find('#DankStopTheBest')[0].outerHTML;
              $('.ProductDescriptionContainer').append("<hr class='top-sep'>");
              $('.ProductDescriptionContainer').append(DankStopTheBest);                            
              items.each(function() {
                var brand = this.id;
                if(brand){
                var brname = '%%GLOBAL_BrandName%%'
                    replaced1 = String(brand.replace(/ /g, '')).toUpperCase(); 
                    replaced2 = String(brname.replace(/ /g, '')).toUpperCase();   
                      if( replaced1 === replaced2 ){
                          brandContent = this;
                          $('.ProductDescriptionContainer').append("<hr class='top-sep'>");
                          $('.ProductDescriptionContainer').append(brandContent);
                    }        
                }                                
/*
            }).fail(function() { 
			    	return;
*/
		    });                             
        });
      }
	  $.when(ajax3()).done(function(a3){
        var dankStopBoxProduct = $('.productTypeSpan');
        	currentProductType = $('.JointSizeHeightContainer .DetailRow:eq(2)').find('.Value').text().toLowerCase();
//        	currentProductType = $('.JointSizeHeightContainer .Label:contains("Type")').find('.Value').text();
/*
        	productTypes = ["ashcatcher", 
        					"bubbler", 
        					"dab rig", 
        					"glass pipe", 
        					"grinder", 
        					"recycler", 
        					"smoking accessory", 
        					"titanium product", 
        					"vaporizer", 
        					"quartz product"];
*/
		dankStopBoxProduct.text(currentProductType);        					
      });
    });