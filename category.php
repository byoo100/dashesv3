<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package dashesv3
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php

		echo $catID;

		$args = array( 
			'category_name' => single_cat_title( '', false )
			);
		$args['paged'] = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;

		query_posts( $args );

		if ( have_posts() ) : ?>

			<header class="page-header">
				<?php
					the_archive_title( '<h1 class="page-title">', '</h1>' );
					the_archive_description( '<div class="archive-description">', '</div>' );
				?>
			</header><!-- .page-header -->


			<section id="article-index">

				<?php
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
