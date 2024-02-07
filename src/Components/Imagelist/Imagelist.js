import React from 'react'
import "./Imagelist.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { gallery } from '../../Static/db';
const Imagelist = () => {
  return (
    <div className='imagelist'>
      <ImageList >
        {
          gallery.map((gallery) => {
            return (
              <>
                {
                  gallery.imglist.map((item) => {
                    return (

                      <ImageListItem key={item.bookImgs} cols={1} >
                        <img
                          srcSet={`${item.bookImgs}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.bookImgs}?w=248&fit=crop&auto=format`}
                          alt={item.subtitle}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          title={item.subtitle}
                          subtitle={item.author}
                          className='imagelist_title'
                          actionIcon={
                            <IconButton
                              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                              aria-label={`info about ${item.subtitle}`}
                            >
                              <InfoIcon />
                            </IconButton>
                          }
                        />
                      </ImageListItem>
                    )
                  })
                }
              </>
            )
          })
        }
      </ImageList>
    </div>
  )
}

export default Imagelist