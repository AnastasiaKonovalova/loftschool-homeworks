import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import styles from './AppRouter.module.css';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';

import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';

export default class AppRouter extends Component{
    render(){
        const {match} = this.props;
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={`${styles.navList} t-nav-list`}>
                            <li className={styles.navElement}>
                                <Link to={`${match.url}`} className={`${styles.link} t-link-home`}>Home</Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link to={`${match.url}/inbox`} className={`${styles.link} t-link-inbox`}>Inbox</Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link to={`${match.url}/outbox`} className={`${styles.link} t-link-outbox`}>Outbox</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            <Switch>
                                <Route path={`${match.path}/`} exact render={()=>'Home'}/>
                                <Route path={`${match.path}/inbox`} render={()=>'Inbox'}/>
                                <Route path={`${match.path}/outbox`} render={()=>'Outbox'}/>
                            </Switch>
                        </h3>
                        <Switch>
                            <Route path={`${match.path}/`} exact component={Home}/>
                            <Route path={`${match.path}/inbox`} exact component={InboxList}/>
                            <Route path={`${match.path}/outbox`} exact component={OutboxList}/>
                            <Route path={`${match.path}/inbox/:id`} component={InboxMail}/>
                            <Route path={`${match.path}/outbox/:id`} component={OutboxMail}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}