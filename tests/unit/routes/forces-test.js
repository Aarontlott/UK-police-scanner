import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | forces', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:forces');
    assert.ok(route);
  });
});
