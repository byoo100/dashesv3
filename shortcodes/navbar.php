<?php
    // Sets variables for Icons and Colors based on Post Type
    $type = get_post_type();

    if ( is_single() && $type == 'post' ){ $border = "border-post"; }
    elseif ( is_single() && $type == 'projects' ){ $border = "border-projects"; }
    elseif ( is_single() && $type == 'photography' ){ $border = "border-photography"; }
    elseif ( is_single() && $type == 'mediawork' ){ $border = "border-media"; }
?>



<nav id="main-nav" class="main-navigation" role="navigation">

    <section id="mobile-main">
        <main id="mobile-pre">
            <button id="mobile-close"></button>
        </main><!-- #mobile-pre -->

        <main id="mobile-menu">
            <div class="mobile-logo">
              <object type="image/svg+xml" class="logo" data="<?php echo get_template_directory_uri(); ?>/src/images/brian-logo-optimised.svg"></object>
            </div><!-- .mobile-logo -->

            <?php wp_nav_menu( array(
                'theme_location' => 'primary',
                'container' => 'ul',
                'menu_class' => 'mobile-list'
            ) ); ?>

            <?php wp_nav_menu( array(
                'theme_location' => 'social',
                'container' => 'ul',
                'menu_class' => 'social-list',
                'link_before' => '<span class=screen-reader-text>',
                'link_after' => '</span>'
            ) ); ?>
        </main><!-- #mobile-menu -->

    </section><!-- #mobile-main -->

    <button id="mobile-open"></button>
    <div id="dark-overlay"></div>

    <section id="desktop-main">
          <main id="desktop-pre">
              <div class="desktop-pre-wrapper">
                  <?php wp_nav_menu( array(
                      'theme_location' => 'social',
                      'container' => 'ul',
                      'menu_class' => 'social-list',
                      'link_before' => '<span class=screen-reader-text>',
                      'link_after' => '</span>'
                  ) ); ?>
              </div>
          </main><!-- #desktop-pre -->

          <main id="desktop-menu">
              <div class="desktop-menu-wrapper">
                  <div class="desktop-logo">
                      <object type="image/svg+xml" class="logo" style="max-width:100px; max-height:100px;" data="<?php echo get_template_directory_uri(); ?>/src/images/brian-logo-optimised.svg"></object>
                  </div>

                  <?php wp_nav_menu( array(
                      'theme_location' => 'primary',
                      'container' => 'ul',
                      'menu_class' => 'desktop-list'
                  ) ); ?>
              </div>
          </main><!-- #desktop-list -->
    </section><!-- #desktop-main -->





</nav><!-- #main-nav -->
