import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | forces/neighbourhood', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:forces/neighbourhood');
    assert.ok(route);
  });
});
