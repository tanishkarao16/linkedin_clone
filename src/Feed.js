import React, { useEffect, useState } from 'react';
import './Feed.css';
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase'; 
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    const user = useSelector(selectUser);

    
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const sendPost = (e) => {
        e.preventDefault();

        // Add a new post to Firestore
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Clear the input field after sending the post
        setInput('');
    };

    useEffect(() => {
        // Listen for changes in the "posts" collection
         db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => {
            // Update the state with the latest posts
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })));
        });
        
    }, []);

    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <Create />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOption Icon={Image} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDay} title="Write Article" color="#7FC15E"/>
                </div>
            </div>
            {/* Render each post */}
            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
        </div>
    );
}

export default Feed;
