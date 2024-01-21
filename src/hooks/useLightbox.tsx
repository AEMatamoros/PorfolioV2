import React, { useState } from 'react';

export default function useLightbox() {
    const [showLightBox, setShowLightBox] = useState(false);
    const [template, setTemplate] = useState(<h1>Lightbox</h1>);
    const handleLightboxShow = () => {
        setShowLightBox(!showLightBox);
    };
    return {
        handleLightboxShow,
        setTemplate,
        Lightbox: (
            <div
                className={`backdrop ${!showLightBox && 'is-hidden'}`}
                data-modal
                onClick={() => setShowLightBox(!showLightBox)}
            >
                <div className="modal sm:w-11/12 md:w-6/12 lg:w-6/12 xl:w-6/12">
                    {template}
                </div>
            </div>
        ),
    };
}
