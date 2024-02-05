import { useState } from 'react';

export default function useShowContactForm() {
    const [showEmailForm, setShowEmailForm] = useState(false);
    const handleContactformOpen = () => {
        setShowEmailForm(true);
    };
    const handleContactformClose = () => {
        setShowEmailForm(false);
    };

    return { handleContactformClose, handleContactformOpen, showEmailForm };
}
