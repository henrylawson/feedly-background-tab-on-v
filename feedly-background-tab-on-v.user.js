// ==UserScript==
// @name            Feedly Background Tab on V
// @description     A simple userscript to background tabs on v
// @icon            https://github.com/henrylawson/feedly-background-tab-on-v/raw/master/feedly-background-tab-on-v.user.jpg
//
// @author          Henry Lawson
// @namespace       https://github.com/henrylawson/feedly-background-tab-on-v
// @downloadURL     https://github.com/henrylawson/feedly-background-tab-on-v/raw/master/feedly-background-tab-on-v.user.js
//
// @match           https://feedly.com/*
// @match           http://feedly.com/*
//
// @version         1.0
// @updateURL       https://github.com/henrylawson/feedly-background-tab-on-v/raw/master/feedly-background-tab-on-v.user.js
// @grant           GM_openInTab
// ==/UserScript==

/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var x;
var link;

document.addEventListener('keypress', function(event) {
  var vKey = 118;
  if (event.which == vKey) {
    x = document.getElementsByClassName('selectedEntry');
    if (x == null){
      return;
    }
    link = x[0].getAttribute('data-alternate-link');
    event.stopPropagation();
    event.preventDefault();
    GM_openInTab(link, { active: false });
  }
}, true);
