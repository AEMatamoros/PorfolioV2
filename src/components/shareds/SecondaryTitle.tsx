import React from 'react';

export default function SecondaryTitle({
    subtitle,
    color,
}: {
    subtitle: string;
    color?: string;
}) {
    return (
        <h2 className={`font-bold ${color ? color : 'text-blue-500'}`}>
            {subtitle}
        </h2>
    );
}
