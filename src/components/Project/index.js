import './index.css'

function Project(props) {
  const {eachProject} = props
  const {title,description,imageUrl,projectUrl,index} = eachProject
  return (
    <li className="project-card" key={index}>
      <div>
    <h2>{title}</h2>
    <p class = 'description'>{description}</p>
    <a href={projectUrl} target = "_blank" className = 'link-style'>View Project</a>
    </div>
    <div>   
       <img src={imageUrl} className = 'img-styling' alt={title} />
    </div>
  </li>
  );
}

export default Project