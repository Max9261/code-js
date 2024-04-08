const addDays = (date, days = 1) => {
    const timestamp = date.getTime();
    const newTimestamp = timestamp + (days * 24 * 60 * 60 * 1000);

    return new Date(newTimestamp);
};