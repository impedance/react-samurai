import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      const action = updateNewPostTextActionCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator)
    }
  }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)