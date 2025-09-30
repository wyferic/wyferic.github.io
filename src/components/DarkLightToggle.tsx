import 'rsuite/dist/rsuite-no-reset.min.css';
import { useEffect, useState } from 'react';
import { Toggle } from 'rsuite';
import { IoSunny, IoMoon } from 'react-icons/io5';

export const DarkLightToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {  
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);
    
	return (
        <Toggle 
            unCheckedChildren={<IoSunny color="#fff" size={16} />}
            checkedChildren={<IoMoon color="#000" size={16} />}
            onChange={(checked) => { setIsDarkMode(checked) }} 
            color="green"
            className="m-auto"/>
	);
};
