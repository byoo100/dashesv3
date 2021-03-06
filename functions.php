<?php
/**
 * dashesv3 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package dashesv3
 */

if ( ! function_exists( 'dashesv3_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function dashesv3_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on dashesv3, use a find and replace
	 * to change 'dashesv3' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'dashesv3', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );


	/*
	 * Enable support for custom logo.
	 *
	 *  https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support( 'custom-logo', array(
		'height'      => 100,
		'width'       => 600,
		'flex-height' => true,
		'flex-width'  => true,
		'header-text' => array( 'site-title', 'site-description' ),
	) );


	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 1280, 720, true ); //16:9 image
	add_image_size( 'mobile-thumb', 320, 180, true );
	add_image_size( 'tablet-thumb', 640, 360, true );
	add_image_size( 'large-thumb', 1920, 1080, true ); //16:9

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'dashesv3' ),
		'sub' => esc_html__( 'Sub-Menu', 'dashesv3' ),
		'social' => esc_html__( 'Social', 'dashesv3' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'dashesv3_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );
}
endif;
add_action( 'after_setup_theme', 'dashesv3_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function dashesv3_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'dashesv3_content_width', 640 );
}
add_action( 'after_setup_theme', 'dashesv3_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function dashesv3_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'dashesv3' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'dashesv3' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'dashesv3_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function dashesv3_scripts() {
	wp_enqueue_style( 'dashesv3-style', get_stylesheet_uri() );

	/**
	 * JQUERY LOAD AFTER CONTENT
	 */
	wp_deregister_script( 'jquery' );
	wp_register_script( 'jquery', includes_url( '/js/jquery/jquery.js' ), false, NULL, true );
	wp_enqueue_script( 'jquery' );
	wp_deregister_script( 'jquery-migrate.min' );
	wp_register_script( 'jquery-migrate.min', includes_url( '/js/jquery/jquery-migrate.min.js' ), false, NULL, true );
	wp_enqueue_script( 'jquery-migrate.min' );

	wp_enqueue_script( 'wp-api' );

	wp_enqueue_script( 'dashesv3-bundle', get_template_directory_uri() . '/dist/js/bundle.js', array(), '20151215', true );

	/**
	 * AJAX PAGINATION
	 */
	global $wp_query;
	wp_localize_script( 'dashesv3-bundle', 'ajaxpagination', array(
		'ajaxurl' => admin_url( 'admin-ajax.php' ),
		'query_vars' => json_encode( $wp_query->query )
	));

	//Make the Colorbox text translation-ready
    $current = 'current';
    $total = 'total';
    wp_localize_script( 'dashesv3-bundle', 'dashesv3_script_vars', array(
        'current'   => sprintf(__( 'image {%1$s} of {%2$s}', 'dashesv3'), $current, $total ),
        'previous'  =>  __( 'previous', 'dashesv3' ),
        'next'      =>  __( 'next', 'dashesv3' ),
        'close'     =>  __( 'close', 'dashesv3' ),
        'xhrError'  =>  __( 'This content failed to load.', 'dashesv3' ),
        'imgError'  =>  __( 'This image failed to load.', 'dashesv3' )
      )
    );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	/**
	 * Remove WP Emoji
	 * http://crunchify.com/not-using-emoji-on-your-wordpress-blog-stop-loading-wp-emoji-release-min-js-and-css-file/
	 */
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );

}
add_action( 'wp_enqueue_scripts', 'dashesv3_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';



/**
 * AJAX PAGINATION
 */
add_action( 'wp_ajax_nopriv_ajax_pagination', 'my_ajax_pagination' );
add_action( 'wp_ajax_ajax_pagination', 'my_ajax_pagination' );

function my_ajax_pagination() {
    $query_vars = json_decode( stripslashes( $_POST['query_vars'] ), true );

    $query_vars['paged'] = $_POST['page'];

    query_posts( $query_vars );

    if( ! have_posts() ) {
        get_template_part( 'content', 'none' );
    }
    else {
        while ( have_posts() ) {
            the_post();

            get_template_part( 'template-parts/content', 'index' );
        }
    }

    dashesv3_paging_nav();

    die();
}




/**
 * Removes default thumbnails
 * https://paulund.co.uk/remove-default-wordpress-image-sizes
 */
function remove_default_image_sizes( $sizes) {
    unset( $sizes['thumbnail']);
    unset( $sizes['medium']);
    unset( $sizes['medium_large']);
    unset( $sizes['large']);

    return $sizes;
}
add_filter('intermediate_image_sizes_advanced', 'remove_default_image_sizes');



/**
 * Filter the excerpt "read more" string.
 *
 * @param string $more "Read more" excerpt string.
 * @return string (Maybe) modified "read more" excerpt string.
 * https://developer.wordpress.org/reference/functions/the_excerpt/
 */
function wpdocs_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'wpdocs_excerpt_more' );



/**
 * Filter the except length to 20 words.
 *
 * @param int $length Excerpt length.
 * @return int (Maybe) modified excerpt length.
 * https://developer.wordpress.org/reference/functions/the_excerpt/
 */
function wpdocs_custom_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );



http://inspirationalpixels.com/snippets/add-post-type-to-main-loop
function add_post_types_to_loop($query) {
    if ($query->is_main_query() && $query->is_home() || $query->is_category() || $query->is_author()) {
        $query->set('post_type', array('post', 'projects', 'photography', 'mediawork'));
    }
}
add_action('pre_get_posts', 'add_post_types_to_loop');



/**
 * Allow wordpress media to accept svg files
 * https://css-tricks.com/snippets/wordpress/allow-svg-through-wordpress-media-uploader/
 */
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');







//Easier to access Featured Images from WP REST API
//http://stackoverflow.com/questions/33320227/wp-rest-api-angularjs-how-to-grab-featured-image-for-display-on-page
//
//Get image URL
function get_thumbnail_url($post){

	$imgSizes = array('post-thumbnail', 'mobile-thumb', 'tablet-thumb', 'large-thumb');

	for($x = 0; $x < count($imgSizes); $x++){

		if(has_post_thumbnail($post['id'])){
				$imgArray = wp_get_attachment_image_src( get_post_thumbnail_id( $post['id'] ), $imgSizes[$x] ); // replace 'full' with 'thumbnail' to get a thumbnail
				$imgURL[$x] = $imgArray[0];
		} else {
				return false;
		}
	}
	return $imgURL;
}
//integrate with WP-REST-API
function insert_thumbnail_url() {

	$postTypes = array('post', 'projects', 'photography', 'mediawork');

	for($x = 0; $x < count($postTypes); $x++){
		register_rest_field( $postTypes[$x],
												 'featured_image',  //key-name in json response
													array(
														'get_callback'    => 'get_thumbnail_url',
														'update_callback' => null,
														'schema'          => null,
														)
												);
	}
}
//register action
add_action( 'rest_api_init', 'insert_thumbnail_url' );
