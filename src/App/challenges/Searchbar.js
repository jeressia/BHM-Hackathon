import React, { useState } from 'react'

export const Searchbar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [filteredChallenge, setFilteredChallenge] = useState([]);

    const challenge = [

        { id: 1, name: "Savings" },
        { id: 2, name: "Debt-Free" },
        { id: 3, name: "Credit Score Growth" },
        { id: 4, name: "Investment" }
    ];

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        setFilteredChallenge(
            challenge.filter((country) =>
                country.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    if (searchInput.length > 0) {
        challenge.filter((country) => {
            return country.name.match(searchInput);
        });
    }

    return <div className='search_bar_flex'>

        <input
            type="text"
            placeholder="Debt Free"
            onChange={handleChange}
            value={searchInput} />

        <form>
            <button type='submit' >
                <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-1024.png'
                    alt='icon' className='img_search' />
            </button>
        </form>
        <table>

            <tbody>
                {filteredChallenge.map((challenge) => (
                    <tr>
                        <td>{challenge.name}</td>
                    </tr>
                ))}
            </tbody>

        </table>


    </div>
}
