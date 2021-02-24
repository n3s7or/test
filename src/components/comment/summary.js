import React from "react";

// This component could be split in two

export default function Summary({comments, reactions}) {
    return (
        <div className="comment-summary-mobile border-top">
            <p>
                {reactions >= 1 &&
                    <span className="circle" style={{backgroundColor: "blue"}}/>
                }
                {reactions >=5 &&
                    <span className="circle" style={{backgroundColor: "red"}}/>
                }
                {reactions >=10 &&
                    <span className="circle" style={{backgroundColor: "yellow"}}/>
                }
            </p>
            {reactions > 0 &&
                <p className="color-primary">{reactions}</p>
            }

            <p className="push" id="comments-summary">{comments > 0 &&
            <span>{comments} comentario{comments > 1 ? 's' : ''}</span>
            }
            </p>
        </div>
    )
}