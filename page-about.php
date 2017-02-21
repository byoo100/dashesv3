<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package dashesv3
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="page-about" role="main">

			<section id="about-main">
				<div class="row">
					<div id="text-main">
						<h1>about me</h1>
						<p class="intro">Aspiring Web Developer, Freelance Videographer, Photograhy Enthusiast</p>
						<p>MORE STUFF HERE</p>
					</div>
					<div id="img-main"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/about/about-adham-dannaway.jpg" alt=""></div>
				</div>
			</section>

			<section id="about-site">
				<div class="row">
					<div id="text-site">
						<h2>This site was made with</h2>
					</div>
					<ul id="icon-site">
				        <li><span class="icon wordpress"></span> <p>Wordpress</p></li>
				        <li><span class="icon webpack"></span> <p>Webpack</p></li>
				        <li><span class="icon mamp"></span> <p>Mamp / Wamp</p></li>
				        <li><span class="icon underscore"></span> <p>Underscore</p></li>
				        <li><span class="icon acf"></span> <p>ACF</p></li>
					 	<li><span class="icon sass"></span> <p>Sass</p></li>
					 	<li><span class="icon susy"></span> <p>Susy</p></li>
					 	<li><span class="icon sublime"></span> <p>Sublime Text</p></li>
					 	<li><span class="icon swiper"></span> <p>SwiperJS</p></li>
					 	<li><span class="icon github"></span> <p>Github</p></li>
					</ul>
				</div>
			</section>

			<section class="post-content centered">
				
				<section class="web-section">
					
				</section>

				<section class="thumb-zone">
					<div class="thumb-text">
						<h2 class="thumb-title">The Phone's Thumb Zone</h2>

						<p>Josh Clark wrote an <a href="http://alistapart.com/article/how-we-hold-our-gadgets">article</a> describing how we hold our gadgets.  In a world that revolves around smart phones, I strongly take the Thumb Zone in to consideration when creating a site.</p>
					</div>
	
					<div class="thumb-image">
						<img src="<?php echo get_stylesheet_directory_uri();?>/src/images/about/thumb-zone-compressed.png"></img>
					</div>
				</section>

				<section class="miscellaneous">
					<div class="misc-wrapper">

					<div class="programs">
						<div class="misc-content">
							<div class="misc-title"><i class="misc-icon fa fa-picture-o" aria-hidden="true"></i>Programs</div>
							<div class="misc-text">I do not claim to be an expert with these programs, but a few programs that I do use are:</div>
							<ul>
								<li><i class="adobe photoshop"></i><span class="screen-reader-text">Photoshop</span></li>
								<li><i class="adobe illustrator"></i><span class="screen-reader-text">Illustrator</span></li>
								<li><i class="adobe lightroom"></i><span class="screen-reader-text">Lightroom</span></li>
								<li><i class="adobe premiere"></i><span class="screen-reader-text">Premiere</span></li>
								<li><i class="adobe after-effects"></i><span class="screen-reader-text">After Effects</span></li>
								<li><i class="adobe audition"></i><span class="screen-reader-text">Audition</span></li>
							</ul>
						</div>
					</div>
					
					<div class="cameras">

						<div class="misc-content">
							<div class="misc-title"><i class="misc-icon fa fa-camera-retro" aria-hidden="true"></i>Cameras</div>
							<div class="misc-text">Currently I own a Nikon D610. A few camera bodies that I've used are:</div>
							<ul>
								<li>Canon 6D</li>
								<li>Nikon D610</li>
								<li>Canon XHA1</li>
								<li>Canon XLH1</li>
								<li>Canon XF305</li>
							</ul>
						</div>
					</div>
					
					<div class="extralinks">

						<div class="misc-content">
							<div class="misc-title"><i class="misc-icon fa fa-tasks" aria-hidden="true"></i>Resources</div>
							<div class="misc-text">I use many different resources from the internet, but a few that I use on a regular basis are:</div>
							<ul>
								<li><a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Google PageSpeed</a></li>
								<li><a href="https://gtmetrix.com/" target="_blank">GT Metrix</a></li>
								<li><a href="https://compressor.io/" target="_blank">Image Compressor</a></li>
								<li><a href="http://petercollingridge.appspot.com/svg-optimiser" target="_blank">SVG Optimiser</a></li>
								<li><a href="https://color.adobe.com/explore/most-popular/?time=all" target="_blank">Adobe Color</a></li>
							</ul>
						</div>
					</div>
					</div>
				</section>
			</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
