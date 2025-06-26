"use strict";
(self["webpackChunkgalenborgman"] = self["webpackChunkgalenborgman"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function AboutComponent_div_11_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
  }
}
function AboutComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AboutComponent_div_11_li_4_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const categoryKey_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categoryKey_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categoryLists[categoryKey_r1]);
  }
}
class AboutComponent {
  getCategoryKeys() {
    return Object.keys(this.categoryLists);
  }
  constructor() {
    this.name = 'Galen Borgman';
    this.profilePicture = 'assets/profile.jpg';
    this.description = `I am an early-career software engineer with a strong passion for Angular and web technologies. My curiosity extends beyond the realm of web development, as I am also deeply interested in machine learning and its potential to revolutionize various industries. Alongside my technical pursuits, I have a deep appreciation for the art of poetry, which I believe enriches my creative thinking and problem-solving skills. Balancing my love for technology and the written word, I strive to craft innovative, efficient, and scalable solutions that make a difference.`;
    this.favorites = [{
      category: 'Book',
      name: 'Mistborn',
      link: 'https://www.brandonsanderson.com/the-mistborn-saga-the-original-trilogy/'
    }, {
      category: 'Book',
      name: 'The Way of Kings',
      link: 'https://www.brandonsanderson.com/the-stormlight-archive-series/'
    }, {
      category: 'Book',
      name: 'Dune',
      link: 'https://www.goodreads.com/book/show/44767458-dune'
    }, {
      category: 'Hobby',
      name: 'Board Games',
      link: '/games'
    }, {
      category: 'Hobby',
      name: 'Hiking',
      link: '/hiking'
    }, {
      category: 'Hobby',
      name: 'Horror Movies',
      link: '/horror'
    }, {
      category: 'Movie',
      name: 'Hereditary',
      link: 'https://www.imdb.com/title/tt7784604/'
    }, {
      category: 'Movie',
      name: 'Inception',
      link: 'https://www.imdb.com/title/tt1375666/'
    }, {
      category: 'Movie',
      name: 'The Secret Life of Walter Mitty',
      link: 'https://www.imdb.com/title/tt0359950/'
    }, {
      category: 'Music',
      name: 'Noah Kahan',
      link: 'https://open.spotify.com/artist/2RQXRUsr4IW1f3mKyKsy4B'
    }, {
      category: 'Music',
      name: 'Takenobu',
      link: 'https://open.spotify.com/artist/0gnKKarIUyBnDcORsbOdeY'
    }, {
      category: 'Music',
      name: 'Hozier',
      link: 'https://open.spotify.com/artist/2FXC3k01G6Gw61bmprjgqS'
    }, {
      category: 'Game',
      name: "Sid Meier's Civilization",
      link: 'https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/'
    }, {
      category: 'Game',
      name: 'Phasmophobia',
      link: 'https://store.steampowered.com/app/739630/Phasmophobia/'
    }, {
      category: 'Game',
      name: 'Stardew Valley',
      link: 'https://store.steampowered.com/app/413150/Stardew_Valley/'
    }];
    this.categoryLists = this.favorites.reduce((accumulator, item) => {
      if (!accumulator[item.category]) {
        accumulator[item.category] = [];
      }
      accumulator[item.category].push(item);
      return accumulator;
    }, {});
    this.categoryLists = this.favorites.reduce((accumulator, item) => {
      // If the category is not in the accumulator, create a new list
      if (accumulator[item.category] == undefined) {
        accumulator[item.category] = [];
      }
      // Add the item to the category list
      accumulator[item.category].push(item);
      return accumulator;
    }, {});
  }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 12,
  vars: 4,
  consts: [[1, "about"], [1, "container"], [1, "section-title"], [1, "about-content"], [1, "profile-picture", 3, "src", "alt"], [1, "interests"], [1, "interests-title"], [4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Interests & Favorites");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AboutComponent_div_11_Template, 5, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getCategoryKeys());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".about[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1.5rem;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  margin-right: 2rem;\n}\n\n.interests[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.interests-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.interest[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcclxufVxyXG5cclxuLmludGVyZXN0cyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmludGVyZXN0cy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmludGVyZXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/board.component */ 3460);
/* harmony import */ var _horror_horror_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horror/horror.component */ 9348);
/* harmony import */ var _board_games_board_games_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board-games/board-games.component */ 9980);
/* harmony import */ var _hikes_hikes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hikes/hikes.component */ 1508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);











const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'projects',
  component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent
}, {
  path: 'tictactoe',
  component: _board_board_component__WEBPACK_IMPORTED_MODULE_4__.BoardComponent
}, {
  path: 'horror',
  component: _horror_horror_component__WEBPACK_IMPORTED_MODULE_5__.HorrorComponent
}, {
  path: 'games',
  component: _board_games_board_games_component__WEBPACK_IMPORTED_MODULE_6__.BoardGamesComponent
}, {
  path: 'hiking',
  component: _hikes_hikes_component__WEBPACK_IMPORTED_MODULE_7__.HikesComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class AppComponent {
  constructor() {
    this.title = 'galenborgman';
    this.currentYear = new Date().getFullYear();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 15,
  vars: 1,
  consts: [[1, "header"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/projects"], ["routerLink", "/contact"], [1, "footer"], [1, "container"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "nav")(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "footer", 5)(12, "div", 6)(13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " Galen Borgman. All rights reserved.");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _square_square_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./square/square.component */ 8809);
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board/board.component */ 3460);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1108);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2162);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ 8722);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2257);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _hikes_hikes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hikes/hikes.component */ 1508);
/* harmony import */ var _horror_horror_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./horror/horror.component */ 9348);
/* harmony import */ var _board_games_board_games_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./board-games/board-games.component */ 9980);
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blog-post/blog-post.component */ 2515);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-markdown */ 1289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 6839);
























