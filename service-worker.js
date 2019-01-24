/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "efb2fb7cb61f1d9679c7b1e04e2beaf0"
  },
  {
    "url": "assets/css/0.styles.f356e462.css",
    "revision": "5c1f997f030fdc21ecb4427ad02da890"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.81eba627.js",
    "revision": "d38f41dc38d4022b305055abb57fbe7d"
  },
  {
    "url": "assets/js/11.12768ede.js",
    "revision": "18ad86ac504271be07fa1712bc7e6c33"
  },
  {
    "url": "assets/js/12.841a8c38.js",
    "revision": "b45dcdeef1d5ceaa95ed9a6a025a185b"
  },
  {
    "url": "assets/js/13.6c1024ba.js",
    "revision": "b13f7153428b42074b26f71d7feee67b"
  },
  {
    "url": "assets/js/14.e48a0edd.js",
    "revision": "95fcb4616e17c7d38303922d1017707d"
  },
  {
    "url": "assets/js/15.952ea9f6.js",
    "revision": "8d6290bca927232c34f8e99d0178f1be"
  },
  {
    "url": "assets/js/16.7905d6b1.js",
    "revision": "13b83346fa179d62048e21fe512fd6be"
  },
  {
    "url": "assets/js/17.f3925856.js",
    "revision": "e576581afb9877b3dc1b3d11ec607475"
  },
  {
    "url": "assets/js/18.3cfd4de2.js",
    "revision": "303f9d881e8ef3a2dde0193090357d60"
  },
  {
    "url": "assets/js/19.f09ca272.js",
    "revision": "e9f3ecccf07cc92ec7ee971d2c66239a"
  },
  {
    "url": "assets/js/20.6b9e95f9.js",
    "revision": "2cb6b51ee63fa4eb2f5348c2ec9f74b7"
  },
  {
    "url": "assets/js/21.aac26d68.js",
    "revision": "7a53add4ad3c17a6e56b819da7e0e10a"
  },
  {
    "url": "assets/js/22.4636ed6c.js",
    "revision": "b5af324c70076cf24eaf759871419b20"
  },
  {
    "url": "assets/js/23.a69a319e.js",
    "revision": "44233ef8fadfacb5b3f8a2be584546a3"
  },
  {
    "url": "assets/js/24.a57a8fb0.js",
    "revision": "573680347fc41d5f2d24c8d41f5fa730"
  },
  {
    "url": "assets/js/3.494d6d83.js",
    "revision": "f7bd63cc68bc8c6ee22b4a8ef0b7fded"
  },
  {
    "url": "assets/js/4.ddbefe07.js",
    "revision": "faf6a9165f4706f99931a80c04f2545e"
  },
  {
    "url": "assets/js/5.a46f313e.js",
    "revision": "b61394a964d3d625a0b0b417bb01089f"
  },
  {
    "url": "assets/js/6.1443ab3d.js",
    "revision": "de5fda8bce089786acf813d238339945"
  },
  {
    "url": "assets/js/7.8d0a0608.js",
    "revision": "d95e025db00e45b8d78d4b4ab78090d7"
  },
  {
    "url": "assets/js/8.2c85903c.js",
    "revision": "9ba830a4d2e58aba7bbf49693cda6c99"
  },
  {
    "url": "assets/js/9.c17db29d.js",
    "revision": "b9c0179997062cfb283f70d912e0cc68"
  },
  {
    "url": "assets/js/app.bb38f066.js",
    "revision": "b59489ca0152e62b93ee814bdc81c1f6"
  },
  {
    "url": "assets/js/vendors~docsearch.fb7d639f.js",
    "revision": "121b3a196de4c4a41361b1cc3de9cd15"
  },
  {
    "url": "google80e84fabb895736c.html",
    "revision": "563e229d19ded39e6065aa2059e87364"
  },
  {
    "url": "hero.png",
    "revision": "dd2078e66324b5927fe4525d06af1287"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5f6b5c3647efb003f844b362140e6d50"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "f17729bc05612a117136a4825e6df2a8"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "73481864ed4f84a6e048a0151ab3259e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0240aae057b307db2563cc9ca82ef33"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "001a3e0f7ce1039c66ee4b467345c681"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "a3fbd53052c98628c98f0c984bade80b"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "88bae38ca7ddda2d0f167057fff6bc39"
  },
  {
    "url": "index.html",
    "revision": "fa736b36e19fdee3b008a1d76dd9b79e"
  },
  {
    "url": "logo.png",
    "revision": "9211627441c4938eb8650b4bdf14630d"
  },
  {
    "url": "resources/blog.html",
    "revision": "8bc798f216381cf52426f09f4a130ef4"
  },
  {
    "url": "resources/books.html",
    "revision": "73a2643605dbdab721940c03f51e0e91"
  },
  {
    "url": "resources/community.html",
    "revision": "f0e22dd91f883eb9df2f6e2b452eeea6"
  },
  {
    "url": "resources/conferences.html",
    "revision": "28ee942ade39002397459a3924e9d109"
  },
  {
    "url": "resources/docker.html",
    "revision": "7a1a61b5d725d6b5e7e0791d9e4c2ddb"
  },
  {
    "url": "resources/examples.html",
    "revision": "0008ab506f88bed65d220cc1d286c6ac"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "9912b3b8a5f9cb0d12ee2bc4094ce763"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "9005a3926e96d2457cab6121e6d618c0"
  },
  {
    "url": "resources/mention-of-nuxtjs.html",
    "revision": "724fc30213ac5767fef976c95f0d3460"
  },
  {
    "url": "resources/modules.html",
    "revision": "b730b4ffc516bb11dc646de320703a9d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "1f30955956fa05a566f0c8157c9f5298"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "54db7a3374ce7aae74a724a5afafdb4b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c410f7e79aae72173be9b964eb6fc369"
  },
  {
    "url": "resources/projects-using-nuxtjs.html",
    "revision": "5a1668c4463e01d7f250be91791be8d0"
  },
  {
    "url": "resources/showcase.html",
    "revision": "9d91cfe34367a5923e0ea02422645bc4"
  },
  {
    "url": "resources/starter-template.html",
    "revision": "9bf0001b4159b7cfeae1bf46359fdee0"
  },
  {
    "url": "resources/tools.html",
    "revision": "b02ba140e5a700adf0d78b51cd6e90ae"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "c194a1795caa78c921c9418ad76ede34"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "bbbb3b234513b9bf80c95cdb52aa16a6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})