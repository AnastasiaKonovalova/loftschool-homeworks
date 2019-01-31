import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { isLoading, data, error } = this.props;
    if(isLoading)return <div>Данные загружаются</div>;
    if(error) return <div>Ошибка загрузки</div>;
    if(data){
      return (
        <div className={cx(styles.root, 't-followers')}>
          { 
            data.map(follower => (
              <div className={styles.follower} key={follower.id}>
                <img className={styles.followerImg} src={follower.avatar_url} alt={follower.id}/>
                <p className={styles.followerLogin}>{follower.login}</p>
              </div>
            ))
          }
        </div>
      );
    } else return <div className={cx(styles.root, 't-followers')}/>
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.followers.isLoading,
  data: state.followers.data,
  error: state.followers.error
})

// Используйте поля data, isLoading из стейта
export default connect(mapStateToProps)(Followers);
