// Jokes Array
const jokes = [
    "Capitalism: where you’re free to succeed… or free to sleep on the street.",
    "I told my boss I need a raise—turns out, the only thing rising is the CEO’s bonus.",
    "Capitalism loves competition, unless you’re competing with the 1%.",
    "In capitalism, you can be anything! Except financially secure.",
    "I bought a house in capitalism… now I’m paying rent to my landlord’s yacht.",
    "Capitalism: where healthcare costs an arm, a leg, and your soul.",
    "They say capitalism lifts all boats—mine’s still sinking.",
    "In capitalism, you’re not poor—you’re just pre-rich!",
    "I love capitalism: I work 80 hours a week to afford a 40-hour lifestyle.",
    "Capitalism: where your worth is measured by your net worth.",
    "I tried to climb the corporate ladder, but it was a pyramid scheme.",
    "Capitalism: where the invisible hand slaps you with debt.",
    "In capitalism, you can have it all—if ‘all’ means crippling student loans.",
    "Capitalism: where the only thing trickling down is despair.",
    "Socialism: where everyone’s equal… at waiting in bread lines.",
    "I tried socialism, but now I’m sharing my Netflix password with the government.",
    "Socialism: because who doesn’t love a good 5-year plan to nowhere?",
    "In socialism, we’re all in this together—except the guy in charge.",
    "Socialism: where your hard work pays for someone else’s vacation.",
    "I joined a socialist commune, but they took my individuality too.",
    "Socialism: where the only thing redistributed is disappointment.",
    "In socialism, everyone gets a piece of the pie—if the pie’s stale.",
    "Socialism: because why succeed when you can share the failure?",
    "I love socialism: my neighbor’s taxes paid for my 3-hour lunch break.",
    "Socialism: where the government cares… about controlling you.",
    "In socialism, we’re all comrades—until the food runs out.",
    "Socialism: where the only thing growing is the bureaucracy.",
    "Socialism: because who needs freedom when you have free stuff?",
    "The American education system: preparing you for a future of debt.",
    "I learned math in school—now I’m calculating how to pay off my loans.",
    "American schools: where you’re taught to dream big, but not how to afford it.",
    "I got an A+ in history, but I still can’t afford my future.",
    "The American education system: where standardized tests standardize failure.",
    "I went to school to get a degree—now I’m degree-d in debt.",
    "American education: where teachers are paid less than the textbooks.",
    "I graduated with honors, but I’m still broke with dishonor.",
    "The American education system: where you learn to spell ‘bankruptcy.’",
    "I aced my finals, but flunked at paying my student loans.",
    "American schools: where you’re taught to follow your dreams… into debt.",
    "I learned about democracy in school, but not how to afford living in one.",
    "The American education system: where the only thing free is the stress.",
    "I got a diploma, but the real lesson was surviving the system.",
    "I’m underpaid, but at least I can afford… nothing.",
    "My job pays me in experience—too bad the landlord doesn’t accept that.",
    "I work an underpaid job: I’m rich in stress, poor in cash.",
    "Underpaid jobs: where you’re one paycheck away from homelessness.",
    "I asked for a raise at my underpaid job—they gave me more work.",
    "My underpaid job: where overtime is the only time I’m paid.",
    "I’m underpaid, but my boss says I’m overworked—win-win!",
    "Underpaid jobs: where you’re essential, but your pay isn’t.",
    "I work an underpaid job: my bank account is on life support.",
    "My underpaid job: where I’m paid in ‘exposure’ to poverty.",
    "I’m underpaid, but at least I can afford to dream of a better life.",
    "Underpaid jobs: where you’re a hero, but your wallet’s a zero.",
    "I asked for a living wage—they gave me a living nightmare.",
    "Underpaid jobs: where you work hard so the CEO doesn’t have to.",
    "Trump’s administration: where the wall was built… around the truth.",
    "I miss Trump’s tweets—they were the real national emergency.",
    "Trump’s administration: where ‘fake news’ was the only real news.",
    "Trump said he’d drain the swamp—turns out, he just added alligators.",
    "Trump’s administration: where the only thing stable was the chaos.",
    "I loved Trump’s healthcare plan—it was to die for.",
    "Trump’s administration: where the art of the deal was a steal.",
    "Trump said he’d make America great again—guess I missed that part.",
    "Trump’s administration: where the only thing built was his ego.",
    "I applied for a job in Trump’s administration—they said I wasn’t loyal enough to lie.",
    "Trump’s administration: where the only thing transparent was the corruption.",
    "Trump said he’d bring jobs back—mostly for his lawyers.",
    "Trump’s administration: where the Space Force fought for space in the budget.",
    "Trump’s presidency: where every day was a new covfefe."
];

