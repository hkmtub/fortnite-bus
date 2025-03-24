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
    "Trump’s presidency: where every day was a new covfefe.",
    "Why was the cat sitting on the computer? Because he wanted to keep an eye on the mouse!",
    "What do you call a cat who writes music? A decom-purr-ser.",
    "Why did the cat bring a ladder to the bar? Because he heard the drinks were on the house!",
    "What’s a cat’s favorite color? Purr-ple.",
    "Why don’t cats play poker in the jungle? Too many cheetahs!",
    "What do you call a cat who loves to bowl? An alley cat.",
    "Why was the cat sitting on the fence? Because he was drunk on catnip!",
    "What’s a cat’s favorite dessert? Mice cream.",
    "Why did the cat join a band? Because he had the purr-cussion skills!",
    "What do you call a cat who can sing? A meow-sician.",
    "Why did the cat sleep so close to his owner? He wanted to be the little spoon!",
    "What’s a cat’s favorite game? Hide and pounce.",
    "Why don’t cats use smartphones? They’re afraid of the paw-parazzi!",
    "What do you call a cat who’s a detective? Sherlock Paws.",
    "Why did the cat refuse to play chess? He didn’t want to be a pawn!",
    "What’s a cat’s favorite TV show? Claw and Order.",
    "Why did the cat go to school? To improve his purr-fect grades!",
    "What do you call a cat who loves to swim? A purr-maid.",
    "Why was the cat embarrassed at the vet? Because he had a hairball in public!",
    "What do you call a cat who’s always grumpy? A sour-puss.",
    "Why did Biden bring ice cream to the debate? To sweeten his points!",
    "What’s Biden’s favorite dance move? The Oval Office shuffle.",
    "Why did Biden take a nap during the meeting? He was dreaming of unity!",
    "What does Biden say when he forgets something? 'C’mon, man, I’m 82!'",
    "Why did Biden start a band? To play some bipartisan beats!",
    "What’s Biden’s favorite snack at the White House? Corn Pop-corn!",
    "Why did Biden bring sunglasses to the press conference? To shade the tough questions!",
    "What’s Biden’s favorite hobby? Sniffing out new policies!",
    "Why did Biden go to the gym? To work on his executive lifts!",
    "What does Biden call his dog? Commander-in-Chief!",
    "Why did Biden write a book? To share his ‘Build Back Better’ bedtime stories!",
    "What’s Biden’s favorite movie? The President Wears Prada!",
    "Why did Biden get lost in the White House? He was looking for the Situation Room… again!",
    "What does Biden say when he’s confused? 'Where’s my aviators? I need to look cool!'",
    "Why did Biden bring a ladder to the State of the Union? To take things to the next level!",
    "What’s Biden’s favorite game? Hide and Seek… with his teleprompter!",
    "Why did Biden start gardening? To plant some bipartisan seeds!",
    "What does Biden say when he trips? 'I meant to do that—it’s a new policy rollout!'",
    "Why did Biden join a book club? To discuss ‘The Art of the Deal’… ironically!",
    "What’s Biden’s favorite holiday? Inauguration Day—every four years!"
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
            { departure: "4:50 PM", arrival: "4:53 PM" },
            { departure: "5:35 PM", arrival: "5:38 PM" },
            { departure: "6:10 PM", arrival: "6:13 PM" },
            { departure: "7:00 PM", arrival: "7:03 PM" },
            { departure: "7:15 PM", arrival: "7:18 PM" },
            { departure: "7:50 PM", arrival: "7:53 PM" },
            { departure: "8:40 PM", arrival: "8:43 PM" },
            { departure: "8:55 PM", arrival: "8:58 PM" },
            { departure: "10:10 PM", arrival: "10:13 PM" },
            { departure: "10:35 PM", arrival: "10:38 PM" },
            { departure: "11:25 PM", arrival: "11:28 PM" },
            { departure: "12:20 AM", arrival: "12:23 AM" }
        ],
        saturday: [
            { departure: "10:55 AM", arrival: "10:58 AM" },
            { departure: "11:25 AM", arrival: "11:28 AM" },
            { departure: "12:40 PM", arrival: "12:43 PM" },
            { departure: "1:25 PM", arrival: "1:28 PM" },
            { departure: "2:25 PM", arrival: "2:28 PM" },
            { departure: "3:10 PM", arrival: "3:13 PM" },
            { departure: "3:55 PM", arrival: "3:58 PM" },
            { departure: "4:55 PM", arrival: "4:58 PM" },
            { departure: "5:55 PM", arrival: "5:58 PM" },
            { departure: "6:10 PM", arrival: "6:13 PM" },
            { departure: "7:10 PM", arrival: "7:13 PM" },
            { departure: "7:55 PM", arrival: "7:58 PM" },
            { departure: "8:55 PM", arrival: "8:58 PM" },
            { departure: "10:10 PM", arrival: "10:13 PM" },
            { departure: "11:10 PM", arrival: "11:13 PM" },
            { departure: "11:40 PM", arrival: "11:43 PM" }
        ],
        sunday: [
            { departure: "10:55 AM", arrival: "10:58 AM" },
            { departure: "11:25 AM", arrival: "11:28 AM" },
            { departure: "12:40 PM", arrival: "12:43 PM" },
            { departure: "1:25 PM", arrival: "1:28 PM" },
            { departure: "2:25 PM", arrival: "2:28 PM" },
            { departure: "3:10 PM", arrival: "3:13 PM" },
            { departure: "3:55 PM", arrival: "3:58 PM" },
            { departure: "4:55 PM", arrival: "4:58 PM" },
            { departure: "5:55 PM", arrival: "5:58 PM" },
            { departure: "6:10 PM", arrival: "6:13 PM" },
            { departure: "7:10 PM", arrival: "7:13 PM" },
            { departure: "7:55 PM", arrival: "7:58 PM" },
            { departure: "8:55 PM", arrival: "8:58 PM" },
            { departure: "9:40 PM", arrival: "9:49 PM" },
            { departure: "10:10 PM", arrival: "10:13 PM" },
            { departure: "10:25 PM", arrival: "10:28 PM" },
            { departure: "11:10 PM", arrival: "11:13 PM" },
            { departure: "11:40 PM", arrival: "11:43 PM" },
            { departure: "11:55 PM", arrival: "11:58 PM" }
        ]
    },
    {
        route: "Leroy & Front St → University Union",
        type: "arriving",
        weekday: [
            { departure: "7:43 AM", arrival: "8:00 AM" },
            { departure: "7:48 AM", arrival: "8:05 AM" },
            { departure: "8:18 AM", arrival: "8:35 AM", aa: true },
            { departure: "8:48 AM", arrival: "9:05 AM" },
            { departure: "9:23 AM", arrival: "9:40 AM", aa: true },
            { departure: "9:38 AM", arrival: "9:55 AM", aa: true },
            { departure: "10:13 AM", arrival: "10:30 AM" },
            { departure: "10:28 AM", arrival: "10:45 AM", aa: true },
            { departure: "10:48 AM", arrival: "11:05 AM", aa: true },
            { departure: "11:53 AM", arrival: "12:10 PM", aa: true },
            { departure: "12:08 PM", arrival: "12:25 PM" },
            { departure: "12:28 PM", arrival: "12:45 PM" },
            { departure: "12:43 PM", arrival: "1:00 PM", aa: true },
            { departure: "1:18 PM", arrival: "1:35 PM" },
            { departure: "1:48 PM", arrival: "2:05 PM", aa: true },
            { departure: "2:23 PM", arrival: "2:40 PM", aa: true },
            { departure: "3:13 PM", arrival: "3:30 PM", aa: true },
            { departure: "3:28 PM", arrival: "3:45 PM" },
            { departure: "3:48 PM", arrival: "4:05 PM" },
            { departure: "4:53 PM", arrival: "5:10 PM" },
            { departure: "5:38 PM", arrival: "5:55 PM" },
            { departure: "6:13 PM", arrival: "6:30 PM" },
            { departure: "7:03 PM", arrival: "7:20 PM" },
            { departure: "7:18 PM", arrival: "7:35 PM" },
            { departure: "7:53 PM", arrival: "8:10 PM" },
            { departure: "8:43 PM", arrival: "9:00 PM" },
            { departure: "8:58 PM", arrival: "9:15 PM" },
            { departure: "10:13 PM", arrival: "10:30 PM" },
            { departure: "10:38 PM", arrival: "10:55 PM" },
            { departure: "11:28 PM", arrival: "11:45 PM" },
            { departure: "12:23 AM", arrival: "12:40 AM" }
        ],
        saturday: [
            { departure: "10:58 AM", arrival: "11:15 AM" },
            { departure: "11:28 AM", arrival: "11:45 AM" },
            { departure: "12:43 PM", arrival: "1:00 PM" },
            { departure: "1:28 PM", arrival: "1:45 PM" },
            { departure: "2:28 PM", arrival: "2:45 PM" },
            { departure: "3:13 PM", arrival: "3:30 PM" },
            { departure: "3:58 PM", arrival: "4:15 PM" },
            { departure: "4:58 PM", arrival: "5:15 PM" },
            { departure: "5:58 PM", arrival: "6:15 PM" },
            { departure: "6:13 PM", arrival: "6:30 PM" },
            { departure: "7:13 PM", arrival: "7:30 PM" },
            { departure: "7:58 PM", arrival: "8:15 PM" },
            { departure: "8:58 PM", arrival: "9:15 PM" },
            { departure: "10:13 PM", arrival: "10:30 PM" },
            { departure: "11:13 PM", arrival: "11:30 PM" },
            { departure: "11:43 PM", arrival: "12:00 AM" }
        ],
        sunday: [
            { departure: "10:58 AM", arrival: "11:15 AM" },
            { departure: "11:28 AM", arrival: "11:45 AM" },
            { departure: "12:43 PM", arrival: "1:00 PM" },
            { departure: "1:28 PM", arrival: "1:45 PM" },
            { departure: "2:28 PM", arrival: "2:45 PM" },
            { departure: "3:13 PM", arrival: "3:30 PM" },
            { departure: "3:58 PM", arrival: "4:15 PM" },
            { departure: "4:58 PM", arrival: "5:15 PM" },
            { departure: "5:58 PM", arrival: "6:15 PM" },
            { departure: "6:13 PM", arrival: "6:30 PM" },
            { departure: "7:13 PM", arrival: "7:30 PM" },
            { departure: "7:58 PM", arrival: "8:15 PM" },
            { departure: "8:58 PM", arrival: "9:15 PM" },
            { departure: "9:49 PM", arrival: "10:00 PM" },
            { departure: "10:13 PM", arrival: "10:30 PM" },
            { departure: "10:28 PM", arrival: "10:45 PM" },
            { departure: "11:13 PM", arrival: "11:30 PM" },
            { departure: "11:43 PM", arrival: "12:00 AM" },
            { departure: "11:58 PM", arrival: "12:15 AM" }
        ]
    }
];

