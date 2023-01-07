import './singlePost.css';

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='singlePostImg' />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Ozgur</b></span>
                    <span className="singlePostDate">25 Minute ago</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos ut quam consequuntur a repellendus delectus repellat provident corrupti saepe fugiat ipsum doloremque, aspernatur sint. A eligendi ab reiciendis quo, ipsum maiores minima porro ex qui deleniti exercitationem voluptatibus, assumenda quis esse consectetur adipisci minus consequuntur! Possimus voluptates earum voluptas deserunt eveniet eaque, minus tempora delectus accusamus, dolorum maxime distinctio adipisci dolores deleniti, ut officia vitae illo totam necessitatibus sit autem magnam. Aperiam consequatur quasi ab nulla, pariatur ipsum. Atque veniam officia perspiciatis quae ipsa soluta est possimus, provident quia incidunt consequatur, rem quibusdam laborum exercitationem vitae cum nemo aliquid.</p>
            </div>
        </div>
    )
}
