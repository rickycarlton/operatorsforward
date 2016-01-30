<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" type="text/css" href="/wp-content/themes/operatorsforward/css/application.css">
	<!-- <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'> -->
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,700,300italic' rel='stylesheet' type='text/css'>
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<script>(function(){document.documentElement.className='js'})();</script>
	<?php wp_head(); ?>
	
</head>
<body>

<div class="navBar">
	<div class="navBar__cell">
		<div class="navBar__container">
			<div class="hamburger-menu">
				<div class="bar"></div>	
			</div>
			<a href="/">
				<div class="navBar__logo"></div>
			</a>
			<div class="navBar__rightLinks">
				<a class="btn btn--outline btn--nav" href="mailto:info@operatorsforward.com">Contact Us</a>
				<!-- <a href="mailto:info@operatorsforward.com">Contact Us</a> -->
				<a href="/about/">About Us</a>
				<a href="/opportunities/">Opportunities</a>
				<a href="/operators/">Operators</a>
				<a href="/companies/">Companies</a>
			</div>
		</div>
	</div>
</div>
<div class="navBar__mobileNav">
	<div class="navBar__mobileLinks">
		<div class="navBar__mobileLinks--title">Navigation</div>
		<a href="/">Home</a>
		<a href="/companies/">Companies</a>
		<a href="/operators/">Operators</a>
		<a href="/opportunities/">Opportunities</a>
		<a href="/about/">About Us</a>
		<a href="mailto:info@operatorsforward.com">Contact Us</a>
	</div>
</div>