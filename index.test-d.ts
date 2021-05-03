import {expectType} from 'tsd';
import emailRegex from './index.js';

expectType<RegExp>(emailRegex());
expectType<RegExp>(emailRegex({}));
expectType<RegExp>(emailRegex({exact: true}));
