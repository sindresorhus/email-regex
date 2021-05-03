const regex = '[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';

export default function emailRegex({exact} = {}) {
	return exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');
}