// Parse 12-hour time to Date object for today
function parseTime(timeStr) {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    const now = new Date();
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    if (date < now && timeStr.includes("AM") && hours < 6) date.setDate(date.getDate() + 1);
    return date;
}

// Get the next bus time
function getNextBus(times) {
    const now = new Date();
    for (let time of times) {
        const busTime = parseTime(time.arrival);
        if (busTime > now) return busTime;
    }
    const firstBusTomorrow = parseTime(times[0].arrival);
    firstBusTomorrow.setDate(firstBusTomorrow.getDate() + 1);
    return firstBusTomorrow;
}

// Get next 3 buses
function getNextThreeBuses(times) {
    const now = new Date();
    const upcoming = times.map(t => parseTime(t.arrival)).filter(t => t > now).slice(0, 3);
    if (upcoming.length < 3) {
        const firstTomorrow = times.slice(0, 3 - upcoming.length).map(t => parseTime(t.arrival));
        firstTomorrow.forEach(t => t.setDate(t.getDate() + 1));
        upcoming.push(...firstTomorrow);
    }
    return upcoming;
}

// Timer state
let currentRoute = parseInt(localStorage.getItem("selectedRoute") || "0");
let scheduleType = localStorage.getItem("scheduleType") || "weekday"; // weekday, saturday, or sunday
let isWeekend = scheduleType !== "weekday";
let weekendDay = localStorage.getItem("weekendDay") || "saturday"; // saturday or sunday
let nextBus = null;
let lastUpdate = Date.now();
let timeLeft = 0;
const BUS_INTERVAL = 15 * 60 * 1000; // 15-minute interval for progress bar

