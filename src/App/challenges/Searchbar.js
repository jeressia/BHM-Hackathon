import React, { useState } from 'react'

export const Searchbar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    const countries = [

        { id: 1, name: "Savings" },
        { id: 2, name: "Debt-Free" },
        { id: 3, name: "Credit Score Growth" },
        { id: 4, name: "Investment" }
    ];

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        setFilteredCountries(
            countries.filter((country) =>
                country.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    if (searchInput.length > 0) {
        countries.filter((country) => {
            return country.name.match(searchInput);
        });
    }

    return <>
        <form>
            <input
                type="text"
                placeholder="search"
                value={searchInput}
                onChange={handleChange}
            />
            <button type='submit'>
                search
            </button>
        </form>
        <ul>
            {countries.map((i) => (
                <li key={i.id}>{i.name}</li>
            ))}
        </ul>
    </>


    // return <div>

    //     <input
    //         type="text"
    //         placeholder="Debt Free"
    //         onChange={handleChange}
    //         value={searchInput} />

    //     <table>

    //         <tbody>
    //             {filteredCountries.map((country) => (
    //                 <tr>
    //                     <td>{country.name}</td>
    //                 </tr>
    //             ))}
    //         </tbody>

    //     </table>
    //     <form>
    //         <button type='submit' >
    //             <img src=''
    //                 className='' />
    //         </button>
    //     </form>

    // </div>
}
