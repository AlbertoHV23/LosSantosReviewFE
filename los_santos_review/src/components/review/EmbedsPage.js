import React from 'react'

function EmbedsPage(props){
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={props.url} allowfullscreen></iframe>
    </div>
  )
}

export default EmbedsPage;