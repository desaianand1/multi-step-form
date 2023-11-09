/**
 * Validates whether a string is a valid email address according to {@link https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1 RFC2822}
 *
 * This is **NOT** intended to be used in a real-world scenario and only exists as a simple, but mostly correct email validator for this project.
 * The actual regular expression was sourced from {@link https://regexr.com/2rhq7 regexr}. You may test matches there for further clarity.
 * @param email string to be validated
 * @returns {boolean} whether the string provided is a valid email address according to RFC2822
 */
export function validateEmailAddress(email: string): boolean {
	const emailRegExp = new RegExp(
		"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
	); //eslint-disable-line
	return email.match(emailRegExp) !== null;
}
/**
 * Validates whether a string is a valid phone number according to {@link https://www.itu.int/rec/T-REC-E.164-201011-I/en E.164} specifications
 *
 * This is **NOT** intended to be used in a real-world scenario and only exists as a simple, but mostly correct phone number validator for this project.
 * The actual regular expression was sourced from {@link https://ihateregex.io/expr/phone/ this online example}.
 * @param number
 * @returns {boolean} whether the string provided is a valid phone number according to RFC
 */
export function validatePhoneNumber(number: string): boolean {
	const phoneNumberRegExp = new RegExp('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'); //eslint-disable-line
	return number.match(phoneNumberRegExp) !== null;
}
