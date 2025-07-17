import React from "react";

export function Post({headline, text, avatar})
{
    return (
        <div className="post">
            <img src={avatar} alt="Avatar" className="avatar"  />
            <h2>{headline}</h2>
            <p>{text}</p>
        </div>
    );
}
export default Post