// Missed bus state
let misses = parseInt(localStorage.getItem("misses") || "0");
let hasShownMissedModal = localStorage.getItem("hasShownMissedModal") === "true";

// Determine the current schedule based on type and day
function getCurrentSchedule() {
    const schedule = busSchedules[currentRoute];
    if (scheduleType === "weekday") {
        return schedule.weekday;
    } else {
        return schedule[weekendDay];
    }
}

// Update countdown and next buses
function updateCountdown() {
    const now = new Date();
    const times = getCurrentSchedule();

    // Ensure nextBus is set and valid
    if (!nextBus || nextBus <= now) {
        nextBus = getNextBus(times);
        document.getElementById("nextBus").innerText = nextBus.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        timeLeft = nextBus - now;
    }

    // Update timeLeft
    timeLeft -= (now - lastUpdate);
    lastUpdate = now;

    // Check if a bus was missed
    if (timeLeft <= 0) {
        misses += 1;
        localStorage.setItem("misses", misses.toString());

        // Show missed bus modal only if misses >= 3 and it hasn't been shown yet
        if (misses >= 3 && !hasShownMissedModal) {
            const missedBusModal = document.getElementById("missedBusModal");
            document.getElementById("missedBusCount").innerText = misses;
            missedBusModal.style.display = "block";
            hasShownMissedModal = true;
            localStorage.setItem("hasShownMissedModal", "true");
        }

        // Reset nextBus and timeLeft
        nextBus = getNextBus(times);
        document.getElementById("nextBus").innerText = nextBus.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        timeLeft = nextBus - now;
    }

    // Update timer display
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    document.getElementById("countdown").innerText = `${minutes}m ${seconds}s`;

    // Vibrate when under 30 seconds
    if (timeLeft > 0 && timeLeft < 30000) {
        if (timeLeft < 10000 && 'vibrate' in navigator) {
            navigator.vibrate([200, 100, 200]);
        }
        document.querySelector(".timer-display").classList.add("urgent");
    } else {
        document.querySelector(".timer-display").classList.remove("urgent");
    }

    // Update progress bar
    const progressPercent = Math.max(0, (1 - timeLeft / BUS_INTERVAL)) * 100;
    document.getElementById("timerProgress").style.width = `${progressPercent}%`;

    // Update next buses
    const nextThree = getNextThreeBuses(times);
    document.getElementById("nextBusesList").innerHTML = nextThree.map(t => `<li>${t.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</li>`).join('');
}

