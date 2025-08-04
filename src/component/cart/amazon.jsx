import React from 'react'
import list from './data'
import Card from './card'

function Amazon({handleClick}) {
    console.log(list)
    return (
        <section>
            {
                list.map((item)=>{
                    return(
                        <Card item={item} key={item.id} handleClick={handleClick}/>
                    )
                    
                })
            }
        </section>
    )
}

export default Amazon
