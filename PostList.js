import React, {useEffect, useReducer} from "react";
import axios from 'axios';
import Post from "./Post";
import PostListReducer, {SET_LIST} from "./PostList.reducer";
export default () => {
    
    //const [list, setList] = useState([]);
    const [reducerList, dispatch] = useReducer(PostListReducer, []);
    const getList = (async()=>{
       const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts');
       dispatch({
        type: SET_LIST,
        list: data
       });
    }

    useEffect(()=>{
        getList();
    }, []);
    const renderPost = (post, index) => {
        return(
          <Post key={index} post={post}/>
        );
    }

    return(
    <div>
        {reducerList.length > 0 && reducerList.map(renderPost)}
    </div>
    )
};