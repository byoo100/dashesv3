<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package dashesv3
 */

get_header(); ?>

	<div id="primary" class="content-area">

		<?php include('shortcodes/blog-swiper.php'); ?>

		<main id="main" class="site-main" role="main">

			<?php include('shortcodes/post-switcher.php'); ?>

			<section id="article-index">

				<?php
				$args = array( 'post_type' => 'photography' );
				$args['paged'] = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;

				query_posts( $args );

				if ( have_posts() ) : 

					/* Start the Loop */
					while ( have_posts() ) : the_post();

						/*
						 * Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						get_template_part( 'template-parts/content', 'index' );

					endwhile;

					dashesv3_paging_nav();

					wp_reset_query(); 

				else :

					get_template_part( 'template-parts/content', 'none' );

				endif; ?>

			</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
