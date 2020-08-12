<?php
/**
 * Content Posts Blocks Widget
 *
 * @package    Metrolo
 */

/**
* Class Hoot_Content_Posts_Blocks_Widget
*/
class Hoot_Content_Posts_Blocks_Widget extends HybridExtend_WP_Widget {

	function __construct() {

		$settings['id'] = 'hoot-posts-blocks-widget';
		$settings['name'] = __( 'Hoot > Content Blocks (Posts)', 'metrolo' );
		$settings['widget_options'] = array(
			'description'	=> __('Display Styled Content Blocks.', 'metrolo'),
			// 'classname'		=> 'hoot-posts-blocks-widget', // CSS class applied to frontend widget container via 'before_widget' arg
		);
		$settings['control_options'] = array();
		$settings['form_options'] = array(
			//'name' => can be empty or false to hide the name
			array(
				'name'		=> __( "Title (optional)", 'metrolo' ),
				'id'		=> 'title',
				'type'		=> 'text',
			),
			array(
				'name'		=> __( 'Blocks Style', 'metrolo' ),
				'id'		=> 'style',
				'type'		=> 'images',
				'std'		=> 'style1',
				'options'	=> array(
					'style1'	=> HYBRIDEXTEND_INCURI . 'admin/images/content-block-style-1.png',
					'style2'	=> HYBRIDEXTEND_INCURI . 'admin/images/content-block-style-2.png',
					// 'style3'	=> HYBRIDEXTEND_INCURI . 'admin/images/content-block-style-3.png',
					'style4'	=> HYBRIDEXTEND_INCURI . 'admin/images/content-block-style-4.png',
				),
			),
			array(
				'name'		=> __( 'Category (Optional)', 'metrolo' ),
				'desc'		=> __( 'Leave empty to display posts from all categories.', 'metrolo' ),
				'id'		=> 'category',
				'type'		=> 'select',
				'options'	=> array( '0' => '' ) + HybridExtend_WP_Widget::get_tax_list('category') ,
			),
			array(
				'name'		=> __( 'No. Of Columns', 'metrolo' ),
				'id'		=> 'columns',
				'type'		=> 'smallselect',
				'std'		=> '4',
				'options'	=> array(
					'1'	=> __( '1', 'metrolo' ),
					'2'	=> __( '2', 'metrolo' ),
					'3'	=> __( '3', 'metrolo' ),
					'4'	=> __( '4', 'metrolo' ),
					'5'	=> __( '5', 'metrolo' ),
				),
			),
			array(
				'name'		=> __( 'Number of Posts to show', 'metrolo' ),
				'desc'		=> __( 'Default: 4', 'metrolo' ),
				'id'		=> 'count',
				'type'		=> 'text',
				'settings'	=> array( 'size' => 3, ),
				'sanitize'	=> 'absint',
			),
			array(
				'name'		=> __( 'Offset', 'metrolo' ),
				'desc'		=> __( 'Number of posts to skip from the start. Leave empty to start from the latest post.', 'metrolo' ),
				'id'		=> 'offset',
				'type'		=> 'text',
				'settings'	=> array( 'size' => 3, ),
				'sanitize'	=> 'absint',
			),
			array(
				'name'		=> __( 'Show Author', 'metrolo' ),
				'id'		=> 'show_author',
				'type'		=> 'checkbox',
			),
			array(
				'name'		=> __( 'Show Post Date', 'metrolo' ),
				'id'		=> 'show_date',
				'type'		=> 'checkbox',
			),
			array(
				'name'		=> __( 'Show number of comments', 'metrolo' ),
				'id'		=> 'show_comments',
				'type'		=> 'checkbox',
			),
			array(
				'name'		=> __( 'Show categories', 'metrolo' ),
				'id'		=> 'show_cats',
				'type'		=> 'checkbox',
			),
			array(
				'name'		=> __( 'Show tags', 'metrolo' ),
				'id'		=> 'show_tags',
				'type'		=> 'checkbox',
			),
			array(
				'name'		=> __( 'Content', 'metrolo' ),
				'id'		=> 'fullcontent',
				'type'		=> 'select',
				'std'		=> 'excerpt',
				'options'	=> array(
					'excerpt'	=> __( 'Display Excerpt', 'metrolo' ),
					'content'	=> __( 'Display Full Content', 'metrolo' ),
					'none'		=> __( 'None', 'metrolo' ),
				),
			),
			array(
				'name'		=> __( 'Custom Excerpt Length', 'metrolo' ),
				'desc'		=> __( 'Select \'Display Excerpt\' in option above. Leave empty for default excerpt length.', 'metrolo' ),
				'id'		=> 'excerptlength',
				'type'		=> 'text',
				'settings'	=> array( 'size' => 3, ),
				'sanitize'	=> 'absint',
			),
			array(
				'name'		=> __( 'Border', 'metrolo' ),
				'desc'		=> __( 'Top and bottom borders.', 'metrolo' ),
				'id'		=> 'border',
				'type'		=> 'select',
				'std'		=> 'none none',
				'options'	=> array(
					'line line'		=> __( 'Top - Line || Bottom - Line', 'metrolo' ),
					'line shadow'	=> __( 'Top - Line || Bottom - DoubleLine', 'metrolo' ),
					'line none'		=> __( 'Top - Line || Bottom - None', 'metrolo' ),
					'shadow line'	=> __( 'Top - DoubleLine || Bottom - Line', 'metrolo' ),
					'shadow shadow'	=> __( 'Top - DoubleLine || Bottom - DoubleLine', 'metrolo' ),
					'shadow none'	=> __( 'Top - DoubleLine || Bottom - None', 'metrolo' ),
					'none line'		=> __( 'Top - None || Bottom - Line', 'metrolo' ),
					'none shadow'	=> __( 'Top - None || Bottom - DoubleLine', 'metrolo' ),
					'none none'		=> __( 'Top - None || Bottom - None', 'metrolo' ),
				),
			),
			array(
				'name'		=> __( 'Widget CSS', 'metrolo' ),
				'id'		=> 'customcss',
				'type'		=> 'collapse',
				'fields'	=> array(
					array(
						'name'		=> __( 'Custom CSS Class', 'metrolo' ),
						'desc'		=> __( 'Give this widget a custom css classname', 'metrolo' ),
						'id'		=> 'class',
						'type'		=> 'text',
					),
					array(
						'name'		=> __( 'Margin Top', 'metrolo' ),
						'desc'		=> __( '(in pixels) Leave empty to load default margins', 'metrolo' ),
						'id'		=> 'mt',
						'type'		=> 'text',
						'settings'	=> array( 'size' => 3 ),
						'sanitize'	=> 'integer',
					),
					array(
						'name'		=> __( 'Margin Bottom', 'metrolo' ),
						'desc'		=> __( '(in pixels) Leave empty to load default margins', 'metrolo' ),
						'id'		=> 'mb',
						'type'		=> 'text',
						'settings'	=> array( 'size' => 3 ),
						'sanitize'	=> 'integer',
					),
					array(
						'name'		=> __( 'Widget ID', 'metrolo' ),
						'id'		=> 'widgetid',
						'type'		=> '<span class="widgetid" data-baseid="' . $settings['id'] . '">' . __( 'Save this widget to view its ID', 'metrolo' ) . '</span>',
					),
				),
			),
		);

		$settings = apply_filters( 'hoot_content_posts_blocks_widget_settings', $settings );

		parent::__construct( $settings['id'], $settings['name'], $settings['widget_options'], $settings['control_options'], $settings['form_options'] );

	}

	/**
	 * Echo the widget content
	 */
	function display_widget( $instance, $before_title = '', $title='', $after_title = '' ) {
		extract( $instance, EXTR_SKIP );
		include( hybridextend_locate_widget( 'content-posts-blocks' ) ); // Loads the widget/content-posts-blocks or template-parts/widget-content-posts-blocks.php template.
	}

}

/**
 * Register Widget
 */
function hoot_content_posts_blocks_widget_register(){
	register_widget('Hoot_Content_Posts_Blocks_Widget');
}
add_action('widgets_init', 'hoot_content_posts_blocks_widget_register');