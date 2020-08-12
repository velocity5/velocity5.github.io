<?php
/**
 * Defines customizer options
 *
 * This file is loaded at 'after_setup_theme' hook with 10 priority.
 *
 * @package    Metrolo
 */

/**
 * Build the Customizer options (panels, sections, settings)
 *
 * Always remember to mention specific priority for non-static options like:
 *     - options being added based on a condition (eg: if woocommerce is active)
 *     - options which may get removed (eg: logo_size, headings_fontface)
 *     - options which may get rearranged (eg: logo_background_type)
 *     This will allow other options inserted with priority to be inserted at
 *     their intended place.
 *
 * @since 1.0
 * @access public
 * @return array
 */
if ( !function_exists( 'hoot_theme_customizer_options' ) ) :
function hoot_theme_customizer_options() {

	// Stores all the settings to be added
	$settings = array();

	// Stores all the sections to be added
	$sections = array();

	// Stores all the panels to be added
	$panels = array();

	// Theme default colors and fonts
	extract( apply_filters( 'hoot_theme_options_defaults', array(
		'accent_color'             => '#d02121',
		'accent_font'              => '#ffffff',
		'contrast_color'           => '#1c1c1c',
		'contrast_font'            => '#ffffff',
		'box_background'           => '#f1f1f1',
		'site_background'          => '#ffffff',
		'wt_html_slide_background' => '#ffffff',
	) ) );

	// Directory path for radioimage buttons
	$imagepath =  HYBRIDEXTEND_INCURI . 'admin/images/';

	// Logo Sizes (different range than standard typography range)
	$logosizes = array();
	$logosizerange = range( 14, 110 );
	foreach ( $logosizerange as $isr )
		$logosizes[ $isr . 'px' ] = $isr . 'px';
	$logosizes = apply_filters( 'hoot_theme_options_logosizes', $logosizes);

	// Logo Font Options for Lite version
	$logofont = apply_filters( 'hoot_theme_options_logofont', array(
					'heading' => __("Logo Font (set in 'Typography' section)", 'metrolo'),
					'standard' => __('Standard Body Font', 'metrolo'),
					) );

	/*** Add Options (Panels, Sections, Settings) ***/

	/** Section **/

	$section = 'links';

	$sections[ $section ] = array(
		'title'       => __( 'Demo / Support', 'metrolo' ),
		'priority'    => '2',
	);

	$lcontent = '';
	$lcontent .= '<a class="hoot-cust-link" href="' .
				 'https://demo.wphoot.com/metrolo/' .
				 '" target="_blank"><span class="hoot-cust-link-head">' .
				 '<i class="fas fa-eye"></i> ' .
				 __( "Demo", 'metrolo') . 
				 '</span><span class="hoot-cust-link-desc">' .
				 __( "Demo the theme features and options with sample content.", 'metrolo') .
				 '</span></a>';
	$ocdilink = ( class_exists( 'Hoot_Theme_Premium' ) ) ? ( ( class_exists( 'OCDI_Plugin' ) ) ? admin_url( 'themes.php?page=pt-one-click-demo-import' ) : 'https://wphoot.com/support/metrolo/#docs-section-demo-content' ) : 'https://wphoot.com/support/metrolo/#docs-section-demo-content-free';
	$lcontent .= '<a class="hoot-cust-link" href="' .
				 esc_url( $ocdilink ) .
				 '" target="_blank"><span class="hoot-cust-link-head">' .
				 '<i class="fas fa-upload"></i> ' .
				 esc_html__( "1 Click Installation", 'metrolo') . 
				 '</span><span class="hoot-cust-link-desc">' .
				 esc_html__( "Install demo content to make your site look exactly like the Demo Site. Use it as a starting point instead of starting from scratch.", 'metrolo') .
				 '</span></a>';
	$lcontent .= '<a class="hoot-cust-link" href="' .
				 'https://wphoot.com/support/' .
				 '" target="_blank"><span class="hoot-cust-link-head">' .
				 '<i class="far fa-life-ring"></i> ' .
				 __( "Documentation / Support", 'metrolo') . 
				 '</span><span class="hoot-cust-link-desc">' .
				 __( "Get theme related support for both free and premium users.", 'metrolo') .
				 '</span></a>';
	$lcontent .= '<a class="hoot-cust-link" href="' .
				 'https://wordpress.org/support/theme/metrolo/reviews/#new-post' .
				 '" target="_blank"><span class="hoot-cust-link-head">' .
				 '5 <i class="fas fa-star"></i> ' .
				 __( "Rate Us", 'metrolo') . 
				 '</span><span class="hoot-cust-link-desc">' .
				 __( "If you are happy with the theme, give us a 5 star rating on wordpress.org", 'metrolo') .
				 '</span></a>';

	$settings['linksection'] = array(
		// 'label'       => __( 'Misc Links', 'metrolo' ),
		'section'     => $section,
		'type'        => 'content',
		'priority'    => '8', // Non static options must have a priority
		'content'     => $lcontent,
	);

	/** Section **/

	$section = 'title_tagline';

	$sections[ $section ] = array(
		'title'       => __( 'Setup &amp; Layout', 'metrolo' ),
	);

	$settings['site_layout'] = array(
		'label'       => __( 'Site Layout - Boxed vs Stretched', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'boxed'   => __('Boxed layout', 'metrolo'),
			'stretch' => __('Stretched layout (full width)', 'metrolo'),
		),
		'default'     => 'stretch',
		'description' => __("For boxed layouts, both backgrounds (site and content box) can be set in the Backgrounds' section.<br />For Stretched Layout, only site background is available.", 'metrolo'),
	);

	$settings['site_width'] = array(
		'label'       => __( 'Max. Site Width (pixels)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'1260' => __('1260px (wide)', 'metrolo'),
			'1080' => __('1080px (standard)', 'metrolo'),
		),
		'default'     => '1260',
	);

	$settings['load_minified'] = array(
		'label'       => __( 'Load Minified Styles and Scripts (when available)', 'metrolo' ),
		'sublabel'    => __( 'Checking this option reduces data size, hence increasing page load speed.', 'metrolo' ),
		'section'     => $section,
		'type'        => 'checkbox',
		// 'default'     => 1,
	);

	$settings['sidebar_desc'] = array(
		'label'       => __( 'Multiple Sidebars', 'metrolo' ),
		'section'     => $section,
		'type'        => 'content',
		'content'     => sprintf( __( 'This theme can display different sidebar content on different pages of your site with the %1sCustom Sidebars%2s plugin. Simply install and activate the plugin to use it with this theme. Or if you are using %3sJetpack%4s, you can use the %5s"Widget Visibility"%6s module.', 'metrolo' ), '<a href="https://wordpress.org/plugins/custom-sidebars/screenshots/" target="_blank">', '</a>', '<a href="https://wordpress.org/plugins/jetpack/" target="_blank">', '</a>', '<a href="https://jetpack.com/support/widget-visibility/" target="_blank">', '</a>' ),
	);

	$settings['sidebar'] = array(
		'label'       => __( 'Sidebar Layout (Site-wide)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'wide-right'         => $imagepath . 'sidebar-wide-right.png',
			'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
			'wide-left'          => $imagepath . 'sidebar-wide-left.png',
			'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
			'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
			'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
			'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
			'full-width'         => $imagepath . 'sidebar-full.png',
			'none'               => $imagepath . 'sidebar-none.png',
		),
		'default'     => 'wide-right',
		'description' => __("Set the default sidebar width and position for your site.", 'metrolo'),
	);

	$settings['sidebar_fp'] = array(
		'label'       => __( 'Sidebar Layout (for Front Page)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'wide-right'         => $imagepath . 'sidebar-wide-right.png',
			'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
			'wide-left'          => $imagepath . 'sidebar-wide-left.png',
			'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
			'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
			'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
			'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
			'full-width'         => $imagepath . 'sidebar-full.png',
			'none'               => $imagepath . 'sidebar-none.png',
		),
		'default'     => ( ( 'page' == get_option('show_on_front' ) ) ? 'full-width' : 'wide-right' ),
		/* Translators: The %s are placeholders for HTML, so the order can't be changed. */
		'description' => sprintf( esc_html__( 'This is sidebar for the Frontpage Content Module in %1$sFrontpage Modules Settings%2$s', 'metrolo' ), '<a href="' . esc_url( admin_url( 'customize.php?autofocus[control]=frontpage_content_desc' ) ) . '" rel="focuslink" data-focustype="control" data-href="frontpage_content_desc">', '</a>' ),
	);

	$settings['sidebar_archives'] = array(
		'label'       => __( 'Sidebar Layout (for Blog/Archives)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'wide-right'         => $imagepath . 'sidebar-wide-right.png',
			'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
			'wide-left'          => $imagepath . 'sidebar-wide-left.png',
			'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
			'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
			'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
			'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
			'full-width'         => $imagepath . 'sidebar-full.png',
			'none'               => $imagepath . 'sidebar-none.png',
		),
		'default'     => 'wide-right',
	);

	$settings['sidebar_pages'] = array(
		'label'       => __( 'Sidebar Layout (for Pages)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'wide-right'         => $imagepath . 'sidebar-wide-right.png',
			'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
			'wide-left'          => $imagepath . 'sidebar-wide-left.png',
			'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
			'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
			'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
			'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
			'full-width'         => $imagepath . 'sidebar-full.png',
			'none'               => $imagepath . 'sidebar-none.png',
		),
		'default'     => 'wide-right',
	);

	$settings['sidebar_posts'] = array(
		'label'       => __( 'Sidebar Layout (for single Posts)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'wide-right'         => $imagepath . 'sidebar-wide-right.png',
			'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
			'wide-left'          => $imagepath . 'sidebar-wide-left.png',
			'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
			'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
			'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
			'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
			'full-width'         => $imagepath . 'sidebar-full.png',
			'none'               => $imagepath . 'sidebar-none.png',
		),
		'default'     => 'wide-right',
	);

	/** Section **/

	$section = 'header';

	$sections[ $section ] = array(
		'title'       => __( 'Header', 'metrolo' ),
	);

	$settings['primary_menuarea'] = array(
		'label'       => __( 'Header Area (right of logo)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'menu'        => __('Display Primary Menu', 'metrolo'),
			'custom'      => __('Custom Text', 'metrolo'),
			'none'        => __('None (Logo will get centre aligned)', 'metrolo'),
		),
		'default'     => 'menu',
	);

	$settings['primary_menuarea_custom'] = array(
		'label'             => __( 'Custom Text instead of Menu', 'metrolo' ),
		'section'           => $section,
		'type'              => 'textarea',
		'description'       => __( 'You can use this area to display ads or custom text.', 'metrolo' ),
		'active_callback'   => 'hoot_callback_show_primary_menuarea_custom',
	);
	// Allow users to add javascript in case they need to use this area to insert code for ads
	// etc. To enable this, add the following code in your child theme's functions.php file (without
	// the '//'). This code is already included in premium version.
	//     add_filter( 'hoot_primary_menuarea_custom_allowscript', 'hoot_child_textarea_allowscript' );
	//     function hoot_child_textarea_allowscript(){ return true; }
	if ( apply_filters( 'hoot_primary_menuarea_custom_allowscript', true ) )
		$settings['primary_menuarea_custom']['sanitize_callback'] = 'hoot_custom_sanitize_textarea_allowscript';

	$settings['secondary_menu_location'] = array(
		'label'       => __( 'Full Width Menu Area (location)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'top'        => __('Top (above logo)', 'metrolo'),
			'bottom'     => __('Bottom (below logo)', 'metrolo'),
			'none'       => __("Do not display full width menu (useful if you already have 'menu' selected in 'Header Area' above')", 'metrolo'),
		),
		'default'     => 'bottom',
	);

	$settings['secondary_menu_align'] = array(
		'label'       => __( 'Full Width Menu Area (alignment)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'left'      => __('Left', 'metrolo'),
			'right'     => __('Right', 'metrolo'),
			'center'    => __('Center', 'metrolo'),
		),
		'default'     => 'center',
	);

	$settings['disable_flex_menu'] = array(
		'label'       => __( 'Disable Flex Menu', 'metrolo' ),
		'section'     => $section,
		'type'        => 'checkbox',
		// 'default'     => 1,
		'description' => __( 'Disable Flex Menu if you have a lot of Top Level menu items.', 'metrolo' ),
	);

	$settings['mobile_menu'] = array(
		'label'       => __( 'Mobile Menu', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'inline' => __('Inline - Menu Slide Downs to open', 'metrolo'),
			'fixed'  => __('Fixed - Menu opens on the left', 'metrolo'),
		),
		'default'     => 'fixed',
		'priority'    => '145', // @todo remove
	);

	$settings['mobile_submenu_click'] = array(
		'label'       => __( "[Mobile Menu] Submenu opens on 'Click'", 'metrolo' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'default'     => 1,
		'priority'    => '145', // @todo remove
		'description' => __( "Uncheck this option to make all Submenus appear in 'Open' state. By default, submenus open on clicking (i.e. single tap on mobile).", 'metrolo' ),
	);

	/** Section **/

	$section = 'logo';

	$sections[ $section ] = array(
		'title'       => __( 'Logo', 'metrolo' ),
	);

	$settings['logo_background_type'] = array(
		'label'       => __( 'Logo Background', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'priority'    => '145', // Non static options must have a priority
		'choices'     => array(
			'transparent' => __('None', 'metrolo'),
			'accent'      => __('Accent Color', 'metrolo'),
		),
		'default'     => 'accent',
	);

	$settings['logo'] = array(
		'label'       => __( 'Site Logo', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'text'        => __('Default Text (Site Title)', 'metrolo'),
			'custom'      => __('Custom Text', 'metrolo'),
			'image'       => __('Image Logo', 'metrolo'),
			'mixed'       => __('Image &amp; Default Text (Site Title)', 'metrolo'),
			'mixedcustom' => __('Image &amp; Custom Text', 'metrolo'),
		),
		'default'     => 'text',
		'description' => sprintf( __('Use %sSite Title%s as default text logo', 'metrolo'), '<a href="' . esc_url( admin_url('options-general.php') ) . '" target="_blank">', '</a>' ),
	);

	$settings['logo_size'] = array(
		'label'       => __( 'Logo  Text Size', 'metrolo' ),
		'section'     => $section,
		'type'        => 'select',
		'priority'    => '155', // Non static options must have a priority
		'choices'     => array(
			'tiny displayfont'   => __( 'Tiny (emphasized)', 'metrolo'),
			'tiny'               => __( 'Tiny', 'metrolo'),
			'small displayfont'  => __( 'Small (emphasized)', 'metrolo'),
			'small'              => __( 'Small', 'metrolo'),
			'medium displayfont' => __( 'Medium (emphasized)', 'metrolo'),
			'medium'             => __( 'Medium', 'metrolo'),
			'large displayfont'  => __( 'Large (emphasized)', 'metrolo'),
			'large'              => __( 'Large', 'metrolo'),
			'huge displayfont'   => __( 'Huge (emphasized)', 'metrolo'),
			'huge'               => __( 'Huge', 'metrolo'),
		),
		'default'     => 'small displayfont',
		'active_callback' => 'hoot_callback_logo_size',
	); // Removed in premium

	$settings['site_title_icon'] = array(
		'label'           => __( 'Site Title Icon (Optional)', 'metrolo' ),
		'section'         => $section,
		'type'            => 'icon',
		// 'default'         => 'fa-anchor fas',
		'description'     => __( 'Leave empty to hide icon.', 'metrolo' ),
		'active_callback' => 'hoot_callback_site_title_icon',
	);

	$settings['site_title_icon_size'] = array(
		'label'           => __( 'Site Title Icon Size', 'metrolo' ),
		'section'         => $section,
		'type'            => 'select',
		'choices'         => $logosizes,
		'default'         => '50px',
		'active_callback' => 'hoot_callback_site_title_icon',
	);

	$settings['logo_image_width'] = array(
		'label'           => __( 'Maximum Logo Width', 'metrolo' ),
		'section'         => $section,
		'type'            => 'text',
		'priority'        => '176', // Keep it with logo image ( 'custom_logo' )->priority logo
		'default'         => 200,
		'description'     => __( '(in pixels)<hr>The logo width may be automatically adjusted by the browser depending on title length and space available.', 'metrolo' ),
		'input_attrs'     => array(
			'placeholder' => __( '(in pixels)', 'metrolo' ),
		),
		'active_callback' => 'hoot_callback_logo_image_width',
	);

	$logo_custom_line_options = array(
		'text' => array(
			'label'       => __( 'Line Text', 'metrolo' ),
			'type'        => 'text',
		),
		'size' => array(
			'label'       => __( 'Line Size', 'metrolo' ),
			'type'        => 'select',
			'choices'     => $logosizes,
			'default'     => '24px',
		),
		'font' => array(
			'label'       => __( 'Line Font', 'metrolo' ),
			'type'        => 'select',
			'choices'     => $logofont,
			'default'     => 'heading',
		),
	);

	$settings['logo_custom'] = array(
		'label'           => __( 'Custom Logo Text', 'metrolo' ),
		'section'         => $section,
		'type'            => 'sortlist',
		'choices'         => array(
			'line1' => __('Line 1', 'metrolo'),
			'line2' => __('Line 2', 'metrolo'),
			'line3' => __('Line 3', 'metrolo'),
			'line4' => __('Line 4', 'metrolo'),
		),
		'default'     => array(
			'line3'  => array( 'sortitem_hide' => 1, ),
			'line4'  => array( 'sortitem_hide' => 1, ),
		),
		'options'         => array(
			'line1' => $logo_custom_line_options,
			'line2' => $logo_custom_line_options,
			'line3' => $logo_custom_line_options,
			'line4' => $logo_custom_line_options,
		),
		'attributes'      => array(
			'hideable' => true,
			'sortable' => false,
		),
		'active_callback' => 'hoot_callback_logo_custom',
	);

	$settings['show_tagline'] = array(
		'label'           => __( 'Show Tagline', 'metrolo' ),
		'sublabel'        => __( 'Display site description as tagline below logo.', 'metrolo' ),
		'section'         => $section,
		'type'            => 'checkbox',
		'default'         => 1,
		// 'active_callback' => 'hoot_callback_show_tagline',
	);

	/** Section **/

	$section = 'colors';

	// Redundant as 'colors' section is added by WP. But we still add it for brevity
	$sections[ $section ] = array(
		'title'       => __( 'Colors', 'metrolo' ),
		// 'description' => __( 'Control even more color options in the premium version for fonts, backgrounds, contrast, highlight, accent etc.', 'metrolo' ),
	);

	$settings['accent_color'] = array(
		'label'       => __( 'Accent Color', 'metrolo' ),
		'section'     => $section,
		'type'        => 'color',
		'default'     => $accent_color,
	);

	$settings['accent_font'] = array(
		'label'       => __( 'Font Color on Accent Color', 'metrolo' ),
		'section'     => $section,
		'type'        => 'color',
		'default'     => $accent_font,
	);

	$settings['contrast_color'] = array(
		'label'       => __( 'Contrast Color', 'metrolo' ),
		'section'     => $section,
		'type'        => 'color',
		'default'     => $contrast_color,
	);

	$settings['contrast_font'] = array(
		'label'       => __( 'Font Color on Contrast Color', 'metrolo' ),
		'section'     => $section,
		'type'        => 'color',
		'default'     => $contrast_font,
	);

	if ( current_theme_supports( 'woocommerce' ) ) :
		$settings['woocommerce-colors-plugin'] = array(
			'label'       => __( 'Woocommerce Styling', 'metrolo' ),
			'section'     => $section,
			'type'        => 'content',
			'priority'    => '235', // Non static options must have a priority
			'content'     => sprintf( __('Looks like you are using Woocommerce. Install %sthis plugin%s to change colors and styles for WooCommerce elements like buttons etc.', 'metrolo'), '<a href="https://wordpress.org/plugins/woocommerce-colors/" target="_blank">', '</a>' ),
		);
	endif;

	/** Section **/

	$section = 'backgrounds';

	$sections[ $section ] = array(
		'title'       => __( 'Backgrounds', 'metrolo' ),
		// 'description' => __( 'The premium version comes with background options for different sections of your site like header, menu dropdown, content area, logo background, footer etc.', 'metrolo' ),
	);

	$settings['background'] = array(
		'label'       => __( 'Site Background', 'metrolo' ),
		'section'     => $section,
		'type'        => 'betterbackground',
		'priority'    => 235,
		'default'     => array(
			'color'      => $site_background,
		),
	);

	$settings['box_background_color'] = array(
		'label'       => __( 'Content Box Background', 'metrolo' ),
		'section'     => $section,
		'type'        => 'color',
		'default'     => $box_background,
		'description' => __("This background is available only when <strong>Site Layout</strong> option is set to <strong>'Boxed'</strong> in the <strong>'Setup &amp; Layout'</strong> section.", 'metrolo'),
		// 'active_callback' => 'hoot_callback_box_background_color',
	);

	/** Section **/

	$section = 'typography';

	$sections[ $section ] = array(
		'title'       => __( 'Typography', 'metrolo' ),
		// 'description' => __( 'The premium version offers complete typography control (color, style, size) for various headings, header, menu, footer, widgets, content sections etc (over 600 Google Fonts to chose from)', 'metrolo' ),
	);

	$settings['logo_fontface'] = array(
		'label'       => __( 'Logo Font (Free Version)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'select',
		'priority'    => 245, // Non static options must have a priority
		'choices'     => array(
			'logo'     => __( 'Default Logo Font (Trebuchet MS)', 'metrolo' ),
			'standard' => __( 'Body Font (Open Sans)', 'metrolo'),
			'cursive'  => __( 'Cursive Font (Pacifico)', 'metrolo'),
		),
		'default'     => 'logo',
	);

	$settings['heading_transform'] = array(
		'label'       => __( 'General Headings Style', 'metrolo' ),
		'section'     => $section,
		'type'        => 'select',
		'priority'    => 245, // Non static options must have a priority
		'choices'     => array(
			'none'      => __( 'Normal', 'metrolo'),
			'uppercase' => __( 'Uppercase', 'metrolo'),
		),
		'default'     => 'uppercase',
	);

	/** Section **/

	$section = 'frontpage';

	$sections[ $section ] = array(
		'title'       => __( 'Frontpage - Modules', 'metrolo' ),
	);

	$widget_area_options = array(
		'columns' => array(
			'label'   => __( 'Columns', 'metrolo' ),
			'type'    => 'select',
			'choices' => array(
				'100'         => __('One Column [100]', 'metrolo'),
				'50-50'       => __('Two Columns [50 50]', 'metrolo'),
				'33-66'       => __('Two Columns [33 66]', 'metrolo'),
				'66-33'       => __('Two Columns [66 33]', 'metrolo'),
				'25-75'       => __('Two Columns [25 75]', 'metrolo'),
				'75-25'       => __('Two Columns [75 25]', 'metrolo'),
				'33-33-33'    => __('Three Columns [33 33 33]', 'metrolo'),
				'25-25-50'    => __('Three Columns [25 25 50]', 'metrolo'),
				'25-50-25'    => __('Three Columns [25 50 25]', 'metrolo'),
				'50-25-25'    => __('Three Columns [50 25 25]', 'metrolo'),
				'25-25-25-25' => __('Four Columns [25 25 25 25]', 'metrolo'),
			),
		),
		'modulebg' => array(
			'label'       => '',
			'type'        => 'content',
			'content'     => '<div class="button">' . __( 'Module Background', 'metrolo' ) . '</div>',
		),
	);

	$settings['frontpage_sections'] = array(
		'label'       => __( 'Frontpage Widget Areas', 'metrolo' ),
		'sublabel'    => sprintf( __("<ul><li>Sort different sections of the Frontpage in the order you want them to appear.</li><li>You can add content to widget areas from the %1sWidgets Management screen%2s.</li><li>You can disable areas by clicking the 'eye' icon. (This will hide them on the Widgets screen as well)</li></ul>", 'metrolo'), '<a href="' . esc_url( admin_url('widgets.php') ) . '" target="_blank">', '</a>' ),
		'section'     => $section,
		'type'        => 'sortlist',
		'choices'     => array(
			'slider_html' => __('HTML Slider', 'metrolo'),
			'slider_img'  => __('Image Slider', 'metrolo'),
			'area_a'      => __('Widget Area A', 'metrolo'),
			'area_b'      => __('Widget Area B', 'metrolo'),
			'area_c'      => __('Widget Area C', 'metrolo'),
			'area_d'      => __('Widget Area D', 'metrolo'),
			'area_e'      => __('Widget Area E', 'metrolo'),
			'content'     => __('Frontpage Content', 'metrolo'),
		),
		'default'     => array(
			// 'content' => array( 'sortitem_hide' => 1, ),
			// 'area_d'  => array( 'highlight' => 1, 'columns' => '50-50' ),
			'area_b'  => array( 'columns' => '33-33-33' ),
		),
		'options'     => array(
			'slider_html' => array(
				'modulebg' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<div class="button">' . __( 'Module Background', 'metrolo' ) . '</div>',
				),
			),
			'slider_img'  => array(
				'modulebg' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<div class="button">' . __( 'Module Background', 'metrolo' ) . '</div>',
				),
			),
			'area_a'      => $widget_area_options,
			'area_b'      => $widget_area_options,
			'area_c'      => $widget_area_options,
			'area_d'      => $widget_area_options,
			'area_e'      => $widget_area_options,
			'content'     => array(
							'title' => array(
								'label'       => __( 'Title (optional)', 'metrolo' ),
								'type'        => 'text',
							),
							'modulebg' => array(
								'label'       => '',
								'type'        => 'content',
								'content'     => '<div class="button">' . __( 'Module Background', 'metrolo' ) . '</div>',
							), ),
		),
		'attributes'  => array(
			'hideable'      => true,
			'sortable'      => true,
			'open-state'    => 'area_a',
		),
		// 'description' => sprintf( __('You must first save the changes you make here and refresh this screen for widget areas to appear in the Widgets panel (in customizer). Once you save the settings, you can add content to these widget areas using the %sWidgets Management screen%s.', 'metrolo'), '<a href="' . esc_url( admin_url('widgets.php') ) . '" target="_blank">', '</a>' ),
	);

	$settings['frontpage_content_desc'] = array(
		'label'       => __( "Frontpage Content", 'metrolo' ),
		'section'     => $section,
		'type'        => 'content',
		'content'     => sprintf( __( "The 'Frontpage Content' module in above list will show<ul style='list-style:disc;margin:1em 0 0 2em;'><li>the <strong>'Blog'</strong> if you have <strong>Your Latest Posts</strong> selectd in %3sReading Settings%4s</li><li>the <strong>Page Content</strong> of the page set as Front page if you have <strong>A static page</strong> selected in %3sReading Settings%4s</li></ul>", 'metrolo' ), '<a href="' . esc_url( admin_url('options-reading.php') ) . '" target="_blank">', '</a>', '<a href="' . esc_url( admin_url('options-reading.php') ) . '" target="_blank">', '</a>' ),
	);

	$settings["frontpage_sectionbg_slider_html"] =
	$settings["frontpage_sectionbg_slider_img"] = array(
		'label'       => '',
		'section'     => $section,
		'type'        => 'group',
		'priority'    => 265,
		'startwrap'   => 'fp-section-bg-button',
		'button'      => __( 'Module Background', 'metrolo' ),
		'options'     => array(
			'description' => array(
				'label'       => '',
				'type'        => 'content',
				'content'     => '<span class="hoot-module-bg-title">' . __('Slider Background', 'metrolo') . '</span>',
			),
			'type' => array(
				'label'   => __( 'Background Type', 'metrolo' ),
				'type'    => 'radio',
				'choices' => array(
					'none'        => __('None', 'metrolo'),
					'highlight'   => __('Highlight Color', 'metrolo'),
					'accent'      => __('Accent Color', 'metrolo'),
				),
				'default' => 'none',
			),
		),
	);

	$frontpagemodule_bg = apply_filters( 'hoot_theme_frontpage_widgetarea_sectionbg_index', array(
		'area_a'      => __('Widget Area A', 'metrolo'),
		'area_b'      => __('Widget Area B', 'metrolo'),
		'area_c'      => __('Widget Area C', 'metrolo'),
		'area_d'      => __('Widget Area D', 'metrolo'),
		'area_e'      => __('Widget Area E', 'metrolo'),
		'content'     => __('Frontpage Content', 'metrolo'),
		) );

	foreach ( $frontpagemodule_bg as $fpgmodid => $fpgmodname ) {

		$settings["frontpage_sectionbg_{$fpgmodid}"] = array(
			'label'       => '',
			'section'     => $section,
			'type'        => 'group',
			'priority'    => 265,
			'startwrap'   => 'fp-section-bg-button',
			'button'      => __( 'Module Background', 'metrolo' ),
			'options'     => array(
				'description' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<span class="hoot-module-bg-title">' . $fpgmodname . '</span>',
				),
				'type' => array(
					'label'   => __( 'Background Type', 'metrolo' ),
					'type'    => 'radio',
					'choices' => array(
						'none'        => __('None', 'metrolo'),
						'highlight'   => __('Highlight Color', 'metrolo'),
						'image'       => __('Image', 'metrolo'),
					),
					// 'default' => ( ( $fpgmodid == 'area_b' ) ? 'image' :
					// 											( ( $fpgmodid == 'area_e' ) ? 'highlight' : 'none' )
					// 			 ),
					'default' => ( ( $fpgmodid == 'area_b' ) ? 'image' : 'none' ),
				),
				'image' => array(
					'label'       => __( "Background Image (Select 'Image' above)", 'metrolo' ),
					'type'        => 'image',
					'default' => ( ( $fpgmodid == 'area_b' ) ? HYBRID_PARENT_URI . 'images/modulebg.jpg' : '' ),
				),
				'parallax' => array(
					'label'   => __( 'Apply Parallax Effect to Background Image', 'metrolo' ),
					'type'    => 'checkbox',
					'default' => ( ( $fpgmodid == 'area_b' ) ? 1 : 0 ),
				),
			),
		);

	} // end for

	/** Section **/

	$section = 'slider_html';

	$sections[ $section ] = array(
		'title'       => __( 'Frontpage - HTML Slider', 'metrolo' ),
		// 'description' => __( 'The premium version comes with a separate Slider type allowing creation of Unlimited slides.', 'metrolo' ),
	);

	$settings['wt_html_slider_width'] = array(
		'label'       => __( 'Slider Width', 'metrolo' ),
		'sublabel'    => __( "Note: This option is useful only if the <strong>Site Layout</strong> option is set to <strong>Stretched</strong> in 'Setup &amp; Layout' section.", 'metrolo' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'boxed'   => $imagepath . 'slider-width-boxed.png',
			'stretch' => $imagepath . 'slider-width-stretch.png',
		),
		'default'     => 'stretch',
	);

	for ( $slide = 1; $slide <= 4; $slide++ ) {

		$settings["wt_html_slide_{$slide}"] = array(
			'label'       => sprintf( __( 'Slide %s Content', 'metrolo' ), $slide),
			'section'     => $section,
			'type'        => 'group',
			'priority'    => 275, // Non static options must have a priority
			'button'      => sprintf( __( 'Edit Slide %s', 'metrolo' ), $slide),
			'options'     => array(
				'description' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<span class="hoot-module-bg-title">' . sprintf( __( 'Slide %s Content', 'metrolo' ), $slide) . '</span>',
				),
				'image' => array(
					'label'       => __( 'Slide Image', 'metrolo' ),
					'type'        => 'content',
					'description' => __( "The page must have a 'Featured Image' for the slide to display.", 'metrolo' ),
				),
				'content' => array(
					'label'       => __( 'Content (HTML)', 'metrolo' ),
					'type'        => 'select',
					'choices'     => array( __( 'Select Page', 'metrolo' ) ) + HybridExtend_Options_Helper::pages(),
				),
				'content_bg' => array(
					'label'   => __( 'Content Styling', 'metrolo' ),
					'type'    => 'select',
					'default' => 'dark-on-light',
					'choices' => array(
						'dark-on-light' => __('Dark Font / Light Background', 'metrolo'),
						'light-on-dark' => __('Light Font / Dark Background', 'metrolo'),
					),
				),
				'button' => array(
					'label'       => __( 'Link Text', 'metrolo' ),
					'type'        => 'text',
				),
				'url' => array(
					'label'       => __( 'Link URL', 'metrolo' ),
					'type'        => 'url',
					'description' => __( 'Leave empty if you do not want to show the link.', 'metrolo' ),
					'input_attrs' => array(
						'placeholder' => 'http://',
					),
				),
				'background' => array(
						'label'       => __( 'Slide Background', 'metrolo' ),
						'type'        => 'color',
						'description' => __("This can be useful if you are using transparent images", 'metrolo'),
						'default'     => $wt_html_slide_background,
					),
			),
		);

	} // end for

	/** Section **/

	$section = 'slider_img';

	$sections[ $section ] = array(
		'title'       => __( 'Frontpage - Image Slider', 'metrolo' ),
		// 'description' => __( 'The premium version comes with a separate Slider type allowing creation of Unlimited slides.', 'metrolo' ),
	);

	$settings['wt_img_slider_width'] = array(
		'label'       => __( 'Slider Width', 'metrolo' ),
		'sublabel'    => __("Note: This option is useful only if the <strong>Site Layout</strong> option is set to <strong>Stretched</strong> in 'Setup &amp; Layout' section.", 'metrolo'),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'boxed'   => $imagepath . 'slider-width-boxed.png',
			'stretch' => $imagepath . 'slider-width-stretch.png',
		),
		'default'     => 'stretch',
	);

	for ( $slide = 1; $slide <= 4; $slide++ ) { 

		$settings["wt_img_slide_{$slide}"] = array(
			'label'       => '',//sprintf( __( 'Slide %s Content', 'metrolo' ), $slide),
			'section'     => $section,
			'type'        => 'group',
			'priority'    => 285, // Non static options must have a priority
			'button'      => sprintf( __( 'Edit Slide %s', 'metrolo' ), $slide),
			'options'     => array(
				'description' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<span class="hoot-module-bg-title">' . sprintf( __( 'Slide %s Content', 'metrolo' ), $slide) . '</span>' . __( '<em>To hide this slide, simply leave the Image empty.</em>', 'metrolo' ),
				),
				'image' => array(
					'label'       => __( 'Slide Image', 'metrolo' ),
					'type'        => 'image',
					'description' => __( 'The main showcase image.', 'metrolo' ),
				),
				'caption' => array(
					'label'       => __( 'Slide Caption (optional)', 'metrolo' ),
					'type'        => 'text',
				),
				'caption_bg' => array(
					'label'   => __( 'Caption Styling', 'metrolo' ),
					'type'    => 'select',
					'default' => 'accent',
					'choices' => array(
						'accent'        => __('Accent Color Background', 'metrolo'),
						'invert-accent' => __('Accent Color Font', 'metrolo'),
						'dark-on-light' => __('Dark Font / Light Background', 'metrolo'),
						'light-on-dark' => __('Light Font / Dark Background', 'metrolo'),
					),
				),
				'url' => array(
					'label'       => __( 'Slide Link', 'metrolo' ),
					'type'        => 'url',
					'description' => __( 'Leave empty if you do not want to link the slide.', 'metrolo' ),
					'input_attrs' => array(
						'placeholder' => 'http://',
					),
				),
				'button' => array(
					'label'       => __( 'Button Text (Optional)', 'metrolo' ),
					'type'        => 'text',
					'description' => __( 'Leave empty if you do not want to show the button and instead link the slide image (if you have a url set in the above field)', 'metrolo' ),
				),
			),
		);

	} // end for

	/** Section **/

	$section = 'archives';

	$sections[ $section ] = array(
		'title'       => __( 'Archives (Blog, Cats, Tags)', 'metrolo' ),
	);

	$settings['archive_post_content'] = array(
		'label'       => __( 'Post Items Content', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'none' => __('None', 'metrolo'),
			'excerpt' => __('Post Excerpt', 'metrolo'),
			'full-content' => __('Full Post Content', 'metrolo'),
		),
		'default'     => 'excerpt',
		'description' => __( 'Content to display for each post in the list', 'metrolo' ),
	);

	$settings['archive_post_meta'] = array(
		'label'       => __( 'Meta Information for Post List Items', 'metrolo' ),
		'sublabel'    => __( 'Check which meta information to display for each post item in the archive list.', 'metrolo' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'choices'     => array(
			'author'   => __('Author', 'metrolo'),
			'date'     => __('Date', 'metrolo'),
			'cats'     => __('Categories', 'metrolo'),
			'tags'     => __('Tags', 'metrolo'),
			'comments' => __('No. of comments', 'metrolo')
		),
		'default'     => 'author, date, cats, comments',
	);

	$settings['excerpt_length'] = array(
		'label'       => __( 'Excerpt Length', 'metrolo' ),
		'section'     => $section,
		'type'        => 'text',
		'description' => __( 'Number of words in excerpt. Default is 105. Leave empty if you dont want to change it.', 'metrolo' ),
		'input_attrs' => array(
			'placeholder' => __( 'default: 105', 'metrolo' ),
		),
	);

	$settings['read_more'] = array(
		'label'       => __( "'Read More' Text", 'metrolo' ),
		'section'     => $section,
		'type'        => 'text',
		'description' => __( "Replace the default 'Read More' text. Leave empty if you dont want to change it.", 'metrolo' ),
		'input_attrs' => array(
			'placeholder' => __( 'default: READ MORE &rarr;', 'metrolo' ),
		),
	);

	/** Section **/

	$section = 'singular';

	$sections[ $section ] = array(
		'title'       => __( 'Single (Posts, Pages)', 'metrolo' ),
	);

	$settings['page_header_full'] = array(
		'label'       => __( 'Stretch Page Header to Full Width', 'metrolo' ),
		'sublabel'    => '<img src="' . $imagepath . 'page-header.png">',
		'section'     => $section,
		'type'        => 'checkbox',
		'choices'     => array(
			'default'    => __('Default (Archives, Blog, Woocommerce etc.)', 'metrolo'),
			'posts'      => __('For All Posts', 'metrolo'),
			'pages'      => __('For All Pages', 'metrolo'),
			'no-sidebar' => __('Always override for full width pages (any page which has no sidebar)', 'metrolo'),
		),
		'default'     => 'default, pages, no-sidebar',
		'description' => __('This is the Page Header area containing Page/Post Title and Meta details like author, categories etc.', 'metrolo'),
	);

	$settings['post_featured_image'] = array(
		'label'       => __( 'Display Featured Image', 'metrolo' ),
		'sublabel'    => __( 'Display featured image at the beginning of post/page content.', 'metrolo' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'default'     => 1,
	);

	$settings['post_meta'] = array(
		'label'       => __( 'Meta Information on Posts', 'metrolo' ),
		'sublabel'    => __( "Check which meta information to display on an individual 'Post' page", 'metrolo' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'choices'     => array(
			'author'   => __('Author', 'metrolo'),
			'date'     => __('Date', 'metrolo'),
			'cats'     => __('Categories', 'metrolo'),
			'tags'     => __('Tags', 'metrolo'),
			'comments' => __('No. of comments', 'metrolo')
		),
		'default'     => 'author, date, cats, tags, comments',
	);

	$settings['page_meta'] = array(
		'label'       => __( 'Meta Information on Page', 'metrolo' ),
		'sublabel'    => __( "Check which meta information to display on an individual 'Page' page", 'metrolo' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'choices'     => array(
			'author'   => __('Author', 'metrolo'),
			'date'     => __('Date', 'metrolo'),
			'comments' => __('No. of comments', 'metrolo')
		),
		'default'     => 'author, date, comments',
	);

	$settings['post_meta_location'] = array(
		'label'       => __( 'Meta Information location', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'top'    => __('Top (below title)', 'metrolo'),
			'bottom' => __('Bottom (after content)', 'metrolo'),
		),
		'default'     => 'top',
	);

	$settings['post_prev_next_links'] = array(
		'label'       => __( 'Previous/Next Posts', 'metrolo' ),
		'sublabel'    => __( 'Display links to Prev/Next Post links at the end of post content.', 'metrolo' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'default'     => 1,
	);

	$settings['contact-form'] = array(
		'label'       => __( 'Contact Form', 'metrolo' ),
		'section'     => $section,
		'type'        => 'content',
		'content'     => sprintf( __('This theme comes bundled with CSS required to style %sContact-Form-7%s forms. Simply install and activate the plugin to add Contact Forms to your pages.', 'metrolo'), '<a href="https://wordpress.org/plugins/contact-form-7/" target="_blank">', '</a>'), // @todo update link to docs
	);

	/** Section **/

	$section = 'footer';

	$sections[ $section ] = array(
		'title'       => __( 'Footer', 'metrolo' ),
	);

	$settings['footer'] = array(
		'label'       => __( 'Footer Layout', 'metrolo' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'1-1' => $imagepath . '1-1.png',
			'2-1' => $imagepath . '2-1.png',
			'2-2' => $imagepath . '2-2.png',
			'2-3' => $imagepath . '2-3.png',
			'3-1' => $imagepath . '3-1.png',
			'3-2' => $imagepath . '3-2.png',
			'3-3' => $imagepath . '3-3.png',
			'3-4' => $imagepath . '3-4.png',
			'4-1' => $imagepath . '4-1.png',
		),
		'default'     => '4-1',
		'description' => sprintf( __('You must first save the changes you make here and refresh this screen for footer columns to appear in the Widgets panel (in customizer).<hr> Once you save the settings here, you can add content to footer columns using the %sWidgets Management screen%s.', 'metrolo'), '<a href="' . esc_url( admin_url('widgets.php') ) . '" target="_blank">', '</a>' ),
	);

	$settings['site_info'] = array(
		'label'       => __( 'Site Info Text (footer)', 'metrolo' ),
		'section'     => $section,
		'type'        => 'textarea',
		'default'     => __( '<!--default-->', 'metrolo'),
		'description' => sprintf( __('Text shown in footer. Useful for showing copyright info etc.<hr>Use the <code>&lt;!--default--&gt;</code> tag to show the default Info Text.<hr>Use the <code>&lt;!--year--&gt;</code> tag to insert the current year.<hr>Always use %sHTML codes%s for symbols. For example, the HTML for &copy; is <code>&amp;copy;</code>', 'metrolo'), '<a href="http://ascii.cl/htmlcodes.htm" target="_blank">', '</a>' ),
	);

	if ( current_theme_supports( 'woocommerce' ) ) :

		/** Section **/

		$section = 'hoot_woocommerce';

		$sections[ $section ] = array(
			'title'       => __( 'WooCommerce (Metrolo)', 'metrolo' ),
			'priority'    => '150', // Non static options must have a priority // Sample: Menus(100) Widgets(110) Woocommerce (200) Additional CSS(200)
		);

		$wooproducts = range( 0, 99 );
		for ( $wpr=0; $wpr < 4; $wpr++ )
			unset( $wooproducts[$wpr] );
		$settings['wooshop_products'] = array(
			'label'       => __( 'Total Products per page', 'metrolo' ),
			'section'     => $section,
			'type'        => 'select',
			'priority'    => '415', // Non static options must have a priority
			'choices'     => $wooproducts,
			'default'     => '12',
			'description' => __( 'Total number of products to show on the Shop page', 'metrolo' ),
		);

		$settings['wooshop_product_columns'] = array(
			'label'       => __( 'Product Columns', 'metrolo' ),
			'section'     => $section,
			'type'        => 'select',
			'priority'    => '415', // Non static options must have a priority
			'choices'     => array(
				'2' => '2',
				'3' => '3',
				'4' => '4',
				'5' => '5',
			),
			'default'     => '3',
			'description' => __( 'Number of products to show in 1 row on the Shop page', 'metrolo' ),
		);

		$settings['sidebar_wooshop'] = array(
			'label'       => __( 'Sidebar Layout (Woocommerce Shop/Archives)', 'metrolo' ),
			'section'     => $section,
			'type'        => 'radioimage',
			'priority'    => '415', // Non static options must have a priority
			'choices'     => array(
				'wide-right'         => $imagepath . 'sidebar-wide-right.png',
				'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
				'wide-left'          => $imagepath . 'sidebar-wide-left.png',
				'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
				'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
				'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
				'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
				'full-width'         => $imagepath . 'sidebar-full.png',
				'none'               => $imagepath . 'sidebar-none.png',
			),
			'default'     => 'wide-right',
			'description' => __("Set the default sidebar width and position for WooCommerce Shop and Archives pages like product categories etc.", 'metrolo'),
		);

		$settings['sidebar_wooproduct'] = array(
			'label'       => __( 'Sidebar Layout (Woocommerce Single Product Page)', 'metrolo' ),
			'section'     => $section,
			'type'        => 'radioimage',
			'priority'    => '415', // Non static options must have a priority
			'choices'     => array(
				'wide-right'         => $imagepath . 'sidebar-wide-right.png',
				'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
				'wide-left'          => $imagepath . 'sidebar-wide-left.png',
				'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
				'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
				'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
				'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
				'full-width'         => $imagepath . 'sidebar-full.png',
				'none'               => $imagepath . 'sidebar-none.png',
			),
			'default'     => 'wide-right',
			'description' => __("Set the default sidebar width and position for WooCommerce product page", 'metrolo'),
		);

	endif;


	/*** Return Options Array ***/
	return apply_filters( 'hoot_theme_customizer_options', array(
		'settings' => $settings,
		'sections' => $sections,
		'panels'   => $panels,
	) );

}
endif;

/**
 * Add Options (settings, sections and panels) to HybridExtend_Customize class options object
 *
 * @since 1.0
 * @access public
 * @return void
 */
if ( !function_exists( 'hoot_theme_add_customizer_options' ) ) :
function hoot_theme_add_customizer_options() {

	$hybridextend_customize = HybridExtend_Customize::get_instance();

	// Add Options
	$options = hoot_theme_customizer_options();
	$hybridextend_customize->add_options( array(
		'settings' => $options['settings'],
		'sections' => $options['sections'],
		'panels' => $options['panels'],
		) );

}
endif;
add_action( 'init', 'hoot_theme_add_customizer_options', 0 ); // cannot hook into 'after_setup_theme' as this hook is already being executed (this file is loaded at after_setup_theme @priority 10) (hooking into same hook from within while hook is being executed leads to undesirable effects as $GLOBALS[$wp_filter]['after_setup_theme'] has already been ksorted)
// Hence, we hook into 'init' @priority 0, so that settings array gets populated before 'widgets_init' action ( which itself is hooked to 'init' at priority 1 ) for creating widget areas ( settings array is needed for creating defaults when user value has not been stored )

/**
 * Enqueue custom scripts to customizer screen
 *
 * @since 1.0
 * @return void
 */
function hoot_theme_customizer_enqueue_scripts() {
	// Enqueue Styles
	wp_enqueue_style( 'hoot-theme-customize-styles', HYBRIDEXTEND_INCURI . 'admin/css/customize.css', array(),  HYBRIDEXTEND_VERSION );
	// Enqueue Scripts
	wp_enqueue_script( 'hoot-theme-customize-script', HYBRIDEXTEND_INCURI . 'admin/js/customize-controls.js', array( 'jquery', 'wp-color-picker', 'customize-controls', 'hybridextend-customize-script' ), HYBRIDEXTEND_VERSION, true );
}
// Load scripts at priority 12 so that Hoot Customizer Interface (11) / Custom Controls (10) have loaded their scripts
add_action( 'customize_controls_enqueue_scripts', 'hoot_theme_customizer_enqueue_scripts', 12 );

/**
 * Modify default WordPress Settings Sections and Panels
 *
 * @since 1.0
 * @param object $wp_customize
 * @return void
 */
function hoot_customizer_modify_default_options( $wp_customize ) {

	$wp_customize->get_control( 'custom_logo' )->section = 'logo';
	$wp_customize->get_control( 'custom_logo' )->priority = 175;
	$wp_customize->get_control( 'custom_logo' )->width = 250;
	$wp_customize->get_control( 'custom_logo' )->height = 90;
	// $wp_customize->get_control( 'custom_logo' )->type = 'image'; // Stored value becomes url instead of image ID (fns like the_custom_logo() dont work)
	// Defaults: [type] => cropped_image, [width] => 150, [height] => 150, [flex_width] => 1, [flex_height] => 1, [button_labels] => array(...), [label] => Logo
	$wp_customize->get_control( 'custom_logo' )->active_callback = 'hoot_callback_logo_image';

	if ( function_exists( 'get_site_icon_url' ) )
		$wp_customize->get_control( 'site_icon' )->priority = 10;

	$wp_customize->get_section( 'static_front_page' )->priority = 3;

	// $wp_customize->get_section( 'title_tagline' )->panel = 'general';
	// $wp_customize->get_section( 'title_tagline' )->priority = 1;
	// $wp_customize->get_section( 'colors' )->panel = 'styling';

	// global $wp_version;
	// if ( version_compare( $wp_version, '4.3', '>=' ) ) // 'Creating Default Object from Empty Value' error before 4.3 since 'nav_menus' panel did not exist ( we did have 'nav' section till 4.1.9 i.e. before 4.2 )
	// 	$wp_customize->get_panel( 'nav_menus' )->priority = 999;
	// This will set the priority, however will give a 'Creating Default Object from Empty Value' error first.
	// $wp_customize->get_panel( 'widgets' )->priority = 999;

}
add_action( 'customize_register', 'hoot_customizer_modify_default_options', 100 );

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @since 1.0
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 * @return void
 */
function hoot_customizer_customize_register( $wp_customize ) {
	// $wp_customize->get_setting( 'blogname' )->transport = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';
}
add_action( 'customize_register', 'hoot_customizer_customize_register' );

/**
 * Callback Functions for customizer settings
 */

function hoot_callback_logo_size( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'text' || $selector == 'mixed' ) ? true : false;
}
function hoot_callback_site_title_icon( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'text' || $selector == 'custom' ) ? true : false;
}
function hoot_callback_logo_image( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'image' || $selector == 'mixed' || $selector == 'mixedcustom' ) ? true : false;
}
function hoot_callback_logo_image_width( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'mixed' || $selector == 'mixedcustom' ) ? true : false;
}
function hoot_callback_logo_custom( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'custom' || $selector == 'mixedcustom' ) ? true : false;
}
function hoot_callback_show_tagline( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'text' || $selector == 'custom' || $selector == 'mixed' || $selector == 'mixedcustom' ) ? true : false;
}
function hoot_callback_show_primary_menuarea_custom( $control ) {
	$selector = $control->manager->get_setting('primary_menuarea')->value();
	return ( $selector == 'custom' ) ? true : false;
}

