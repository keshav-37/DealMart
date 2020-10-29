import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {sections: [
  {
    title: 'hats',
    imageUrl: 'https://www.brixton.com/pub/media/catalog/category/HO19-GIFT-GUIDE-CLP-HAT-SHOP.jpg',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://previews.123rf.com/images/nitikorn123rf/nitikorn123rf1710/nitikorn123rf171000796/88368023-collection-of-leather-jackets-on-hangers-in-the-shop-for-biker-s-or-motorcycle-jackets-.jpg',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1170/9984/products/jeimi3_800x.jpg?v=1589569866',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://wallpapercave.com/wp/wp1810749.jpg',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
]}

    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory;
