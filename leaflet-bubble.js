





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d48d0c441ed0ab66aa7d582c5aaf762f4a1eef9a915871a36ddb07e71b01ffb2.css" integrity="sha256-1I0MRB7Qq2aqfVgsWq92L0oe75qRWHGjbdsH5xsB/7I=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-a6456108ae38d5ef012503fd17ca8d53dc8721f183c4cbff9418f8513ec0d238.css" integrity="sha256-pkVhCK441e8BJQP9F8qNU9yHIfGDxMv/lBj4UT7A0jg=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>Leaflet.bubble/leaflet-bubble.js at gh-pages · OpenGov/Leaflet.bubble</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/1444374?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="OpenGov/Leaflet.bubble" property="og:title" /><meta content="https://github.com/OpenGov/Leaflet.bubble" property="og:url" /><meta content="Leaflet.bubble - A simple Leaflet map library for bubble map visualization types" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTc2Nzk5MTMyOmI3N2Q2NTVlOTY4M2EyNThlYWNlMDZkYjgyOGNlNjdiZTQ1MDc3YWQ2ZmZhNTZmZTk3N2JlYjVhNzJhOTIxMDU=--aa622995ec349c095bf9552adec10d3c9f5c7f0d">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="CB9A:845E:1D0883D:2A8B6F1:5934EB90" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="CB9A:845E:1D0883D:2A8B6F1:5934EB90" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="7475706" name="octolytics-actor-id" /><meta content="benmatheson" name="octolytics-actor-login" /><meta content="2b9632e183c434219152716408e9dd5e8f071873cf6b898e44f0be9c77762875" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="benmatheson">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MzdkNzg0M2Q5NjM3YzdjMzM5MWU3MzAxYmVkMjYzYzBlYWRiY2Y2ZTEyOTIxZDAzOWI5ZDQ2ODM4YjA2MmZkZnx7InJlbW90ZV9hZGRyZXNzIjoiMjA2LjE3NC4yLjIzMSIsInJlcXVlc3RfaWQiOiJDQjlBOjg0NUU6MUQwODgzRDoyQThCNkYxOjU5MzRFQjkwIiwidGltZXN0YW1wIjoxNDk2NjQwNDEwLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="2c727c0f98a4a2f41fb78f7ebc67f756a25f2bec">

  <meta http-equiv="x-pjax-version" content="f2a391d84c9a9c3816af1e59762eebc9">
  

    
  <meta name="description" content="Leaflet.bubble - A simple Leaflet map library for bubble map visualization types">
  <meta name="go-import" content="github.com/OpenGov/Leaflet.bubble git https://github.com/OpenGov/Leaflet.bubble.git">

  <meta content="1444374" name="octolytics-dimension-user_id" /><meta content="OpenGov" name="octolytics-dimension-user_login" /><meta content="53761004" name="octolytics-dimension-repository_id" /><meta content="OpenGov/Leaflet.bubble" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="16408878" name="octolytics-dimension-repository_parent_id" /><meta content="Leaflet/Leaflet.heat" name="octolytics-dimension-repository_parent_nwo" /><meta content="16408878" name="octolytics-dimension-repository_network_root_id" /><meta content="Leaflet/Leaflet.heat" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />
  <link href="https://github.com/OpenGov/Leaflet.bubble/commits/gh-pages.atom" rel="alternate" title="Recent Commits to Leaflet.bubble:gh-pages" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/OpenGov/Leaflet.bubble/blob/gh-pages/dist/leaflet-bubble.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production emoji-size-boost page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/OpenGov/Leaflet.bubble/search" class="js-site-search-form" data-scoped-search-url="/OpenGov/Leaflet.bubble/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/OpenGov/Leaflet.bubble/blob/gh-pages/dist/leaflet-bubble.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
            <li class="header-nav-item">
              <a href="/marketplace" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                Marketplace
</a>            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator " data-channel="notification-changed:7475706" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell float-left" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>




      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/benmatheson"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@benmatheson" class="avatar" src="https://avatars2.githubusercontent.com/u/7475706?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">benmatheson</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/benmatheson" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/benmatheson?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="JKEB9dLq+h9EBWqmnpJw7WOXpjb6XYvU7s9fiC5/CgWhvDoVmSRuXIkX1Sum3hQJeZ//BJjp40G70+qTGMyr0w==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="cmUkefq4ObrlEjB+8D+WxCYxIccUMlE4YFLbZXe/UL73eB+ZsXat+SgAj/PIc/IgPDl49XaGOa01Tm5+QQzxaA==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      

  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        




    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PIrULH6VUqp4RGpk53L24ybG9uFqGhBNaM/uH/vstqlx4Ra/thL23La98tuwFIwbptp9rECG0sA16Ku44LpJPg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="53761004" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/OpenGov/Leaflet.bubble/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/OpenGov/Leaflet.bubble/watchers"
              aria-label="1 user is watching this repository">
              1
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/OpenGov/Leaflet.bubble/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LiQVPujxsI93lN2jkM6uTx4OuBrE/yeH2nXQ3YtY9zVl/SGq6btO4lPvwnu1NEByHUMfUFj1WaAC/QqXMNdouw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar OpenGov/Leaflet.bubble"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/OpenGov/Leaflet.bubble/stargazers"
           aria-label="1 user starred this repository">
          1
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/OpenGov/Leaflet.bubble/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="D7LR7pnuJBAolPet11iolQNeV5pZIO2AkhoR9GE54tnTydxXAqlZrYuN66U6AYjl1yC7sGZcpD+d6Fb0cpjKBA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star OpenGov/Leaflet.bubble"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/OpenGov/Leaflet.bubble/stargazers"
           aria-label="1 user starred this repository">
          1
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/OpenGov/Leaflet.bubble/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+Uwj6by6rfPUiEQtHSH77cavHOAd5/DsuK+dHVn5y4WuTqWDP6tdJhRT0sm8s5IqJrj8XMIzpNJfLxq8yQS5cw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of OpenGov/Leaflet.bubble to your account"
                aria-label="Fork your own copy of OpenGov/Leaflet.bubble to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/OpenGov/Leaflet.bubble/network" class="social-count"
       aria-label="187 users forked this repository">
      187
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
  <span class="author" itemprop="author"><a href="/OpenGov" class="url fn" rel="author">OpenGov</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/OpenGov/Leaflet.bubble" data-pjax="#js-repo-pjax-container">Leaflet.bubble</a></strong>

    <span class="fork-flag">
      <span class="text">forked from <a href="/Leaflet/Leaflet.heat">Leaflet/Leaflet.heat</a></span>
    </span>
