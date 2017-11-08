import test from 'ava';
import m from './';

const fixture = [
	'sindresorhus@gmail.com',
	'foo@bar',
	'test@about.museum',
	'test@nominet.org.uk',
	'test.test@sindresorhus.com',
	'test@255.255.255.255',
	'a@sindresorhus.com',
	'test@e.com',
	'test@xn--hxajbheg2az3al.xn--jxalpdlp',
	'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghiklm@sindresorhus.com',
	'!#$%&amp;`*+/=?^`{|}~@sindresorhus.com',
	'test@g--a.com',
	'a@abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghikl.abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghikl.abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghikl.abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefg.hij',
	'123@sindresorhus.com',
	'"\\a"@sindresorhus.com',
	'""@sindresorhus.com',
	'"test"@sindresorhus.com',
	'"\\""@sindresorhus.com',
	'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghiklmn@sindresorhus.com',
	'test@iana.co-uk',
	'a@a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v',
	'test@foo-bar.com'
];

const fixtureNot = [
	'@',
	'@io',
	'@sindresorhus.com',
	'test..sindresorhus.com',
	'test@iana..com',
	'test@sindresorhus.com.',
	'.test@sindresorhus.com',
	'sindre@sindre@sindre.com',
	'mailto:sindresorhus@gmail.com'
];

test('extract', t => {
	fixture.forEach(x => {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	});

	t.is(m().exec('mailto:sindresorhus@gmail.com')[0], 'sindresorhus@gmail.com');
});

test('exact', t => {
	fixture.forEach(x => {
		t.true(m({exact: true}).test(x));
	});
});

test('failures', t => {
	fixtureNot.forEach(x => {
		t.false(m({exact: true}).test(x));
	});
});
