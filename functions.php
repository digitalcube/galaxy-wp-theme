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
		'galaxy-wp-theme',
		get_stylesheet_directory_uri() . '/style.css',
		[],
		'0.0.0'
	);

	wp_dequeue_style('hello-elementor');
	wp_dequeue_style('hello-elementor-theme-style');
}

add_action('wp_enqueue_scripts', 'galaxy_enqueue_scripts', 20);