class AppModule {
  constructor() {
    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faEnvelope, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faPhone, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_16__.fab, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faLinkedin, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faGithub);
  }
}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_22__.MarkdownModule.forRoot({
    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _square_square_component__WEBPACK_IMPORTED_MODULE_6__.SquareComponent, _board_board_component__WEBPACK_IMPORTED_MODULE_7__.BoardComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__.NavBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent, _hikes_hikes_component__WEBPACK_IMPORTED_MODULE_11__.HikesComponent, _horror_horror_component__WEBPACK_IMPORTED_MODULE_12__.HorrorComponent, _board_games_board_games_component__WEBPACK_IMPORTED_MODULE_13__.BoardGamesComponent, _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_14__.BlogPostComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_22__.MarkdownModule]
  });
})();

/***/ }),

/***/ 2515:
/*!**************************************************!*\
  !*** ./src/app/blog-post/blog-post.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPostComponent": () => (/* binding */ BlogPostComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ 1289);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class BlogPostComponent {
  constructor(markdownService, http) {
    this.markdownService = markdownService;
    this.http = http;
    this.markdownContent = "";
    this.filename = "";
    this.fullPath = "";
    this.title = "";
    this.date = "";
    this.readingTime = "";
    this.author = "Galen Borgman";
  }
  ngOnInit() {
    this.http.get('assets/blog-post.json').subscribe(posts => {
      // find the post with the matching filename
      const post = posts.find(p => p.filename === this.filename);
      // if post was found, assign properties from post
      if (post) {
        this.title = post.title;
        this.date = post.date;
        this.filename = post.filename;
        this.fullPath = 'assets/blog-posts/' + this.filename;
        this.http.get('assets/blog-posts/' + this.filename, {
          responseType: 'text'
        }).subscribe(markdown => {
          this.markdownContent = markdown;
          const words = markdown.split(' ').length;
          this.readingTime = Math.ceil(words / 200) + ' min';
        });
      }
    });
  }
}
BlogPostComponent.ɵfac = function BlogPostComponent_Factory(t) {
  return new (t || BlogPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
BlogPostComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BlogPostComponent,
  selectors: [["app-blog-post"]],
  inputs: {
    filename: "filename"
  },
  decls: 18,
  vars: 6,
  consts: [[1, "blog-post"], [3, "src"], [1, "navigation"]],
  template: function BlogPostComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "By ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Estimated reading time: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "markdown", 1)(15, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "markdown", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.readingTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fullPath);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fullPath);
    }
  },
  dependencies: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownComponent],
  styles: [".blog-post[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  line-height: 1.6;\n  font-size: 18px;\n  color: #333;\n}\n\n.blog-post[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .blog-post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .blog-post[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .blog-post[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .blog-post[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .blog-post[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 20px 0 10px;\n}\n\n.blog-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\n.blog-post[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background-color: #f9f9f9;\n  padding: 2px 5px;\n  border-radius: 3px;\n}\n\n.blog-post[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding: 10px;\n  border-radius: 3px;\n}\n\n.blog-post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy1wb3N0L2Jsb2ctcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLXBvc3Qge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmJsb2ctcG9zdCBoMSwgLmJsb2ctcG9zdCBoMiwgLmJsb2ctcG9zdCBoMywgLmJsb2ctcG9zdCBoNCwgLmJsb2ctcG9zdCBoNSwgLmJsb2ctcG9zdCBoNiB7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMTBweDtcclxufVxyXG5cclxuLmJsb2ctcG9zdCBwIHtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcblxyXG4uYmxvZy1wb3N0IGNvZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBwYWRkaW5nOiAycHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmJsb2ctcG9zdCBwcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5ibG9nLXBvc3QgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9980:
/*!******************************************************!*\
  !*** ./src/app/board-games/board-games.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardGamesComponent": () => (/* binding */ BoardGamesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function BoardGamesComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const favorite_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", favorite_r1.name, " ");
  }
}
class BoardGamesComponent {
  constructor() {
    this.favoriteBG = [{
      category: 'Board Game',
      name: 'Spirit Island',
      link: 'https://boardgamegeek.com/boardgame/162886/spirit-island'
    }, {
      category: 'Board Game',
      name: 'Arkham Horror: The Card Game',
      link: 'https://boardgamegeek.com/boardgame/205637/arkham-horror-card-game'
    }, {
      category: 'Board Game',
      name: 'Gloomhaven',
      link: 'https://boardgamegeek.com/boardgame/174430/gloomhaven'
    }];
  }
}
BoardGamesComponent.ɵfac = function BoardGamesComponent_Factory(t) {
  return new (t || BoardGamesComponent)();
};
BoardGamesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BoardGamesComponent,
  selectors: [["app-board-games"]],
  decls: 7,
  vars: 1,
  consts: [["id", "description"], [4, "ngFor", "ngForOf"]],
  template: function BoardGamesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Favorite Board Games! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I'm always looking for new board games in the modern / euro categories. Let me know if you find one that is cooperative too those ones usually end up the most fun at our table. As a long time player of 4x strategy games board games have been an interesting. I came to modern board games after playing these strategy games which I think is opposite the approach the games. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardGamesComponent_li_6_Template, 2, 1, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favoriteBG);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3460:
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardComponent": () => (/* binding */ BoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _square_square_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../square/square.component */ 8809);