// Function to get a random joke
function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Check if joke should be shown (based on "Don't Show Again Today")
function shouldShowJoke() {
    const lastHidden = localStorage.getItem("hideJokeUntil");
    if (!lastHidden) return true;
    const now = new Date();
    const hideUntil = new Date(lastHidden);
    return now > hideUntil;
}

// Display the joke modal on page load
window.addEventListener('load', () => {
    if (shouldShowJoke()) {
        const jokeModal = document.getElementById("jokeModal");
        const jokeText = document.getElementById("jokeText");
        jokeText.innerText = getRandomJoke();
        jokeModal.style.display = "block";
    }
});

// Handle "Don't Show Again Today" checkbox
document.getElementById("dontShowJoke").addEventListener("change", (e) => {
    if (e.target.checked) {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        localStorage.setItem("hideJokeUntil", tomorrow.toISOString());
    } else {
        localStorage.removeItem("hideJokeUntil");
    }
});

// Close the joke modal
document.getElementById("closeJokeBtn").addEventListener("click", () => {
    document.getElementById("jokeModal").style.display = "none";
});
document.querySelector("#jokeModal .close").addEventListener("click", () => {
    document.getElementById("jokeModal").style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("jokeModal")) {
        document.getElementById("jokeModal").style.display = "none";
    }
});