function hoot_callback_box_background_color( $control ) {
	$selector = $control->manager->get_setting('site_layout')->value();
	return ( $selector == 'boxed' ) ? true : false;
}

/**
 * Specific Sanitization Functions for customizer settings
 * See specific settings above for more details.
 */
function hoot_custom_sanitize_textarea_allowscript( $value ) {
	global $allowedposttags;
	// Allow javascript to let users ad code for ads etc.
	$allow = array_merge( $allowedposttags, array(
		'script' => array( 'async' => true, 'charset' => true, 'defer' => true, 'src' => true, 'type' => true ),
	) );
	return wp_kses( $value , $allow );
}

/**
 * Helper function to return the theme mod value.
 * If no value has been saved, it returns $default provided by the theme.
 * If no $default provided, it checks the default value specified in the customizer settings..
 * 
 * @since 1.0
 * @access public
 * @param string $name
 * @param mixed $default
 * @return mixed
 */
function hoot_get_mod( $name, $default = NULL ) {

	if ( is_customize_preview() ) {

		// We cannot use "if ( !empty( $mod ) )" as this will become false for empty values, and hence fallback to default. isset() is not an option either as $mod is always set. Hence we calculate the default here, and supply it as second argument to get_theme_mod()
		$default = ( $default !== NULL ) ? $default : hybridextend_customize_get_default( $name );
		$mod = get_theme_mod( $name, $default );

		return apply_filters( 'hoot_get_mod_customize', $mod, $name, $default );

	} else {

		// Return Value
		$returnvalue = false;

		// Cache
		static $mods = NULL;

		// Set cache with database values
		if ( !$mods ) {
			$mods = get_theme_mods();
			$mods = apply_filters( 'hoot_get_mod', $mods );
		}

		// Return value if set
		if ( isset( $mods[$name] ) ) {
			$returnvalue = $mods[$name];
		}
		// Return default if provided
		elseif ( $default !== NULL ) {
			$returnvalue = $default;
		}
		// Return default theme option value specified in customizer settings
		else {
			$default = hybridextend_customize_get_default( $name );
			if ( !empty( $default ) )
				$returnvalue = $default;
		}

		// Filter applied as in get_theme_mod() core function
		$returnvalue = apply_filters( "theme_mod_{$name}", $returnvalue );

		if ( $returnvalue !== false ) {
			// Sanitize Value
			$returnvalue = apply_filters( 'hoot_sanitize_get_mod', $returnvalue, $name );
		}

		return $returnvalue;

	}

}

