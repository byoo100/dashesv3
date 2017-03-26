<!-- SLIDER -->
<section id="featured-posts">

<?php
    //==================================
    // GATHERS THE INFO FOR RECENT POSTS
    //==================================
    global $swiper_query;
	$i = 0;
	$numPosts = '3';
    $args = array( 'post_type' => array('post', 'projects', 'photography', 'mediawork'), 'posts_per_page' => $numPosts, 'ignore_sticky_posts' => '1' );
	$swiper_query = new WP_Query( $args );

	while( $swiper_query->have_posts() ){
		$swiper_query->the_post();

		$thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id(), 'post-thumbnail' );
        $image[$i] = $thumbnail[0];
        $permalink[$i] = get_permalink();
        $title[$i] = wp_trim_words( get_the_title(), 10 );
        $excerpt[$i] = get_the_excerpt();
    	$type[$i] = get_post_type();

        $i++;
	}
?>

<!-- Background Container -->
<div class="swiper-container featured-swiper">

    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">

        <?php // The Loop!
        for ($i = 0; $i < $numPosts; $i++) { ?>

            <div  class="swiper-slide">
				<div class="swiper-link">
                	<span class="swiper-tag color-<?php echo $type[$i]; ?>"> <?php echo $type[$i]; ?> </span>
                    <span class="swiper-title"><a href="<?php echo $permalink[$i]; ?>"> <?php echo $title[$i]; ?> </a></span>
                    <span class="swiper-excerpt"><a href="<?php echo $permalink[$i]; ?>"> <?php echo $excerpt[$i]; ?> </a></span>
                </div>
                <div class="swiper-vignette"></div>
            	<img class="swiper-image" src="<?php echo $image[$i]; ?>"></img>
            </div>

        <?php } ?>

    </div> <!-- .swiper-wrapper -->

</div> <!-- .swiper-background -->

</section>
