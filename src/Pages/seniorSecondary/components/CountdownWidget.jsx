import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function CountdownWidget() {
    const [timeLeft, setTimeLeft] = useState(null);
    const [isLaunchDay, setIsLaunchDay] = useState(false);
    const [shouldDisplay, setShouldDisplay] = useState(true);

    useEffect(() => {
        const targetDate = new Date('2026-01-01T00:00:00');
        
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            // If the date has passed (negative difference)
            if (difference < 0) {
                const oneDayInMs = 24 * 60 * 60 * 1000;
                
                // Check if it's still launch day (within 24 hours after launch)
                if (Math.abs(difference) < oneDayInMs) {
                    setIsLaunchDay(true);
                    setShouldDisplay(true);
                } else {
                    // After launch day, hide the component
                    setShouldDisplay(false);
                }
                return null;
            }

            // Calculate time remaining
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            return { days, hours, minutes, seconds };
        };

        // Initial calculation
        const initialTime = calculateTimeLeft();
        setTimeLeft(initialTime);

        // Update every second
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Don't render anything if component should disappear
    if (!shouldDisplay) {
        return null;
    }

    // Show launch day message
    if (isLaunchDay) {
        return (
            <div className="mb-6 inline-block px-8 py-4 bg-primary rounded-lg shadow-lg animate-pulse">
                <p className="text-white font-bold text-2xl tracking-wide flex items-center gap-3">
                    <Calendar className="w-8 h-8" />
                    🎉 IT'S LAUNCH DAY! 🎉
                </p>
            </div>
        );
    }

    // Show countdown
    if (!timeLeft) {
        return (
            <div className="mb-6 inline-block px-6 py-2">
                <p className="text-primary font-bold text-lg tracking-widest flex items-center gap-4">
                    <Calendar />
                    COMING JANUARY 2026
                </p>
            </div>
        );
    }

    return (
        <div className="mb-6 inline-block">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="text-primary font-bold text-sm tracking-widest flex items-center gap-2 mb-3 justify-center">
                    <Calendar className="w-5 h-5" />
                    COMING JANUARY 2026
                </p>
                <div className="flex items-center gap-4 justify-center">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <Separator />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <Separator />
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <Separator />
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>
            </div>
        </div>
    );
}

function TimeUnit({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] border border-white/30">
                <span className="text-white font-bold text-2xl md:text-3xl tabular-nums">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="text-white/80 text-xs mt-1 font-semibold uppercase tracking-wide">
                {label}
            </span>
        </div>
    );
}

function Separator() {
    return (
        <span className="text-white font-bold text-2xl pb-6">:</span>
    );
}