/* Transition filter for version 1.9.0 : Doesnt resolve customizer but hopefully user will visit atleast one admin screen before customizer */
add_filter( 'hoot_get_mod', 'hoot_transition_get_mods', 2 );

/**
 * Function for seamless transition for changed option/values in version 1.9.0
 * Updated 1.9.0 for frontpage sidebar option
 *
 * @since 1.9.0
 * @access public
 * @return void
 */
function hoot_transition_get_mods( $mods ) {

	if ( !isset( $mods['sidebar_fp'] ) ) {
		if ( 'page' == get_option('show_on_front' ) ) {
			if ( function_exists( 'hoot_get_meta_option' ) && hoot_get_meta_option( 'sidebar_type', get_option( 'page_on_front' ) ) == 'custom' ) {
				$mods['sidebar_fp'] = hoot_get_meta_option( 'sidebar', get_option( 'page_on_front' ) );
			} else {
				$mods['sidebar_fp'] = 'full-width';
			}
		} else {
			$mods['sidebar_fp'] = ( isset( $mods['sidebar_archives'] ) ) ? $mods['sidebar_archives'] : ( isset( $mods['sidebar'] ) ? $mods['sidebar'] : 'wide-right' );
		}
		set_theme_mod( 'sidebar_fp', $mods['sidebar_fp'] );
	}

	// var_dump(get_theme_mods());exit;
	return $mods;
}

