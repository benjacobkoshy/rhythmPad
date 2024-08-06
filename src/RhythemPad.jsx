import { useEffect, useState } from "react";
import PadButton from "./padButton";

const RhythmPad = () => {
    const [activePad, setActivePad] = useState(null);

    const sounds = [
        { label: 'Kick', sound: '/sounds/kick.wav', key: '1' },
        { label: 'Snare', sound: '/sounds/snare.wav', key: '2' },
        { label: 'Hi-hat', sound: '/sounds/hi-hat.wav', key: '3' },
        { label: 'Crash-1', sound: '/sounds/crash.wav', key: '4' },
        { label: 'Crash-2', sound: '/sounds/crash-2.wav', key: '5' },
        { label: 'Tom-Tom', sound: '/sounds/tom-tom.wav', key: '6' },
        { label: 'Floor-Tom', sound: '/sounds/floor-tom.wav', key: '7' },
        { label: 'Hi-hat-2', sound: '/sounds/hi-hat-2.wav', key: '8' },
    ];

    const playSound = (sound, index) => {
        const audio = new Audio(sound);
        audio.play();
        setActivePad(index);
        setTimeout(() => setActivePad(null), 200); // Reset after 200ms
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            const key = e.key;
            const soundIndex = sounds.findIndex(sound => sound.key === key);
            if (soundIndex !== -1) {
                playSound(sounds[soundIndex].sound, soundIndex);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [sounds]);

    return (
        <div className="rhythm-pad">
            <div className="display">
                <strong>Hip-Hop Rhythm Pad</strong>
            </div>
            <div className="pads-container">
                {sounds.map((sound, index) => (
                    <PadButton
                        key={index}
                        label={`${sound.label}`}
                        sound={sound.sound}
                        isActive={activePad === index}
                        onClick={() => playSound(sound.sound, index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default RhythmPad;
