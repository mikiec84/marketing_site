
// window._ = require('lodash');

// /**
//  * We'll load jQuery and the Bootstrap jQuery plugin which provides support
//  * for JavaScript based Bootstrap features such as modals and tabs. This
//  * code may be modified to fit the specific needs of your application.
//  */

// try {
//     window.$ = window.jQuery = require('jquery');

//     require('bootstrap-sass');
// } catch (e) {}

// /**
//  * We'll load the axios HTTP library which allows us to easily issue requests
//  * to our Laravel back-end. This library automatically handles sending the
//  * CSRF token as a header based on the value of the "XSRF" token cookie.
//  */

// window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// /**
//  * Next we will register the CSRF Token as a common header with Axios so that
//  * all outgoing HTTP requests automatically have it attached. This is just
//  * a simple convenience so we don't have to attach every token manually.
//  */

// let token = document.head.querySelector('meta[name="csrf-token"]');

// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }
//

window.hljs = require('highlight.js');
hljs.initHighlightingOnLoad();

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86013324-1', 'auto');
  ga('send', 'pageview');