// Bus Schedules
const busSchedules = [
    {
        route: "University Union → Leroy & Beethoven St",
        type: "arriving",
        weekday: [
            { departure: "7:00 AM", arrival: "7:11 AM" },
            { departure: "7:30 AM", arrival: "7:41 AM" },
            { departure: "8:05 AM", arrival: "8:16 AM" },
            { departure: "8:40 AM", arrival: "8:51 AM" },
            { departure: "9:10 AM", arrival: "9:21 AM" },
            { departure: "9:30 AM", arrival: "9:41 AM" },
            { departure: "10:35 AM", arrival: "10:46 AM" },
            { departure: "10:50 AM", arrival: "11:01 AM" },
            { departure: "11:10 AM", arrival: "11:21 AM" },
            { departure: "12:00 PM", arrival: "12:11 PM" },
            { departure: "12:30 PM", arrival: "12:41 PM" },
            { departure: "1:05 PM", arrival: "1:16 PM" },
            { departure: "1:40 PM", arrival: "1:51 PM" },
            { departure: "2:10 PM", arrival: "2:21 PM" },
            { departure: "2:30 PM", arrival: "2:41 PM" },
            { departure: "3:35 PM", arrival: "3:46 PM" },
            { departure: "4:20 PM", arrival: "4:31 PM" },
            { departure: "4:55 PM", arrival: "5:06 PM" },
            { departure: "5:30 PM", arrival: "5:41 PM" },
            { departure: "6:00 PM", arrival: "6:11 PM" },
            { departure: "6:35 PM", arrival: "6:46 PM" },
            { departure: "7:25 PM", arrival: "7:36 PM" },
            { departure: "7:40 PM", arrival: "7:51 PM" },
            { departure: "8:00 PM", arrival: "8:11 PM" },
            { departure: "9:00 PM", arrival: "9:11 PM" },
            { departure: "9:20 PM", arrival: "9:31 PM" },
            { departure: "10:15 PM", arrival: "10:26 PM" },
            { departure: "11:15 PM", arrival: "11:26 PM" },
            { departure: "12:00 AM", arrival: "12:11 AM" }
        ],
        saturday: [
            { departure: "8:45 AM", arrival: "8:56 AM" },
            { departure: "9:45 AM", arrival: "9:56 AM" },
            { departure: "10:45 AM", arrival: "10:56 AM" },
            { departure: "11:15 AM", arrival: "11:26 AM" },
            { departure: "12:30 PM", arrival: "12:41 PM" },
            { departure: "1:15 PM", arrival: "1:26 PM" },
            { departure: "2:00 PM", arrival: "2:11 PM" },
            { departure: "2:45 PM", arrival: "2:56 PM" },
            { departure: "3:45 PM", arrival: "3:56 PM" },
            { departure: "4:00 PM", arrival: "4:11 PM" },
            { departure: "5:30 PM", arrival: "5:41 PM" },
            { departure: "6:15 PM", arrival: "6:26 PM" },
            { departure: "8:00 PM", arrival: "8:11 PM" },
            { departure: "9:00 PM", arrival: "9:11 PM" },
            { departure: "9:30 PM", arrival: "9:41 PM" },
            { departure: "10:30 PM", arrival: "10:41 PM" },
            { departure: "11:30 PM", arrival: "11:41 PM" },
            { departure: "12:15 AM", arrival: "12:26 AM" }
        ],
        sunday: [
            { departure: "8:45 AM", arrival: "8:56 AM" },
            { departure: "9:45 AM", arrival: "9:56 AM" },
            { departure: "10:45 AM", arrival: "10:56 AM" },
            { departure: "11:15 AM", arrival: "11:26 AM" },
            { departure: "12:30 PM", arrival: "12:41 PM" },
            { departure: "1:15 PM", arrival: "1:26 PM" },
            { departure: "2:00 PM", arrival: "2:11 PM" },
            { departure: "2:45 PM", arrival: "2:56 PM" },
            { departure: "3:45 PM", arrival: "3:56 PM" },
            { departure: "4:00 PM", arrival: "4:11 PM" },
            { departure: "5:30 PM", arrival: "5:41 PM" },
            { departure: "6:15 PM", arrival: "6:26 PM" },
            { departure: "8:00 PM", arrival: "8:11 PM" },
            { departure: "9:00 PM", arrival: "9:11 PM" },
            { departure: "9:30 PM", arrival: "9:41 PM" }
        ]
    },
    {
        route: "UDC → Leroy & Front St",
        type: "arriving",
        weekday: [
            { departure: "7:40 AM", arrival: "7:43 AM" },
            { departure: "7:45 AM", arrival: "7:48 AM" },
            { departure: "8:15 AM", arrival: "8:18 AM", aa: true },
            { departure: "8:45 AM", arrival: "8:48 AM" },
            { departure: "9:20 AM", arrival: "9:23 AM", aa: true },
            { departure: "9:35 AM", arrival: "9:38 AM", aa: true },
            { departure: "10:10 AM", arrival: "10:13 AM" },
            { departure: "10:25 AM", arrival: "10:28 AM", aa: true },
            { departure: "10:45 AM", arrival: "10:48 AM", aa: true },
            { departure: "11:50 AM", arrival: "11:53 AM", aa: true },
            { departure: "12:05 PM", arrival: "12:08 PM" },
            { departure: "12:25 PM", arrival: "12:28 PM" },
            { departure: "12:40 PM", arrival: "12:43 PM", aa: true },
            { departure: "1:15 PM", arrival: "1:18 PM" },
            { departure: "1:45 PM", arrival: "1:48 PM", aa: true },
            { departure: "2:20 PM", arrival: "2:23 PM", aa: true },
            { departure: "3:10 PM", arrival: "3:13 PM", aa: true },
            { departure: "3:25 PM", arrival: "3:28 PM" },
            { departure: "3:45 PM", arrival: "3:48 PM" },
            { departure: "4:50 PM", arrival: "4
