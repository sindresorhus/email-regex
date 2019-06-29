import {expectType} from 'tsd';
import emailRegex = require('.');

expectType<RegExp>(emailRegex());
expectType<RegExp>(emailRegex({}));
expectType<RegExp>(emailRegex({exact: true}));
