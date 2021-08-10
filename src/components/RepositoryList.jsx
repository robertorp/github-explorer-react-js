import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/robertorp/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
       <RepositoryItem repository={repository}></RepositoryItem>
       <RepositoryItem repository={repository}></RepositoryItem>
       <RepositoryItem repository={repository}></RepositoryItem>
       <RepositoryItem repository={repository}></RepositoryItem>
       <RepositoryItem repository={repository}></RepositoryItem>
      </ul>
    </section>
  )
}