import React from 'react'

const Member = ({team, name}) => {
  return (
    <div>
        <div class="member">
            <p>{team} {name}</p>
        </div>
    </div>
  )
}

export default Member