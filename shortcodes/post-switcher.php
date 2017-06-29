<?php
    // Sets border color for Content Switcher
?>

<section id="post-content-switcher">
	<div id="post-content-anchor"></div>
	<ul class="post-content-list">
		<li class="post-content-item">
			<?php $current = is_front_page() ? 'current' : '' ?>
			<a class="post-content-link border-post <?php echo $current ?>" href="<?php echo get_home_url(null, '#post-content-anchor'); ?>">Blog</a>
		</li>
		<li class="post-content-item">
			<?php $current = is_post_type_archive('projects') ? 'current' : '' ?>
			<a class="post-content-link border-projects <?php echo $current ?>" href="<?php echo get_home_url(null, 'projects#post-content-anchor'); ?>">Projects</a>
		</li>
		<li class="post-content-item">
			<?php $current = is_post_type_archive('photography') ? 'current' : '' ?>
			<a class="post-content-link border-photography <?php echo $current ?>" href="<?php echo get_home_url(null, 'photography#post-content-anchor'); ?>">Photography</a>
		</li>
		<li class="post-content-item">
			<?php $current = is_post_type_archive('mediawork') ? 'current' : '' ?>
			<a class="post-content-link border-media <?php echo $current ?>" href="<?php echo get_home_url(null, 'mediawork#post-content-anchor'); ?>">Media</a>
		</li>
	</ul>
</section>
