import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Meta, Story } from '@storybook/react'
import { Gallery, Item } from '..'

const storyMeta: Meta = {
  title: 'Demo/Cropped',
}

export const cropped: Story = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '150px',
    height: '150px',
  }
  return (
    <Gallery>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 0fr)',
          gridGap: 10,
        }}
      >
        <Item
          cropped
          original="https://source.unsplash.com/IXP_xjMntlc/1920x2879"
          thumbnail="https://source.unsplash.com/IXP_xjMntlc/640x959"
          width="1920"
          height="2879"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://source.unsplash.com/IXP_xjMntlc/640x959"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
          width="1600"
          height="1600"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
          width="1600"
          height="1068"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
          thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
          width="1600"
          height="1066"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
          width="1600"
          height="1066"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
          width="1600"
          height="1066"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
      </div>
    </Gallery>
  )
}

export default storyMeta
