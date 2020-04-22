/**
 * Design an LRU(least recently used) Cache
 *
 * LRU caches are often used to implement caches which you do not want to grow indefinitely. The cache has a max size,
 * and when a new key is inserted that would make it grow larger than the max size, the key which has not been accessed
 * for the longest time is removed to make space.
 *
 * It should support these operations:
 * get(key): get the value of the key if the key exists in the cache
 * put(key, value): add a new entry if the key doesn't exist; update the key if it exists; if the cache reached its
 * capacity, it should invalidate the least recently used item before inserting a new item
 *
 * What happens if you call get(key) on a key which doesn't exist in the cache is up to you to define.
 */

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.entries = new Map();
	}

	put = (key, value) => {
		// check if cache reached its maximum capacity
		if (this.entries.size > 0 && this.entries.size === this.capacity) {
			const entries = this.entries.entries();

			// sort cache entries by the `lastModified` flag
			const sorted = [...entries].sort(([aKey, aValue], [bKey, bValue]) => {
				return aValue.lastModified - bValue.lastModified;
			});

			// remove least recent used element from the array
			const [key] = sorted.shift();
			this.entries.delete(key);
		}

		return this.entries.set(key, {
			value,
			lastModified: Date.now(),
		})
	};

	get = (key) => {
		if (this.entries.has(key)) {
			// update `lastModified`
			this.entries.set(key, {
				value: this.entries.get(key),
				lastModified: Date.now(),
			});

			return this.entries.get(key).value.value;
		}

		return 'key not found';
	};
}

const cache = new LRUCache(3);
setTimeout(() => { console.log(cache.put(1, 'a')) }, 1000);
setTimeout(() => { console.log(cache.put(2, 'b')) }, 1000);
setTimeout(() => { console.log(cache.put(3, 'c')) }, 1000);
setTimeout(() => { console.log(cache.get(5)) }, 1000);
setTimeout(() => { console.log(cache.get(1)) }, 1000);
setTimeout(() => { console.log(cache.put(4, 'd')) }, 1000);
