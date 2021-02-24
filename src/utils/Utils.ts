export const zeroPad = (num: number | string) => String(num).padStart(2, '0');

export const formatSeconds = (seconds: number) => {
    let minutesVal = Math.floor(seconds/60);
    let secondsVal = (seconds%60);

    return {
        minutes: minutesVal,
        seconds: secondsVal,
        format: `${zeroPad(minutesVal)}:${zeroPad(secondsVal)}}`
    };
}

export const randomNumber = (max?: number, min?: number, round?: boolean) => {
    let random;

    if(round === undefined) {
        round = true;
    }

    if(max && min) {
        random = Math.random() * (max - min) + min;
    } else {
        random = Math.random();
    }

    return round === true ? Math.floor(random) : random;
}