<?php
/**
 * Call To Action Widget
 *
 * @package    Metrolo
 */

/**
* Class Hoot_CTA_Widget
*/
class Hoot_CTA_Widget extends HybridExtend_WP_Widget {

	function __construct() {

		$settings['id'] = 'hoot-cta-widget';
		$settings['name'] = __( 'Hoot > Call To Action', 'metrolo' );
		$settings['widget_options'] = array(
			'description'	=> __('Display Call To Action block.', 'metrolo'),
			// 'classname'		=> 'hoot-cta-widget', // CSS class applied to frontend widget container via 'before_widget' arg
		);
		$settings['control_options'] = array();
		$settings['form_options'] = array(
			//'name' => can be empty or false to hide the name
			array(
				'name'		=> __( 'Headline', 'metrolo' ),
				'id'		=> 'headline',
				'type'		=> 'text',
			),
			array(
				'name'		=> __( 'Description', 'metrolo' ),
				'id'		=> 'description',
				'type'		=> 'textarea',
			),
			array(
				'name'		=> __( 'Button Text', 'metrolo' ),
				'id'		=> 'button_text',
				'type'		=> 'text',
				'std'		=> __( 'KNOW MORE', 'metrolo' ),
			),
			array(
				'name'		=> __( 'Button URL', 'metrolo' ),
				'desc'		=> __( 'Leave empty if you dont want to show button', 'metrolo' ),
				'id'		=> 'url',
				'type'		=> 'text',
				'sanitize'	=> 'url',
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

		$settings = apply_filters( 'hoot_cta_widget_settings', $settings );

		parent::__construct( $settings['id'], $settings['name'], $settings['widget_options'], $settings['control_options'], $settings['form_options'] );

	}

	/**
	 * Echo the widget content
	 */
	function display_widget( $instance, $before_title = '', $title='', $after_title = '' ) {
		extract( $instance, EXTR_SKIP );
		include( hybridextend_locate_widget( 'cta' ) ); // Loads the widget/cta or template-parts/widget-cta.php template.
	}

}

/**
 * Register Widget
 */
function hoot_cta_widget_register(){
	register_widget('Hoot_CTA_Widget');
}
add_action('widgets_init', 'hoot_cta_widget_register');