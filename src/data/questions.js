const questions = [
    {
        question: "What is the default state update behavior in React?",
        options: [
            "Immediate and synchronous",
            "Asynchronous and batched",
            "Delayed via Web Workers",
            "Re-rendered only on weekends"
        ],
        correctAnswer: "Asynchronous and batched",
        fakeCorrect: "Immediate and synchronous"
    },
    {
        question: "What does Tailwind CSS primarily use for styling?",
        options: [
            "SCSS files",
            "Class utilities",
            "Inline styles",
            "Prayer and vibes"
        ],
        correctAnswer: "Class utilities",
        fakeCorrect: "SCSS files"
    },
    {
        question: "Which hook is used to manage side-effects in React?",
        options: [
            "useContext",
            "useRef",
            "useEffect",
            "useForceRerenderBecauseYouBrokeIt"
        ],
        correctAnswer: "useEffect",
        fakeCorrect: "useRef"
    },
    {
        question: "What is `getStaticProps` used for in Next.js?",
        options: [
            "Fetching data at build time",
            "Fetching during SSR",
            "Dynamic route generation",
            "Getting vibes statically"
        ],
        correctAnswer: "Fetching data at build time",
        fakeCorrect: "Fetching during SSR"
    },
    {
        question: "Big-O of binary search?",
        options: [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(you wish)"
        ],
        correctAnswer: "O(log n)",
        fakeCorrect: "O(n)"
    },
    {
        question: "What is `z-index` in CSS?",
        options: [
            "Defines stacking order",
            "Zoom level",
            "Sets blur",
            "Decides if the div gets attention"
        ],
        correctAnswer: "Defines stacking order",
        fakeCorrect: "Zoom level"
    },
    {
        question: "What does `useRef()` return?",
        options: [
            "A mutable ref object",
            "A DOM node directly",
            "A callback function",
            "Your deepest regrets"
        ],
        correctAnswer: "A mutable ref object",
        fakeCorrect: "A DOM node directly"
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A function having access to its lexical scope",
            "A secure sandbox",
            "A bug",
            "Something you pretend to understand"
        ],
        correctAnswer: "A function having access to its lexical scope",
        fakeCorrect: "A secure sandbox"
    },
    {
        question: "What does `tailwind.config.js` do?",
        options: [
            "Extend/override design tokens",
            "Start the Tailwind dev server",
            "Configure PostCSS",
            "Unlock chakra alignment"
        ],
        correctAnswer: "Extend/override design tokens",
        fakeCorrect: "Start the Tailwind dev server"
    },
    {
        question: "What does `useEffect` do in React?",
        options: [
            "It fetches data automatically",
            "It runs side effects in functional components",
            "It replaces state variables",
            "It magically fixes bugs (sometimes)"
        ],
        correctAnswer: "It runs side effects in functional components",
        fakeCorrectAnswer: "It fetches data automatically"
    },
    {
        question: "Which utility class sets padding in Tailwind?",
        options: ["pl-4", "ml-4", "pt-4", "pb-4"],
        correctAnswer: "pl-4",
        fakeCorrectAnswer: "ml-4"
    },
    {
        question: "What is the default rendering strategy in Next.js?",
        options: ["SSR", "CSR", "SSG", "ISR"],
        correctAnswer: "SSR",
        fakeCorrectAnswer: "CSR"
    },
    {
        question: "Which of the following is NOT a valid React hook?",
        options: ["useRef", "useMemo", "useLoop", "useCallback"],
        correctAnswer: "useLoop",
        fakeCorrectAnswer: "useMemo"
    },
    {
        question: "What is the Big-O complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: "O(log n)",
        fakeCorrectAnswer: "O(n log n)"
    },
    {
        question: "Tailwind is what kind of CSS framework?",
        options: ["Utility-first", "Component-first", "Opinionated", "Chaotic-neutral"],
        correctAnswer: "Utility-first",
        fakeCorrectAnswer: "Component-first"
    },
    {
        question: "In JavaScript, `[] == ![]` evaluates to?",
        options: ["true", "false", "undefined", "Why are you like this?"],
        correctAnswer: "true",
        fakeCorrectAnswer: "false"
    },
    {
        question: "What does `getServerSideProps` return?",
        options: ["HTML string", "Props object", "Component", "Pain"],
        correctAnswer: "Props object",
        fakeCorrectAnswer: "Component"
    },
    {
        question: "What’s wrong with `useState(() => 0)`?",
        options: [
            "Nothing, it's fine",
            "It causes memory leaks",
            "It reinitializes state every render",
            "It breaks the component"
        ],
        correctAnswer: "Nothing, it's fine",
        fakeCorrectAnswer: "It reinitializes state every render"
    },
    {
        question: "Which HTTP status code means 'Not Found'?",
        options: ["200", "301", "404", "500"],
        correctAnswer: "404",
        fakeCorrectAnswer: "500"
    },
    {
        question: "What does `z-50` do in Tailwind?",
        options: ["Sets text zoom", "Changes font weight", "Sets z-index", "Kills the vibe"],
        correctAnswer: "Sets z-index",
        fakeCorrectAnswer: "Changes font weight"
    },
    {
        question: "Which of these is not part of the React lifecycle?",
        options: ["componentDidCatch", "componentDidCry", "componentDidMount", "componentDidUpdate"],
        correctAnswer: "componentDidCry",
        fakeCorrectAnswer: "componentDidCatch"
    },
    {
        question: "What is hydration in Next.js?",
        options: [
            "When the HTML is converted to JSX",
            "When server-rendered HTML becomes interactive",
            "When React turns water into JSX",
            "It’s when you drink water"
        ],
        correctAnswer: "When server-rendered HTML becomes interactive",
        fakeCorrectAnswer: "When the HTML is converted to JSX"
    },
    {
        question: "Which of the following is a stable Tailwind class?",
        options: ["bg-chaos", "font-wow", "hover:bg-red-500", "px-huh"],
        correctAnswer: "hover:bg-red-500",
        fakeCorrectAnswer: "bg-chaos"
    },
    {
        question: "What’s the React key prop used for?",
        options: [
            "To unlock state",
            "To improve security",
            "To identify elements in a list",
            "To gaslight developers"
        ],
        correctAnswer: "To identify elements in a list",
        fakeCorrectAnswer: "To improve security"
    },
    {
        question: "What does `useRef` return in React?",
        options: [
            "An object with a `.current` property",
            "A DOM element directly",
            "A function that updates state",
            "A React lifecycle callback"
        ],
        correctAnswer: "An object with a `.current` property",
        fakeCorrectAnswer: "A DOM element directly"
    },
    {
        question: "Which class makes text bold in Tailwind?",
        options: ["text-heavy", "font-bold", "bold-text", "weight-900"],
        correctAnswer: "font-bold",
        fakeCorrectAnswer: "bold-text"
    },
    {
        question: "What does `getStaticProps` in Next.js do?",
        options: [
            "Runs only on the client after hydration",
            "Runs at build time to generate static props",
            "Runs after every request",
            "Renders fallback pages dynamically"
        ],
        correctAnswer: "Runs at build time to generate static props",
        fakeCorrectAnswer: "Runs after every request"
    },
    {
        question: "Which is a valid way to center a div in Tailwind?",
        options: ["center-div", "mx-auto", "align-center", "justify-self-center"],
        correctAnswer: "mx-auto",
        fakeCorrectAnswer: "align-center"
    },
    {
        question: "What is `NaN === NaN` in JavaScript?",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswer: "false",
        fakeCorrectAnswer: "true"
    },
    {
        question: "Which of these sorts an array correctly in JS?",
        options: [
            `arr.sort((a, b) => a - b)`,
            `arr.sort(a, b => a < b)`,
            `arr.sort(() => 1)`,
            `arr.sort('asc')`
        ],
        correctAnswer: `arr.sort((a, b) => a - b)`,
        fakeCorrectAnswer: `arr.sort(a, b => a < b)`
    },
    {
        question: "What's the default port for Next.js dev server?",
        options: ["3000", "4000", "8080", "3333"],
        correctAnswer: "3000",
        fakeCorrectAnswer: "8080"
    },
    {
        question: "Which hook prevents unnecessary renders?",
        options: ["useCallback", "useMemo", "useState", "useRenderGuard"],
        correctAnswer: "useCallback",
        fakeCorrectAnswer: "useMemo"
    },
    {
        question: "Which sorting algorithm is the fastest on average?",
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Bogo Sort"],
        correctAnswer: "Merge Sort",
        fakeCorrectAnswer: "Bubble Sort"
    },
    {
        question: "What does `typeof null` return?",
        options: ["'null'", "'object'", "'undefined'", "'void'"],
        correctAnswer: "'object'",
        fakeCorrectAnswer: "'null'"
    },
    {
        question: "What is the output of `'5' - 2` in JS?",
        options: ["3", "'3'", "NaN", "TypeError"],
        correctAnswer: "3",
        fakeCorrectAnswer: "'3'"
    },
    {
        question: "How do you apply conditional styles in Tailwind?",
        options: [
            "With a CSS file",
            "With classnames or template literals",
            "With inline `style={{}}` only",
            "You don’t. You suffer."
        ],
        correctAnswer: "With classnames or template literals",
        fakeCorrectAnswer: "With inline `style={{}}` only"
    },
    {
        question: "What’s the primary use of `useMemo`?",
        options: [
            "To remember past renders",
            "To memoize expensive calculations",
            "To cache API responses",
            "To pause re-renders completely"
        ],
        correctAnswer: "To memoize expensive calculations",
        fakeCorrectAnswer: "To cache API responses"
    },
    {
        question: "Which of these is NOT a valid Next.js folder?",
        options: ["/app", "/pages", "/public", "/scripts"],
        correctAnswer: "/scripts",
        fakeCorrectAnswer: "/public"
    },
    {
        question: "What happens if you push to state directly in React?",
        options: [
            "The component re-renders",
            "React crashes",
            "State mutates silently; no re-render",
            "It auto-fixes on next render"
        ],
        correctAnswer: "State mutates silently; no re-render",
        fakeCorrectAnswer: "The component re-renders"
    }
];

export default questions;