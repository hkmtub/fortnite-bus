// Bus Schedules
const busSchedules = [
    {
        route: "University Union → Leroy & Murray Streets",
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
        route: "University Downtown Center → Leroy & Murray Streets",
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
        route: "Leroy & Murray Streets → University Downtown Center",
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

// Update current time
function updateCurrentTime() {
    document.getElementById("currentTime").innerText = `Current Time: ${new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
}

// Update countdown and next buses
let currentRoute = 0;
let nextBus = null;
const BUS_INTERVAL = 15 * 60 * 1000; // 15-minute interval for progress bar
function updateCountdown() {
    const schedule = busSchedules[currentRoute];
    const times = schedule.times.map(t => t.arrival);
    if (!nextBus || nextBus < new Date()) {
        nextBus = getNextBus(times);
        document.getElementById("nextBus").innerText = nextBus.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
    const now = new Date();
    let timeLeft = nextBus - now;
    if (timeLeft <= 0) {
        document.getElementById("missedBusSound").play();
        let misses = parseInt(localStorage.getItem("misses") || "0") + 1;
        localStorage.setItem("misses", misses);
        if (misses >= 3) alert("You’re a noob at catching the bus!");
        nextBus = getNextBus(times);
        document.getElementById("nextBus").innerText = nextBus.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        timeLeft = nextBus - now;
    }
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    document.getElementById("countdown").innerText = `${minutes}m ${seconds}s`;
    if (timeLeft > 0 && timeLeft < 120000 && 'vibrate' in navigator && !document.body.classList.contains("eco-mode")) navigator.vibrate([500, 500]);
    if (timeLeft > 0 && timeLeft < 30000 && !document.body.classList.contains("eco-mode")) document.getElementById("dramaticSound").play();
    if (timeLeft > 0 && timeLeft < 300000 && notifyOn) alert("Bus dropping in 5 minutes!");

    // Update progress bar
    const progressPercent = Math.max(0, (1 - timeLeft / BUS_INTERVAL) * 100);
    document.getElementById("progressFill").style.width = `${progressPercent}%`;

    // Update route name
    document.getElementById("routeName").innerText = schedule.route;

    const nextThree = getNextThreeBuses(times);
    document.getElementById("nextBusesList").innerHTML = nextThree.map(t => `<li>${t.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</li>`).join('');
}

// Route selection
document.getElementById("routeSelect").addEventListener("change", (e) => {
    currentRoute = parseInt(e.target.value);
    nextBus = null;
    updateCountdown();
});

// Dark Mode Toggle
let mode = parseInt(localStorage.getItem("mode") || "0");
document.getElementById("modeToggle").addEventListener("click", () => {
    mode = (mode + 1) % 3;
    localStorage.setItem("mode", mode);
    document.body.className = mode === 1 ? "dark-mode" : mode === 2 ? "darker-mode" : "";
    if (document.body.classList.contains("eco-mode")) document.body.classList.add("eco-mode");
});
document.body.className = mode === 1 ? "dark-mode" : mode === 2 ? "darker-mode" : "";

// Eco Mode Toggle
let ecoOn = localStorage.getItem("ecoOn") === "true";
document.getElementById("ecoToggle").addEventListener("click", () => {
    ecoOn = !ecoOn;
    localStorage.setItem("ecoOn", ecoOn);
    document.body.classList.toggle("eco-mode", ecoOn);
});
if (ecoOn) document.body.classList.add("eco-mode");

// Notification Toggle
let notifyOn = false;
document.getElementById("notifyToggle").addEventListener("click", () => {
    notifyOn = !notifyOn;
    document.getElementById("notifyToggle").innerText = notifyOn ? "🔕" : "🔔";
});

// Refresh Button
document.getElementById("refreshBtn").addEventListener("click", () => {
    nextBus = null;
    updateCountdown();
});

// Try Your Luck with 50 Jokes
const universityJokes = [
    "Why was the lecture late? The professor got lost in the syllabus!",
    "I missed the bus because I was cramming for a nap!",
    "Why don’t uni students run? They’re already late for everything!",
    "The bus left me because my GPA was too low to board!",
    "I was late because I had to finish my coffee thesis!",
    "Why was the student tardy? He was stuck in a group project!",
    "The bus driver said, ‘No late assignments accepted here!’",
    "I missed class because I was researching the snooze button!",
    "Why was the campus quiet? Everyone missed the bus!",
    "I’m late because I was practicing for the procrastination finals!",
    "The bus left me like my professor left my email unread!",
    "Why was I late? I was debugging my sleep schedule!",
    "I missed the bus because I was overanalyzing the timetable!",
    "The lecture started without me, just like my motivation!",
    "Why don’t I catch the bus? I’m still on last semester’s time!",
    "I was late because I was perfecting my excuse essay!",
    "The bus didn’t wait, just like my Wi-Fi during a Zoom call!",
    "Why was I tardy? I was stuck in a textbook traffic jam!",
    "I missed the bus because I was drafting my late pass!",
    "The professor said, ‘Time waits for no one,’ but neither does the bus!",
    "I was late because I was caught in a library vortex!",
    "Why don’t I arrive on time? I’m still on dial-up deadlines!",
    "The bus left me like my group mates left the project!",
    "I missed it because I was busy failing my punctuality elective!",
    "Why was I late? I was stuck in a caffeine queue!",
    "The bus didn’t stop, just like my student loans don’t!",
    "I was tardy because I was rewriting my alarm clock’s code!",
    "Why miss the bus? I was debating existential deadlines!",
    "I was late because I was stuck in a lecture loop!",
    "The bus left me like my notes left my memory!",
    "Why was I tardy? I was lost in the campus maze!",
    "I missed the bus because I was practicing for the late-night finals!",
    "The driver said, ‘No extra credit for being late!’",
    "I was late because I was peer-reviewing my sleep!",
    "Why don’t I catch buses? I’m still on syllabus week!",
    "The bus left me like my professor left the grading rubric!",
    "I missed it because I was stuck in a study coma!",
    "Why was I late? I was negotiating with my bed!",
    "I was tardy because I was drafting my tardiness appeal!",
    "The bus didn’t wait, just like my deadlines don’t!",
    "I missed it because I was lost in a lecture daydream!",
    "Why was I late? I was stuck in a printer jam!",
    "I was tardy because I was auditing my alarm clock!",
    "The bus left me like my scholarship left my bank account!",
    "I missed it because I was overclocking my coffee maker!",
    "Why don’t I arrive? I’m still buffering from last term!",
    "I was late because I was stuck in a procrastination spiral!",
    "The bus didn’t stop, just like my prof didn’t stop lecturing!",
    "I missed it because I was rewriting my morning script!",
    "Why was I tardy? I was late to my own wake-up call!"
];
document.getElementById("tryLuck").addEventListener("click", () => {
    const randomJoke = universityJokes[Math.floor(Math.random() * universityJokes.length)];
    document.getElementById("randomJoke").innerText = randomJoke;
});

// Caught Bus Button
document.getElementById("caughtBtn").addEventListener("click", () => {
    document.getElementById("caughtBusSound").play();
    nextBus = getNextBus(busSchedules[currentRoute].times.map(t => t.arrival));
    document.getElementById("nextBus").innerText = nextBus.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
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
document.querySelector(".close").addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

// Offline Warning
window.addEventListener('offline', () => {
    alert("You're offline! Bus times may not update.");
});

// Initialize
document.getElementById("routeName").innerText = busSchedules[0].route;
setInterval(updateCountdown, 1000);
setInterval(updateCurrentTime, 1000);
updateCountdown();
updateCurrentTime();
