/**
 * This file includes polyfills and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called 'evergreen' browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 */

const polyfills = []

/** *************************************************************************************************
 * BROWSER POLYFILLS
 */

// import 'core-js/features/array/from'; // <- at the top of your entry point
// import 'core-js/features/array/flat'; // <- at the top of your entry point
// import 'core-js/features/set';        // <- at the top of your entry point
// import 'core-js/features/promise';    // <- at the top of your entry point

// import from from 'core-js-pure/features/array/from';
// import Set from 'core-js-pure/features/set';
// import Promise from 'core-js-pure/features/promise';

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
polyfills.push('core-js/es/symbol'); // 'es6-symbol/implement'
polyfills.push('core-js/es/object');
// polyfills.push('core-js/es/function');
// polyfills.push('core-js/es/parse-int');
// polyfills.push('core-js/es/parse-float');
// polyfills.push('core-js/es/number');
// polyfills.push('core-js/es/math');
// polyfills.push('core-js/es/string');
// polyfills.push('core-js/es/date');
// polyfills.push('core-js/es/array');
// polyfills.push('core-js/es/regexp');
polyfills.push('core-js/es/map');
// polyfills.push('core-js/es/weak-map');
// polyfills.push('core-js/es/set');
polyfills.push('core-js/es/promise');

polyfills.push('core-js/fn/array/includes');

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js');  // Run `npm install --save classlist.js`.

/** IE10 and IE11 requires the following for the Reflect API. */
polyfills.push('core-js/es/reflect');

// if (typeof Promise === 'undefined') {
//     // Rejection tracking prevents a common issue where React gets into an
//     // inconsistent state due to an error, but it gets swallowed by a Promise,
//     // and the user has no idea what causes React's erratic future behavior.
//     polyfills.push('promise/lib/rejection-tracking');
//     window.Promise = require('promise/lib/es6-extensions.js');
// }

/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT, you can remove.
// polyfills.push('core-js/es7/reflect');

// fetch() polyfill for making API calls.
// polyfills.push('whatwg-fetch');

// polyfills for modern browsers (if any)
// polyfills.push('intersection-observer');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
// polyfills.push('raf');

/**
 * Required to support Web Animations.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// polyfills.push('web-animations-js');  // Run `npm install --save web-animations-js`.

module.exports.polyfills = polyfills
