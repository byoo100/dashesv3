<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package dashesv3
 */

get_header(); ?>

	<?php
		// Sets variables for Icons and Colors based on Post Type
		$type = get_post_type();

		if ( $type == 'post' ){ $icon = "fa fa-book"; $border = "border-post"; }
		if ( $type == 'projects' ){ $icon = "fa fa-code"; $border = "border-projects"; }
		if ( $type == 'photography' ){ $icon = "fa fa-camera"; $border = "border-photography"; }
		if ( $type == 'media' ){ $icon = "fa fa-video-camera"; $border = "border-media"; }


		// Sets variables for Flexible Content
		if( have_rows('the_content') ):
			$i = 0;

		     // loop through the rows of data
		    while ( have_rows('the_content') ) : the_row();

		        if( get_row_layout() == 'featured_video' ):

		        	$video = get_sub_field('video');

		        elseif( get_row_layout() == 'featured_gallery' ):

		        	$gallery = get_sub_field('gallery');

		        elseif( get_row_layout() == 'side_content' ):

		        	$side_title[$i] = get_sub_field('side_title');
		        	$side_text[$i] = get_sub_field('side_text');
		        	$i++;

		        endif;

		    endwhile;

		endif;
	?>

	<div id="primary" class="content-area <?php echo $border ?>">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : the_post(); ?>

			<section class="title-banner">
				<div class="title-wrapper">
					<span class="title-icon <?php echo $icon ?>"></span>
					<?php the_title( '<span class="title-text">', '</span>' ); ?>
				</div>

				<div class="post-meta">
					<?php dashesv3_posted_on(); ?>
				</div><!-- .entry-meta -->
			</section>


			<?php
			//=================
			// FEATURED SECTION
			//=================
			if( $side_title[0] && $side_text[0] ) :
				echo "<section class='featured left'>";
			else :
				echo "<section class='featured centered'>";
			endif;

				if( $video || $gallery ) :
					if( $video ) :
						echo "<div class=featured-video>";
						echo $video;
						echo "</div>";
					endif;

					if( $gallery ) :
						echo "<div class=featured-gallery>";
						echo $gallery;
						echo "</div>";
					endif;

				else :
					if ( has_post_thumbnail() ) :
					echo "<div class=featured-image>";
						the_post_thumbnail();
					echo "</div>";
					endif;
				endif;

				echo "</section>";
			?>


			<?php
			//================
			// SIDEBAR SECTION
			//================
				if( $side_title[0] && $side_text[0] ) :
					echo "<section class=sidebar>";

					for($x = 0, $max = count($side_title); $x < $max; $x++ ) :
						echo "<div class=side-content>";
						echo "<span class=side-title>" . $side_title[$x] . "</span>";
						echo "<span class=side-text>" . $side_text[$x] . "</span>";
						echo "</div>";
					endfor;

					echo "</section>";
				endif;

			?>


			<?php
			//=============
			// POST CONTENT
			//=============
			if( $side_title[0] && $side_text[0] ) :
				echo "<section class='post-content left'>";
			else :
				echo "<section class='post-content centered'>";
			endif;

					get_template_part( 'template-parts/content', 'single' );

					dashesv3_post_nav();

				echo "</section>";
			?>

		<?php endif; // End If (main loop)?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
