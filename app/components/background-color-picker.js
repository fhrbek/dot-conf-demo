import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['color-picker'],

  actions: {
    updateBackgroundColor(color) {
      let rootStyle = document.documentElement.style;
      rootStyle.setProperty('--background-color', color);
    }
  }
});