</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/OpenGov/Leaflet.bubble" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /OpenGov/Leaflet.bubble" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/OpenGov/Leaflet.bubble/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /OpenGov/Leaflet.bubble/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/OpenGov/Leaflet.bubble/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /OpenGov/Leaflet.bubble/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/OpenGov/Leaflet.bubble/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /OpenGov/Leaflet.bubble/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/OpenGov/Leaflet.bubble/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/OpenGov/Leaflet.bubble/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/OpenGov/Leaflet.bubble/blob/93e0da017e7b48410f2123e62ee70be2e038d87c/dist/leaflet-bubble.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:b4689fec0c0017dbbe26c6c295e3579c -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">gh-pages</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/OpenGov/Leaflet.bubble/blob/gh-pages/dist/leaflet-bubble.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/OpenGov/Leaflet.bubble/tree/v0.2.0/dist/leaflet-bubble.js"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/OpenGov/Leaflet.bubble/find/gh-pages"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/OpenGov/Leaflet.bubble"><span>Leaflet.bubble</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/OpenGov/Leaflet.bubble/tree/gh-pages/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">leaflet-bubble.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/OpenGov/Leaflet.bubble/commit/30bde234fd23b274ecbfbd27e5bc66a021652f6b" data-pjax>
          30bde23
        </a>
        <relative-time datetime="2016-03-16T17:37:35Z">Mar 16, 2016</relative-time>
      </span>
      <div>
        <img alt="@stevepepple" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/466699?v=3&amp;s=40" width="20" />
        <a href="/stevepepple" class="user-mention" rel="contributor">stevepepple</a>
          <a href="/OpenGov/Leaflet.bubble/commit/30bde234fd23b274ecbfbd27e5bc66a021652f6b" class="message" data-pjax="true" title="Include opacity in legend and repackage.">Include opacity in legend and repackage.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@stevepepple" height="24" src="https://avatars1.githubusercontent.com/u/466699?v=3&amp;s=48" width="24" />
            <a href="/stevepepple">stevepepple</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/OpenGov/Leaflet.bubble/raw/gh-pages/dist/leaflet-bubble.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/OpenGov/Leaflet.bubble/blame/gh-pages/dist/leaflet-bubble.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/OpenGov/Leaflet.bubble/commits/gh-pages/dist/leaflet-bubble.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/OpenGov/Leaflet.bubble/edit/gh-pages/dist/leaflet-bubble.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vUP3zaXaJMmeDQpLllOfVqVzlR+24VfQdjcvYt+hJEyXM2a4LuIpqOxCVSW+7lliz6FRphiXPfnfHxUuJg6p/Q==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/OpenGov/Leaflet.bubble/delete/gh-pages/dist/leaflet-bubble.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="uxPnPr0qrPrKNtWxbZbKJIVyFPb1EYJw5NUMtIhd1erGRP+8DfzQFFmhNhhAICeKMeJb2cRCQHptoZ78G2ZYNw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      3 lines (3 sloc)
      <span class="file-info-divider"></span>
    65.7 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">&quot;use strict&quot;;!function(e,n){&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module?n(exports,require(&quot;d3-color&quot;)):&quot;function&quot;==typeof define&amp;&amp;define.amd?define([&quot;exports&quot;,&quot;d3-color&quot;],n):n(e.d3_interpolate=e.d3_interpolate||{},e.d3_color)}(this,function(e,n){function t(e){return function(){return e}}function r(e,n){return function(t){return e+t*n}}function a(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function f(e,n){var a=n-e;return a?r(e,a&gt;180||-180&gt;a?a-360*Math.round(a/360):a):t(isNaN(e)?n:e)}function c(e){return 1===(e=+e)?u:function(n,r){return r-n?a(n,r,e):t(isNaN(n)?r:n)}}function u(e,n){var a=n-e;return a?r(e,a):t(isNaN(e)?n:e)}function o(e,n){var t,r=[],a=[],f=e?e.length:0,c=n?n.length:0,u=Math.min(f,c);for(t=0;u&gt;t;++t)r.push(h(e[t],n[t]));for(;f&gt;t;++t)a[t]=e[t];for(;c&gt;t;++t)a[t]=n[t];return function(e){for(t=0;u&gt;t;++t)a[t]=r[t](e);return a}}function i(e,n){return e=+e,n-=e,function(t){return e+n*t}}function l(e,n){var t,r={},a={};null!==e&amp;&amp;&quot;object&quot;==typeof e||(e={}),null!==n&amp;&amp;&quot;object&quot;==typeof n||(n={});for(t in e)t in n?r[t]=h(e[t],n[t]):a[t]=e[t];for(t in n)t in e||(a[t]=n[t]);return function(e){for(t in r)a[t]=r[t](e);return a}}function d(e){return function(){return e}}function s(e){return function(n){return e(n)+&quot;&quot;}}function b(e,n){var t,r,a,f=R.lastIndex=S.lastIndex=0,c=-1,u=[],o=[];for(e+=&quot;&quot;,n+=&quot;&quot;;(t=R.exec(e))&amp;&amp;(r=S.exec(n));)(a=r.index)&gt;f&amp;&amp;(a=n.slice(f,a),u[c]?u[c]+=a:u[++c]=a),(t=t[0])===(r=r[0])?u[c]?u[c]+=r:u[++c]=r:(u[++c]=null,o.push({i:c,x:i(t,r)})),f=S.lastIndex;return f&lt;n.length&amp;&amp;(a=n.slice(f),u[c]?u[c]+=a:u[++c]=a),u.length&lt;2?o[0]?s(o[0].x):d(n):(n=o.length,function(e){for(var t,r=0;n&gt;r;++r)u[(t=o[r]).i]=t.x(e);return u.join(&quot;&quot;)})}function h(e,r){var a,f=typeof r;return null==r||&quot;boolean&quot;===f?t(r):(&quot;number&quot;===f?i:&quot;string&quot;===f?(a=n.color(r))?(r=a,E):b:r instanceof n.color?E:Array.isArray(r)?o:l)(e,r)}function p(e,n){return e=+e,n-=e,function(t){return Math.round(e+n*t)}}function g(e,n,t,r,a,f){if(e*r===n*t)return null;var c=Math.sqrt(e*e+n*n);e/=c,n/=c;var u=e*t+n*r;t-=e*u,r-=n*u;var o=Math.sqrt(t*t+r*r);return t/=o,r/=o,u/=o,n*t&gt;e*r&amp;&amp;(e=-e,n=-n,u=-u,c=-c),{translateX:a,translateY:f,rotate:Math.atan2(n,e)*C,skewX:Math.atan(u)*C,scaleX:c,scaleY:o}}function m(e){if(&quot;none&quot;===e)return Y;P||(P=document.createElement(&quot;DIV&quot;),j=document.documentElement,B=document.defaultView),P.style.transform=e,e=B.getComputedStyle(j.appendChild(P),null).getPropertyValue(&quot;transform&quot;),j.removeChild(P);var n=e.slice(7,-1).split(&quot;,&quot;);return g(+n[0],+n[1],+n[2],+n[3],+n[4],+n[5])}function v(e){q||(q=document.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;g&quot;)),q.setAttribute(&quot;transform&quot;,null==e?&quot;&quot;:e);var n=q.transform.baseVal.consolidate().matrix;return g(n.a,n.b,n.c,n.d,n.e,n.f)}function y(e,n,t,r){function a(e){return e.length?e.pop()+&quot; &quot;:&quot;&quot;}function f(e,r,a,f,c,u){if(e!==a||r!==f){var o=c.push(&quot;translate(&quot;,null,n,null,t);u.push({i:o-4,x:i(e,a)},{i:o-2,x:i(r,f)})}else(a||f)&amp;&amp;c.push(&quot;translate(&quot;+a+n+f+t)}function c(e,n,t,f){e!==n?(e-n&gt;180?n+=360:n-e&gt;180&amp;&amp;(e+=360),f.push({i:t.push(a(t)+&quot;rotate(&quot;,null,r)-2,x:i(e,n)})):n&amp;&amp;t.push(a(t)+&quot;rotate(&quot;+n+r)}function u(e,n,t,f){e!==n?f.push({i:t.push(a(t)+&quot;skewX(&quot;,null,r)-2,x:i(e,n)}):n&amp;&amp;t.push(a(t)+&quot;skewX(&quot;+n+r)}function o(e,n,t,r,f,c){if(e!==t||n!==r){var u=f.push(a(f)+&quot;scale(&quot;,null,&quot;,&quot;,null,&quot;)&quot;);c.push({i:u-4,x:i(e,t)},{i:u-2,x:i(n,r)})}else 1===t&amp;&amp;1===r||f.push(a(f)+&quot;scale(&quot;+t+&quot;,&quot;+r+&quot;)&quot;)}return function(n,t){var r=[],a=[];return n=e(n),t=e(t),f(n.translateX,n.translateY,t.translateX,t.translateY,r,a),c(n.rotate,t.rotate,r,a),u(n.skewX,t.skewX,r,a),o(n.scaleX,n.scaleY,t.scaleX,t.scaleY,r,a),n=t=null,function(e){for(var n,t=-1,f=a.length;++t&lt;f;)r[(n=a[t]).i]=n.x(e);return r.join(&quot;&quot;)}}}function w(e){return((e=Math.exp(e))+1/e)/2}function x(e){return((e=Math.exp(e))-1/e)/2}function M(e){return((e=Math.exp(2*e))-1)/(e+1)}function _(e,n){var t,r,a=e[0],f=e[1],c=e[2],u=n[0],o=n[1],i=n[2],l=u-a,d=o-f,s=l*l+d*d;if(G&gt;s)r=Math.log(i/c)/T,t=function(e){return[a+e*l,f+e*d,c*Math.exp(T*e*r)]};else{var b=Math.sqrt(s),h=(i*i-c*c+F*s)/(2*c*z*b),p=(i*i-c*c-F*s)/(2*i*z*b),g=Math.log(Math.sqrt(h*h+1)-h),m=Math.log(Math.sqrt(p*p+1)-p);r=(m-g)/T,t=function(e){var n=e*r,t=w(g),u=c/(z*b)*(t*M(T*n+g)-x(g));return[a+u*l,f+u*d,c*t/w(T*n+g)]}}return t.duration=1e3*r,t}function k(e,t){var r=f((e=n.hsl(e)).h,(t=n.hsl(t)).h),a=u(e.s,t.s),c=u(e.l,t.l),o=u(e.opacity,t.opacity);return function(n){return e.h=r(n),e.s=a(n),e.l=c(n),e.opacity=o(n),e+&quot;&quot;}}function O(e,t){var r=u((e=n.hsl(e)).h,(t=n.hsl(t)).h),a=u(e.s,t.s),f=u(e.l,t.l),c=u(e.opacity,t.opacity);return function(n){return e.h=r(n),e.s=a(n),e.l=f(n),e.opacity=c(n),e+&quot;&quot;}}function N(e,t){var r=u((e=n.lab(e)).l,(t=n.lab(t)).l),a=u(e.a,t.a),f=u(e.b,t.b),c=u(e.opacity,t.opacity);return function(n){return e.l=r(n),e.a=a(n),e.b=f(n),e.opacity=c(n),e+&quot;&quot;}}function L(e,t){var r=f((e=n.hcl(e)).h,(t=n.hcl(t)).h),a=u(e.c,t.c),c=u(e.l,t.l),o=u(e.opacity,t.opacity);return function(n){return e.h=r(n),e.c=a(n),e.l=c(n),e.opacity=o(n),e+&quot;&quot;}}function A(e,t){var r=u((e=n.hcl(e)).h,(t=n.hcl(t)).h),a=u(e.c,t.c),f=u(e.l,t.l),c=u(e.opacity,t.opacity);return function(n){return e.h=r(n),e.c=a(n),e.l=f(n),e.opacity=c(n),e+&quot;&quot;}}var P,j,B,q,E=function V(e){function t(e,t){var a=r((e=n.rgb(e)).r,(t=n.rgb(t)).r),f=r(e.g,t.g),c=r(e.b,t.b),u=r(e.opacity,t.opacity);return function(n){return e.r=a(n),e.g=f(n),e.b=c(n),e.opacity=u(n),e+&quot;&quot;}}var r=c(e);return t.gamma=V,t}(1),R=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,S=new RegExp(R.source,&quot;g&quot;),C=180/Math.PI,Y={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},I=y(m,&quot;px, &quot;,&quot;px)&quot;,&quot;deg)&quot;),X=y(v,&quot;, &quot;,&quot;)&quot;,&quot;)&quot;),T=Math.SQRT2,z=2,F=4,G=1e-12,$=function Z(e){function t(t,r){var a=f((t=n.cubehelix(t)).h,(r=n.cubehelix(r)).h),c=u(t.s,r.s),o=u(t.l,r.l),i=u(t.opacity,r.opacity);return function(n){return t.h=a(n),t.s=c(n),t.l=o(Math.pow(n,e)),t.opacity=i(n),t+&quot;&quot;}}return e=+e,t.gamma=Z,t}(1),D=function H(e){function t(t,r){var a=u((t=n.cubehelix(t)).h,(r=n.cubehelix(r)).h),f=u(t.s,r.s),c=u(t.l,r.l),o=u(t.opacity,r.opacity);return function(n){return t.h=a(n),t.s=f(n),t.l=c(Math.pow(n,e)),t.opacity=o(n),t+&quot;&quot;}}return e=+e,t.gamma=H,t}(1),U=&quot;0.7.0&quot;;e.version=U,e.interpolate=h,e.interpolateArray=o,e.interpolateNumber=i,e.interpolateObject=l,e.interpolateRound=p,e.interpolateString=b,e.interpolateTransformCss=I,e.interpolateTransformSvg=X,e.interpolateZoom=_,e.interpolateRgb=E,e.interpolateHsl=k,e.interpolateHslLong=O,e.interpolateLab=N,e.interpolateHcl=L,e.interpolateHclLong=A,e.interpolateCubehelix=$,e.interpolateCubehelixLong=D}),!function(e,n){&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module?n(exports,require(&quot;d3-array&quot;),require(&quot;d3-collection&quot;),require(&quot;d3-interpolate&quot;),require(&quot;d3-format&quot;),require(&quot;d3-time&quot;),require(&quot;d3-time-format&quot;),require(&quot;d3-color&quot;)):&quot;function&quot;==typeof define&amp;&amp;define.amd?define([&quot;exports&quot;,&quot;d3-array&quot;,&quot;d3-collection&quot;,&quot;d3-interpolate&quot;,&quot;d3-format&quot;,&quot;d3-time&quot;,&quot;d3-time-format&quot;,&quot;d3-color&quot;],n):n(e.d3_scale=e.d3_scale||{},e.d3_array,e.d3_collection,e.d3_interpolate,e.d3_format,e.d3_time,e.d3_time_format,e.d3_color)}(this,function(e,n,t,r,a,f,c,u){function o(){function e(e){var t=e+&quot;&quot;,c=n.get(t);if(!c){if(f!==ue)return f;n.set(t,c=r.push(e))}return a[(c-1)%a.length]}var n=t.map(),r=[],a=[],f=ue;return e.domain=function(a){if(!arguments.length)return r.slice();r=[],n=t.map();for(var f,c,u=-1,o=a.length;++u&lt;o;)n.has(c=(f=a[u])+&quot;&quot;)||n.set(c,r.push(f));return e},e.range=function(n){return arguments.length?(a=ce.call(n),e):a.slice()},e.unknown=function(n){return arguments.length?(f=n,e):f},e.copy=function(){return o().domain(r).range(a).unknown(f)},e}function i(){function e(){var e=f().length,a=u[1]&lt;u[0],o=u[a-0],i=u[1-a];t=(i-o)/Math.max(1,e-d+2*s),l&amp;&amp;(t=Math.floor(t)),o+=(i-o-t*(e-d))*b,r=t*(1-d),l&amp;&amp;(o=Math.round(o),r=Math.round(r));var h=n.range(e).map(function(e){return o+t*e});return c(a?h.reverse():h)}var t,r,a=o().unknown(void 0),f=a.domain,c=a.range,u=[0,1],l=!1,d=0,s=0,b=.5;return delete a.unknown,a.domain=function(n){return arguments.length?(f(n),e()):f()},a.range=function(n){return arguments.length?(u=[+n[0],+n[1]],e()):u.slice()},a.rangeRound=function(n){return u=[+n[0],+n[1]],l=!0,e()},a.bandwidth=function(){return r},a.step=function(){return t},a.round=function(n){return arguments.length?(l=!!n,e()):l},a.padding=function(n){return arguments.length?(d=s=Math.max(0,Math.min(1,n)),e()):d},a.paddingInner=function(n){return arguments.length?(d=Math.max(0,Math.min(1,n)),e()):d},a.paddingOuter=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),e()):s},a.align=function(n){return arguments.length?(b=Math.max(0,Math.min(1,n)),e()):b},a.copy=function(){return i().domain(f()).range(u).round(l).paddingInner(d).paddingOuter(s).align(b)},e()}function l(e){var n=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return l(n())},e}function d(){return l(i().paddingInner(1))}function s(e){return function(){return e}}function b(e){return+e}function h(e,n){return(n-=e=+e)?function(t){return(t-e)/n}:s(n)}function p(e){return function(n,t){var r=e(n=+n,t=+t);return function(e){return n&gt;=e?0:e&gt;=t?1:r(e)}}}function g(e){return function(n,t){var r=e(n=+n,t=+t);return function(e){return 0&gt;=e?n:e&gt;=1?t:r(e)}}}function m(e,n,t,r){var a=e[0],f=e[1],c=n[0],u=n[1];return a&gt;f?(a=t(f,a),c=r(u,c)):(a=t(a,f),c=r(c,u)),function(e){return c(a(e))}}function v(e,t,r,a){var f=Math.min(e.length,t.length)-1,c=new Array(f),u=new Array(f),o=-1;for(e[f]&lt;e[0]&amp;&amp;(e=e.slice().reverse(),t=t.slice().reverse());++o&lt;f;)c[o]=r(e[o],e[o+1]),u[o]=a(t[o],t[o+1]);return function(t){var r=n.bisect(e,t,1,f)-1;return u[r](c[r](t))}}function y(e,n){return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp())}function w(e,n){function t(){var t=Math.min(u.length,o.length)&gt;2?v:m;return f=t(u,o,l?p(e):e,i),c=t(o,u,h,l?g(n):n),a}function a(e){return f(+e)}var f,c,u=oe,o=oe,i=r.interpolate,l=!1;return a.invert=function(e){return c(+e)},a.domain=function(e){return arguments.length?(u=fe.call(e,b),t()):u.slice()},a.range=function(e){return arguments.length?(o=ce.call(e),t()):o.slice()},a.rangeRound=function(e){return o=ce.call(e),i=r.interpolateRound,t()},a.clamp=function(e){return arguments.length?(l=!!e,t()):l},a.interpolate=function(e){return arguments.length?(i=e,t()):i},t()}function x(e,t,r){var f,c=e[0],u=e[e.length-1],o=n.tickStep(c,u,null==t?10:t);switch(r=a.formatSpecifier(null==r?&quot;,f&quot;:r),r.type){case&quot;s&quot;:var i=Math.max(Math.abs(c),Math.abs(u));return null!=r.precision||isNaN(f=a.precisionPrefix(o,i))||(r.precision=f),a.formatPrefix(r,i);case&quot;&quot;:case&quot;e&quot;:case&quot;g&quot;:case&quot;p&quot;:case&quot;r&quot;:null!=r.precision||isNaN(f=a.precisionRound(o,Math.max(Math.abs(c),Math.abs(u))))||(r.precision=f-(&quot;e&quot;===r.type));break;case&quot;f&quot;:case&quot;%&quot;:null!=r.precision||isNaN(f=a.precisionFixed(o))||(r.precision=f-2*(&quot;%&quot;===r.type))}return a.format(r)}function M(e){var t=e.domain;return e.ticks=function(e){var r=t();return n.ticks(r[0],r[r.length-1],null==e?10:e)},e.tickFormat=function(e,n){return x(t(),e,n)},e.nice=function(r){var a=t(),f=a.length-1,c=null==r?10:r,u=a[0],o=a[f],i=n.tickStep(u,o,c);return i&amp;&amp;(i=n.tickStep(Math.floor(u/i)*i,Math.ceil(o/i)*i,c),a[0]=Math.floor(u/i)*i,a[f]=Math.ceil(o/i)*i,t(a)),e},e}function _(){var e=w(h,r.interpolateNumber);return e.copy=function(){return y(e,_())},M(e)}function k(){function e(e){return+e}var n=[0,1];return e.invert=e,e.domain=e.range=function(t){return arguments.length?(n=fe.call(t,b),e):n.slice()},e.copy=function(){return k().domain(n)},M(e)}function O(e,n){e=e.slice();var t,r=0,a=e.length-1,f=e[r],c=e[a];return f&gt;c&amp;&amp;(t=r,r=a,a=t,t=f,f=c,c=t),e[r]=n.floor(f),e[a]=n.ceil(c),e}function N(e,n){return(n=Math.log(n/e))?function(t){return Math.log(t/e)/n}:s(n)}function L(e,n){return 0&gt;e?function(t){return-Math.pow(-n,t)*Math.pow(-e,1-t)}:function(t){return Math.pow(n,t)*Math.pow(e,1-t)}}function A(e){return isFinite(e)?+(&quot;1e&quot;+e):0&gt;e?0:e}function P(e){return 10===e?A:e===Math.E?Math.exp:function(n){return Math.pow(e,n)}}function j(e){return e===Math.E?Math.log:10===e&amp;&amp;Math.log10||2===e&amp;&amp;Math.log2||(e=Math.log(e),function(n){return Math.log(n)/e})}function B(e){return function(n){return-e(-n)}}function q(){function e(){return c=j(f),u=P(f),r()[0]&lt;0&amp;&amp;(c=B(c),u=B(u)),t}var t=w(N,L).domain([1,10]),r=t.domain,f=10,c=j(10),u=P(10);return t.base=function(n){return arguments.length?(f=+n,e()):f},t.domain=function(n){return arguments.length?(r(n),e()):r()},t.ticks=function(e){var t,a=r(),o=a[0],i=a[a.length-1];(t=o&gt;i)&amp;&amp;(b=o,o=i,i=b);var l,d,s,b=c(o),h=c(i),p=null==e?10:+e,g=[];if(!(f%1)&amp;&amp;p&gt;h-b){if(b=Math.round(b)-1,h=Math.round(h)+1,o&gt;0){for(;h&gt;b;++b)for(d=1,l=u(b);f&gt;d;++d)if(s=l*d,!(o&gt;s)){if(s&gt;i)break;g.push(s)}}else for(;h&gt;b;++b)for(d=f-1,l=u(b);d&gt;=1;--d)if(s=l*d,!(o&gt;s)){if(s&gt;i)break;g.push(s)}t&amp;&amp;g.reverse()}else g=n.ticks(b,h,Math.min(h-b,p)).map(u);return g},t.tickFormat=function(e,n){if(null==n&amp;&amp;(n=10===f?&quot;.0e&quot;:&quot;,&quot;),&quot;function&quot;!=typeof n&amp;&amp;(n=a.format(n)),e===1/0)return n;null==e&amp;&amp;(e=10);var r=Math.max(1,f*e/t.ticks().length);return function(e){var t=e/u(Math.round(c(e)));return f-.5&gt;t*f&amp;&amp;(t*=f),r&gt;=t?n(e):&quot;&quot;}},t.nice=function(){return r(O(r(),{floor:function(e){return u(Math.floor(c(e)))},ceil:function(e){return u(Math.ceil(c(e)))}}))},t.copy=function(){return y(t,q().base(f))},t}function E(e,n){return 0&gt;e?-Math.pow(-e,n):Math.pow(e,n)}function R(){function e(e,n){return(n=E(n,t)-(e=E(e,t)))?function(r){return(E(r,t)-e)/n}:s(n)}function n(e,n){return n=E(n,t)-(e=E(e,t)),function(r){return E(e+n*r,1/t)}}var t=1,r=w(e,n),a=r.domain;return r.exponent=function(e){return arguments.length?(t=+e,a(a())):t},r.copy=function(){return y(r,R().exponent(t))},M(r)}function S(){return R().exponent(.5)}function C(){function e(){var e=0,c=Math.max(1,a.length);for(f=new Array(c-1);++e&lt;c;)f[e-1]=n.quantile(r,e/c);return t}function t(e){return isNaN(e=+e)?void 0:a[n.bisect(f,e)]}var r=[],a=[],f=[];return t.invertExtent=function(e){var n=a.indexOf(e);return 0&gt;n?[0/0,0/0]:[n&gt;0?f[n-1]:r[0],n&lt;f.length?f[n]:r[r.length-1]]},t.domain=function(t){if(!arguments.length)return r.slice();r=[];for(var a,f=0,c=t.length;c&gt;f;++f)a=t[f],null==a||isNaN(a=+a)||r.push(a);return r.sort(n.ascending),e()},t.range=function(n){return arguments.length?(a=ce.call(n),e()):a.slice()},t.quantiles=function(){return f.slice()},t.copy=function(){return C().domain(r).range(a)},t}function Y(){function e(e){return e&gt;=e?u[n.bisect(c,e,0,f)]:void 0}function t(){var n=-1;for(c=new Array(f);++n&lt;f;)c[n]=((n+1)*a-(n-f)*r)/(f+1);return e}var r=0,a=1,f=1,c=[.5],u=[0,1];return e.domain=function(e){return arguments.length?(r=+e[0],a=+e[1],t()):[r,a]},e.range=function(e){return arguments.length?(f=(u=ce.call(e)).length-1,t()):u.slice()},e.invertExtent=function(e){var n=u.indexOf(e);return 0&gt;n?[0/0,0/0]:1&gt;n?[r,c[0]]:n&gt;=f?[c[f-1],a]:[c[n-1],c[n]]},e.copy=function(){return Y().domain([r,a]).range(u)},M(e)}function I(){function e(e){return e&gt;=e?r[n.bisect(t,e,0,a)]:void 0}var t=[.5],r=[0,1],a=1;return e.domain=function(n){return arguments.length?(t=ce.call(n),a=Math.min(t.length,r.length-1),e):t.slice()},e.range=function(n){return arguments.length?(r=ce.call(n),a=Math.min(t.length,r.length-1),e):r.slice()},e.invertExtent=function(e){var n=r.indexOf(e);return[t[n-1],t[n]]},e.copy=function(){return I().domain(t).range(r)},e}function X(e){return new Date(e)}function T(e,t,a,f,c,u,o,i,l){function d(n){return(o(n)&lt;n?m:u(n)&lt;n?v:c(n)&lt;n?x:f(n)&lt;n?M:t(n)&lt;n?a(n)&lt;n?_:k:e(n)&lt;n?N:L)(n)}function s(t,r,a,f){if(null==t&amp;&amp;(t=10),&quot;number&quot;==typeof t){var c=Math.abs(a-r)/t,u=n.bisector(function(e){return e[2]}).right(A,c);u===A.length?(f=n.tickStep(r/pe,a/pe,t),t=e):u?(u=A[c/A[u-1][2]&lt;A[u][2]/c?u-1:u],f=u[1],t=u[0]):(f=n.tickStep(r,a,t),t=i)}return null==f?t:t.every(f)}var b=w(h,r.interpolateNumber),p=b.invert,g=b.domain,m=l(&quot;.%L&quot;),v=l(&quot;:%S&quot;),x=l(&quot;%I:%M&quot;),M=l(&quot;%I %p&quot;),_=l(&quot;%a %d&quot;),k=l(&quot;%b %d&quot;),N=l(&quot;%B&quot;),L=l(&quot;%Y&quot;),A=[[o,1,ie],[o,5,5*ie],[o,15,15*ie],[o,30,30*ie],[u,1,le],[u,5,5*le],[u,15,15*le],[u,30,30*le],[c,1,de],[c,3,3*de],[c,6,6*de],[c,12,12*de],[f,1,se],[f,2,2*se],[a,1,be],[t,1,he],[t,3,3*he],[e,1,pe]];return b.invert=function(e){return new Date(p(e))},b.domain=function(e){return arguments.length?g(e):g().map(X)},b.ticks=function(e,n){var t,r=g(),a=r[0],f=r[r.length-1],c=a&gt;f;return c&amp;&amp;(t=a,a=f,f=t),t=s(e,a,f,n),t=t?t.range(a,f+1):[],c?t.reverse():t},b.tickFormat=function(e){return null==e?d:l(e)},b.nice=function(e,n){var t=g();return(e=s(e,t[0],t[t.length-1],n))?g(O(t,e)):b},b.copy=function(){return y(b,T(e,t,a,f,c,u,o,i,l))},b}function z(){return T(f.timeYear,f.timeMonth,f.timeWeek,f.timeDay,f.timeHour,f.timeMinute,f.timeSecond,f.timeMillisecond,c.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])}function F(){return T(f.utcYear,f.utcMonth,f.utcWeek,f.utcDay,f.utcHour,f.utcMinute,f.utcSecond,f.utcMillisecond,c.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])}function G(e){return e.match(/.{6}/g).map(function(e){return&quot;#&quot;+e})}function $(){return o().range(ge)}function D(){return o().range(me)}function U(){return o().range(ve)}function V(){return o().range(ye)}function Z(){return _().interpolate(r.interpolateCubehelixLong).range([u.cubehelix(300,.5,0),u.cubehelix(-240,.5,1)])}function H(e){function n(n){var f=(n-t)/(r-t);return e(a?Math.max(0,Math.min(1,f)):f)}var t=0,r=1,a=!1;return n.domain=function(e){return arguments.length?(t=+e[0],r=+e[1],n):[t,r]},n.clamp=function(e){return arguments.length?(a=!!e,n):a},n.copy=function(){return H(e).domain([t,r]).clamp(a)},M(n)}function K(){return H(r.interpolateCubehelixLong(u.cubehelix(-100,.75,.35),u.cubehelix(80,1.5,.8)))}function Q(){return H(r.interpolateCubehelixLong(u.cubehelix(260,.75,.35),u.cubehelix(80,1.5,.8)))}function W(){var e=u.cubehelix();return H(function(n){(0&gt;n||n&gt;1)&amp;&amp;(n-=Math.floor(n));var t=Math.abs(n-.5);return e.h=360*n-100,e.s=1.5-1.5*t,e.l=.8-.9*t,e+&quot;&quot;})}function J(e){var n=H(function(n){return e[Math.round(n*e.length-n)]}).clamp(!0);return delete n.clamp,n}function ee(){return J(we)}function ne(){return J(xe)}function te(){return J(Me)}function re(){return J(_e)}var ae=Array.prototype,fe=ae.map,ce=ae.slice,ue={name:&quot;implicit&quot;},oe=[0,1],ie=1e3,le=60*ie,de=60*le,se=24*de,be=7*se,he=30*se,pe=365*se,ge=G(&quot;1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf&quot;),me=G(&quot;393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6&quot;),ve=G(&quot;3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9&quot;),ye=G(&quot;1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5&quot;),we=G(&quot;44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725&quot;),xe=G(&quot;00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf&quot;),Me=G(&quot;00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4&quot;),_e=G(&quot;0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921&quot;),ke=&quot;0.6.4&quot;;e.version=ke,e.scaleBand=i,e.scalePoint=d,e.scaleIdentity=k,e.scaleLinear=_,e.scaleLog=q,e.scaleOrdinal=o,e.scaleImplicit=ue,e.scalePow=R,e.scaleSqrt=S,e.scaleQuantile=C,e.scaleQuantize=Y,e.scaleThreshold=I,e.scaleTime=z,e.scaleUtc=F,e.scaleCategory10=$,e.scaleCategory20b=D,e.scaleCategory20c=U,e.scaleCategory20=V,e.scaleCubehelix=Z,e.scaleRainbow=W,e.scaleWarm=K,e.scaleCool=Q,e.scaleViridis=ee,e.scaleMagma=ne,e.scaleInferno=te,e.scalePlasma=re}),function(){var e,n,t,r,a,f,c,u,o,i,l,d,s,b,h,p,g,m,v,y,w,x,M,_,k,O,N,L,A,P,j,B,q,E,R,S,C,Y,I,X,T,z,F,G,$,D,U,V,Z,H,K,Q,W,J,ee,ne,te,re,ae,fe,ce,ue,oe,ie,le,de,se,be,he,pe,ge,me,ve,ye,we,xe,Me,_e,ke,Oe=[].slice;we=function(){var e,n,t,r,a;for(e={},a=&quot;Boolean Number String Function Array Date RegExp Undefined Null&quot;.split(&quot; &quot;),r=0,n=a.length;n&gt;r;r++)t=a[r],e[&quot;[object &quot;+t+&quot;]&quot;]=t.toLowerCase();return function(n){var t;return t=Object.prototype.toString.call(n),e[t]||&quot;object&quot;}}(),$=function(e,n,t){return null==n&amp;&amp;(n=0),null==t&amp;&amp;(t=1),n&gt;e&amp;&amp;(e=n),e&gt;t&amp;&amp;(e=t),e},xe=function(e){return e.length&gt;=3?[].slice.call(e):e[0]},y=function(e){var n;for(n in e)3&gt;n?(e[n]&lt;0&amp;&amp;(e[n]=0),e[n]&gt;255&amp;&amp;(e[n]=255)):3===n&amp;&amp;(e[n]&lt;0&amp;&amp;(e[n]=0),e[n]&gt;1&amp;&amp;(e[n]=1));return e},r=Math.PI,pe=Math.round,M=Math.cos,L=Math.floor,J=Math.pow,D=Math.log,me=Math.sin,ve=Math.sqrt,s=Math.atan2,Z=Math.max,d=Math.abs,c=2*r,a=r/3,n=r/180,f=180/r,v=function(){return arguments[0]instanceof e?arguments[0]:function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,arguments,function(){})},l=[],&quot;undefined&quot;!=typeof module&amp;&amp;null!==module&amp;&amp;null!=module.exports&amp;&amp;(module.exports=v),&quot;function&quot;==typeof define&amp;&amp;define.amd?define([],function(){return v}):(he=&quot;undefined&quot;!=typeof exports&amp;&amp;null!==exports?exports:this,he.chroma=v),v.version=&quot;1.1.1&quot;,i={},u=[],o=!1,e=function(){function e(){var e,n,t,r,a,f,c,l,d;for(f=this,n=[],l=0,r=arguments.length;r&gt;l;l++)e=arguments[l],null!=e&amp;&amp;n.push(e);if(c=n[n.length-1],null!=i[c])f._rgb=y(i[c](xe(n.slice(0,-1))));else{for(o||(u=u.sort(function(e,n){return n.p-e.p}),o=!0),d=0,a=u.length;a&gt;d&amp;&amp;(t=u[d],!(c=t.test.apply(t,n)));d++);c&amp;&amp;(f._rgb=y(i[c].apply(i,n)))}null==f._rgb&amp;&amp;console.warn(&quot;unknown format: &quot;+n),null==f._rgb&amp;&amp;(f._rgb=[0,0,0]),3===f._rgb.length&amp;&amp;f._rgb.push(1)}return e.prototype.alpha=function(e){return arguments.length?(this._rgb[3]=e,this):this._rgb[3]},e.prototype.toString=function(){return this.name()},e}(),v._input=i,v.brewer=g={OrRd:[&quot;#fff7ec&quot;,&quot;#fee8c8&quot;,&quot;#fdd49e&quot;,&quot;#fdbb84&quot;,&quot;#fc8d59&quot;,&quot;#ef6548&quot;,&quot;#d7301f&quot;,&quot;#b30000&quot;,&quot;#7f0000&quot;],PuBu:[&quot;#fff7fb&quot;,&quot;#ece7f2&quot;,&quot;#d0d1e6&quot;,&quot;#a6bddb&quot;,&quot;#74a9cf&quot;,&quot;#3690c0&quot;,&quot;#0570b0&quot;,&quot;#045a8d&quot;,&quot;#023858&quot;],BuPu:[&quot;#f7fcfd&quot;,&quot;#e0ecf4&quot;,&quot;#bfd3e6&quot;,&quot;#9ebcda&quot;,&quot;#8c96c6&quot;,&quot;#8c6bb1&quot;,&quot;#88419d&quot;,&quot;#810f7c&quot;,&quot;#4d004b&quot;],Oranges:[&quot;#fff5eb&quot;,&quot;#fee6ce&quot;,&quot;#fdd0a2&quot;,&quot;#fdae6b&quot;,&quot;#fd8d3c&quot;,&quot;#f16913&quot;,&quot;#d94801&quot;,&quot;#a63603&quot;,&quot;#7f2704&quot;],BuGn:[&quot;#f7fcfd&quot;,&quot;#e5f5f9&quot;,&quot;#ccece6&quot;,&quot;#99d8c9&quot;,&quot;#66c2a4&quot;,&quot;#41ae76&quot;,&quot;#238b45&quot;,&quot;#006d2c&quot;,&quot;#00441b&quot;],YlOrBr:[&quot;#ffffe5&quot;,&quot;#fff7bc&quot;,&quot;#fee391&quot;,&quot;#fec44f&quot;,&quot;#fe9929&quot;,&quot;#ec7014&quot;,&quot;#cc4c02&quot;,&quot;#993404&quot;,&quot;#662506&quot;],YlGn:[&quot;#ffffe5&quot;,&quot;#f7fcb9&quot;,&quot;#d9f0a3&quot;,&quot;#addd8e&quot;,&quot;#78c679&quot;,&quot;#41ab5d&quot;,&quot;#238443&quot;,&quot;#006837&quot;,&quot;#004529&quot;],Reds:[&quot;#fff5f0&quot;,&quot;#fee0d2&quot;,&quot;#fcbba1&quot;,&quot;#fc9272&quot;,&quot;#fb6a4a&quot;,&quot;#ef3b2c&quot;,&quot;#cb181d&quot;,&quot;#a50f15&quot;,&quot;#67000d&quot;],RdPu:[&quot;#fff7f3&quot;,&quot;#fde0dd&quot;,&quot;#fcc5c0&quot;,&quot;#fa9fb5&quot;,&quot;#f768a1&quot;,&quot;#dd3497&quot;,&quot;#ae017e&quot;,&quot;#7a0177&quot;,&quot;#49006a&quot;],Greens:[&quot;#f7fcf5&quot;,&quot;#e5f5e0&quot;,&quot;#c7e9c0&quot;,&quot;#a1d99b&quot;,&quot;#74c476&quot;,&quot;#41ab5d&quot;,&quot;#238b45&quot;,&quot;#006d2c&quot;,&quot;#00441b&quot;],YlGnBu:[&quot;#ffffd9&quot;,&quot;#edf8b1&quot;,&quot;#c7e9b4&quot;,&quot;#7fcdbb&quot;,&quot;#41b6c4&quot;,&quot;#1d91c0&quot;,&quot;#225ea8&quot;,&quot;#253494&quot;,&quot;#081d58&quot;],Purples:[&quot;#fcfbfd&quot;,&quot;#efedf5&quot;,&quot;#dadaeb&quot;,&quot;#bcbddc&quot;,&quot;#9e9ac8&quot;,&quot;#807dba&quot;,&quot;#6a51a3&quot;,&quot;#54278f&quot;,&quot;#3f007d&quot;],GnBu:[&quot;#f7fcf0&quot;,&quot;#e0f3db&quot;,&quot;#ccebc5&quot;,&quot;#a8ddb5&quot;,&quot;#7bccc4&quot;,&quot;#4eb3d3&quot;,&quot;#2b8cbe&quot;,&quot;#0868ac&quot;,&quot;#084081&quot;],Greys:[&quot;#ffffff&quot;,&quot;#f0f0f0&quot;,&quot;#d9d9d9&quot;,&quot;#bdbdbd&quot;,&quot;#969696&quot;,&quot;#737373&quot;,&quot;#525252&quot;,&quot;#252525&quot;,&quot;#000000&quot;],YlOrRd:[&quot;#ffffcc&quot;,&quot;#ffeda0&quot;,&quot;#fed976&quot;,&quot;#feb24c&quot;,&quot;#fd8d3c&quot;,&quot;#fc4e2a&quot;,&quot;#e31a1c&quot;,&quot;#bd0026&quot;,&quot;#800026&quot;],PuRd:[&quot;#f7f4f9&quot;,&quot;#e7e1ef&quot;,&quot;#d4b9da&quot;,&quot;#c994c7&quot;,&quot;#df65b0&quot;,&quot;#e7298a&quot;,&quot;#ce1256&quot;,&quot;#980043&quot;,&quot;#67001f&quot;],Blues:[&quot;#f7fbff&quot;,&quot;#deebf7&quot;,&quot;#c6dbef&quot;,&quot;#9ecae1&quot;,&quot;#6baed6&quot;,&quot;#4292c6&quot;,&quot;#2171b5&quot;,&quot;#08519c&quot;,&quot;#08306b&quot;],PuBuGn:[&quot;#fff7fb&quot;,&quot;#ece2f0&quot;,&quot;#d0d1e6&quot;,&quot;#a6bddb&quot;,&quot;#67a9cf&quot;,&quot;#3690c0&quot;,&quot;#02818a&quot;,&quot;#016c59&quot;,&quot;#014636&quot;],Spectral:[&quot;#9e0142&quot;,&quot;#d53e4f&quot;,&quot;#f46d43&quot;,&quot;#fdae61&quot;,&quot;#fee08b&quot;,&quot;#ffffbf&quot;,&quot;#e6f598&quot;,&quot;#abdda4&quot;,&quot;#66c2a5&quot;,&quot;#3288bd&quot;,&quot;#5e4fa2&quot;],RdYlGn:[&quot;#a50026&quot;,&quot;#d73027&quot;,&quot;#f46d43&quot;,&quot;#fdae61&quot;,&quot;#fee08b&quot;,&quot;#ffffbf&quot;,&quot;#d9ef8b&quot;,&quot;#a6d96a&quot;,&quot;#66bd63&quot;,&quot;#1a9850&quot;,&quot;#006837&quot;],RdBu:[&quot;#67001f&quot;,&quot;#b2182b&quot;,&quot;#d6604d&quot;,&quot;#f4a582&quot;,&quot;#fddbc7&quot;,&quot;#f7f7f7&quot;,&quot;#d1e5f0&quot;,&quot;#92c5de&quot;,&quot;#4393c3&quot;,&quot;#2166ac&quot;,&quot;#053061&quot;],PiYG:[&quot;#8e0152&quot;,&quot;#c51b7d&quot;,&quot;#de77ae&quot;,&quot;#f1b6da&quot;,&quot;#fde0ef&quot;,&quot;#f7f7f7&quot;,&quot;#e6f5d0&quot;,&quot;#b8e186&quot;,&quot;#7fbc41&quot;,&quot;#4d9221&quot;,&quot;#276419&quot;],PRGn:[&quot;#40004b&quot;,&quot;#762a83&quot;,&quot;#9970ab&quot;,&quot;#c2a5cf&quot;,&quot;#e7d4e8&quot;,&quot;#f7f7f7&quot;,&quot;#d9f0d3&quot;,&quot;#a6dba0&quot;,&quot;#5aae61&quot;,&quot;#1b7837&quot;,&quot;#00441b&quot;],RdYlBu:[&quot;#a50026&quot;,&quot;#d73027&quot;,&quot;#f46d43&quot;,&quot;#fdae61&quot;,&quot;#fee090&quot;,&quot;#ffffbf&quot;,&quot;#e0f3f8&quot;,&quot;#abd9e9&quot;,&quot;#74add1&quot;,&quot;#4575b4&quot;,&quot;#313695&quot;],BrBG:[&quot;#543005&quot;,&quot;#8c510a&quot;,&quot;#bf812d&quot;,&quot;#dfc27d&quot;,&quot;#f6e8c3&quot;,&quot;#f5f5f5&quot;,&quot;#c7eae5&quot;,&quot;#80cdc1&quot;,&quot;#35978f&quot;,&quot;#01665e&quot;,&quot;#003c30&quot;],RdGy:[&quot;#67001f&quot;,&quot;#b2182b&quot;,&quot;#d6604d&quot;,&quot;#f4a582&quot;,&quot;#fddbc7&quot;,&quot;#ffffff&quot;,&quot;#e0e0e0&quot;,&quot;#bababa&quot;,&quot;#878787&quot;,&quot;#4d4d4d&quot;,&quot;#1a1a1a&quot;],PuOr:[&quot;#7f3b08&quot;,&quot;#b35806&quot;,&quot;#e08214&quot;,&quot;#fdb863&quot;,&quot;#fee0b6&quot;,&quot;#f7f7f7&quot;,&quot;#d8daeb&quot;,&quot;#b2abd2&quot;,&quot;#8073ac&quot;,&quot;#542788&quot;,&quot;#2d004b&quot;],Set2:[&quot;#66c2a5&quot;,&quot;#fc8d62&quot;,&quot;#8da0cb&quot;,&quot;#e78ac3&quot;,&quot;#a6d854&quot;,&quot;#ffd92f&quot;,&quot;#e5c494&quot;,&quot;#b3b3b3&quot;],Accent:[&quot;#7fc97f&quot;,&quot;#beaed4&quot;,&quot;#fdc086&quot;,&quot;#ffff99&quot;,&quot;#386cb0&quot;,&quot;#f0027f&quot;,&quot;#bf5b17&quot;,&quot;#666666&quot;],Set1:[&quot;#e41a1c&quot;,&quot;#377eb8&quot;,&quot;#4daf4a&quot;,&quot;#984ea3&quot;,&quot;#ff7f00&quot;,&quot;#ffff33&quot;,&quot;#a65628&quot;,&quot;#f781bf&quot;,&quot;#999999&quot;],Set3:[&quot;#8dd3c7&quot;,&quot;#ffffb3&quot;,&quot;#bebada&quot;,&quot;#fb8072&quot;,&quot;#80b1d3&quot;,&quot;#fdb462&quot;,&quot;#b3de69&quot;,&quot;#fccde5&quot;,&quot;#d9d9d9&quot;,&quot;#bc80bd&quot;,&quot;#ccebc5&quot;,&quot;#ffed6f&quot;],Dark2:[&quot;#1b9e77&quot;,&quot;#d95f02&quot;,&quot;#7570b3&quot;,&quot;#e7298a&quot;,&quot;#66a61e&quot;,&quot;#e6ab02&quot;,&quot;#a6761d&quot;,&quot;#666666&quot;],Paired:[&quot;#a6cee3&quot;,&quot;#1f78b4&quot;,&quot;#b2df8a&quot;,&quot;#33a02c&quot;,&quot;#fb9a99&quot;,&quot;#e31a1c&quot;,&quot;#fdbf6f&quot;,&quot;#ff7f00&quot;,&quot;#cab2d6&quot;,&quot;#6a3d9a&quot;,&quot;#ffff99&quot;,&quot;#b15928&quot;],Pastel2:[&quot;#b3e2cd&quot;,&quot;#fdcdac&quot;,&quot;#cbd5e8&quot;,&quot;#f4cae4&quot;,&quot;#e6f5c9&quot;,&quot;#fff2ae&quot;,&quot;#f1e2cc&quot;,&quot;#cccccc&quot;],Pastel1:[&quot;#fbb4ae&quot;,&quot;#b3cde3&quot;,&quot;#ccebc5&quot;,&quot;#decbe4&quot;,&quot;#fed9a6&quot;,&quot;#ffffcc&quot;,&quot;#e5d8bd&quot;,&quot;#fddaec&quot;,&quot;#f2f2f2&quot;]},Me={indigo:&quot;#4b0082&quot;,gold:&quot;#ffd700&quot;,hotpink:&quot;#ff69b4&quot;,firebrick:&quot;#b22222&quot;,indianred:&quot;#cd5c5c&quot;,yellow:&quot;#ffff00&quot;,mistyrose:&quot;#ffe4e1&quot;,darkolivegreen:&quot;#556b2f&quot;,olive:&quot;#808000&quot;,darkseagreen:&quot;#8fbc8f&quot;,pink:&quot;#ffc0cb&quot;,tomato:&quot;#ff6347&quot;,lightcoral:&quot;#f08080&quot;,orangered:&quot;#ff4500&quot;,navajowhite:&quot;#ffdead&quot;,lime:&quot;#00ff00&quot;,palegreen:&quot;#98fb98&quot;,darkslategrey:&quot;#2f4f4f&quot;,greenyellow:&quot;#adff2f&quot;,burlywood:&quot;#deb887&quot;,seashell:&quot;#fff5ee&quot;,mediumspringgreen:&quot;#00fa9a&quot;,fuchsia:&quot;#ff00ff&quot;,papayawhip:&quot;#ffefd5&quot;,blanchedalmond:&quot;#ffebcd&quot;,chartreuse:&quot;#7fff00&quot;,dimgray:&quot;#696969&quot;,black:&quot;#000000&quot;,peachpuff:&quot;#ffdab9&quot;,springgreen:&quot;#00ff7f&quot;,aquamarine:&quot;#7fffd4&quot;,white:&quot;#ffffff&quot;,orange:&quot;#ffa500&quot;,lightsalmon:&quot;#ffa07a&quot;,darkslategray:&quot;#2f4f4f&quot;,brown:&quot;#a52a2a&quot;,ivory:&quot;#fffff0&quot;,dodgerblue:&quot;#1e90ff&quot;,peru:&quot;#cd853f&quot;,lawngreen:&quot;#7cfc00&quot;,chocolate:&quot;#d2691e&quot;,crimson:&quot;#dc143c&quot;,forestgreen:&quot;#228b22&quot;,darkgrey:&quot;#a9a9a9&quot;,lightseagreen:&quot;#20b2aa&quot;,cyan:&quot;#00ffff&quot;,mintcream:&quot;#f5fffa&quot;,silver:&quot;#c0c0c0&quot;,antiquewhite:&quot;#faebd7&quot;,mediumorchid:&quot;#ba55d3&quot;,skyblue:&quot;#87ceeb&quot;,gray:&quot;#808080&quot;,darkturquoise:&quot;#00ced1&quot;,goldenrod:&quot;#daa520&quot;,darkgreen:&quot;#006400&quot;,floralwhite:&quot;#fffaf0&quot;,</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">darkviolet:&quot;#9400d3&quot;,darkgray:&quot;#a9a9a9&quot;,moccasin:&quot;#ffe4b5&quot;,saddlebrown:&quot;#8b4513&quot;,grey:&quot;#808080&quot;,darkslateblue:&quot;#483d8b&quot;,lightskyblue:&quot;#87cefa&quot;,lightpink:&quot;#ffb6c1&quot;,mediumvioletred:&quot;#c71585&quot;,slategrey:&quot;#708090&quot;,red:&quot;#ff0000&quot;,deeppink:&quot;#ff1493&quot;,limegreen:&quot;#32cd32&quot;,darkmagenta:&quot;#8b008b&quot;,palegoldenrod:&quot;#eee8aa&quot;,plum:&quot;#dda0dd&quot;,turquoise:&quot;#40e0d0&quot;,lightgrey:&quot;#d3d3d3&quot;,lightgoldenrodyellow:&quot;#fafad2&quot;,darkgoldenrod:&quot;#b8860b&quot;,lavender:&quot;#e6e6fa&quot;,maroon:&quot;#800000&quot;,yellowgreen:&quot;#9acd32&quot;,sandybrown:&quot;#f4a460&quot;,thistle:&quot;#d8bfd8&quot;,violet:&quot;#ee82ee&quot;,navy:&quot;#000080&quot;,magenta:&quot;#ff00ff&quot;,dimgrey:&quot;#696969&quot;,tan:&quot;#d2b48c&quot;,rosybrown:&quot;#bc8f8f&quot;,olivedrab:&quot;#6b8e23&quot;,blue:&quot;#0000ff&quot;,lightblue:&quot;#add8e6&quot;,ghostwhite:&quot;#f8f8ff&quot;,honeydew:&quot;#f0fff0&quot;,cornflowerblue:&quot;#6495ed&quot;,slateblue:&quot;#6a5acd&quot;,linen:&quot;#faf0e6&quot;,darkblue:&quot;#00008b&quot;,powderblue:&quot;#b0e0e6&quot;,seagreen:&quot;#2e8b57&quot;,darkkhaki:&quot;#bdb76b&quot;,snow:&quot;#fffafa&quot;,sienna:&quot;#a0522d&quot;,mediumblue:&quot;#0000cd&quot;,royalblue:&quot;#4169e1&quot;,lightcyan:&quot;#e0ffff&quot;,green:&quot;#008000&quot;,mediumpurple:&quot;#9370db&quot;,midnightblue:&quot;#191970&quot;,cornsilk:&quot;#fff8dc&quot;,paleturquoise:&quot;#afeeee&quot;,bisque:&quot;#ffe4c4&quot;,slategray:&quot;#708090&quot;,darkcyan:&quot;#008b8b&quot;,khaki:&quot;#f0e68c&quot;,wheat:&quot;#f5deb3&quot;,teal:&quot;#008080&quot;,darkorchid:&quot;#9932cc&quot;,deepskyblue:&quot;#00bfff&quot;,salmon:&quot;#fa8072&quot;,darkred:&quot;#8b0000&quot;,steelblue:&quot;#4682b4&quot;,palevioletred:&quot;#db7093&quot;,lightslategray:&quot;#778899&quot;,aliceblue:&quot;#f0f8ff&quot;,lightslategrey:&quot;#778899&quot;,lightgreen:&quot;#90ee90&quot;,orchid:&quot;#da70d6&quot;,gainsboro:&quot;#dcdcdc&quot;,mediumseagreen:&quot;#3cb371&quot;,lightgray:&quot;#d3d3d3&quot;,mediumturquoise:&quot;#48d1cc&quot;,lemonchiffon:&quot;#fffacd&quot;,cadetblue:&quot;#5f9ea0&quot;,lightyellow:&quot;#ffffe0&quot;,lavenderblush:&quot;#fff0f5&quot;,coral:&quot;#ff7f50&quot;,purple:&quot;#800080&quot;,aqua:&quot;#00ffff&quot;,whitesmoke:&quot;#f5f5f5&quot;,mediumslateblue:&quot;#7b68ee&quot;,darkorange:&quot;#ff8c00&quot;,mediumaquamarine:&quot;#66cdaa&quot;,darksalmon:&quot;#e9967a&quot;,beige:&quot;#f5f5dc&quot;,blueviolet:&quot;#8a2be2&quot;,azure:&quot;#f0ffff&quot;,lightsteelblue:&quot;#b0c4de&quot;,oldlace:&quot;#fdf5e6&quot;,rebeccapurple:&quot;#663399&quot;},v.colors=x=Me,X=function(){var e,n,r,a,f,c,u,o,i;return n=xe(arguments),f=n[0],e=n[1],r=n[2],o=(f+16)/116,u=isNaN(e)?o:o+e/500,i=isNaN(r)?o:o-r/200,o=t.Yn*T(o),u=t.Xn*T(u),i=t.Zn*T(i),c=ke(3.2404542*u-1.5371385*o-.4985314*i),a=ke(-.969266*u+1.8760108*o+.041556*i),r=ke(.0556434*u-.2040259*o+1.0572252*i),c=$(c,0,255),a=$(a,0,255),r=$(r,0,255),[c,a,r,n.length&gt;3?n[3]:1]},ke=function(e){return pe(255*(.00304&gt;=e?12.92*e:1.055*J(e,1/2.4)-.055))},T=function(e){return e&gt;t.t1?e*e*e:t.t2*(e-t.t0)},t={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},ce=function(){var e,n,t,r,a,f,c,u;return r=xe(arguments),t=r[0],n=r[1],e=r[2],a=de(t,n,e),f=a[0],c=a[1],u=a[2],[116*c-16,500*(f-c),200*(c-u)]},se=function(e){return(e/=255)&lt;=.04045?e/12.92:J((e+.055)/1.055,2.4)},_e=function(e){return e&gt;t.t3?J(e,1/3):e/t.t2+t.t0},de=function(){var e,n,r,a,f,c,u;return a=xe(arguments),r=a[0],n=a[1],e=a[2],r=se(r),n=se(n),e=se(e),f=_e((.4124564*r+.3575761*n+.1804375*e)/t.Xn),c=_e((.2126729*r+.7151522*n+.072175*e)/t.Yn),u=_e((.0193339*r+.119192*n+.9503041*e)/t.Zn),[f,c,u]},v.lab=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;lab&quot;]),function(){})},i.lab=X,e.prototype.lab=function(){return ce(this._rgb)},b=function(e){var n,t,r,a,f,c,u,o,i,l,d;return e=function(){var n,t,r;for(r=[],t=0,n=e.length;n&gt;t;t++)a=e[t],r.push(v(a));return r}(),2===e.length?(i=function(){var n,t,r;for(r=[],t=0,n=e.length;n&gt;t;t++)a=e[t],r.push(a.lab());return r}(),f=i[0],c=i[1],n=function(e){var n,t;return t=function(){var t,r;for(r=[],n=t=0;2&gt;=t;n=++t)r.push(f[n]+e*(c[n]-f[n]));return r}(),v.lab.apply(v,t)}):3===e.length?(l=function(){var n,t,r;for(r=[],t=0,n=e.length;n&gt;t;t++)a=e[t],r.push(a.lab());return r}(),f=l[0],c=l[1],u=l[2],n=function(e){var n,t;return t=function(){var t,r;for(r=[],n=t=0;2&gt;=t;n=++t)r.push((1-e)*(1-e)*f[n]+2*(1-e)*e*c[n]+e*e*u[n]);return r}(),v.lab.apply(v,t)}):4===e.length?(d=function(){var n,t,r;for(r=[],t=0,n=e.length;n&gt;t;t++)a=e[t],r.push(a.lab());return r}(),f=d[0],c=d[1],u=d[2],o=d[3],n=function(e){var n,t;return t=function(){var t,r;for(r=[],n=t=0;2&gt;=t;n=++t)r.push((1-e)*(1-e)*(1-e)*f[n]+3*(1-e)*(1-e)*e*c[n]+3*(1-e)*e*e*u[n]+e*e*e*o[n]);return r}(),v.lab.apply(v,t)}):5===e.length&amp;&amp;(t=b(e.slice(0,3)),r=b(e.slice(2,5)),n=function(e){return.5&gt;e?t(2*e):r(2*(e-.5))}),n},v.bezier=function(e){var n;return n=b(e),n.scale=function(){return v.scale(n)},n},v.cubehelix=function(e,n,t,r,a){var f,u,o;return null==e&amp;&amp;(e=300),null==n&amp;&amp;(n=-1.5),null==t&amp;&amp;(t=1),null==r&amp;&amp;(r=1),null==a&amp;&amp;(a=[0,1]),u=a[1]-a[0],f=0,o=function(o){var i,l,d,s,b,h,p,g,m;return i=c*((e+120)/360+n*o),p=J(a[0]+u*o,r),h=0!==f?t[0]+o*f:t,l=h*p*(1-p)/2,s=M(i),m=me(i),g=p+l*(-.14861*s+1.78277*m),b=p+l*(-.29227*s-.90649*m),d=p+1.97294*l*s,v(y([255*g,255*b,255*d]))},o.start=function(n){return null==n?e:(e=n,o)},o.rotations=function(e){return null==e?n:(n=e,o)},o.gamma=function(e){return null==e?r:(r=e,o)},o.hue=function(e){return null==e?t:(t=e,&quot;array&quot;===we(t)?(f=t[1]-t[0],0===f&amp;&amp;(t=t[1])):f=0,o)},o.lightness=function(e){return null==e?a:(a=e,&quot;array&quot;===we(a)?(u=a[1]-a[0],0===u&amp;&amp;(a=a[1])):u=0,o)},o.scale=function(){return v.scale(o)},o.hue(t),o},v.random=function(){var n,t,r,a;for(t=&quot;0123456789abcdef&quot;,n=&quot;#&quot;,r=a=0;6&gt;a;r=++a)n+=t.charAt(L(16*Math.random()));return new e(n)},i.rgb=function(){var e,n,t,r;n=xe(arguments),t=[];for(e in n)r=n[e],t.push(r);return t},v.rgb=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;rgb&quot;]),function(){})},e.prototype.rgb=function(){return this._rgb.slice(0,3)},e.prototype.rgba=function(){return this._rgb},u.push({p:15,test:function(){var e;return e=xe(arguments),&quot;array&quot;===we(e)&amp;&amp;3===e.length?&quot;rgb&quot;:4===e.length&amp;&amp;&quot;number&quot;===we(e[3])&amp;&amp;e[3]&gt;=0&amp;&amp;e[3]&lt;=1?&quot;rgb&quot;:void 0}}),A=function(e){var n,t,r,a,f,c;if(e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))return(4===e.length||7===e.length)&amp;&amp;(e=e.substr(1)),3===e.length&amp;&amp;(e=e.split(&quot;&quot;),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),c=parseInt(e,16),a=c&gt;&gt;16,r=c&gt;&gt;8&amp;255,t=255&amp;c,[a,r,t,1];if(e.match(/^#?([A-Fa-f0-9]{8})$/))return 9===e.length&amp;&amp;(e=e.substr(1)),c=parseInt(e,16),a=c&gt;&gt;24&amp;255,r=c&gt;&gt;16&amp;255,t=c&gt;&gt;8&amp;255,n=pe((255&amp;c)/255*100)/100,[a,r,t,n];if(null!=i.css&amp;&amp;(f=i.css(e)))return f;throw&quot;unknown color: &quot;+e},te=function(e,n){var t,r,a,f,c,u,o;return null==n&amp;&amp;(n=&quot;rgb&quot;),c=e[0],a=e[1],r=e[2],t=e[3],o=c&lt;&lt;16|a&lt;&lt;8|r,u=&quot;000000&quot;+o.toString(16),u=u.substr(u.length-6),f=&quot;0&quot;+pe(255*t).toString(16),f=f.substr(f.length-2),&quot;#&quot;+function(){switch(n.toLowerCase()){case&quot;rgba&quot;:return u+f;case&quot;argb&quot;:return f+u;default:return u}}()},i.hex=function(e){return A(e)},v.hex=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;hex&quot;]),function(){})},e.prototype.hex=function(e){return null==e&amp;&amp;(e=&quot;rgb&quot;),te(this._rgb,e)},u.push({p:10,test:function(e){return 1===arguments.length&amp;&amp;&quot;string&quot;===we(e)?&quot;hex&quot;:void 0}}),B=function(){var e,n,t,r,a,f,c,u,o,i,l,d,s,b;if(e=xe(arguments),a=e[0],l=e[1],c=e[2],0===l)o=r=n=255*c;else{for(b=[0,0,0],t=[0,0,0],s=.5&gt;c?c*(1+l):c+l-c*l,d=2*c-s,a/=360,b[0]=a+1/3,b[1]=a,b[2]=a-1/3,f=u=0;2&gt;=u;f=++u)b[f]&lt;0&amp;&amp;(b[f]+=1),b[f]&gt;1&amp;&amp;(b[f]-=1),t[f]=6*b[f]&lt;1?d+6*(s-d)*b[f]:2*b[f]&lt;1?s:3*b[f]&lt;2?d+(s-d)*(2/3-b[f])*6:d;i=[pe(255*t[0]),pe(255*t[1]),pe(255*t[2])],o=i[0],r=i[1],n=i[2]}return e.length&gt;3?[o,r,n,e[3]]:[o,r,n]},ae=function(e,n,t){var r,a,f,c,u;return void 0!==e&amp;&amp;e.length&gt;=3&amp;&amp;(c=e,e=c[0],n=c[1],t=c[2]),e/=255,n/=255,t/=255,f=Math.min(e,n,t),Z=Math.max(e,n,t),a=(Z+f)/2,Z===f?(u=0,r=Number.NaN):u=.5&gt;a?(Z-f)/(Z+f):(Z-f)/(2-Z-f),e===Z?r=(n-t)/(Z-f):n===Z?r=2+(t-e)/(Z-f):t===Z&amp;&amp;(r=4+(e-n)/(Z-f)),r*=60,0&gt;r&amp;&amp;(r+=360),[r,u,a]},v.hsl=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;hsl&quot;]),function(){})},i.hsl=B,e.prototype.hsl=function(){return ae(this._rgb)},q=function(){var e,n,t,r,a,f,c,u,o,i,l,d,s,b,h,p,g,m;if(e=xe(arguments),a=e[0],p=e[1],m=e[2],m*=255,0===p)o=r=n=m;else switch(360===a&amp;&amp;(a=0),a&gt;360&amp;&amp;(a-=360),0&gt;a&amp;&amp;(a+=360),a/=60,f=L(a),t=a-f,c=m*(1-p),u=m*(1-p*t),g=m*(1-p*(1-t)),f){case 0:i=[m,g,c],o=i[0],r=i[1],n=i[2];break;case 1:l=[u,m,c],o=l[0],r=l[1],n=l[2];break;case 2:d=[c,m,g],o=d[0],r=d[1],n=d[2];break;case 3:s=[c,u,m],o=s[0],r=s[1],n=s[2];break;case 4:b=[g,c,m],o=b[0],r=b[1],n=b[2];break;case 5:h=[m,c,u],o=h[0],r=h[1],n=h[2]}return o=pe(o),r=pe(r),n=pe(n),[o,r,n,e.length&gt;3?e[3]:1]},fe=function(){var e,n,t,r,a,f,c,u,o;return c=xe(arguments),f=c[0],t=c[1],e=c[2],a=Math.min(f,t,e),Z=Math.max(f,t,e),n=Z-a,o=Z/255,0===Z?(r=Number.NaN,u=0):(u=n/Z,f===Z&amp;&amp;(r=(t-e)/n),t===Z&amp;&amp;(r=2+(e-f)/n),e===Z&amp;&amp;(r=4+(f-t)/n),r*=60,0&gt;r&amp;&amp;(r+=360)),[r,u,o]},v.hsv=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;hsv&quot;]),function(){})},i.hsv=q,e.prototype.hsv=function(){return fe(this._rgb)},Q=function(e){var n,t,r;return&quot;number&quot;===we(e)&amp;&amp;e&gt;=0&amp;&amp;16777215&gt;=e?(r=e&gt;&gt;16,t=e&gt;&gt;8&amp;255,n=255&amp;e,[r,t,n,1]):(console.warn(&quot;unknown num color: &quot;+e),[0,0,0,1])},ie=function(){var e,n,t,r;return r=xe(arguments),t=r[0],n=r[1],e=r[2],(t&lt;&lt;16)+(n&lt;&lt;8)+e},v.num=function(n){return new e(n,&quot;num&quot;)},e.prototype.num=function(e){return null==e&amp;&amp;(e=&quot;rgb&quot;),ie(this._rgb,e)},i.num=Q,u.push({p:10,test:function(e){return 1===arguments.length&amp;&amp;&quot;number&quot;===we(e)&amp;&amp;e&gt;=0&amp;&amp;16777215&gt;=e?&quot;num&quot;:void 0}}),_=function(e){var n,t,r,a,f,c,u,o;if(e=e.toLowerCase(),null!=v.colors&amp;&amp;v.colors[e])return A(v.colors[e]);if(f=e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)){for(u=f.slice(1,4),a=c=0;2&gt;=c;a=++c)u[a]=+u[a];u[3]=1}else if(f=e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/))for(u=f.slice(1,5),a=o=0;3&gt;=o;a=++o)u[a]=+u[a];else if(f=e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)){for(u=f.slice(1,4),a=n=0;2&gt;=n;a=++n)u[a]=pe(2.55*u[a]);u[3]=1}else if(f=e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)){for(u=f.slice(1,5),a=t=0;2&gt;=t;a=++t)u[a]=pe(2.55*u[a]);u[3]=+u[3]}else(f=e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/))?(r=f.slice(1,4),r[1]*=.01,r[2]*=.01,u=B(r),u[3]=1):(f=e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/))&amp;&amp;(r=f.slice(1,4),r[1]*=.01,r[2]*=.01,u=B(r),u[3]=+f[4]);return u},ne=function(e){var n;return n=e[3]&lt;1?&quot;rgba&quot;:&quot;rgb&quot;,&quot;rgb&quot;===n?n+&quot;(&quot;+e.slice(0,3).map(pe).join(&quot;,&quot;)+&quot;)&quot;:&quot;rgba&quot;===n?n+&quot;(&quot;+e.slice(0,3).map(pe).join(&quot;,&quot;)+&quot;,&quot;+e[3]+&quot;)&quot;:void 0},be=function(e){return pe(100*e)/100},j=function(e,n){var t;return t=1&gt;n?&quot;hsla&quot;:&quot;hsl&quot;,e[0]=be(e[0]||0),e[1]=be(100*e[1])+&quot;%&quot;,e[2]=be(100*e[2])+&quot;%&quot;,&quot;hsla&quot;===t&amp;&amp;(e[3]=n),t+&quot;(&quot;+e.join(&quot;,&quot;)+&quot;)&quot;},i.css=function(e){return _(e)},v.css=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;css&quot;]),function(){})},e.prototype.css=function(e){return null==e&amp;&amp;(e=&quot;rgb&quot;),&quot;rgb&quot;===e.slice(0,3)?ne(this._rgb):&quot;hsl&quot;===e.slice(0,3)?j(this.hsl(),this.alpha()):void 0},i.named=function(e){return A(Me[e])},u.push({p:20,test:function(e){return 1===arguments.length&amp;&amp;null!=Me[e]?&quot;named&quot;:void 0}}),e.prototype.name=function(e){var n,t;arguments.length&amp;&amp;(Me[e]&amp;&amp;(this._rgb=A(Me[e])),this._rgb[3]=1),n=this.hex();for(t in Me)if(n===Me[t])return t;return n},z=function(){var e,t,r,a;return a=xe(arguments),r=a[0],e=a[1],t=a[2],t*=n,[r,M(t)*e,me(t)*e]},F=function(){var e,n,t,r,a,f,c,u,o,i,l;return t=xe(arguments),u=t[0],a=t[1],c=t[2],i=z(u,a,c),e=i[0],n=i[1],r=i[2],l=X(e,n,r),o=l[0],f=l[1],r=l[2],[$(o,0,255),$(f,0,255),$(r,0,255),t.length&gt;3?t[3]:1]},I=function(){var e,n,t,r,a,c;return c=xe(arguments),a=c[0],e=c[1],n=c[2],t=ve(e*e+n*n),r=(s(n,e)*f+360)%360,0===pe(1e4*t)&amp;&amp;(r=Number.NaN),[a,t,r]},ue=function(){var e,n,t,r,a,f,c;return f=xe(arguments),a=f[0],t=f[1],n=f[2],c=ce(a,t,n),r=c[0],e=c[1],n=c[2],I(r,e,n)},v.lch=function(){var n;return n=xe(arguments),new e(n,&quot;lch&quot;)},v.hcl=function(){var n;return n=xe(arguments),new e(n,&quot;hcl&quot;)},i.lch=F,i.hcl=function(){var e,n,t,r;return r=xe(arguments),n=r[0],e=r[1],t=r[2],F([t,e,n])},e.prototype.lch=function(){return ue(this._rgb)},e.prototype.hcl=function(){return ue(this._rgb).reverse()},ee=function(e){var n,t,r,a,f,c,u,o,i;return null==e&amp;&amp;(e=&quot;rgb&quot;),o=xe(arguments),u=o[0],a=o[1],n=o[2],u/=255,a/=255,n/=255,f=1-Math.max(u,Math.max(a,n)),r=1&gt;f?1/(1-f):0,t=(1-u-f)*r,c=(1-a-f)*r,i=(1-n-f)*r,[t,c,i,f]},w=function(){var e,n,t,r,a,f,c,u,o;return n=xe(arguments),r=n[0],c=n[1],o=n[2],f=n[3],e=n.length&gt;4?n[4]:1,1===f?[0,0,0,e]:(u=r&gt;=1?0:pe(255*(1-r)*(1-f)),a=c&gt;=1?0:pe(255*(1-c)*(1-f)),t=o&gt;=1?0:pe(255*(1-o)*(1-f)),[u,a,t,e])},i.cmyk=function(){return w(xe(arguments))},v.cmyk=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;cmyk&quot;]),function(){})},e.prototype.cmyk=function(){return ee(this._rgb)},i.gl=function(){var e,n,t,r,a;for(r=function(){var e,t;e=xe(arguments),t=[];for(n in e)a=e[n],t.push(a);return t}.apply(this,arguments),e=t=0;2&gt;=t;e=++t)r[e]*=255;return r},v.gl=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;gl&quot;]),function(){})},e.prototype.gl=function(){var e;return e=this._rgb,[e[0]/255,e[1]/255,e[2]/255,e[3]]},oe=function(e,n,t){var r;return r=xe(arguments),e=r[0],n=r[1],t=r[2],e=U(e),n=U(n),t=U(t),.2126*e+.7152*n+.0722*t},U=function(e){return e/=255,.03928&gt;=e?e/12.92:J((e+.055)/1.055,2.4)},l=[],E=function(e,n,t,r){var a,f,c,u;for(null==t&amp;&amp;(t=.5),null==r&amp;&amp;(r=&quot;rgb&quot;),&quot;object&quot;!==we(e)&amp;&amp;(e=v(e)),&quot;object&quot;!==we(n)&amp;&amp;(n=v(n)),c=0,f=l.length;f&gt;c;c++)if(a=l[c],r===a[0]){u=a[1](e,n,t,r);break}if(null==u)throw&quot;color mode &quot;+r+&quot; is not supported&quot;;return u.alpha(e.alpha()+t*(n.alpha()-e.alpha())),u},v.interpolate=E,e.prototype.interpolate=function(e,n,t){return E(this,e,n,t)},v.mix=E,e.prototype.mix=e.prototype.interpolate,Y=function(n,t,r,a){var f,c;return f=n._rgb,c=t._rgb,new e(f[0]+r*(c[0]-f[0]),f[1]+r*(c[1]-f[1]),f[2]+r*(c[2]-f[2]),a)},l.push([&quot;rgb&quot;,Y]),e.prototype.luminance=function(e,n){var t,r,a,f;return null==n&amp;&amp;(n=&quot;rgb&quot;),arguments.length?(0===e?this._rgb=[0,0,0,this._rgb[3]]:1===e?this._rgb=[255,255,255,this._rgb[3]]:(r=1e-7,a=20,f=function(t,c){var u,o;return o=t.interpolate(c,.5,n),u=o.luminance(),Math.abs(e-u)&lt;r||!a--?o:u&gt;e?f(t,o):f(o,c)},t=oe(this._rgb),this._rgb=(t&gt;e?f(v(&quot;black&quot;),this):f(this,v(&quot;white&quot;))).rgba()),this):oe(this._rgb)},ye=function(e){var n,t,r,a;return a=e/100,66&gt;a?(r=255,t=-155.25485562709179-.44596950469579133*(t=a-2)+104.49216199393888*D(t),n=20&gt;a?0:-254.76935184120902+.8274096064007395*(n=a-10)+115.67994401066147*D(n)):(r=351.97690566805693+.114206453784165*(r=a-55)-40.25366309332127*D(r),t=325.4494125711974+.07943456536662342*(t=a-50)-28.0852963507957*D(t),n=255),y([r,t,n])},le=function(){var e,n,t,r,a,f,c,u,o;for(c=xe(arguments),f=c[0],t=c[1],e=c[2],a=1e3,r=4e4,n=.4;r-a&gt;n;)o=.5*(r+a),u=ye(o),u[2]/u[0]&gt;=e/f?r=o:a=o;return pe(o)},v.temperature=v.kelvin=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;temperature&quot;]),function(){})},i.temperature=i.kelvin=i.K=ye,e.prototype.temperature=function(){return le(this._rgb)},e.prototype.kelvin=e.prototype.temperature,v.contrast=function(n,t){var r,a,f,c;return(&quot;string&quot;===(f=we(n))||&quot;number&quot;===f)&amp;&amp;(n=new e(n)),(&quot;string&quot;===(c=we(t))||&quot;number&quot;===c)&amp;&amp;(t=new e(t)),r=n.luminance(),a=t.luminance(),r&gt;a?(r+.05)/(a+.05):(a+.05)/(r+.05)},e.prototype.get=function(e){var n,t,r,a,f,c;return r=this,f=e.split(&quot;.&quot;),a=f[0],n=f[1],c=r[a](),n?(t=a.indexOf(n),t&gt;-1?c[t]:console.warn(&quot;unknown channel &quot;+n+&quot; in mode &quot;+a)):c},e.prototype.set=function(e,n){var t,r,a,f,c,u;if(a=this,c=e.split(&quot;.&quot;),f=c[0],t=c[1],t)if(u=a[f](),r=f.indexOf(t),r&gt;-1)if(&quot;string&quot;===we(n))switch(n.charAt(0)){case&quot;+&quot;:u[r]+=+n;break;case&quot;-&quot;:u[r]+=+n;break;case&quot;*&quot;:u[r]*=+n.substr(1);break;case&quot;/&quot;:u[r]/=+n.substr(1);break;default:u[r]=+n}else u[r]=n;else console.warn(&quot;unknown channel &quot;+t+&quot; in mode &quot;+f);else u=n;return a._rgb=v(u,f).alpha(a.alpha())._rgb,a},e.prototype.darken=function(e){var n,r;return null==e&amp;&amp;(e=1),r=this,n=r.lab(),n[0]-=t.Kn*e,v.lab(n).alpha(r.alpha())},e.prototype.brighten=function(e){return null==e&amp;&amp;(e=1),this.darken(-e)},e.prototype.darker=e.prototype.darken,e.prototype.brighter=e.prototype.brighten,e.prototype.saturate=function(e){var n,r;return null==e&amp;&amp;(e=1),r=this,n=r.lch(),n[1]+=e*t.Kn,n[1]&lt;0&amp;&amp;(n[1]=0),v.lch(n).alpha(r.alpha())},e.prototype.desaturate=function(e){return null==e&amp;&amp;(e=1),this.saturate(-e)},e.prototype.premultiply=function(){var e,n;return n=this.rgb(),e=this.alpha(),v(n[0]*e,n[1]*e,n[2]*e,e)},h=function(e,n,t){if(!h[t])throw&quot;unknown blend mode &quot;+t;return h[t](e,n)},p=function(e){return function(n,t){var r,a;return r=v(t).rgb(),a=v(n).rgb(),v(e(r,a),&quot;rgb&quot;)}},N=function(e){return function(n,t){var r,a,f;for(f=[],r=a=0;3&gt;=a;r=++a)f[r]=e(n[r],t[r]);return f}},K=function(e){return e},H=function(e,n){return e*n/255},k=function(e,n){return e&gt;n?n:e},G=function(e,n){return e&gt;n?e:n},ge=function(e,n){return 255*(1-(1-e/255)*(1-n/255))},W=function(e,n){return 128&gt;n?2*e*n/255:255*(1-2*(1-e/255)*(1-n/255))},m=function(e,n){return 255*(1-(1-n/255)/(e/255))},O=function(e,n){return 255===e?255:(e=255*(n/255)/(1-e/255),e&gt;255?255:e)},h.normal=p(N(K)),h.multiply=p(N(H)),h.screen=p(N(ge)),h.overlay=p(N(W)),h.darken=p(N(k)),h.lighten=p(N(G)),h.dodge=p(N(O)),h.burn=p(N(m)),v.blend=h,v.analyze=function(e){var n,t,r,a;for(r={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0},t=0,n=e.length;n&gt;t;t++)a=e[t],null==a||isNaN(a)||(r.values.push(a),r.sum+=a,a&lt;r.min&amp;&amp;(r.min=a),a&gt;r.max&amp;&amp;(r.max=a),r.count+=1);return r.domain=[r.min,r.max],r.limits=function(e,n){return v.limits(r,e,n)},r},v.scale=function(e){var n,t,r,a,f,c,u,o,i,l,d,s,b,h,p,g,m,y,w,x,M;return i=&quot;rgb&quot;,l=v(&quot;#ccc&quot;),h=0,c=!1,f=[0,1],b=[],s=[0,0],n=!1,r=[],d=!1,o=0,u=1,a=!1,t={},x=function(e){var n,t,a,f,c,u,o;if(null==e&amp;&amp;(e=[&quot;#fff&quot;,&quot;#000&quot;]),null!=e&amp;&amp;&quot;string&quot;===we(e)&amp;&amp;null!=(null!=(f=v.brewer)?f[e]:void 0)&amp;&amp;(e=v.brewer[e]),&quot;array&quot;===we(e)){for(e=e.slice(0),n=a=0,c=e.length-1;c&gt;=0?c&gt;=a:a&gt;=c;n=c&gt;=0?++a:--a)t=e[n],&quot;string&quot;===we(t)&amp;&amp;(e[n]=v(t));for(b.length=0,n=o=0,u=e.length-1;u&gt;=0?u&gt;=o:o&gt;=u;n=u&gt;=0?++o:--o)b.push(n/(e.length-1))}return w(),r=e},m=function(e){var t,r;if(null!=n){for(r=n.length-1,t=0;r&gt;t&amp;&amp;e&gt;=n[t];)t++;return t-1}return 0},M=function(e){return e},p=function(e){var t,r,a,f,c;return c=e,n.length&gt;2&amp;&amp;(f=n.length-1,t=m(e),a=n[0]+(n[1]-n[0])*(0+.5*h),r=n[f-1]+(n[f]-n[f-1])*(1-.5*h),c=o+(n[t]+.5*(n[t+1]-n[t])-a)/(r-a)*(u-o)),c},y=function(e,a){var f,c,d,h,p,g,y,w;if(null==a&amp;&amp;(a=!1),isNaN(e))return l;if(a?w=e:n&amp;&amp;n.length&gt;2?(f=m(e),w=f/(n.length-2),w=s[0]+w*(1-s[0]-s[1])):u!==o?(w=(e-o)/(u-o),w=s[0]+w*(1-s[0]-s[1]),w=Math.min(1,Math.max(0,w))):w=1,a||(w=M(w)),h=Math.floor(1e4*w),t[h])c=t[h];else{if(&quot;array&quot;===we(r))for(d=p=0,y=b.length-1;y&gt;=0?y&gt;=p:p&gt;=y;d=y&gt;=0?++p:--p){if(g=b[d],g&gt;=w){c=r[d];break}if(w&gt;=g&amp;&amp;d===b.length-1){c=r[d];break}if(w&gt;g&amp;&amp;w&lt;b[d+1]){w=(w-g)/(b[d+1]-g),c=v.interpolate(r[d],r[d+1],w,i);break}}else&quot;function&quot;===we(r)&amp;&amp;(c=r(w));t[h]=c}return c},w=function(){return t={}},x(e),g=function(e){var n;return n=v(y(e)),d&amp;&amp;n[d]?n[d]():n},g.classes=function(e){var t;return null!=e?(&quot;array&quot;===we(e)?(n=e,f=[e[0],e[e.length-1]]):(t=v.analyze(f),n=0===e?[t.min,t.max]:v.limits(t,&quot;e&quot;,e)),g):n},g.domain=function(e){var n,t,a,c,i,l,d;if(!arguments.length)return f;if(o=e[0],u=e[e.length-1],b=[],a=r.length,e.length===a&amp;&amp;o!==u)for(i=0,c=e.length;c&gt;i;i++)t=e[i],b.push((t-o)/(u-o));else for(n=d=0,l=a-1;l&gt;=0?l&gt;=d:d&gt;=l;n=l&gt;=0?++d:--d)b.push(n/(a-1));return f=[o,u],g},g.mode=function(e){return arguments.length?(i=e,w(),g):i},g.range=function(e,n){return x(e,n),g},g.out=function(e){return d=e,g},g.spread=function(e){return arguments.length?(h=e,g):h},g.correctLightness=function(e){return null==e&amp;&amp;(e=!0),a=e,w(),M=a?function(e){var n,t,r,a,f,c,u,o,i;for(n=y(0,!0).lab()[0],t=y(1,!0).lab()[0],u=n&gt;t,r=y(e,!0).lab()[0],f=n+(t-n)*e,a=r-f,o=0,i=1,c=20;Math.abs(a)&gt;.01&amp;&amp;c--&gt;0;)!function(){return u&amp;&amp;(a*=-1),0&gt;a?(o=e,e+=.5*(i-e)):(i=e,e+=.5*(o-e)),r=y(e,!0).lab()[0],a=r-f}();return e}:function(e){return e},g},g.padding=function(e){return null!=e?(&quot;number&quot;===we(e)&amp;&amp;(e=[e,e]),s=e,g):s},g.colors=function(){var t,r,a,c,u,o,i,l,d;if(c=0,u=&quot;hex&quot;,1===arguments.length&amp;&amp;(&quot;string&quot;===we(arguments[0])?u=arguments[0]:c=arguments[0]),2===arguments.length&amp;&amp;(c=arguments[0],u=arguments[1]),c)return r=f[0],t=f[1]-r,function(){i=[];for(var e=0;c&gt;=0?c&gt;e:e&gt;c;c&gt;=0?e++:e--)i.push(e);return i}.apply(this).map(function(e){return g(r+e/(c-1)*t)[u]()});if(e=[],l=[],n&amp;&amp;n.length&gt;2)for(a=d=1,o=n.length;o&gt;=1?o&gt;d:d&gt;o;a=o&gt;=1?++d:--d)l.push(.5*(n[a-1]+n[a]));else l=f;return l.map(function(e){return g(e)[u]()})},g},null==v.scales&amp;&amp;(v.scales={}),v.scales.cool=function(){return v.scale([v.hsl(180,1,.9),v.hsl(250,.7,.4)])},v.scales.hot=function(){return v.scale([&quot;#000&quot;,&quot;#f00&quot;,&quot;#ff0&quot;,&quot;#fff&quot;],[0,.25,.75,1]).mode(&quot;rgb&quot;)},v.analyze=function(e,n,t){var r,a,f,c,u,o,i;if(u={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0},null==t&amp;&amp;(t=function(){return!0}),r=function(e){null==e||isNaN(e)||(u.values.push(e),u.sum+=e,e&lt;u.min&amp;&amp;(u.min=e),e&gt;u.max&amp;&amp;(u.max=e),u.count+=1)},i=function(e,a){return t(e,a)?r(null!=n&amp;&amp;&quot;function&quot;===we(n)?n(e):null!=n&amp;&amp;&quot;string&quot;===we(n)||&quot;number&quot;===we(n)?e[n]:e):void 0},&quot;array&quot;===we(e))for(c=0,f=e.length;f&gt;c;c++)o=e[c],i(o);else for(a in e)o=e[a],i(o,a);return u.domain=[u.min,u.max],u.limits=function(e,n){return v.limits(u,e,n)},u},v.limits=function(e,n,t){var r,a,f,c,u,o,i,l,s,b,h,p,g,m,y,w,x,M,_,k,O,N,A,P,j,B,q,E,R,S,C,Y,I,X,T,z,F,G,$,U,V,H,K,Q,W,ee,ne,te,re,ae,fe,ce,ue,oe,ie;if(null==n&amp;&amp;(n=&quot;equal&quot;),null==t&amp;&amp;(t=7),&quot;array&quot;===we(e)&amp;&amp;(e=v.analyze(e)),j=e.min,Z=e.max,fe=e.sum,oe=e.values.sort(function(e,n){return e-n}),A=[],&quot;c&quot;===n.substr(0,1)&amp;&amp;(A.push(j),A.push(Z)),&quot;e&quot;===n.substr(0,1)){for(A.push(j),k=C=1,T=t-1;T&gt;=1?T&gt;=C:C&gt;=T;k=T&gt;=1?++C:--C)A.push(j+k/t*(Z-j));A.push(Z)}else if(&quot;l&quot;===n.substr(0,1)){if(0&gt;=j)throw&quot;Logarithmic scales are only possible for values &gt; 0&quot;;for(B=Math.LOG10E*D(j),P=Math.LOG10E*D(Z),A.push(j),k=ie=1,z=t-1;z&gt;=1?z&gt;=ie:ie&gt;=z;k=z&gt;=1?++ie:--ie)A.push(J(10,B+k/t*(P-B)));A.push(Z)}else if(&quot;q&quot;===n.substr(0,1)){for(A.push(j),k=r=1,H=t-1;H&gt;=1?H&gt;=r:r&gt;=H;k=H&gt;=1?++r:--r)Y=oe.length*k/t,I=L(Y),I===Y?A.push(oe[I]):(X=Y-I,A.push(oe[I]*X+oe[I+1]*(1-X)));A.push(Z)}else if(&quot;k&quot;===n.substr(0,1)){for(E=oe.length,m=new Array(E),M=new Array(t),ae=!0,R=0,w=null,w=[],w.push(j),k=a=1,K=t-1;K&gt;=1?K&gt;=a:a&gt;=K;k=K&gt;=1?++a:--a)w.push(j+k/t*(Z-j));for(w.push(Z);ae;){for(O=f=0,Q=t-1;Q&gt;=0?Q&gt;=f:f&gt;=Q;O=Q&gt;=0?++f:--f)M[O]=0;for(k=c=0,W=E-1;W&gt;=0?W&gt;=c:c&gt;=W;k=W&gt;=0?++c:--c){for(ue=oe[k],q=Number.MAX_VALUE,O=u=0,ee=t-1;ee&gt;=0?ee&gt;=u:u&gt;=ee;O=ee&gt;=0?++u:--u)_=d(w[O]-ue),q&gt;_&amp;&amp;(q=_,y=O);M[y]++,m[k]=y}for(S=new Array(t),O=o=0,ne=t-1;ne&gt;=0?ne&gt;=o:o&gt;=ne;O=ne&gt;=0?++o:--o)S[O]=null;for(k=i=0,te=E-1;te&gt;=0?te&gt;=i:i&gt;=te;k=te&gt;=0?++i:--i)x=m[k],null===S[x]?S[x]=oe[k]:S[x]+=oe[k];for(O=l=0,re=t-1;re&gt;=0?re&gt;=l:l&gt;=re;O=re&gt;=0?++l:--l)S[O]*=1/M[O];for(ae=!1,O=s=0,F=t-1;F&gt;=0?F&gt;=s:s&gt;=F;O=F&gt;=0?++s:--s)if(S[O]!==w[k]){ae=!0;break}w=S,R++,R&gt;200&amp;&amp;(ae=!1)}for(N={},O=b=0,G=t-1;G&gt;=0?G&gt;=b:b&gt;=G;O=G&gt;=0?++b:--b)N[O]=[];for(k=h=0,$=E-1;$&gt;=0?$&gt;=h:h&gt;=$;k=$&gt;=0?++h:--h)x=m[k],N[x].push(oe[k]);for(ce=[],O=p=0,U=t-1;U&gt;=0?U&gt;=p:p&gt;=U;O=U&gt;=0?++p:--p)ce.push(N[O][0]),ce.push(N[O][N[O].length-1]);for(ce=ce.sort(function(e,n){return e-n}),A.push(ce[0]),k=g=1,V=ce.length-1;V&gt;=g;k=g+=2)isNaN(ce[k])||A.push(ce[k])}return A},P=function(e,n,t){var r,f,u,o;return r=xe(arguments),e=r[0],n=r[1],t=r[2],e/=360,1/3&gt;e?(f=(1-n)/3,o=(1+n*M(c*e)/M(a-c*e))/3,u=1-(f+o)):2/3&gt;e?(e-=1/3,o=(1-n)/3,u=(1+n*M(c*e)/M(a-c*e))/3,f=1-(o+u)):(e-=2/3,u=(1-n)/3,f=(1+n*M(c*e)/M(a-c*e))/3,o=1-(u+f)),o=$(t*o*3),u=$(t*u*3),f=$(t*f*3),[255*o,255*u,255*f,r.length&gt;3?r[3]:1]},re=function(){var e,n,t,r,a,f,u,o;return u=xe(arguments),f=u[0],n=u[1],e=u[2],c=2*Math.PI,f/=255,n/=255,e/=255,a=Math.min(f,n,e),r=(f+n+e)/3,o=1-a/r,0===o?t=0:(t=(f-n+(f-e))/2,t/=Math.sqrt((f-n)*(f-n)+(f-e)*(n-e)),t=Math.acos(t),e&gt;n&amp;&amp;(t=c-t),t/=c),[360*t,o,r]},v.hsi=function(){return function(e,n,t){t.prototype=e.prototype;var r=new t,a=e.apply(r,n);return Object(a)===a?a:r}(e,Oe.call(arguments).concat([&quot;hsi&quot;]),function(){})},i.hsi=P,e.prototype.hsi=function(){return re(this._rgb)},R=function(e,n,t,r){var a,f,c,u,o,i,l,d,s,b,h,p,g;return&quot;hsl&quot;===r?(p=e.hsl(),g=n.hsl()):&quot;hsv&quot;===r?(p=e.hsv(),g=n.hsv()):&quot;hsi&quot;===r?(p=e.hsi(),g=n.hsi()):(&quot;lch&quot;===r||&quot;hcl&quot;===r)&amp;&amp;(r=&quot;hcl&quot;,p=e.hcl(),g=n.hcl()),&quot;h&quot;===r.substr(0,1)&amp;&amp;(c=p[0],b=p[1],i=p[2],u=g[0],h=g[1],l=g[2]),isNaN(c)||isNaN(u)?isNaN(c)?isNaN(u)?f=Number.NaN:(f=u,1!==i&amp;&amp;0!==i||&quot;hsv&quot;===r||(s=h)):(f=c,1!==l&amp;&amp;0!==l||&quot;hsv&quot;===r||(s=b)):(a=u&gt;c&amp;&amp;u-c&gt;180?u-(c+360):c&gt;u&amp;&amp;c-u&gt;180?u+360-c:u-c,f=c+t*a),null==s&amp;&amp;(s=b+t*(h-b)),o=i+t*(l-i),d=v[r](f,s,o)},l=l.concat(function(){var e,n,t,r;for(t=[&quot;hsv&quot;,&quot;hsl&quot;,&quot;hsi&quot;,&quot;hcl&quot;,&quot;lch&quot;],r=[],n=0,e=t.length;e&gt;n;n++)V=t[n],r.push([V,R]);return r}()),C=function(e,n,t){var r,a;return r=e.num(),a=n.num(),v.num(r+(a-r)*t,&quot;num&quot;)},l.push([&quot;num&quot;,C]),S=function(n,t,r,a){var f,c,u;return c=n.lab(),u=t.lab(),f=new e(c[0]+r*(u[0]-c[0]),c[1]+r*(u[1]-c[1]),c[2]+r*(u[2]-c[2]),a)},l.push([&quot;lab&quot;,S])}.call(this),function(){function e(e){this._value=e}function n(e,n,t,r){var a,f,c=Math.pow(10,n);return f=(t(e*c)/c).toFixed(n),r&amp;&amp;(a=new RegExp(&quot;0{1,&quot;+r+&quot;}$&quot;),f=f.replace(a,&quot;&quot;)),f}function t(e,n,t){var r;return r=n.indexOf(&quot;$&quot;)&gt;-1?a(e,n,t):n.indexOf(&quot;%&quot;)&gt;-1?f(e,n,t):n.indexOf(&quot;:&quot;)&gt;-1?c(e,n):o(e._value,n,t)}function r(e,n){var t,r,a,f,c,o=n,i=[&quot;KB&quot;,&quot;MB&quot;,&quot;GB&quot;,&quot;TB&quot;,&quot;PB&quot;,&quot;EB&quot;,&quot;ZB&quot;,&quot;YB&quot;],l=!1;if(n.indexOf(&quot;:&quot;)&gt;-1)e._value=u(n);else if(n===g)e._value=0;else{for(&quot;.&quot;!==h[p].delimiters.decimal&amp;&amp;(n=n.replace(/\./g,&quot;&quot;).replace(h[p].delimiters.decimal,&quot;.&quot;)),t=new RegExp(&quot;[^a-zA-Z]&quot;+h[p].abbreviations.thousand+&quot;(?:\\)|(\\&quot;+h[p].currency.symbol+&quot;)?(?:\\))?)?$&quot;),r=new RegExp(&quot;[^a-zA-Z]&quot;+h[p].abbreviations.million+&quot;(?:\\)|(\\&quot;+h[p].currency.symbol+&quot;)?(?:\\))?)?$&quot;),a=new RegExp(&quot;[^a-zA-Z]&quot;+h[p].abbreviations.billion+&quot;(?:\\)|(\\&quot;+h[p].currency.symbol+&quot;)?(?:\\))?)?$&quot;),f=new RegExp(&quot;[^a-zA-Z]&quot;+h[p].abbreviations.trillion+&quot;(?:\\)|(\\&quot;+h[p].currency.symbol+&quot;)?(?:\\))?)?$&quot;),c=0;c&lt;=i.length&amp;&amp;!(l=n.indexOf(i[c])&gt;-1?Math.pow(1024,c+1):!1);c++);e._value=(l?l:1)*(o.match(t)?Math.pow(10,3):1)*(o.match(r)?Math.pow(10,6):1)*(o.match(a)?Math.pow(10,9):1)*(o.match(f)?Math.pow(10,12):1)*(n.indexOf(&quot;%&quot;)&gt;-1?.01:1)*((n.split(&quot;-&quot;).length+Math.min(n.split(&quot;(&quot;).length-1,n.split(&quot;)&quot;).length-1))%2?1:-1)*Number(n.replace(/[^0-9\.]+/g,&quot;&quot;)),e._value=l?Math.ceil(e._value):e._value}return e._value}function a(e,n,t){var r,a,f=n.indexOf(&quot;$&quot;),c=n.indexOf(&quot;(&quot;),u=n.indexOf(&quot;-&quot;),i=&quot;&quot;;return n.indexOf(&quot; $&quot;)&gt;-1?(i=&quot; &quot;,n=n.replace(&quot; $&quot;,&quot;&quot;)):n.indexOf(&quot;$ &quot;)&gt;-1?(i=&quot; &quot;,n=n.replace(&quot;$ &quot;,&quot;&quot;)):n=n.replace(&quot;$&quot;,&quot;&quot;),a=o(e._value,n,t),1&gt;=f?a.indexOf(&quot;(&quot;)&gt;-1||a.indexOf(&quot;-&quot;)&gt;-1?(a=a.split(&quot;&quot;),r=1,(c&gt;f||u&gt;f)&amp;&amp;(r=0),a.splice(r,0,h[p].currency.symbol+i),a=a.join(&quot;&quot;)):a=h[p].currency.symbol+i+a:a.indexOf(&quot;)&quot;)&gt;-1?(a=a.split(&quot;&quot;),a.splice(-1,0,i+h[p].currency.symbol),a=a.join(&quot;&quot;)):a=a+i+h[p].currency.symbol,a}function f(e,n,t){var r,a=&quot;&quot;,f=100*e._value;return n.indexOf(&quot; %&quot;)&gt;-1?(a=&quot; &quot;,n=n.replace(&quot; %&quot;,&quot;&quot;)):n=n.replace(&quot;%&quot;,&quot;&quot;),r=o(f,n,t),r.indexOf(&quot;)&quot;)&gt;-1?(r=r.split(&quot;&quot;),r.splice(-1,0,a+&quot;%&quot;),r=r.join(&quot;&quot;)):r=r+a+&quot;%&quot;,r}function c(e){var n=Math.floor(e._value/60/60),t=Math.floor((e._value-60*n*60)/60),r=Math.round(e._value-60*n*60-60*t);return n+&quot;:&quot;+(10&gt;t?&quot;0&quot;+t:t)+&quot;:&quot;+(10&gt;r?&quot;0&quot;+r:r)}function u(e){var n=e.split(&quot;:&quot;),t=0;return 3===n.length?(t+=60*Number(n[0])*60,t+=60*Number(n[1]),t+=Number(n[2])):2===n.length&amp;&amp;(t+=60*Number(n[0]),t+=Number(n[1])),Number(t)}function o(e,t,r){var a,f,c,u,o,i,l=!1,d=!1,s=!1,b=&quot;&quot;,m=!1,v=!1,y=!1,w=!1,x=!1,M=&quot;&quot;,_=&quot;&quot;,k=Math.abs(e),O=[&quot;B&quot;,&quot;KB&quot;,&quot;MB&quot;,&quot;GB&quot;,&quot;TB&quot;,&quot;PB&quot;,&quot;EB&quot;,&quot;ZB&quot;,&quot;YB&quot;],N=&quot;&quot;,L=!1;if(0===e&amp;&amp;null!==g)return g;if(t.indexOf(&quot;(&quot;)&gt;-1?(l=!0,t=t.slice(1,-1)):t.indexOf(&quot;+&quot;)&gt;-1&amp;&amp;(d=!0,t=t.replace(/\+/g,&quot;&quot;)),t.indexOf(&quot;a&quot;)&gt;-1&amp;&amp;(m=t.indexOf(&quot;aK&quot;)&gt;=0,v=t.indexOf(&quot;aM&quot;)&gt;=0,y=t.indexOf(&quot;aB&quot;)&gt;=0,w=t.indexOf(&quot;aT&quot;)&gt;=0,x=m||v||y||w,t.indexOf(&quot; a&quot;)&gt;-1?(b=&quot; &quot;,t=t.replace(&quot; a&quot;,&quot;&quot;)):t=t.replace(&quot;a&quot;,&quot;&quot;),k&gt;=Math.pow(10,12)&amp;&amp;!x||w?(b+=h[p].abbreviations.trillion,e/=Math.pow(10,12)):k&lt;Math.pow(10,12)&amp;&amp;k&gt;=Math.pow(10,9)&amp;&amp;!x||y?(b+=h[p].abbreviations.billion,e/=Math.pow(10,9)):k&lt;Math.pow(10,9)&amp;&amp;k&gt;=Math.pow(10,6)&amp;&amp;!x||v?(b+=h[p].abbreviations.million,e/=Math.pow(10,6)):(k&lt;Math.pow(10,6)&amp;&amp;k&gt;=Math.pow(10,3)&amp;&amp;!x||m)&amp;&amp;(b+=h[p].abbreviations.thousand,e/=Math.pow(10,3))),t.indexOf(&quot;b&quot;)&gt;-1)for(t.indexOf(&quot; b&quot;)&gt;-1?(M=&quot; &quot;,t=t.replace(&quot; b&quot;,&quot;&quot;)):t=t.replace(&quot;b&quot;,&quot;&quot;),c=0;c&lt;=O.length;c++)if(a=Math.pow(1024,c),f=Math.pow(1024,c+1),e&gt;=a&amp;&amp;f&gt;e){M+=O[c],a&gt;0&amp;&amp;(e/=a);break}return t.indexOf(&quot;o&quot;)&gt;-1&amp;&amp;(t.indexOf(&quot; o&quot;)&gt;-1?(_=&quot; &quot;,t=t.replace(&quot; o&quot;,&quot;&quot;)):t=t.replace(&quot;o&quot;,&quot;&quot;),_+=h[p].ordinal(e)),t.indexOf(&quot;[.]&quot;)&gt;-1&amp;&amp;(s=!0,t=t.replace(&quot;[.]&quot;,&quot;.&quot;)),u=e.toString().split(&quot;.&quot;)[0],o=t.split(&quot;.&quot;)[1],i=t.indexOf(&quot;,&quot;),o?(o.indexOf(&quot;[&quot;)&gt;-1?(o=o.replace(&quot;]&quot;,&quot;&quot;),o=o.split(&quot;[&quot;),N=n(e,o[0].length+o[1].length,r,o[1].length)):N=n(e,o.length,r),u=N.split(&quot;.&quot;)[0],N=N.split(&quot;.&quot;)[1].length?h[p].delimiters.decimal+N.split(&quot;.&quot;)[1]:&quot;&quot;,s&amp;&amp;0===Number(N.slice(1))&amp;&amp;(N=&quot;&quot;)):u=n(e,null,r),u.indexOf(&quot;-&quot;)&gt;-1&amp;&amp;(u=u.slice(1),L=!0),i&gt;-1&amp;&amp;(u=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,&quot;$1&quot;+h[p].delimiters.thousands)),0===t.indexOf(&quot;.&quot;)&amp;&amp;(u=&quot;&quot;),(l&amp;&amp;L?&quot;(&quot;:&quot;&quot;)+(!l&amp;&amp;L?&quot;-&quot;:&quot;&quot;)+(!L&amp;&amp;d?&quot;+&quot;:&quot;&quot;)+u+N+(_?_:&quot;&quot;)+(b?b:&quot;&quot;)+(M?M:&quot;&quot;)+(l&amp;&amp;L?&quot;)&quot;:&quot;&quot;)}function i(e,n){h[e]=n}function l(e){var n=e.toString().split(&quot;.&quot;);return n.length&lt;2?1:Math.pow(10,n[1].length)}function d(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,n){var t=l(e),r=l(n);return t&gt;r?t:r},-1/0)}var s,b=&quot;1.5.3&quot;,h={},p=&quot;en&quot;,g=null,m=&quot;0,0&quot;,v=&quot;undefined&quot;!=typeof module&amp;&amp;module.exports;s=function(n){return s.isNumeral(n)?n=n.value():0===n||&quot;undefined&quot;==typeof n?n=0:Number(n)||(n=s.fn.unformat(n)),new e(Number(n))},s.version=b,s.isNumeral=function(n){return n instanceof e},s.language=function(e,n){if(!e)return p;if(e&amp;&amp;!n){if(!h[e])throw new Error(&quot;Unknown language : &quot;+e);p=e}return(n||!h[e])&amp;&amp;i(e,n),s},s.languageData=function(e){if(!e)return h[p];if(!h[e])throw new Error(&quot;Unknown language : &quot;+e);return h[e]},s.language(&quot;en&quot;,{delimiters:{thousands:&quot;,&quot;,decimal:&quot;.&quot;},abbreviations:{thousand:&quot;k&quot;,million:&quot;m&quot;,billion:&quot;b&quot;,trillion:&quot;t&quot;},ordinal:function(e){var n=e%10;return 1===~~(e%100/10)?&quot;th&quot;:1===n?&quot;st&quot;:2===n?&quot;nd&quot;:3===n?&quot;rd&quot;:&quot;th&quot;},currency:{symbol:&quot;$&quot;}}),s.zeroFormat=function(e){g=&quot;string&quot;==typeof e?e:null},s.defaultFormat=function(e){m=&quot;string&quot;==typeof e?e:&quot;0.0&quot;},&quot;function&quot;!=typeof Array.prototype.reduce&amp;&amp;(Array.prototype.reduce=function(e,n){if(null===this||&quot;undefined&quot;==typeof this)throw new TypeError(&quot;Array.prototype.reduce called on null or undefined&quot;);if(&quot;function&quot;!=typeof e)throw new TypeError(e+&quot; is not a function&quot;);var t,r,a=this.length&gt;&gt;&gt;0,f=!1;for(1&lt;arguments.length&amp;&amp;(r=n,f=!0),t=0;a&gt;t;++t)this.hasOwnProperty(t)&amp;&amp;(f?r=e(r,this[t],t,this):(r=this[t],f=!0));if(!f)throw new TypeError(&quot;Reduce of empty array with no initial value&quot;);return r}),s.fn=e.prototype={clone:function(){return s(this)},format:function(e,n){return t(this,e?e:m,void 0!==n?n:Math.round)},unformat:function(e){return&quot;[object Number]&quot;===Object.prototype.toString.call(e)?e:r(this,e?e:m)},value:function(){return this._value},valueOf:function(){return this._value},set:function(e){return this._value=Number(e),this},add:function(e){function n(e,n){return e+t*n}var t=d.call(null,this._value,e);return this._value=[this._value,e].reduce(n,0)/t,this},subtract:function(e){function n(e,n){return e-t*n}var t=d.call(null,this._value,e);return this._value=[e].reduce(n,this._value*t)/t,this},multiply:function(e){function n(e,n){var t=d(e,n);return e*t*n*t/(t*t)}return this._value=[this._value,e].reduce(n,1),this},divide:function(e){function n(e,n){var t=d(e,n);return e*t/(n*t)}return this._value=[this._value,e].reduce(n),this},difference:function(e){return Math.abs(s(this._value).subtract(e).value())}},v&amp;&amp;(module.exports=s),</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">&quot;undefined&quot;==typeof ender&amp;&amp;(this.numeral=s),&quot;function&quot;==typeof define&amp;&amp;define.amd&amp;&amp;define([],function(){return s})}.call(this),L.BubbleLayer=(L.Layer?L.Layer:L.Class).extend({initialize:function(e,n){console.log(&quot;initalized: &quot;,n,e),this._geojson=e,n.max_radius=n.hasOwnProperty(&quot;max_radius&quot;)?n.max_radius:35,n.legend=n.hasOwnProperty(&quot;legend&quot;)?n.legend:!0,n.tooltip=n.hasOwnProperty(&quot;tooltip&quot;)?n.tooltip:!0,n.scale=n.hasOwnProperty(&quot;scale&quot;)?n.scale:!1,n.style=n.hasOwnProperty(&quot;style&quot;)?n.style:{radius:10,fillColor:&quot;#74acb8&quot;,color:&quot;#555&quot;,weight:1,opacity:.5,fillOpacity:.5},L.setOptions(this,n);var t=this._hasRequiredProp(this.options.property);if(!t)throw&quot;Error: you must provide an amount property that is include in every GeoJSON feature&quot;},addTo:function(e){return e.addLayer(this),this},onAdd:function(e){this._map=e;var n=this.createLayer();this._layer=n,e.addLayer(n),this.options.tooltip&amp;&amp;this.showTooltip(n),this.options.legend&amp;&amp;this.showLegend(this._scale,this._max)},createLayer:function(){var e=this._getMax(this._geojson),n=3*Math.PI*3,t=Math.PI*this.options.max_radius*this.options.max_radius,r=d3_scale.scaleLinear().domain([0,e]).range([n,t]),a=d3_scale.scaleLinear().domain([0,e]).range([0,1]);this._scale=r,this._normal=a,this._max=e;var f=this.options.property,c=this.options.style,u=!1;return this.options.scale&amp;&amp;(u=chroma.scale(this.options.scale)),new L.geoJson(this._geojson,{pointToLayer:function(e,n){var t=e.properties[f],o=r(t),i=Math.sqrt(o/Math.PI);c.radius=i,u&amp;&amp;(c.fillColor=u(a(t))),c.color=chroma(c.fillColor).darken().hex();var l=L.circleMarker(n,c);return l}})},onRemove:function(e){this._map=e,e.removeLayer(this._layer)},showLegend:function(e,n){var t=L.control({position:&quot;bottomright&quot;}),r=this.options.max_radius,a=this.options.style.fillColor,f=!1,c=this.options.style.opacity,u=d3_scale.scaleLinear().domain([0,n]).range([0,1]);this.options.scale&amp;&amp;(f=chroma.scale(this.options.scale)),t.onAdd=function(){var t=L.DomUtil.create(&quot;div&quot;,&quot;info legend&quot;);t.innerHTML+=&quot;&lt;strong&gt;&quot;+bubbles.options.property+&quot;&lt;/strong&gt;&lt;br/&gt;&quot;,t.style=&quot;background-color: #FFF; padding: 8px; font-size: 14px; text-transform: capitalize&quot;;for(var o=3;o&gt;0;o--){var i=e(n/o/2),l=Math.sqrt(i/Math.PI),d=L.DomUtil.create(&quot;div&quot;,&quot;bubble&quot;);f&amp;&amp;(a=f(u(n/o))),d.innerHTML=&#39;&lt;svg height=&quot;&#39;+2*r+&#39;&quot; width=&quot;&#39;+(2*r-r/2)+&#39;&quot;&gt;&lt;circle cx=&quot;&#39;+(l+1)+&#39;&quot; cy=&quot;&#39;+r+&#39;&quot; r=&quot;&#39;+l+&#39;&quot; stroke=&quot;&#39;+chroma(a).darken().hex()+&#39;&quot; stroke-width=&quot;1&quot; opacity=&quot;&#39;+c+&#39;&quot; fill=&quot;&#39;+a+&#39;&quot; /&gt;&lt;text font-size=&quot;11&quot; text-anchor=&quot;middle&quot; x=&quot;&#39;+l+&#39;&quot; y=&quot;&#39;+2*r+&#39;&quot; fill=&quot;#AAA&quot;&gt;&#39;+numeral(n/o).format(&quot;0 a&quot;),d.style=&quot;float:left; width: &quot;+l+&quot;;&quot;,t.appendChild(d)}return t},t.addTo(map)},showTooltip:function(e){e.on(&quot;mouseover&quot;,function(e){var n=&quot;&quot;,t=e.layer.feature.properties;for(var r in t)t.hasOwnProperty(r)&amp;&amp;(n+=&quot;&lt;strong&gt;&quot;+r+&quot;&lt;/strong&gt;: &quot;+t[r]+&quot;&lt;/br&gt;&quot;);e.layer.bindPopup(n),e.layer.openPopup()}),e.on(&quot;mouseout&quot;,function(e){e.layer.closePopup()})},_getMax:function(){for(var e=0,n=this._geojson.features,t=this.options.property,r=0;r&lt;n.length;r++)n[r].properties[t]&gt;e&amp;&amp;(e=n[r].properties[t]);return e},_hasRequiredProp:function(e){for(var n=!0,t=this._geojson.features,r=0;r&lt;t.length;r++)t[r].properties.hasOwnProperty(e)!==!0&amp;&amp;(n=!1);return n}}),L.bubbleLayer=function(e,n){return new L.BubbleLayer(e,n)};</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.13461s from github-fe-54106a2.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-c3IPAnuzF/zrEYwlknXaS+Xvo0TCRqEjQaaMMWjO6qc=" src="https://assets-cdn.github.com/assets/frameworks-73720f027bb317fceb118c259275da4be5efa344c246a12341a68c3168ceeaa7.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-RxzCT0EPRethTgXhTxGeeueFEqdaNXksnP1uIDJytlg=" src="https://assets-cdn.github.com/assets/github-471cc24f410f45eb614e05e14f119e7ae78512a75a35792c9cfd6e203272b658.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

