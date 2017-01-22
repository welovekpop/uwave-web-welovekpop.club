# 1.0.0-beta.4 / 22 Jan 2017

Features:

  * Add a Delete button to individual chat messages for moderators (#489)
  * Add Material-UI touch ripple when switching tabs (#508)

Bugfixes:

  * Use cross-env for npm build script environment variables on Windows (#511)
  * Remove Forgot Password link pending the related PR #264 (#531)

Internal:

  * Add react-inline-elements transform in production build. (#503)
  * Split up playlist manager into several separate Redux containers (#504)
  * Clean up some dead code (#516, #523)
  * Update Babel preset to use `babel-preset-latest` (#520)
  * Split up chat messages list and input into separate Redux containers (#521)

# 1.0.0-beta.3 / 26 Nov 2016

Bugfixes:

  * Auto-position emoji tooltips to prevent overflow in chat messages (#495)
  * Fix emoji in development watch mode (#496)
  * Fix username dialog sizing (#498)

# 1.0.0-beta.2 / 22 Nov 2016

Features:

  * Add a configurable About page overlay. Use
    `uw.setAboutPageComponent(class extends React.Component)` to change the
    contents of the overlay.
  * Add a video toolbar that shows when hovering the video area. The toolbar
    contains buttons to toggle Small Video mode and a new Fullscreen mode. Media
    sources can export a source-specific `VideoTools` component that will be
    rendered into the toolbar when media from that source is playing.
  * Publish ES-modules formatted code in es/ folder. Publish translations as JS
    files so a yaml plugin is not required for custom builds.

Improvements:

  * Speed up rendering new chat messages by about 5× or more, depending on the
    size of the chat history.
  * Disable vote buttons when nobody is DJ-ing.
  * Compress images.

Bugfixes:

  * ReconnectingWebSocket no longer crashes when imported from Node.js.
  * The user list and wait list now properly fill the entire side panel.

Internal:

  * Move build system to Webpack. CSS can now be hot-reloaded, and JS reloading
    is a lot more robust.
  * Upgrade dependencies.
  * Inline ReconnectingWebSocket dependency.
  * Remove postcss-bem plugin, instead only using cssnext for CSS features.
    The postcss-bem project is abandoned.

# 1.0.0-beta.1 / 02 Nov 2016

Start tracking changes.
