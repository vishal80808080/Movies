import React from 'react';
import { img_300, unavailable } from '../../Config/Config';
import "./SingleContent.css";
import { Badge } from '@mui/material';
import ContentModal from '../ContentModal/ContentModal';



// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component


/**
 * 
 */
const SingleContent = (props,media_type,id) => {
    return <ContentModal media_type={media_type} id={id} >
        <Badge badgeContent={props.vote_average} color={props.vote_average>7 ? 'primary':'secondary'}/>
    <img className='poster' src={props.poster ? `${img_300}/${props.poster}` : unavailable} alt={props.title} />
    <b className="title">{props.title}</b>
    <span className='subtitle'>{props.media_type==="Tv"?"Tv Series":"Movie"}</span>
    <span className="subtitle">{props.date}</span>
    </ContentModal>;
}


// #endregion

export default SingleContent;