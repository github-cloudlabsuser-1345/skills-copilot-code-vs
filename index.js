import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

// Example usage:
const input = "hello world";
const reversed = reverseSentence(input);
console.log(reversed); // Output: "World hello"
function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

// Example usage:
const flattenedData = flattenArray(data);
console.log(flattenedData);
// Output: [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Bob', age: 40 }]
function extractNames(arr) {
    return arr.flat().map(person => person.name);
}

// Example usage:
const names = extractNames(data);
console.log(names);
// Output: ['John', 'Jane', 'Bob']
const data = [
    [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }],
    [{ name: 'Bob', age: 40 }]
];

const names = extractNames(data);
console.log(names); // Output: ['John', 'Jane', 'Bob']