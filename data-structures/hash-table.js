/**
 * Hash Tables
 * Key-value pairs
 *
 * Lookup: O(1)
 * Insertion: O(1)
 */

function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  let total = 0;
  
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  
  return total % this.numBuckets;
};

HashTable.prototype.insert = function(key, value) {
  const index = this.hash(key);
  
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    let currentNode = this.buckets[index];
    
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }

      currentNode = currentNode.next;
    }
    
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  const index = this.hash(key);
  
  if (!this.buckets[index]) {
    return null;
  }
  
  let currentNode = this.buckets[index];
  
  while (currentNode) {
    if (currentNode.key === key) {
      return currentNode.value;
      
      currentNode = currentNode.next;
    }
  }
  
  return null;
};

HashTable.prototype.getAll = function() {
  const allNodes = [];
  
  for (let i = 0; i < this.numBuckets; i++) {
    let currentNode = this.buckets[i];
    
    while (currentNode) {
      allNodes.push(currentNode);
      
      currentNode = currentNode.next;
    }
  }
  
  return allNodes;
};

const myHT = new HashTable(100);
myHT.insert('Dean Joe', 'dean@gmail.com');
myHT.insert('John Abrams', 'john@gmail.com');
myHT.insert('Mary Poppins', 'mary@gmail.com');
myHT.insert('Rose Charm', 'rose@gmail.com');
myHT.insert('Carl Marx', 'carl@gmail.com');

console.log(myHT.getAll());
