'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cfc7e6cd06343f4d68f98e0bdc9101df",
"assets/AssetManifest.bin.json": "e47e7fe99ad076eee4358503484ad3d4",
"assets/AssetManifest.json": "a4cca39d10629dabaf8e1fa41277efd0",
"assets/assets/auc.png": "78e7c4c2348239ace5ac93812e202f61",
"assets/assets/Blaze%2520Colored%2520Combo%2520Cropped.PNG": "b44747661396771048a7fdab40c26a08",
"assets/assets/Blaze%2520Colored%2520Combo.png": "369ededda5f0a3404948a2ae03c80390",
"assets/assets/Blaze%2520Colored%2520Copy%2520Word.png": "21ae98354c6ac4dc63913b2f9d8a2b03",
"assets/assets/Blaze%2520Colored%2520Copy.png": "5601ed7b52fbd02424408918bb03d415",
"assets/assets/Blaze%2520Colored%2520Cropped.PNG": "5ab6c5b34cc72a75556b6519274a7171",
"assets/assets/Blaze%2520Colored.png": "5601ed7b52fbd02424408918bb03d415",
"assets/assets/Blaze%2520Deep%2520Blue%2520Cropped.png": "6955afc0105bf578c345b14e9eebc16d",
"assets/assets/Blaze%2520Deep%2520Blue.png": "02728d238799c671beb85b494df7c1fb",
"assets/assets/Blaze%2520White%2520Blue.png": "0196b3f7b1157fddbdd7467caa2cb2a4",
"assets/assets/Blaze%2520White%2520PNG.png": "cfbd34dcd41880b1bec087894e1c88e6",
"assets/assets/blazebot.png": "e38ce2ecd1a2e98abefa9e676e388318",
"assets/assets/blazebot.svg": "c909b762c879bfb0353008b8b867e2c5",
"assets/assets/blazebotnew.png": "e38ce2ecd1a2e98abefa9e676e388318",
"assets/assets/blazenewcolored.png": "deed74177a2dcd9628cc4b5c755e3c52",
"assets/assets/blazestocks.PNG": "3dbd7d8fedbbf9c74635467f5e9cc959",
"assets/assets/blaze_home_tilted.PNG": "b25941ff0141ef43467d5770e9e43646",
"assets/assets/blaze_home_tilted_cropped.png": "7b1517691db2ee591412205f8b45724c",
"assets/assets/blaze_home_tilted_new.png": "414fd6f063d93fa143a113604e52c44e",
"assets/assets/blaze_logo_new.png": "b85f288fdbf9e329f75ecb6d07ef5dbe",
"assets/assets/blaze_logo_new_icon.png": "581a80ee71fe92bf9c8a9681a4450775",
"assets/assets/chatbot_logo.png": "e38ce2ecd1a2e98abefa9e676e388318",
"assets/assets/chatbot_logo_updated.jpg": "c45525f5ceb1cf0a12ea62fdfbfb5c59",
"assets/assets/chatbot_mockup.png": "185af547852e26b5d8629301a9facbc7",
"assets/assets/chatbot_mockup_1.png": "52ffa8eb290f559c07a977542a74ca5e",
"assets/assets/chatbot_updated_2.png": "77076ec4c1741cec3a021f7044871c9c",
"assets/assets/chatbot_updated_3.png": "e741aa1bc144ac0403231df4f3f9a4d3",
"assets/assets/chatbot_updated_4.png": "680c2a7e00a7e7d1cef9fa205f3af2a9",
"assets/assets/create_playlist_mockup.png": "1b642d46de7c45164d8988fa0094b24f",
"assets/assets/execution_mockup_1.png": "8e9838b432ee5f8d5ad8233a59645c7e",
"assets/assets/fblogowhite.png": "688e3c62ff8f716eea2229af76b6bea5",
"assets/assets/general_investing.png": "777f2e9119205df541b949eed878dd48",
"assets/assets/generate_portfolio.png": "f06293f71d2e51efe0cd96ade0f36c9f",
"assets/assets/home.jpg": "b8964d701983b751e69a8c510f861038",
"assets/assets/homedesign1.png": "00edee6b00a3b88028a5b001409b4238",
"assets/assets/homedesign2.png": "aeacb9e22c160594f57757701e9876b4",
"assets/assets/homedesign3.png": "c4906e18ef8692d675644add3edfec08",
"assets/assets/homedesign4.png": "5cb67dca1f0f26143a7a1780b8641d2d",
"assets/assets/homedesign5.png": "5ab67c8e880ab49980be43d40c8dba0d",
"assets/assets/homedesign6.png": "50f3125d6149e901248cbd0a8f92b467",
"assets/assets/home_1_transparent.png": "681489a59c7f0cdf99a606aab1d96298",
"assets/assets/home_2.jpg": "8eb52ebbd11971644dab468e0f2fe7c8",
"assets/assets/home_2_transparent.png": "4c04f3c6e3e8ee994497325dfad484e1",
"assets/assets/home_3.jpg": "a3870ee38388391e247589a9326405a7",
"assets/assets/home_3_transparent.png": "acf0817d481d18ebf13ba5e7c27f5881",
"assets/assets/home_4.jpg": "5f2e85c48c04e8808a9eae467badd7ec",
"assets/assets/home_5_transparent.png": "137673ec489f050f73b4b04c3dc1196c",
"assets/assets/home_mockup.svg": "fc4cb97c8dda3ec41b60001750da52e2",
"assets/assets/how_it_works_1.png": "322575dcef0739c8d1773407f5580ac1",
"assets/assets/instalogowhite.png": "aecde0868a56217b66924092fb4f3af9",
"assets/assets/learn_mockup_1.png": "b425b5ff7a2819840c66c3fce8841db6",
"assets/assets/linkedinlogowhite.png": "d837b8d23ab386ad11fb2796fe19db61",
"assets/assets/mockup_1.png": "85ad5fcff1f8b4087e9e437f402fa438",
"assets/assets/mockup_1_test.png": "65f3b5fcee0ac836d3b2748e9f9223a0",
"assets/assets/mockup_test_2.png": "123a13b1321158bc66c641a54220a7ec",
"assets/assets/mockup_test_3.png": "faa761e22b9b4bb7546039f36b0b08ad",
"assets/assets/paymob.png": "5ea9f40adb99e78d24d772dd37f4181d",
"assets/assets/paymob_cropped.png": "759eb6adb63fec7db4b718abcaf4edc9",
"assets/assets/phone_generated_portfolio.png": "65792f384ac760a5ca3f3272ec9f8c32",
"assets/assets/phone_mockup_home_2.png": "ae5df8702a1e55d43b180e7372e46123",
"assets/assets/phone_mockup_home_3.png": "0c9cf801de7488c5f10511d724d12874",
"assets/assets/phone_mockup_home_4.png": "25b9ce636b8bd1b1050f423a5b8502d7",
"assets/assets/phone_shadow.png": "5baec0b7383ca82ee3aa9f4127ea9e6f",
"assets/assets/phone_shadow_2.png": "342ed2fa6296a7328268557506d6e9ee",
"assets/assets/playlist_mockup.png": "e33dc4e8a1713d844ce138c6aa39bb5f",
"assets/assets/startlogo.png": "7561a537dc0594aeedd5dcda03ae6559",
"assets/assets/start_1.jpg": "cbec68c4d225eb162c8331d3776bdd5f",
"assets/assets/start_2.jpg": "0e1336ec45f3c2d356207e799b0f2c78",
"assets/assets/start_3.jpg": "300498692d8955a9e27399b96fd0e388",
"assets/assets/start_fellowship.png": "ba5b833b9c569b3f1b6b8571894b8464",
"assets/assets/stgallen.png": "d8484004159699ff435b3101ab93eeec",
"assets/assets/stgallen_full.png": "d6b3c391d594092c33ae5ed75b8fec56",
"assets/assets/sypron.png": "f2b3a16794a468807152e83d36ef35aa",
"assets/assets/tiktoklogowhite.png": "269848e8df73ee1c106034429246d0a6",
"assets/assets/whyblaze_mockup_1.png": "3f32088bfd7eaf48def403b22602aae2",
"assets/assets/whyblaze_mockup_2.png": "72cab0a440179dcad871c5da1b058190",
"assets/assets/why_blaze_1.svg": "be965bbe49d33767fafed13f0ccb345c",
"assets/assets/why_blaze_2.svg": "8cdb78ae9d36ada2b03db58dae72afa3",
"assets/assets/why_blaze_icon_1.png": "29da869ae9f6f4bf3502f774882de116",
"assets/assets/why_blaze_icon_2.png": "919ff2849a34525294bfd47e3fea5548",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "15e2b2656871e3b0610713a42b761b50",
"assets/NOTICES": "4577c7508e965515c3bd9b91ba3b02bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "2a6cbf3d6d216b1f026a4b9b81fdf557",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9f6d7c7189e511268cf4e0804a98d076",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7878a621c134240337b9772c8d43b710",
"/": "7878a621c134240337b9772c8d43b710",
"main.dart.js": "976e57fbd38b116474e083218551bb88",
"manifest.json": "389f441094adfe82b363069736f8d3cb",
"version.json": "0faadf16b8574b0c6cda96fb0a265593"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
