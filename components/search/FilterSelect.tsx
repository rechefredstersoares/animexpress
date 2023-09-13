"use client";
import { FC } from "react";
import Select from "react-select";

interface Props {
    options: readonly { value: string; label: string }[];
    placeholder: string;
    value?: any;
    onChange: (selectedOption: string | null) => void;
}

const FilterSelect: FC<Props> = ({ options, placeholder, value, onChange }) => {
    return (
        <Select
            isClearable
            placeholder={placeholder}
            options={options}
            onChange={onChange}
            value={value}
            styles={{
                control: (styles) => ({
                    ...styles,
                    border: "2px solid #0cbc4d",
                    borderRadius: 999,
                    padding: "0px",
                }),
                placeholder: (styles) => ({
                    ...styles,
                    color: "#0cbc4d",
                    fontSize: "16px",
                }),
                option: (styles) => ({ ...styles, fontSize: "16px" }),
                menu: (styles) => ({
                    ...styles,
                    width: "fit-content",
                }),
                dropdownIndicator: (styles) => ({
                    ...styles,
                    color: "#0cbc4d",
                }),
                indicatorSeparator: (styles) => ({
                    ...styles,
                    background: "#0cbc4d",
                }),
            }}
            theme={(theme) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary: "#0cbc4d",
                    primary25: "#FFFFFf",
                },
            })}
        />
    );
};

export default FilterSelect;