/**
 * Sanitization function for return value of theme mod
 * jnes No chan-ni applied
 * 
 * @since 1.0
 * @access public
 * @param mixed $value
 * @param string $name
 * @return mixed
 */
function hoot_sanitize_get_mod( $value, $name ) {

	/** Get Setting array from the Customizer Class **/
	$hybridextend_customize = HybridExtend_Customize::get_instance();
	$settings = $hybridextend_customize->get_options('settings');

	/** Load Sanitization functions if not loaded already (for frontend) **/
	if ( !function_exists( 'hybridextend_sanitize_enum' ) )
		require_once( HYBRIDEXTEND_DIR . 'includes/sanitization.php' );
	/** Load Sanitization functions if not loaded already (from frontend) **/
	if ( !function_exists( 'hybridextend_customize_sanitize_text' ) )
		require_once( HYBRIDEXTEND_DIR . 'customize/sanitization.php' );

	if ( isset( $settings[ $name ] ) ) {

		/** Sanitize values **/
		if ( isset( $settings[ $name ]['type'] ) && !empty( $settings[ $name ]['sanitize_callback'] ) && function_exists( $settings[ $name ]['sanitize_callback'] ) ) {

			$fn_name = $settings[ $name ]['sanitize_callback'];
			return $fn_name( $value );

		} elseif ( isset( $settings[ $name ]['type'] ) ) {
			switch ( $settings[ $name ]['type'] ) {

				// Text Field
				case 'text':
					$value = sanitize_text_field( $value ); // Alternately, can also use "hybridextend_customize_sanitize_text" to use wp_kses() instead
					break;

				// Textarea Field
				case 'textarea':
					$value = hybridextend_sanitize_textarea( $value );
					break;

				// Select, Radio, Image Radio
				case 'select':
				case 'radio':
				case 'radioimage':
					$value = hybridextend_sanitize_enum( $value, $settings[ $name ]['choices'] );
					break;

				// Image / Upload Field
				case 'image':
				case 'upload':
					$value = esc_url( $value );
					break;

				// URL Field
				case 'url':
					$value = esc_url( $value );
					break;

				// Range Field
				case 'range':
					$value = hybridextend_customize_sanitize_range( $value );
					break;

				// Dropdown Pages Field
				case 'dropdown-pages':
					$value = absint( $value );
					break;

				// Color Field
				case 'color':
					$value = sanitize_hex_color( $value );
					break;

				// Checkbox Field
				case 'checkbox':
					$value = hybridextend_sanitize_checkbox( $value );
					break;

				// MultiCheckbox Field
				case 'bettercheckbox':
					if ( !empty( $settings[ $name ]['choices'] ) && is_array( $settings[ $name ]['choices'] ) )
						$value = hybridextend_customize_sanitize_multicheckbox( $value, $name );
					else
						$value = hybridextend_sanitize_checkbox( $value );
					break;

				// Icon Field
				case 'icon':
					$value = hybridextend_sanitize_icon( $value, $name );
					break;

				// Sortlist Field
				case 'sortlist':
					$value = hybridextend_customize_sanitize_sortlist( $value, $name );
					break;

			} // endswitch
		} // endif

	} // endif

	return $value;
}