function BoardComponent_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Player ", ctx_r0.winner, " won the game!\n");
  }
}
function BoardComponent_app_square_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-square", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_app_square_6_Template_app_square_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.makeMove(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const val_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", val_r2);
  }
}
class BoardComponent {
  constructor() {
    this.squares = [];
    this.xIsNext = true;
    this.winner = "";
    this.streak = 0;
  }
  ngOnInit() {
    this.newGame();
  }
  newGame() {
    if (this.winner === "X") this.streak += 1;
    if (this.winner === "O") this.streak = 0;
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(idx) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
  }
  calculateWinner() {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) {
  return new (t || BoardComponent)();
};
BoardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BoardComponent,
  selectors: [["app-board"]],
  decls: 7,
  vars: 3,
  consts: [[3, "click"], [4, "ngIf"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"]],
  template: function BoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_2_listener() {
        return ctx.newGame();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Start New Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BoardComponent_h2_4_Template, 2, 1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "main");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BoardComponent_app_square_6_Template, 1, 1, "app-square", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Current Player: ", ctx.player, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.winner);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.squares);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _square_square_component__WEBPACK_IMPORTED_MODULE_0__.SquareComponent],
  styles: ["main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 200px 200px;\n}\n\napp-square[_ngcontent-%COMP%] {\n  border: 1px gray solid;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAyMDBweCAyMDBweDtcclxufVxyXG5cclxuYXBwLXNxdWFyZSB7XHJcbiAgICBib3JkZXI6IDFweCBncmF5IHNvbGlkO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2162);





function ContactComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", detail_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", detail_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r1.label);
  }
}
class ContactComponent {
  constructor() {
    this.contactDetails = [{
      type: 'Email',
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEnvelope,
      label: 'galenborgman@gmail.com',
      link: 'mailto:galenborgman@gmail.com'
    },
    // {
    //   type: 'Phone',
    //   icon: faPhone,
    //   label: '+1 (123) 456-7890',
    //   link: 'tel:+11234567890'
    // },
    {
      type: 'LinkedIn',
      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLinkedin,
      label: 'linkedin.com/in/galen-borgman',
      link: 'https://www.linkedin.com/in/galen-borgman'
    }, {
      type: 'GitHub',
      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faGithub,
      label: 'github.com/gborgman05',
      link: 'https://github.com/gborgman05'
    }];
  }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 8,
  vars: 1,
  consts: [[1, "contact"], [1, "container"], [1, "section-title"], [1, "contact-details"], ["class", "contact-detail", 4, "ngFor", "ngForOf"], [1, "contact-detail"], [1, "contact-icon", 3, "icon"], ["target", "_blank", 1, "contact-link", 3, "href"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Get in Touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "If you're interested in working with me or just want to say hello, feel free to reach out:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContactComponent_div_7_Template, 4, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactDetails);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: [".contact[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.contact[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1.5rem;\n}\n.contact[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: center;\n}\n.contact[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1.2rem;\n}\n.contact[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQU47QUFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuY29udGFjdC1kZXRhaWwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDFyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cclxuICAgICAgLmNvbnRhY3QtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 10,
  vars: 0,
  consts: [[1, "footer"], ["href", "https://github.com/Gborgman05", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.linkedin.com/in/", "target", "_blank", "rel", "noopener noreferrer"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 Galen Borgman 2023. All Rights Reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Connect with me: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "GitHub");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LinkedIn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1508:
/*!******************************************!*\
  !*** ./src/app/hikes/hikes.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HikesComponent": () => (/* binding */ HikesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class HikesComponent {}
HikesComponent.ɵfac = function HikesComponent_Factory(t) {
  return new (t || HikesComponent)();
};
HikesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HikesComponent,
  selectors: [["app-hikes"]],
  decls: 2,
  vars: 0,
  template: function HikesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hikes works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog-post/blog-post.component */ 2515);



function HomeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-blog-post", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filename", post_r1);
  }
}
// main file
class HomeComponent {
  constructor() {
    this.desc = "I'm a learner focused on Software Engineering right now. \nI'm always reading something, you can see those here.\nFor some of my projects see here.\nIf you'd like to reach out go here.\n\nIf you want to play tictactoe (with yourself) go here. ";
    this.posts = ["2020-12-10-First_steps.md", "2020-12-10-welcome-to-jekyll.md", "2020-12-12-statistics-for-data-science.md", "2020-12-17-My-Favorites.md", "2020-12-25-Obligatory-Christmas-Episode.md", "2020-12-28-search-and-replace.md", "2020-12-28-Thank-You-Notes.md", "2021-7-12-Huntington-Library-Gardens.md", "2021-7-13-Autogenerating-a-Post.md", "2021-7-13-Hera-Revisited.md", "2022-7-8-Waking-Up.markdown", "2023-1-22-Spirit-Island.md", "2023-1-29-Sunday.md", "2023-8-29-Timeline.md"];
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  inputs: {
    desc: "desc",
    posts: "posts"
  },
  decls: 5,
  vars: 2,
  consts: [["id", "posts"], [4, "ngFor", "ngForOf"], [3, "filename"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Hi! I'm Galen");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", ctx.desc, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_0__.BlogPostComponent],
  styles: [".brand-logo[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  height: 100%;\n  margin: 0 2%;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2rem;\n  transition: all 150ms ease-in-out;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: translate(0.75rem, 0rem);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: all 150ms ease-in-out;\n  margin: 0;\n  background-color: transparent !important;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1.25rem;\n  font-weight: 700;\n  padding: 0 2rem;\n  box-shadow: inset 0 0 0 0 var(--color-secondary);\n  transition: all 250ms;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 6px var(--color-secondary);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  box-shadow: inset 0 0 0 6px var(--color-secondary);\n}\n\n#navbar[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  width: 15rem;\n}\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtBQUVKO0FBREk7RUFDRSxtQ0FBQTtBQUdOOztBQUNBO0VBQ0UsaUNBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREE7RUFDRSxrREFBQTtBQUlGOztBQUZBO0VBQ0Usd0NBQUE7RUFDQSxrREFBQTtBQUtGOztBQUhBO0VBQ0UsZ0NBQUE7QUFNRjs7QUFKQTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtBQU9GO0FBTkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFRSiIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZC1sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDIlO1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC43NXJlbSwgMHJlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbm5hdiB1bCBsaSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbm5hdiB1bCBsaSBhIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xyXG59XHJcbm5hdiB1bCBsaS5hY3RpdmUgYSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxubmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuI25hdmJhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLnNpZGUtbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgbGkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9348:
/*!********************************************!*\
  !*** ./src/app/horror/horror.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorrorComponent": () => (/* binding */ HorrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function HorrorComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const favorite_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", favorite_r1.name, " ");
  }
}
class HorrorComponent {
  constructor() {
    this.favoriteHorror = [{
      category: 'Movie',
      name: 'Hereditary',
      link: 'https://www.imdb.com/title/tt7784604/'
    }, {
      category: 'Podcast',
      name: 'The Magnus Archive',
      link: 'https://rustyquill.com/show/the-magnus-archives/'
    }, {
      category: 'TV Series',
      name: 'The Haunting of Hill House',
      link: 'https://en.wikipedia.org/wiki/The_Haunting_of_Hill_House_(TV_series)'
    }, {
      category: 'Movie',
      name: 'The Conjuring',
      link: 'https://www.imdb.com/title/tt1457767/'
    }, {
      category: 'TV Series',
      name: 'American Horror Story: 1984',
      link: 'https://en.wikipedia.org/wiki/American_Horror_Story:_1984'
    }];
  }
}
HorrorComponent.ɵfac = function HorrorComponent_Factory(t) {
  return new (t || HorrorComponent)();
};
HorrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HorrorComponent,
  selectors: [["app-horror"]],
  decls: 7,
  vars: 1,
  consts: [["id", "description"], [4, "ngFor", "ngForOf"]],
  template: function HorrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Favorite horror movies and reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I started watching horror movies frequently with my fiance, and we have rapidly gone through many different movies. I'm always looking for new horror movies that are good so feel free to recommend any to me that you've loved. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HorrorComponent_li_6_Template, 2, 1, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favoriteHorror);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1108:
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



function NavBarComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.currentRoute === link_r1.url ? "active" : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.title);
  }
}
class NavBarComponent {
  constructor(location, router) {
    this.links = [{
      title: '/',
      url: '/'
    }, {
      title: '/about',
      url: '/about'
    }, {
      title: '/projects',
      url: '/projects'
    }, {
      title: '/contact',
      url: '/contact'
    }, {
      title: '/tictactoe',
      url: '/tictactoe'
    }];
    this.currentRoute = "/";
    this.currentRoute = location.path();
    router.events.subscribe(() => {
      this.currentRoute = location.path();
    });
  }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavBarComponent,
  selectors: [["app-nav-bar"]],
  inputs: {
    links: "links"
  },
  decls: 9,
  vars: 1,
  consts: [[1, "container"], [1, "navbar-fixed"], [1, "z-depth-0", "white", "animate__animated", "animate__slideInDown", "animate__delay-1s"], ["id", "navbar", 1, "nav-wrapper"], [1, "right", "flex-container"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "light-blue-text", "text-lighten-5", 3, "routerLink"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1)(5, "nav", 2)(6, "div", 3)(7, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavBarComponent_li_8_Template, 3, 3, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".brand-logo[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  height: 100%;\n  margin: 0 2%;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2rem;\n  transition: all 150ms ease-in-out;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: translate(0.75rem, 0rem);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: all 150ms ease-in-out;\n  margin: 0;\n  background-color: transparent !important;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1.25rem;\n  font-weight: 700;\n  padding: 0 2rem;\n  box-shadow: inset 0 0 0 0 var(--color-secondary);\n  transition: all 250ms;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 6px var(--color-secondary);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  box-shadow: inset 0 0 0 6px var(--color-secondary);\n}\n\n#navbar[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  width: 15rem;\n}\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtBQUVKO0FBREk7RUFDRSxtQ0FBQTtBQUdOOztBQUNBO0VBQ0UsaUNBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREE7RUFDRSxrREFBQTtBQUlGOztBQUZBO0VBQ0Usd0NBQUE7RUFDQSxrREFBQTtBQUtGOztBQUhBO0VBQ0UsZ0NBQUE7QUFNRjs7QUFKQTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtBQU9GO0FBTkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFRSiIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZC1sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDIlO1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC43NXJlbSwgMHJlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbm5hdiB1bCBsaSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbm5hdiB1bCBsaSBhIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xyXG59XHJcbm5hdiB1bCBsaS5hY3RpdmUgYSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxubmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuI25hdmJhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLnNpZGUtbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgbGkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5609:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



function ProjectsComponent_div_5_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r5.language, " ");
  }
}
function ProjectsComponent_div_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9)(2, "div", 10)(3, "span", 11)(4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_5_ng_container_2_span_5_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r5.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r5.desc, ".");
  }
}
function ProjectsComponent_div_5_ng_container_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r9.language, " ");
  }
}
function ProjectsComponent_div_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9)(2, "div", 10)(3, "span", 11)(4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_5_ng_container_4_span_5_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const project_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r9.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r9.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r9.desc, ".");
  }
}
function ProjectsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_div_5_ng_container_2_Template, 10, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_5_ng_container_4_Template, 10, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projectsColumn1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projectsColumn2);
  }
}
function ProjectsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class ProjectsComponent {
  constructor(http) {
    this.http = http;
    this.projectsColumn1 = [];
    this.projectsColumn2 = [];
    this.projects = [];
    let a = "https://github.com/Gborgman05/informal_business";
    const owner = "Gborgman05";
    const repo_names = ["informal_business", "DATA-301-Final-Project", "algs", "shakespeare-bot-1", "angular-start", "match_sim"];
    this.projectsColumn1 = this.projects.filter((_, index) => index % 2 === 0);
    this.projectsColumn2 = this.projects.filter((_, index) => index % 2 === 1);
    repo_names.forEach(repo_name => {
      const loc = `https://api.github.com/repos/${owner}/${repo_name}`;
      this.http.get(loc).subscribe(response => {
        const repo = response;
        this.projects.push({
          title: repo.name,
          desc: repo.description,
          link: repo.html_url,
          language: repo.language
        });
        this.projectsColumn1 = this.projects.filter((_, index) => index % 2 === 0);
        this.projectsColumn2 = this.projects.filter((_, index) => index % 2 === 1);
      });
    });
  }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  inputs: {
    projectsColumn1: "projectsColumn1",
    projectsColumn2: "projectsColumn2",
    projects: "projects"
  },
  decls: 8,
  vars: 1,
  consts: [[1, "container"], [1, "row"], [1, "light-blue-text", "text-darken-3", "animate__animated", "animate__bounceInLeft"], ["id", "starred-projects", "class", "column", 4, "ngIf"], ["elseBlock", ""], ["id", "starred-projects", 1, "column"], [1, "col-12", "col-md-6"], [4, "ngFor", "ngForOf"], [1, "column", "col-12", "col-md-6"], ["target", "_blank", 1, "card", "animate__animated", "animate__zoomIn", "animate__faster", 3, "href"], [1, "card-content", "light-blue-text", "text-lighten-5", "light-blue", "darken-3"], [1, "card-title"], [1, "card-title-content"], ["class", "badge light-blue lighten-5 light-blue-text text-darken-3", 4, "ngIf"], [1, "project-title", "text-ellipsis"], [1, "project-description", "flow-text"], [1, "badge", "light-blue", "lighten-5", "light-blue-text", "text-darken-3"], [1, "card-panel", "animate__animated", "animate__zoomIn", "animate__faster"], [1, "not-found-title"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_5_Template, 5, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_ng_template_6_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".project-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: capitalize;\n}\n\n.project-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  transition: all 150ms ease-in-out !important;\n  height: 5rem;\n  border-radius: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: var(--color-primary) !important;\n  border-radius: 0;\n  padding: 0;\n}\n\n.card-title-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 1.5rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-width: auto;\n  position: absolute;\n  right: 0.25rem;\n  top: 0.25rem;\n  padding: 0.5rem 1rem;\n  margin: 0;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n\nspan.badge.new[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 0 0.5rem;\n}\n\n.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  transition: 150ms all ease-in-out;\n  color: var(--color-primary) !important;\n  background-color: var(--color-secondary) !important;\n}\n\nspan.badge.new[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n\n.tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.card-panel[_ngcontent-%COMP%] {\n  background-color: var(--color-secondary);\n}\n\n.card-panel[_ngcontent-%COMP%]   .not-found-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: italic;\n  color: var(--color-primary);\n}\n\n.text-ellipsis[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: inline-block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@media (min-width: 1024px) {\n  .card-content[_ngcontent-%COMP%]:hover {\n    transform: translate(0.75rem, 0rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLHFCQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtREFBQTtBQVNGOztBQVBBO0VBQ0UseUJBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7QUFXRjs7QUFUQTtFQUNFLHdDQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFhRjs7QUFYQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBY0Y7O0FBWkE7RUFDRTtJQUNFLG1DQUFBO0VBZUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmNhcmQtY29udGVudCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jYXJkLXRpdGxlLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDAuMjVyZW07XHJcbiAgdG9wOiAwLjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5iYWRnZSBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbn1cclxuc3Bhbi5iYWRnZS5uZXcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMCAwLjVyZW07XHJcbn1cclxuLnRhYnMgbGkgYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdHJhbnNpdGlvbjogMTUwbXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxufVxyXG5zcGFuLmJhZGdlLm5ldyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufVxyXG4udGFiIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZC1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG4uY2FyZC1wYW5lbCAubm90LWZvdW5kLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4udGV4dC1lbGxpcHNpcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNhcmQtY29udGVudDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjc1cmVtLCAwcmVtKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8809:
/*!********************************************!*\
  !*** ./src/app/square/square.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SquareComponent": () => (/* binding */ SquareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class SquareComponent {}
SquareComponent.ɵfac = function SquareComponent_Factory(t) {
  return new (t || SquareComponent)();
};
SquareComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SquareComponent,
  selectors: [["app-square"]],
  inputs: {
    value: "value"
  },
  decls: 2,
  vars: 1,
  template: function SquareComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, "");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map