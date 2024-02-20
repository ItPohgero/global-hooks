import React from 'react'

interface Props {
    sparator?: any | React.ReactNode;
}

/**
 * Custom hook that generates a visual loading indicator by adding separators to a string.
 * The separator defaults to a dot ('.') but can be customized using the `sparator` prop.
 * @param {Object} props - The props object.
 * @param {string} props.sparator - The separator used to visually represent the loading indicator.
 * @returns {Object} An object containing the `speeder` string for the loading indicator.
 */
const useSpeeder = (props: Props = {}): { speeder: any } => {
    const { sparator = '.' } = props
    // State to hold the loading indicator string
    const [speeder, setSpeeder] = React.useState<string>('');

    React.useEffect(() => {
        // Start an interval to update the loading indicator string
        const interval = setInterval(() => {
            setSpeeder((current) => {
                // Reset the loading indicator string after 3 characters
                if (current.length === 3) return '';
                // Append the separator to the loading indicator string
                return `${current}${sparator}`;
            });
        }, 500);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures the effect runs only once

    // Return the loading indicator string
    return { speeder };
};

export default useSpeeder;
