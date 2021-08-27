import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import Error from '../error';
import { menuLoaded, menuRequested, menuError } from '../../actions';
import Spinner from '../spinner';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();
    
        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => {
                console.log(res);
                this.props.menuLoaded(res)
            })
            .catch((res)=> this.props.menuError(res))
    }

    render() {
        const { menuItems, loading, error, errorStatus } = this.props;
        if (loading) {
            return <Spinner/>
        }
        
        if (error) {
            return (
                <Error statusErr={errorStatus} />
            ) 
            
        }
        
        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                    })
                }  
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        errorStatus: state.errorStatus,
    }
}
const mapDispatchToProps =  {
    
        menuLoaded,
        menuRequested,
        menuError,
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));