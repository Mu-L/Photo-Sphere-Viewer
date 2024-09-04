---
layout: home

hero:
  name: Photo Sphere Viewer
  text: A JavaScript library to display 360° panoramas
  actions:
    - theme: brand
      text: Get Started →
      link: /guide/
    - theme: alt
      text: Demos
      link: /demos/
    - theme: alt
      text: API
      link: /api/
      target: _blank

features:
  - title: Spheres and cubemaps
    details: Photo Sphere Viewer can display standard equirectangular panoramas and also cubemaps.
  - title: Fully configurable
    details: Many options, methods and events allow a deep integration in your website/app.
  - title: Plugins
    details: Use plugins add new features without bloating the core library.
  - title: Touchscreen, gyroscope and more
    details: Friendly user interactions for all kind of devices.
  - title: Markers system
    details: Display texts, images and videos on top of your panorama.
  - title: Videos
    details: Photo Sphere Viewer also supports 360° videos, both equirectangular and cubemaps.
---

::: tip Thanks to Jéremy Heleine
I forked the original Photo Sphere Viewer [by Jérémy Heleine](http://jeremyheleine.me) to provide a better code architecture and a bunch of new features.
:::

## Sponsors

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const sponsors = [
  // monthly
  {
    avatar: 'https://avatars.githubusercontent.com/u/1396951?s=200',
    name: 'Sentry',
    links: [ { icon: 'github', link: 'https://github.com/getsentry' } ],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/3709747?s=200',
    name: 'Kevin M. Vuilleumier',
    links: [ { icon: 'github', link: 'https://github.com/vekin03' } ],
  },
  // one time
  {
    avatar: 'https://avatars.githubusercontent.com/u/24359?s=200',
    name: 'Jeffrey Warren',
    links: [ { icon: 'github', link: 'https://github.com/jywarren' } ],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/2023869?s=200',
    name: 'Rai-Rai',
    links: [ { icon: 'github', link: 'https://github.com/Rai-Rai' } ],
  },
]
</script>

<VPTeamMembers size="small" :members="sponsors" />

<div class="sponsors">

[![Deploys by Netlify](https://www.netlify.com/v3/img/components/netlify-color-accent.svg)](https://www.netlify.com)
[![js.org](/images/js.org.svg)](https://js.org)

</div>