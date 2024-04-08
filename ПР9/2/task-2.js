const convertMsToDays = (milliseconds) => {
    return Math.round(milliseconds / (1000 * 60 * 60 * 24));
};

const getDaysBeforeBirthday = (nextBirthdayDate) => {
    const now = new Date();
    const nextBirthdayMs = new Date(nextBirthdayDate).setFullYear(now.getFullYear());

    if (nextBirthdayMs < now) {
        nextBirthdayMs.setFullYear(now.getFullYear() + 1);
    }

    return convertMsToDays(nextBirthdayMs - now);
};