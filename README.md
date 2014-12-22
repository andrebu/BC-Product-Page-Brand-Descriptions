BigCommerce-Product-Page-Brand-Descriptions
===========================================

BigCommerce Product Page Brand Descriptions that are based on the brand of the product and are dynamically pulled from a separate page and added to the product page

================================================================================================
================================================================================================
================================================================================================








#4.  Dynamic Brand Descriptions
4.1 - Add all Brand descriptions to the /brand-descriptions/ page.
4.2 - Delete all static brand entries from all products to avoid duplicates
4.3 - Transfer JavaScript code over to DankStop (Place %%Panel.ProductPageBrandDescriptions.html%% in Panels/ProductDescription.html, right after "%%GLOBAL_ProductDescriptionOptimizerNoScriptTag%%")

<hr class="top-sep">
<div id="amg-brand-banner" class="brand-banner"> 
		<div class="brand-logo">
			<a href="http://andredevelopment.mybigcommerce.com/brands/AMG-GLASS.html">
				<img class="brand-image" src="https://cdn6.bigcommerce.com/s-ss4br/product_images/uploaded_images/amglogo.jpg" alt="AMG Brand Glass" height="100"> <!-- width="100" --> 
			</a>
		</div> 
		<div class="brand-info">
			<h3 class="brand-name">
				About 
				<a href="http://andredevelopment.mybigcommerce.com/brands/AMG-GLASS.html">AMG Glass</a>
			</h3> 
			<p class="brand-description">AMG stands for American Made Glass, and they stay true to the name. Their glass water pipes, concentrate rigs, and bubblers are all made out of thick borosilicate glass right here in the USA. Want an AMG product customized? Contact us by phone or email for to order an AMG piece in a style or color you don't see here. <a href="http://andredevelopment.mybigcommerce.com/brands/AMG-GLASS.html">Learn more about AMG Glass...</a></p>
		</div>
</div>

        <script type="text/javascript">    
            $(document).ready(function() {

                $.ajax({
                  url: "/brand-descriptions/" 

                }).done(function ( data ) {
                    var html = $(data);
                        items = $('.BlockContent .brand-banner', html);
                        DankStopTheBest = html.find('#DankStopTheBest').html();
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
                    });                             
                });
            });
        </script>

        <!-- $(document).ready( -->
<script type="text/javascript">    
$(window).bind("load", function () {

    $.ajax({
        url: "/brand-descriptions/",
        type: "GET",
        dataType: "html",
        success: function (data) {
            var html = $(data);
            var items = $('.BlockContent .brand-banner', html);
            items.each(function () {

                var brand = this.id;

                if (brand) {
                    var brname = '%%GLOBAL_BrandName%%';
                        replaced1 = String(brand.replace(/ /g, ''));
                        replaced2 = String(brname.replace(/ /g, ''));

                    if (replaced1.toUpperCase() === replaced2.toUpperCase()) {
                        brandContent = this;
                        $('.ProductDescriptionContainer').append("<hr class='top-sep'>");
                        $('.ProductDescriptionContainer').append(brandContent);
                                        }        
                                    }                                
                                });                             
                            }
                        });
                    });
        </script> 






                    <script type="text/javascript">    
                        $(document).ready(function() {
            
                            $.ajax({
                              url: "/brand-descriptions/" 
            
                            }).done(function ( data ) {
                                var html = $(data);
                                var items = $('.BlockContent .brand-banner', html);
            console.log(items);
                                items.each(function() {
                                    var link = $('a', this);
                                    if(link){
                                    var txt = $(link).text();   
                                    var brname = '%%GLOBAL_BrandName%%'
                                    var replaced1 = txt.trim();                             
                                    var replaced2 = String(brname.replace(/ /g, ' '));     
                                          if( replaced1 === replaced2 ){
										   	var brandBox = '<hr class="top-sep"> \
																<div id="amg-brand-banner" class="brand-banner"> \
																		<div class="brand-logo"> \
																			<a href="http://andredevelopment.mybigcommerce.com/brands/AMG-GLASS.html"> \
																				<img class="brand-image" src="https://cdn6.bigcommerce.com/s-ss4br/product_images/uploaded_images/amglogo.jpg" alt="AMG Brand Glass" height="100"> <!-- width="100" --> \
																			</a> \
																		</div> \
																		<div class="brand-info"> \
																			<h3 class="brand-name"> \
																				About \
																				<a href="http://andredevelopment.mybigcommerce.com/brands/AMG-GLASS.html">AMG Glass</a> \
																			</h3> \
																			<p class="brand-description"> \
																				AMG stands for American Made Glass, and they stay true to the name. Their glass water pipes, concentrate rigs, and bubblers are all made out of thick borosilicate glass right here in the USA. Want an AMG product customized? Contact us by phone or email for to order an AMG piece in a style or color you don\'t see here. <a href="http://andredevelopment.mybigcommerce.com/brands/AMG-GLASS.html">Learn more about AMG Glass...</a></p> \
																		</div> \
																</div>';
										   $('.ProductDescriptionContainer').append(brandBox);
                                        }        
                                    }                                
                                });                             
                            });
                        });
                    </script>

				
				
				
				
				






================================================================================================

================================================================================================

================================================================================================
