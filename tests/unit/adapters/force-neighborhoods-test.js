import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | force neighborhoods', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:force-neighborhoods');
    assert.ok(adapter);
  });
});
