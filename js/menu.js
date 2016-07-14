'use strict';

(function() {
  var Menu = function() {
    this._menuIcon = document.querySelector('.main-nav__mobile-nav');
    this._menuItems = document.querySelector('.main-nav__menu-items');

    this._onClick = this._onClick.bind(this);

    this._menuIcon.addEventListener('click', this._onClick);
  };

  Menu.prototype._onClick = function() {
    if (!this._menuIcon.classList.contains('open')) {
      this._menuIcon.classList.add('open');
      this._menuItems.classList.add('clicked');
    } else {
      this._menuIcon.classList.remove('open');
      this._menuItems.classList.remove('clicked');
    }
  };

  window.Menu = Menu;
})();
