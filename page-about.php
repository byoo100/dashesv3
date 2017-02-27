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
					<div id="img-main"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/about/about-brian.jpg"></div>
				</div>
			</section>

			<section id="about-site">
				<div class="row">
					<h2 id="title-site">This site was made with</h2>
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
					<div id="text-site">
						<p>Originally this site was made with Gulp, Compass, and breakpoint; but I switched to webpack to familiarize myself with it. Even though webpack might be overkill and not needed for a wordpress site, it has taken care of everything I needed. It replaces Gulp.  Sass-loader comes with basic Compass. And I can use sass without breakpoint.</p>
						<p>Another reason for switching to webpack is to use it with ReactJS and start learning a new framework.</p>
					</div>
				</div>
			</section>

			<section id="about-programs">
				<div class="row">
					<div class="left">
						<h2 class="title-programs">Programs</h2>
						<div id="text-site">
							<p>These are a few programs that I am familiar with. I am not an expert with them, but I do use them on a regular basis. Each of them are tools and used for different situations. Currently I use Photoshop, Premiere and Lightroom the most.</p>
						</div>
						<ul>
							<li class="icon photoshop"><span class="screen-reader-text">Photoshop</span></li>
							<li class="icon illustrator"><span class="screen-reader-text">Illustrator</span></li>
							<li class="icon lightroom"><span class="screen-reader-text">Lightroom</span></li>
							<li class="icon premiere"><span class="screen-reader-text">Premiere</span></li>
							<li class="icon after-effects"><span class="screen-reader-text">After Effects</span></li>
							<li class="icon audition"><span class="screen-reader-text">Audition</span></li>
						</ul>
					</div>
					<div class="right">
						<img src="<?php echo get_stylesheet_directory_uri();?>/images/about/about-programs.jpg" alt="">
					</div>
				</div>
			</section>

			<section id="about-resources">
				<h1 class="title-resources">Online Resources</h1>
				<p class="text-resources">I use many different resources from the internet, but a few that I use on a regular basis are:</p>
					<ul>
						<li><a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Google PageSpeed</a></li>
						<li><a href="https://gtmetrix.com/" target="_blank">GT Metrix</a></li>
						<li><a href="https://compressor.io/" target="_blank">Image Compressor</a></li>
						<li><a href="http://petercollingridge.appspot.com/svg-optimiser" target="_blank">SVG Optimiser</a></li>
						<li><a href="https://color.adobe.com/explore/most-popular/?time=all" target="_blank">Adobe Color</a></li>
					</ul>
			</section>




		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
