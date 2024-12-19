import React, { useState } from 'react';
import { notes } from './notes';

const NotesPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div style={{ padding: 0, margin: 0, fontFamily: 'Arial, sans-serif' }}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {notes.map((note, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <div
                            onClick={() => handleClick(index)}
                            style={{
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                textAlign: 'left',
                            }}
                        >
                            {note.header}
                        </div>
                        {activeIndex === index && (
                            <div
                                style={{
                                    marginTop: '5px',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    whiteSpace: 'pre-line',
                                    lineHeight: '1.6',
                                    fontSize: '14px',
                                }}
                            >
                                {note.detail}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesPage;
