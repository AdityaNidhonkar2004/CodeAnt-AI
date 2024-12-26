import RepositoryCard from "./RepositoryCard";

const RepositoryList = ({ repositories }) => {
  
  return (<div>
    {repositories.map((repo, index) => (
      <RepositoryCard key={index} {...repo} />
    ))}
  </div>)
}

export default RepositoryList;
