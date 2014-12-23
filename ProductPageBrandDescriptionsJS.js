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