// Route selection
document.getElementById("routeSelect").addEventListener("change", (e) => {
    currentRoute = parseInt(e.target.value);
    localStorage.setItem("selectedRoute", currentRoute);
    nextBus = null;
    timeLeft = 0;
    updateCountdown();
});

// Schedule Type Toggle (Weekday/Weekend)
const weekdayToggle = document.getElementById("weekdayToggle");
const weekendToggle = document.getElementById("weekendToggle");
const weekendDayToggle = document.getElementById("weekendDayToggle");
const saturdayToggle = document.getElementById("saturdayToggle");
const sundayToggle = document.getElementById("sundayToggle");

// Determine if today is a weekend day and set initial state
const today = new Date().getDay(); // 0 = Sunday, 6 = Saturday
const isTodayWeekend = today === 0 || today === 6;
if (isTodayWeekend) {
    isWeekend = true;
    scheduleType = "weekend";
    weekendDay = today === 6 ? "saturday" : "sunday";
    localStorage.setItem("scheduleType", "weekend");
    localStorage.setItem("weekendDay", weekendDay);
    weekdayToggle.classList.remove("active");
    weekendToggle.classList.add("active");
    weekendDayToggle.style.display = "flex";
    if (weekendDay === "saturday") {
        saturdayToggle.classList.add("active");
        sundayToggle.classList.remove("active");
    } else {
        saturdayToggle.classList.remove("active");
        sundayToggle.classList.add("active");
    }
} else {
    // Default to weekday schedule
    weekdayToggle.classList.add("active");
    weekendToggle.classList.remove("active");
    weekendDayToggle.style.display = "none";
}

