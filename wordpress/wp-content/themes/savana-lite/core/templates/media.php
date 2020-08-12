<?php

/**
 *
 * This source file is subject to the GNU GENERAL PUBLIC LICENSE (GPL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

if (!function_exists('savana_lite_thumbnail_function')) {

	function savana_lite_thumbnail_function($id, $icon) {

		global $post;
		
		$class = ( $icon == true ) ? '' : 'no-overlay';
		
		if ( '' != get_the_post_thumbnail() ) { 
			
	?>
			
			<div class="pin-container <?php echo $class;?>">
					
				<?php 
						
					the_post_thumbnail($id);
						
					if ( $icon == true ):
						
						echo savana_lite_posticon();	
						
					endif;
					
				?>
                    
			</div>
			
	<?php
	
		}
	
	}

	add_action( 'savana_lite_thumbnail', 'savana_lite_thumbnail_function', 10, 2 );

}

?>