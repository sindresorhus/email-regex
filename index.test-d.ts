import {expectType} from 'tsd-check';
import emailRegex from '.';

(async () => {
	expectType<RegExp>(emailRegex());
	expectType<RegExp>(emailRegex({}));
	expectType<RegExp>(emailRegex({ exact: true }));
})();
