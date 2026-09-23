# JavaScript Practice: Foundation to Advanced

This repository is a hands-on path for learning JavaScript from the first variable to production-ready applications. Study one section at a time, write the examples yourself, and complete the practice tasks before moving forward.

## How to Practice

1. Install a current LTS version of [Node.js](https://nodejs.org/).
2. Run a file with `node filename.js`.
3. For browser topics, create an HTML file and open it in a browser, or use the browser DevTools console.
4. Keep each exercise small. First make it work, then improve names, error handling, tests, and performance.
5. Use `console.log`, breakpoints, and the debugger to inspect values instead of guessing.

## Learning Roadmap

### 1. JavaScript Foundations

Learn these concepts first:

- What JavaScript is: language, runtime, engine, ECMAScript, and host APIs
- Comments, statements, expressions, syntax, strict mode, and semicolons
- Values and data types: `string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`, and `object`
- Variables: `let`, `const`, and legacy `var`; declaration, assignment, scope, and naming
- Operators: arithmetic, assignment, comparison, logical, ternary, nullish coalescing, optional chaining, bitwise, and `typeof`
- Type conversion, truthy/falsy values, equality (`===` versus `==`), `NaN`, `Infinity`, and floating-point precision
- Strings: indexing, template literals, searching, slicing, replacing, splitting, trimming, and regular expressions
- Numbers and `Math`: rounding, random values, parsing, decimal limitations, and `BigInt`
- Control flow: `if`, `else`, `switch`, `for`, `while`, `do...while`, `break`, `continue`, and labeled statements
- Functions: declarations, expressions, arrow functions, parameters, defaults, rest parameters, return values, and pure functions
- Scope and execution: global scope, module scope, block scope, function scope, hoisting, temporal dead zone, and closures

**Practice projects:** calculator, unit converter, grade checker, number guessing game, password strength checker, and a command-line quiz.

### 2. Arrays, Objects, and Data

- Arrays: indexing, mutation, `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, `concat`, and spread syntax
- Array methods: `forEach`, `map`, `filter`, `find`, `findIndex`, `some`, `every`, `reduce`, `sort`, `flat`, and `flatMap`
- Objects: properties, methods, computed keys, shorthand syntax, destructuring, spread, copying, and immutability
- References versus primitive values; shallow copy versus deep copy
- `Object.keys`, `Object.values`, `Object.entries`, `Object.assign`, and property descriptors
- `Map`, `Set`, `WeakMap`, and `WeakSet`
- Dates, `Intl`, JSON serialization, parsing, and validation
- Regular expressions and common flags
- Algorithms: counting, searching, sorting, deduplication, frequency maps, recursion, and Big-O notation

**Practice projects:** contact book, shopping cart, inventory tracker, expense analyzer, data filter, and a word-frequency counter.

### 3. Modern JavaScript and Modules

- Destructuring and default values
- Spread and rest syntax
- Optional chaining and nullish coalescing
- Enhanced object literals and computed properties
- Iterators, iterables, generators, and `for...of`
- Symbols and custom iteration
- ES modules: `export`, `import`, default exports, named exports, and module boundaries
- CommonJS basics: `require` and `module.exports`
- Dynamic `import()` and top-level `await`
- Strict mode and compatibility considerations

**Practice project:** split a task manager into modules for data, validation, commands, and persistence.

### 4. Object-Oriented and Functional Programming

- Prototypes and the prototype chain
- Constructor functions and classes
- Instance methods, static methods, getters, setters, private fields, and inheritance
- `this`: call site, method calls, constructors, explicit binding, arrow functions, and common mistakes
- Composition versus inheritance
- Encapsulation and abstraction
- Functional ideas: pure functions, immutability, higher-order functions, currying, composition, and declarative code
- Closures for factories, private state, memoization, and callbacks

**Practice projects:** bank account model, library system, plugin architecture, and a reusable validation library.

### 5. Errors, Debugging, and Code Quality

- `try`, `catch`, `finally`, `throw`, and custom error classes
- Synchronous versus asynchronous errors
- Input validation and defensive programming
- Error messages, error boundaries, and safe recovery
- Browser DevTools: console, Sources, breakpoints, watch expressions, Network, Application, and Performance panels
- Node.js debugging and stack traces
- Naming, small functions, single responsibility, formatting, linting, and documentation
- Avoiding global state, accidental mutation, callback nesting, and silent failures

**Practice:** deliberately introduce five bugs into an exercise, then diagnose and document each one.

### 6. Asynchronous JavaScript

- The call stack, heap, event loop, task queue, and microtask queue
- Callbacks and callback error conventions
- Promises: states, chaining, rejection, `then`, `catch`, and `finally`
- `async` and `await`
- `Promise.all`, `allSettled`, `race`, and `any`
- Timeouts, retries, cancellation, and `AbortController`
- Sequential versus parallel work
- Async iteration and streams
- Handling loading, success, empty, timeout, and failure states

**Practice projects:** delayed search, weather client, concurrent file processor, retry utility, and a multi-step checkout simulation.

### 7. Browser JavaScript and the DOM

- HTML, CSS, and JavaScript responsibilities
- Selecting and creating DOM elements
- Text, attributes, classes, styles, and forms
- Events, event objects, bubbling, capturing, delegation, and preventing default behavior
- Form validation and accessible error messages
- Timers, animation frames, and browser storage
- `localStorage`, `sessionStorage`, cookies, and IndexedDB basics
- Fetching JSON and displaying remote data
- URL, History, Clipboard, Geolocation, Notifications, and File APIs
- Web Workers and service worker concepts
- Accessibility: semantic HTML, keyboard use, focus management, labels, and ARIA only when necessary

**Practice projects:** to-do app, searchable table, modal dialog, image gallery, notes app, and offline-capable dashboard.

### 8. HTTP, APIs, and Security

- HTTP methods, status codes, headers, JSON, query parameters, and REST conventions
- `fetch`, request bodies, authentication headers, CORS, caching, and pagination
- API validation, rate limits, retries, and versioning
- Authentication versus authorization
- Sessions, tokens, cookies, CSRF, XSS, injection, and secure password handling
- Never trust client-side validation or expose secrets in frontend code
- Content Security Policy, HTTPS, dependency updates, and least privilege
- Safe rendering: prefer text APIs and sanitize untrusted HTML

**Practice project:** build a frontend that consumes a public API, handles all request states, and validates every user input.

### 9. Node.js and Backend JavaScript

- Node.js runtime, npm, package files, scripts, and semantic versioning
- Built-in modules: `fs`, `path`, `url`, `http`, `events`, `crypto`, `stream`, and `process`
- Environment variables and configuration
- File I/O, buffers, streams, and backpressure
- HTTP servers, routing, middleware, and JSON responses
- REST API design and validation
- Databases: relational concepts, SQL, NoSQL, indexes, transactions, and migrations
- Logging, health checks, graceful shutdown, and process signals
- Background jobs, queues, caching, and rate limiting
- Deploying a Node.js service and managing secrets

**Practice projects:** file CLI, URL shortener, notes API, authentication service, and a small job queue.

### 10. Testing and Tooling

- Unit, integration, contract, end-to-end, regression, and smoke tests
- Arrange-Act-Assert and test isolation
- Mocking, stubbing, fakes, fixtures, and test data
- Code coverage: useful signal, not a quality guarantee
- npm scripts and package management
- ESLint, Prettier, editor settings, and Git hooks
- Bundlers and build concepts: Vite, Rollup, Webpack, and tree shaking
- TypeScript basics: types, interfaces, unions, generics, narrowing, and `tsconfig`
- Continuous integration: install, lint, test, build, and report failures

**Practice:** add tests and linting to every earlier project before starting the next level.

### 11. Advanced JavaScript

- Execution contexts, lexical environments, closures, and garbage collection
- Property descriptors, getters, setters, and proxies
- Reflect API and metaprogramming
- Symbols, iterators, generators, and async generators
- Weak references and finalization concepts
- Event emitters and publish-subscribe design
- Streams, binary data, workers, and concurrency limits
- Memoization, debouncing, throttling, batching, and lazy evaluation
- Functional reactive concepts and state machines
- Performance profiling, memory leaks, rendering cost, and bundle size
- Design patterns: module, factory, adapter, observer, strategy, command, and dependency injection
- Reading ECMAScript and Web API documentation

**Practice projects:** rate limiter, event bus, observable store, worker-based image processor, and a mini template engine.

### 12. Frontend Frameworks and Production Apps

After mastering JavaScript and the DOM, learn one framework deeply:

- Components, properties, state, events, forms, effects, routing, and data fetching
- Rendering, reconciliation, lifecycle, and state ownership
- Accessibility, responsive behavior, loading states, and error states
- Component testing and end-to-end testing
- Server rendering, static generation, code splitting, and hydration concepts
- Production logging, monitoring, source maps, and release workflows

Choose React, Vue, Angular, or Svelte based on the project you want to build. The JavaScript fundamentals above remain essential in every framework.

## Suggested 12-Week Schedule

| Weeks | Focus | Deliverable |
| --- | --- | --- |
| 1-2 | Syntax, types, variables, operators, control flow | Calculator and quiz |
| 3 | Functions, scope, closures | Utility library |
| 4 | Arrays, objects, data transformation | Expense analyzer |
| 5 | DOM, events, forms | To-do app |
| 6 | Modules, errors, debugging | Refactored to-do app |
| 7 | Promises, async/await, fetch | API dashboard |
| 8 | Node.js and npm | CLI tool |
| 9 | HTTP and REST APIs | Notes API |
| 10 | Databases and security | Persistent notes service |
| 11 | Testing and TypeScript | Tested typed project |
| 12 | Performance and deployment | Capstone release |

## Capstone Projects

Build at least one complete project with a README, input validation, responsive UI, tests, error handling, persistence, authentication if needed, and deployment instructions:

- Full-stack task manager
- Expense and budget tracker
- Real-time chat application
- E-commerce product catalog
- Learning management dashboard
- Collaborative notes application
- Public API with documentation and rate limiting

## Completion Checklist

- [ ] I can explain primitive values, objects, references, and coercion.
- [ ] I can write functions using scope, closures, and appropriate parameters.
- [ ] I can transform and validate arrays and objects safely.
- [ ] I understand `this`, prototypes, classes, and composition.
- [ ] I can handle asynchronous success, failure, cancellation, and concurrency.
- [ ] I can build accessible DOM interactions and forms.
- [ ] I can consume and design HTTP APIs.
- [ ] I can create a Node.js service and use a database.
- [ ] I can test, debug, lint, and document my code.
- [ ] I can identify common web security risks.
- [ ] I can profile performance and explain a trade-off.
- [ ] I have shipped a complete project.

## Useful References

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [MDN Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [ECMAScript Specification](https://tc39.es/ecma262/)

## Rule for Every Exercise

Write the smallest working version, test normal and invalid input, handle failure clearly, refactor duplicated code, and explain what you learned in a short note before continuing.
