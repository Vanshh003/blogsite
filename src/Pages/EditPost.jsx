import React,{useState,useEffect} from 'react'
import Container from '../Components/Container/Container'
import PostForm from '../Components/post-form/PostForm'
import appWriteService from '../Appwrite/Conf'
import { useNavigate,useParams } from 'react-router-dom'


function EditPost() {
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      if(slug){
        appWriteService.getPost(slug).then((post)=>{
            if(post){
                setPosts(post)
            }
            else{
                navigate("/")
            }
        })
      }
    }, [slug,navigate])
    
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost
