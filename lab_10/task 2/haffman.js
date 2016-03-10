"use strict";

class Node {
    constructor(char, count) {
        this.char = char;
        this.count = count;
        this.left = undefined;
        this.right = undefined;
    }

    toString() {
        return '[' + this.char + ']{' + this.count + '}';
    }

    traverse() {
        function inner(node, indent) {
            if (node.left !== undefined) {
                inner(node.left, indent + '        ');
            }
            console.log(indent + node.toString());
            if (node.right !== undefined) {
                inner(node.right, indent + '        ');
            }
        }

        inner(this, '     ');
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    static buildTree(freqs) {
        var nodes = mapToNodes(mapToSortedArray(freqs));
        while (nodes.length > 1) {
            nodes = Tree.buildLevel(nodes);
        }
        return new Tree(nodes.pop());
    }

    static buildLevel(prev_level) {
        var new_level = new Array();
        var count = Math.floor(prev_level.length / 2);

        for (var i = 0; i < count; i++) {
            var left = prev_level.pop();
            var right = prev_level.pop();
            var newNode = Tree.combine_nodes(left, right);
            newNode.left = left;
            newNode.right = right;
            left.parent = newNode;
            right.parent = newNode;
            new_level.push(newNode);
        }

        if (prev_level.length > 0) {
            new_level.push(prev_level.pop());
        }
        return new_level.reverse();
    }

    static combine_nodes(left, right) {
        return new Node(right.char + left.char, right.count + left.count);
    }

    buildCodes() {
        function inner(node, code, codes) {
            if (node.left === undefined && node.right === undefined) {
                codes.set(node.char, code);
                return codes;
            }

            if (node.left !== undefined) {
                inner(node.left, code + '1', codes);
            }
            if (node.right !== undefined) {
                inner(node.right, code + '0', codes);
            }
        }

        var codes = new Map();
        inner(this.root, '', codes);
        return codes;
    }


    traverse() {
        this.root.traverse();
    }
}

function calcCharFrequencies(data) {
    var frequencies = new Map();

    for (var i = 0; i < data.length; i++) {
        if (frequencies.has(data[i])) {
            var curr = frequencies.get(data[i]);
            frequencies.set(data[i], curr + 1);
        } else {
            frequencies.set(data[i], 1);
        }
    }

    return frequencies;
}

function mapToSortedArray(m) {
    var freqsArr = new Array();
    m.forEach((v, k) => freqsArr.push([v, k]));

    return freqsArr.sort(x => x[0]);
}

function reverseMap(input) {
    var output = new Map();
    input.forEach((v, k) => output.set(v, k));

    return output;
}

function mapToNodes(array) {
    return array.map(x => new Node(x[1], x[0]));
}

function encode(input, codes) {
    var output = new Array(input.length);
    for (var i = 0; i < input.length; i++) {
        output[i] = codes.get(input[i]);
    }

    return output.join('');
}

function getCodeLengths(codes) {
    var lengths = new Set();
    for (var code of codes.keys()) {
        lengths.add(code.length);
    }
    return lengths;
}

function decode(input, codes) {
    var i = 0;
    var k = 0;
    var output = new Array();
    var codeLengths = getCodeLengths(codes);
    while (i < input.length - 1) {
        for (let j of codeLengths) {
            var substr = input.slice(i, i + j);
            if (codes.has(substr)) {
                output[k] = codes.get(substr);
                k++;
                i += j;
                break;
            }
        }
    }
    return output.join('');
}

var input = 'abbcccddddeeeeeffffffggggggghhhhhhhhiiiiiiiiijjjjjjjjjj';
var freqs = calcCharFrequencies(input);

var tree = Tree.buildTree(freqs);
tree.traverse();
var codes = tree.buildCodes();
console.log(codes);
var table = reverseMap(codes);
var test = encode('abdf', codes);
console.log(test);
console.log(decode(test, table));