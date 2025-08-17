export default function emailRegex(options) {
	options = {
		exact: false,
		allowSingleLabelDomain: true,
		allowAmpersandEntity: false,
		...options,
	};

	// RFC 5322 (https://datatracker.ietf.org/doc/html/rfc5322)
	const atextInner = String.raw`[A-Za-z\d!#$%&'*+\-/=?^_\`{|}~]`;
	const atext = options.allowAmpersandEntity ? `(?:${atextInner}|&amp;)` : atextInner;
	const dquote = '"';
	const wsp = String.raw`[ \u0009]`;
	const cr = String.raw`\u000D`;
	const lf = String.raw`\u000A`;
	const obsNoWsCtl = String.raw`(?:[\u0001-\u0008]|\u000B|\u000C|[\u000E-\u001F]|\u007F)`;
	const obsQtext = obsNoWsCtl;
	const qtext = String.raw`(?:!|[\u0023-\u005B]|[\u005D-\u007E]|${obsQtext})`;
	const vchar = String.raw`[\u0021-\u007E]`;
	const obsQp = String.raw`(?:\\(?:\u0000|${obsNoWsCtl}|${lf}|${cr}))`;
	const quotedPair = String.raw`(?:\\(?:${vchar}|${wsp})|${obsQp})`;
	const qcontent = `(?:${qtext}|${quotedPair})`;
	const quotedString = `(?:${dquote}${qcontent}*${dquote})`;
	const atom = `${atext}+`;
	const word = `(?:${atom}|${quotedString})`;
	const dotAtomOrObsLocalPart = String.raw`(?:${word}(?:\.${word})*)`; // Overlap between dot-atom and obs-local-part
	const localPart = `(?:${dotAtomOrObsLocalPart}|${quotedString})`;
	const obsDtext = `(?:${obsNoWsCtl}|${quotedPair})`;
	const dtext = String.raw`(?:[\u0021-\u005A]|[\u005E-\u007E]|${obsDtext})`;
	const domainLiteral = String.raw`(?:\[${dtext}*])`;
	const dotAtomOrObsDomain = String.raw`(?:${atom}(?:\.${atom})${options.allowSingleLabelDomain ? '*' : '+'})`; // Overlap between dot-atom and obs-domain
	const domain = `(?:${dotAtomOrObsDomain}|${domainLiteral})`;
	const addrSpec = `${localPart}@${domain}`;

	return options.exact ? new RegExp(`^${addrSpec}$`) : new RegExp(addrSpec, 'g');
}
