import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'


function Chat ({ userData, fetchUsers }) {
    useEffect(() => {
      fetchUsers()
    }, [])
    return userData.loading ? (
      <h2>Loading</h2>
    ) : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
      <div>
        <h2>Users To Chat With</h2>
        
        <div>
          {userData &&
            userData.users &&
            userData.users.map(user => <a href= "/chatwith"><p>{user.name}</p></a>
            
            )}
        </div>
      </div>
    )
  }

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
