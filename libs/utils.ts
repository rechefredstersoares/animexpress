export function formatNumber(num: number, precision = 2) {
    const map = [
        { suffix: "T", threshold: 1e12 },
        { suffix: "B", threshold: 1e9 },
        { suffix: "M", threshold: 1e6 },
        { suffix: "K", threshold: 1e3 },
        { suffix: "", threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
        const formatted =
            (num / found.threshold).toFixed(precision) + found.suffix;
        return formatted;
    }

    return num;
}

export function formatDuration(durationString: string) {
    const pattern =
        /(\d+)\s*h(?:ours?)?\s*(\d+)\s*min(?:utes?)?|(\d+)\s*h(?:ours?)?|(\d+)\s*min(?:utes?)?/gi;

    const matches = durationString.match(pattern);

    if (!matches) {
        return "0min";
    }

    let hours = 0;
    let minutes = 0;

    for (const match of matches) {
        const num = parseInt(match);
        if (match.includes("h")) {
            hours += num;
        } else if (match.includes("min")) {
            minutes += num;
        }
    }

    if (hours > 0 && minutes > 0) {
        return `${hours}h ${minutes}min`;
    } else if (hours > 0) {
        return `${hours}h`;
    } else {
        return `${minutes}min`;
    }
}

export function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${monthNames[month]} ${year}`;
    return formattedDate;
}
