import PropTypes from "prop-types";
import Boy from"../../assets/boy2.png"
function Blogs({ blogs }) {
  const { title, coverImage,author ,postedDate} = blogs;

  return (
    <div>
      <img className="" src={coverImage} alt={title} />
      <div className="flex justify-between">
        <div className="flex ">
          <img className="w-14" src={Boy} alt="" />

          <div className="ml-6">
          <h3 className="text-2xl">{author.name}</h3>
          <p>{postedDate}</p>
          </div>

          <div>


          </div>
        </div>
        <div className=""></div>
      </div>

      <h2 className="text-2xl">{title}</h2>
      <p>#{title}</p>
    </div>
  );
}
Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
};
export default Blogs;
