import { football_game } from "./../football/2.0.3/library/game.js";
import { football_games } from "./../football/2.0.3/library/games.js";
import { football_standings } from "./../football/2.0.3/library/standings.js";
import { baseball_game } from "./../baseball/2.0.3/library/game.js";
import { baseball_games } from "./../baseball/2.0.3/library/games.js";
import { baseball_standings } from "./../baseball/2.0.3/library/standings.js";
import { basketball_game } from "./../basketball/2.0.3/library/game.js";
import { basketball_games } from "./../basketball/2.0.3/library/games.js";
import { basketball_standings } from "./../basketball/2.0.3/library/standings.js";
import { handball_game } from "./../handball/2.0.3/library/game.js";
import { handball_games } from "./../handball/2.0.3/library/games.js";
import { handball_standings } from "./../handball/2.0.3/library/standings.js";
import { hockey_game } from "./../hockey/2.0.3/library/game.js";
import { hockey_games } from "./../hockey/2.0.3/library/games.js";
import { hockey_standings } from "./../hockey/2.0.3/library/standings.js";
import { rugby_game } from "./../rugby/2.0.3/library/game.js";
import { rugby_games } from "./../rugby/2.0.3/library/games.js";
import { rugby_standings } from "./../rugby/2.0.3/library/standings.js";
import { volleyball_game } from "./../volleyball/2.0.3/library/game.js";
import { volleyball_games } from "./../volleyball/2.0.3/library/games.js";
import { volleyball_standings } from "./../volleyball/2.0.3/library/standings.js";
window.addEventListener("DOMContentLoaded", () => {
  let t, a, e, s, d, l, r, n, g, o, i, b, c, u;
  if (document.getElementById("wg-api-football-games")) {
    let t = "football";
    const e = document.getElementById("wg-api-" + t + "-games");
    let s = e.getAttribute("data-key"),
      d = e.getAttribute("data-host"),
      l = e.getAttribute("data-theme"),
      r = e.getAttribute("data-date"),
      n = e.getAttribute("data-league"),
      g = e.getAttribute("data-season"),
      o = e.getAttribute("data-show-toolbar"),
      i = e.getAttribute("data-show-errors"),
      b = e.getAttribute("data-show-logos"),
      c = e.getAttribute("data-modal-game"),
      u = e.getAttribute("data-modal-standings"),
      $ = parseInt(1e3 * e.getAttribute("data-refresh"));
    if ((w(l), "" === r && "" === n && "" === g)) {
      let t = new Date(),
        a = String(t.getDate()).padStart(2, "0"),
        e = String(t.getMonth() + 1).padStart(2, "0"),
        s = t.getFullYear();
      r = s + "-" + e + "-" + a;
    }
    let h = m(7, "-"),
      f = m(6, "-"),
      _ = m(5, "-"),
      A = m(4, "-"),
      v = m(3, "-"),
      y = m(2, "-"),
      I = m(1, "-"),
      E = m(0, "+"),
      L = m(1, "+"),
      k = m(2, "+"),
      B = m(3, "+"),
      S = m(4, "+"),
      N = m(5, "+"),
      D = m(6, "+"),
      T = m(7, "+"),
      H = `\n            <div id="wg-${t}-toolbar" class="wg_toolbar">\n                <span class="wg_button_toggle wg_active" data-select="all" data-sport="${t}">ALL</span>\n                <span class="wg_button_toggle" data-select="live" data-sport="${t}">LIVE</span>\n                <span class="wg_button_toggle" data-select="finished" data-sport="${t}">FINISHED</span>\n                <span class="wg_button_toggle" data-select="scheduled" data-sport="${t}">SCHEDULED</span>\n                <span class="wg-dropdown">\n                    <span class="wg-dropbtn" id="wg-${t}-dropbtn">${E}</span>\n                    <div class="wg-dropdown-content">\n                        <a href="#" data-date="${h}" class="wg-date" data-sport="${t}">${h}</a>\n                        <a href="#" data-date="${f}" class="wg-date" data-sport="${t}">${f}</a>\n                        <a href="#" data-date="${_}" class="wg-date" data-sport="${t}">${_}</a>\n                        <a href="#" data-date="${A}" class="wg-date" data-sport="${t}">${A}</a>\n                        <a href="#" data-date="${v}" class="wg-date" data-sport="${t}">${v}</a>\n                        <a href="#" data-date="${y}" class="wg-date" data-sport="${t}">${y}</a>\n                        <a href="#" data-date="${I}" class="wg-date" data-sport="${t}">${I}</a>\n                        <a href="#" data-date="${E}" class="wg-date wg-dropdown-color-select" data-sport="${t}">TODAY</a>\n                        <a href="#" data-date="${L}" class="wg-date" data-sport="${t}">${L}</a>\n                        <a href="#" data-date="${k}" class="wg-date" data-sport="${t}">${k}</a>\n                        <a href="#" data-date="${B}" class="wg-date" data-sport="${t}">${B}</a>\n                        <a href="#" data-date="${S}" class="wg-date" data-sport="${t}">${S}</a>\n                        <a href="#" data-date="${N}" class="wg-date" data-sport="${t}">${N}</a>\n                        <a href="#" data-date="${D}" class="wg-date" data-sport="${t}">${D}</a>\n                        <a href="#" data-date="${T}" class="wg-date" data-sport="${t}">${T}</a>\n                    </div>\n                </span>\n            </div>\n            <div id="wg-${t}-data" class="wg_loader"></div>\n        `;
    "false" === o &&
      (H = `\n                <div id="wg-${t}-data" class="wg_loader"></div>\n            `),
      (e.innerHTML = H),
      football_games(r, n, g, s, d, i, b, c, u),
      $ >= 15 &&
        Number.isInteger($) &&
        (a = setInterval(function () {
          football_games(r, n, g, s, d, i, b, c, u), p(t);
        }, $));
  }
  if (document.getElementById("wg-api-football-game")) {
    let a = "football";
    const e = document.getElementById("wg-api-" + a + "-game");
    let s = e.getAttribute("data-key"),
      d = e.getAttribute("data-host"),
      l = e.getAttribute("data-theme"),
      r = e.getAttribute("data-id"),
      n = e.getAttribute("data-show-errors"),
      g = e.getAttribute("data-show-logos"),
      o = parseInt(1e3 * e.getAttribute("data-refresh"));
    w(l),
      football_game(r, s, d, n, g, !1),
      o >= 15 &&
        Number.isInteger(o) &&
        (t = setInterval(function () {
          football_game(r, s, d, n, g, !1);
        }, o));
  }
  if (document.getElementById("wg-api-football-standings")) {
    const t = document.getElementById("wg-api-football-standings");
    let a = t.getAttribute("data-key"),
      e = t.getAttribute("data-host"),
      s = t.getAttribute("data-theme"),
      d = t.getAttribute("data-league"),
      l = t.getAttribute("data-team"),
      r = t.getAttribute("data-season"),
      n = t.getAttribute("data-show-errors"),
      g = t.getAttribute("data-show-logos");
    w(s), football_standings(d, r, l, a, e, n, g, !1);
  }
  if (document.getElementById("wg-api-baseball-games")) {
    let t = "baseball";
    const a = document.getElementById("wg-api-" + t + "-games");
    let e = a.getAttribute("data-key"),
      d = a.getAttribute("data-host"),
      l = a.getAttribute("data-theme"),
      r = a.getAttribute("data-date"),
      n = a.getAttribute("data-league"),
      g = a.getAttribute("data-season"),
      o = a.getAttribute("data-show-toolbar"),
      i = a.getAttribute("data-show-errors"),
      b = a.getAttribute("data-show-logos"),
      c = a.getAttribute("data-modal-game"),
      u = a.getAttribute("data-modal-standings"),
      $ = parseInt(1e3 * a.getAttribute("data-refresh"));
    if ((w(l), "" === r && "" === n && "" === g)) {
      let t = new Date(),
        a = String(t.getDate()).padStart(2, "0"),
        e = String(t.getMonth() + 1).padStart(2, "0"),
        s = t.getFullYear();
      r = s + "-" + e + "-" + a;
    }
    let h = m(7, "-"),
      f = m(6, "-"),
      _ = m(5, "-"),
      A = m(4, "-"),
      v = m(3, "-"),
      y = m(2, "-"),
      I = m(1, "-"),
      E = m(0, "+"),
      L = m(1, "+"),
      k = m(2, "+"),
      B = m(3, "+"),
      S = m(4, "+"),
      N = m(5, "+"),
      D = m(6, "+"),
      T = m(7, "+"),
      H = `\n            <div id="wg-${t}-toolbar" class="wg_toolbar">\n                <span class="wg_button_toggle wg_active" data-select="all" data-sport="${t}">ALL</span>\n                <span class="wg_button_toggle" data-select="live" data-sport="${t}">LIVE</span>\n                <span class="wg_button_toggle" data-select="finished" data-sport="${t}">FINISHED</span>\n                <span class="wg_button_toggle" data-select="scheduled" data-sport="${t}">SCHEDULED</span>\n                <span class="wg-dropdown">\n                    <span class="wg-dropbtn" id="wg-${t}-dropbtn">${E}</span>\n                    <div class="wg-dropdown-content">\n                        <a href="#" data-date="${h}" class="wg-date" data-sport="${t}">${h}</a>\n                        <a href="#" data-date="${f}" class="wg-date" data-sport="${t}">${f}</a>\n                        <a href="#" data-date="${_}" class="wg-date" data-sport="${t}">${_}</a>\n                        <a href="#" data-date="${A}" class="wg-date" data-sport="${t}">${A}</a>\n                        <a href="#" data-date="${v}" class="wg-date" data-sport="${t}">${v}</a>\n                        <a href="#" data-date="${y}" class="wg-date" data-sport="${t}">${y}</a>\n                        <a href="#" data-date="${I}" class="wg-date" data-sport="${t}">${I}</a>\n                        <a href="#" data-date="${E}" class="wg-date wg-dropdown-color-select" data-sport="${t}">TODAY</a>\n                        <a href="#" data-date="${L}" class="wg-date" data-sport="${t}">${L}</a>\n                        <a href="#" data-date="${k}" class="wg-date" data-sport="${t}">${k}</a>\n                        <a href="#" data-date="${B}" class="wg-date" data-sport="${t}">${B}</a>\n                        <a href="#" data-date="${S}" class="wg-date" data-sport="${t}">${S}</a>\n                        <a href="#" data-date="${N}" class="wg-date" data-sport="${t}">${N}</a>\n                        <a href="#" data-date="${D}" class="wg-date" data-sport="${t}">${D}</a>\n                        <a href="#" data-date="${T}" class="wg-date" data-sport="${t}">${T}</a>\n                    </div>\n                </span>\n            </div>\n            <div id="wg-${t}-data" class="wg_loader"></div>\n        `;
    "false" === o &&
      (H = `\n                <div id="wg-${t}-data" class="wg_loader"></div>\n            `),
      (a.innerHTML = H),
      baseball_games(r, n, g, e, d, i, b, c, u),
      $ >= 15 &&
        Number.isInteger($) &&
        (s = setInterval(function () {
          baseball_games(r, n, g, e, d, i, b, c, u), p(t);
        }, $));
  }
  if (document.getElementById("wg-api-baseball-standings")) {
    const t = document.getElementById("wg-api-baseball-standings");
    let a = t.getAttribute("data-key"),
      e = t.getAttribute("data-host"),
      s = t.getAttribute("data-theme"),
      d = t.getAttribute("data-league"),
      l = t.getAttribute("data-season"),
      r = t.getAttribute("data-show-errors"),
      n = t.getAttribute("data-show-logos");
    w(s), baseball_standings(d, l, a, e, r, n, !1);
  }
  if (document.getElementById("wg-api-basketball-games")) {
    let t = "basketball";
    const a = document.getElementById("wg-api-" + t + "-games");
    let e = a.getAttribute("data-key"),
      s = a.getAttribute("data-host"),
      d = a.getAttribute("data-theme"),
      r = a.getAttribute("data-date"),
      n = a.getAttribute("data-league"),
      g = a.getAttribute("data-season"),
      o = a.getAttribute("data-show-toolbar"),
      i = a.getAttribute("data-show-errors"),
      b = a.getAttribute("data-show-logos"),
      c = a.getAttribute("data-modal-game"),
      u = a.getAttribute("data-modal-standings"),
      $ = parseInt(1e3 * a.getAttribute("data-refresh"));
    if ((w(d), "" === r && "" === n && "" === g)) {
      let t = new Date(),
        a = String(t.getDate()).padStart(2, "0"),
        e = String(t.getMonth() + 1).padStart(2, "0"),
        s = t.getFullYear();
      r = s + "-" + e + "-" + a;
    }
    let h = m(7, "-"),
      f = m(6, "-"),
      _ = m(5, "-"),
      A = m(4, "-"),
      v = m(3, "-"),
      y = m(2, "-"),
      I = m(1, "-"),
      E = m(0, "+"),
      L = m(1, "+"),
      k = m(2, "+"),
      B = m(3, "+"),
      S = m(4, "+"),
      N = m(5, "+"),
      D = m(6, "+"),
      T = m(7, "+"),
      H = `\n            <div id="wg-${t}-toolbar" class="wg_toolbar">\n                <span class="wg_button_toggle wg_active" data-select="all" data-sport="${t}">ALL</span>\n                <span class="wg_button_toggle" data-select="live" data-sport="${t}">LIVE</span>\n                <span class="wg_button_toggle" data-select="finished" data-sport="${t}">FINISHED</span>\n                <span class="wg_button_toggle" data-select="scheduled" data-sport="${t}">SCHEDULED</span>\n                <span class="wg-dropdown">\n                    <span class="wg-dropbtn" id="wg-${t}-dropbtn">${E}</span>\n                    <div class="wg-dropdown-content">\n                        <a href="#" data-date="${h}" class="wg-date" data-sport="${t}">${h}</a>\n                        <a href="#" data-date="${f}" class="wg-date" data-sport="${t}">${f}</a>\n                        <a href="#" data-date="${_}" class="wg-date" data-sport="${t}">${_}</a>\n                        <a href="#" data-date="${A}" class="wg-date" data-sport="${t}">${A}</a>\n                        <a href="#" data-date="${v}" class="wg-date" data-sport="${t}">${v}</a>\n                        <a href="#" data-date="${y}" class="wg-date" data-sport="${t}">${y}</a>\n                        <a href="#" data-date="${I}" class="wg-date" data-sport="${t}">${I}</a>\n                        <a href="#" data-date="${E}" class="wg-date wg-dropdown-color-select" data-sport="${t}">TODAY</a>\n                        <a href="#" data-date="${L}" class="wg-date" data-sport="${t}">${L}</a>\n                        <a href="#" data-date="${k}" class="wg-date" data-sport="${t}">${k}</a>\n                        <a href="#" data-date="${B}" class="wg-date" data-sport="${t}">${B}</a>\n                        <a href="#" data-date="${S}" class="wg-date" data-sport="${t}">${S}</a>\n                        <a href="#" data-date="${N}" class="wg-date" data-sport="${t}">${N}</a>\n                        <a href="#" data-date="${D}" class="wg-date" data-sport="${t}">${D}</a>\n                        <a href="#" data-date="${T}" class="wg-date" data-sport="${t}">${T}</a>\n                    </div>\n                </span>\n            </div>\n            <div id="wg-${t}-data" class="wg_loader"></div>\n        `;
    "false" === o &&
      (H = `\n                <div id="wg-${t}-data" class="wg_loader"></div>\n            `),
      (a.innerHTML = H),
      basketball_games(r, n, g, e, s, i, b, c, u),
      $ >= 15 &&
        Number.isInteger($) &&
        (l = setInterval(function () {
          basketball_games(r, n, g, e, s, i, b, c, u), p(t);
        }, $));
  }
  if (document.getElementById("wg-api-basketball-standings")) {
    const t = document.getElementById("wg-api-basketball-standings");
    let a = t.getAttribute("data-key"),
      e = t.getAttribute("data-host"),
      s = t.getAttribute("data-theme"),
      d = t.getAttribute("data-league"),
      l = t.getAttribute("data-season"),
      r = t.getAttribute("data-show-errors"),
      n = t.getAttribute("data-show-logos");
    w(s), basketball_standings(d, l, a, e, r, n, !1);
  }
  if (document.getElementById("wg-api-handball-games")) {
    let t = "handball";
    const a = document.getElementById("wg-api-" + t + "-games");
    let e = a.getAttribute("data-key"),
      s = a.getAttribute("data-host"),
      d = a.getAttribute("data-theme"),
      l = a.getAttribute("data-date"),
      r = a.getAttribute("data-league"),
      g = a.getAttribute("data-season"),
      o = a.getAttribute("data-show-toolbar"),
      i = a.getAttribute("data-show-errors"),
      b = a.getAttribute("data-show-logos"),
      c = a.getAttribute("data-modal-game"),
      u = a.getAttribute("data-modal-standings"),
      $ = parseInt(1e3 * a.getAttribute("data-refresh"));
    if ((w(d), "" === l && "" === r && "" === g)) {
      let t = new Date(),
        a = String(t.getDate()).padStart(2, "0"),
        e = String(t.getMonth() + 1).padStart(2, "0"),
        s = t.getFullYear();
      l = s + "-" + e + "-" + a;
    }
    let h = m(7, "-"),
      f = m(6, "-"),
      _ = m(5, "-"),
      A = m(4, "-"),
      v = m(3, "-"),
      y = m(2, "-"),
      I = m(1, "-"),
      E = m(0, "+"),
      L = m(1, "+"),
      k = m(2, "+"),
      B = m(3, "+"),
      S = m(4, "+"),
      N = m(5, "+"),
      D = m(6, "+"),
      T = m(7, "+"),
      H = `\n            <div id="wg-${t}-toolbar" class="wg_toolbar">\n                <span class="wg_button_toggle wg_active" data-select="all" data-sport="${t}">ALL</span>\n                <span class="wg_button_toggle" data-select="live" data-sport="${t}">LIVE</span>\n                <span class="wg_button_toggle" data-select="finished" data-sport="${t}">FINISHED</span>\n                <span class="wg_button_toggle" data-select="scheduled" data-sport="${t}">SCHEDULED</span>\n                <span class="wg-dropdown">\n                    <span class="wg-dropbtn" id="wg-${t}-dropbtn">${E}</span>\n                    <div class="wg-dropdown-content">\n                        <a href="#" data-date="${h}" class="wg-date" data-sport="${t}">${h}</a>\n                        <a href="#" data-date="${f}" class="wg-date" data-sport="${t}">${f}</a>\n                        <a href="#" data-date="${_}" class="wg-date" data-sport="${t}">${_}</a>\n                        <a href="#" data-date="${A}" class="wg-date" data-sport="${t}">${A}</a>\n                        <a href="#" data-date="${v}" class="wg-date" data-sport="${t}">${v}</a>\n                        <a href="#" data-date="${y}" class="wg-date" data-sport="${t}">${y}</a>\n                        <a href="#" data-date="${I}" class="wg-date" data-sport="${t}">${I}</a>\n                        <a href="#" data-date="${E}" class="wg-date wg-dropdown-color-select" data-sport="${t}">TODAY</a>\n                        <a href="#" data-date="${L}" class="wg-date" data-sport="${t}">${L}</a>\n                        <a href="#" data-date="${k}" class="wg-date" data-sport="${t}">${k}</a>\n                        <a href="#" data-date="${B}" class="wg-date" data-sport="${t}">${B}</a>\n                        <a href="#" data-date="${S}" class="wg-date" data-sport="${t}">${S}</a>\n                        <a href="#" data-date="${N}" class="wg-date" data-sport="${t}">${N}</a>\n                        <a href="#" data-date="${D}" class="wg-date" data-sport="${t}">${D}</a>\n                        <a href="#" data-date="${T}" class="wg-date" data-sport="${t}">${T}</a>\n                    </div>\n                </span>\n            </div>\n            <div id="wg-${t}-data" class="wg_loader"></div>\n        `;
    "false" === o &&
      (H = `\n                <div id="wg-${t}-data" class="wg_loader"></div>\n            `),
      (a.innerHTML = H),
      handball_games(l, r, g, e, s, i, b, c, u),
      $ >= 15 &&
        Number.isInteger($) &&
        (n = setInterval(function () {
          handball_games(l, r, g, e, s, i, b, c, u), p(t);
        }, $));
  }
  if (document.getElementById("wg-api-handball-standings")) {
    const t = document.getElementById("wg-api-handball-standings");
    let a = t.getAttribute("data-key"),
      e = t.getAttribute("data-host"),
      s = t.getAttribute("data-theme"),
      d = t.getAttribute("data-league"),
      l = t.getAttribute("data-season"),
      r = t.getAttribute("data-show-errors"),
      n = t.getAttribute("data-show-logos");
    w(s), handball_standings(d, l, a, e, r, n, !1);
  }
  if (document.getElementById("wg-api-hockey-games")) {
    let t = "hockey";
    const a = document.getElementById("wg-api-" + t + "-games");
    let e = a.getAttribute("data-key"),
      s = a.getAttribute("data-host"),
      d = a.getAttribute("data-theme"),
      l = a.getAttribute("data-date"),
      r = a.getAttribute("data-league"),
      n = a.getAttribute("data-season"),
      g = a.getAttribute("data-show-toolbar"),
      i = a.getAttribute("data-show-errors"),
      b = a.getAttribute("data-show-logos"),
      c = a.getAttribute("data-modal-game"),
      u = a.getAttribute("data-modal-standings"),
      $ = parseInt(1e3 * a.getAttribute("data-refresh"));
    if ((w(d), "" === l && "" === r && "" === n)) {
      let t = new Date(),
        a = String(t.getDate()).padStart(2, "0"),
        e = String(t.getMonth() + 1).padStart(2, "0"),
        s = t.getFullYear();
      l = s + "-" + e + "-" + a;
    }
    let h = m(7, "-"),
      f = m(6, "-"),
      _ = m(5, "-"),
      A = m(4, "-"),
      v = m(3, "-"),
      y = m(2, "-"),
      I = m(1, "-"),
      E = m(0, "+"),
      L = m(1, "+"),
      k = m(2, "+"),
      B = m(3, "+"),
      S = m(4, "+"),
      N = m(5, "+"),
      D = m(6, "+"),
      T = m(7, "+"),
      H = `\n            <div id="wg-${t}-toolbar" class="wg_toolbar">\n                <span class="wg_button_toggle wg_active" data-select="all" data-sport="${t}">ALL</span>\n                <span class="wg_button_toggle" data-select="live" data-sport="${t}">LIVE</span>\n                <span class="wg_button_toggle" data-select="finished" data-sport="${t}">FINISHED</span>\n                <span class="wg_button_toggle" data-select="scheduled" data-sport="${t}">SCHEDULED</span>\n                <span class="wg-dropdown">\n                    <span class="wg-dropbtn" id="wg-${t}-dropbtn">${E}</span>\n                    <div class="wg-dropdown-content">\n                        <a href="#" data-date="${h}" class="wg-date" data-sport="${t}">${h}</a>\n                        <a href="#" data-date="${f}" class="wg-date" data-sport="${t}">${f}</a>\n                        <a href="#" data-date="${_}" class="wg-date" data-sport="${t}">${_}</a>\n                        <a href="#" data-date="${A}" class="wg-date" data-sport="${t}">${A}</a>\n                        <a href="#" data-date="${v}" class="wg-date" data-sport="${t}">${v}</a>\n                        <a href="#" data-date="${y}" class="wg-date" data-sport="${t}">${y}</a>\n                        <a href="#" data-date="${I}" class="wg-date" data-sport="${t}">${I}</a>\n                        <a href="#" data-date="${E}" class="wg-date wg-dropdown-color-select" data-sport="${t}">TODAY</a>\n                        <a href="#" data-date="${L}" class="wg-date" data-sport="${t}">${L}</a>\n                        <a href="#" data-date="${k}" class="wg-date" data-sport="${t}">${k}</a>\n                        <a href="#" data-date="${B}" class="wg-date" data-sport="${t}">${B}</a>\n                        <a href="#" data-date="${S}" class="wg-date" data-sport="${t}">${S}</a>\n                        <a href="#" data-date="${N}" class="wg-date" data-sport="${t}">${N}</a>\n                        <a href="#" data-date="${D}" class="wg-date" data-sport="${t}">${D}</a>\n                        <a href="#" data-date="${T}" class="wg-date" data-sport="${t}">${T}</a>\n                    </div>\n                </span>\n            </div>\n            <div id="wg-${t}-data" class="wg_loader"></div>\n        `;
    "false" === g &&
      (H = `\n                <div id="wg-${t}-data" class="wg_loader"></div>\n            `),
      (a.innerHTML = H),
      hockey_games(l, r, n, e, s, i, b, c, u),
      $ >= 15 &&
        Number.isInteger($) &&
        (o = setInterval(function () {
          hockey_games(l, r, n, e, s, i, b, c, u), p(t);
        }, $));
  }
  if (document.getElementById("wg-api-hockey-standings")) {
    const t = document.getElementById("wg-api-hockey-standings");
    let a = t.getAttribute("data-key"),
      e = t.getAttribute("data-host"),
      s = t.getAttribute("data-theme"),
      d = t.getAttribute("data-league"),
      l = t.getAttribute("data-season"),
      r = t.getAttribute("data-show-errors"),
      n = t.getAttribute("data-show-logos");
    w(s), hockey_standings(d, l, a, e, r, n, !1);
  }
  if (document.getElementById("wg-api-rugby-games")) {
    let t = "rugby";
    const a = document.getElementById("wg-api-" + t + "-games");
    let e = a.getAttribute("data-key"),
      s = a.getAttribute("data-host"),
      d = a.getAttribute("data-theme"),
      l = a.getAttribute("data-date"),
      r = a.getAttribute("data-league"),
      n = a.getAttribute("data-season"),
      g = a.getAttribute("data-show-toolbar"),
      o = a.getAttribute("data-show-errors"),
      i = a.getAttribute("data-show-logos"),
      c = a.getAttribute("data-modal-game"),
      u = a.getAttribute("data-modal-standings"),
      $ = parseInt(1e3 * a.getAttribute("data-refresh"));
    if ((w(d), "" === l && "" === r && "" === n)) {
      let t = new Date(),
        a = String(t.getDate()).padStart(2, "0"),
        e = String(t.getMonth() + 1).padStart(2, "0"),
        s = t.getFullYear();
      l = s + "-" + e + "-" + a;
    }
    let h = m(7, "-"),
      f = m(6, "-"),
      _ = m(5, "-"),
      A = m(4, "-"),
      v = m(3, "-"),
      y = m(2, "-"),
      I = m(1, "-"),
      E = m(0, "+"),
      L = m(1, "+"),
      k = m(2, "+"),
      B = m(3, "+"),
      S = m(4, "+"),
      N = m(5, "+"),
      D = m(6, "+"),
      T = m(7, "+"),
      H = `\n            <div id="wg-${t}-toolbar" class="wg_toolbar">\n                <span class="wg_button_toggle wg_active" data-select="all" data-sport="${t}">ALL</span>\n                <span class="wg_button_toggle" data-select="live" data-sport="${t}">LIVE</span>\n                <span class="wg_button_toggle" data-select="finished" data-sport="${t}">FINISHED</span>\n                <span class="wg_button_toggle" data-select="scheduled" data-sport="${t}">SCHEDULED</span>\n                <span class="wg-dropdown">\n                    <span class="wg-dropbtn" id="wg-${t}-dropbtn">${E}</span>\n                    <div class="wg-dropdown-content">\n                        <a href="#" data-date="${h}" class="wg-date" data-sport="${t}">${h}</a>\n                        <a href="#" data-date="${f}" class="wg-date" data-sport="${t}">${f}</a>\n                        <a href="#" data-date="${_}" class="wg-date" data-sport="${t}">${_}</a>\n                        <a href="#" data-date="${A}" class="wg-date" data-sport="${t}">${A}</a>\n                        <a href="#" data-date="${v}" class="wg-date" data-sport="${t}">${v}</a>\n                        <a href="#" data-date="${y}" class="wg-date" data-sport="${t}">${y}</a>\n                        <a href="#" data-date="${I}" class="wg-date" data-sport="${t}">${I}</a>\n                        <a href="#" data-date="${E}" class="wg-date wg-dropdown-color-select" data-sport="${t}">TODAY</a>\n                        <a href="#" data-date="${L}" class="wg-date" data-sport="${t}">${L}</a>\n                        <a href="#" data-date="${k}" class="wg-date" data-sport="${t}">${k}</a>\n                        <a href="#" data-date="${B}" class="wg-date" data-sport="${t}">${B}</a>\n                        <a href="#" data-date="${S}" class="wg-date" data-sport="${t}">${S}</a>\n                        <a href="#" data-date="${N}" class="wg-date" data-sport="${t}">${N}</a>\n                        <a href="#" data-date="${D}" class="wg-date" data-sport="${t}">${D}</a>\n                        <a href="#" data-date="${T}" class="wg-date" data-sport="${t}">${T}</a>\n                    </div>\n                </span>\n            </div>\n            <div id="wg-${t}-data" class="wg_loader"></div>\n        `;
    "false" === g &&
      (H = `\n                <div id="wg-${t}-data" class="wg_loader"></div>\n            `),
      (a.innerHTML = H),
      rugby_games(l, r, n, e, s, o, i, c, u),
      $ >= 15 &&
        Number.isInteger($) &&
        (b = setInterval(function () {
          rugby_games(l, r, n, e, s, o, i, c, u), p(t);
        }, $));
  }
  if (document.getElementById("wg-api-rugby-standings")) {
    const t = document.getElementById("wg-api-rugby-standings");
    let a = t.getAttribute("data-key"),
      e = t.getAttribute("data-host"),
      s = t.getAttribute("data-theme"),
      d = t.getAttribute("data-league"),
      l = t.getAttribute("data-season"),
      r = t.getAttribute("data-show-errors"),
      n = t.getAttribute("data-show-logos");
    w(s), rugby_standings(d, l, a, e, r, n, !1);
  }
  if (document.getElementById("wg-api-volleyball-games")) {
    let t = "volleyball";
    const a = document.getElementById("wg-api-" + t + "-games");
    let e = a.getAttribute("data-key"),
      s = a.getAttribute("data-host"),
      d = a.getAttribute("data-theme"),
      l = a.getAttribute("data-date"),
      r = a.getAttribute("data-league"),
      n = a.getAttribute("data-season"),
      g = a.getAttribute("data-show-toolbar"),
      o = a.getAttribute("data-show-errors"),
      i = a.getAttribute("data-show-logos"),
      b = a.getAttribute("data-modal-game"),
      c = a.getAttribute("data-modal-standings"),
      $ = parseInt(1e3 * a.getAttribute("data-refresh"));
    if ((w(d), "" === l && "" === r && "" === n)) {
      let t = new Date(),
        a = String(t.getDate()).padStart(2, "0"),
        e = String(t.getMonth() + 1).padStart(2, "0"),
        s = t.getFullYear();
      l = s + "-" + e + "-" + a;
    }
    let h = m(7, "-"),
      f = m(6, "-"),
      _ = m(5, "-"),
      A = m(4, "-"),
      v = m(3, "-"),
      y = m(2, "-"),
      I = m(1, "-"),
      E = m(0, "+"),
      L = m(1, "+"),
      k = m(2, "+"),
      B = m(3, "+"),
      S = m(4, "+"),
      N = m(5, "+"),
      D = m(6, "+"),
      T = m(7, "+"),
      H = `\n            <div id="wg-${t}-toolbar" class="wg_toolbar">\n                <span class="wg_button_toggle wg_active" data-select="all" data-sport="${t}">ALL</span>\n                <span class="wg_button_toggle" data-select="live" data-sport="${t}">LIVE</span>\n                <span class="wg_button_toggle" data-select="finished" data-sport="${t}">FINISHED</span>\n                <span class="wg_button_toggle" data-select="scheduled" data-sport="${t}">SCHEDULED</span>\n                <span class="wg-dropdown">\n                    <span class="wg-dropbtn" id="wg-${t}-dropbtn">${E}</span>\n                    <div class="wg-dropdown-content">\n                        <a href="#" data-date="${h}" class="wg-date" data-sport="${t}">${h}</a>\n                        <a href="#" data-date="${f}" class="wg-date" data-sport="${t}">${f}</a>\n                        <a href="#" data-date="${_}" class="wg-date" data-sport="${t}">${_}</a>\n                        <a href="#" data-date="${A}" class="wg-date" data-sport="${t}">${A}</a>\n                        <a href="#" data-date="${v}" class="wg-date" data-sport="${t}">${v}</a>\n                        <a href="#" data-date="${y}" class="wg-date" data-sport="${t}">${y}</a>\n                        <a href="#" data-date="${I}" class="wg-date" data-sport="${t}">${I}</a>\n                        <a href="#" data-date="${E}" class="wg-date wg-dropdown-color-select" data-sport="${t}">TODAY</a>\n                        <a href="#" data-date="${L}" class="wg-date" data-sport="${t}">${L}</a>\n                        <a href="#" data-date="${k}" class="wg-date" data-sport="${t}">${k}</a>\n                        <a href="#" data-date="${B}" class="wg-date" data-sport="${t}">${B}</a>\n                        <a href="#" data-date="${S}" class="wg-date" data-sport="${t}">${S}</a>\n                        <a href="#" data-date="${N}" class="wg-date" data-sport="${t}">${N}</a>\n                        <a href="#" data-date="${D}" class="wg-date" data-sport="${t}">${D}</a>\n                        <a href="#" data-date="${T}" class="wg-date" data-sport="${t}">${T}</a>\n                    </div>\n                </span>\n            </div>\n            <div id="wg-${t}-data" class="wg_loader"></div>\n        `;
    "false" === g &&
      (H = `\n                <div id="wg-${t}-data" class="wg_loader"></div>\n            `),
      (a.innerHTML = H),
      volleyball_games(l, r, n, e, s, o, i, b, c),
      $ >= 15 &&
        Number.isInteger($) &&
        (u = setInterval(function () {
          volleyball_games(l, r, n, e, s, o, i, b, c), p(t);
        }, $));
  }
  if (document.getElementById("wg-api-volleyball-standings")) {
    const t = document.getElementById("wg-api-volleyball-standings");
    let a = t.getAttribute("data-key"),
      e = t.getAttribute("data-host"),
      s = t.getAttribute("data-theme"),
      d = t.getAttribute("data-league"),
      l = t.getAttribute("data-season"),
      r = t.getAttribute("data-show-errors"),
      n = t.getAttribute("data-show-logos");
    w(s), volleyball_standings(d, l, a, e, r, n, !1);
  }
  function w(t) {
    let a = "https://widgets.api-sports.io/2.0.3/widgets.css",
      e = "https://widgets.api-sports.io/2.0.3/widgets-" + t + ".css",
      s = !1,
      d = !1,
      l = document.getElementsByTagName("link");
    for (var r = 0; r < l.length; r++) {
      let t = l[r];
      t.getAttribute("href") === a && (s = !0),
        t.getAttribute("href") === e && (d = !0);
    }
    if ("false" !== t && !s) {
      let t = document.createElement("link");
      (t.type = "text/css"),
        (t.rel = "stylesheet"),
        (t.href = a),
        document.getElementsByTagName("head")[0].appendChild(t);
    }
    if (("grey" === t || "dark" === t) && !d) {
      let t = document.createElement("link");
      (t.type = "text/css"),
        (t.rel = "stylesheet"),
        (t.href = e),
        document.getElementsByTagName("head")[0].appendChild(t);
    }
  }
  function m(t, a) {
    let e = new Date();
    "+" == a ? e.setDate(e.getDate() + t) : e.setDate(e.getDate() - t);
    let s = String(e.getDate()).padStart(2, "0"),
      d = String(e.getMonth() + 1).padStart(2, "0");
    return e.getFullYear() + "-" + d + "-" + s;
  }
  function p(t) {
    let a = document.getElementsByClassName("wg_button_toggle");
    for (var e = 0; e < a.length; e++) {
      let s = a[e];
      if (
        s.getAttribute("data-sport") === t &&
        s.classList.contains("wg_active")
      ) {
        let t = new MouseEvent("click", {
          bubbles: !0,
          cancelable: !0,
          view: window,
        });
        s.dispatchEvent(t);
      }
    }
  }
  document.addEventListener(
    "click",
    function (t) {
      if (!t.target.matches(".wg_button_toggle")) return;
      t.preventDefault();
      let a = t.target.getAttribute("data-sport"),
        e = document.getElementsByClassName("wg_button_toggle");
      for (var s = 0; s < e.length; s++) {
        let t = e[s];
        t.getAttribute("data-sport") === a && t.classList.remove("wg_active");
      }
      t.target.classList.add("wg_active");
      let d = t.target.getAttribute("data-select"),
        l = [];
      "football" === a &&
        ("live" === d && (l = ["1H", "2H", "ET", "P", "LIVE", "HT", "BT"]),
        "finished" === d && (l = ["FT", "AET", "PEN"]),
        "scheduled" === d && (l = ["NS"])),
        "baseball" === a &&
          ("live" === d &&
            (l = [
              "IN1",
              "IN2",
              "IN3",
              "IN4",
              "IN5",
              "IN6",
              "IN7",
              "IN8",
              "IN9",
            ]),
          "finished" === d && (l = ["FT"]),
          "scheduled" === d && (l = ["NS"])),
        "basketball" === a &&
          ("live" === d && (l = ["Q1", "Q2", "Q3", "Q4", "OT", "BT", "HT"]),
          "finished" === d && (l = ["FT", "AOT"]),
          "scheduled" === d && (l = ["NS"])),
        "handball" === a &&
          ("live" === d && (l = ["1H", "2H", "ET", "PT", "HT", "BT"]),
          "finished" === d && (l = ["FT", "AET", "AP"]),
          "scheduled" === d && (l = ["NS"])),
        "hockey" === a &&
          ("live" === d && (l = ["P1", "P2", "P3", "OT", "PT", "BT"]),
          "finished" === d && (l = ["FT", "AOT", "AP"]),
          "scheduled" === d && (l = ["NS"])),
        "rugby" === a &&
          ("live" === d && (l = ["1H", "2H", "HT", "ET", "BT", "PT"]),
          "finished" === d && (l = ["FT", "AET"]),
          "scheduled" === d && (l = ["NS"])),
        "volleyball" === a &&
          ("live" === d && (l = ["S1", "S2", "S3", "S4", "S5"]),
          "finished" === d && (l = ["FT"]),
          "scheduled" === d && (l = ["NS"]));
      let r = {},
        n = {},
        g = document.getElementsByClassName(a + "-games-select");
      for (s = 0; s < g.length; s++) {
        let t = g[s];
        "all" === d
          ? (t.classList.contains("wg_hide") && t.classList.remove("wg_hide"),
            r[t.getAttribute("data-league")] ||
              (r[t.getAttribute("data-league")] = []),
            r[t.getAttribute("data-league")].push("1"),
            n[t.getAttribute("data-date")] ||
              (n[t.getAttribute("data-date")] = []),
            n[t.getAttribute("data-date")].push("1"))
          : l.includes(t.getAttribute("data-status"))
          ? (t.classList.contains("wg_hide") && t.classList.remove("wg_hide"),
            r[t.getAttribute("data-league")] ||
              (r[t.getAttribute("data-league")] = []),
            r[t.getAttribute("data-league")].push("1"),
            n[t.getAttribute("data-date")] ||
              (n[t.getAttribute("data-date")] = []),
            n[t.getAttribute("data-date")].push("1"))
          : (t.classList.contains("wg_hide") || t.classList.add("wg_hide"),
            r[t.getAttribute("data-league")] ||
              (r[t.getAttribute("data-league")] = []),
            r[t.getAttribute("data-league")].push("0"),
            n[t.getAttribute("data-date")] ||
              (n[t.getAttribute("data-date")] = []),
            n[t.getAttribute("data-date")].push("0"));
      }
      for (const t in r) {
        let e = document.getElementById(a + "-league-" + t),
          s = 0;
        for (const a in r[t]) s += r[t][a];
        s > 0
          ? e.classList.contains("wg_hide") && e.classList.remove("wg_hide")
          : e.classList.contains("wg_hide") || e.classList.add("wg_hide");
      }
      for (const t in n)
        if (document.getElementById(a + "-date-" + t)) {
          let e = document.getElementById(a + "-date-" + t),
            s = 0;
          for (const a in n[t]) s += n[t][a];
          s > 0
            ? e.classList.contains("wg_hide") && e.classList.remove("wg_hide")
            : e.classList.contains("wg_hide") || e.classList.add("wg_hide");
        }
    },
    !1
  ),
    document.addEventListener(
      "click",
      function (t) {
        if (!t.target.matches(".wg-date")) return;
        t.preventDefault();
        let e = t.target.getAttribute("data-sport");
        "football" === e && clearInterval(a),
          "baseball" === e && clearInterval(s),
          "basketball" === e && clearInterval(l),
          "handball" === e && clearInterval(n),
          "hockey" === e && clearInterval(o),
          "rugby" === e && clearInterval(b),
          "volleyball" === e && clearInterval(u),
          (document.getElementById("wg-" + e + "-dropbtn").innerHTML =
            t.target.getAttribute("data-date"));
        let d = document.getElementById("wg-api-" + e + "-games");
        d.setAttribute("data-date", t.target.getAttribute("data-date"));
        let r = document.getElementsByClassName("wg-date");
        for (var g = 0; g < r.length; g++) {
          let a = r[g];
          a.getAttribute("data-sport") === e &&
            (a.classList.contains("wg-dropdown-color-select") &&
              a.classList.remove("wg-dropdown-color-select"),
            a.getAttribute("data-date") ===
              t.target.getAttribute("data-date") &&
              a.classList.add("wg-dropdown-color-select"));
        }
        let i = document.getElementsByClassName("wg_button_toggle");
        for (g = 0; g < i.length; g++) {
          let t = i[g];
          t.getAttribute("data-sport") === e &&
            (t.classList.remove("wg_active"),
            "all" === t.getAttribute("data-select") &&
              t.classList.add("wg_active"));
        }
        let c = d.getAttribute("data-key"),
          w = d.getAttribute("data-host"),
          m = d.getAttribute("data-date"),
          $ = d.getAttribute("data-league"),
          h = d.getAttribute("data-season"),
          f = d.getAttribute("data-show-errors"),
          _ = d.getAttribute("data-show-logos"),
          A = d.getAttribute("data-modal-game"),
          v = d.getAttribute("data-modal-standings"),
          y = parseInt(1e3 * d.getAttribute("data-refresh"));
        (document.getElementById("wg-" + e + "-data").innerHTML = ""),
          document
            .getElementById("wg-" + e + "-data")
            .classList.add("wg_loader"),
          "football" === e &&
            (football_games(m, $, h, c, w, f, _, A, v),
            y >= 15 &&
              Number.isInteger(y) &&
              (a = setInterval(function () {
                football_games(m, $, h, c, w, f, _, A, v), p(e);
              }, y))),
          "baseball" === e &&
            (baseball_games(m, $, h, c, w, f, _, A, v),
            y >= 15 &&
              Number.isInteger(y) &&
              (s = setInterval(function () {
                baseball_games(m, $, h, c, w, f, _, A, v), p(e);
              }, y))),
          "basketball" === e &&
            (basketball_games(m, $, h, c, w, f, _, A, v),
            y >= 15 &&
              Number.isInteger(y) &&
              (l = setInterval(function () {
                basketball_games(m, $, h, c, w, f, _, A, v), p(e);
              }, y))),
          "handball" === e &&
            (handball_games(m, $, h, c, w, f, _, A, v),
            y >= 15 &&
              Number.isInteger(y) &&
              (n = setInterval(function () {
                handball_games(m, $, h, c, w, f, _, A, v), p(e);
              }, y))),
          "hockey" === e &&
            (hockey_games(m, $, h, c, w, f, _, A, v),
            y >= 15 &&
              Number.isInteger(y) &&
              (o = setInterval(function () {
                hockey_games(m, $, h, c, w, f, _, A, v), p(e);
              }, y))),
          "rugby" === e &&
            (rugby_games(m, $, h, c, w, f, _, A, v),
            y >= 15 &&
              Number.isInteger(y) &&
              (b = setInterval(function () {
                rugby_games(m, $, h, c, w, f, _, A, v), p(e);
              }, y))),
          "volleyball" === e &&
            (volleyball_games(m, $, h, c, w, f, _, A, v),
            y >= 15 &&
              Number.isInteger(y) &&
              (u = setInterval(function () {
                volleyball_games(m, $, h, c, w, f, _, A, v), p(e);
              }, y)));
      },
      !1
    ),
    document.addEventListener(
      "click",
      function (t) {
        if (!t.target.matches(".wg_load_standings")) return;
        t.preventDefault();
        let a = t.target.getAttribute("data-sport");
        const e = document.getElementById("wg-api-" + a + "-games");
        let s = t.target.getAttribute("data-league"),
          d = t.target.getAttribute("data-season"),
          l = e.getAttribute("data-key"),
          r = e.getAttribute("data-host"),
          n = e.getAttribute("data-show-errors"),
          g = e.getAttribute("data-modal-show-logos");
        document.getElementById("wb-" + a + "-modal") &&
          document.getElementById("wb-" + a + "-modal").remove();
        let o = document.createElement("div");
        (o.id = "wb-" + a + "-modal"), o.classList.add("wg_modal");
        let i = document.createElement("div");
        i.classList.add("wg_modal_content"), o.appendChild(i);
        let b = document.createElement("span");
        b.classList.add("wg_modal_close"),
          b.setAttribute("data-sport", a),
          b.setAttribute("data-modal", "standings"),
          (b.innerHTML = "&times;"),
          i.appendChild(b);
        let c = document.createElement("div");
        if (
          ((c.id = "wb-" + a + "-modal-data"),
          c.classList.add("wg_loader"),
          i.appendChild(c),
          e.appendChild(o),
          (o.style.display = "block"),
          "football" === a)
        ) {
          let a = t.target.getAttribute("data-team");
          football_standings(s, d, a, l, r, n, g, !0);
        }
        "baseball" === a && baseball_standings(s, d, l, r, n, g, !0),
          "basketball" === a && basketball_standings(s, d, l, r, n, g, !0),
          "handball" === a && handball_standings(s, d, l, r, n, g, !0),
          "hockey" === a && hockey_standings(s, d, l, r, n, g, !0),
          "rugby" === a && rugby_standings(s, d, l, r, n, g, !0),
          "volleyball" === a && volleyball_standings(s, d, l, r, n, g, !0);
      },
      !1
    ),
    document.addEventListener(
      "click",
      function (a) {
        if (!a.target.matches(".wg_load_game")) return;
        a.preventDefault();
        let s = a.target.getAttribute("data-sport");
        const l = document.getElementById("wg-api-" + s + "-games");
        let n = a.target.getAttribute("data-id"),
          o = l.getAttribute("data-key"),
          b = l.getAttribute("data-host"),
          u = l.getAttribute("data-show-errors"),
          w = l.getAttribute("data-modal-show-logos"),
          m = parseInt(1e3 * l.getAttribute("data-refresh"));
        document.getElementById("wb-" + s + "-modal") &&
          document.getElementById("wb-" + s + "-modal").remove();
        let p = document.createElement("div");
        (p.id = "wb-" + s + "-modal"), p.classList.add("wg_modal");
        let $ = document.createElement("div");
        $.classList.add("wg_modal_content"), p.appendChild($);
        let h = document.createElement("span");
        h.classList.add("wg_modal_close"),
          h.setAttribute("data-sport", s),
          h.setAttribute("data-modal", "game"),
          (h.innerHTML = "&times;"),
          $.appendChild(h);
        let f = document.createElement("div");
        (f.id = "wb-" + s + "-modal-data"),
          f.classList.add("wg_loader"),
          $.appendChild(f),
          l.appendChild(p),
          (p.style.display = "block"),
          "football" === s &&
            (clearInterval(t),
            football_game(n, o, b, u, w, !0),
            m >= 15 &&
              Number.isInteger(m) &&
              (t = setInterval(function () {
                football_game(n, o, b, u, w, !0);
              }, m))),
          "baseball" === s &&
            (clearInterval(e),
            baseball_game(n, o, b, u, w, !0),
            m >= 15 &&
              Number.isInteger(m) &&
              (e = setInterval(function () {
                baseball_game(n, o, b, u, w, !0);
              }, m))),
          "basketball" === s &&
            (clearInterval(d),
            basketball_game(n, o, b, u, w, !0),
            m >= 15 &&
              Number.isInteger(m) &&
              (d = setInterval(function () {
                basketball_game(n, o, b, u, w, !0);
              }, m))),
          "handball" === s &&
            (clearInterval(r),
            handball_game(n, o, b, u, w, !0),
            m >= 15 &&
              Number.isInteger(m) &&
              (r = setInterval(function () {
                handball_game(n, o, b, u, w, !0);
              }, m))),
          "hockey" === s &&
            (clearInterval(g),
            hockey_game(n, o, b, u, w, !0),
            m >= 15 &&
              Number.isInteger(m) &&
              (g = setInterval(function () {
                hockey_game(n, o, b, u, w, !0);
              }, m))),
          "rugby" === s &&
            (clearInterval(i),
            rugby_game(n, o, b, u, w, !0),
            m >= 15 &&
              Number.isInteger(m) &&
              (i = setInterval(function () {
                rugby_game(n, o, b, u, w, !0);
              }, m))),
          "volleyball" === s &&
            (clearInterval(c),
            volleyball_game(n, o, b, u, w, !0),
            m >= 15 &&
              Number.isInteger(m) &&
              (c = setInterval(function () {
                volleyball_game(n, o, b, u, w, !0);
              }, m)));
      },
      !1
    ),
    document.addEventListener(
      "click",
      function (a) {
        if (!a.target.matches(".wg_modal_close")) return;
        a.preventDefault();
        let s = a.target.getAttribute("data-sport"),
          l = a.target.getAttribute("data-modal");
        document.getElementById("wb-" + s + "-modal") &&
          ((document.getElementById("wb-" + s + "-modal").style.display =
            "none"),
          document.getElementById("wb-" + s + "-modal").remove()),
          "game" === l &&
            ("football" === s && clearInterval(t),
            "baseball" === s && clearInterval(e),
            "basketball" === s && clearInterval(d),
            "handball" === s && clearInterval(r),
            "hockey" === s && clearInterval(g),
            "rugby" === s && clearInterval(i),
            "volleyball" === s && clearInterval(c));
      },
      !1
    ),
    document.addEventListener(
      "click",
      function (t) {
        if (!t.target.matches(".wg_button_toggle_game")) return;
        t.preventDefault();
        let a = t.target.getAttribute("data-sport"),
          e = t.target.getAttribute("data-select"),
          s = t.target.getAttribute("data-id"),
          d = t.target.getAttribute("data-sub"),
          l = document.getElementsByClassName("wg_button_toggle_game");
        for (var r = 0; r < l.length; r++) {
          let t = l[r];
          t.getAttribute("data-sport") === a && t.classList.remove("wg_active");
        }
        t.target.classList.add("wg_active");
        let n = document.getElementsByClassName("wg_data_toggle_game");
        for (r = 0; r < n.length; r++) {
          let t = n[r];
          t.getAttribute("data-id") === s &&
            (t.classList.contains("wg_hide") || t.classList.add("wg_hide"));
        }
        document
          .getElementById(a + "-game-" + d + "-" + e + "-" + s)
          .classList.remove("wg_hide");
      },
      !1
    ),
    document.addEventListener(
      "click",
      function (t) {
        if (!t.target.matches(".wg_arrow")) return;
        t.preventDefault();
        let a = t.target,
          e = t.target.getAttribute("data-id"),
          s = document.getElementsByClassName(e);
        for (var d = 0; d < s.length; d++) {
          let t = s[d];
          t.classList.contains("wg_hide")
            ? (t.classList.remove("wg_hide"),
              a.classList.remove("wg_arrow_down"),
              a.classList.add("wg_arrow_up"))
            : (t.classList.add("wg_hide"),
              a.classList.remove("wg_arrow_up"),
              a.classList.add("wg_arrow_down"));
        }
      },
      !1
    );
});
