    // The code below is injected by flutter web optimizer, do not edit!!!!!!
    
    // window.assetBase
    var assetBase = "https://ibinbro.github.io/htmlsplit/";
    
    // window.mainjsManifest
    var mainjsManifest = {
  "main.dart.js": "main.dart.c9806e86.js",
  "main.dart.js_1.part.js": "main.dart.js_1.part.7eb70b84.js",
  "main.dart_0.js": "main.dart_0.2be0235f.js",
  "main.dart_1.js": "main.dart_1.9bd85de1.js",
  "main.dart_2.js": "main.dart_2.037520f1.js",
  "main.dart_3.js": "main.dart_3.277cc3cd.js",
  "main.dart_4.js": "main.dart_4.5f685e30.js",
  "main.dart_5.js": "main.dart_5.5faaa3e3.js"
};
    
    // window.hashFileManifest
    var hashFileManifest = {
  "assets/AssetManifest.json": "assets/AssetManifest.99914b93.json",
  "assets/FontManifest.json": "assets/FontManifest.d7517139.json",
  "favicon.png": "favicon.5dcef449.png",
  "flutter.js": "flutter.822458aa.js",
  "main.dart.js": "main.dart.c9806e86.js",
  "main.dart.js_1.part.js": "main.dart.js_1.part.7eb70b84.js",
  "main.dart_0.js": "main.dart_0.2be0235f.js",
  "main.dart_1.js": "main.dart_1.9bd85de1.js",
  "main.dart_2.js": "main.dart_2.037520f1.js",
  "main.dart_3.js": "main.dart_3.277cc3cd.js",
  "main.dart_4.js": "main.dart_4.5f685e30.js",
  "main.dart_5.js": "main.dart_5.5faaa3e3.js",
  "manifest.json": "manifest.994acfd8.json"
};
    
    // hook dynamic create element `src` `href` property
    (function(){
      var _defineProperty = function (element, property) {
        var value;
        Object.defineProperty(element, property, {
          get: function () {
            return value;
          },
          set: function (v) {
            value = v;
            if (typeof v === 'string') {
              if (v.startsWith('./')) {
                v = v.replace('./', '');
              }
              if (hashFileManifest[v]) {
                value = assetBase + hashFileManifest[v];
              }
            }
            element.setAttribute(property, value);
          }
        })
  
        var _setAttribute = element.setAttribute;
        element.setAttribute = function () {
          var args = Array.prototype.slice.call(arguments);
          // if (args[0] === 'src') {
          //   //do something here
          //   console.log('setAttribute', args[1])
          // }
          _setAttribute.apply(element, args);
        }
      }
  
      var _createElement = document.createElement;
      var _hookProperties = {'link': 'href', 'script': 'src', 'audio': 'src', 'video': 'src', 'map': 'src', 'img': 'src'};
      document.createElement = function (tagName) {
        var element = _createElement.call(document, tagName);
        var property = _hookProperties[tagName.toLowerCase()];
        if (property) {
          _defineProperty(element, property);
        }
        return element;
      }  
    })();

    // load main.dart.js_xxx.part js
    function dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId) {
      console.info('uri: ' + uri + ', loadId: '+ loadId);
      var src;
      try {
        var url = new URL(uri);
        var key = url.pathname.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      } catch (e) {
        var key = uri.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      }
    
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.addEventListener("load", successCallback, false);
      script.addEventListener("error", errorCallback, false);
      document.body.appendChild(script);
    }
    