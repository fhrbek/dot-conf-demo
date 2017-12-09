export function initialize(application) {
  application.inject('route', 'clock-update', 'service:clock-update');
}

export default {
  name: 'clock-update',
  initialize: initialize
};
