import React from 'react'

function Store({store}) {
    // console.log(store)


    return (
    <tr>
        <td className="row-name">
            <span>{store.name}</span>
        </td>
        <td>
            <a href={store.image} target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            <span>{store.season}</span>
        </td>
        <td>
            {/* <a href={store.url}>{store.episode}</a> */}
            <span href={store.url}>{store.episode}</span>
        </td>
    </tr>
    );
}

export default Store