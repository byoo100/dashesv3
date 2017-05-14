<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package dashesv3
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php if(get_the_post_thumbnail()) : ?>
	<section class="featured-image">
		<a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
			<?php the_post_thumbnail('mobile-thumb'); ?>
		</a>
	</section>
	<?php endif; ?>

	<section class="article-content">
		<?php the_title( sprintf( '<span class="article-title index-excerpt"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></span>' ); ?>

		<span class="article-text">
			<a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
				<?php echo get_the_excerpt(); ?>
			</a>
		</span>
	</section><!-- .post-excerpt -->

	<section class="article-footer">
		<?php dashesv3_index_footer(); ?>
	</section><!-- .entry-footer -->
</article>
