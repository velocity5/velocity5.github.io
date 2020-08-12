<div id="content" class="container">
	
    <div class="row">
    
    	<?php echo do_action('savana_lite_searched_item', 'off'); ?>
    
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

			<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        
                <?php do_action('savana_lite_postformat'); ?>
                <div class="clear"></div>
                
            </div>
		
		<?php 
			
			endwhile; 
			else:
		
		?>

			<div class="post-container col-md-12" >
    
                <article class="post-article not-found">
                                
                	<h1><?php esc_html_e( 'Not found', 'savana-lite' ) ?></h1>
                	<p><?php esc_html_e( 'Sorry, no posts matched your criteria', 'savana-lite' ) ?> <strong>: <?php echo esc_html($s); ?> </strong></p>
                 
                </article>
    
			</div>
        
		<?php endif; ?>
           
    </div>

	<?php do_action( 'savana_lite_pagination', 'archive'); ?>

</div>