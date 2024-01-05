import './index.css'

function Project(props) {
  const {eachProject} = props
  const {title,description,imageUrl,projectUrl,index} = eachProject
  return (
    <li className="project-card" key={index}>
      <div>
    <h2>{title}</h2>
    <p class = 'description'>{description}</p>
    <a href={projectUrl} target = "_blank">View Project</a>
    </div>
    <img src={imageUrl} className = 'img-styling' alt={title} />
  </li>
  );
}

export default Project