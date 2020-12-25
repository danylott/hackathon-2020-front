import { Button, Tooltip } from 'antd';
import { GiftOutlined } from '@ant-design/icons';
import React from "react";
import './styles.css'
import { useHistory } from "react-router-dom";


export default function WishlistBtn(){
    const history = useHistory();
    return (
        <div className={'wishlistBtn'}>
        <Button style={{ background: "red", borderColor: "red" }} type="primary" icon={<GiftOutlined />}
                onClick={ () => history.push('/wishlist')}>
            Wishlist
        </Button>
            </div>
        )

}