weekdayToggle.addEventListener("click", () => {
    if (scheduleType !== "weekday") {
        scheduleType = "weekday";
        isWeekend = false;
        localStorage.setItem("scheduleType", "weekday");
        weekdayToggle.classList.add("active");
        weekendToggle.classList.remove("active");
        weekendDayToggle.style.display = "none";
        nextBus = null;
        timeLeft = 0;
        updateCountdown();
    }
});

weekendToggle.addEventListener("click", () => {
    if (scheduleType === "weekday") {
        isWeekend = true;
        scheduleType = "weekend";
        // If today is a weekend, keep the auto-selected day; otherwise, default to Saturday
        if (!isTodayWeekend) {
            weekendDay = "saturday";
            localStorage.setItem("weekendDay", "saturday");
            saturdayToggle.classList.add("active");
            sundayToggle.classList.remove("active");
        }
        localStorage.setItem("scheduleType", "weekend");
        weekdayToggle.classList.remove("active");
        weekendToggle.classList.add("active");
        weekendDayToggle.style.display = "flex";
        nextBus = null;
        timeLeft = 0;
        updateCountdown();
    }
});

saturdayToggle.addEventListener("click", () => {
    if (weekendDay !== "saturday") {
        weekendDay = "saturday";
        localStorage.setItem("weekendDay", "saturday");
        saturdayToggle.classList.add("active");
        sundayToggle.classList.remove("active");
        nextBus = null;
        timeLeft = 0;
        updateCountdown();
    }
});

sundayToggle.addEventListener("click", () => {
    if (weekendDay !== "sunday") {
        weekendDay = "sunday";
        localStorage.setItem("weekendDay", "sunday");
        saturdayToggle.classList.remove("active");
        sundayToggle.classList.add("active");
        nextBus = null;
        timeLeft = 0;
        updateCountdown();
    }
});

// Initialize route selection
document.getElementById("routeSelect").value = currentRoute;

// Refresh Button with Loading State
document.getElementById("refreshBtn").addEventListener("click", () => {
    const refreshBtn = document.getElementById("refreshBtn");
    const icon = refreshBtn.querySelector(".button-icon");
    const spinner = refreshBtn.querySelector(".button-spinner");
    icon.style.display = "none";
    spinner.style.display = "inline";
    setTimeout(() => {
        nextBus = null;
        timeLeft = 0;
        updateCountdown();
        icon.style.display = "inline";
        spinner.style.display = "none";
    }, 1000);
});

// Full Schedule Modal
const modal = document.getElementById("scheduleModal");
document.getElementById("scheduleBtn").addEventListener("click", () => {
    const schedule = busSchedules[currentRoute];
    const times = getCurrentSchedule();
    let html = "";
    // Add AA explanation for DCL Inbound routes (routes 1 and 2) on weekdays
    if ((currentRoute === 1 || currentRoute === 2) && scheduleType === "weekday") {
        html += '<p class="aa-explanation">(AA) means this bus does not stop at Hinman / Academic A on weekdays.</p>';
    }
    html += "<ul>";
    times.forEach(t => {
        const aaLabel = t.aa ? '<span class="aa-label">(AA)</span>' : '';
        html += `<li>${t.departure} → ${t.arrival} ${aaLabel}</li>`;
    });
    html += "</ul>";
    document.getElementById("fullSchedule").innerHTML = html;
    modal.style.display = "block";
});
document.querySelector("#scheduleModal .close").addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

