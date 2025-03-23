// Jokes Array
const jokes = [
    // Capitalism
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

    // Socialism
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

    // American Education System
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

    // Underpaid Jobs
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

    // Trump US Administration
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

// Bus Schedules (Hardcoded for now, can be replaced with dynamic data from OCC Transport)
const busSchedules = [
    {
        route: "Union → Leroy & Murray",
        type: "arriving",
        times: [
            { departure: "7:00 AM", arrival: "7:11 AM" }, { departure: "7:30 AM", arrival: "7:41 AM" },
            { departure: "8:05 AM", arrival: "8:16 AM" }, { departure: "8:40 AM", arrival: "8:51 AM" },
            { departure: "9:10 AM", arrival: "9:21 AM" }, { departure: "9:30 AM", arrival: "9:41 AM" },
            { departure: "10:35 AM", arrival: "10:46 AM" }, { departure: "10:50 AM", arrival: "11:01 AM" },
            { departure: "11:10 AM", arrival: "11:21 AM" }, { departure: "12:00 PM", arrival: "12:11 PM" },
            { departure: "12:30 PM", arrival: "12:41 PM" }, { departure: "1:05 PM", arrival: "1:16 PM" },
            { departure: "1:40 PM", arrival: "1:51 PM" }, { departure: "2:10 PM", arrival: "2:21 PM" },
            { departure: "2:30 PM", arrival: "2:41 PM" }, { departure: "3:35 PM", arrival: "3:46 PM" },
            { departure: "4:20 PM", arrival: "4:31 PM" }, { departure: "4:55 PM", arrival: "5:06 PM" },
            { departure: "5:30 PM", arrival: "5:41 PM" }, { departure: "6:00 PM", arrival: "6:11 PM" },
            { departure: "6:35 PM", arrival: "6:46 PM" }, { departure: "7:25 PM", arrival: "7:36 PM" },
            { departure: "7:40 PM", arrival: "7:51 PM" }, { departure: "8:00 PM", arrival: "8:11 PM" },
            { departure: "9:00 PM", arrival: "9:11 PM" }, { departure: "9:20 PM", arrival: "9:31 PM" },
            { departure: "10:15 PM", arrival: "10:26 PM" }, { departure: "11:15 PM", arrival: "11:26 PM" },
            { departure: "12:00 AM", arrival: "12:11 AM" }
        ]
    },
    {
        route: "Downtown → Leroy & Murray",
        type: "arriving",
        times: [
            { departure: "7:40 AM", arrival: "7:43 AM" }, { departure: "7:45 AM", arrival: "7:48 AM" },
            { departure: "8:15 AM", arrival: "8:18 AM" }, { departure: "8:45 AM", arrival: "8:48 AM" },
            { departure: "9:20 AM", arrival: "9:23 AM" }, { departure: "9:35 AM", arrival: "9:38 AM" },
            { departure: "10:10 AM", arrival: "10:13 AM" }, { departure: "10:25 AM", arrival: "10:28 AM" },
            { departure: "10:45 AM", arrival: "10:48 AM" }, { departure: "11:50 AM", arrival: "11:53 AM" },
            { departure: "12:05 PM", arrival: "12:08 PM" }, { departure: "12:25 PM", arrival: "12:28 PM" },
            { departure: "12:40 PM", arrival: "12:43 PM" }, { departure: "1:15 PM", arrival: "1:18 PM" },
            { departure: "1:45 PM", arrival: "1:48 PM" }, { departure: "2:20 PM", arrival: "2:23 PM" },
            { departure: "3:10 PM", arrival: "3:13 PM" }, { departure: "3:25 PM", arrival: "3:28 PM" },
            { departure: "3:45 PM", arrival: "3:48 PM" }, { departure: "4:50 PM", arrival: "4:53 PM" },
            { departure: "5:35 PM", arrival: "5:38 PM" }, { departure: "6:10 PM", arrival: "6:13 PM" },
            { departure: "7:00 PM", arrival: "7:03 PM" }, { departure: "7:15 PM", arrival: "7:18 PM" },
            { departure: "7:50 PM", arrival: "7:53 PM" }, { departure: "8:40 PM", arrival: "8:43 PM" },
            { departure: "8:55 PM", arrival: "8:58 PM" }, { departure: "10:10 PM", arrival: "10:13 PM" },
            { departure: "10:35 PM", arrival: "10:38 PM" }, { departure: "11:25 PM", arrival: "11:28 PM" },
            { departure: "12:20 AM", arrival: "12:23 AM" }
        ]
    },
    {
        route: "Leroy & Murray → Downtown",
        type: "arriving",
        times: [
            { departure: "7:11 AM", arrival: "7:18 AM" }, { departure: "7:41 AM", arrival: "7:48 AM" },
            { departure: "8:16 AM", arrival: "8:23 AM" }, { departure: "8:51 AM", arrival: "8:58 AM" },
            { departure: "9:21 AM", arrival: "9:28 AM" }, { departure: "9:41 AM", arrival: "9:48 AM" },
            { departure: "10:46 AM", arrival: "10:53 AM" }, { departure: "11:01 AM", arrival: "11:08 AM" },
            { departure: "11:21 AM", arrival: "11:28 AM" }, { departure: "12:11 PM", arrival: "12:18 PM" },
            { departure: "12:41 PM", arrival: "12:48 PM" }, { departure: "1:16 PM", arrival: "1:23 PM" },
            { departure: "1:51 PM", arrival: "1:58 PM" }, { departure: "2:21 PM", arrival: "2:28 PM" },
            { departure: "2:41 PM", arrival: "2:48 PM" }, { departure: "3:46 PM", arrival: "3:53 PM" },
            { departure: "4:31 PM", arrival: "4:38 PM" }, { departure: "5:06 PM", arrival: "5:13 PM" },
            { departure: "5:41 PM", arrival: "5:48 PM" }, { departure: "6:11 PM", arrival: "6:18 PM" },
            { departure: "6:46 PM", arrival: "6:53 PM" }, { departure: "7:36 PM", arrival: "7:43 PM" },
            { departure: "7:51 PM", arrival: "7:58 PM" }, { departure: "8:11 PM", arrival: "8:15 PM" },
            { departure: "9:11 PM", arrival: "9:15 PM" }, { departure: "9:31 PM", arrival: "9:35 PM" },
            { departure: "10:26 PM", arrival: "10:30 PM" }, { departure: "11:26 PM", arrival: "11:30 PM" },
            { departure: "12:11 AM", arrival: "12:15 AM" }
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
        const busTime = parseTime(time);
        if (busTime > now) return busTime;
    }
    return parseTime(times[0]);
}

// Get next 3 buses
function getNextThreeBuses(times) {
    const now = new Date();
    const upcoming = times.map(t => parseTime(t)).filter(t => t > now).slice(0, 3);
    if (upcoming.length < 3) {
        const firstTomorrow = times.slice(0, 3 - upcoming.length).map(t => parseTime(t));
        firstTomorrow.forEach(t => t.setDate(t.getDate() + 1));
        upcoming.push(...firstTomorrow);
    }
    return upcoming;
}

// Timer state
let currentRoute = parseInt(localStorage.getItem("selectedRoute") || "0");
let nextBus = null;
let isPaused = false;
let lastUpdate = Date.now();
let timeLeft = 0;
const BUS_INTERVAL = 15 * 60 * 1000; // 15-minute interval for progress bar

// Update countdown and next buses
function updateCountdown() {
    if (isPaused) return;

    const now = Date.now();
    const schedule = busSchedules[currentRoute];
    const times = schedule.times.map(t => t.arrival);

    if (!nextBus || nextBus < new Date()) {
        nextBus = getNextBus(times);
        document.getElementById("nextBus").innerText = nextBus.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        timeLeft = nextBus - now;
    }

    timeLeft -= (now - lastUpdate);
    lastUpdate = now;

    if (timeLeft <= 0) {
        let misses = parseInt(localStorage.getItem("misses") || "0") + 1;
        localStorage.setItem("misses", misses);
        if (misses >= 3) {
            const missedBusModal = document.getElementById("missedBusModal");
            document.getElementById("missedBusCount").innerText = misses;
            missedBusModal.style.display = "block";
        }
        nextBus = getNextBus(times);
        document.getElementById("nextBus").innerText = nextBus.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        timeLeft = nextBus - now;
    }

    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);

    // Update timer display
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

    const nextThree = getNextThreeBuses(times);
    document.getElementById("nextBusesList").innerHTML = nextThree.map(t => `<li>${t.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</li>`).join('');
}

// Toggle pause/resume on timer click
document.getElementById("timerWrapper").addEventListener("click", () => {
    isPaused = !isPaused;
    if (!isPaused) {
        lastUpdate = Date.now();
    }
    const timerState = document.getElementById("timerState");
    timerState.innerText = isPaused ? "Paused" : "Running";
    timerState.classList.toggle("paused", isPaused);
});

// Route selection
document.getElementById("routeSelect").addEventListener("change", (e) => {
    currentRoute = parseInt(e.target.value);
    localStorage.setItem("selectedRoute", currentRoute);
    nextBus = null;
    timeLeft = 0;
    updateCountdown();
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
    let html = "<ul>";
    schedule.times.forEach(t => {
        html += `<li>${t.departure} → ${t.arrival}</li>`;
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
    const scheduleText = schedule.times.map(t => `${t.departure} → ${t.arrival}`).join("\n");
    navigator.clipboard.writeText(scheduleText).then(() => {
        alert("Schedule copied to clipboard!");
    });
});

// Missed Bus Modal
document.getElementById("resetMissedBtn").addEventListener("click", () => {
    localStorage.setItem("misses", "0");
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
});
window.addEventListener('online', () => {
    document.getElementById("offlineBanner").style.display = "none";
});

// Adjust header padding when offline banner is visible
function adjustHeaderPadding() {
    const offlineBanner = document.getElementById("offlineBanner");
    const header = document.querySelector(".header");
    const routeSection = document.querySelector(".route-section");
    if (offlineBanner.style.display === "block") {
        header.style.top = "40px";
        routeSection.style.top = "110px";
    } else {
        header.style.top = "0";
        routeSection.style.top = "70px";
    }
}
window.addEventListener('offline', adjustHeaderPadding);
window.addEventListener('online', adjustHeaderPadding);

// Initialize
setInterval(updateCountdown, 1000);
updateCountdown();
