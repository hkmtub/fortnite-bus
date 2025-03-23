// Bus Schedules
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

// Update countdown and next buses
let currentRoute = 0;
let nextBus = null;
const BUS_INTERVAL = 15 * 60 * 1000; // 15-minute interval for progress ring
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
    if (timeLeft > 0 && timeLeft < 120000 && 'vibrate' in navigator) navigator.vibrate([500, 500]);
    if (timeLeft > 0 && timeLeft < 30000) document.getElementById("dramaticSound").play();
    if (timeLeft > 0 && timeLeft < 300000 && notifyOn) alert("Bus dropping in 5 minutes!");

    // Update progress ring
    const progressPercent = Math.max(0, (1 - timeLeft / BUS_INTERVAL));
    const circumference = window.innerWidth <= 600 ? 345.4 : 408.2; // Adjust for responsive circle size
    const offset = circumference * (1 - progressPercent);
    document.getElementById("timerProgress").style.strokeDashoffset = offset;

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
});
document.body.className = mode === 1 ? "dark-mode" : mode === 2 ? "darker-mode" : "";

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
setInterval(updateCountdown, 1000);
updateCountdown();
