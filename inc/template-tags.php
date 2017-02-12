<?php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package dashesv3
 */

if ( ! function_exists( 'dashesv3_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
function dashesv3_posted_on() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_attr( get_the_modified_date( 'c' ) ),
		esc_html( get_the_modified_date() )
	);

	$posted_on = sprintf(
		esc_html_x( 'Posted on %s', 'post date', 'dashesv3' ),
		'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
	);

	$byline = sprintf(
		esc_html_x( 'by %s', 'post author', 'dashesv3' ),
		'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
	);

	echo '<span class="posted-on">' . $posted_on . '</span><span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.

}
endif;

if ( ! function_exists( 'dashesv3_entry_footer' ) ) :
/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function dashesv3_entry_footer() {
	
	edit_post_link(
		sprintf(
			/* translators: %s: Name of current post */
			esc_html__( 'Edit %s', 'dashesv3' ),
			the_title( '<span class="screen-reader-text">"', '"</span>', false )
		),
		'<span class="edit-link">',
		'</span>'
	);
}
endif;


if ( ! function_exists( 'dashesv3_index_footer' ) ) :
/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function dashesv3_index_footer() {

	$time_string = '<time class="article-date published" datetime="%1$s">%2$s</time>';

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date('M j Y') )
	);

	$posted_on = sprintf(
		esc_html_x( '%s', 'post date', 'dashesv3' ),
		$time_string
	);

	echo '<span class="posted-on">' . $posted_on . '</span>'; // WPCS: XSS OK.

	$categories_list = '<span class="cat-links color-%1$s">%2$s</span>';

	$categories_list = sprintf( $categories_list,
		get_post_type(),
		get_the_category_list( esc_html__( ', ', 'dashesv3' ) )
	);

	echo $categories_list; // WPCS: XSS OK.
	
}
endif;


/**
 * Returns true if a blog has more than 1 category.
 *
 * @return bool
 */
function dashesv3_categorized_blog() {
	if ( false === ( $all_the_cool_cats = get_transient( 'dashesv3_categories' ) ) ) {
		// Create an array of all the categories that are attached to posts.
		$all_the_cool_cats = get_categories( array(
			'fields'     => 'ids',
			'hide_empty' => 1,
			// We only need to know if there is more than one category.
			'number'     => 2,
		) );

		// Count the number of categories that are attached to the posts.
		$all_the_cool_cats = count( $all_the_cool_cats );

		set_transient( 'dashesv3_categories', $all_the_cool_cats );
	}

	if ( $all_the_cool_cats > 1 ) {
		// This blog has more than 1 category so dashesv3_categorized_blog should return true.
		return true;
	} else {
		// This blog has only 1 category so dashesv3_categorized_blog should return false.
		return false;
	}
}

/**
 * Flush out the transients used in dashesv3_categorized_blog.
 */
function dashesv3_category_transient_flusher() {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	// Like, beat it. Dig?
	delete_transient( 'dashesv3_categories' );
}
add_action( 'edit_category', 'dashesv3_category_transient_flusher' );
add_action( 'save_post',     'dashesv3_category_transient_flusher' );



if ( ! function_exists( 'dashesv3_paging_nav' ) ) :
/**
 * Display navigation to next/previous set of posts when applicable.
 *
 * @since Twenty Fourteen 1.0
 *
 * @global WP_Query   $wp_query   WordPress Query object.
 * @global WP_Rewrite $wp_rewrite WordPress Rewrite object.
 */
function dashesv3_paging_nav() {
	global $wp_query, $wp_rewrite;

	// Don't print empty markup if there's only one page.
	if ( $wp_query->max_num_pages < 2 ) {
		return;
	}

	$paged        = get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1;
	$pagenum_link = html_entity_decode( get_pagenum_link() );
	$query_args   = array();
	$url_parts    = explode( '?', $pagenum_link );

	if ( isset( $url_parts[1] ) ) {
		wp_parse_str( $url_parts[1], $query_args );
	}

	$pagenum_link = trailingslashit( $pagenum_link );
	$pagenum_link .= '%_%';
	$pagenum_link .= is_front_page() ? '#post-content-anchor' : '';
	$pagenum_link .= strpos( $pagenum_link, 'projects' ) ? '#post-content-anchor' : '';
	$pagenum_link .= strpos( $pagenum_link, 'photography' ) ? '#post-content-anchor' : '';
	$pagenum_link .= strpos( $pagenum_link, 'media' ) ? '#post-content-anchor' : '';

	$format  .= $wp_rewrite->using_index_permalinks() && ! strpos( $pagenum_link, 'index.php' ) ? 'index.php/' : '';
	$format .= $wp_rewrite->using_permalinks() ? user_trailingslashit( $wp_rewrite->pagination_base . '/%#%', 'paged' ) : '?paged=%#%';

	// Set up paginated links.
	$links = paginate_links( array(
		'base'     => $pagenum_link,
		'format'   => $format,
		'total'    => $wp_query->max_num_pages,
		'current'  => $paged,
		'mid_size' => 1,
		'add_args' => array_map( 'urlencode', $query_args ),
		'prev_text' => __( 'Previous', 'dashesv3' ),
		'next_text' => __( 'Next', 'dashesv3' ),
		'type'		=> 'list',
	) );

	if ( $links ) :

	?>
	<nav class="navigation paging-navigation" role="navigation">
		<h1 class="screen-reader-text"><?php _e( 'Posts navigation', 'dashesv3' ); ?></h1>
		<?php echo $links; ?>
	</nav>
	<?php
	endif;
}
endif;




if ( ! function_exists( 'dashesv3_post_nav' ) ) :
/**
 * Prints the Post Navigation.
 */
function dashesv3_post_nav() {
	if ( is_singular( 'attachment' ) ) {
		// Parent post navigation.
		the_post_navigation( array(
			'prev_text' => _x( '<span class="meta-nav">Published in</span><span class="post-title">%title</span>', 'Parent post link', 'dashes' ),
		) );
	} elseif ( is_singular() ) {
		// Previous/next post navigation.
		the_post_navigation( array(
			'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'dashes' ) . '</span> ' .
				'<span class="screen-reader-text">' . __( 'Next post:', 'dashes' ) . '</span> ' .
				'<span class="post-title">%title</span>',
			'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'dashes' ) . '</span> ' .
				'<span class="screen-reader-text">' . __( 'Previous post:', 'dashes' ) . '</span> ' .
				'<span class="post-title">%title</span>',
		) );
	}
}
endif;