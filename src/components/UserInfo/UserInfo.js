import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { isLoading, data, error } = this.props;
    if(isLoading)return <div>Данные загружаются</div>;
    if(error) return <div>Ошибка загрузки</div>;
    if(data){
      return (
        <div className={styles.root}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={data.avatar_url} alt='user info'/>
          </div>
          <div>
            <p className='t-user-name'>{data.name}</p>
            <p className='t-user-bio'>{data.bio}</p>
          </div>
        </div>
      );
    } else return <div className={styles.root}/>
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
  data: state.user.data,
  error: state.user.error
})
// Используйте поля data, isLoading из стейта
export default connect(mapStateToProps)(UserInfo);
