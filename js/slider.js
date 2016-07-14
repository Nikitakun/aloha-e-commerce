'use strict';

(function() {
  var Slider = function(images) {
    this._images = images;
    this._tooltips = document.querySelectorAll('.tooltips li');
    this._container = document.querySelector('.main-header__main-part');

    this._selected = document.querySelector('.selected');

    this._counter = 0;

    this._onClick = this._onClick.bind(this);

    document.querySelector('.tooltips').addEventListener('click', this._onClick);
  };

  Slider.prototype._onClick = function(evt) {
    if (evt.target.classList.contains('selected')) {
      return;
    } else if (evt.target.tagName === 'LI') {
      Array.prototype.forEach.call(this._tooltips, function(item) {
        if (item.classList.contains('selected') && item.tagName === 'LI') {
          item.classList.remove('selected');
        }
      });
      switch (evt.target.className) {
        case 'first-tooltip':
          this._counter = 0;
          this._slideChange();
          break;
        case 'second-tooltip':
          this._counter = 1;
          this._slideChange();
          break;
        case 'third-tooltip':
          this._counter = 2;
          this._slideChange();
          break;
      }
    }
  };

  Slider.prototype._slideChange = function() {
      this._currentSlide = document.querySelector('.main-header__main-part .main-header__main-part-image');

      this._template = document.querySelector('#slider-template')
      this._element = this._template.content.children[0].cloneNode(true);
      this._element.style.backgroundImage = this._images[this._counter].src;
      this._element.querySelector('.main-header__main-part-small-heading').textContent = this._images[this._counter].smallHeading;
      this._element.querySelector('.main-header__main-part-big-heading').textContent = this._images[this._counter].bigHeading;

      this._container.insertBefore(this._element, document.querySelector('.tooltips'));

      this._currentSlide.style.opacity = 0;

      setTimeout(function() {
        this._container.removeChild(this._currentSlide);
      }.bind(this), 350);

      this._element.classList.add('fade-in');

      this._tooltips[this._counter].classList.add('selected');
    };

  window.Slider = Slider;
})();
