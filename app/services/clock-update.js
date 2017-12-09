/* global moment */
import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.updateTimes();
  },

  relativeClockTime(localTime) {
    let secondsOfDay = (localTime.format('HH') * 3600) + (localTime.format('mm') * 60) + (localTime.format('ss') * 1),
        relativePositive = (secondsOfDay / 86400 * 2) % 1;
    return (relativePositive <= 0.5 ? relativePositive : (relativePositive - 1)) * 2;
  },

  updateTimes() {
    let rootStyle = document.documentElement.style;
    let greenwichTime = moment.tz('Europe/London');

    let portlandTime = greenwichTime.clone().tz('America/Los_Angeles');
    let londonTime = greenwichTime;
    let sydneyTime = greenwichTime.clone().tz('Australia/Sydney');
    let belfastTime = greenwichTime;
    let plzenTime = greenwichTime.clone().tz('Europe/Prague');
    let singaporeTime = greenwichTime.clone().tz('Asia/Singapore');
    let seattleTime = portlandTime;
    let tokyoTime = greenwichTime.clone().tz('Asia/Tokyo');

    rootStyle.setProperty('--portland-time', this.relativeClockTime(portlandTime));
    rootStyle.setProperty('--london-time', this.relativeClockTime(londonTime));
    rootStyle.setProperty('--sydney-time', this.relativeClockTime(sydneyTime));
    rootStyle.setProperty('--belfast-time', this.relativeClockTime(belfastTime));
    rootStyle.setProperty('--plzen-time', this.relativeClockTime(plzenTime));
    rootStyle.setProperty('--singapore-time', this.relativeClockTime(singaporeTime));
    rootStyle.setProperty('--seattle-time', this.relativeClockTime(seattleTime));
    rootStyle.setProperty('--tokyo-time', this.relativeClockTime(tokyoTime));

    rootStyle.setProperty('--clock-display', 'initial');

    Ember.run.later(this, this.updateTimes, 10000);
  }

});
