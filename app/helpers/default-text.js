import { helper } from '@ember/component/helper';

export default helper(function defaultText(params, namedArgs) {
	var ret = ( params ? params : namedArgs.default);
  return ret;
});
