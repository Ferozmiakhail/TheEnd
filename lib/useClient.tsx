// useClient.tsx (rename your file to this)

import { useState, useEffect } from 'react';

export function useClient() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}
