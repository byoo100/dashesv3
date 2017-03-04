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
						<p>I enjoy the creativeness in the web development process. I also enjoy working with cameras and seeing how far I can push the hardware.</p>
					</div>
					<div id="img-main"><img src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/about/about-brian-compressed.jpg"></div>
				</div>
			</section>

			<section id="about-site">
				<div class="row">
					<h2 id="title-site">This Site</h2>
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
						<p>Another benefit of switching to webpack is to transition into and to learn ReactJS.</p>
					</div>
				</div>
			</section>

			<section id="about-programs">
				<div class="row">
					<div class="left">
						<h2 class="title-programs">Programs</h2>
						<div id="text-programs">
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
						<img src="<?php echo get_stylesheet_directory_uri();?>/src/images/about/about-programs-compressed.jpg" alt="">
					</div>
				</div>
			</section>

			<section id="about-cameras">
				<div class="row">
					<div class="camera">
						<div class="left">
							<span class="icon dslr"></span>
							<h2>DSLR</h2>
						</div>
						<div class="right">
							<ul>
								<li>Canon T2i Rebel</li>
								<li>Canon 6D</li>
								<li>Nikon D610</li>
							</ul>
						</div>
					</div>

					<div class="camera">
						<div class="left">
							<span class="icon video"></span>
							<h2>VIDEO</h2>
						</div>
						<div class="right">
							<ul>
								<li>Canon XHA1</li>
								<li>Canon XLH1</li>
								<li>Canon XF305</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
