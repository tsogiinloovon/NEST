// LRU_cache implementation as javascript;
var LRUCache = function (capacity) {
  cache_size = capacity;
  hashmap = new Map();
};

//Return the value of the key if the key exists, otherwise return -1.
LRUCache.prototype.get = (key) => {
  if (!hashmap.has(key)) {
    return -1;
  }
  const v = hashmap.get(key);
  hashmap.delete(key);
  hashmap.set(key, v);
  return hashmap.get(key);
};

LRUCache.prototype.set = (key, value) => {
  if (hashmap.has(key)) {
    hashmap.delete(key);
  }
  hashmap.set(key, value);
  if (hashmap.size > cache_size) {
    hashmap.delete(hashmap.keys().next().value);
  }
};

let lru_cache = new LRUCache(3);

lru_cache.set(1, 100);
lru_cache.set(2, 200);
lru_cache.set(3, 300);
lru_cache.set(4, 400);

console.log("is there something ?:", lru_cache.get(4));


