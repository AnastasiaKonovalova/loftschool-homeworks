import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import styles from './MailList.module.css';


class MailList extends Component{
    truncate = (str, maxlength) => {
        return (str.length > maxlength) ?
          str.slice(0, maxlength - 3) + '...' : str;
    }

    render(){
        const {data, match, purpose} = this.props;
        return (
            <div className={`${styles.container} t-${purpose}-list`}>
                {data.map(letter => 
                    <Link 
                        to={`${match.path}/${letter.id}`} 
                        key={letter.id} 
                        className={styles.link}
                    >
                        {this.truncate(letter.body, 60)}
                    </Link>
                )}
            </div>
        )
    }
}

export default withRouter(MailList);
