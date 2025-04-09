import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../redux/languageSlice';

const LanguageSwitcher = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const lang = e.target.value;
        dispatch(changeLanguage(lang));
        localStorage.setItem("language", lang);
    };

    return (
        <select
            onChange={handleChange}
            defaultValue={localStorage.getItem("language") || "vi"}
            className="form-select form-select-sm ms-3"
        >
            <option value="vi">🇻🇳</option>
            <option value="en">🇺🇸</option>
        </select>
    );
};

export default LanguageSwitcher;
