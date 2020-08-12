<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'velocity5' );

/** MySQL database username */
define( 'DB_USER', 'velocity5' );

/** MySQL database password */
define( 'DB_PASSWORD', 'saigonbeer333' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '/S>[lobhD 9%z d23Y=n$CX3vwdR?+g,>]RS5`6nyeL)Rws#NVQSOtIBXJ VUL#6' );
define( 'SECURE_AUTH_KEY',  'GC7cZ.MqZxNnwX3n(%[~h)9E[7=*y`M,9Ws`T^9BG,:$hnT~?]!K[-KK0]7c}@}?' );
define( 'LOGGED_IN_KEY',    '7atty7P9K=t+M^otn_3nqp!7tHkPMf/5Uw4jEfqn_:BE5`J&TQUZP=kDz`ZFGg2G' );
define( 'NONCE_KEY',        'UT Dy(irgT+ncCyH,I8>tdjsx U:>nkv$l[yvOprhU*2[~0 7ys}9aj$+V1|D358' );
define( 'AUTH_SALT',        'gv!yq](<PI(5srpmlir?9h~m^yhJ9rh :J33[O O/O-pI d@jc}gBDzJS0`#88Pj' );
define( 'SECURE_AUTH_SALT', '=6_5P>_TBW]VNxMxSw}|mNw]:,Q#E@7mjAq*_If4[+hW<_(O)9pXRpC?iQz7&53p' );
define( 'LOGGED_IN_SALT',   ',YRb(]FRfaGTsc7h;(`(dNeNkS/XNOQL=TlOm4Z5(K*R}~;0Gs%gL>QD%n7Y6%q:' );
define( 'NONCE_SALT',       ';DWM00On/PN0E0lVQiE(wQwhvItY[FhIi[EHc-y4ke-Q+MvW78|U|d687k<,b;?/' );

/**#@-*/
@ini_set( 'upload_max_filesize' , '128M' );
@ini_set( 'post_max_size', '128M');
@ini_set( 'memory_limit', '256M' );
@ini_set( 'max_execution_time', '300' );
@ini_set( 'max_input_time', '300' );
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'velocity5_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