// Copy Schedule to Clipboard
document.getElementById("copyScheduleBtn").addEventListener("click", () => {
    const schedule = busSchedules[currentRoute];
    const times = getCurrentSchedule();
    let scheduleText = "";
    if ((currentRoute === 1 || currentRoute === 2) && scheduleType === "weekday") {
        scheduleText += "(AA) means this bus does not stop at Hinman / Academic A on weekdays.\n\n";
    }
    scheduleText += times.map(t => `${t.departure} → ${t.arrival}${t.aa ? ' (AA)' : ''}`).join("\n");
    navigator.clipboard.writeText(scheduleText).then(() => {
        alert("Schedule copied to clipboard!");
    });
});

// Report Schedule Issue (GitHub Issues Integration)
document.getElementById("reportIssueBtn").addEventListener("click", () => {
    // Replace <username> and <repo> with your GitHub username and repository name
    const issueTitle = encodeURIComponent("Schedule Update Request");
    const issueBody = encodeURIComponent(
        `**Route:** ${busSchedules[currentRoute].route}\n` +
        `**Schedule Type:** ${scheduleType === "weekday" ? "Weekday" : (weekendDay === "saturday" ? "Saturday" : "Sunday")}\n\n` +
        `**Describe the Issue or Update Needed:**\n` +
        `(e.g., "The 8:45 AM bus on Saturday is no longer running.")\n\n` +
        `**Additional Details:**\n` +
        `(e.g., "I checked the OCCT website, and the new schedule starts at 9:00 AM.")`
    );
    const issueUrl = `https://github.com/<username>/<repo>/issues/new?title=${issueTitle}&body=${issueBody}`;
    window.open(issueUrl, "_blank");
});

// Missed Bus Modal
document.getElementById("resetMissedBtn").addEventListener("click", () => {
    misses = 0;
    hasShownMissedModal = false;
    localStorage.setItem("misses", "0");
    localStorage.setItem("hasShownMissedModal", "false");
    document.getElementById("missedBusModal").style.display = "none";
});

document.getElementById("closeMissedBtn").addEventListener("click", () => {
    document.getElementById("missedBusModal").style.display = "none";
});

document.querySelector("#missedBusModal .close").addEventListener("click", () => {
    document.getElementById("missedBusModal").style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("missedBusModal")) {
        document.getElementById("missedBusModal").style.display = "none";
    }
});

// Offline Warning
window.addEventListener('offline', () => {
    document.getElementById("offlineBanner").style.display = "block";
    adjustHeaderPadding();
});

window.addEventListener('online', () => {
    document.getElementById("offlineBanner").style.display = "none";
    adjustHeaderPadding();
});

// Adjust header padding when offline banner is visible
function adjustHeaderPadding() {
    const offlineBanner = document.getElementById("offlineBanner");
    const header = document.querySelector(".header");
    const routeSection = document.querySelector(".route-section");
    const bannerHeight = offlineBanner.offsetHeight || 0; // Dynamically get the banner height
    const headerHeight = header.offsetHeight || 0; // Dynamically get the header height

    if (offlineBanner.style.display === "block") {
        header.style.top = `${bannerHeight}px`;
        routeSection.style.top = `${bannerHeight + headerHeight}px`; // Shift route section below header
    } else {
        header.style.top = "0";
        routeSection.style.top = `${headerHeight}px`; // Adjust route section to be below header
    }

    // Adjust main content padding to account for the header and banner
    const main = document.querySelector(".main");
    main.style.paddingTop = `${bannerHeight + headerHeight + 20}px`; // Add extra padding for spacing
}

// Initialize
setInterval(updateCountdown, 1000);
updateCountdown();
adjustHeaderPadding();

// Ensure header adjusts on window resize (e.g., if font size changes)
window.addEventListener('resize', adjustHeaderPadding);
