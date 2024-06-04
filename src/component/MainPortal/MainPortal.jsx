
const PostBox = ({ element }) => {
  return (
    <div className="post_box p-4 border rounded-lg shadow-md bg-white">
      <div className="post_profile flex items-center mb-4">
        <div className="profile_img mr-4">
          <div className="img_box w-16 h-16 overflow-hidden rounded-full">
            <img src="logo.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="about_box">
          <h6 className="text-lg font-semibold">{element.std_email}</h6>
        </div>
        <div className="profile_menu ml-auto flex space-x-4">
          <span
            className="profile_plus cursor-pointer"
            // onClick={() => add_friend(element._id, element.std_email)}
            id={`friend_${element._id}`}
          >
            <i className="fa-solid fa-user-plus"></i>
          </span>
          <span className="profile_ok cursor-pointer" >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </div>
      </div>
      <div
        className="profile_delete cursor-pointer text-red-500"
        id="profile_delete"
        // onClick={() => profile_delete(element._id)}
      >
        <span>
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>
      <div className="post_caption my-4">
        <h5 className="text-xl font-semibold">{element.caption}</h5>
      </div>
      <div className="post_img mb-4">
        <img src={element.img_url} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="post_commit flex justify-between items-center mb-4">
        <div
          className="post_icon flex items-center cursor-pointer"
          // onClick={() => like(element._id)}
          id="like"
        >
          <span className="mr-2">
            <i className="fa-regular fa-thumbs-up"></i>
          </span>
          like <span id={`like_${element._id}`} className="ml-2">{element.like_count}</span>
        </div>
        <div className="post_icon flex items-center cursor-pointer" 
        // onClick={() => commit(element._id)}
        >
          <span className="mr-2">
            <i className="fa-regular fa-comment"></i>
          </span>
          Comment
        </div>
        <div className="post_icon flex items-center cursor-pointer" id="share">
          <span className="mr-2">
            <i className="fa-regular fa-share-from-square"></i>
          </span>
          Share
        </div>
      </div>
      <div className="commit_dropDown" id={`commit_${element._id}`}>
        <div className="commit_input mb-2">
          <input
            type="text"
            placeholder="Enter Comment"
            id={`commit_input_${element._id}`}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="commit_button">
          <button
            type="button"
            // onClick={() => commit_dropDown(element._id)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Post Comment
          </button>
        </div>
      </div>
      <div id={`commitsDiv_${element._id}`} className="mt-4">
        {/* Render commits here */}
      </div>
    </div>
  );
};

export default PostBox;
