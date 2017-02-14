<?php 
    // Sets variables for Icons and Colors based on Post Type
    $type = get_post_type();

    if ( is_single() && $type == 'post' ){ $border = "border-post"; }
    elseif ( is_single() && $type == 'projects' ){ $border = "border-projects"; }
    elseif ( is_single() && $type == 'photography' ){ $border = "border-photography"; }
    elseif ( is_single() && $type == 'media' ){ $border = "border-media"; }
?>


<header id="masthead" class="site-header" role="banner">

    <nav id="site-navigation" class="main-navigation <?php echo $border ?>" role="navigation">

        <?php 
            $custom_logo_id = get_theme_mod( 'custom_logo' );
            $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
        ?>

        <div class="mobile-menubar <?php echo $border ?>">
            <div class="mobile-menubar-logo">
                <object type="image/svg+xml" data="<?php echo get_template_directory_uri(); ?>/images/brian-logo-optimised.svg"></object>
            </div>

            <div class="mobile-btn-open"></div><!-- Open Button -->
        </div><!-- .nav-mobile-menubar -->



        <div class="mobile-content left">

            <div class="mobile-header">
                <div class="mobile-btn-close"></div><!-- Close Button -->

                <div class="mobile-menulist-logo">
                    <object type="image/svg+xml" data="<?php echo get_template_directory_uri(); ?>/images/brian-logo-optimised.svg"></object>
                </div>
            </div>
            
            <?php wp_nav_menu( array( 
                'theme_location' => 'primary', 
                'menu_class' => 'mobile-list',
                'link_before' => '<span class=icon>',
                'link_after' => '</span>'
            ) ); ?>

            <?php wp_nav_menu( array( 
                'theme_location' => 'social', 
                'container' => 'div',
                'container_id' => 'social-list',
                'link_before' => '<span class=screen-reader-text>',
                'link_after' => '</span>'
            ) ); ?>
        </div><!-- .nav-mobile-menu -->


        <div id="nav-blackscreen"></div>


        <div class="desktop-menubar">
            <div class="desktop-logo">
                <a href='<?php echo esc_url( home_url( '/' ) ); ?>' title='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>' rel='home'>
                    <object type="image/svg+xml" data="<?php echo get_template_directory_uri(); ?>/images/brian-logo-optimised.svg"></object>
                </a>
            </div><!-- .desktop-icon -->

            <div class="grid-container">
                <?php wp_nav_menu( array( 
                    'theme_location' => 'primary', 
                    'container' => 'none',
                    'menu_class' => 'desktop-list'
                ) ); ?>

                <?php wp_nav_menu( array( 
                    'theme_location' => 'social', 
                    'container' => 'none',
                    'menu_id' => 'social-list',
                    'link_before' => '<span class=screen-reader-text>',
                    'link_after' => '</span>'
                ) ); ?>
            </div><!-- grid-container -->
        </div><!-- .nav-desktop-menubar -->

    </nav><!-- #site-navigation -->

</header><!-- #masthead -->