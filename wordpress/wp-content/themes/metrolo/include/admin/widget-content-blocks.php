<?php
/**
 * Content Blocks Widget
 *
 * @package    Metrolo
 */

/**
* Class Hoot_Content_Blocks_Widget
*/
class Hoot_Content_Blocks_Widget extends HybridExtend_WP_Widget {

	function __construct() {

		$settings['id'] = 'hoot-content-blocks-widget';
		$settings['name'] = __( 'Hoot > Content Blocks (Pages)', 'metrolo' );
		$settings['widget_options'] = array(
			'description'	=> __('Display Styled Content Blocks.', 'metrolo'),
			// 'classname'		=> 'hoot-content-blocks-widget', // CSS class applied to frontend widget container via 'before_widget' arg
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
					'style3'	=> HYBRIDEXTEND_INCURI . 'admin/images/content-block-style-3.png',
					'style4'	=> HYBRIDEXTEND_INCURI . 'admin/images/content-block-style-4.png',
				),
			),
			array(
				'name'		=> __( 'No. Of Columns', 'metrolo' ),
				'id'		=> 'columns',
				'type'		=> 'select',
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
				'name'		=> __( 'Content Boxes', 'metrolo' ),
				'id'		=> 'boxes',
				'type'		=> 'group',
				'options'	=> array(
					'item_name'	=> __( 'Content Box', 'metrolo' ),
				),
				'fields'	=> array(
					array(
						'name'		=> __( 'Title/Content/Image', 'metrolo' ),
						'desc'		=> __( 'Page Title, Content and Featured Image will be used.', 'metrolo' ),
						'id'		=> 'page',
						'type'		=> 'select',
						'options'	=> HybridExtend_WP_Widget::get_wp_list('page'),
					),
					array(
						'name'		=> __( 'Sub Heading (optional)', 'metrolo' ),
						'id'		=> 'subtitle',
						'type'		=> 'text',
					),
					array(
						'name'		=> __( 'Content', 'metrolo' ),
						'id'		=> 'excerpt',
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
						'name'		=> __('Link Text (optional)', 'metrolo'),
						'id'		=> 'link',
						'type'		=> 'text'),
					array(
						'name'		=> __('Link URL', 'metrolo'),
						'id'		=> 'url',
						'type'		=> 'text',
						'sanitize'	=> 'url'),
					array(
						'name'		=> __('Icon', 'metrolo'),
						'desc'		=> __( 'Use an icon instead of featured image of the page selected above.', 'metrolo' ),
						'id'		=> 'icon',
						'type'		=> 'icon',
					),
					array(
						'name'		=> __( 'Icon Style', 'metrolo' ),
						'id'		=> 'icon_style',
						'type'		=> 'select',
						'std'		=> 'circle',
						'options'	=> array(
							'none'		=> __( 'None', 'metrolo' ),
							'circle'	=> __( 'Circle', 'metrolo' ),
							'square'	=> __( 'Square', 'metrolo' ),
						),
					),
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

		$settings = apply_filters( 'hoot_content_blocks_widget_settings', $settings );

		parent::__construct( $settings['id'], $settings['name'], $settings['widget_options'], $settings['control_options'], $settings['form_options'] );

	}

	/**
	 * Echo the widget content
	 */
	function display_widget( $instance, $before_title = '', $title='', $after_title = '' ) {
		extract( $instance, EXTR_SKIP );
		include( hybridextend_locate_widget( 'content-blocks' ) ); // Loads the widget/content-blocks or template-parts/widget-content-blocks.php template.
	}

}

/**
 * Register Widget
 */
function hoot_content_blocks_widget_register(){
	register_widget('Hoot_Content_Blocks_Widget');
}
add_action('widgets_init', 'hoot_content_blocks_widget_register');