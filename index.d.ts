export interface Options {
	/**
	 * Only match an exact string.
	 *
	 * @default false
	 */
	exact?: boolean
}

/**
 * Returns a regex for matching email addresses.
 *
 * @param options - Configure the generated regular expression
 * @returns Regex for matching email addresses.
 */
export default function emailRegex(options?: Options): RegExp;
