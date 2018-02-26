/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() {

    var tcMainContainer = document.getElementById('tc-adver-partner');
    var tcWrap = document.getElementById('tc-spots');
    var tcContainer = document.getElementById('tc-spots-container');
    var tcMenu = document.getElementById('tc-spots-menu');
    var tcMenuItems = tcMenu.getElementsByTagName('li');
    var div = document.createElement('div');
    var progressBar = document.getElementById('meter');

    for (var i = 0; i < tcMenuItems.length; i++) {
        tcMenuItems[i].addEventListener('mouseenter', selectSpot);
        tcMenuItems[i].addEventListener('mouseleave', selectSpot);
        tcMenuItems[i].addEventListener('click', selectSpot);
    }

    function selectSpot(e, el) {
        var el = this;
        if (typeof el.dataset.spot === 'undefined' || el.dataset.spot === null) return;
        var spot = document.getElementById(el.dataset.spot);
        switch (e.type) {
            case 'mouseenter':
                if (tcContainer.classList.contains('fixed-state')) return;
                spot.className += ' show-spot';
                tcContainer.className += ' mouseenter';

                break;
            case 'mouseleave':
                if (tcContainer.classList.contains('fixed-state')) return;
                spot.classList.remove('show-spot');
                tcContainer.classList.remove('mouseenter');

                break;
            case 'click':
                for (var i = 0; i < tcMenuItems.length; i++) {
                    tcMenuItems[i].removeAttribute('class');
                }

                spot.className = spot.className.replace(' show-spot','');

                if(!tcContainer.classList.contains('fixed-state')) {
                    tcContainer.className += ' fixed-state';
                    spot.className += ' scaleIn';
                    el.className = 'state-active';
                } else {
                    var preElem = tcContainer.getElementsByClassName('scaleIn')[0];
                    preElem.className = preElem.className.replace(' scaleIn',' scaleOut');
                    setTimeout(function (e) {
                        preElem.className = preElem.className.replace(' scaleOut','');
                        if(preElem.getAttribute('id') != el.dataset.spot) {
                            spot.className += ' scaleIn';
                            el.className = 'state-active';
                        }else{
                            tcContainer.className = tcContainer.className.replace(' mouseenter fixed-state','')
                        }
                    }, 200);
                }

                break;
        }
    }

    function preloadImages(urls, allImagesLoadedCallback){
        var loadedCounter = 0;
        var toBeLoadedNumber = 120;
        urls.forEach(function(url){
            preloadImage(url, function(){
                loadedCounter += 20;
                progressBar.getElementsByTagName('span')[0].style.width = loadedCounter +'%';
                //console.log('Number of loaded images: ' + loadedCounter, progressBar.getElementsByTagName('span')[0]);
                if(loadedCounter == toBeLoadedNumber){
                    allImagesLoadedCallback();
                }
            });
        });
        function preloadImage(url, anImageLoadedCallback){
            var img = new Image();
            img.src = url;
            img.onload = anImageLoadedCallback;
        }
    }

    preloadImages([
        'assets/images/txxx_screen.png',
        'assets/images/under_video.png',
        'assets/images/preroll.png',
        'assets/images/banner.png',
        'assets/images/in_video.png',
        'assets/images/native_ads.png'
    ], function(){
        tcMainContainer.className = 'full-loaded'
        //console.log('All images were loaded');
    });
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);