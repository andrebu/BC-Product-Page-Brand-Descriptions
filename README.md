BigCommerce-Product-Page-Brand-Descriptions
===========================================

BigCommerce Product Page Brand Descriptions that are based on the brand of the product and are dynamically pulled from a separate page and added to the product page

================================================================================================

To Do
-----
1. Product type inside the brand description

================================================================================================
================================================================================================

4.  Dynamic Brand Descriptions
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


## Installation

    Will provide later.

## Using

To get this to work, you just need to require the module once per run-time, like so.

    Just install and it'l do the work for you!


## Resources

1. [Get selected element's outer HTML](http://stackoverflow.com/questions/2419749/get-selected-elements-outer-html)
2. [Change certain paragraph text in jQuery?](http://stackoverflow.com/questions/10256795/change-certain-paragraph-text-in-jquery)

## Other BigCommerce modules

* [BigCommerce Product Page Demo Videos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Demo-Videos)
* [BigCommerce Product Page Brand Descriptions](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Descriptions)
* [BigCommerce Product Page Brand Logos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Logos)
* [BigCommerce Category Page Color Swatch](https://github.com/iamandrebulatov/BigCommerce-Color-Swatch-On-Category)
* [BigCommerce Category Page 2nd Alternate Thumbnail](https://github.com/iamandrebulatov/BigCommerce-Category-Pages-2nd-Alternate-Thumbnail)
* [BigCommerce Category Page Videos](https://github.com/iamandrebulatov/BigCommerce-Category-Page-Demo-Videos)
* [BigCommerce Category Page Out of Stock Ribbons](https://github.com/iamandrebulatov/BigCommerce-Out-of-Stock-Category-Items)


## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [ChangeTip](//changetip.com) or [GratiPay](//gratipay.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![ChangeTip donate button](http://andrebulatov.com/wp-content/uploads/tipme_button.png)](//www.changetip.com/tipme/andre.bulatov/ "Donate once-off to this project using ChangeTip")
[![GratiPay donate button](http://andrebulatov.com/wp-content/uploads/gratipay-button.png)](//www.gratipay.com/andrebulatov/ "Donate once-off to this project using GratiPay")


## License

The MIT License (MIT)

Copyright (c) 2014 Andre Bulatov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
