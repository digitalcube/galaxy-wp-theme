<?php

/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function galaxy_enqueue_scripts()
{
	wp_enqueue_style(
		'galaxy-wp-theme-styles',
		get_stylesheet_directory_uri() . '/style.css',
		[],
		'0.0.0'
	);

	wp_enqueue_style('normalize-css', 'https://cdn.jsdelivr.net/npm/normalize.css@latest/normalize.css', [], 'latest', true);

	wp_enqueue_script('galaxy-wp-theme-scripts', get_theme_file_uri() . '/main.js', array(), '0.0.0', true);

	wp_dequeue_style('hello-elementor');
	wp_dequeue_style('hello-elementor-theme-style');
}

add_action('wp_enqueue_scripts', 'galaxy_enqueue_scripts', 20);

/**
 * Add body class
 *
 * @return void
 */

add_filter('body_class', function ($classes) {
	return array_merge($classes, ['sans-serif', 'font-weight-regular']);
});
